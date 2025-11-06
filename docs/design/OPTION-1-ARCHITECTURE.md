# Option 1 Architecture: Template Repository + Individual Portfolios

**Status:** Architecture Design  
**Version:** 1.0  
**Date:** 2025-11-05  
**Author:** AR (Rostislav Alpin)

---

## 🎯 Executive Summary

This document describes the **Template Repository + Individual Portfolios** architecture (Option 1) for transitioning from a single team portfolio to multiple independent personal portfolios while maintaining a shared internal team site.

**Key Objectives:**
- Enable each teammate to own an independent, portable portfolio
- Maintain a single source of truth for project data
- Allow teammates to take portfolios to future positions
- Filter content automatically based on ownership and sensitivity
- Support parallel development without disrupting current version

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Core Concepts](#core-concepts)
3. [Repository Structure](#repository-structure)
4. [Content Filtering Strategy](#content-filtering-strategy)
5. [Configuration System](#configuration-system)
6. [Deployment Strategy](#deployment-strategy)
7. [Sync & Update Mechanism](#sync--update-mechanism)
8. [Migration from Current Version](#migration-from-current-version)
9. [Teammate Workflows](#teammate-workflows)
10. [Technical Implementation](#technical-implementation)

---

## Architecture Overview

### High-Level Diagram

```
┌──────────────────────────────────────────────────────────┐
│  CORE TEMPLATE REPOSITORY (Company GitHub)               │
│  github.com/paramount-qa/portfolio-template              │
│                                                          │
│  Contains:                                               │
│  - All shared components                                 │
│  - Complete project catalog (PROJECTS array)             │
│  - Complete team data (TEAM_MEMBERS array)               │
│  - Filtering & sanitization logic                        │
│  - Build system & tooling                                │
│  - Scripts for initialization & sync                     │
└──────────────────────────────────────────────────────────┘
                         ↓
              (Fork/Template each teammate)
                         ↓
         ┌───────────────┼───────────────┐
         ↓               ↓               ↓
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ ALPIN'S REPO    │ │ ROBIN'S REPO    │ │ ROHIT'S REPO    │
│ (Public GitHub) │ │ (Public GitHub) │ │ (Public GitHub) │
│                 │ │                 │ │                 │
│ Owner:          │ │ Owner:          │ │ Owner:          │
│ rostialpin      │ │ rob1nalex       │ │ rohitmenonv     │
│                 │ │                 │ │                 │
│ Filters to:     │ │ Filters to:     │ │ Filters to:     │
│ - Alpin's       │ │ - Robin's       │ │ - Rohit's       │
│   projects      │ │   projects      │ │   projects      │
│ - Public assets │ │ - Public assets │ │ - Public assets │
└─────────────────┘ └─────────────────┘ └─────────────────┘
         ↓               ↓               ↓
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ VERCEL DEPLOY   │ │ NETLIFY DEPLOY  │ │ VERCEL DEPLOY   │
│ rostislav.dev   │ │ robinalex.dev   │ │ rohitmenon.dev  │
│ (External mode) │ │ (External mode) │ │ (External mode) │
└─────────────────┘ └─────────────────┘ └─────────────────┘

┌──────────────────────────────────────────────────────────┐
│  INTERNAL TEAM SITE (Company Deployment)                 │
│  qa-team.internal.paramount.com                          │
│                                                          │
│  Deploys from: Template repo OR dedicated internal branch│
│  Shows: All projects, all team members, internal links   │
│  Mode: internal                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Core Concepts

### 1. Single Source of Truth

**All project data lives in ONE place:**
- `src/lib/constants/projects.ts` - Complete project catalog
- `src/lib/constants/team.ts` - Complete team member data

**Benefits:**
- No data duplication
- Updates propagate when teammates sync
- Consistency across all portfolios

### 2. Owner-Based Filtering

**Each deployment automatically filters content:**

```typescript
// Personal portfolio deployment
NEXT_PUBLIC_OWNER=rostialpin
→ Shows only projects where:
  - project.owner === 'rostialpin' OR
  - project.contributors?.includes('rostialpin')

// Team deployment
NEXT_PUBLIC_OWNER=undefined
→ Shows ALL projects
```

### 3. Sensitivity-Based Filtering

**Content marked by sensitivity:**
- `public` - Always visible (external portfolios)
- `internal` - Only visible in internal mode (team site)
- `restricted` - Never visible (kept for reference)

```typescript
// External personal portfolio
NEXT_PUBLIC_MODE=external
→ Filters out all 'internal' and 'restricted' content

// Internal team site
NEXT_PUBLIC_MODE=internal
→ Shows 'public' and 'internal' content
```

### 4. Three Deployment Types

| Type | Environment | Owner | Mode | Use Case |
|------|-------------|-------|------|----------|
| **Team Internal** | Company server | `undefined` | `internal` | Team collaboration, internal presentations |
| **Team External** | Public hosting | `undefined` | `external` | Public team showcase (optional) |
| **Personal External** | Personal hosting | `rostialpin` | `external` | Individual job-hunting portfolio |

---

## Repository Structure

### Template Repository (Core)

```
/qa-portfolio-template
├── .github/
│   └── workflows/
│       ├── template-ci.yml          # CI for template itself
│       └── template-release.yml     # Version releases
│
├── docs/
│   ├── OPTION-1-ARCHITECTURE.md     # This document
│   ├── MIGRATION-PLAN.md            # Migration guide
│   ├── TEAMMATE-SETUP.md            # Setup guide for each person
│   └── SYNC-GUIDE.md                # How to sync updates
│
├── scripts/
│   ├── init-personal.ts             # Initialize personal portfolio
│   ├── sync-template.ts             # Sync updates from template
│   ├── validate-external.ts         # Validate external build
│   └── check-ownership.ts           # Verify project ownership
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Detects mode & owner
│   │   ├── page.tsx                 # Routes to team/personal home
│   │   ├── about/
│   │   │   └── page.tsx             # Dynamic: team or personal
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Filtered by owner
│   │   └── profiles/
│   │       └── [person]/
│   │           └── page.tsx         # Team profiles (internal only)
│   │
│   ├── components/
│   │   ├── shared/                  # Core UI components
│   │   │   ├── Header.tsx           # Adapts to mode
│   │   │   ├── Footer.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── SafetyBanner.tsx
│   │   ├── team/                    # Team-specific components
│   │   │   ├── TeamHero.tsx
│   │   │   └── TeamGrid.tsx
│   │   └── personal/                # Personal portfolio components
│   │       ├── PersonalHero.tsx
│   │       ├── PersonalAbout.tsx
│   │       └── PersonalProjects.tsx
│   │
│   ├── lib/
│   │   ├── constants/
│   │   │   ├── projects.ts          # FULL project catalog
│   │   │   └── team.ts              # FULL team data
│   │   ├── types/
│   │   │   ├── project.ts
│   │   │   └── config.ts            # NEW: Config types
│   │   └── utils/
│   │       ├── safety.ts            # Sensitivity filtering
│   │       ├── owner-filter.ts      # NEW: Owner-based filtering
│   │       └── config.ts            # NEW: Configuration management
│   │
│   └── config/
│       ├── template-defaults.ts     # Default configuration
│       └── personal-config.ts       # Personal config (gitignored in template)
│
├── .env.example                     # Example environment variables
├── .env.template                    # Template for personal deployments
├── .gitignore
├── package.json
├── README.md                        # Template README
├── TEMPLATE-README.md               # Instructions for using template
└── tsconfig.json
```

### Personal Portfolio Repository (Forked)

```
/alpin-portfolio  (or any name)
├── config/
│   └── personal-config.ts           # ✅ Customized for Alpin
│
├── .env.local                       # ✅ Personal environment
│   # NEXT_PUBLIC_MODE=external
│   # NEXT_PUBLIC_OWNER=rostialpin
│   # NEXT_PUBLIC_SITE_TYPE=personal
│
├── public/
│   └── resume.pdf                   # ✅ Personal resume
│
├── src/                             # Same as template
├── scripts/                         # Same as template
├── docs/                            # Same as template
├── package.json                     # Same as template
└── README.md                        # ✅ Personalized README
```

**Key differences:**
- `config/personal-config.ts` - Customized
- `.env.local` - Personal settings
- `README.md` - Personal description
- Rest is synced from template

---

## Content Filtering Strategy

### Two-Layer Filtering System

#### Layer 1: Sensitivity Filtering (Existing)

```typescript
// src/lib/utils/safety.ts (UNCHANGED)

export function sanitizeAllProjects(projects: IProject[]): IProject[] {
  const internal = isInternal();  // Based on NEXT_PUBLIC_MODE
  
  return projects
    .filter(p => allowBySensitivity(p.sensitivity, internal))
    .map(p => sanitizeProject(p, internal));
}
```

#### Layer 2: Owner Filtering (NEW)

```typescript
// src/lib/utils/owner-filter.ts (NEW FILE)

import { IProject } from '@/lib/types/project';
import { getSiteConfig } from './config';

/**
 * Filters projects based on ownership
 */
export function filterByOwnership(projects: IProject[]): IProject[] {
  const config = getSiteConfig();
  
  // If no owner specified (team site), return all
  if (!config.owner) {
    return projects;
  }
  
  // Filter to projects where person is owner or contributor
  return projects.filter(project => {
    const isOwner = project.owner === config.owner;
    const isContributor = project.contributors?.includes(config.owner);
    
    return isOwner || isContributor;
  });
}

/**
 * Get all projects with both filters applied
 */
export function getFilteredProjects(): IProject[] {
  const { allProjects } = await import('@/lib/constants/projects');
  
  // Apply sensitivity filtering (respects internal/external mode)
  const sanitized = sanitizeAllProjects(allProjects);
  
  // Apply ownership filtering (respects owner config)
  const filtered = filterByOwnership(sanitized);
  
  return filtered;
}
```

### Filtering Flow Diagram

```
┌─────────────────────────────────────┐
│ PROJECTS array (all projects)      │
│ - 10 projects total                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│ STEP 1: Sensitivity Filtering       │
│ (safety.ts)                         │
│                                     │
│ If MODE=external:                   │
│   Remove projects with:             │
│   - sensitivity: 'internal'         │
│   - sensitivity: 'restricted'       │
│                                     │
│ If MODE=internal:                   │
│   Remove only 'restricted'          │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│ STEP 2: Owner Filtering             │
│ (owner-filter.ts)                   │
│                                     │
│ If OWNER is set (personal site):    │
│   Keep only projects where:         │
│   - project.owner === OWNER         │
│   - project.contributors has OWNER  │
│                                     │
│ If OWNER not set (team site):       │
│   Keep all projects                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│ FINAL FILTERED PROJECTS             │
│ - Shown on the site                 │
└─────────────────────────────────────┘
```

### Example Scenarios

#### Scenario 1: Alpin's Personal Portfolio

```
Environment:
  NEXT_PUBLIC_MODE=external
  NEXT_PUBLIC_OWNER=rostialpin

Input: 10 projects total
Step 1 (Sensitivity): 8 projects (2 removed: internal-only)
Step 2 (Owner): 5 projects (3 removed: not Alpin's)
Output: 5 projects shown
```

#### Scenario 2: Team Internal Site

```
Environment:
  NEXT_PUBLIC_MODE=internal
  NEXT_PUBLIC_OWNER=undefined

Input: 10 projects total
Step 1 (Sensitivity): 9 projects (1 removed: restricted)
Step 2 (Owner): 9 projects (all kept: team site)
Output: 9 projects shown
```

#### Scenario 3: Team External Site (Optional)

```
Environment:
  NEXT_PUBLIC_MODE=external
  NEXT_PUBLIC_OWNER=undefined

Input: 10 projects total
Step 1 (Sensitivity): 8 projects (2 removed: internal-only)
Step 2 (Owner): 8 projects (all kept: team site)
Output: 8 projects shown (public team showcase)
```

---

## Configuration System

### Environment Variables

```bash
# .env.local (Personal Portfolio)
NEXT_PUBLIC_MODE=external              # internal | external
NEXT_PUBLIC_OWNER=rostialpin          # Team member ID
NEXT_PUBLIC_SITE_TYPE=personal        # personal | team
NEXT_PUBLIC_BASE_URL=https://rostislav.dev

# Optional: Authentication (if needed)
NEXTAUTH_URL=https://rostislav.dev
NEXTAUTH_SECRET=<secret>              # For personal deployments
```

```bash
# .env.local (Team Internal Site)
NEXT_PUBLIC_MODE=internal
NEXT_PUBLIC_SITE_TYPE=team
NEXT_PUBLIC_BASE_URL=https://qa-team.internal.paramount.com

# Authentication (required for internal)
NEXTAUTH_URL=https://qa-team.internal.paramount.com
NEXTAUTH_SECRET=<secret>
DATABASE_URL=<postgres-url>
EMAIL_SERVER=<smtp-url>
EMAIL_FROM=qa-team@paramount.com
```

### Personal Configuration File

```typescript
// config/personal-config.ts

export interface PersonalConfig {
  // Identity
  owner: string;                      // Must match team.ts ID
  displayName?: string;               // Override display name
  tagline?: string;                   // Personal tagline
  
  // Branding
  theme?: {
    primaryColor?: string;            // Override primary color
    accentColor?: string;             // Override accent color
    fontFamily?: string;              // Custom font
  };
  
  // Content
  customBio?: string;                 // Override bio from team.ts
  featuredProjects?: string[];        // Order of projects to display
  
  // Social Links (additional to team.ts)
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
    email?: string;
  };
  
  // Features
  showResume?: boolean;               // Show resume download
  showContact?: boolean;              // Show contact form
  enableBlog?: boolean;               // Enable blog section (future)
  
  // SEO
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Example configuration
export const PERSONAL_CONFIG: PersonalConfig = {
  owner: 'rostialpin',
  displayName: 'Rostislav Alpin',
  tagline: 'Building Scalable Test Automation Frameworks',
  
  theme: {
    primaryColor: '#10b981',          // Emerald green
    accentColor: '#3b82f6',           // Blue
  },
  
  customBio: `
    Senior QA Automation Architect with 20 years of experience
    building scalable testing solutions for streaming platforms.
    Specialized in cross-platform automation, AI-powered testing,
    and data observability.
  `,
  
  featuredProjects: [
    'unified-test-automation-framework',
    'test-manager-bot-eva',
    'data-observability',
  ],
  
  social: {
    linkedin: 'https://linkedin.com/in/rostislav-alpin',
    github: 'https://github.com/rostislav',
    email: 'rostislav.alpin@example.com',
  },
  
  showResume: true,
  showContact: true,
  
  meta: {
    title: 'Rostislav Alpin - QA Automation Architect',
    description: 'Portfolio showcasing 20 years of QA automation excellence',
    keywords: ['QA Automation', 'Test Architecture', 'OTT Testing'],
  },
};
```

### Configuration Management Utility

```typescript
// src/lib/utils/config.ts

import { PersonalConfig } from '@/config/template-defaults';
import { TEAM_MEMBERS } from '@/lib/constants/team';

export interface SiteConfig {
  mode: 'internal' | 'external';
  siteType: 'team' | 'personal';
  owner?: string;
  isPersonal: boolean;
  isTeam: boolean;
  isInternal: boolean;
  isExternal: boolean;
}

/**
 * Get runtime site configuration
 */
export function getSiteConfig(): SiteConfig {
  const mode = (process.env.NEXT_PUBLIC_MODE || 'external') as 'internal' | 'external';
  const siteType = (process.env.NEXT_PUBLIC_SITE_TYPE || 'team') as 'team' | 'personal';
  const owner = process.env.NEXT_PUBLIC_OWNER;
  
  return {
    mode,
    siteType,
    owner,
    isPersonal: siteType === 'personal',
    isTeam: siteType === 'team',
    isInternal: mode === 'internal',
    isExternal: mode === 'external',
  };
}

/**
 * Get personal configuration (if exists)
 */
export function getPersonalConfig(): PersonalConfig | null {
  try {
    const config = require('@/config/personal-config');
    return config.PERSONAL_CONFIG;
  } catch {
    return null;
  }
}

/**
 * Get effective configuration (merged personal + team data)
 */
export function getEffectiveConfig() {
  const siteConfig = getSiteConfig();
  const personalConfig = getPersonalConfig();
  
  if (!siteConfig.owner) {
    // Team site - no personal config
    return { site: siteConfig, personal: null };
  }
  
  // Find team member data
  const teamMember = TEAM_MEMBERS.find(m => m.id === siteConfig.owner);
  
  // Merge team data with personal config
  return {
    site: siteConfig,
    personal: personalConfig,
    member: teamMember,
    displayName: personalConfig?.displayName || teamMember?.name,
    bio: personalConfig?.customBio || teamMember?.background,
    social: {
      ...teamMember,
      ...personalConfig?.social,
    },
  };
}
```

---

## Deployment Strategy

### 1. Internal Team Site

**Deployment Target:** Company infrastructure  
**Access:** VPN required, authenticated users only  
**Purpose:** Team collaboration, internal presentations

```bash
# Build command
NEXT_PUBLIC_MODE=internal \
NEXT_PUBLIC_SITE_TYPE=team \
npm run build

# Deploy to company Vercel workspace OR internal server
# URL: qa-team.internal.paramount.com
```

**Features:**
- Shows all team projects
- Includes internal links/documentation
- Team member profiles
- Authentication via NextAuth (email magic links)

### 2. Personal External Portfolios

**Deployment Target:** Personal Vercel/Netlify accounts  
**Access:** Public internet  
**Purpose:** Job hunting, personal branding

```bash
# Build command (automatic on Vercel)
NEXT_PUBLIC_MODE=external \
NEXT_PUBLIC_OWNER=rostialpin \
NEXT_PUBLIC_SITE_TYPE=personal \
npm run build

# Deploy to personal Vercel account
# URL: rostislav.dev
```

**Features:**
- Shows only personal projects
- Public-safe content only
- Personal branding and bio
- Optional resume download
- No authentication required

### Deployment Platform Comparison

| Platform | Cost | Ease of Setup | Custom Domain | SSL | Build Time | Recommended For |
|----------|------|---------------|---------------|-----|------------|-----------------|
| **Vercel** | Free | ⭐⭐⭐⭐⭐ | ✅ Free | ✅ Auto | Fast | **Best choice** |
| **Netlify** | Free | ⭐⭐⭐⭐ | ✅ Free | ✅ Auto | Fast | Alternative |
| **GitHub Pages** | Free | ⭐⭐⭐ | ✅ With setup | ✅ Manual | Slow | Basic sites |
| **AWS Amplify** | Pay-as-go | ⭐⭐ | ✅ Paid | ✅ Auto | Medium | Advanced users |

**Recommended: Vercel**
- Best Next.js support
- Automatic deployments from GitHub
- Free custom domain + SSL
- Edge network (fast globally)
- Easy environment variable management

---

## Sync & Update Mechanism

### Keeping Personal Portfolios Updated

Personal portfolios need to sync two types of updates:

1. **Template Updates** - Bug fixes, new features, component improvements
2. **Content Updates** - New projects, updated team data

### Sync Strategy

```bash
# Each personal repo maintains upstream connection to template

# Initial setup (done once)
git remote add template git@github.com:paramount-qa/portfolio-template.git

# Periodic sync (monthly or as needed)
npm run sync:template
```

### Automated Sync Script

```typescript
// scripts/sync-template.ts

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

interface SyncOptions {
  dryRun?: boolean;
  interactive?: boolean;
}

/**
 * Syncs updates from template repository
 */
async function syncTemplate(options: SyncOptions = {}) {
  console.log('🔄 Syncing from template repository...\n');
  
  try {
    // 1. Fetch latest from template
    console.log('📥 Fetching template updates...');
    execSync('git fetch template main', { stdio: 'inherit' });
    
    // 2. Show what would change
    console.log('\n📋 Changes in template:');
    execSync('git log HEAD..template/main --oneline', { stdio: 'inherit' });
    
    if (options.dryRun) {
      console.log('\n✅ Dry run complete. No changes applied.');
      return;
    }
    
    // 3. Interactive confirmation
    if (options.interactive) {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      const answer = await new Promise<string>(resolve => {
        readline.question('\nApply these updates? (y/n): ', resolve);
      });
      
      readline.close();
      
      if (answer.toLowerCase() !== 'y') {
        console.log('❌ Sync cancelled.');
        return;
      }
    }
    
    // 4. Stash personal config
    console.log('\n💾 Stashing personal configuration...');
    const personalConfigPath = 'config/personal-config.ts';
    const envPath = '.env.local';
    
    let personalConfigBackup = '';
    let envBackup = '';
    
    if (fs.existsSync(personalConfigPath)) {
      personalConfigBackup = fs.readFileSync(personalConfigPath, 'utf-8');
    }
    
    if (fs.existsSync(envPath)) {
      envBackup = fs.readFileSync(envPath, 'utf-8');
    }
    
    // 5. Merge template changes
    console.log('🔀 Merging template updates...');
    try {
      execSync('git merge template/main --no-commit --no-ff', { stdio: 'inherit' });
    } catch (error) {
      console.log('\n⚠️  Merge conflicts detected. Resolving...');
      
      // Auto-resolve: keep personal config
      if (fs.existsSync(personalConfigPath)) {
        fs.writeFileSync(personalConfigPath, personalConfigBackup);
        execSync(`git add ${personalConfigPath}`);
      }
      
      if (fs.existsSync(envPath)) {
        fs.writeFileSync(envPath, envBackup);
        execSync(`git add ${envPath}`);
      }
    }
    
    // 6. Restore personal config
    console.log('🔧 Restoring personal configuration...');
    if (personalConfigBackup) {
      fs.writeFileSync(personalConfigPath, personalConfigBackup);
    }
    if (envBackup) {
      fs.writeFileSync(envPath, envBackup);
    }
    
    // 7. Update dependencies
    console.log('\n📦 Updating dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    
    // 8. Validate
    console.log('\n✅ Running validation...');
    execSync('npm run validate:external', { stdio: 'inherit' });
    
    console.log('\n✨ Sync complete!');
    console.log('📝 Review changes and commit:');
    console.log('   git status');
    console.log('   git commit -m "chore: sync template updates"');
    console.log('   git push');
    
  } catch (error) {
    console.error('\n❌ Sync failed:', error);
    console.log('\n🔧 Manual resolution required:');
    console.log('   1. Resolve conflicts');
    console.log('   2. git add <files>');
    console.log('   3. git commit');
    process.exit(1);
  }
}

// CLI
const args = process.argv.slice(2);
const options: SyncOptions = {
  dryRun: args.includes('--dry-run'),
  interactive: !args.includes('--yes'),
};

syncTemplate(options);
```

### Sync Frequency Recommendations

**Monthly Sync (Recommended):**
- New project additions
- Bug fixes
- Component improvements

**On-Demand Sync:**
- Before job applications
- After major template releases
- When specific features needed

**Notification Strategy:**
- Template repo creates GitHub releases
- Teammates receive notifications
- Can choose when to sync

---

## Migration from Current Version

See [MIGRATION-PLAN.md](./MIGRATION-PLAN.md) for detailed step-by-step migration guide.

**Summary:**
1. Current version continues on `main` branch
2. Phase 2 development happens on `feature/option1-template` branch
3. Parallel development until Phase 2 is ready
4. Merge and transition when stable

---

## Teammate Workflows

### Initial Setup (One-Time)

```bash
# 1. Fork template repository to personal GitHub
# URL: github.com/rostislav/portfolio

# 2. Clone to local machine
git clone git@github.com:rostislav/portfolio.git
cd portfolio

# 3. Run initialization script
npm install
npm run init:personal

# 4. Follow prompts:
#    - Enter owner ID: rostialpin
#    - Enter domain: rostislav.dev

# 5. Customize personal config
nano config/personal-config.ts

# 6. Test locally
npm run dev
# Visit: http://localhost:3000

# 7. Deploy to Vercel
# Connect GitHub repo to Vercel
# Set environment variables in Vercel dashboard
# Deploy!
```

### Ongoing Updates

```bash
# Update content or fix bugs
git pull
# Make changes
git add .
git commit -m "feat: add new project"
git push

# Vercel auto-deploys on push
# Live in ~2 minutes
```

### Sync Template Updates

```bash
# Check for updates (quarterly or as needed)
npm run sync:template -- --dry-run

# If updates look good, apply them
npm run sync:template

# Test locally
npm run dev

# Commit and deploy
git push
```

### Custom Domain Setup

```bash
# 1. Buy domain (e.g., rostislav.dev) from Namecheap, Google Domains
# Cost: ~$12/year

# 2. In Vercel dashboard:
#    - Go to project settings
#    - Add custom domain
#    - Follow DNS setup instructions

# 3. Update configuration
# Edit .env.local:
NEXT_PUBLIC_BASE_URL=https://rostislav.dev

# 4. Redeploy
git push

# DNS propagation takes 24-48 hours
```

---

## Technical Implementation

### Key Files to Create/Modify

#### NEW FILES

1. `src/lib/utils/owner-filter.ts` - Owner-based filtering logic
2. `src/lib/utils/config.ts` - Configuration management
3. `src/lib/types/config.ts` - Configuration type definitions
4. `config/template-defaults.ts` - Default configuration
5. `config/personal-config.ts` - Personal configuration (gitignored in template)
6. `scripts/init-personal.ts` - Initialization script
7. `scripts/sync-template.ts` - Sync script
8. `scripts/check-ownership.ts` - Validation script
9. `docs/TEAMMATE-SETUP.md` - Setup guide
10. `docs/SYNC-GUIDE.md` - Sync guide

#### MODIFIED FILES

1. `src/app/layout.tsx` - Add site config detection
2. `src/app/page.tsx` - Route to team vs personal home
3. `src/app/about/page.tsx` - Dynamic team vs personal
4. `src/app/projects/[slug]/page.tsx` - Apply owner filtering
5. `src/components/shared/Header.tsx` - Adapt to mode
6. `src/lib/constants/projects.ts` - Add `contributors` field
7. `.gitignore` - Ignore personal config in template
8. `package.json` - Add new scripts
9. `README.md` - Update for template usage

### Data Structure Updates

```typescript
// src/lib/constants/projects.ts

export interface IProject {
  // ... existing fields ...
  owner: string;                    // Primary owner (existing)
  contributors?: string[];          // NEW: Additional contributors
  // ... rest of fields ...
}

// Example:
export const PROJECTS: IProject[] = [
  {
    id: 'unified-test-automation-framework',
    owner: 'rostialpin',           // Primary
    contributors: ['rob1nalex', 'anilbvi'], // NEW: Others who worked on it
    // ... rest of project data
  },
];
```

### Component Adaptation Example

```typescript
// src/app/layout.tsx

import { getSiteConfig } from '@/lib/utils/config';
import { InternalHeader } from '@/components/team/InternalHeader';
import { PersonalHeader } from '@/components/personal/PersonalHeader';

export default function RootLayout({ children }) {
  const config = getSiteConfig();
  
  return (
    <html lang="en">
      <body>
        {config.isTeam ? (
          <InternalHeader />
        ) : (
          <PersonalHeader owner={config.owner} />
        )}
        
        <main>{children}</main>
        
        <Footer config={config} />
      </body>
    </html>
  );
}
```

---

## Benefits & Trade-offs

### ✅ Benefits

1. **Portability** - Each teammate fully owns their portfolio
2. **Independence** - Update without coordinating with team
3. **Career Asset** - Take to next job, keep updating
4. **Customization** - Personal branding per teammate
5. **Free Hosting** - Vercel/Netlify free tier per person
6. **Resume Value** - Shows GitHub activity
7. **No Lock-in** - Not tied to company infrastructure
8. **Scalable** - Easy to add new teammates

### ⚠️ Trade-offs

1. **Sync Overhead** - Teammates must manually sync updates
2. **Code Duplication** - Each repo has full codebase
3. **Learning Curve** - Requires Git knowledge
4. **Maintenance** - Template updates need propagation
5. **Initial Setup** - Each person needs to configure

### 🎯 Mitigations

1. **Automated Sync Script** - `npm run sync:template` makes it easy
2. **Clear Documentation** - Step-by-step guides for all workflows
3. **Template Releases** - Versioned releases with changelogs
4. **Support Channel** - Team Slack channel for questions
5. **Quarterly Sync** - Scheduled sync sessions as team

---

## Success Metrics

How we'll measure success of Option 1:

1. ✅ All 7 teammates have deployed personal portfolios
2. ✅ Internal team site running and accessible
3. ✅ Zero content leakage (all external builds validated)
4. ✅ 90%+ teammate satisfaction with workflow
5. ✅ <30 minutes to set up new personal portfolio
6. ✅ <15 minutes to sync template updates
7. ✅ Portfolio used in at least 3 job applications

---

## Future Enhancements

Potential improvements for Phase 3+:

1. **Automated Sync Bot** - GitHub Actions to notify of updates
2. **Blog Support** - Optional blog section per person
3. **Analytics** - Privacy-friendly analytics per portfolio
4. **A/B Testing** - Help teammates optimize for conversions
5. **Template Marketplace** - Multiple themes to choose from
6. **Resume Builder** - Integrated resume generation
7. **Contact Form** - Built-in contact form with spam protection

---

## Conclusion

Option 1 (Template + Individual Repos) provides the best balance of:
- Team collaboration (shared project catalog)
- Individual ownership (personal repos)
- Career portability (take anywhere)
- Customization (personal branding)

The architecture supports parallel development, allowing the current version to continue receiving updates while Phase 2 is built independently.

---

**Next Steps:**
1. Review and approve this architecture
2. See [MIGRATION-PLAN.md](./MIGRATION-PLAN.md) for implementation
3. Begin Phase 2 development on feature branch

---

**Document History:**
- 2025-11-05: Initial version (AR)

