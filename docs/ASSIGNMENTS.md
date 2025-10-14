# Initiative Assignments

Owner: @rostialpin
Delegate (fallback): @rob1nalex

This document tracks who owns each initiative, the canonical slug, and expected deliverables. Slugs map to folders under `public/assets/<slug>/` and to project entries in `src/lib/constants/projects.ts`.

| Initiative | Slug | Owner | Co-owner |
|---|---|---|---|
| Unified Test Case Optimization | unified-test-case-optimization | @rob1nalex |  |
| Unified Test Automation Framework | unified-test-automation-framework | @rob1nalex |  |
| Test Manager Bot & EVA | test-manager-bot-eva | @JuneyJestin |  |
| DART | dart | @rohitmenonv |  |
| Onboarding Automation Setup | onboarding-automation-setup | @rohitmenonv |  |
| COPPA - Process & Technology | coppa-process-technology | @rob1nalex |  |
| New Relic QE OKR - Dashboard | new-relic-qe-okr-dashboard | @anilbvi |  |
| Report Portal | report-portal | @rohitmenonv |  |
| NPAW Integration and Testing | npaw-integration-testing | @rostialpin |  |
| Data Observability (next move) | data-observability | @rostialpin |  |
| Config Comparison | config-comparison | @anilbvi |  |

## Deliverables per initiative
- Description: problem, solution, outcomes/impact
- Metrics: 2–4 metrics with improvements/impact
- Attachments (tag sensitivity):
  - PDFs, PPTs, docs, images, videos (.mov)
  - Links: Confluence, GitHub, SharePoint (mark as `internal`)
  - Public-safe resources (mark as `public`)
- Owner validates external safety with `npm run validate:external`

## Submission flow
1. Create a branch: `feature/<initials>-<slug>`
2. Add assets under `public/assets/<slug>/` (internal items may be links only)
3. Update the project stub in `src/lib/constants/projects.ts`
4. Open PR and complete the checklist
5. Get owner approval (rostialpin or rob1nalex)
