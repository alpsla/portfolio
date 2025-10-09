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
