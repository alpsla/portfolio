# QA Team Portfolio – Unified QA Innovations

A free, reusable portfolio site for our QA team to showcase 5 years of innovations: Unified Testing Framework, EVA, DART, Onboarding Automation, COPPA, QA Dashboards, Report Portal, NPAW integration, Data Observability, and Config Comparison.

This repository is designed for parallel collaboration and to produce two builds:

- Internal build: includes links to company systems (GitHub, Confluence, JIRA, NPAW) and non-public materials.
- External build: redacts/hides sensitive materials, showing concepts, impact, and demos safe for public viewing.

---

## 🚀 Phase 2: Personal Portfolios (NEW!)

**Status:** Documentation Complete - Ready to Begin  
**Goal:** Enable each teammate to own an independent, portable portfolio

We're evolving to a **template system** where:
- ✅ Each teammate owns their repository
- ✅ Personal portfolios show only their projects
- ✅ Customizable branding per person
- ✅ Portable (take to next job)
- ✅ Internal team site continues to work

**📖 Full Documentation:** [README-PHASE2.md](./README-PHASE2.md)

**Quick Links:**
- 📋 [Implementation Summary](./docs/PHASE2-IMPLEMENTATION-SUMMARY.md)
- 📐 [Architecture Design](./docs/design/OPTION-1-ARCHITECTURE.md)
- 🗺️ [Migration Plan](./docs/design/MIGRATION-PLAN.md)
- 🚀 [Quick Start Guide](./docs/PHASE2-QUICKSTART.md)

---


## Highlights

- Single catalog of projects/initiatives shared by all teammates
- Per-profile views to tailor for interviews without duplicating content
- Sensitivity model and redaction utilities for internal/external builds
- Next.js 14 App Router, TypeScript, Tailwind-ready structure (framework-agnostic scaffold)


## Project Structure

```
portfolio/
  README.md
  .cursorrules
  src/
    app/
      page.tsx                    # Home – list all projects (placeholder)
      projects/
        [slug]/page.tsx           # Project detail (placeholder)
      profiles/
        [person]/page.tsx         # Profile view (placeholder)
    components/
      shared/
        ProjectCard.tsx           # Shared list card
        ErrorBoundary.tsx         # Error boundary wrapper
        SafetyBanner.tsx          # Internal vs public indicator
        .gitkeep
    lib/
      types/
        project.ts                # IProject, IMetric, IAttachment, Sensitivity
      constants/
        projects.ts               # Seed projects (stubs, sensitivity-aware)
        team.ts                   # Team member mapping
      utils/
        safety.ts                 # Internal vs external sanitization helpers
    .gitkeep
  public/
    assets/
      videos/.gitkeep
      slides/.gitkeep
      pdfs/.gitkeep
      images/.gitkeep
```


## Getting Started

### Quick Start

1) **Clone the repository**

```bash
git clone <repo-url> portfolio
cd portfolio
```

2) **Install dependencies**

```bash
npm install
```

3) **Create environment configuration**

```bash
# Create .env.local file with build mode
echo "NEXT_PUBLIC_MODE=internal" > .env.local
```

4) **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Detailed Setup

For detailed setup instructions including Node version requirements and troubleshooting, see [SETUP.md](./SETUP.md).

### Optional: QA Tooling

```bash
npm i -D husky lint-staged @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
npx husky init
```


## Internal vs External Builds

We use a simple environment flag to control redaction.

- `NEXT_PUBLIC_MODE=internal` – show internal links/materials marked as internal
- `NEXT_PUBLIC_MODE=external` – only show public materials and redact sensitive text/links

Build examples (package scripts recommended):

```bash
# External/redacted build
NEXT_PUBLIC_MODE=external npm run build

# Internal/full build
NEXT_PUBLIC_MODE=internal npm run build
```


## Content Sensitivity Model

Every project, attachment, or link can declare a `sensitivity`:

- `public` – safe for external audiences
- `internal` – only visible in internal builds
- `restricted` – excluded from both builds (placeholder only)

Sanitization helpers in `src/lib/utils/safety.ts` filter or redact accordingly.


## Contribution & Collaboration

- Branch: `feature/[initials]-[feature-name]` (e.g., `feature/ar-unified-framework`)
- Commits: `type(scope): description` (e.g., `feat(projects): add unified framework`) 
- PR required for all changes; reviewers: at least one teammate
- Ownership by routes and shared components:
  - `src/app/projects/unified-framework` → Team Member 1
  - `src/app/projects/code-coverage` → Team Member 2
  - `src/app/projects/chatbot` → Team Member 3
  - `src/app/projects/dashboards` → Team Member 4
  - `src/components` → Shared (coordinate before edits)

Communication markers in code:

```ts
// TODO: AR - description
// FIXME: AR - issue description
// NOTE: AR - important note for team
// BLOCKED: AR - waiting on [teammate/component]
```


## Team Profiles

Map teammate profiles in `src/lib/constants/team.ts`. Rostislav and Alpin Rostislav are the same person (initials `AR`).


## Seeding Content

Add or edit project entries in `src/lib/constants/projects.ts`. Use `attachments` and `links` with `sensitivity` flags. Place safe media files under `public/assets/...`.

Example tags for platforms:

- Web, WCTV, Roku, Apple, Android


## License and Ownership

- This repository contains team-authored descriptions and optionally redacted assets.
- Do not commit confidential materials to public branches. Use `internal` sensitivity and ensure external builds exclude/obfuscate.
- External sharing should be reviewed by the team lead.


## Troubleshooting

### Port Already in Use

If port 3000 is in use, Next.js will automatically try port 3001:

```
⚠ Port 3000 is in use, trying 3001 instead.
- Local: http://localhost:3001
```

To stop all Next.js dev servers:
```bash
pkill -f "next dev"
```

### Tailwind CSS Not Working

If you see errors about Tailwind CSS or PostCSS:

1. Ensure you have Tailwind v3.4.x installed (not v4):
```bash
npm install -D tailwindcss@^3.4.1 postcss autoprefixer
```

2. Verify configuration files exist:
   - `tailwind.config.js` (not `.ts`)
   - `postcss.config.js` (not `.mjs`)
   - `src/app/globals.css` (with `@tailwind` directives)

3. Restart the dev server after changes:
```bash
pkill -f "next dev"
npm run dev
```

### Environment Variables Not Loading

If the SafetyBanner doesn't show or environment variables aren't working:

1. Ensure `.env.local` exists in the project root
2. Restart the dev server to pick up new environment variables
3. Check the terminal for "Environments: .env.local" or "Reload env: .env.local"

### Missing Configuration Files

If you get build errors, ensure these files exist:
- `next.config.js` - Next.js configuration
- `.eslintrc.json` - ESLint configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `src/app/layout.tsx` - Root layout component
- `src/app/globals.css` - Global styles

See [SETUP.md](./SETUP.md) for file templates.


## Roadmap

- Add MDX support for richer narratives
- Add search and tag filters on Home and Profiles
- Add CI (type check, ESLint, tests, build), Vercel previews


# Deployment trigger
