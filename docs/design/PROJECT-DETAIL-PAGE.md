# Project Detail Page - Dynamic Media Handling

## Challenge

Each project has different types of content:
- Some have **videos** (EVA, Report Portal)
- Some have **PDFs** (DART, COPPA)
- Some have **slides/PPT** (EVA, Config Comparison)
- Some have **external links** (New Relic dashboards, Confluence)
- Some have **all of the above**

We need a **flexible, smart layout** that adapts to what's available.

---

## Page Structure

```
┌──────────────────────────────────────────────────────────────┐
│ [Breadcrumb: Home > Projects > DART]                        │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ████ DART - Dynamic Analysis Routine Tester                │ [Title, Lime]
│  [Roku] [Android] [Coverage]                                │ [Tags]
│  Led by: Rohit M. | Contributors: AR, JJ                    │ [Attribution]
│                                                               │
├──────────────────────────────────────────────────────────────┤
│                    HERO SECTION                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  [Featured Media - Auto-select best available]         │ │
│  │  Priority: Video > Slide > PDF > Screenshot            │ │
│  │                                                         │ │
│  │  If video: Embedded player with poster                 │ │
│  │  If slide: Preview + "Open Presentation" button        │ │
│  │  If PDF: First page preview + "View PDF" button        │ │
│  │  If screenshot: Large image                            │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  THE CHALLENGE                                               │
│  ════════════════                                            │
│                                                               │
│  {problem text - 2-3 paragraphs}                            │
│  [Well-formatted, readable typography]                      │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  OUR SOLUTION                                                │
│  ════════════                                                │
│                                                               │
│  {solution text - 2-3 paragraphs}                           │
│  [Well-formatted, readable typography]                      │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  KEY ACHIEVEMENTS                                            │
│  ════════════════                                            │
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │   70%    │  │    5     │  │ Method   │                 │
│  │ ▓▓▓▓▓▓   │  │ ▓▓▓▓▓▓   │  │  Level   │  [Lime badges] │
│  │  Faster  │  │ Platforms│  │ Coverage │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  TECH STACK                                                  │
│  ══════════                                                  │
│                                                               │
│  [Ruby] [Jenkins] [New Relic] [GitHub] [Roku SDK]          │
│  [Blue-bordered pills with lime hover]                      │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  DOCUMENTATION & RESOURCES                                   │
│  ═════════════════════════                                  │
│                                                               │
│  [Tabbed interface - smart tab generation]                  │
│                                                               │
│  ┌─────┬─────┬─────┬──────┬──────────┐                    │
│  │Video│Slide│ PDF │ Docs │ Internal │  [Active: Video]   │
│  └─────┴─────┴─────┴──────┴──────────┘                    │
│  ┌────────────────────────────────────────────────┐        │
│  │                                                 │        │
│  │  [Tab content area - see sections below]       │        │
│  │                                                 │        │
│  └────────────────────────────────────────────────┘        │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

## Smart Tab Generation

Tabs are **dynamically created** based on available content:

```tsx
function generateTabs(project: IProject) {
  const tabs = [];
  
  // Count by type
  const videos = project.attachments.filter(a => a.kind === 'video');
  const slides = project.attachments.filter(a => a.kind === 'slide');
  const pdfs = project.attachments.filter(a => a.kind === 'pdf');
  const images = project.attachments.filter(a => a.kind === 'image');
  const internalLinks = project.links.filter(l => l.sensitivity === 'internal');
  const publicLinks = project.links.filter(l => l.sensitivity !== 'internal');
  
  // Only show tabs with content
  if (videos.length > 0) tabs.push({ id: 'videos', label: `Videos (${videos.length})`, icon: '🎥' });
  if (slides.length > 0) tabs.push({ id: 'slides', label: `Presentations (${slides.length})`, icon: '📊' });
  if (pdfs.length > 0) tabs.push({ id: 'pdfs', label: `Documents (${pdfs.length})`, icon: '📄' });
  if (images.length > 0) tabs.push({ id: 'images', label: `Screenshots (${images.length})`, icon: '🖼️' });
  if (publicLinks.length > 0) tabs.push({ id: 'links', label: `Resources (${publicLinks.length})`, icon: '🔗' });
  if (isInternal() && internalLinks.length > 0) tabs.push({ id: 'internal', label: `Internal (${internalLinks.length})`, icon: '🔒' });
  
  return tabs;
}
```

**Example Results:**

- **EVA:** Videos (2) | Presentations (1) | Documents (6)
- **DART:** Documents (1) | Internal (9)
- **New Relic:** Documents (1) | Resources (2) | Internal (2)

---

## Tab Content Layouts

### 1. Videos Tab

```
┌──────────────────────────────────────────────┐
│  Videos (2)                                  │
├──────────────────────────────────────────────┤
│                                               │
│  ┌─────────────────────────────────────┐    │
│  │  EVA Presentation and Demo          │    │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    │
│  │  [Video player - HTML5]             │    │
│  │  ⏯ Play  🔊 Volume  ⛶ Fullscreen   │    │
│  └─────────────────────────────────────┘    │
│  Duration: 12:34 | 2.5MB                     │
│                                               │
│  ┌─────────────────────────────────────┐    │
│  │  Test Manager Bot Presentation      │    │
│  │  [Thumbnail with play button]       │    │
│  │  Click to play ▶                    │    │
│  └─────────────────────────────────────┘    │
│  Duration: 8:15 | 1.8MB                      │
│                                               │
└──────────────────────────────────────────────┘
```

**Implementation:**
```tsx
<video controls poster={getThumbnail(video.src)}>
  <source src={video.src} type="video/mp4" />
</video>
```

---

### 2. Presentations (Slides) Tab

```
┌──────────────────────────────────────────────┐
│  Presentations (1)                           │
├──────────────────────────────────────────────┤
│                                               │
│  ┌─────────────────────────────────────┐    │
│  │  EVA - AI/ML Conference 2025        │    │
│  │  [PPT Preview - first slide]        │    │
│  │                                      │    │
│  │  [📊 Preview thumbnail]             │    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                               │
│  ┌──────────────────────────────────┐       │
│  │  [Download PPTX]  [View Online]  │       │
│  └──────────────────────────────────┘       │
│  32 slides | 4.2MB | PowerPoint format      │
│                                               │
└──────────────────────────────────────────────┘
```

**Options for PPT handling:**

1. **Download only** (simplest)
   ```tsx
   <a href={slide.src} download>Download PPTX</a>
   ```

2. **Convert to PDF** (better preview)
   - Pre-convert PPT → PDF for web viewing
   - Store both versions
   
3. **Embed with Office Online** (best UX)
   ```tsx
   <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(slide.src)}`} />
   ```

4. **Google Slides embed** (if uploaded there)
   ```tsx
   <iframe src={slide.googleSlidesUrl} />
   ```

**Recommendation:** Option 1 (download) + pre-converted PDF preview

---

### 3. Documents (PDFs) Tab

```
┌──────────────────────────────────────────────┐
│  Documents (6)                               │
├──────────────────────────────────────────────┤
│                                               │
│  ┌──────────────────┐  ┌──────────────────┐ │
│  │ EVA Tech Stack   │  │ EVA Features     │ │
│  │ [PDF thumbnail]  │  │ [PDF thumbnail]  │ │
│  │ 📄 4 pages       │  │ 📄 8 pages       │ │
│  │ [View] [Download]│  │ [View] [Download]│ │
│  └──────────────────┘  └──────────────────┘ │
│                                               │
│  ┌──────────────────┐  ┌──────────────────┐ │
│  │ EVA Limitations  │  │ Sample Prompts   │ │
│  │ [PDF thumbnail]  │  │ [PDF thumbnail]  │ │
│  │ 📄 3 pages       │  │ 📄 12 pages      │ │
│  │ [View] [Download]│  │ [View] [Download]│ │
│  └──────────────────┘  └──────────────────┘ │
│                                               │
└──────────────────────────────────────────────┘
```

**PDF Viewer Modal:**

Click "View" → Opens modal with embedded PDF viewer

```
┌──────────────────────────────────────────────┐
│  EVA Tech Stack                          [✕] │
├──────────────────────────────────────────────┤
│                                               │
│  [PDF Viewer - react-pdf or browser native] │
│                                               │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  │   [PDF content rendered here]       │    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                               │
│  Page 1 of 4  [◀ Prev] [Next ▶]  [Download] │
│                                               │
└──────────────────────────────────────────────┘
```

**Implementation:**
```tsx
import { Document, Page } from 'react-pdf';

<Document file={pdf.src}>
  <Page pageNumber={currentPage} />
</Document>
```

---

### 4. Resources (Public Links) Tab

```
┌──────────────────────────────────────────────┐
│  Resources (2)                               │
├──────────────────────────────────────────────┤
│                                               │
│  🔗 External Resources                       │
│                                               │
│  ┌─────────────────────────────────────────┐│
│  │ 📊 Report Portal Docs                   ││
│  │ Official documentation                   ││
│  │ → reportportal.io/docs                  ││
│  │ [Open Link ↗]                           ││
│  └─────────────────────────────────────────┘│
│                                               │
│  ┌─────────────────────────────────────────┐│
│  │ 📈 New Relic Dashboard                  ││
│  │ Live monitoring dashboard                ││
│  │ → one.newrelic.com/dashboards/...      ││
│  │ [Open Link ↗]                           ││
│  └─────────────────────────────────────────┘│
│                                               │
└──────────────────────────────────────────────┘
```

**Features:**
- Link preview with icon
- Description (if provided)
- Open in new tab
- Optional: Fetch metadata (title, description, favicon)

---

### 5. Internal Tab (Internal Mode Only)

```
┌──────────────────────────────────────────────┐
│  Internal Resources (9) 🔒                   │
├──────────────────────────────────────────────┤
│                                               │
│  ⚠️ Company-only resources (VPN required)   │
│                                               │
│  📝 Documentation                            │
│  ├─ Android Coverage Analysis (Confluence)  │
│  ├─ Roku Coverage Analysis (Confluence)     │
│  └─ DART Presentation Deck (SharePoint)     │
│                                               │
│  🔧 Tools & Dashboards                       │
│  ├─ Jenkins Pipeline                         │
│  ├─ New Relic Dashboard                      │
│  └─ JIRA Board                               │
│                                               │
│  💻 Repositories                             │
│  ├─ Roku VMN Core (GitHub)                   │
│  └─ PR #2363 Reference                       │
│                                               │
└──────────────────────────────────────────────┘
```

**Grouped by category** for better organization when there are many internal links.

---

## Responsive Layouts

### Desktop (>1024px)

```
┌────────────────────────────────────┐
│ [Hero Media - Full width]          │
│                                     │
└────────────────────────────────────┘

┌──────────────┐  ┌──────────────────┐
│ Problem      │  │ Solution         │
│              │  │                  │
└──────────────┘  └──────────────────┘

┌────────────────────────────────────┐
│ Metrics (3 columns)                │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Tabs (full width)                  │
│ Content grid (2-3 columns)         │
└────────────────────────────────────┘
```

### Tablet (640-1024px)

```
┌────────────────────────────────────┐
│ [Hero Media - Full width]          │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Problem (stacked)                  │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Solution (stacked)                 │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Metrics (2 columns)                │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Tabs (2 columns)                   │
└────────────────────────────────────┘
```

### Mobile (<640px)

```
┌───────────────┐
│ [Hero Media]  │
│ (aspect 16:9) │
└───────────────┘

┌───────────────┐
│ Problem       │
│ (full width)  │
└───────────────┘

┌───────────────┐
│ Solution      │
│ (full width)  │
└───────────────┘

┌───────────────┐
│ Metrics       │
│ (stacked)     │
└───────────────┘

┌───────────────┐
│ Tabs          │
│ (accordion or │
│  swipeable)   │
└───────────────┘
```

---

## Hero Media Selection Logic

```tsx
function selectHeroMedia(project: IProject) {
  // Priority order
  const videos = project.attachments.filter(a => a.kind === 'video');
  if (videos.length > 0) return { type: 'video', media: videos[0] };
  
  const slides = project.attachments.filter(a => a.kind === 'slide');
  if (slides.length > 0) return { type: 'slide', media: slides[0] };
  
  const pdfs = project.attachments.filter(a => a.kind === 'pdf');
  if (pdfs.length > 0) return { type: 'pdf', media: pdfs[0] };
  
  const images = project.screenshots;
  if (images.length > 0) return { type: 'image', media: images[0] };
  
  return null; // No media, show placeholder or skip hero
}
```

**Rationale:**
1. **Video** = Best engagement, shows demo in action
2. **Slides** = Visual story, good overview
3. **PDF** = Documentation, reference material
4. **Image** = Screenshot, quick visual

---

## Component Architecture

```tsx
// components/project-detail/ProjectDetailPage.tsx
export function ProjectDetailPage({ project }: { project: IProject }) {
  const tabs = generateTabs(project);
  const heroMedia = selectHeroMedia(project);
  
  return (
    <div>
      <ProjectHeader project={project} />
      {heroMedia && <HeroMedia media={heroMedia} />}
      <ProjectNarrative problem={project.problem} solution={project.solution} />
      <MetricsDisplay metrics={project.metrics} />
      <TechStackPills stack={project.techStack} />
      <MediaTabs tabs={tabs} project={project} />
    </div>
  );
}

// components/project-detail/MediaTabs.tsx
export function MediaTabs({ tabs, project }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  
  return (
    <div>
      <TabList tabs={tabs} active={activeTab} onChange={setActiveTab} />
      <TabContent>
        {activeTab === 'videos' && <VideosGrid videos={getVideos(project)} />}
        {activeTab === 'slides' && <SlidesGrid slides={getSlides(project)} />}
        {activeTab === 'pdfs' && <PDFsGrid pdfs={getPDFs(project)} />}
        {activeTab === 'links' && <LinksGrid links={getPublicLinks(project)} />}
        {activeTab === 'internal' && <InternalLinks links={getInternalLinks(project)} />}
      </TabContent>
    </div>
  );
}

// components/project-detail/VideosGrid.tsx
export function VideosGrid({ videos }: { videos: IAttachment[] }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {videos.map(video => (
        <VideoPlayer key={video.src} video={video} />
      ))}
    </div>
  );
}

// components/project-detail/PDFsGrid.tsx
export function PDFsGrid({ pdfs }: { pdfs: IAttachment[] }) {
  const [viewingPDF, setViewingPDF] = useState<IAttachment | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {pdfs.map(pdf => (
          <PDFCard 
            key={pdf.src} 
            pdf={pdf} 
            onView={() => setViewingPDF(pdf)}
          />
        ))}
      </div>
      {viewingPDF && (
        <PDFViewerModal 
          pdf={viewingPDF} 
          onClose={() => setViewingPDF(null)}
        />
      )}
    </>
  );
}
```

---

## Empty States

When a project has no media at all:

```
┌──────────────────────────────────────────────┐
│  DART - Dynamic Analysis Routine Tester     │
│  [Title, tags, attribution]                  │
├──────────────────────────────────────────────┤
│                                               │
│  [No hero media, go straight to narrative]  │
│                                               │
│  THE CHALLENGE                               │
│  ════════════════                            │
│  {problem text}                              │
│                                               │
│  OUR SOLUTION                                │
│  ════════════════                            │
│  {solution text}                             │
│                                               │
│  [Only show tabs if there's ANY content]    │
│  Otherwise: "Documentation coming soon"      │
│                                               │
└──────────────────────────────────────────────┘
```

---

## File Size & Performance

### Optimization Strategies

1. **Lazy load media**
   ```tsx
   <video preload="metadata" loading="lazy">
   ```

2. **Thumbnails for videos**
   - Generate poster frames: `video[00:00:05].png`
   - Store in `public/assets/[project]/thumbnails/`

3. **PDF first-page thumbnails**
   - Pre-generate: `pdf-page-1.jpg`
   - Show in grid, load full PDF on demand

4. **Compress videos**
   - Target: H.264, 720p, ~2MB per minute
   - Or: Link to YouTube/Vimeo if preferred

5. **Responsive images**
   ```tsx
   <Image 
     src={screenshot} 
     sizes="(max-width: 768px) 100vw, 50vw"
     loading="lazy"
   />
   ```

---

## Accessibility

- ✅ Video captions/subtitles (if available)
- ✅ PDF alt text / ARIA labels
- ✅ Keyboard navigation for tabs
- ✅ Focus states on all interactive elements
- ✅ Screen reader announcements for tab changes

---

## Next Steps

1. Implement `ProjectDetailPage` component
2. Create media viewer components (Video, PDF, Slide)
3. Build tab system with smart generation
4. Add modal viewers for PDFs
5. Test with real project data (EVA, DART, etc.)
6. Optimize media loading & performance

