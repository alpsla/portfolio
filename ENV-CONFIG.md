# Environment Configuration

## NEXT_PUBLIC_MODE

This environment variable controls what content is displayed in your portfolio.

### Configuration File: `.env.local`

Create a file named `.env.local` in the project root with:

```bash
NEXT_PUBLIC_MODE=internal
```

### Modes:

#### **`internal`** (Recommended for Development/Team Viewing)
Shows ALL content including:
- ✅ Internal links (New Relic dashboards, Confluence pages, JIRA, etc.)
- ✅ Internal recordings (SharePoint videos, Google Drive content)
- ✅ Internal documentation
- ✅ Restricted resources
- ✅ Company-specific information

**Use when:**
- Developing locally
- Sharing with your team
- Internal presentations
- Portfolio reviews with colleagues

#### **`external`** (For Public Portfolio)
Filters to public-safe content only:
- ✅ Public PDFs and documentation
- ❌ Internal links are hidden
- ❌ Internal recordings are hidden
- ❌ Company-specific links are filtered
- ❌ Restricted content is removed

**Use when:**
- Deploying to public website
- Sharing with recruiters outside your company
- Public portfolio hosting
- Open-source contributions

### How It Works

The `src/lib/utils/safety.ts` file checks the `sensitivity` field on:
- **Attachments** (PDFs, videos, slides)
- **Links** (dashboards, documentation)
- **Projects** (entire projects can be marked internal)

#### Sensitivity Levels:
- `public` - Always visible
- `internal` - Only visible when `NEXT_PUBLIC_MODE=internal`
- `restricted` - Never visible (even in internal mode)

### Setup Instructions

1. **Create `.env.local` file:**
```bash
echo "NEXT_PUBLIC_MODE=internal" > .env.local
```

2. **Restart your dev server:**
```bash
# Stop current server (Ctrl+C or)
pkill -f "next dev"

# Start fresh
npm run dev
```

3. **Verify it's working:**
- Visit: `http://localhost:3000/projects/data-observability`
- You should see:
  - 🔗 New Relic Dashboard link
  - 🎥 Eden Observability Dashboard video
  - All internal resources

### Production Deployment

For production builds:

**Internal build** (company intranet):
```bash
NEXT_PUBLIC_MODE=internal npm run build
```

**External build** (public portfolio):
```bash
NEXT_PUBLIC_MODE=external npm run build
# or
npm run build  # defaults to external
```

### Troubleshooting

**Q: Internal links/videos still not showing?**
- Check that `.env.local` exists in project root
- Verify `NEXT_PUBLIC_MODE=internal` is set (no quotes needed)
- Restart the dev server completely
- Clear browser cache

**Q: Content showing in external build?**
- Make sure attachments/links have `sensitivity: 'internal'` in `projects.ts`
- Verify `NEXT_PUBLIC_MODE` is not set or set to 'external' for prod build

**Q: Some content visible, some not?**
- Check the `sensitivity` field on each attachment/link
- `public` = always visible
- `internal` = only when MODE=internal
- `restricted` = never visible

### Example Usage in Code

```typescript
// In projects.ts
attachments: [
  {
    kind: 'pdf',
    title: 'Public Research Paper',
    src: '/assets/project/public-paper.pdf',
    sensitivity: 'public'  // ✅ Always visible
  },
  {
    kind: 'video',
    title: 'Internal Demo Recording',
    src: 'https://sharepoint.com/video.mp4',
    sensitivity: 'internal'  // 👁️ Only visible when MODE=internal
  },
  {
    kind: 'pdf',
    title: 'Confidential Strategy',
    src: '/assets/project/strategy.pdf',
    sensitivity: 'restricted'  // 🔒 Never visible
  }
]
```

---

**Current Status:** `.env.local` is already created with `NEXT_PUBLIC_MODE=internal` for development.


