# Content Ingestion Guide

Use this guide to add content safely for both internal and public builds.

## Sensitivity flags
- `public`: safe for external audiences
- `internal`: visible only in internal builds
- `restricted`: never ships (placeholder only)

## Where to put assets
- Public-safe files: `public/assets/<slug>/...`
- Internal-only large files: link to company storage (Confluence/SharePoint) and mark `sensitivity: internal`.

## What to add to each project entry
- `summary`, `problem`, `solution` (avoid internal details in public text)
- `metrics`: label, value, optional improvement/impact
- `attachments`: videos, pdfs, slides, images, docs, or links (tagged with sensitivity)
- `links`: label + url (tagged with sensitivity)

## Forbidden in public builds
- Links matching: Confluence, JIRA, NPAW, company domains
- Credentials, tokens, internal endpoints

## Pre-PR checklist
- External build passes: `npm run validate:external`
- Content placed under the correct `public/assets/<slug>/`
- Sensitivity flags set for all attachments/links
- PR template checklist completed

## How to add a project (step-by-step)
1) Create a feature branch
```
git checkout -b feature/<initials>-<slug>
```

2) Add public-safe assets (repo)
```
public/
  assets/
    <slug>/
      images/
      pdfs/
      slides/
      videos/
```
Only add public-safe files here. Do NOT put internal files in `public/assets`.

3) Add internal materials (links or private storage)
- Preferred: keep internal materials in Confluence/SharePoint/GitHub and reference them as links with `sensitivity: 'internal'`.
- Alternative (if needed): store binaries in `internal/<slug>/...` and mark those attachments `sensitivity: 'internal'`. The external validator will fail if any internal paths leak into public mode.

4) Update metadata in code
- Open `src/lib/constants/projects.ts`
- Add or complete the entry for `<slug>` (title, summary, problem, solution, techStack, metrics, attachments, links, tags, status)

Example entry:
```ts
{
  id: 'unified-test-automation-framework',
  slug: 'unified-test-automation-framework',
  title: 'Unified Test Automation Framework',
  owner: 'rostialpin',
  summary: 'One framework for Web, WCTV, Roku, Apple, Android.',
  problem: 'Platform-specific frameworks increased maintenance cost.',
  solution: 'Abstractions for drivers/selectors/fixtures; adapters per platform.',
  techStack: ['TypeScript', 'Playwright', 'Appium'],
  metrics: [
    { label: 'Dev Time Reduction', value: '70%', impact: 'Faster releases' },
  ],
  screenshots: [],
  status: 'review',
  attachments: [
    // public-safe file in repo
    { kind: 'slide', title: 'Overview', src: '/assets/unified-test-automation-framework/overview.pdf', sensitivity: 'public' },
    // internal link (not stored in repo)
    { kind: 'doc', title: 'Confluence Spec', src: 'https://confluence/...', provider: 'confluence', sensitivity: 'internal' },
  ],
  links: [
    { label: 'Public README', url: 'https://github.com/...', sensitivity: 'public' },
    { label: 'JIRA Epic', url: 'https://jira/...', sensitivity: 'internal' },
  ],
  tags: [
    { key: 'platform:web', label: 'Web' },
    { key: 'platform:roku', label: 'Roku' },
    { key: 'platform:apple', label: 'Apple' },
    { key: 'platform:android', label: 'Android' },
  ],
}
```

5) Validate locally
```
NEXT_PUBLIC_MODE=external npm run build || true
npm run validate:external
```

6) Open a PR and complete the checklist
- Ensure both CI checks pass:
  - `external-safety / validate-external`
  - `owner-approval / require-owner-approval`
