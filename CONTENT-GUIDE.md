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

---

## How to Add/Update Your Team Member Profile

Your profile appears on the **About** page. Follow these steps to add your information.

### Where to Update
**File:** `src/lib/constants/team.ts`

Find your entry in the `TEAM_MEMBERS` array and replace `undefined` values with your information.

### What to Fill Out

#### 1. **Years of Experience** (Required)
Total years in QA/Testing
```typescript
yearsOfExperience: 8
```

#### 2. **Background** (Required)
Your professional journey in 2-3 sentences
```typescript
background: "Started as a QA Engineer in 2015, progressed through automation and leadership roles. Passionate about building scalable testing solutions and mentoring teams to achieve excellence."
```

#### 3. **Projects Participated** (Optional)
Project IDs you've worked on from our portfolio
```typescript
projectsParticipated: ['data-observability', 'config-comparison', 'device-farm', 'playwright-framework']
```

**Available Project IDs:**
`data-observability`, `config-comparison`, `test-execution-dashboard`, `appium-framework`, `device-farm`, `playwright-framework`, `unified-config`, `migration-tools`, `api-automation`, `performance-testing`, `ci-cd-integration`

#### 4. **Key Skills** (Required)
Your top 3-5 most valuable skills
```typescript
keySkills: [
  'Test Automation Architecture',
  'Team Leadership',
  'CI/CD Pipeline Design',
  'Cross-platform Testing',
  'Playwright/Appium Expertise'
]
```

#### 5. **Professional Interests** (Required)
Areas you're passionate about professionally
```typescript
professionalInterests: [
  'AI-powered testing',
  'Performance optimization',
  'DevOps integration',
  'Test observability'
]
```

#### 6. **Hobbies** (Optional)
Personal interests - makes you relatable!
```typescript
hobbies: ['Photography', 'Hiking', 'Chess', 'Reading sci-fi']
```

#### 7. **Profile Picture** (Optional)
When you have a professional photo:

**Step 1: Prepare your photo**
- Professional headshot or casual professional photo
- Square aspect ratio (400x400px minimum recommended)
- JPG or PNG format
- Keep file size under 500KB

**Step 2: Save photo to the repository**
- Navigate to: `public/assets/team/` folder in the repository
- Name your file using your team ID (from team.ts):
  - If your ID is `rostialpin` → save as `rostialpin.jpg`
  - If your ID is `krishnachaitanya` → save as `krishnachaitanya.jpg`
  - If your ID is `rob1nalex` → save as `rob1nalex.jpg`
- Full path example: `public/assets/team/rostialpin.jpg`

**Step 3: Update your entry in team.ts**
Add the `avatar` field pointing to your photo:
```typescript
avatar: '/assets/team/rostialpin.jpg'  // Use YOUR team ID
```

**Where to find your team ID:**
Open `src/lib/constants/team.ts` and look for the `id` field in your entry.

**Example file structure:**
```
portfolio/
├── public/
│   └── assets/
│       └── team/
│           ├── rostialpin.jpg       ← Your photo goes here
│           ├── krishnachaitanya.jpg
│           └── rob1nalex.jpg
└── src/
    └── lib/
        └── constants/
            └── team.ts              ← Update avatar field here
```

### Full Example

```typescript
{
  id: 'rostialpin',
  name: 'Rostislav Alpin',
  email: 'rostislav.alpin@paramount.com',
  role: 'Manager',

  yearsOfExperience: 8,
  background: "Started as a QA Engineer in 2015, progressed through automation and leadership roles. Passionate about building scalable testing solutions and mentoring teams to achieve excellence.",
  projectsParticipated: ['data-observability', 'config-comparison', 'device-farm'],
  keySkills: ['Test Automation Architecture', 'Team Leadership', 'CI/CD Pipeline Design', 'Cross-platform Testing'],
  professionalInterests: ['AI-powered testing', 'Performance optimization', 'DevOps integration'],
  hobbies: ['Photography', 'Hiking', 'Chess'],
  avatar: '/assets/team/rostialpin.jpg',
},
```

### How to Submit
1. Update your entry in `src/lib/constants/team.ts`
2. (Optional) Add your photo to `public/assets/team/`
3. Create a PR with your changes
4. Your profile will appear on the About page once merged!

### Questions?
Contact Rostislav or refer to `TEAM_INFO_TEMPLATE.md` for detailed guidance.
