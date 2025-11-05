#!/usr/bin/env tsx

/**
 * Script: Check Ownership Configuration
 * Author: AR
 * Created: 2025-11-05
 * Description: Validates ownership configuration and project filtering
 */

import { getSiteConfig } from '../src/lib/utils/config';
import { getFilteredProjects } from '../src/lib/utils/owner-filter';
import { PROJECTS } from '../src/lib/constants/projects';
import { TEAM_MEMBERS } from '../src/lib/constants/team';

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

// Check if owner ID is valid
function validateOwner(ownerId: string): boolean {
  return TEAM_MEMBERS.some((member) => member.id === ownerId);
}

// Get project statistics for owner
function getProjectStats(ownerId: string) {
  const owned = PROJECTS.filter((p) => p.owner === ownerId);
  const contributed = PROJECTS.filter(
    (p) => p.owner !== ownerId && p.contributors?.includes(ownerId)
  );
  const total = new Set([...owned.map((p) => p.id), ...contributed.map((p) => p.id)]).size;

  return { owned, contributed, total };
}

// Check for projects without owner
function getOrphanProjects() {
  return PROJECTS.filter((p) => !p.owner);
}

// Check for contributors not in team
function getInvalidContributors() {
  const invalid: Array<{ projectId: string; contributor: string }> = [];
  const validIds = TEAM_MEMBERS.map((m) => m.id);

  PROJECTS.forEach((project) => {
    if (project.contributors) {
      project.contributors.forEach((contributor) => {
        if (!validIds.includes(contributor)) {
          invalid.push({ projectId: project.id, contributor });
        }
      });
    }
  });

  return invalid;
}

// Main validation function
async function checkOwnership() {
  log('\n🔍 Ownership Configuration Validator\n', 'bright');

  // Get site configuration
  const config = getSiteConfig();

  log('📋 Current Configuration:', 'blue');
  log(`  Mode: ${process.env.NEXT_PUBLIC_MODE || 'not set'}`, 'cyan');
  log(`  Site Type: ${config.siteType}`, 'cyan');
  log(`  Owner: ${config.owner || 'none (team site)'}`, 'cyan');
  log(`  Is Team: ${config.isTeam}`, 'cyan');
  log(`  Is Personal: ${config.isPersonal}`, 'cyan');
  log(`  Is Internal: ${config.isInternal}`, 'cyan');

  // Validation checks
  let errors = 0;
  let warnings = 0;

  log('\n🧪 Running Validation Checks...\n', 'yellow');

  // Check 1: If personal site, owner must be set
  if (config.isPersonal && !config.owner) {
    log('❌ Personal site but no owner configured!', 'red');
    log('   Set NEXT_PUBLIC_OWNER in .env.local', 'cyan');
    errors++;
  } else if (config.isPersonal) {
    log('✅ Owner is configured for personal site', 'green');
  }

  // Check 2: If owner is set, must be valid team member
  if (config.owner && !validateOwner(config.owner)) {
    log(`❌ Owner "${config.owner}" is not a valid team member!`, 'red');
    log('   Valid IDs: ' + TEAM_MEMBERS.map((m) => m.id).join(', '), 'cyan');
    errors++;
  } else if (config.owner) {
    log(`✅ Owner "${config.owner}" is a valid team member`, 'green');
  }

  // Check 3: Orphan projects (no owner)
  const orphans = getOrphanProjects();
  if (orphans.length > 0) {
    log(`⚠️  ${orphans.length} project(s) without owner:`, 'yellow');
    orphans.forEach((p) => log(`   - ${p.title} (${p.id})`, 'cyan'));
    warnings++;
  } else {
    log('✅ All projects have owners', 'green');
  }

  // Check 4: Invalid contributors
  const invalidContributors = getInvalidContributors();
  if (invalidContributors.length > 0) {
    log(`❌ ${invalidContributors.length} invalid contributor(s) found:`, 'red');
    invalidContributors.forEach((ic) =>
      log(`   - Project: ${ic.projectId}, Contributor: ${ic.contributor}`, 'cyan')
    );
    errors++;
  } else {
    log('✅ All contributors are valid team members', 'green');
  }

  // Check 5: Project filtering results
  if (config.owner) {
    log('\n📊 Project Filtering Results:', 'blue');
    const stats = getProjectStats(config.owner);
    log(`  Owned: ${stats.owned.length} projects`, 'cyan');
    log(`  Contributed: ${stats.contributed.length} projects`, 'cyan');
    log(`  Total visible: ${stats.total} projects`, 'cyan');

    if (stats.total === 0) {
      log('⚠️  No projects will be visible for this owner!', 'yellow');
      warnings++;
    } else {
      log(`✅ ${stats.total} project(s) will be visible`, 'green');
    }

    log('\n  Owned Projects:', 'blue');
    stats.owned.forEach((p) => log(`    - ${p.title}`, 'cyan'));

    if (stats.contributed.length > 0) {
      log('\n  Contributed Projects:', 'blue');
      stats.contributed.forEach((p) => log(`    - ${p.title}`, 'cyan'));
    }
  }

  // Check 6: Test filtering function
  log('\n🧪 Testing Filtering Function:', 'blue');
  try {
    const filtered = getFilteredProjects();
    log(`✅ Filtering function works: ${filtered.length} projects returned`, 'green');
  } catch (error) {
    log(`❌ Filtering function error: ${error}`, 'red');
    errors++;
  }

  // Summary
  log('\n' + '='.repeat(50), 'blue');
  log('📊 Validation Summary', 'bright');
  log('='.repeat(50), 'blue');

  if (errors === 0 && warnings === 0) {
    log('✅ All checks passed!', 'green');
    log('   Your ownership configuration is valid.', 'cyan');
  } else {
    if (errors > 0) {
      log(`❌ ${errors} error(s) found`, 'red');
    }
    if (warnings > 0) {
      log(`⚠️  ${warnings} warning(s) found`, 'yellow');
    }
  }

  log('\n💡 Recommendations:', 'blue');
  if (config.isTeam) {
    log('  - This is a team site (shows all projects)', 'cyan');
    log('  - To test personal mode: Set NEXT_PUBLIC_OWNER in .env.local', 'cyan');
  } else if (config.isPersonal) {
    log('  - This is a personal site (filtered by owner)', 'cyan');
    log('  - Review the project list above to ensure it\'s correct', 'cyan');
  }

  log('\n📚 Documentation:', 'blue');
  log('  - Architecture: docs/design/OPTION-1-ARCHITECTURE.md', 'cyan');
  log('  - Team members: src/lib/constants/team.ts', 'cyan');
  log('  - Projects: src/lib/constants/projects.ts', 'cyan');

  // Exit with error code if there are errors
  if (errors > 0) {
    log('\n❌ Validation failed!', 'red');
    process.exit(1);
  } else if (warnings > 0) {
    log('\n✅ Validation passed with warnings', 'yellow');
    process.exit(0);
  } else {
    log('\n✅ Validation successful!', 'green');
    process.exit(0);
  }
}

// Run the script
checkOwnership().catch((error) => {
  console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
  console.error(error.stack);
  process.exit(1);
});

