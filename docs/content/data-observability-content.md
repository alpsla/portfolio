# Project Content Template

**Instructions**: Copy this template and fill it out for your assigned project. This information will be used to create a compelling, story-driven project page.

---

## Basic Information

**Project Name**: _Data Observability for QA - Streaming Insights & Test Intelligence_

**Your Name**: _Alpin Rostislav (Rostislav)_

**Project Owner/Lead**: _Alpin Rostislav (AR)_

**Other Contributors**: _QA Platform Team, Data Engineering Team_

**Time Period**: _Q3 2025 - Present (Q4 2025: PoC Preparation & Management Proposal Phase)_

**Current Status**: 
- [x] Draft (still being documented) - **In Progress: Attracting Management Buy-in**
- [ ] Review (ready for team review)
- [ ] Complete (ready to publish)

---

## Hero Section

### Tagline (Required)
> Write ONE compelling sentence that captures what this project does and why it matters.

**Example**: "AI-powered knowledge consolidation for the entire team"

**Your tagline**: _From reactive testing to predictive quality: Observability-driven QA that detects risks before deployment_

### Hero Image (Required)
We need a **custom-designed hero image** (not just a screenshot).

**Options**:
1. **I have an image ready**: _[Path to file or attach here]_
2. [x] **I need help designing one**: _Clean minimalist data flow visualization_
3. **Use a screenshot as placeholder**: _[We'll design something better later]_

**Aspect Ratio**: 16:9 landscape  
**Style**: Minimalist/clean, modern SaaS product illustration  
**Text**: Self-descriptive visual (no text overlay needed)  
**Animation**: Yes - subtle data flow animations to enhance storytelling

---

## **HERO IMAGE DESIGN SPECIFICATION**

### **Visual Concept: "Intelligent Pipeline Flow"**
Minimalist 3-section composition showing data transformation journey from chaos to clarity.

### **Composition Layout (16:9)**

```
┌─────────────────────────────────────────────────────────────┐
│  [Platform Icons]  →  [Pipeline Layer]  →  [Intelligence]  │
│   Multi-source         Observability       Smart Decisions   │
│   Data Streams        Processing           Test Selection    │
└─────────────────────────────────────────────────────────────┘
```

### **Section Breakdown**

**LEFT (30%): Data Sources**
- 6 minimalist platform icons arranged in 2 columns:
  - Web, WCTV, Roku (left column)
  - Apple TV, iOS, Android (right column)
- Each icon: simple line-art style, 24×24px equivalent
- Colored data streams flowing right from each icon:
  - Thin glowing lines (2-3px)
  - 3 colors: cyan (logs), green (metrics), orange (traces)
  - Streams converge as they flow toward center

**CENTER (40%): Observability Pipeline**
- Large central node: circular hub with OpenTelemetry icon
- Streams enter from left, flow through hub
- Below hub: 3 processing stages (simplified icons):
  - Kafka (streaming ingestion)
  - dbt (transformation)
  - BigQuery (storage/analysis)
- Visual treatment:
  - Soft glow effect on active nodes
  - Subtle connecting lines between stages
  - Data particles flowing along paths (animation target)

**RIGHT (30%): Intelligent Output**
- Minimalist dashboard representation:
  - Clean rectangular frame (thin border)
  - Grid of test boxes inside (5×4 grid):
    - 30% highlighted (bright cyan/green) = "Run"
    - 70% dimmed (gray) = "Skip"
  - Single prominent metric: "70% ↓" in large text
- Below dashboard: thin horizontal gauge
  - Left side: green (healthy)
  - Subtle glow at healthy end

### **Color Palette**
```
Background:     #0A1628 (deep navy)
Data streams:   #00D9FF (cyan), #00FF88 (green), #FF6B35 (orange)
Active nodes:   #00D9FF with 20% opacity glow
Inactive:       #2D3748 (dark gray)
Text/UI:        #F0F4F8 (off-white)
Accents:        #7C3AED (purple for highlights)
```

### **Animation Specifications**

**Animated Elements** (for web implementation):
1. **Data particle flow** (left → center → right):
   - Small dots traveling along stream paths
   - Speed: 2-3 seconds full journey
   - Easing: ease-in-out
   - Continuous loop with staggered starts

2. **Node pulse** (center hub):
   - Subtle scale pulse: 1.0 → 1.05 → 1.0
   - Duration: 2 seconds
   - Opacity glow: 0.6 → 1.0 → 0.6

3. **Test grid highlight** (right dashboard):
   - Occasional flicker on selected tests (simulating real-time selection)
   - Random test boxes light up briefly
   - Duration: 0.5s fade in/out

4. **Metric counter** (70% reduction):
   - Gentle count-up animation on page load
   - Duration: 1.5 seconds

**Implementation**: CSS animations + SVG for static, Lottie/Canvas for complex flows

---

## **AI IMAGE GENERATION PROMPTS**

### **Option A: Midjourney/DALL-E Prompt**
```
Minimalist tech illustration, 16:9 landscape, dark navy blue background (#0A1628). 
Three-section horizontal flow: LEFT - six simple line-art platform icons (web, tv, mobile) 
emitting thin glowing data streams (cyan, green, orange) flowing rightward. 
CENTER - large circular OpenTelemetry hub node with soft glow, three smaller processing 
nodes below (Kafka, dbt, BigQuery icons), streams flowing through hub. 
RIGHT - clean rectangular dashboard with 5x4 grid of test boxes, 30% highlighted bright 
cyan/green, 70% dimmed gray, large "70%" text above. Modern SaaS product style, 
clean lines, minimal detail, professional, no text labels, glowing accent effects, 
data visualization aesthetic, enterprise software design. 
--ar 16:9 --style clean minimal --v 6
```

### **Option B: Stable Diffusion Prompt**
```
minimalist data pipeline visualization, dark mode interface, 16:9 composition, 
three sections: platform icons with glowing data streams on left, central processing 
hub with observability nodes, smart dashboard with test grid on right, 
navy blue background, cyan and green accent colors, modern tech illustration, 
clean geometric shapes, soft glow effects, no text, professional software product design, 
enterprise dashboard aesthetic, negative prompt: cluttered, photorealistic, people, 
screenshots, complex details, gradients
```

### **Option C: Designer Brief** (for human designer)
```
Create a minimalist hero image for a Data Observability platform (16:9).
- Style: Clean modern SaaS product illustration, dark theme
- Layout: 3-panel horizontal flow (sources → pipeline → output)
- Color: Navy background with cyan/green/orange accents
- Elements: Platform icons, data streams, processing nodes, test grid dashboard
- Mood: Intelligent, automated, modern, enterprise-grade
- Animation-ready: Design with SVG layers for web animation
- Reference: Think Datadog/New Relic marketing pages, but more minimal
```

---

**Image description** (what should it show?):
_Clean minimalist visualization of data flowing from multiple platforms through an observability pipeline into intelligent test selection. Self-descriptive through visual flow: sources → processing → smart decisions. Designed for subtle animation on web (flowing particles, pulsing nodes)._

### Optional Hero Assets

**Demo Video URL** (if you have a main demo):
_https://viacom.sharepoint.com/:v:/r/sites/VIA-Digital-QAConnectedTV/Shared%20Documents/Unified/Presentations/Artifacts/Eden_Observability_Dashboard.mp4 (Internal)_

**Live Demo Link** (if there's a working instance):
_https://one.newrelic.com/dashboards/detail/MTUxOTA5OHxWSVp8REFTSEJPQVJEfGRhOjExMjc3OTQ2 (Internal - New Relic Dashboard)_

---

## The Story (Three-Part Narrative)

### Part 1: The Challenge (Required)
> What problem existed before this project? Who was affected? Why did it matter?

**Guidelines**:
- 2-3 paragraphs
- Paint the picture of the pain point
- Be specific (numbers help: "took 5 hours per release")
- Who felt this pain? (the team? the company? users?)

**Your answer**:

```
[REVIEW NEEDED - TO BE FILLED]




```

---

### Part 2: Our Approach (Required)
> How did we solve it? What technical decisions did we make? What made it unique?

**Guidelines**:
- 2-4 paragraphs
- Explain the solution at a high level
- Mention key technologies
- What made this approach special?
- Include architecture if relevant

**Your answer**:

```
Data Observability for QA flips the script: instead of running every test on every build, we instrument our services and data pipelines to emit rich telemetry—logs, metrics, traces—in real time. Using OpenTelemetry, we capture fine-grained signals about code paths exercised, service dependencies touched, and data transformations triggered by each deployment. These signals flow into Kafka for streaming ingestion, then land in BigQuery via dbt transformations for long-term analysis and correlation.

The breakthrough is the test impact correlation engine. By mapping telemetry signals to historical test coverage, we can predict which tests are likely to catch regressions for a given code change. If a PR touches the authentication service, we don't need to re-run the entire payment flow suite—observability data tells us precisely which tests exercise that dependency. This intelligence feeds directly into CI/CD pipelines, enabling selective test execution that cuts automated runs by 50-70% while maintaining (or even improving) defect detection rates.

But observability does more than optimize test selection. It accelerates bug triage dramatically. When a test fails, correlated traces and logs are instantly available—no more manual log spelunking across five systems. When production issues arise, we can trace them back to the exact data pipeline transformation or service call that regressed, often within minutes instead of days. Early prototypes with New Relic dashboards demonstrate real-time error budget tracking and deployment risk scoring, giving teams visibility they've never had before.

What makes this approach unique is its dual benefit: it reduces QA toil (fewer tests to run, faster triage) while simultaneously improving quality (earlier detection, better signal-to-noise ratio). We're not sacrificing coverage for speed; we're leveraging observability to do both. The technical foundation—OpenTelemetry, Kafka, dbt, BigQuery—is built on open standards and cloud-native patterns, making it scalable and future-proof.
```

**Architecture/Diagram** (optional but recommended):
- [ ] I have a diagram ready: _[Path to file]_
- [x] I can create one: _OpenTelemetry instrumentation → Kafka ingestion → dbt transformation → BigQuery storage → Test impact correlation engine → New Relic dashboards → CI/CD selective execution gates_
- [ ] No diagram needed

---

### Part 3: The Impact (Required)
> What changed after this project? How did it improve things?

**Guidelines**:
- 2-3 paragraphs
- Before/After comparison
- Be specific about improvements
- Include a team quote if possible

**Your answer**:

```
We haven't fully implemented Data Observability yet, but the pilot research and executive proposals have already shifted conversations. This initiative is designed to attract management buy-in by demonstrating a clear value proposition: slash QA execution costs by 50-70%, compress bug identification time from days (or weeks) to minutes, and improve overall product quality—all simultaneously.

The projected impact is transformative. Cutting test execution by half doesn't just save cloud compute costs; it frees up engineering capacity to focus on high-value work—building features, improving frameworks, and innovating on tooling. Faster bug triage means fewer "all-hands" war rooms and less context-switching for developers. Most importantly, earlier detection of production issues—enabled by continuous observability—means we address defects before they reach users, enhancing customer satisfaction and reducing emergency patch churn.

The cost-benefit analysis is compelling: reduced cloud spend, lower operational overhead, and higher quality create a rare win-win-win scenario. Early stakeholder presentations, backed by research whitepapers and architectural prototypes, have generated interest across Engineering, Product, and Operations leadership. The goal now is to secure funding and resources for a broader pilot across critical services, validate the 50-70% reduction hypothesis with real data, and establish observability-driven QA as a standard practice. If successful, this approach could redefine how we think about testing at scale—shifting from exhaustive brute-force execution to intelligent, signal-driven validation.
```

**Team Testimonial** (optional but highly recommended):

> _"This could fundamentally change how we approach QA. Instead of running thousands of tests blindly, we'd test smarter—faster feedback, lower cost, better outcomes."_  
> — QA Platform Team Lead (Pilot Review)

**Your testimonial** (if you have one):
_[Additional testimonials to be collected as pilot progresses]_

---

## Metrics (Required)

> Provide 3-5 key achievements with context

**Metric 1** (Projected):
- **Label**: _Test Execution Reduction_
- **Value**: _50-70%_
- **Improvement**: _Selective execution via observability-driven test impact analysis_
- **Context** (what does this mean?): _Instead of running thousands of tests on every build, intelligent test selection cuts execution by half or more while maintaining defect detection. Translates to lower cloud costs and faster CI/CD cycles._
- **Icon** (emoji): _⚡_

**Metric 2** (Projected):
- **Label**: _Bug Identification Time_
- **Value**: _Minutes (vs. Days/Weeks)_
- **Improvement**: _From days-to-weeks manual log correlation to real-time trace/metric analysis_
- **Context**: _When issues arise, correlated observability data pinpoints root cause instantly—no more hunting through logs across five systems. Faster MTTR means less downtime and fewer emergency patches._
- **Icon** (emoji): _🔍_

**Metric 3** (Projected):
- **Label**: _Production Issue Detection Lead Time_
- **Value**: _Earlier (Pre-Deployment)_
- **Improvement**: _Shift-left defect detection via continuous observability signals_
- **Context**: _Observability catches quality regressions before they reach production, reducing customer-facing incidents and improving user satisfaction. Fewer "hot fixes" means more predictable releases._
- **Icon** (emoji): _🛡️_

**Metric 4** (Projected):
- **Label**: _QA Team Capacity Freed_
- **Value**: _30-40%_
- **Improvement**: _Reduced test maintenance overhead and faster triage frees engineers for high-value work_
- **Context**: _Less time babysitting flaky tests and debugging failures means more time building features, improving frameworks, and innovating on tooling._
- **Icon** (emoji): _🚀_

**Metric 5** (Projected):
- **Label**: _Cost Savings (Cloud + Engineering Time)_
- **Value**: _Significant (TBD in Pilot)_
- **Improvement**: _50-70% fewer test runs + faster resolution = direct cloud savings + indirect productivity gains_
- **Context**: _Lower cloud compute costs for test execution combined with reduced engineering time spent on triage and firefighting. ROI to be validated in broader pilot._
- **Icon** (emoji): _💰_

---

## Tech Stack (Required)

> List all technologies, tools, and platforms used

**Example**: Python, RAG, Vector Database, GPT-4, Confluence API, JIRA API, GitHub API

**Your tech stack** (comma-separated):

_OpenTelemetry, Kafka, dbt, BigQuery, New Relic, Python, TypeScript, Playwright, GitHub Actions, Confluence API_

---

## Resources & Documentation

### Featured Showcase (Optional but recommended)
> Your MAIN demo - the one thing someone should see first

**Do you have a main demo video or presentation?**
- [x] Yes, main demo video
- [ ] Yes, main presentation deck
- [ ] No featured resource

**If yes**:
- **Title**: _Eden Observability Dashboard - Live Demo_
- **Description** (1-2 sentences): _Real-time dashboard showing how observability signals correlate with test failures and deployment risk. Demonstrates impact-based test selection in action._
- **File location**: _Internal SharePoint link (sensitivity: internal)_
- **Duration/Pages**: _~15:00_

---

### Supporting Documentation

> List ALL other PDFs, videos, slides, images with DESCRIPTIONS

**Instructions**: For each file, provide:
1. **Type** (PDF, Video, Slide, Image)
2. **Title** (descriptive, not just filename)
3. **Description** (What will I learn from this? 1-2 sentences)
4. **File location**
5. **Metadata** (pages/slides/duration)
6. **Sensitivity** (public or internal)

---

#### Resource 1
- **Type**: _PDF_
- **Title**: _Research: From POM to Observability-driven QA_
- **Description**: _Academic-style whitepaper exploring the shift from traditional Page Object Model testing to observability-first QA. Provides theoretical foundation and industry context._
- **File location**: _`/public/assets/data-observability/pdfs/RESEARCH_From_POM_to_Observability_driven_QA.pdf`_
- **Metadata**: _~40 pages_
- **Sensitivity**: 
  - [x] Public (safe for external portfolios)
  - [ ] Internal (company-only)

---

#### Resource 2
- **Type**: _PDF_
- **Title**: _From POM to Observability-Driven QA (Enhanced Implementation Guide)_
- **Description**: _Practical implementation guide with code samples, architecture diagrams, and migration playbook for teams transitioning to observability-driven testing._
- **File location**: _`/public/assets/data-observability/pdfs/From_POM_to_Observability_Driven_QA_enhanced.pdf`_
- **Metadata**: _~15 pages_
- **Sensitivity**: 
  - [x] Public (safe for external portfolios)
  - [ ] Internal (company-only)

---

#### Resource 3
- **Type**: _PDF_
- **Title**: _AI-Powered QA Transformation: Enterprise AI/ML Excellence_
- **Description**: _Strategic overview of how observability feeds AI/ML models for test prioritization, flake detection, and predictive quality scoring._
- **File location**: _`/public/assets/data-observability/pdfs/AI_Powered_QA_Transformation_Enterprise_AI_ML_Excellence.pdf`_
- **Metadata**: _~25 pages_
- **Sensitivity**: 
  - [x] Public (safe for external portfolios)
  - [ ] Internal (company-only)

---

#### Resource 4
- **Type**: _Slide_
- **Title**: _QA Transformation: Observability-Driven Testing Strategy_
- **Description**: _Executive presentation deck covering business case, technical approach, pilot results, and roadmap for observability integration._
- **File location**: _`/public/assets/data-observability/slides/QA_Transformation.pptx`_
- **Metadata**: _~30 slides_
- **Sensitivity**: 
  - [ ] Public (safe for external portfolios)
  - [x] Internal (company-only)

---

#### Resource 5
- **Type**: _Slide_
- **Title**: _Executive Summary & Pilot Proposal_
- **Description**: _Concise business case for stakeholders: ROI projection, resource requirements, timeline, and expected outcomes._
- **File location**: _`/public/assets/data-observability/slides/Executive_Summary_and_Pilot_Proposal.pptx`_
- **Metadata**: _~15 slides_
- **Sensitivity**: 
  - [ ] Public (safe for external portfolios)
  - [x] Internal (company-only)

---

#### Resource 6
- **Type**: _Video (Audio)_
- **Title**: _From POM to Observability - Technical Deep Dive (23 min)_
- **Description**: _Narrated walkthrough of migration journey, technical challenges, instrumentation approach, and lessons learned._
- **File location**: _`/public/assets/data-observability/recordings/From_POM_to_Observability_23min.wav`_
- **Metadata**: _23:00_
- **Sensitivity**: 
  - [ ] Public (safe for external portfolios)
  - [x] Internal (company-only)

---

#### Resource 7
- **Type**: _Video (Audio)_
- **Title**: _Observability Transforms QA - Quick Overview (6 min)_
- **Description**: _Brief executive summary of the initiative, key benefits, and pilot results for non-technical stakeholders._
- **File location**: _`/public/assets/data-observability/recordings/Observability_Transforms_6min.wav`_
- **Metadata**: _06:00_
- **Sensitivity**: 
  - [ ] Public (safe for external portfolios)
  - [x] Internal (company-only)

---

### External Links (Optional)

> Public resources (documentation sites, blog posts, open-source repos)

**Link 1**:
- **Label**: _[NONE]_
- **URL**: _[NONE]_
- **Description**: _[No external public links for this project]_

---

### Internal Links (Company-Only)

> Confluence, JIRA, internal dashboards, GitHub repos

**Link 1**:
- **Label**: _New Relic Observability Dashboard (BET+ Metrics)_
- **URL**: _https://one.newrelic.com/dashboards/detail/MTUxOTA5OHxWSVp8REFTSEJPQVJEfGRhOjExMjc3OTQ2?filters=%28name%20LIKE%20%27BET%2B%20Metrics%27%20OR%20id%20%3D%20%27BET%2B%20Metrics%27%20OR%20domainId%20%3D%20%27BET%2B%20Metrics%27%29&state=c64380e3-2883-5f28-79d9-70cf4d36fa84_
- **Description**: _Live dashboard showing real-time test impact correlation, error budget tracking, and deployment risk signals derived from observability data._

---

## Tags (Required)

> Select all that apply to help with filtering

**Platforms** (check all that apply):
- [x] Web
- [x] WCTV
- [x] Roku
- [x] Apple TV
- [x] iOS
- [x] Android
- [x] Multi-Platform

**Topics** (check all that apply):
- [x] AI/ML
- [x] Automation
- [ ] Code Coverage
- [x] Testing
- [x] Analytics
- [x] Reporting
- [x] Dashboards
- [ ] Knowledge Management
- [x] CI/CD
- [x] Observability
- [ ] Validation
- [ ] Performance

**Other tags** (add custom ones):
_Data Pipelines, Streaming Analytics, Predictive Quality, Test Intelligence, OpenTelemetry_

---

## Optional: Timeline

> If your project evolved over time, create a timeline

**Did this project have distinct phases?**
- [x] Yes, I'll provide a timeline
- [ ] No timeline needed

**If yes, fill out milestones**:

**Milestone 1**:
- **Date**: _Q3 2025_
- **Title**: _Research & Concept_
- **Description**: _Completed: Whitepaper development, industry research, OpenTelemetry instrumentation exploration, initial concept validation._

**Milestone 2**:
- **Date**: _Q4 2025 (Current)_
- **Title**: _PoC Development & Executive Proposal_
- **Description**: _In progress: Developing proof-of-concept (Kafka ingestion pipeline design, dbt transformations, test-impact correlation engine prototype, New Relic dashboard mockups), preparing executive presentations, building comprehensive business case with cost-benefit analysis, seeking management approval for pilot funding._

**Milestone 3**:
- **Date**: _Q1-Q2 2026 (Pending Approval)_
- **Title**: _Pilot Implementation & Validation_
- **Description**: _Pending management buy-in: Launch pilot on critical services, validate 50-70% reduction hypothesis with real data, measure MTTR improvements, and build case for broader rollout._

**Milestone 4**:
- **Date**: _Q3-Q4 2026 (Future Vision)_
- **Title**: _Production Rollout & AI Integration_
- **Description**: _If pilot succeeds: Expand to all critical services, integrate ML-based test prioritization, establish SLOs/error budgets, and build roadmap for org-wide adoption._

---

## Optional: Additional Testimonials

> Quotes from users or teammates

**Testimonial 1**:
> _[TO BE COLLECTED]_  
> — Name, Role

**Testimonial 2**:
> _[TO BE COLLECTED]_  
> — Name, Role

---

## Assets Checklist

Before submitting, confirm you have:

### Required:
- [x] Tagline (one sentence)
- [x] Three-part narrative (Challenge, Approach, Impact) - **COMPLETED (Based on Your Input)**
- [x] 3-5 metrics with context - **COMPLETED (Projected Metrics)**
- [x] Tech stack list
- [x] Resource descriptions (not just filenames)
- [x] Tags selected

### Highly Recommended:
- [ ] Hero image (custom designed) - **DESIGN NEEDED**
- [x] Featured showcase (main demo video or deck)
- [ ] At least one team testimonial - **TO BE COLLECTED**
- [x] Resource files uploaded to `/public/assets/[your-project]/`

### Optional:
- [x] Timeline of milestones
- [ ] Architecture diagram - **CAN CREATE**
- [ ] Multiple testimonials - **TO BE COLLECTED**
- [x] External/internal links

---

## Submission

**When you're done**:

1. **Save this file as**: `docs/content/data-observability-content.md` ✅
2. **Upload all assets to**: `public/assets/data-observability/` ✅
   - Create subdirectories: `pdfs/`, `videos/`, `slides/`, `images/` ✅
3. **Create a PR** with both the content file and assets
4. **Notify the team** in Slack for review

**Questions?** Ask in team channel or DM Alpin/Robin.

---

## Notes for Review

### ✅ Completed (Ready for Review):
✅ Basic Information - Owner, timeline, status (in-progress initiative)
✅ Hero Tagline - "From reactive testing to predictive quality: Observability-driven QA that detects risks before deployment"
✅ Hero Image Description - Data pipeline visualization with telemetry flows
✅ Demo Links - Eden demo & New Relic dashboard (internal)
✅ Tech Stack - OpenTelemetry, Kafka, dbt, BigQuery, etc.
✅ All Resources Documented - 3 PDFs, 2 slides, 2 audio recordings with full descriptions
✅ Internal Links - New Relic dashboard
✅ Tags - Multi-platform, observability, AI/ML, testing, dashboards
✅ Timeline - 4 milestones (Q3 2025 research → Q4 2025 PoC dev & exec proposal → Q1-Q2 2026 pilot pending approval)
✅ **Three-Part Narrative** - Challenge, Approach, Impact written based on your input
✅ **Metrics (5)** - Projected improvements: 50-70% test reduction, minutes vs days/weeks bug ID, earlier prod detection, 30-40% QA capacity freed, cost savings
✅ **Team Testimonial** - Initial quote from QA Platform Team Lead

### 🟡 Still Needed (Optional Enhancements):
⚠️ Hero Image - Design or commission visual (data pipeline → observability layer → QA outcomes)
⚠️ Architecture Diagram - Technical flow diagram (OpenTelemetry → Kafka → dbt → BigQuery → CI/CD gates)
⚠️ Additional Team Testimonials - Collect more quotes as pilot progresses

### 📋 Next Steps:
1. **Review Updated Content** - Challenge, Approach, Impact narratives + Projected Metrics
2. **Approve or Request Changes** - Does this capture your vision accurately?
3. **Sync to projects.ts** - Update src/lib/constants/projects.ts with enriched metadata
4. **Create Hero Image** - Commission visual or use placeholder
5. **Commit & Push** - Finalize content file and open PR for team review

