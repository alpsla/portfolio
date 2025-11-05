#!/usr/bin/env tsx

/**
 * Script: Initialize Personal Portfolio
 * Author: AR
 * Created: 2025-11-05
 * Description: Interactive script to set up a personal portfolio from the template
 */

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { TEAM_MEMBERS, type TeamMember } from '../src/lib/constants/team';

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

// Helper to create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Promisified question
function question(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Log with colors
function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Main initialization function
async function initPersonalPortfolio() {
  log('\n🚀 Personal Portfolio Initialization\n', 'bright');
  log('This script will set up your personal portfolio from the template.\n', 'cyan');

  // Step 1: Select team member
  log('Available team members:', 'blue');
  TEAM_MEMBERS.forEach((member, index) => {
    log(`  ${index + 1}. ${member.name} (${member.id})`, 'cyan');
  });

  const memberIndex = await question('\nSelect your number (or type ID): ');
  
  let selectedMember: TeamMember | undefined;
  
  // Try as index first
  const index = parseInt(memberIndex, 10) - 1;
  if (index >= 0 && index < TEAM_MEMBERS.length) {
    selectedMember = TEAM_MEMBERS[index];
  } else {
    // Try as ID
    selectedMember = TEAM_MEMBERS.find((m) => m.id === memberIndex.trim());
  }

  if (!selectedMember) {
    log('❌ Invalid selection. Please run the script again.', 'red');
    rl.close();
    process.exit(1);
  }

  log(`\n✅ Selected: ${selectedMember.name} (${selectedMember.id})`, 'green');

  // Step 2: Confirm domain
  log(`\nDefault domain: ${selectedMember.id}.dev`, 'yellow');
  const customDomain = await question('Enter custom domain (or press Enter to use default): ');
  const domain = customDomain.trim() || `${selectedMember.id}.dev`;

  // Step 3: Confirm settings
  log('\n📋 Configuration Summary:', 'blue');
  log(`  Name: ${selectedMember.name}`, 'cyan');
  log(`  ID: ${selectedMember.id}`, 'cyan');
  log(`  Role: ${selectedMember.role}`, 'cyan');
  log(`  Domain: ${domain}`, 'cyan');
  log(`  Projects: Will show projects owned or contributed to by ${selectedMember.name}`, 'cyan');

  const confirm = await question('\nContinue with this configuration? (y/n): ');
  if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
    log('❌ Cancelled by user.', 'red');
    rl.close();
    process.exit(0);
  }

  // Step 4: Create .env.local
  log('\n📝 Creating .env.local...', 'yellow');
  
  const envContent = `# Personal Portfolio Configuration
# Generated: ${new Date().toISOString()}
# Owner: ${selectedMember.name} (${selectedMember.id})

# Site Configuration
NEXT_PUBLIC_MODE=external
NEXT_PUBLIC_OWNER=${selectedMember.id}
NEXT_PUBLIC_SITE_TYPE=personal
NEXT_PUBLIC_BASE_URL=https://${domain}

# Optional: Customize these
# NEXT_PUBLIC_GOOGLE_ANALYTICS=
# NEXT_PUBLIC_VERCEL_URL=
`;

  const envPath = path.join(process.cwd(), '.env.local');
  fs.writeFileSync(envPath, envContent);
  log('✅ .env.local created', 'green');

  // Step 5: Create personal config (if doesn't exist)
  const personalConfigPath = path.join(process.cwd(), 'config', 'personal-config.ts');
  
  if (fs.existsSync(personalConfigPath)) {
    log('\n⚠️  config/personal-config.ts already exists (not overwriting)', 'yellow');
  } else {
    log('\n📝 Creating config/personal-config.ts...', 'yellow');
    
    const personalConfigContent = `/**
 * Personal Portfolio Configuration
 * Owner: ${selectedMember.name} (${selectedMember.id})
 * Generated: ${new Date().toISOString()}
 * 
 * This file is gitignored and safe to customize.
 * See config/template-defaults.ts for all available options.
 */

import { PersonalConfig } from '../src/lib/types/config';

export const personalConfig: PersonalConfig = {
  owner: '${selectedMember.id}',
  name: '${selectedMember.name}',
  
  // Branding
  branding: {
    siteTitle: '${selectedMember.name} - QA Portfolio',
    tagline: '${selectedMember.role}',
    logo: '/logo.png', // Optional: Add your logo to public/
    favicon: '/favicon.ico',
  },
  
  // Social Links
  socials: {${selectedMember.linkedin ? `
    linkedin: '${selectedMember.linkedin}',` : ''}${selectedMember.github ? `
    github: '${selectedMember.github}',` : ''}
    // Add more social links as needed
  },
  
  // About Page Customization
  about: {
    introduction: \`${selectedMember.bio || 'Your introduction goes here...'}\`,
    
    // Optional: Add custom sections
    customSections: [
      // {
      //   title: 'Technical Skills',
      //   content: 'Your skills description...',
      // },
    ],
  },
  
  // Contact Information
  contact: {
    email: '${selectedMember.id}@example.com', // Update this!
    location: 'Your Location',
    availableForWork: true,
  },
  
  // Theme Customization (Optional)
  theme: {
    primaryColor: '#3b82f6', // Blue
    secondaryColor: '#8b5cf6', // Purple
    // See template-defaults.ts for more color options
  },
  
  // SEO
  seo: {
    description: '${selectedMember.role} portfolio showcasing QA automation and testing projects',
    keywords: ['QA', 'Automation', 'Testing', '${selectedMember.name}'],
  },
};

export default personalConfig;
`;

    fs.writeFileSync(personalConfigPath, personalConfigContent);
    log('✅ config/personal-config.ts created', 'green');
  }

  // Step 6: Success message
  log('\n🎉 Personal portfolio initialized successfully!', 'green');
  log('\nNext steps:', 'blue');
  log('  1. Review and customize config/personal-config.ts', 'cyan');
  log('  2. Update contact email in the config', 'cyan');
  log('  3. Start the dev server: npm run dev', 'cyan');
  log('  4. Visit: http://localhost:3000', 'cyan');
  log('  5. Deploy to Vercel or your hosting provider', 'cyan');

  log('\n📚 Documentation:', 'blue');
  log('  - Architecture: docs/design/OPTION-1-ARCHITECTURE.md', 'cyan');
  log('  - Customization: See config/template-defaults.ts for all options', 'cyan');
  log('  - Syncing: Run npm run sync:template to get template updates', 'cyan');

  log('\n✨ Your personal portfolio is ready!', 'green');

  rl.close();
}

// Run the script
initPersonalPortfolio().catch((error) => {
  console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
  process.exit(1);
});

