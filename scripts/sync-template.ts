#!/usr/bin/env tsx

/**
 * Script: Sync Template Updates
 * Author: AR
 * Created: 2025-11-05
 * Description: Syncs updates from the template repository while preserving personal config
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Files to preserve during sync (never overwrite)
const PRESERVE_FILES = [
  '.env.local',
  'config/personal-config.ts',
  'public/logo.png',
  'public/favicon.ico',
  'public/resume.pdf',
];

// Backup personal files
function backupPersonalFiles(): string[] {
  const backed up: string[] = [];
  const backupDir = path.join(process.cwd(), '.sync-backup');
  
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  PRESERVE_FILES.forEach((file) => {
    const srcPath = path.join(process.cwd(), file);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(backupDir, file);
      const destDir = path.dirname(destPath);
      
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      fs.copyFileSync(srcPath, destPath);
      backed up.push(file);
    }
  });

  return backed up;
}

// Restore personal files
function restorePersonalFiles(backedUp: string[]): void {
  const backupDir = path.join(process.cwd(), '.sync-backup');
  
  backedUp.forEach((file) => {
    const srcPath = path.join(backupDir, file);
    const destPath = path.join(process.cwd(), file);
    
    if (fs.existsSync(srcPath)) {
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(srcPath, destPath);
    }
  });

  // Clean up backup directory
  if (fs.existsSync(backupDir)) {
    fs.rmSync(backupDir, { recursive: true, force: true });
  }
}

// Check if git working directory is clean
function checkGitStatus(): boolean {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.trim() === '';
  } catch (error) {
    return false;
  }
}

// Get current branch
function getCurrentBranch(): string {
  try {
    return execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  } catch (error) {
    throw new Error('Failed to get current branch');
  }
}

// Check if upstream is configured
function checkUpstream(): string | null {
  try {
    const remote = execSync('git remote get-url upstream', { encoding: 'utf8' }).trim();
    return remote;
  } catch (error) {
    return null;
  }
}

// Main sync function
async function syncTemplate() {
  log('\n🔄 Template Sync Tool\n', 'bright');
  log('This script will sync updates from the template repository.\n', 'cyan');

  // Step 1: Check git status
  log('📋 Checking git status...', 'yellow');
  if (!checkGitStatus()) {
    log('❌ You have uncommitted changes. Please commit or stash them first.', 'red');
    log('   Run: git status', 'cyan');
    process.exit(1);
  }
  log('✅ Working directory is clean', 'green');

  const currentBranch = getCurrentBranch();
  log(`✅ Current branch: ${currentBranch}`, 'green');

  // Step 2: Check upstream remote
  log('\n📋 Checking upstream remote...', 'yellow');
  let upstream = checkUpstream();
  
  if (!upstream) {
    log('⚠️  Upstream remote not configured.', 'yellow');
    log('   The template repository URL should be configured as "upstream"', 'cyan');
    log('\n   To add upstream (replace URL with your template repo):', 'cyan');
    log('   git remote add upstream https://github.com/your-org/portfolio-template.git\n', 'blue');
    
    // For now, assume origin is the template
    log('   Using "origin" as template source for now...', 'yellow');
    upstream = 'origin';
  } else {
    log(`✅ Upstream configured: ${upstream}`, 'green');
  }

  // Step 3: Backup personal files
  log('\n📦 Backing up personal files...', 'yellow');
  const backedUp = backupPersonalFiles();
  log(`✅ Backed up ${backedUp.length} files:`, 'green');
  backedUp.forEach((file) => log(`   - ${file}`, 'cyan'));

  // Step 4: Fetch from upstream/template
  log('\n🌐 Fetching latest from template...', 'yellow');
  try {
    execSync(`git fetch ${upstream === 'origin' ? 'origin' : 'upstream'} main`, { stdio: 'inherit' });
    log('✅ Fetched successfully', 'green');
  } catch (error) {
    log('❌ Failed to fetch from template', 'red');
    restorePersonalFiles(backedUp);
    process.exit(1);
  }

  // Step 5: Merge changes
  log('\n🔀 Merging template updates...', 'yellow');
  try {
    execSync(`git merge ${upstream === 'origin' ? 'origin' : 'upstream'}/main --no-edit`, { stdio: 'inherit' });
    log('✅ Merged successfully', 'green');
  } catch (error) {
    log('⚠️  Merge conflicts detected!', 'yellow');
    log('\n📝 Next steps:', 'blue');
    log('   1. Resolve conflicts manually', 'cyan');
    log('   2. Run: git add <resolved-files>', 'cyan');
    log('   3. Run: git commit', 'cyan');
    log('   4. Run this script again to restore personal files', 'cyan');
    restorePersonalFiles(backedUp);
    process.exit(1);
  }

  // Step 6: Restore personal files
  log('\n📦 Restoring personal files...', 'yellow');
  restorePersonalFiles(backedUp);
  log('✅ Personal files restored', 'green');

  // Step 7: Install dependencies (if package.json changed)
  log('\n📦 Checking for dependency updates...', 'yellow');
  try {
    const diff = execSync('git diff HEAD@{1} HEAD -- package.json', { encoding: 'utf8' });
    if (diff.trim()) {
      log('   package.json was updated, running npm install...', 'cyan');
      execSync('npm install', { stdio: 'inherit' });
      log('✅ Dependencies updated', 'green');
    } else {
      log('✅ No dependency changes', 'green');
    }
  } catch (error) {
    log('⚠️  Could not check for dependency changes', 'yellow');
  }

  // Step 8: Success message
  log('\n🎉 Sync completed successfully!', 'green');
  log('\n📝 What was synced:', 'blue');
  log('   ✅ Latest template code', 'cyan');
  log('   ✅ New features and bug fixes', 'cyan');
  log('   ✅ Updated project catalog (if any)', 'cyan');
  log('   ✅ Documentation updates', 'cyan');

  log('\n🔒 What was preserved:', 'blue');
  log('   ✅ Your personal configuration', 'cyan');
  log('   ✅ Your environment variables', 'cyan');
  log('   ✅ Your custom assets (logo, resume)', 'cyan');

  log('\n⏭️  Next steps:', 'blue');
  log('   1. Test your site: npm run dev', 'cyan');
  log('   2. Review changes: git log --oneline -5', 'cyan');
  log('   3. Deploy updates to production', 'cyan');

  log('\n💡 Tip: Run this sync quarterly to stay up to date!', 'yellow');
}

// Run the script
syncTemplate().catch((error) => {
  console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
  process.exit(1);
});

