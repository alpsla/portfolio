# QA Team Portfolio - UX/UI Design System & Implementation

## Design Philosophy

**Brand Identity**: Innovative QA Engineers - cutting-edge, experimental, data-driven storytelling

**Dual Purpose**: Internal knowledge transfer + External career advancement (LinkedIn-ready)

**Flexibility**: Team unity with individual customization paths

---

## SELECTED DESIGN: Option B - Neon Chartreuse + Deep Blue ✅

### Color Palette (Team Voted)

**"Terminal Green + Royal Blue"** - Automation-focused, cutting-edge

```css
--primary: 84 81% 44%         /* Electric Lime #84cc16 */
--accent: 217 91% 60%         /* Royal Blue #3b82f6 */
--highlight: 173 80% 40%      /* Teal #14b8a6 */
--background: 222 47% 11%     /* Dark Navy #0f172a */
--text: 0 0% 98%              /* Near White #fafafa */
```

**Design Rationale:**
- ✅ **Terminal aesthetic**: Resonates with automation/testing background
- ✅ **High contrast**: Lime on dark blue = excellent readability
- ✅ **Modern QA vibe**: Tech-forward, not corporate
- ✅ **LinkedIn-friendly**: Professional yet distinctive

**Full palette documentation**: See `docs/design/DESIGN-OPTIONS.md`

---

## PROJECT DETAIL PAGES - NARRATIVE-FIRST APPROACH

### New Philosophy: Story Over Documents

**Previous Approach (❌ Document Dump):**
- List of files with no context
- "Here's EVA. Here are 10 PDFs. Good luck."
- Viewer doesn't know what to click or why

**New Approach (✅ Story-Driven):**
- Hero section with custom image + tagline
- Three-part narrative: Challenge → Approach → Impact
- Contextualized resources (cards with descriptions)
- Metrics that tell a story
- Optional timeline & testimonials

### Enhanced Project Structure

```typescript
interface IProjectEnhanced {
  // Core identification
  id: string;
  slug: string;
  title: string;
  owner: string;
  
  // NEW: Hero & Visual Identity
  hero: {
    image: string;              // Custom hero image (not just screenshot)
    tagline: string;            // One-liner hook
    videoUrl?: string;          // Optional hero video
    demoUrl?: string;           // Live demo link if available
  };
  
  // NEW: Narrative Structure
  narrative: {
    challenge: string;          // What problem existed? (2-3 paragraphs)
    approach: string;           // How did we solve it? (2-4 paragraphs)
    impact: string;             // What changed? (2-3 paragraphs)
    
    // Optional: Story enrichment
    timeline?: Array<{
      date: string;
      milestone: string;
      description: string;
    }>;
    
    testimonials?: Array<{
      author: string;
      role: string;
      quote: string;
    }>;
  };
  
  // ENHANCED: Metrics with context
  metrics: Array<{
    label: string;
    value: string;
    improvement?: string;
    context?: string;           // NEW: "What does this mean?"
    icon?: string;              // NEW: Visual icon
  }>;
  
  techStack: string[];
  
  // REORGANIZED: Resources with descriptions
  resources: {
    featured?: IAttachment;      // Main showcase (video, deck)
    documentation: Array<{
      kind: 'pdf' | 'slide' | 'video' | 'image';
      title: string;             // Descriptive, not filename
      description: string;       // NEW: What will I learn?
      src: string;
      pages?: number;            // For PDFs
      slides?: number;           // For presentations
      duration?: string;         // For videos
      sensitivity: Sensitivity;
    }>;
    external: ILink[];           // Public resources
    internal: ILink[];           // Company-only
  };
  
  tags: ITag[];
  status: 'draft' | 'review' | 'complete';
}
```

### Page Layout Structure

See `docs/design/PROJECT-DETAIL-NARRATIVE.md` for full visual layouts.

**Key Sections:**
1. **Hero** - Custom image, tagline, CTA buttons
2. **Three-Part Narrative** - Challenge, Approach, Impact (with visuals)
3. **Metrics** - Numbers with context ("90% faster" + "from 2hrs to 12s")
4. **Featured Showcase** - Main demo video or presentation
5. **Supporting Materials** - Resource cards (not lists)
6. **Optional** - Timeline, testimonials, related projects

### Resource Cards (Not Lists)

Instead of:
```
PDFs:
- file1.pdf
- file2.pdf
```

We show:
```
┌──────────────────────────────┐
│ 📊 EVA Tech Stack Overview  │
│                               │
│ Architecture diagram and      │
│ component breakdown           │
│                               │
│ 4 pages • PDF • 2.1MB         │
│ [View] [Download]             │
└──────────────────────────────┘
```

**Full implementation guide**: See `docs/design/PROJECT-DETAIL-NARRATIVE.md`

---

## 1. Revised Home Page Structure

### Layout Flow (Top to Bottom)

```
┌─────────────────────────────────────────┐
│  [Logo] QA Innovations    [Mode Toggle] │  Sticky Nav
│  Home | Team | About            [Login] │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│          HERO: Team Branding             │
│  "5 Years of QA Innovation"             │
│  Animated text + subtle particle bg     │
│  "10 Projects • 6 Platforms • 70% Saved"│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       ABOUT TEAM (Mini Section)         │
│  "We're a cross-functional QA team      │
│   that built unified testing            │
│   frameworks, AI tools, and dashboards" │
│                                          │
│  [Our Philosophy] [Tech Stack] [Culture]│
│   → Link to full /about page            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       TEAM MEMBERS (Avatar Row)         │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐       │
│  │AR│ │RM│ │JJ│ │RA│ │BA│ │DM│       │
│  └──┘ └──┘ └──┘ └──┘ └──┘ └──┘       │
│  Click avatar → /profiles/[person]      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  [Filters: All | Web | Roku | AI...]   │  Optional Filter
└─────────────────────────────────────────┘

┌───────────────────────────────────────────┐
│         MAJOR PROJECT CARDS               │
│  (Bento box / Masonry grid layout)       │
│                                           │
│  ┌───────────┐  ┌───────────┐           │
│  │ Unified   │  │    EVA    │  ← Large  │
│  │ Framework │  │ (AI Bot)  │    cards  │
│  │ [→ View]  │  │ [→ View]  │           │
│  └───────────┘  └───────────┘           │
│                                           │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ DART │ │Portal│ │ NPAW │ ← Med cards│
│  └──────┘ └──────┘ └──────┘            │
│                                           │
│  Click card → /projects/[slug] (detail)  │
└───────────────────────────────────────────┘
```

### Key Changes from Original Plan

1. **Team Branding First**: Establishes collective identity before showcasing work
2. **Team Member Row**: Quick access to individual profiles, shows collaboration
3. **Major Cards Only**: Home page is curated highlights, not exhaustive list
4. **Drill-Down Pattern**: Click card → full project page with docs/videos/metrics

---

## 2. Typography

```css
/* Headings: Geometric, bold */
font-family: 'Inter Variable', system-ui, sans-serif
font-weight: 600-800 (semibold to extrabold)

/* Body: Readable, technical */
font-family: 'Inter', system-ui, sans-serif
font-weight: 400-500

/* Code/Tech Stack: Monospace */
font-family: 'JetBrains Mono', 'Fira Code', monospace
```

**Scale** (fluid responsive):

- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: clamp(2rem, 4vw, 3rem)
- H2: clamp(1.5rem, 3vw, 2rem)
- Body: clamp(1rem, 2vw, 1.125rem)

---

## 3. Component Library Setup

**Tool**: **shadcn/ui** (Tailwind-native, copy-paste, full customization)

### Installation

```bash
npx shadcn-ui@latest init
# Choose: Default, Slate, CSS variables
```

### Core Components

```bash
npx shadcn-ui@latest add button card badge tabs dialog tooltip skeleton
npx shadcn-ui@latest add select separator scroll-area aspect-ratio avatar
```

### Custom Components

1. **ProjectCard** - Major card with hover effects, metrics preview
2. **TeamMemberAvatar** - Clickable avatar with hover card (name/role)
3. **MetricDisplay** - Animated counter
4. **TechStackPill** - Platform/topic badge
5. **MediaViewer** - PDF/video modal
6. **SafetyBanner** - Internal/public mode indicator
7. **FilterBar** - Tag filter (optional, low priority)

---

## 4. Page Structure Details

### Home Page (`/`)

**Section 1: Hero**

- Team tagline: "5 Years of QA Innovation"
- Animated gradient text
- Summary metrics (count-up animation)

**Section 2: About Team (Mini)**

- 2-3 sentences about team culture
- Highlight: "Openness to cover each other, learn new tech, work across platforms"
- Pill badges: [Web] [WCTV] [Roku] [Apple TV] [iOS] [Android]
- CTA: "Learn More About Us →" links to `/about`

**Section 3: Team Member Row**

- Avatar grid (6 members)
- Hover: name + role tooltip
- Click: navigate to `/profiles/[person]`

**Section 4: Major Project Cards**

- Masonry/Bento layout (2-3 columns desktop, 1-2 mobile)
- Each card shows:
  - Title
  - 1-sentence summary
  - Key tags [Platform] [Topic]
  - Lead owner avatar
  - Metric preview (1-2 numbers)
  - "View Details →" button
- Click → full project detail page

---

### Project Detail Page (`/projects/[slug]`)

**Full drill-down experience**:

```
[Breadcrumb: Home > Projects > DART]

┌─────────────────────────────────────────┐
│ DART - Dynamic Analysis Routine Tester │ Title
│ [Roku] [Android] [Coverage]            │ Tags
│ Led by: Rohit M. | With: AR, JJ       │ Attribution
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  THE CHALLENGE                          │
│  (Problem narrative - 2-3 paragraphs)  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  OUR SOLUTION                           │
│  (Solution narrative - 2-3 paragraphs) │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  KEY ACHIEVEMENTS                       │
│  ⚡ 70% faster test execution          │
│  🎯 5 platforms unified                 │
│  📊 Method-level coverage visibility    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  TECH STACK                             │
│  [Ruby] [Jenkins] [New Relic] [GitHub] │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  MEDIA & DOCUMENTATION                  │
│  [Tabs: Videos | Slides | PDFs]        │
│  Grid of thumbnails, click to preview  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  INTERNAL RESOURCES ⚠️                  │
│  (Only visible in internal mode)       │
│  • Confluence Wiki                      │
│  • JIRA Dashboard                       │
│  • Jenkins Pipeline                     │
└─────────────────────────────────────────┘
```

---

### Team Member Profile (`/profiles/[person]`)

```
┌─────────────────────────────────────────┐
│  [Large Avatar] Rostislav Alpin        │
│  Senior QA Automation Engineer         │
│  [GitHub] [LinkedIn] [Download Resume] │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  BIO                                    │
│  "I specialize in building unified...  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  MY CONTRIBUTIONS                       │
│  ┌────────┐ ┌────────┐ ┌────────┐     │
│  │Unified │ │  DART  │ │  NPAW  │     │
│  │ Lead   │ │Co-Lead │ │ Owner  │     │
│  └────────┘ └────────┘ └────────┘     │
│  (Only projects this person worked on) │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  SKILLS & TECH STACK                   │
│  TypeScript • Playwright • Jenkins •   │
│  New Relic • CI/CD • Appium           │
└─────────────────────────────────────────┘
```

---

### About/Team Page (`/about`)

```
┌─────────────────────────────────────────┐
│  OUR STORY                              │
│  Timeline: 2020-2025 milestones        │
│  Team photo/illustration                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  OUR VALUES                             │
│  • Openness to cover each other        │
│  • Continuous learning (new tech)      │
│  • Cross-platform expertise            │
│  • Innovation-driven                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  COLLECTIVE IMPACT                      │
│  10 projects, 6 platforms, 70% saved   │
│  (Big metrics display)                  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  MEET THE TEAM                          │
│  (Full team member grid with bios)     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  CONTACT (Internal Mode Only)          │
│  Team email, Slack, etc.                │
└─────────────────────────────────────────┘
```

---

## 5. Key UI Patterns

### Major ProjectCard (Home Page)

```tsx
<Card className="group relative overflow-hidden backdrop-blur-sm bg-surface/50 
                 border-2 border-transparent hover:border-primary/50 
                 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
  {/* Gradient glow on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 
                  opacity-0 group-hover:opacity-100 transition-opacity" />
  
  {/* Badge: Internal/Public */}
  <Badge variant={isInternal ? "warning" : "default"} className="absolute top-4 right-4">
    {isInternal ? "Internal" : "Public"}
  </Badge>
  
  <CardHeader>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-secondary">{summary}</p>
    <div className="flex gap-2 mt-2">
      {tags.map(tag => <Badge key={tag.key} variant="outline">{tag.label}</Badge>)}
    </div>
  </CardHeader>
  
  <CardContent>
    {/* Metric preview (1-2 key numbers) */}
    {metrics.slice(0, 2).map(m => (
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-primary">{m.value}</span>
        <span className="text-sm text-secondary">{m.label}</span>
      </div>
    ))}
  </CardContent>
  
  <CardFooter className="flex justify-between items-center">
    <Avatar src={owner.avatar} alt={owner.name} />
    <Button variant="ghost">View Details →</Button>
  </CardFooter>
</Card>
```

### TeamMemberAvatar (Home Page Row)

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Link href={`/profiles/${member.username}`}>
      <Avatar className="w-16 h-16 cursor-pointer hover:ring-2 ring-primary transition-all">
        <AvatarImage src={member.avatar} />
        <AvatarFallback>{member.initials}</AvatarFallback>
      </Avatar>
    </Link>
  </TooltipTrigger>
  <TooltipContent>
    <p className="font-semibold">{member.name}</p>
    <p className="text-xs text-secondary">{member.role}</p>
  </TooltipContent>
</Tooltip>
```

### SafetyBanner (Top of Every Page)

```tsx
{mode === 'internal' && (
  <div className="bg-warning/20 border-b border-warning/50 px-4 py-2">
    <div className="container mx-auto flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        <span>Internal Mode: Company resources visible</span>
      </div>
      <Button variant="link" size="sm" onClick={() => setMode('external')}>
        Switch to Public View →
      </Button>
    </div>
  </div>
)}

{mode === 'external' && (
  <div className="bg-success/20 border-b border-success/50 px-4 py-2">
    <div className="container mx-auto flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        <span>Public Portfolio Mode</span>
      </div>
      <Button variant="link" size="sm" onClick={() => setMode('internal')}>
        Switch to Internal View →
      </Button>
    </div>
  </div>
)}
```

---

## 6. Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape / tablet portrait */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

**Home Page Grid**:

- Mobile (< 640px): 1 column stack
- Tablet (640-1024px): 2 columns
- Desktop (>1024px): 3 columns with varied card sizes (Bento)

---

## 7. Animations & Micro-interactions

### Libraries

```bash
npm install framer-motion lucide-react react-countup
```

### Key Animations

1. **Hero metrics**: Count-up on page load
2. **Project cards**: Stagger entrance (framer-motion)
3. **Hover effects**: Lift + glow border (CSS)
4. **Page transitions**: Fade between routes
5. **Team avatars**: Subtle pulse animation

```tsx
// Staggered card entrance
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
  <ProjectCard {...project} />
</motion.div>
```

---

## 8. Internal vs External Mode

### Visual Indicators

**Internal Mode**:

- Amber banner at top
- "Internal Resources" section visible on project pages
- Company URLs in links
- Amber badges on internal-only content

**External Mode**:

- Green banner at top
- Internal resources hidden
- Company names redacted (use `redactText()`)
- Only public assets/links shown

### Toggle in Nav

```tsx
<Select value={mode} onValueChange={setMode}>
  <SelectTrigger className="w-32">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="internal">🔒 Internal</SelectItem>
    <SelectItem value="external">🌐 Public</SelectItem>
  </SelectContent>
</Select>
```

---

## 9. Individual Customization

Each teammate edits `src/lib/constants/team.ts`:

```ts
export const TEAM_MEMBERS = {
  rostialpin: {
    name: 'Rostislav Alpin',
    initials: 'AR',
    role: 'Senior QA Automation Engineer',
    bio: 'I build unified test frameworks and automation tools...',
    avatar: '/avatars/rostialpin.jpg',
    social: {
      github: 'rostialpin',
      linkedin: 'rostislav-alpin',
    },
    featured: ['unified-test-automation-framework', 'dart', 'npaw-integration-testing'],
    skills: ['TypeScript', 'Playwright', 'Jenkins', 'CI/CD', 'Appium'],
  },
};
```

Profile page pulls from this + filters `PROJECTS` by owner.

---

## 10. Accessibility (WCAG AA)

- Keyboard navigation
- ARIA labels on all interactive elements
- Focus states (ring-2 ring-primary)
- Color contrast >4.5:1
- Screen reader support
- Skip to main content link

---

## Implementation Phases

### Phase 1: Foundation & Design Choice

1. **Team decision**: Vote on color palette (Options A-D)
2. Install shadcn/ui + dependencies
3. Set up chosen design tokens in `globals.css`
4. Create base layout with nav + SafetyBanner

### Phase 2: Home Page

1. Hero section with team branding
2. About Team mini-section
3. Team Member avatar row (with tooltips)
4. Major ProjectCard component
5. Project grid with Bento layout

### Phase 3: Detail Pages

1. Project detail page (`/projects/[slug]`)
   - Full narrative (problem/solution)
   - Metrics display
   - Media gallery (tabs for videos/slides/PDFs)
   - Internal resources section

2. Team member profile page (`/profiles/[person]`)
   - Bio + social links
   - Filtered project cards
   - Skills section

3. About/Team page (`/about`)
   - Team story + timeline
   - Values section
   - Full team grid

### Phase 4: Polish

1. Animations (framer-motion)
2. Responsive testing + fixes
3. Accessibility audit
4. Performance optimization
5. Team review + feedback iteration

---

## File Structure

```
src/
  app/
    page.tsx                    # Home (hero + team + cards)
    layout.tsx                  # Root layout (nav + banner)
    globals.css                 # Design tokens
    projects/
      [slug]/
        page.tsx                # Project detail
    profiles/
      [person]/
        page.tsx                # Individual profile
    about/
      page.tsx                  # Team page
  components/
    ui/                         # shadcn (auto-generated)
    shared/
      ProjectCard.tsx           # Major card for home
      TeamAvatar.tsx            # Clickable avatar
      MetricDisplay.tsx         # Animated counter
      MediaViewer.tsx           # Modal for videos/PDFs
      SafetyBanner.tsx          # Mode indicator
  lib/
    constants/
      team.ts                   # Extended with bio, social, skills
      projects.ts               # Existing
    utils/
      safety.ts                 # Existing
```

---

## Next Steps

1. **Team Meeting**: Review this plan + vote on color palette
2. **Create `DESIGN-OPTIONS.md`**: Visual doc with palette swatches for team vote
3. **Approve home page structure**: Confirm team branding → avatars → major cards flow
4. **Start Phase 1**: Once palette chosen, begin implementation
5. **Iterate**: Gather feedback after each phase

