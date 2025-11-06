# Migration Plan: Current Version → Option 1 Architecture

**Status:** Implementation Plan  
**Version:** 1.0  
**Date:** 2025-11-05  
**Author:** AR (Rostislav Alpin)

---

## 🎯 Objective

Migrate from the current single-site architecture to the **Option 1 Template + Individual Portfolios** architecture while:

1. **Preserving current version** for ongoing updates and bug fixes
2. **Developing Phase 2 in parallel** without disruption
3. **Merging when ready** with minimal conflicts
4. **Enabling smooth transition** for all teammates

---

## 📋 Table of Contents

1. [Migration Strategy](#migration-strategy)
2. [Branching Model](#branching-model)
3. [Parallel Development Plan](#parallel-development-plan)
4. [Phase-by-Phase Implementation](#phase-by-phase-implementation)
5. [Testing Strategy](#testing-strategy)
6. [Merge Strategy](#merge-strategy)
7. [Rollout Plan](#rollout-plan)
8. [Rollback Plan](#rollback-plan)

---

## Migration Strategy

### Approach: **Parallel Development with Feature Branch**

```
Current State:
┌─────────────────────────────────┐
│ main branch                     │
│ - Single team portfolio         │
│ - Internal/external modes       │
│ - Ongoing bug fixes             │
└─────────────────────────────────┘

Target State:
┌─────────────────────────────────┐
│ Template Repo                   │
│ - Supports team + personal      │
│ - Owner-based filtering         │
│ - Fork → personal portfolios    │
└─────────────────────────────────┘

Migration Path:
main ────────────────────────┐
  │                          │
  ├─ bugfixes              merge
  ├─ content updates         │
  │                          │
  └─ feature/option1 ────────┘
       │                     
       ├─ owner filtering    
       ├─ personal config    
       └─ template system    
```

---

## Branching Model

### Branch Structure

```bash
# Production branches
main                    # Current version (stable, ongoing updates)

# Phase 2 development
feature/option1-template    # Main Phase 2 branch
  ├── feature/option1-owner-filter    # Sub-feature: filtering
  ├── feature/option1-config-system   # Sub-feature: configuration
  └── feature/option1-scripts         # Sub-feature: scripts

# Personal portfolio branches (created after merge)
personal/rostialpin    # Alpin's customizations
personal/rob1nalex     # Robin's customizations
personal/rohitmenonv   # Rohit's customizations
```

### Branch Naming Convention

```bash
# Phase 2 development
feature/option1-[feature-name]

# Bug fixes (current version)
bugfix/[issue-description]

# Content updates (current version)
content/[update-description]

# Personal customizations (post-merge)
personal/[teammate-id]
```

---

## Parallel Development Plan

### Timeline: 4-6 Weeks

```
Week 1-2: Phase 2 Foundation
├── Set up feature branch
├── Implement owner filtering
├── Create configuration system
└── Build initialization scripts

Week 3-4: Phase 2 Components & Testing
├── Adapt components for dual mode
├── Create personal portfolio layouts
├── Comprehensive testing
└── Documentation

Week 5: Integration & Review
├── Merge main → feature/option1 (catch up)
├── Resolve conflicts
├── Team review
└── QA testing

Week 6: Deployment & Migration
├── Merge to main
├── Deploy template repo
├── Teammate onboarding (1-2 per day)
└── Monitor and support
```

### Concurrent Work Streams

| Stream | Owner | Focus | Branch |
|--------|-------|-------|--------|
| **Current Version Maintenance** | Team | Bug fixes, content | `main` |
| **Phase 2 Core Logic** | AR | Filtering, config | `feature/option1-template` |
| **Phase 2 Components** | Robin | UI adaptation | `feature/option1-template` |
| **Phase 2 Scripts** | Rohit | Init, sync scripts | `feature/option1-scripts` |
| **Documentation** | Dhanya | Guides, setup docs | `feature/option1-template` |

---

## Phase-by-Phase Implementation

### Phase 1: Foundation (Week 1)

**Goal:** Set up parallel development environment

#### Tasks

1. **Create feature branch**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/option1-template
   git push -u origin feature/option1-template
   ```

2. **Project structure updates**
   ```bash
   # Create new directories
   mkdir -p src/lib/utils
   mkdir -p src/lib/types
   mkdir -p config
   mkdir -p scripts
   mkdir -p docs/guides
   ```

3. **Add configuration types**
   - Create `src/lib/types/config.ts`
   - Create `config/template-defaults.ts`
   - Create `.env.template`

4. **Set up development environment**
   ```bash
   # Install dependencies (if any new)
   npm install
   
   # Create test environment
   cp .env.template .env.local
   # Edit .env.local for testing
   ```

#### Deliverables
- ✅ Feature branch created
- ✅ Directory structure ready
- ✅ Configuration types defined
- ✅ Development environment working

---

### Phase 2: Core Filtering Logic (Week 1-2)

**Goal:** Implement owner-based filtering

#### Tasks

1. **Create owner filtering utility**
   - File: `src/lib/utils/owner-filter.ts`
   - Function: `filterByOwnership()`
   - Function: `getFilteredProjects()`

2. **Create configuration management**
   - File: `src/lib/utils/config.ts`
   - Function: `getSiteConfig()`
   - Function: `getPersonalConfig()`
   - Function: `getEffectiveConfig()`

3. **Update project types**
   - Add `contributors?: string[]` to `IProject`
   - Update `projects.ts` with contributors data

4. **Integration**
   - Update project pages to use filtered projects
   - Update home page to use filtered projects

#### Deliverables
- ✅ Owner filtering working
- ✅ Configuration system functional
- ✅ Projects filtered correctly based on owner
- ✅ Tests passing

---

### Phase 3: Component Adaptation (Week 2-3)

**Goal:** Make components work for both team and personal sites

#### Tasks

1. **Create layout variants**
   ```typescript
   // src/app/layout.tsx
   - Detect site mode
   - Route to team vs personal components
   ```

2. **Create personal components**
   - `src/components/personal/PersonalHero.tsx`
   - `src/components/personal/PersonalAbout.tsx`
   - `src/components/personal/PersonalProjects.tsx`

3. **Update existing components**
   - `src/components/shared/Header.tsx` - Add mode detection
   - `src/components/shared/ProjectCard.tsx` - Show ownership info
   - `src/app/page.tsx` - Route based on mode

4. **Personal configuration UI**
   - Create `config/personal-config.ts` template
   - Document customization options

#### Deliverables
- ✅ Components work in both modes
- ✅ Personal hero/about pages created
- ✅ Header adapts to mode
- ✅ Personal config system working

---

### Phase 4: Scripts & Automation (Week 3)

**Goal:** Create initialization and sync scripts

#### Tasks

1. **Initialization script**
   - File: `scripts/init-personal.ts`
   - Interactive prompts for owner ID, domain
   - Auto-generate `.env.local`
   - Create personal config template

2. **Sync script**
   - File: `scripts/sync-template.ts`
   - Fetch from template repository
   - Preserve personal config
   - Auto-resolve conflicts

3. **Validation script**
   - Update `scripts/validate-external.ts`
   - Check owner configuration
   - Validate filtered content
   - Ensure no leaks

4. **Package.json scripts**
   ```json
   {
     "scripts": {
       "init:personal": "tsx scripts/init-personal.ts",
       "sync:template": "tsx scripts/sync-template.ts",
       "validate:owner": "tsx scripts/check-ownership.ts"
     }
   }
   ```

#### Deliverables
- ✅ `npm run init:personal` works
- ✅ `npm run sync:template` works
- ✅ Validation script enhanced
- ✅ Scripts documented

---

### Phase 5: Documentation (Week 3-4)

**Goal:** Comprehensive guides for teammates

#### Tasks

1. **Architecture documentation**
   - ✅ `docs/design/OPTION-1-ARCHITECTURE.md` (this doc)

2. **Setup guide**
   - Create `docs/guides/TEAMMATE-SETUP.md`
   - Step-by-step personal portfolio setup
   - Screenshots and examples

3. **Sync guide**
   - Create `docs/guides/SYNC-GUIDE.md`
   - How to sync template updates
   - Troubleshooting common issues

4. **Customization guide**
   - Create `docs/guides/CUSTOMIZATION-GUIDE.md`
   - How to customize theme, colors, bio
   - Examples of personal configs

5. **Update main README**
   - Explain template vs personal repos
   - Link to setup guides
   - Add badges and examples

#### Deliverables
- ✅ Architecture doc complete
- ✅ Setup guide ready
- ✅ Sync guide ready
- ✅ Customization guide ready
- ✅ README updated

---

### Phase 6: Testing & QA (Week 4)

**Goal:** Comprehensive testing of Phase 2 changes

#### Test Matrix

| Test Case | Mode | Owner | Expected Result |
|-----------|------|-------|-----------------|
| Team internal | internal | undefined | All projects, internal links visible |
| Team external | external | undefined | Public projects only |
| Alpin personal | external | rostialpin | Only Alpin's projects |
| Robin personal | external | rob1nalex | Only Robin's projects |
| Rohit personal | external | rohitmenonv | Only Rohit's projects |

#### Testing Tasks

1. **Unit tests**
   ```bash
   # Test filtering logic
   npm test -- owner-filter.test.ts
   
   # Test configuration
   npm test -- config.test.ts
   ```

2. **Integration tests**
   ```bash
   # Test full builds
   NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rostialpin npm run build
   NEXT_PUBLIC_MODE=internal npm run build
   ```

3. **Manual testing**
   - Each teammate tests their personal config
   - Verify content filtering
   - Check link functionality
   - Test on mobile devices

4. **Performance testing**
   - Build time comparison
   - Page load speed
   - Bundle size check

#### Deliverables
- ✅ All unit tests passing
- ✅ All integration tests passing
- ✅ Manual test cases verified
- ✅ Performance acceptable

---

### Phase 7: Integration (Week 5)

**Goal:** Merge Phase 2 changes with current version

#### Tasks

1. **Sync main branch**
   ```bash
   git checkout feature/option1-template
   git fetch origin main
   git merge origin/main
   # Resolve conflicts (see Merge Strategy below)
   ```

2. **Update dependencies**
   ```bash
   npm install
   npm audit fix
   ```

3. **Comprehensive testing**
   - Run all tests
   - Test both modes
   - Test with multiple owners

4. **Team review**
   - Code review by 2+ teammates
   - Architecture review
   - Documentation review

5. **Create PR**
   ```bash
   # Push to GitHub
   git push origin feature/option1-template
   
   # Create PR: feature/option1-template → main
   # Title: "feat: implement Option 1 architecture (template + personal portfolios)"
   # Include: summary, testing done, breaking changes
   ```

#### Deliverables
- ✅ feature/option1 branch up to date with main
- ✅ All conflicts resolved
- ✅ All tests passing
- ✅ PR created and reviewed

---

### Phase 8: Deployment (Week 6)

**Goal:** Deploy template and migrate teammates

#### Tasks

1. **Merge to main**
   ```bash
   # After PR approval
   git checkout main
   git merge feature/option1-template
   git push origin main
   ```

2. **Create template repository**
   ```bash
   # Option A: Rename current repo
   # (Current repo becomes template)
   
   # Option B: Create new template repo
   # Fork current repo to template location
   ```

3. **Deploy internal team site**
   ```bash
   # Deploy to company infrastructure
   NEXT_PUBLIC_MODE=internal \
   NEXT_PUBLIC_SITE_TYPE=team \
   npm run build
   
   # Deploy to Vercel or company server
   ```

4. **Teammate onboarding (staggered)**
   
   **Day 1:** Alpin (AR)
   - Fork template
   - Run init script
   - Deploy to Vercel
   - Test thoroughly
   - Document issues
   
   **Day 2:** Robin (RA)
   - Same process
   - Use Alpin's experience
   
   **Day 3-4:** Remaining teammates
   - 1-2 per day
   - Help each other
   - Document learnings

#### Deliverables
- ✅ Template repo live
- ✅ Internal team site deployed
- ✅ All teammates have personal portfolios
- ✅ Documentation updated with real examples

---

## Testing Strategy

### Test Environments

1. **Local Development**
   ```bash
   # Test team mode
   NEXT_PUBLIC_MODE=internal npm run dev
   
   # Test personal mode
   NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rostialpin npm run dev
   ```

2. **Staging Deployments**
   - Deploy feature branch to Vercel preview
   - Test with multiple configurations
   - Share with teammates for feedback

3. **Production Testing**
   - Deploy to personal Vercel accounts first
   - Test with real domains
   - Verify analytics, SEO

### Test Cases

#### Filtering Tests

```typescript
// Test: Owner filtering
describe('Owner Filtering', () => {
  test('shows all projects when no owner', () => {
    process.env.NEXT_PUBLIC_OWNER = undefined;
    const filtered = getFilteredProjects();
    expect(filtered.length).toBe(PROJECTS.length);
  });
  
  test('shows only owner projects when owner set', () => {
    process.env.NEXT_PUBLIC_OWNER = 'rostialpin';
    const filtered = getFilteredProjects();
    
    filtered.forEach(project => {
      expect(
        project.owner === 'rostialpin' ||
        project.contributors?.includes('rostialpin')
      ).toBe(true);
    });
  });
  
  test('respects sensitivity filtering', () => {
    process.env.NEXT_PUBLIC_MODE = 'external';
    process.env.NEXT_PUBLIC_OWNER = 'rostialpin';
    const filtered = getFilteredProjects();
    
    filtered.forEach(project => {
      expect(project.sensitivity).not.toBe('internal');
      expect(project.sensitivity).not.toBe('restricted');
    });
  });
});
```

#### Configuration Tests

```typescript
// Test: Site configuration
describe('Site Configuration', () => {
  test('detects personal site correctly', () => {
    process.env.NEXT_PUBLIC_OWNER = 'rostialpin';
    const config = getSiteConfig();
    expect(config.isPersonal).toBe(true);
    expect(config.isTeam).toBe(false);
  });
  
  test('detects team site correctly', () => {
    process.env.NEXT_PUBLIC_OWNER = undefined;
    const config = getSiteConfig();
    expect(config.isPersonal).toBe(false);
    expect(config.isTeam).toBe(true);
  });
  
  test('loads personal config when available', () => {
    const config = getPersonalConfig();
    expect(config).not.toBeNull();
    expect(config?.owner).toBe('rostialpin');
  });
});
```

---

## Merge Strategy

### Conflict Resolution Plan

#### Expected Conflicts

1. **package.json** - New scripts added
   - Resolution: Keep both (merge scripts section)

2. **src/app/layout.tsx** - Layout changes
   - Resolution: Manual merge, prefer Phase 2 version

3. **src/lib/constants/projects.ts** - Content updates
   - Resolution: Merge manually, add contributors field

4. **.gitignore** - New ignores added
   - Resolution: Keep both

#### Merge Process

```bash
# 1. Create merge branch
git checkout feature/option1-template
git checkout -b merge/option1-to-main

# 2. Merge main into merge branch
git merge origin/main

# 3. Resolve conflicts
git status  # See conflicted files
# Edit each file manually
git add <resolved-files>

# 4. Test after merge
npm install
npm run build
npm test

# 5. If tests pass, push merge branch
git push origin merge/option1-to-main

# 6. Create PR: merge/option1-to-main → main
# Review, approve, merge
```

#### Conflict Priority Rules

1. **Code conflicts** - Prefer Phase 2 version (has new architecture)
2. **Content conflicts** - Merge both (combine updates)
3. **Config conflicts** - Prefer Phase 2 version (has new config system)
4. **Documentation conflicts** - Merge both (keep all docs)

---

## Rollout Plan

### Staged Rollout

#### Stage 1: Internal Team Site (Week 6, Day 1)

```bash
# Deploy updated internal site
# No changes for users, just uses new codebase
```

**Success Criteria:**
- ✅ Internal site accessible
- ✅ All projects visible
- ✅ Authentication working
- ✅ No broken links

#### Stage 2: Pilot Personal Portfolio (Week 6, Day 2)

**Pilot: Alpin (AR)**

```bash
# 1. Fork template
# 2. Initialize personal portfolio
# 3. Deploy to Vercel
# 4. Test thoroughly
# 5. Document issues
```

**Success Criteria:**
- ✅ Personal portfolio deployed
- ✅ Only Alpin's projects shown
- ✅ Public content only
- ✅ Custom domain working

#### Stage 3: Second Wave (Week 6, Day 3-4)

**Participants: Robin, Rohit**

- Use Alpin's experience
- Deploy in parallel
- Help each other

**Success Criteria:**
- ✅ Both portfolios deployed
- ✅ Each shows correct projects
- ✅ No issues blocking deployment

#### Stage 4: Full Team (Week 6, Day 5-7)

**Remaining: Juney, Dhanya, Bobby, Krishna**

- Staggered deployment (1-2 per day)
- Team support available
- Document all learnings

**Success Criteria:**
- ✅ All 7 teammates have personal portfolios
- ✅ All portfolios show correct content
- ✅ Documentation updated with real-world examples
- ✅ Team satisfied with workflow

---

## Rollback Plan

### If Issues Arise

#### Rollback Triggers

1. **Critical bug** - Site down, authentication broken
2. **Data leak** - Internal content visible externally
3. **Performance issue** - Site unusably slow
4. **Team blocker** - Can't update content

#### Rollback Procedure

```bash
# 1. Revert main branch
git checkout main
git revert <merge-commit-hash>
git push origin main

# 2. Redeploy previous version
# Internal site reverts to previous codebase

# 3. Notify team
# Slack: "Rolled back to previous version due to [issue]"

# 4. Fix issues in feature branch
git checkout feature/option1-template
# Fix issues
# Re-test
# Try merge again
```

#### Rollback Impact

- **Internal team site:** Reverts to previous version
- **Personal portfolios:** Unaffected (independent repos)
- **Data:** No data loss (Git preserves history)

---

## Communication Plan

### Stakeholder Updates

#### Week 1-2: Setup & Development
**Audience:** Team  
**Channel:** Slack  
**Message:** "Starting Phase 2 development on feature branch. Current version unaffected."

#### Week 3-4: Testing
**Audience:** Team  
**Channel:** Slack + Demo  
**Message:** "Phase 2 demo: personal portfolio filtering working! Ready for review."

#### Week 5: Integration
**Audience:** Team + Management  
**Channel:** Email + Slack  
**Message:** "Phase 2 ready to merge. Rollout plan next week. No disruption expected."

#### Week 6: Rollout
**Audience:** Team + Management  
**Channel:** Email + Slack + Office Hours  
**Message:** "Template live! Personal portfolio setup starting. Daily support available."

### Support Plan

#### Week 6 (Rollout Week)
- **Daily office hours** - 30 minutes for questions
- **Slack support channel** - #portfolio-setup
- **Pair programming** - Schedule 1-on-1 setup sessions
- **Documentation** - Live docs with FAQ updated daily

#### Ongoing
- **Monthly sync reminder** - Slack bot reminder to sync template
- **Quarterly sync session** - Team syncs together
- **GitHub releases** - Notify on template updates

---

## Success Metrics

### Technical Metrics

- ✅ Build time < 2 minutes
- ✅ Page load < 2 seconds
- ✅ Zero external mode violations
- ✅ 100% test coverage on filtering logic
- ✅ All portfolios scoring 90+ on Lighthouse

### User Metrics

- ✅ All 7 teammates deployed personal portfolios
- ✅ <30 minutes average setup time
- ✅ 90%+ teammate satisfaction
- ✅ Zero critical bugs in first month
- ✅ At least 3 portfolios used in job applications

### Process Metrics

- ✅ Template synced quarterly by all teammates
- ✅ <5% conflict rate on syncs
- ✅ New projects added within 1 week
- ✅ Documentation rated "helpful" by 90%+

---

## Lessons Learned (To be updated post-migration)

### What Went Well
- TBD after migration

### What Could Be Improved
- TBD after migration

### Unexpected Challenges
- TBD after migration

### Recommendations for Future
- TBD after migration

---

## Appendix

### A. File Change Summary

**New Files:**
- `src/lib/utils/owner-filter.ts`
- `src/lib/utils/config.ts`
- `src/lib/types/config.ts`
- `config/template-defaults.ts`
- `config/personal-config.ts`
- `scripts/init-personal.ts`
- `scripts/sync-template.ts`
- `scripts/check-ownership.ts`
- `docs/design/OPTION-1-ARCHITECTURE.md`
- `docs/design/MIGRATION-PLAN.md`
- `docs/guides/TEAMMATE-SETUP.md`
- `docs/guides/SYNC-GUIDE.md`
- `docs/guides/CUSTOMIZATION-GUIDE.md`

**Modified Files:**
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/components/shared/Header.tsx`
- `src/components/shared/ProjectCard.tsx`
- `src/lib/constants/projects.ts`
- `.gitignore`
- `package.json`
- `README.md`

### B. Environment Variables Reference

```bash
# Team Internal Site
NEXT_PUBLIC_MODE=internal
NEXT_PUBLIC_SITE_TYPE=team
NEXT_PUBLIC_BASE_URL=https://qa-team.internal.paramount.com

# Personal External Portfolio
NEXT_PUBLIC_MODE=external
NEXT_PUBLIC_OWNER=rostialpin
NEXT_PUBLIC_SITE_TYPE=personal
NEXT_PUBLIC_BASE_URL=https://rostislav.dev
```

### C. Git Commands Quick Reference

```bash
# Check current branch
git branch

# Switch branches
git checkout feature/option1-template

# Pull latest changes
git pull origin feature/option1-template

# Merge main into feature branch
git merge origin/main

# Push changes
git push origin feature/option1-template

# Create new branch
git checkout -b feature/option1-new-feature

# View commit history
git log --oneline --graph --all
```

---

**Next Actions:**
1. ✅ Review and approve this migration plan
2. ⏳ Create feature branch and start Phase 1
3. ⏳ Implement Phase 2 following this plan
4. ⏳ Merge and deploy when ready

---

**Document History:**
- 2025-11-05: Initial version (AR)

