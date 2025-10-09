# CI and Security Governance Agreement

Owner: @rostialpin
Delegate: @rob1nalex
Applies to: project-showcase-template (private repo)

## 1) Purpose
Ensure no sensitive content is exposed externally and keep a consistent, reviewable process for changes.

## 2) Source of Truth and Visibility
- Source of Truth (SOT): this private repository.
- External/Public template: a separate sanitized repo (future). No direct commits of internal assets there.

## 3) Access & Identity
- Collaborators: limited to current team members only.
- Only @rostialpin and @rob1nalex may merge to main.
- 2FA required; SSO if available.
- Personal accounts are not added to SOT without explicit time-boxed approval.

## 4) Branching & PR Policy
- Work only on feature branches: `feature/[initials]-[short-name]`.
- All changes merge via Pull Requests (PRs). No direct pushes to `main`.
- PR template must be filled; incomplete checklists are not merged.
- Every PR must receive approval from @rostialpin or @rob1nalex.

## 5) Required CI Checks (must pass)
- `external-safety / validate-external`: verifies no non-public items or forbidden domains appear in external content.
- `owner-approval / require-owner-approval`: enforces owner approval (rostialpin or rob1nalex).

## 6) Sensitivity & Redaction
- Sensitivity flags: `public`, `internal`, `restricted`.
- External artifacts include only `public`. Internal includes `public` + `internal`. `restricted` never ships.
- Forbidden external domains: Confluence, JIRA, NPAW, company domains.

## 7) Assets & Links
- Do not commit confidential assets to the public template.
- Internal assets may reside in private storage or submodules and are excluded from external builds.

## 8) Incident Response
- If a secret or sensitive link is committed:
  1. Revert immediately.
  2. Rotate affected credentials/links.
  3. File a retrospective issue documenting scope and remediation.

## 9) Enforcement (Free plan constraints)
- GitHub shows a banner that branch rules aren’t enforced on private personal repos.
- We still require PRs by policy; only owners merge.
- Optional workflow `push-guard` can flag direct pushes and create an issue.

## 10) Future Upgrade Path
- If enforcement is needed: move to an Organization (Team) or upgrade to Pro.
- Keep `CODEOWNERS` and branch rules in place to activate instantly upon upgrade.

## 11) Exceptions
- Temporary exceptions must be approved by @rostialpin and recorded in PR description.

---
Agreed by: Team (Robin, Rohit, Bobby, Juney, Dhanya) on: ________
