# Project Detail Page - Narrative-First Approach

## Philosophy

**OLD Approach (Document Dump):**
❌ "Here's EVA. Here are 10 PDFs. Good luck."

**NEW Approach (Story-Driven):**
✅ "Let me tell you the story of how we built EVA, why it matters, and show you the journey."

---

## Enhanced Project Metadata

Each project now needs richer storytelling assets:

```typescript
interface IProject {
  // ... existing fields ...
  
  // NEW: Hero & Visual Identity
  hero: {
    image: string;              // Custom hero image (not just first attachment)
    tagline: string;            // One-liner hook
    videoUrl?: string;          // Optional hero video (embedded)
    demoUrl?: string;           // Live demo link if available
  };
  
  // NEW: Narrative Structure
  narrative: {
    challenge: string;          // What problem existed? (rich text)
    approach: string;           // How did we solve it? (rich text)
    impact: string;             // What changed? (rich text)
    
    // Optional: Story moments
    timeline?: Array<{
      date: string;
      milestone: string;
      description: string;
    }>;
    
    // Optional: Team perspective
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
    impact?: string;
    icon?: string;            // NEW: Visual icon
    context?: string;         // NEW: "What does this mean?"
  }>;
  
  // REORGANIZED: Resources (not just attachments)
  resources: {
    featured?: IAttachment;     // Main showcase (video, deck)
    documentation: IAttachment[]; // Supporting docs
    external: ILink[];          // Public resources
    internal: ILink[];          // Company-only
  };
}
```

---

## New Page Structure

```
┌──────────────────────────────────────────────────────────────┐
│ SECTION 1: HERO (Emotional Hook)                            │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                         │ │
│  │  [CUSTOM HERO IMAGE - Full width, cinematic]           │ │
│  │  - Not a generic screenshot                            │ │
│  │  - Branded with project logo/colors                    │ │
│  │  - Shows the tool in action OR conceptual visual       │ │
│  │                                                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                               │
│  ████ EVA - Enterprise Virtual Assistant                    │
│  "AI-powered knowledge consolidation for the entire team"   │
│                                                               │
│  [AI/ML] [Automation] [Python] [RAG]                        │
│  Led by: Juney Jestin  •  2024                              │
│                                                               │
│  [▶ Watch Demo]  [🔗 Try Live]  [↓ Scroll to Explore]      │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 2: THE STORY (3-Part Narrative)                     │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │ 1️⃣ THE CHALLENGE │  │ 2️⃣ OUR APPROACH │  │ 3️⃣ THE IMPACT│ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│                                                               │
│  ┌──────────────────────────────────────────────────────────┤
│  │ 🎯 The Challenge                                         │
│  ├──────────────────────────────────────────────────────────┤
│  │                                                           │
│  │  Information scattered across multiple systems           │
│  │  ─────────────────────────────────────────               │
│  │  Our team maintained knowledge in:                       │
│  │  • Confluence wikis (200+ pages)                         │
│  │  • JIRA tickets (1000s of issues)                        │
│  │  • TestRail test cases                                   │
│  │  • GitHub repositories                                   │
│  │  • Tribal knowledge in people's heads                    │
│  │                                                           │
│  │  [Optional: Illustration showing fragmented sources]    │
│  │                                                           │
│  │  Finding answers took hours. New team members struggled │
│  │  for weeks. We were answering the same questions over   │
│  │  and over.                                               │
│  │                                                           │
│  └──────────────────────────────────────────────────────────┘
│                                                               │
│  ┌──────────────────────────────────────────────────────────┤
│  │ 💡 Our Approach                                          │
│  ├──────────────────────────────────────────────────────────┤
│  │                                                           │
│  │  Built EVA using RAG + LLM architecture                  │
│  │  ──────────────────────────────────────                 │
│  │                                                           │
│  │  1. Ingestion Pipeline                                   │
│  │     ↓                                                    │
│  │     Automated crawlers pulled data from all sources      │
│  │                                                           │
│  │  2. Vector Database                                      │
│  │     ↓                                                    │
│  │     Embedded knowledge into searchable vectors           │
│  │                                                           │
│  │  3. LLM Integration                                      │
│  │     ↓                                                    │
│  │     GPT-4 synthesizes answers with citations             │
│  │                                                           │
│  │  [Tech Stack Diagram - Visual]                           │
│  │  ┌─────────┐                                             │
│  │  │Confluence├─┐                                          │
│  │  └─────────┘ │                                          │
│  │  ┌─────────┐ │  ┌────────┐  ┌──────┐  ┌──────────┐    │
│  │  │  JIRA   ├─┼─→│ Vector │──│ LLM  │──│ EVA Chat │    │
│  │  └─────────┘ │  │   DB   │  └──────┘  └──────────┘    │
│  │  ┌─────────┐ │  └────────┘                             │
│  │  │ GitHub  ├─┘                                          │
│  │  └─────────┘                                             │
│  │                                                           │
│  └──────────────────────────────────────────────────────────┘
│                                                               │
│  ┌──────────────────────────────────────────────────────────┤
│  │ 🚀 The Impact                                            │
│  ├──────────────────────────────────────────────────────────┤
│  │                                                           │
│  │  Transformed how our team works                          │
│  │  ───────────────────────────                             │
│  │                                                           │
│  │  Instead of:                      Now:                   │
│  │  • Search 5 systems  →  Ask EVA once                    │
│  │  • Wait hours       →  Get answer in seconds           │
│  │  • Context missing  →  Full citations included          │
│  │  • Onboarding: weeks → Onboarding: days                 │
│  │                                                           │
│  │  "EVA answered in 10 seconds what would have taken me   │
│  │   2 hours to find across Confluence and JIRA."          │
│  │   — Rohit M., QA Engineer                               │
│  │                                                           │
│  └──────────────────────────────────────────────────────────┘
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 3: BY THE NUMBERS (Visual Metrics)                  │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐│
│  │  ⚡ 90% Faster │  │ 📚 4 Systems   │  │ 👥 50+ Users  ││
│  │                 │  │                 │  │                ││
│  │  Response time  │  │  Consolidated  │  │  Active weekly ││
│  │  vs manual      │  │  into one      │  │  across team   ││
│  │  search         │  │  interface     │  │                ││
│  │                 │  │                 │  │  ↑ 300% in    ││
│  │  From 2hrs →    │  │  Confluence,   │  │  first month   ││
│  │  12 seconds     │  │  JIRA, GitHub, │  │                ││
│  │                 │  │  TestRail      │  │                ││
│  └────────────────┘  └────────────────┘  └────────────────┘│
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 4: FEATURED SHOWCASE (Main Resource)                │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  ▶ Watch the Full Demo & Presentation                       │
│  ────────────────────────────────────                        │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                         │ │
│  │  [EMBEDDED VIDEO PLAYER]                               │ │
│  │  - Main demo video (if available)                      │ │
│  │  - Or main presentation deck                           │ │
│  │  - With description and context                        │ │
│  │                                                         │ │
│  │  ⏯ EVA Presentation and Demo (12:34)                  │ │
│  │  See how EVA consolidates knowledge and generates      │ │
│  │  test cases in real-time.                              │ │
│  │                                                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                               │
│  [If multiple videos/decks, show others as thumbnails below]│
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 5: OPTIONAL - JOURNEY (Timeline)                    │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  📅 How We Built EVA                                         │
│  ────────────────                                            │
│                                                               │
│  Q3 2023  ●────────> Concept & POC                          │
│            │         Initial prototype with Confluence only  │
│            │                                                  │
│  Q4 2023   ●────────> Multi-Source Integration              │
│            │         Added JIRA, GitHub, TestRail            │
│            │                                                  │
│  Q1 2024   ●────────> LLM Upgrade                           │
│            │         Switched to GPT-4 for better synthesis  │
│            │                                                  │
│  Q2 2024   ●────────> Team Rollout                          │
│            │         50+ active users, positive feedback     │
│            │                                                  │
│  Today     ●────────> Continuous Improvement                 │
│                       Adding more sources, fine-tuning       │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 6: TECH DEEP DIVE (For Technical Audience)          │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  🛠 Technical Architecture                                   │
│  ────────────────────                                        │
│                                                               │
│  [Stack Pills - Interactive with hover tooltips]            │
│  [Python] [RAG] [Vector DB] [GPT-4] [Confluence API]       │
│  [JIRA API] [GitHub API] [TestRail API]                     │
│                                                               │
│  Key Technical Decisions:                                    │
│  • RAG architecture for accurate citations                  │
│  • Vector embeddings for semantic search                    │
│  • Incremental sync to keep data fresh                      │
│  • Context window optimization for long docs                │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 7: SUPPORTING MATERIALS (Friendlier Access)         │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  📚 Learn More                                               │
│  ────────────                                                │
│                                                               │
│  Instead of tabs, use CARDS with descriptions:              │
│                                                               │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ 📊 Tech Stack        │  │ 📄 Features Overview  │        │
│  │ Overview             │  │                        │        │
│  │                      │  │ Detailed breakdown of  │        │
│  │ Architecture diagram │  │ EVA's capabilities and │        │
│  │ and component        │  │ use cases             │        │
│  │ breakdown            │  │                        │        │
│  │                      │  │ 8 pages • PDF          │        │
│  │ 4 pages • PDF        │  │ [View] [Download]      │        │
│  │ [View] [Download]    │  │                        │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                               │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ 🎤 Conference        │  │ 📋 Sample Prompts     │        │
│  │ Presentation         │  │                        │        │
│  │                      │  │ Example questions and  │        │
│  │ AI/ML Conference     │  │ how EVA responds       │        │
│  │ 2025 slides          │  │                        │        │
│  │                      │  │ 12 pages • PDF         │        │
│  │ 32 slides • PPTX     │  │ [View] [Download]      │        │
│  │ [Download]           │  │                        │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                               │
│  🔗 External Resources (if any)                              │
│  ──────────────────────                                      │
│  • Documentation site                                        │
│  • GitHub repository (if public)                            │
│  • Blog posts / case studies                                │
│                                                               │
│  [Internal Mode Only]                                        │
│  🔒 Company Resources                                        │
│  ───────────────────                                         │
│  • Confluence: EVA Architecture Doc                          │
│  • JIRA: EVA Project Board                                  │
│  • Internal Dashboard                                        │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 8: TEAM & CONTRIBUTION                              │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  👥 The Team Behind EVA                                      │
│  ───────────────────                                         │
│                                                               │
│  ┌────────┐  ┌────────┐  ┌────────┐                        │
│  │  [JJ]  │  │  [AR]  │  │  [RM]  │                        │
│  │ Juney  │  │ Alpin  │  │ Rohit  │                        │
│  │ Lead   │  │ Arch.  │  │ Infra  │                        │
│  └────────┘  └────────┘  └────────┘                        │
│                                                               │
│  [Internal: Link to profiles]                                │
│  [External: Individual attribution in personal portfolio]   │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SECTION 9: RELATED PROJECTS (Discovery)                     │
│ ═══════════════════════════════════════════════════          │
│                                                               │
│  🔍 Explore Related Work                                     │
│  ────────────────────                                        │
│                                                               │
│  ┌────────┐  ┌────────┐  ┌────────┐                        │
│  │  DART  │  │ Report │  │  NPAW  │                        │
│  │        │  │ Portal │  │  Test  │                        │
│  └────────┘  └────────┘  └────────┘                        │
│                                                               │
│  [Smart suggestions based on tags/tech stack]                │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

## Content Guidelines

### 1. Hero Image Requirements

**DO:**
- ✅ Custom-designed visual (not just a screenshot)
- ✅ Shows the tool in action OR conceptual illustration
- ✅ Includes project branding/logo if it has one
- ✅ High quality, cinematic aspect ratio (16:9 or 21:9)
- ✅ Consistent style across all projects

**DON'T:**
- ❌ Generic stock photos
- ❌ Raw application screenshots
- ❌ Text-heavy slides as hero
- ❌ Low resolution or stretched images

**Examples:**
- **EVA:** Chatbot interface with glowing neural network background
- **DART:** Code coverage heatmap visualization (artistic rendering)
- **Unified Framework:** Multiple device screens showing same test
- **Report Portal:** Dashboard with analytics graphs (stylized)

### 2. Tagline (Hero Hook)

One sentence that captures the essence:

```
EVA: "AI-powered knowledge consolidation for the entire team"
DART: "Method-level code coverage across every platform"
Unified Framework: "Write once, test everywhere – one codebase for 5 platforms"
Report Portal: "Intelligent test analysis that learns from your failures"
```

### 3. Three-Part Narrative

**The Challenge (2-3 paragraphs):**
- What was the pain point?
- Who was affected?
- Why did it matter?
- Optional: Quantify the problem ("spent 5 hours per release")

**Our Approach (2-4 paragraphs + visual):**
- How did we solve it?
- Key technical decisions
- Architecture overview (with diagram if possible)
- What made it unique?

**The Impact (2-3 paragraphs + quote):**
- What changed?
- Before/after comparison
- Team testimonial (optional)
- Broader implications

### 4. Metrics - Tell the Story

**Bad (just numbers):**
```
┌──────────┐
│   90%    │
│  Faster  │
└──────────┘
```

**Good (context + impact):**
```
┌────────────────────────┐
│  ⚡ 90% Faster         │
│                         │
│  Response time          │
│  From 2hrs → 12 seconds │
│                         │
│  What it means:         │
│  Engineers get answers  │
│  instantly instead of   │
│  context-switching      │
└────────────────────────┘
```

### 5. Supporting Materials - Cards Not Lists

**Bad (document dump):**
```
PDFs (6):
- file1.pdf
- file2.pdf
- file3.pdf
- file4.pdf
- file5.pdf
- file6.pdf
```

**Good (contextualized cards):**
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

┌──────────────────────────────┐
│ 📄 Features & Capabilities   │
│                               │
│ Detailed breakdown of what    │
│ EVA can do and use cases      │
│                               │
│ 8 pages • PDF • 3.5MB         │
│ [View] [Download]             │
└──────────────────────────────┘
```

Each resource card needs:
- **Icon** (visual identifier)
- **Title** (descriptive, not filename)
- **Description** (1-2 sentences - what will I learn?)
- **Metadata** (pages/size/format)
- **Actions** (View/Download/Open)

---

## Updated Project Structure

```typescript
// Example: EVA with rich narrative

{
  id: 'test-manager-bot-eva',
  slug: 'test-manager-bot-eva',
  title: 'EVA - Enterprise Virtual Assistant',
  owner: 'JuneyJestin',
  
  // NEW: Hero section
  hero: {
    image: '/assets/test-manager-bot-eva/hero-eva-brain.jpg',
    tagline: 'AI-powered knowledge consolidation for the entire team',
    videoUrl: '/assets/test-manager-bot-eva/videos/Eva - Presentation and Demo v3.mp4',
  },
  
  // ENHANCED: Narrative structure
  narrative: {
    challenge: `
      Our QA team maintained critical knowledge across multiple disconnected systems:
      Confluence wikis with 200+ pages, thousands of JIRA tickets, TestRail test cases,
      GitHub repositories, and tribal knowledge stored in people's heads.
      
      Finding answers required searching 4-5 different systems, often taking hours.
      New team members struggled for weeks to get up to speed. We were constantly
      answering the same questions repeatedly.
      
      The fragmentation wasn't just inefficient – it was risky. Critical context
      lived in someone's memory, and when they were unavailable, work stalled.
    `,
    
    approach: `
      We built EVA (Enterprise Virtual Assistant) using Retrieval Augmented Generation
      (RAG) architecture combined with large language models.
      
      **Architecture:**
      1. **Ingestion Pipeline:** Automated crawlers pull data from Confluence, JIRA,
         GitHub, and TestRail on a scheduled basis
      2. **Vector Database:** Knowledge is embedded as vectors for semantic search
      3. **LLM Integration:** GPT-4 synthesizes answers with full citations
      4. **Chat Interface:** Simple, familiar chat UI with context preservation
      
      The key innovation was combining multiple data sources into a single semantic
      index while maintaining citations back to original sources. EVA doesn't just
      answer questions – it shows you where the answer came from.
    `,
    
    impact: `
      EVA transformed how our team accesses knowledge:
      
      **Before:** Search 5 systems, wait hours for answers, context scattered
      **After:** Ask EVA once, get answer in seconds, full citations included
      
      Response time dropped from 2 hours to 12 seconds on average. New engineers
      onboard in days instead of weeks. The team uses EVA 50+ times per week.
      
      "EVA answered in 10 seconds what would have taken me 2 hours to find across
      Confluence and JIRA. It's like having the entire team's knowledge in my pocket."
      – Rohit M., QA Engineer
    `,
    
    timeline: [
      { date: 'Q3 2023', milestone: 'Concept & POC', description: 'Initial prototype with Confluence only' },
      { date: 'Q4 2023', milestone: 'Multi-Source Integration', description: 'Added JIRA, GitHub, TestRail' },
      { date: 'Q1 2024', milestone: 'LLM Upgrade', description: 'Switched to GPT-4 for better synthesis' },
      { date: 'Q2 2024', milestone: 'Team Rollout', description: '50+ active users across QA team' },
    ],
  },
  
  // ENHANCED: Metrics with context
  metrics: [
    { 
      label: '90% Faster', 
      value: '12s',
      improvement: 'vs 2hrs manual search',
      context: 'Engineers get answers instantly instead of context-switching',
      icon: '⚡'
    },
    { 
      label: '4 Systems', 
      value: 'Unified',
      improvement: 'Confluence, JIRA, GitHub, TestRail',
      context: 'Single interface for all team knowledge',
      icon: '📚'
    },
    { 
      label: '50+ Users', 
      value: 'Weekly',
      improvement: '↑ 300% in first month',
      context: 'Team-wide adoption across QA department',
      icon: '👥'
    },
  ],
  
  techStack: [
    'Python', 'RAG', 'Vector Database', 'LLM', 
    'GPT-4', 'Confluence API', 'JIRA API', 'TestRail API', 'GitHub API', 'Embeddings'
  ],
  
  // REORGANIZED: Resources with context
  resources: {
    featured: {
      kind: 'video',
      title: 'EVA Presentation and Demo',
      description: 'See how EVA consolidates knowledge and generates test cases in real-time. Full demonstration of features and architecture.',
      src: '/assets/test-manager-bot-eva/videos/Eva - Presentation and Demo v3.mp4',
      duration: '12:34',
      sensitivity: 'public'
    },
    
    documentation: [
      {
        kind: 'pdf',
        title: 'EVA Tech Stack Overview',
        description: 'Architecture diagram and component breakdown showing how EVA integrates multiple data sources.',
        src: '/assets/test-manager-bot-eva/pdfs/VCD-EVA Tech Stack-211025-082100.pdf',
        pages: 4,
        sensitivity: 'public'
      },
      {
        kind: 'pdf',
        title: 'Features & Capabilities',
        description: 'Detailed breakdown of what EVA can do, including use cases and example queries.',
        src: '/assets/test-manager-bot-eva/pdfs/VCD-EVA Features-211025-081321.pdf',
        pages: 8,
        sensitivity: 'public'
      },
      {
        kind: 'pdf',
        title: 'Current Limitations',
        description: 'Known limitations and planned improvements for future releases.',
        src: '/assets/test-manager-bot-eva/pdfs/VCD-EVA Limitations-211025-082305.pdf',
        pages: 3,
        sensitivity: 'public'
      },
      {
        kind: 'pdf',
        title: 'Sample Prompts & Responses',
        description: 'Example questions you can ask EVA and how it responds with citations.',
        src: '/assets/test-manager-bot-eva/pdfs/EVA+Sample+Prompts.pdf',
        pages: 12,
        sensitivity: 'public'
      },
      {
        kind: 'slide',
        title: 'AI/ML Conference 2025 Presentation',
        description: 'Full presentation deck from AI/ML Conference showcasing EVA\'s architecture and impact.',
        src: '/assets/test-manager-bot-eva/slides/EVA - Enterprise Virtual Assistant - AI ML Conf 2025.pptx',
        slides: 32,
        sensitivity: 'public'
      },
    ],
    
    external: [],
    
    internal: [
      // Company-only links here
    ],
  },
  
  tags: [
    { key: 'topic:ai', label: 'AI/ML' },
    { key: 'topic:automation', label: 'Automation' },
    { key: 'topic:knowledge', label: 'Knowledge Management' },
  ],
  
  status: 'complete',
}
```

---

## Asset Creation Checklist

For each project, teammates should prepare:

### Required:
- [ ] **Hero image** (custom designed, 1920x1080 or wider)
- [ ] **Tagline** (one compelling sentence)
- [ ] **Three-part narrative** (Challenge, Approach, Impact)
- [ ] **3-5 metrics** with context
- [ ] **Resource descriptions** (not just filenames)

### Optional but Recommended:
- [ ] **Featured showcase** (main demo video or presentation)
- [ ] **Timeline** (if project evolved over time)
- [ ] **Team testimonial** (quote from user/teammate)
- [ ] **Architecture diagram** (visual of how it works)
- [ ] **Before/After comparison** (visual showing impact)

---

## Implementation Priority

1. **Phase 1:** Update data model to support enhanced structure
2. **Phase 2:** Design resource cards (replacing document lists)
3. **Phase 3:** Build narrative sections with rich typography
4. **Phase 4:** Create hero section with video/image support
5. **Phase 5:** Add optional sections (timeline, testimonials)

---

## Benefits of Narrative Approach

### For Viewers
✅ **Understand why it matters** before diving into docs
✅ **See the impact** before technical details
✅ **Choose what to explore** based on context, not guessing from filenames
✅ **Follow a story** instead of parsing a document dump

### For Team Members
✅ **Showcase thinking process** not just results
✅ **Demonstrate soft skills** (problem-solving, communication)
✅ **Tell a compelling story** for interviews
✅ **Stand out** from portfolios that just list projects

### For Hiring Managers
✅ **Quickly understand value** without deep technical knowledge
✅ **See thought process** and decision-making
✅ **Assess communication skills** through narrative
✅ **Get full picture** beyond just technical skills

---

Would you like me to:
1. Create a template for teammates to fill in their narrative content?
2. Start updating the `projects.ts` with this enhanced structure?
3. Design mockups showing the narrative-first layout?

