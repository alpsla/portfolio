# Phase 2 Quick Start Guide

**For Team Members Working on Option 1 Implementation**

---

## 🎯 What is Phase 2?

Phase 2 is implementing **Option 1 Architecture** - allowing each teammate to have their own personal portfolio while maintaining our team site.

**Current state:** Single team portfolio  
**Phase 2 goal:** Template repo → Personal portfolios for each teammate  
**Your role:** Help implement specific features

---

## 📚 Essential Reading

Before starting, read these docs (in order):

1. **[OPTION-1-ARCHITECTURE.md](./design/OPTION-1-ARCHITECTURE.md)** - What we're building (30 min)
2. **[MIGRATION-PLAN.md](./design/MIGRATION-PLAN.md)** - How we'll get there (20 min)
3. **[PARALLEL-DEVELOPMENT-STRATEGY.md](./design/PARALLEL-DEVELOPMENT-STRATEGY.md)** - Working alongside current version (15 min)

**Total reading:** ~1 hour (worth it!)

---

## 🚀 Getting Started (First Time)

### Step 1: Clone & Setup

```bash
# 1. Clone repo (if not already)
cd ~/Code\ Prjects
git clone <repo-url> portfolio
cd portfolio

# 2. Install dependencies
npm install

# 3. Checkout Phase 2 branch
git checkout -b feature/option1-template origin/main

# 4. Create your work branch
git checkout -b feature/option1-your-feature-name

# 5. Set up environment
cp .env.example .env.local
nano .env.local  # Configure for testing

# 6. Test it works
npm run dev
# Open: http://localhost:3000
```

### Step 2: Understand the Architecture

**Key Concept:** We're adding **owner-based filtering** on top of existing **sensitivity filtering**.

```
Current:
PROJECTS (10 total)
  ↓ sensitivity filter
  → 8 projects (for external mode)

Phase 2:
PROJECTS (10 total)
  ↓ sensitivity filter
  → 8 projects (for external mode)
  ↓ owner filter (NEW!)
  → 5 projects (for Alpin's portfolio)
```

### Step 3: Find Your Task

Check [MIGRATION-PLAN.md](./design/MIGRATION-PLAN.md) for task assignments:

- **Phase 1:** Foundation (AR)
- **Phase 2:** Core filtering (AR + Robin)
- **Phase 3:** Components (Robin + Juney)
- **Phase 4:** Scripts (Rohit + Bobby)
- **Phase 5:** Documentation (Dhanya)

---

## 📋 Common Tasks

### Task: Implement Owner Filtering

**File:** `src/lib/utils/owner-filter.ts`

```typescript
// Your mission: Create this function
export function filterByOwnership(projects: IProject[]): IProject[] {
  const config = getSiteConfig();
  
  // If no owner (team site), return all
  if (!config.owner) return projects;
  
  // Filter to owner's projects
  return projects.filter(p => 
    p.owner === config.owner || 
    p.contributors?.includes(config.owner)
  );
}
```

**Test it:**
```bash
npm test -- owner-filter.test.ts
```

---

### Task: Add Contributors Field

**File:** `src/lib/constants/projects.ts`

```typescript
// Add contributors field to each project
{
  id: 'unified-test-automation-framework',
  owner: 'rostialpin',
  contributors: ['rob1nalex', 'anilbvi'], // NEW!
  // ... rest
}
```

**How to know who contributed?**
1. Check project README
2. Ask in Slack
3. Review Git history: `git log --pretty=format:'%an' -- src/app/projects/unified-framework | sort | uniq`

---

### Task: Adapt Component for Dual Mode

**File:** `src/components/shared/Header.tsx`

```typescript
// Make header work for team AND personal sites
import { getSiteConfig } from '@/lib/utils/config';

export function Header() {
  const config = getSiteConfig();
  
  if (config.isTeam) {
    return <TeamHeader />;
  }
  
  return <PersonalHeader owner={config.owner} />;
}
```

---

### Task: Create Initialization Script

**File:** `scripts/init-personal.ts`

```typescript
// Interactive script to set up personal portfolio
async function initPersonal() {
  const owner = await prompt('Your ID (from team.ts):');
  const domain = await prompt('Your domain:');
  
  // Create .env.local
  const env = `
NEXT_PUBLIC_MODE=external
NEXT_PUBLIC_OWNER=${owner}
NEXT_PUBLIC_SITE_TYPE=personal
  `.trim();
  
  fs.writeFileSync('.env.local', env);
  
  console.log('✅ Personal portfolio initialized!');
}
```

---

## 🔄 Daily Workflow

### Morning Routine

```bash
# 1. Check current branch
git branch
# Should be: feature/option1-your-feature

# 2. Pull latest changes
git checkout feature/option1-template
git pull origin feature/option1-template
git checkout feature/option1-your-feature
git merge feature/option1-template

# 3. Start dev server
npm run dev
```

### Working on Your Feature

```bash
# 1. Make changes
nano src/lib/utils/owner-filter.ts

# 2. Test frequently
npm test -- owner-filter.test.ts
npm run build

# 3. Commit often
git add src/lib/utils/owner-filter.ts
git commit -m "feat(filter): implement owner filtering logic"

# 4. Push at end of day
git push origin feature/option1-your-feature
```

### End of Day

```bash
# 1. Push your work
git push origin feature/option1-your-feature

# 2. Update team (in Slack)
"🌆 End of Day - [Your Name]
✅ Implemented owner filtering
✅ Added tests
🔄 Tomorrow: Component adaptation"
```

---

## 🧪 Testing Your Changes

### Quick Test (During Development)

```bash
# Type check
npm run type-check

# Linting
npm run lint

# Unit tests
npm test

# Build test
npm run build
```

### Comprehensive Test (Before PR)

```bash
# 1. Test team internal mode
NEXT_PUBLIC_MODE=internal \
NEXT_PUBLIC_SITE_TYPE=team \
npm run dev

# Visit: http://localhost:3000
# Verify: All projects visible

# 2. Test personal mode
NEXT_PUBLIC_MODE=external \
NEXT_PUBLIC_OWNER=rostialpin \
NEXT_PUBLIC_SITE_TYPE=personal \
npm run dev

# Visit: http://localhost:3000
# Verify: Only Alpin's projects visible

# 3. Run all validations
npm run validate:external
npm test
npm run build
```

---

## 📤 Creating a Pull Request

### When to Create PR?

✅ Feature complete and tested  
✅ All tests passing  
✅ No linter errors  
✅ Documentation updated  
✅ Self-reviewed code

### PR Process

```bash
# 1. Push your branch
git push origin feature/option1-your-feature

# 2. Create PR on GitHub
# Base: feature/option1-template (NOT main!)
# Head: feature/option1-your-feature
# Title: feat(filter): implement owner-based filtering
# Use PR template, fill in checklist

# 3. Request review
# Reviewer: AR (Alpin) for Phase 2 PRs
# Add label: target:phase2

# 4. Address review comments
# Make changes, push again

# 5. After approval
# Squash and merge to feature/option1-template
```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Build successful

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] All tests passing

## Related
- Implements: Phase X, Task Y from MIGRATION-PLAN.md
- Closes: #[issue-number]
```

---

## 🐛 Troubleshooting

### "Which branch should I use?"

**Decision tree:**
- Fixing a bug? → Use `main`
- Working on Option 1? → Use `feature/option1-template` as base
- Unsure? → Ask in Slack

### "I'm getting merge conflicts!"

```bash
# 1. Don't panic!
git status  # See conflicted files

# 2. Open conflicted file
nano <conflicted-file>

# 3. Look for conflict markers
<<<<<<< HEAD
Your changes
=======
Incoming changes
>>>>>>> feature/option1-template

# 4. Resolve by keeping both or choosing one
# Remove conflict markers

# 5. Mark as resolved
git add <resolved-file>
git commit -m "chore: resolve merge conflict"
```

### "My build is failing!"

```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Check environment
cat .env.local
# Should have NEXT_PUBLIC_MODE and NEXT_PUBLIC_OWNER

# 3. Clear Next.js cache
rm -rf .next
npm run build

# 4. Still failing?
# Share error in Slack
```

### "Tests are failing!"

```bash
# 1. Run specific test
npm test -- owner-filter.test.ts

# 2. See detailed error
npm test -- --verbose

# 3. Check if it's your change
git stash  # Temporarily undo changes
npm test   # If passes, your change broke it

git stash pop  # Restore changes
# Fix the issue

# 4. Still failing?
# Ask for help in Slack
```

---

## 💬 Communication

### Slack Channels
- **#portfolio-development** - General questions
- **#phase2-standup** - Daily updates
- **#phase2-reviews** - PR reviews

### Daily Update Format

```
🌅 Daily Update - [Date] - [Your Name]

Yesterday:
✅ Implemented owner filtering
✅ Added unit tests

Today:
🔄 Working on component adaptation
🔄 Writing documentation

Blockers:
❌ None (or describe blocker)
```

### Getting Help

**Before asking:**
1. Check documentation (OPTION-1-ARCHITECTURE.md)
2. Search Slack history
3. Check existing code for patterns

**When asking:**
```
🆘 Help Needed - [Your Name]

What I'm trying to do:
[Describe task]

What I've tried:
[List attempts]

Error/Issue:
[Paste error or describe]

Files involved:
- src/lib/utils/owner-filter.ts
```

---

## 📖 Code Style Guide

### TypeScript

```typescript
// ✅ Good
export function filterByOwnership(
  projects: IProject[]
): IProject[] {
  // Implementation
}

// ❌ Bad
export function filterByOwnership(projects: any): any {
  // Missing types
}
```

### File Headers

```typescript
/**
 * Utils: Owner-based filtering
 * Author: [Your Initials]
 * Created: 2025-11-05
 * Modified: 2025-11-05 by [Initials]
 * Description: Filters projects based on owner configuration
 */
```

### Comments

```typescript
// ✅ Good - Explain WHY
// Filter to owner's projects because personal portfolios
// should only show projects they contributed to
return projects.filter(p => p.owner === owner);

// ❌ Bad - Explains WHAT (obvious from code)
// Filter projects by owner
return projects.filter(p => p.owner === owner);
```

---

## 🎯 Success Checklist

### Before Saying "I'm Done"

- [ ] Feature implemented completely
- [ ] Unit tests written and passing
- [ ] Manual testing completed
- [ ] Code self-reviewed
- [ ] No console.logs left behind
- [ ] Types defined (no `any`)
- [ ] Documentation updated
- [ ] PR created and reviewed
- [ ] Merged to feature/option1-template

---

## 📚 Key Files Reference

**Core Logic:**
- `src/lib/utils/owner-filter.ts` - Owner filtering
- `src/lib/utils/config.ts` - Configuration management
- `src/lib/utils/safety.ts` - Sensitivity filtering (existing)

**Data:**
- `src/lib/constants/projects.ts` - Project catalog
- `src/lib/constants/team.ts` - Team member data

**Configuration:**
- `config/template-defaults.ts` - Default config
- `config/personal-config.ts` - Personal config

**Scripts:**
- `scripts/init-personal.ts` - Initialization
- `scripts/sync-template.ts` - Sync updates
- `scripts/check-ownership.ts` - Validation

**Documentation:**
- `docs/design/OPTION-1-ARCHITECTURE.md` - Architecture
- `docs/design/MIGRATION-PLAN.md` - Implementation plan
- `docs/design/PARALLEL-DEVELOPMENT-STRATEGY.md` - Development workflow

---

## 🚀 Quick Commands

```bash
# Switch to Phase 2 branch
git checkout feature/option1-template

# Create your feature branch
git checkout -b feature/option1-my-feature

# Run tests
npm test

# Run dev server (team mode)
NEXT_PUBLIC_MODE=internal npm run dev

# Run dev server (personal mode - test as Alpin)
NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rostialpin npm run dev

# Build
npm run build

# Validate external mode
npm run validate:external

# Push your work
git push origin feature/option1-my-feature
```

---

## ❓ FAQ

**Q: Can I work on current version (main) and Phase 2 simultaneously?**  
A: Yes! Just use separate branches and don't mix changes.

**Q: How often should I sync with feature/option1-template?**  
A: Daily or whenever you start new work.

**Q: Should I create PR to main or feature/option1-template?**  
A: For Phase 2 work → `feature/option1-template`  
   For bug fixes → `main`

**Q: Can I test my changes locally?**  
A: Yes! Set environment variables and run `npm run dev`.

**Q: What if I break something?**  
A: Don't worry! We're on a feature branch. Just fix and push again.

**Q: When will Phase 2 go live?**  
A: Week 6 (see MIGRATION-PLAN.md for timeline).

---

**Ready to Start?**

1. Read the architecture doc
2. Check your task assignment
3. Create your feature branch
4. Start coding!
5. Ask questions in Slack

**You got this! 🚀**

---

**Document History:**
- 2025-11-05: Initial version (AR)

