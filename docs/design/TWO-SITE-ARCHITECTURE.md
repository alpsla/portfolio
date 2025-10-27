# Two-Site Architecture: Internal vs External

## Overview

Based on team feedback, we're building **TWO separate websites** with different purposes:

1. **Internal Team Site** (`internal.qa-portfolio.com`) - Team showcase, company use
2. **External Individual Sites** (`yourname.dev`) - Personal portfolios for job hunting

---

## Architecture Strategy

### Deployment Model

```
┌─────────────────────────────────────────────┐
│  Shared Codebase (Same Next.js App)        │
│  /Users/team/portfolio                      │
└─────────────────────────────────────────────┘
              ↓           ↓
    ┌─────────┴─────┐   ┌┴──────────────┐
    │ INTERNAL      │   │ EXTERNAL      │
    │ Build         │   │ Build         │
    └───────────────┘   └───────────────┘
         ↓                    ↓
    ┌───────────────┐   ┌───────────────┐
    │ Deploy to:    │   │ Deploy to:    │
    │ Company       │   │ Vercel/       │
    │ Intranet      │   │ Netlify/      │
    │               │   │ GitHub Pages  │
    └───────────────┘   └───────────────┘
```

### Build Configuration

**Environment Variables:**

```bash
# Internal build (company deployment)
NEXT_PUBLIC_SITE_MODE=internal
NEXT_PUBLIC_BASE_URL=https://qa-portfolio.internal.company.com

# External build (individual deployment)
NEXT_PUBLIC_SITE_MODE=external
NEXT_PUBLIC_OWNER=rostialpin  # Each teammate sets their own
NEXT_PUBLIC_BASE_URL=https://rostislav.dev
```

**Build Scripts (package.json):**

```json
{
  "scripts": {
    "build:internal": "NEXT_PUBLIC_SITE_MODE=internal npm run build",
    "build:external": "NEXT_PUBLIC_SITE_MODE=external npm run build",
    "build:personal": "npm run build:external"
  }
}
```

---

## Key Differences

### 1. Internal Team Site

**Purpose:** Showcase collective achievements, knowledge sharing

**Characteristics:**
- **Team-focused branding**
- **All projects visible** (team catalog)
- **Company links/docs** (Confluence, JIRA, internal dashboards)
- **Attribution:** "Led by X, with Y, Z" (collaborative)
- **Navigation:** Projects | Team | About
- **Home page:** Team hero → All project cards

**URL Structure:**
```
qa-portfolio.internal.company.com/
  /projects/unified-framework
  /projects/eva
  /team
  /about
```

**Access:** Company network only (VPN required)

---

### 2. External Individual Sites

**Purpose:** Personal job-hunting portfolio

**Characteristics:**
- **Individual branding** ("Rostislav Alpin - QA Engineer")
- **Filtered projects** (only projects I contributed to)
- **Public-safe content** (no company links, redacted text)
- **Attribution:** "My role: Lead Engineer" (personal focus)
- **Navigation:** Projects | About Me | Resume
- **Home page:** Personal hero → My project cards only
- **Customizable:** Each teammate can tweak colors, bio, featured projects

**URL Structure:**
```
rostislav.dev/
  /projects/unified-framework  (only if I contributed)
  /projects/eva                (only if I contributed)
  /about
  /resume.pdf
```

**Access:** Public internet

---

## Implementation Strategy

### Shared Components with Variants

All components support both modes via props/config:

```tsx
// components/Hero.tsx
export function Hero({ mode }: { mode: 'internal' | 'external' }) {
  const owner = process.env.NEXT_PUBLIC_OWNER; // For external builds
  
  if (mode === 'internal') {
    return (
      <div>
        <h1>QA Innovations Team</h1>
        <p>5 Years of Collective Achievement</p>
      </div>
    );
  }
  
  // External mode
  const member = TEAM_MEMBERS[owner];
  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role} • QA Automation Expert</p>
    </div>
  );
}
```

### Data Filtering

**Internal Build:**
```tsx
// Show all projects
const projects = sanitizeAllProjects(PROJECTS); // Returns all (internal mode)
```

**External Build:**
```tsx
// Show only MY projects
const owner = process.env.NEXT_PUBLIC_OWNER;
const projects = sanitizeAllProjects(PROJECTS)
  .filter(p => p.owner === owner || p.contributors?.includes(owner));
```

### Style Variations

Both sites use **Option B (Lime + Blue)** but with different intensities:

**Internal:**
- Bold lime accents
- High energy (terminal green everywhere)
- Consistent branding

**External:**
- Customizable per teammate
- Can dial down intensity if preferred
- Personal touches (avatar, bio, social links)

---

## File Structure

```
src/
  app/
    layout.tsx                 # Detects mode, applies theme
    page.tsx                   # Routes to internal/external home
    (internal)/                # Internal-only routes
      team/
        page.tsx
      about/
        page.tsx
    (external)/                # External-only routes
      about/
        page.tsx               # Personal bio
      resume/
        page.tsx
    projects/
      [slug]/
        page.tsx               # Shared project detail (filtered)
  components/
    internal/
      TeamHero.tsx
      TeamGrid.tsx
    external/
      PersonalHero.tsx
      MyProjects.tsx
    shared/
      ProjectCard.tsx          # Works for both
      ProjectDetail.tsx        # Works for both
  lib/
    config/
      site-mode.ts             # Detect internal vs external
```

---

## Teammate Workflow

### For Internal Site (One-time setup)

1. Deploy to company infrastructure
2. Set `NEXT_PUBLIC_SITE_MODE=internal`
3. Everyone contributes to shared `projects.ts`
4. Updates deploy automatically

### For External Site (Each teammate)

1. **Fork or clone** the repo to personal GitHub
2. **Configure** `.env.production`:
   ```
   NEXT_PUBLIC_SITE_MODE=external
   NEXT_PUBLIC_OWNER=rostialpin
   ```
3. **Customize** `src/lib/constants/team.ts` (your bio, social, featured projects)
4. **Deploy** to Vercel/Netlify (free tier)
5. **Point** custom domain (optional)

### Keeping in Sync

Each teammate can pull latest projects from main repo:

```bash
# Add main repo as upstream
git remote add upstream git@github.com:company/qa-portfolio.git

# Periodically pull new projects
git fetch upstream
git merge upstream/main

# Deploy updated portfolio
npm run build:external
```

---

## Domain Strategy

### Internal
- **Option A:** Subdomain of company domain
  - `qa-portfolio.internal.company.com`
  - Requires IT/DevOps to set up
  
- **Option B:** Company Vercel workspace
  - `qa-team.vercel.app` or custom domain
  - Deploy from company GitHub org

### External (Per Teammate)

Each teammate chooses:

**Free Options:**
- `rostislav-qa.vercel.app` (Vercel default)
- `rostislav-qa.netlify.app` (Netlify default)
- `rostialpin.github.io` (GitHub Pages)

**Custom Domain ($10-15/year):**
- `rostislav.dev`
- `yourname.com`
- Point to Vercel/Netlify deployment

---

## Content Strategy

### What Goes in Both Sites

✅ Project descriptions (problem/solution)
✅ Tech stacks
✅ Public-safe metrics
✅ Public PDFs/videos/slides (marked `sensitivity: 'public'`)

### Internal-Only Content

🔒 Confluence/JIRA links
🔒 Internal dashboards (New Relic, Jenkins)
🔒 Company-specific metrics
🔒 Internal PDFs (marked `sensitivity: 'internal'`)
🔒 Team contact info

### External-Only Content

🌐 Personal bio and career narrative
🌐 Social links (LinkedIn, GitHub, personal site)
🌐 Downloadable resume
🌐 "Hire me" CTA
🌐 Personal branding (avatar, tagline)

---

## UI Differences

### Internal Team Site

```
┌─────────────────────────────────────────┐
│ QA INNOVATIONS TEAM                     │ [Team logo]
│ 5 Years of Innovation                   │
├─────────────────────────────────────────┤
│ OUR TEAM                                │
│ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐        │
│ │AR│ │RM│ │JJ│ │RA│ │BA│ │DM│        │ [All members]
├─────────────────────────────────────────┤
│ ALL PROJECTS                            │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│ │Eva │ │DART│ │Port│ │NPAW│ ...       │ [All 10 projects]
└─────────────────────────────────────────┘
```

### External Individual Site

```
┌─────────────────────────────────────────┐
│ ROSTISLAV ALPIN                         │ [Personal]
│ Senior QA Automation Engineer           │
│ [GitHub] [LinkedIn] [Resume]            │
├─────────────────────────────────────────┤
│ MY EXPERTISE                            │
│ "I build unified test frameworks..."    │ [Personal bio]
├─────────────────────────────────────────┤
│ MY PROJECTS                             │
│ ┌────┐ ┌────┐ ┌────┐                   │
│ │Eva │ │DART│ │NPAW│                   │ [Only MY 3 projects]
│ Lead   Co-Lead Owner                    │
└─────────────────────────────────────────┘
```

---

## Technical Implementation

### 1. Site Mode Detection

```ts
// src/lib/config/site-mode.ts
export type SiteMode = 'internal' | 'external';

export function getSiteMode(): SiteMode {
  return (process.env.NEXT_PUBLIC_SITE_MODE as SiteMode) || 'external';
}

export function isInternal(): boolean {
  return getSiteMode() === 'internal';
}

export function getOwner(): string | null {
  return process.env.NEXT_PUBLIC_OWNER || null;
}
```

### 2. Root Layout

```tsx
// src/app/layout.tsx
import { getSiteMode, getOwner } from '@/lib/config/site-mode';

export default function RootLayout({ children }) {
  const mode = getSiteMode();
  const owner = getOwner();
  
  return (
    <html>
      <body data-site-mode={mode} data-owner={owner}>
        {mode === 'internal' ? <InternalNav /> : <ExternalNav owner={owner} />}
        {children}
      </body>
    </html>
  );
}
```

### 3. Home Page Routing

```tsx
// src/app/page.tsx
import { getSiteMode } from '@/lib/config/site-mode';
import InternalHome from './(internal)/home';
import ExternalHome from './(external)/home';

export default function HomePage() {
  const mode = getSiteMode();
  
  if (mode === 'internal') {
    return <InternalHome />;
  }
  
  return <ExternalHome />;
}
```

---

## Deployment Guide

### Internal Site

```bash
# On company CI/CD
export NEXT_PUBLIC_SITE_MODE=internal
npm run build
# Deploy to company infrastructure
```

### External Site (Each Teammate)

**Option 1: Vercel (Recommended)**

1. Push to personal GitHub
2. Import to Vercel
3. Set environment variable:
   - `NEXT_PUBLIC_SITE_MODE=external`
   - `NEXT_PUBLIC_OWNER=yourname`
4. Deploy

**Option 2: Netlify**

Same as Vercel, but on Netlify

**Option 3: GitHub Pages**

```bash
npm run build:external
npm run export  # Generate static HTML
# Push /out to gh-pages branch
```

---

## Benefits of Two-Site Approach

### For the Team
✅ Single source of truth for project data
✅ Easy to keep internal site updated
✅ Centralized maintenance of shared components
✅ Consistent branding for team identity

### For Individuals
✅ Full control over personal branding
✅ Can customize without affecting team site
✅ Free hosting on personal accounts
✅ Portfolio updates without asking permission
✅ Safe for job hunting (no company IP exposure)

### For the Company
✅ Internal site stays behind firewall
✅ No risk of IP leakage
✅ Team can share best practices internally
✅ No conflict when employees leave

---

## Migration Path

1. **Phase 1:** Build internal site (team use)
2. **Phase 2:** Add external mode support
3. **Phase 3:** Each teammate deploys their own
4. **Ongoing:** Team maintains shared project catalog

---

## Next Steps

1. ✅ Implement Option B color palette
2. Create internal/external home page variants
3. Build project detail page (handles mixed media)
4. Set up deployment pipelines
5. Document teammate deployment process

