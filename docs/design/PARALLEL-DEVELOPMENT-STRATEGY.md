# Parallel Development Strategy: Current Version + Phase 2

**Status:** Active Development Plan  
**Version:** 1.0  
**Date:** 2025-11-05  
**Author:** AR (Rostislav Alpin)

---

## 🎯 Objective

Enable simultaneous work on:
1. **Current version** (main branch) - Bug fixes, content updates, small improvements
2. **Phase 2** (feature branch) - Option 1 architecture implementation

**Key Principle:** Neither stream blocks the other

---

## Branching Strategy

### Branch Diagram

```
main (Current Version - Stable)
├─── [Protected Branch]
├─── Ongoing: Bug fixes, content updates
├─── Deploy: Internal team site
│
├─── bugfix/fix-auth-redirect (2025-11-05)
│    └─── Merge → main
│
├─── content/add-rohit-bio (2025-11-06)
│    └─── Merge → main
│
└─── feature/option1-template (Phase 2 - Development)
     ├─── [Long-lived feature branch]
     ├─── Ongoing: Option 1 implementation
     ├─── Periodically syncs FROM main
     │
     ├─── feature/option1-owner-filter
     │    └─── Merge → feature/option1-template
     │
     ├─── feature/option1-config-system
     │    └─── Merge → feature/option1-template
     │
     └─── feature/option1-scripts
          └─── Merge → feature/option1-template

Timeline:
Week 1-4: Parallel development
Week 5: Sync + Integration
Week 6: Merge to main
```

---

## Work Allocation

### Current Version (main branch)

**Owner:** Team (rotating)  
**Focus:** Stability, content, small improvements  
**Branch:** `main`  
**Deployment:** Live internal site

**Allowed Changes:**
- ✅ Bug fixes
- ✅ Content updates (projects, team bios)
- ✅ Asset additions (images, PDFs)
- ✅ Documentation improvements
- ✅ Small UI tweaks
- ✅ Dependency updates (security)

**NOT Allowed:**
- ❌ Architecture changes
- ❌ Major refactoring
- ❌ New feature development
- ❌ Breaking changes

**Workflow:**
```bash
# 1. Create bugfix/content branch from main
git checkout main
git pull origin main
git checkout -b bugfix/fix-auth-issue

# 2. Make changes
# Edit files...

# 3. Test
npm run build
npm test

# 4. Push and create PR
git push origin bugfix/fix-auth-issue
# Create PR: bugfix/fix-auth-issue → main

# 5. After approval, merge
# Auto-deploy to internal site
```

---

### Phase 2 (feature/option1-template branch)

**Owner:** AR (Alpin) - Lead  
**Contributors:** Team (assigned tasks)  
**Focus:** Option 1 architecture  
**Branch:** `feature/option1-template`  
**Deployment:** Preview/staging only

**Allowed Changes:**
- ✅ New architecture implementation
- ✅ Owner filtering logic
- ✅ Configuration system
- ✅ Scripts and automation
- ✅ Component adaptation
- ✅ Documentation
- ✅ Breaking changes (isolated to branch)

**Workflow:**
```bash
# 1. Create sub-feature branch
git checkout feature/option1-template
git pull origin feature/option1-template
git checkout -b feature/option1-owner-filter

# 2. Implement feature
# Edit files...

# 3. Test
npm run build
npm test

# 4. Push and create PR
git push origin feature/option1-owner-filter
# Create PR: feature/option1-owner-filter → feature/option1-template

# 5. After review, merge to feature branch
# NOT to main yet!
```

---

## Sync Strategy

### Keeping Phase 2 Up-to-Date

Phase 2 branch needs to stay current with main branch changes.

#### Sync Frequency

- **Weekly** - Recommended sync schedule
- **Before major milestones** - Before PR to main
- **After significant main changes** - Content updates, bug fixes

#### Sync Process

```bash
# 1. Ensure feature branch is clean
git checkout feature/option1-template
git status  # Should be clean

# 2. Fetch latest from main
git fetch origin main

# 3. Merge main into feature branch
git merge origin/main

# 4. Resolve conflicts if any
# Edit conflicted files
git add <resolved-files>
git commit -m "chore: sync from main"

# 5. Test after merge
npm install
npm run build
npm test

# 6. Push updated feature branch
git push origin feature/option1-template
```

#### Conflict Resolution Strategy

**Priority Rules:**

1. **Content conflicts** (projects.ts, team.ts)
   - **Resolution:** Keep main version + add Phase 2 fields
   - **Example:** Project has new content (main) + new contributors field (Phase 2)
   - **Action:** Merge both changes

2. **Code conflicts** (components, utils)
   - **Resolution:** Case-by-case
   - **Low-risk:** Keep Phase 2 version (has new architecture)
   - **High-risk:** Manual merge, test thoroughly

3. **Config conflicts** (.env, package.json)
   - **Resolution:** Merge both
   - **Scripts:** Keep both sets of scripts
   - **Dependencies:** Use latest versions

4. **Documentation conflicts**
   - **Resolution:** Keep both
   - **Action:** Merge all documentation

**Example Conflict Resolution:**

```typescript
// projects.ts - CONFLICT

<<<<<<< HEAD (main branch)
{
  id: 'unified-test-automation-framework',
  owner: 'rostialpin',
  summary: 'Updated summary with new details...',  // New content
  // ... rest of project
}
=======
{
  id: 'unified-test-automation-framework',
  owner: 'rostialpin',
  contributors: ['rob1nalex', 'anilbvi'],  // New field
  summary: 'Original summary...',
  // ... rest of project
}
>>>>>>> feature/option1-template

// RESOLVED: Merge both changes
{
  id: 'unified-test-automation-framework',
  owner: 'rostialpin',
  contributors: ['rob1nalex', 'anilbvi'],  // Keep Phase 2 field
  summary: 'Updated summary with new details...',  // Keep main content
  // ... rest of project
}
```

---

## Communication Protocol

### Daily Standups (Async in Slack)

**Format:**
```
🌅 Daily Update - [Date]

Current Version (main):
- ✅ [Name] - Fixed auth redirect bug
- 🔄 [Name] - Adding Rohit's bio
- ⏳ [Name] - Reviewing PR #123

Phase 2 (feature/option1):
- ✅ [AR] - Implemented owner filtering
- 🔄 [Robin] - Adapting header component
- ⏳ [Dhanya] - Writing setup guide

Blockers: None
```

### PR Labels

Use labels to indicate branch target:

- `target:main` - For current version PRs
- `target:phase2` - For Phase 2 feature PRs
- `sync:main-to-phase2` - For sync merges
- `urgent` - Blocking issues
- `review-needed` - Needs review

### Decision Log

Document major decisions in Slack or docs:

```markdown
## Decision Log

### 2025-11-05: Start parallel development
**Decision:** Use feature/option1-template branch for Phase 2
**Rationale:** Allows current version to continue without disruption
**Alternatives considered:** Pause current work (rejected - team needs updates)

### 2025-11-06: Weekly sync schedule
**Decision:** Sync Phase 2 from main every Monday
**Rationale:** Keeps branches close, reduces merge conflicts
**Owner:** AR
```

---

## Risk Management

### Potential Risks

#### Risk 1: Merge Conflicts

**Likelihood:** Medium  
**Impact:** Medium  
**Mitigation:**
- Weekly syncs keep branches close
- Clear ownership prevents overlapping changes
- Conflict resolution strategy documented

#### Risk 2: Phase 2 Takes Longer Than Expected

**Likelihood:** Medium  
**Impact:** Low  
**Mitigation:**
- Current version continues independently
- No deadline pressure on Phase 2
- Can extend timeline without affecting team

#### Risk 3: Bug in Current Version Blocks Team

**Likelihood:** Low  
**Impact:** High  
**Mitigation:**
- Priority bug fixes on main
- Hot-fix process for critical issues
- Team maintains bug-free main branch

#### Risk 4: Phase 2 Proves Infeasible

**Likelihood:** Low  
**Impact:** Medium  
**Mitigation:**
- Early testing and validation
- Pilot deployment before full rollout
- Rollback plan documented
- Current version still works if Phase 2 cancelled

#### Risk 5: Team Member Confusion (Which Branch?)

**Likelihood:** Medium  
**Impact:** Low  
**Mitigation:**
- Clear documentation
- Branch naming convention
- PR templates enforce branch target
- Slack reminders

---

## Testing Strategy

### Current Version Testing

**On Every PR to main:**
```bash
# Automated CI
npm run lint
npm run type-check
npm test
npm run build

# Validation
npm run validate:external

# Manual
- Visual review
- Test internal deployment
```

### Phase 2 Testing

**On Every PR to feature/option1:**
```bash
# All current version tests PLUS:
npm run validate:owner  # New validation

# Test multiple configurations:
NEXT_PUBLIC_MODE=internal npm run build
NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rostialpin npm run build
NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rob1nalex npm run build

# Deploy to Vercel preview
# Test personal portfolio filtering
```

### Integration Testing (Week 5)

**Before merging to main:**
```bash
# Comprehensive test matrix
- [ ] Team internal mode
- [ ] Team external mode
- [ ] Personal mode (each teammate)
- [ ] Content filtering working
- [ ] No broken links
- [ ] Mobile responsive
- [ ] Performance acceptable
- [ ] SEO tags correct
```

---

## Code Review Guidelines

### For Current Version (main) PRs

**Requirements:**
- [ ] 1 approving review minimum
- [ ] All tests passing
- [ ] No linter errors
- [ ] External validation passing
- [ ] No breaking changes

**Review Checklist:**
```markdown
## Current Version PR Review

- [ ] Bug fix clearly described?
- [ ] Tests added/updated?
- [ ] No unrelated changes?
- [ ] Backwards compatible?
- [ ] Documentation updated?
- [ ] Safe to deploy immediately?

Approved by: [Name]
```

### For Phase 2 (feature/option1) PRs

**Requirements:**
- [ ] 1-2 approving reviews
- [ ] All tests passing
- [ ] Architecture aligned with Option 1 doc
- [ ] Documentation updated
- [ ] Breaking changes acceptable (isolated to branch)

**Review Checklist:**
```markdown
## Phase 2 PR Review

- [ ] Aligns with OPTION-1-ARCHITECTURE.md?
- [ ] Filtering logic tested?
- [ ] Configuration system working?
- [ ] Backwards compatible with main? (for future merge)
- [ ] Documentation comprehensive?
- [ ] Breaking changes documented?

Approved by: [Name 1], [Name 2]
```

---

## Deployment Strategy

### Current Version Deployments

**Trigger:** Merge to main  
**Target:** Internal team site  
**Automatic:** Yes (via CI/CD)

```yaml
# .github/workflows/deploy-main.yml
name: Deploy Current Version

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build
        env:
          NEXT_PUBLIC_MODE: internal
          NEXT_PUBLIC_SITE_TYPE: team
        run: |
          npm install
          npm run build
      - name: Deploy to Vercel
        run: vercel deploy --prod
```

### Phase 2 Deployments

**Trigger:** Push to feature/option1-template  
**Target:** Preview/staging  
**Automatic:** Yes (preview only)

```yaml
# .github/workflows/deploy-phase2.yml
name: Deploy Phase 2 Preview

on:
  push:
    branches: [feature/option1-template]

jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Personal Preview
        env:
          NEXT_PUBLIC_MODE: external
          NEXT_PUBLIC_OWNER: rostialpin
        run: |
          npm install
          npm run build
      - name: Deploy to Vercel Preview
        run: vercel deploy
```

---

## Timeline & Milestones

### Week 1: Foundation
- [x] Documentation complete
- [ ] Feature branch created
- [ ] Directory structure ready
- [ ] Team aligned on strategy

### Week 2: Core Implementation
- [ ] Owner filtering implemented
- [ ] Configuration system working
- [ ] First sync from main completed

### Week 3: Components & Scripts
- [ ] Components adapted for dual mode
- [ ] Init script working
- [ ] Sync script working
- [ ] Second sync from main completed

### Week 4: Testing & Documentation
- [ ] Comprehensive testing done
- [ ] Setup guides written
- [ ] Preview deployments working
- [ ] Third sync from main completed

### Week 5: Integration
- [ ] Final sync from main
- [ ] All conflicts resolved
- [ ] PR created
- [ ] Team review complete

### Week 6: Merge & Rollout
- [ ] Merged to main
- [ ] Template repo created
- [ ] Teammates onboarding started
- [ ] Personal portfolios deployed

---

## Quick Reference

### I Need to Fix a Bug (Current Version)

```bash
# 1. Branch from main
git checkout main && git pull
git checkout -b bugfix/fix-issue-name

# 2. Fix, test, push
# ... make changes ...
npm run build && npm test
git push origin bugfix/fix-issue-name

# 3. PR to main
# Create PR, get review, merge
```

### I'm Working on Phase 2

```bash
# 1. Branch from feature/option1-template
git checkout feature/option1-template && git pull
git checkout -b feature/option1-my-feature

# 2. Implement, test, push
# ... make changes ...
npm run build && npm test
git push origin feature/option1-my-feature

# 3. PR to feature/option1-template (NOT main)
# Create PR, get review, merge
```

### I Need to Sync Phase 2

```bash
# Weekly sync (Mondays)
git checkout feature/option1-template
git pull origin feature/option1-template
git merge origin/main
# Resolve conflicts if any
git push origin feature/option1-template
```

### Which Branch Am I On?

```bash
git branch
# * = current branch

# Should see:
# * main  (if working on current version)
# * feature/option1-template  (if working on Phase 2)
```

---

## Support & Questions

**Slack Channel:** #portfolio-development

**Phase 2 Lead:** AR (Rostislav Alpin)

**Questions:**
- "Which branch should I use?" → See decision tree below
- "I have a conflict!" → See conflict resolution section
- "Can I merge to main?" → Only if working on current version
- "Phase 2 is blocked" → Message AR

### Decision Tree: Which Branch?

```
Are you fixing a bug or adding content?
├─ YES → Use main branch
│   └─ Create bugfix/content/[name] branch
│       └─ PR to main
│
└─ NO → Are you working on Option 1 architecture?
    ├─ YES → Use feature/option1-template
    │   └─ Create feature/option1-[feature] branch
    │       └─ PR to feature/option1-template
    │
    └─ UNSURE → Ask in #portfolio-development
```

---

## Success Criteria

**Parallel Development Successful If:**

✅ Current version remains stable (zero downtime)  
✅ Bug fixes deployed quickly (<24 hours)  
✅ Content updates seamless (no blocks)  
✅ Phase 2 development progresses without disruption  
✅ Merge conflicts manageable (<5% of files)  
✅ Team understands which branch to use  
✅ No work lost or overwritten

---

**Next Actions:**
1. ✅ Review and approve strategy
2. ⏳ Create feature/option1-template branch
3. ⏳ Begin Phase 2 development
4. ⏳ Continue current version maintenance in parallel

---

**Document History:**
- 2025-11-05: Initial version (AR)

