# Phase 2 Next Steps - Component Adaptation

**Last Updated:** 2025-11-05  
**Current Status:** Phase 1 Complete ✅, Ready for Phase 2  
**Branch:** `feature/option1-template` (local, 4 commits)

---

## ✅ Phase 1 Complete - What We Built

### Core Architecture
- ✅ **Two-layer filtering system** - Sensitivity + Ownership
- ✅ **Configuration management** - Environment-based site detection
- ✅ **Type system** - Full TypeScript support with strict mode
- ✅ **Template defaults** - Color palettes, themes, examples
- ✅ **Unit tests** - 34+ test cases covering all scenarios

### Documentation Suite (15,000+ words)
- ✅ Complete architecture specification
- ✅ 8-phase migration plan
- ✅ Parallel development strategy
- ✅ Developer quick start guide
- ✅ Session continuity system

### Impact
- All 10 projects now have contributor information
- Ready to filter projects by ownership
- Can detect team vs personal site modes
- Foundation for personal portfolio deployment

---

## 🎯 Phase 2: Component Adaptation (Next)

**Goal:** Make existing components work with owner-based filtering

**Timeline:** 1-2 weeks  
**Complexity:** Medium  
**Dependencies:** Phase 1 complete ✅

### Overview

Phase 2 integrates the filtering system into existing UI components so they automatically show the right projects based on site mode.

---

## 📋 Phase 2 Tasks Breakdown

### Task 1: Update Home Page (Priority: HIGH)
**File:** `src/app/page.tsx`

**Current State:** Shows all projects hardcoded  
**Target State:** Uses `getFilteredProjects()` to show filtered list

**Implementation:**
```typescript
// Before
import { PROJECTS } from '@/lib/constants/projects';

// After
import { getFilteredProjects } from '@/lib/utils/owner-filter';

export default function HomePage() {
  const projects = getFilteredProjects(); // Auto-filters based on config
  
  return (
    <main>
      <ProjectGrid projects={projects} />
    </main>
  );
}
```

**Time:** 30 minutes  
**Testing:** Verify team mode shows all, personal mode shows filtered

---

### Task 2: Update Project Detail Page (Priority: HIGH)
**File:** `src/app/projects/[slug]/page.tsx`

**Current State:** Fetches from full PROJECTS array  
**Target State:** Fetches from filtered projects only

**Implementation:**
```typescript
// Before
const project = PROJECTS.find(p => p.slug === params.slug);

// After
const projects = getFilteredProjects();
const project = projects.find(p => p.slug === params.slug);
```

**Edge Case:** Handle project not found (404) when filtered out

**Time:** 30 minutes

---

### Task 3: Create Team vs Personal Layout Detection (Priority: HIGH)
**File:** `src/app/layout.tsx`

**Current State:** Single layout for all modes  
**Target State:** Detects mode and adapts layout accordingly

**Implementation:**
```typescript
import { getSiteConfig } from '@/lib/utils/config';

export default function RootLayout({ children }) {
  const config = getSiteConfig();
  
  return (
    <html>
      <body data-site-mode={config.mode} data-site-type={config.siteType}>
        <Header config={config} />
        {children}
        <Footer config={config} />
      </body>
    </html>
  );
}
```

**Time:** 1 hour

---

### Task 4: Adapt Header Component (Priority: MEDIUM)
**File:** `src/components/shared/Header.tsx`

**Current State:** Same header for all  
**Target State:** Shows different nav/branding based on mode

**Options:**

**Option A: Conditional Rendering (Simple)**
```typescript
export function Header() {
  const config = getSiteConfig();
  
  if (config.isPersonal) {
    return <PersonalHeader owner={config.owner} />;
  }
  
  return <TeamHeader />;
}
```

**Option B: Adaptive Component (Flexible)**
```typescript
export function Header() {
  const config = getSiteConfig();
  const effective = getEffectiveConfig();
  
  return (
    <header>
      <h1>{config.isTeam ? 'QA Team' : effective.displayName}</h1>
      {/* Navigation adapts based on config */}
    </header>
  );
}
```

**Time:** 2 hours

---

### Task 5: Create Personal Portfolio Components (Priority: MEDIUM)
**Directory:** `src/components/personal/`

**Components to Create:**
1. `PersonalHero.tsx` - Personal introduction section
2. `PersonalAbout.tsx` - About me section
3. `PersonalProjects.tsx` - Projects grid with ownership info

**Example - PersonalHero:**
```typescript
import { getEffectiveConfig } from '@/lib/utils/config';

export function PersonalHero() {
  const config = getEffectiveConfig();
  
  return (
    <section className="hero">
      <h1>{config.displayName}</h1>
      <p>{config.personal?.tagline || config.member?.role}</p>
      <SocialLinks social={config.social} />
    </section>
  );
}
```

**Time:** 3-4 hours for all components

---

### Task 6: Update About Page (Priority: MEDIUM)
**File:** `src/app/about/page.tsx`

**Current State:** Team-focused about page  
**Target State:** Switches between team and personal bio

**Implementation:**
```typescript
export default function AboutPage() {
  const config = getSiteConfig();
  
  if (config.isPersonal) {
    return <PersonalAboutPage />;
  }
  
  return <TeamAboutPage />;
}
```

**Time:** 2 hours

---

### Task 7: Add Configuration Validation (Priority: LOW)
**File:** `src/app/layout.tsx`

**Purpose:** Show helpful errors in development if misconfigured

**Implementation:**
```typescript
export default function RootLayout({ children }) {
  if (process.env.NODE_ENV === 'development') {
    const errors = validateConfig();
    if (errors.length > 0) {
      console.error('[Config Validation]', errors);
    }
  }
  
  // ... rest of layout
}
```

**Time:** 30 minutes

---

### Task 8: Update Project Card Component (Priority: LOW)
**File:** `src/components/shared/ProjectCard.tsx`

**Enhancement:** Show ownership/contributor badges in personal mode

**Implementation:**
```typescript
export function ProjectCard({ project }) {
  const config = getSiteConfig();
  
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      {config.isPersonal && (
        <Badge>
          {project.owner === config.owner ? 'Owner' : 'Contributor'}
        </Badge>
      )}
    </div>
  );
}
```

**Time:** 1 hour

---

## 🧪 Testing Strategy for Phase 2

### Manual Testing Scenarios

**Test 1: Team Internal Mode**
```bash
NEXT_PUBLIC_MODE=internal npm run dev
```
- ✅ Shows all projects
- ✅ Shows internal links
- ✅ Team branding displayed

**Test 2: Team External Mode**
```bash
NEXT_PUBLIC_MODE=external npm run dev
```
- ✅ Shows only public projects
- ✅ Internal links hidden
- ✅ Team branding displayed

**Test 3: Personal Mode (Alpin)**
```bash
NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rostialpin npm run dev
```
- ✅ Shows only Alpin's projects (5 expected)
- ✅ Personal branding displayed
- ✅ "Owner" vs "Contributor" badges shown

**Test 4: Personal Mode (Robin)**
```bash
NEXT_PUBLIC_MODE=external NEXT_PUBLIC_OWNER=rob1nalex npm run dev
```
- ✅ Shows only Robin's projects (8 expected)
- ✅ Personal branding displayed

**Test 5: Navigation & 404s**
- ✅ Direct URL to filtered-out project shows 404
- ✅ Navigation only shows accessible projects

---

## 📦 Estimated Effort

| Task | Priority | Time | Dependencies |
|------|----------|------|--------------|
| 1. Update Home Page | HIGH | 30min | None |
| 2. Update Project Detail | HIGH | 30min | Task 1 |
| 3. Layout Detection | HIGH | 1hr | None |
| 4. Adapt Header | MEDIUM | 2hr | Task 3 |
| 5. Personal Components | MEDIUM | 4hr | Task 3, 4 |
| 6. Update About Page | MEDIUM | 2hr | Task 5 |
| 7. Config Validation | LOW | 30min | None |
| 8. Project Card Update | LOW | 1hr | None |

**Total:** ~11.5 hours (1.5-2 days of focused work)

---

## 🚀 Recommended Approach

### Day 1: Core Integration (HIGH Priority)
1. ✅ Update home page with filtering
2. ✅ Update project detail page
3. ✅ Add layout detection
4. Test all three scenarios

### Day 2: Components & Polish (MEDIUM Priority)
5. ✅ Adapt header component
6. ✅ Create personal portfolio components
7. ✅ Update about page
8. Comprehensive testing

### Day 3: Refinement (LOW Priority)
9. ✅ Add config validation
10. ✅ Update project cards
11. ✅ Final testing & bug fixes

---

## 📝 Before Starting Phase 2

### Prerequisites Checklist
- [x] Phase 1 complete
- [x] Feature branch created
- [x] TypeScript compiling
- [x] Tests written
- [ ] **Decide:** Push branch now or after Phase 2?
- [ ] **Optional:** Team review of Phase 1

### Environment Setup
```bash
# Make sure you're on the right branch
git checkout feature/option1-template

# Pull any updates (if you pushed)
git pull origin feature/option1-template

# Verify everything compiles
npm run build

# Start dev server
npm run dev
```

---

## 🎯 Success Criteria for Phase 2

Phase 2 is complete when:

✅ Home page shows filtered projects based on owner  
✅ Project detail respects filtering (404 if not accessible)  
✅ Layout detects team vs personal mode  
✅ Header adapts to current mode  
✅ Personal portfolio components created  
✅ About page switches between team/personal  
✅ All manual tests pass  
✅ No TypeScript errors  
✅ Build succeeds  

---

## 💡 Tips for Phase 2 Implementation

### 1. Work Incrementally
- Implement one task at a time
- Test after each task
- Commit frequently

### 2. Use Existing Patterns
- Follow current component structure
- Maintain consistent styling
- Reuse existing utilities

### 3. Keep It Simple
- Start with Option A (simple conditional)
- Refactor to Option B later if needed
- Don't over-engineer

### 4. Test Constantly
- Run dev server in different modes
- Check console for errors
- Verify filtering works correctly

---

## 🔗 Related Documentation

- **Architecture:** `docs/design/OPTION-1-ARCHITECTURE.md`
- **Migration Plan:** `docs/design/MIGRATION-PLAN.md` (see Phase 2 section)
- **Quick Start:** `docs/PHASE2-QUICKSTART.md`
- **Session Status:** `QUICK_START_NEXT_SESSION.md`

---

## 🆘 If You Get Stuck

### Common Issues

**Issue:** TypeScript errors with config  
**Solution:** Check import paths, verify config types

**Issue:** Filtering not working  
**Solution:** Verify NEXT_PUBLIC_OWNER is set, check env variables

**Issue:** All projects showing in personal mode  
**Solution:** Check getSiteConfig() returns correct owner

**Issue:** 404 for all projects  
**Solution:** Verify project data has contributors field

### Getting Help

1. Check the architecture doc for design decisions
2. Review test files for usage examples
3. Check git log for recent changes
4. Ask in #portfolio-development Slack channel

---

**Ready to Start Phase 2?**

Choose your path:
- **Path A:** Push branch now, get team review, then start Phase 2
- **Path B:** Continue locally, complete Phase 2, then push everything
- **Path C:** Push branch but keep working locally in parallel

**Recommended:** Path B (complete Phase 2 locally, then push all together)

---

*Document created: 2025-11-05*  
*Last updated: 2025-11-05*  
*Status: Ready to begin*

