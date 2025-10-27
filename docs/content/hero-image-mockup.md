# Data Observability Hero Image - Visual Mockup

## Quick Reference

**Aspect Ratio**: 16:9 (1920×1080px or 1280×720px)  
**Style**: Minimalist/Clean Modern SaaS  
**Text Overlay**: None (self-descriptive)  
**Animation**: Yes (web implementation)

---

## ASCII Layout Preview (UPDATED with Clearer Colors)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ◉ Web      ════╗                                                           │
│  ◉ WCTV         ║         ╔═══════════╗                  ┌─────────────┐   │
│  ◉ Roku         ╠════════▶║     ⊙     ║═══════▶          │ ✓ ✓ ✗ ░ ░   │   │
│                 ║         ║  OpenTel  ║                  │ ✓ ░ ⚠ ✓ ░   │   │
│  ◉ AppleTV      ║         ╚═════╤═════╝                  │ ░ ✗ ░ ✓ ░   │   │
│  ◉ iOS          ║               │                        │ ✓ ░ ░ ░ ░   │   │
│  ◉ Android  ════╝               │                        │                 │
│                            [Kafka]                       │     70% ↓       │
│                               ↓                          │                 │
│                            [dbt]                         └─────────────┘   │
│                               ↓                          ▓▓▓▓▓▓▓░░░░░░░   │
│                          [BigQuery]                      30%│  70% Skip   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

       DATA SOURCES          OBSERVABILITY PIPELINE         INTELLIGENT OUTPUT
       (Multi-platform)      (Processing Layer)             (Test Results)
```

**Legend** (Updated for Clarity):
- `◉` = Platform icons (Web, TV, Mobile)
- `═══▶` = Glowing data streams (cyan/green/orange)
- `⊙` = OpenTelemetry hub (pulsing glow)
- **`✓` = Passed tests (bright green) - 6 tests**
- **`✗` = Failed tests caught (red) - 2 tests**
- **`⚠` = Warning/flaky tests (orange) - 1 test**
- **`░` = Skipped tests (light gray) - 11 tests**
- `▓▓▓` = Tests executed (green portion of gauge = 30%)
- `░░░` = Tests skipped (gray portion of gauge = 70%)

---

## Color Reference Card (UPDATED)

```
┌──────────────────────────────────────────────────────────────┐
│  BACKGROUND & LAYOUT                                         │
│  Background:      ▓▓▓▓▓▓  #0A1628 (Deep Navy)              │
│  Text/UI:         ▓▓▓▓▓▓  #F0F4F8 (Off-White)              │
│                                                              │
│  DATA STREAMS                                                │
│  Cyan Stream:     ▓▓▓▓▓▓  #00D9FF (Logs)                   │
│  Green Stream:    ▓▓▓▓▓▓  #00FF88 (Metrics)                │
│  Orange Stream:   ▓▓▓▓▓▓  #FF6B35 (Traces)                 │
│  Active Nodes:    ▓▓▓▓▓▓  #00D9FF + glow                   │
│                                                              │
│  TEST RESULTS (Right Dashboard) ⭐ NEW                       │
│  ✓ Passed Tests:  ▓▓▓▓▓▓  #00FF88 (Bright Green) - 6      │
│  ✗ Failed Tests:  ▓▓▓▓▓▓  #FF4444 (Red) - 2               │
│  ⚠ Warnings:      ▓▓▓▓▓▓  #FF6B35 (Amber/Orange) - 1      │
│  ░ Skipped:       ▓▓▓▓▓▓  #555555 (Light Gray) - 11       │
│                                                              │
│  GAUGE BAR                                                   │
│  Executed:        ▓▓▓▓▓▓  #00FF88 (Green 30%)              │
│  Skipped:         ▓▓▓▓▓▓  #2D3748 (Dark Gray 70%)          │
└──────────────────────────────────────────────────────────────┘
```

**Color Logic Explained:**
- **Green (✓)**: Quality maintained - tests passed ✅
- **Red (✗)**: Early detection working - caught failures before production 🎯
- **Orange (⚠)**: Intelligent monitoring - flagged flaky/warning tests 📊
- **Gray (░)**: Efficiency gains - 70% reduction in execution ⚡

---

## Animation Flow Diagram

```
Time: 0s ──────────────────────────────────▶ 3s (loop)

Data Particles:
Platform → → → → Hub → → → → Dashboard
  ●          ●          ●          ●
[Continuous flow, staggered starts, 2-3s journey]

Hub Pulse:
Size:    1.0 → 1.05 → 1.0  (2s cycle)
Glow:    0.6 → 1.0 → 0.6   (2s cycle)

Test Grid:
Random boxes flicker:  ░ → ■ → ░  (0.5s each)

Metric Counter:
On page load: 0% → 70% (1.5s count-up)
```

---

## Technical Specifications

### File Deliverables

**Static Version** (for fallback):
- Format: SVG (preferred) or PNG
- Size: 1920×1080px at 72dpi
- File: `hero-data-observability-static.svg`
- Location: `/public/assets/data-observability/hero/`

**Animated Version** (for web):
- Format: Lottie JSON or animated SVG
- Size: Same as static
- File: `hero-data-observability-animated.json`
- Location: `/public/assets/data-observability/hero/`

### Code Integration Example

```tsx
// In project detail page component
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export function HeroImage({ projectSlug }) {
  const animationContainer = useRef(null);
  
  useEffect(() => {
    if (projectSlug === 'data-observability') {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data-observability/hero/hero-data-observability-animated.json'
      });
      return () => anim.destroy();
    }
  }, [projectSlug]);

  return (
    <div 
      ref={animationContainer} 
      className="w-full aspect-video rounded-lg overflow-hidden"
    />
  );
}
```

---

## 🎨 IMPROVED COLOR SCHEME (Clearer Visual Story)

### Dashboard Test Grid - Revised Logic

**Problem with original**: Too many colors (cyan, green, orange, gray) made it confusing  
**Solution**: Clear color-coded test results that tell a story

**New Color Scheme (20 tests in 5×4 grid):**
- **6 tests = BRIGHT GREEN** ✓ (30% selected & passed - healthy)
- **2 tests = RED** ✗ (10% critical failures caught early - key wins!)
- **1 test = ORANGE/AMBER** ⚠ (5% warnings/flaky tests)
- **11 tests = LIGHT GRAY** (55% intelligently skipped - efficiency)

**Visual Impact:**
- Green majority shows "quality maintained"
- Red tests show "early detection works" (better than production bugs!)
- Orange shows "intelligent monitoring" 
- Gray shows "70% reduction in execution"

This tells the story: *"Run fewer tests, catch critical issues early, maintain quality"*

---

## 🏗️ Architecture Options (Kafka/BigQuery vs Monte Carlo)

### **Current Design: DIY Stack**
**Center Pipeline Shows:**
- **Kafka** (streaming ingestion) → **dbt** (transformation) → **BigQuery** (warehouse)
- Represents: Custom-built, full control, infrastructure investment

### **Alternative: Monte Carlo SaaS**
**If using Monte Carlo:**
- **OpenTelemetry** → **Monte Carlo** → **Insights**
- Represents: Managed service, faster time-to-value, less infrastructure

### **Hybrid Approach (Recommended for flexibility):**
- **OpenTelemetry** → **Kafka** → **Monte Carlo** → **BigQuery/New Relic**
- Represents: Best of both (streaming + managed observability + existing analytics)

---

## 💡 Hero Image Recommendation

**For this project (in proposal/PoC phase):**

**Option A: Show the Vision (DIY Stack)** ⭐ RECOMMENDED
- Keep: Kafka → dbt → BigQuery in center
- Why: Shows technical depth, demonstrates architectural thinking
- Message: "We designed a comprehensive solution"

**Option B: Show Monte Carlo (If that's the direction)**
- Replace center with: Single "Monte Carlo" node
- Add small "Kafka" node before it (data ingestion)
- Why: Cleaner, emphasizes observability platform choice
- Message: "We leverage best-in-class tools"

**Option C: Show Both (Flexible Architecture)**
- Center: Kafka → "Observability Platform" (generic) → Analytics
- Small badge: "Monte Carlo / Custom Stack"
- Why: Platform-agnostic, shows you evaluated options
- Message: "We choose the right tool for the job"

---

## 🤔 Which to Use?

**Ask yourself:**
1. **Is Monte Carlo already approved/purchased?** → Use Option B (show Monte Carlo)
2. **Is this a proposal to build custom?** → Use Option A (show DIY stack)
3. **Still evaluating options?** → Use Option C (generic "Observability Platform")
4. **Want to show technical expertise?** → Use Option A (detailed tech stack)

**My recommendation for YOUR situation (Q4 2025 PoC phase):**
- **Use Option C**: Generic "Observability Platform" node
- Keeps the hero image flexible as you finalize tools
- Shows the concept without committing to specific vendors
- Update to specific logos once architecture is finalized

---

## AI Generation Prompts (Ready to Use)

### 🔧 Choose Your Architecture Version:

**VERSION A: DIY Stack (Kafka → dbt → BigQuery)** - Shows technical depth  
**VERSION B: Monte Carlo Platform** - Shows vendor selection expertise  
**VERSION C: Generic "Observability Platform"** - Flexible, vendor-agnostic ⭐ RECOMMENDED

---

### For Midjourney

**VERSION A (DIY Stack):**
```
Minimalist tech illustration, 16:9 landscape, dark navy blue background (#0A1628). Three-section horizontal flow: LEFT - six simple line-art platform icons (web, tv, mobile) emitting thin glowing data streams (cyan, green, orange) flowing rightward. CENTER - large circular OpenTelemetry hub node with soft glow, three smaller processing nodes below (Kafka, dbt, BigQuery icons), streams flowing through hub. RIGHT - clean rectangular dashboard with 5x4 grid of test boxes: 6 boxes bright green with checkmarks (passed tests), 2 boxes red with X marks (caught failures), 1 box amber/orange with warning symbol, 11 boxes light gray (skipped tests). Large "70% ↓" text above grid. Below grid: thin horizontal gauge, left 30% bright green, right 70% dark gray. Modern SaaS product style, clean lines, minimal detail, professional, glowing accent effects, data visualization aesthetic, enterprise software design. --ar 16:9 --style clean minimal --v 6
```

**VERSION B (Monte Carlo):**
```
Minimalist tech illustration, 16:9 landscape, dark navy blue background (#0A1628). Three-section horizontal flow: LEFT - six simple line-art platform icons (web, tv, mobile) emitting thin glowing data streams (cyan, green, orange) flowing rightward. CENTER - large circular OpenTelemetry hub node with soft glow, two smaller processing nodes below: first node labeled "Kafka" for streaming ingestion, second larger node labeled "Monte Carlo" (data observability platform) with prominent glow, streams flowing through nodes. RIGHT - clean rectangular dashboard with 5x4 grid of test boxes: 6 boxes bright green with checkmarks (passed tests), 2 boxes red with X marks (caught failures), 1 box amber/orange with warning symbol, 11 boxes light gray (skipped tests). Large "70% ↓" text above grid. Below grid: thin horizontal gauge, left 30% bright green, right 70% dark gray. Modern SaaS product style, clean lines, minimal detail, professional, glowing accent effects, data visualization aesthetic, enterprise software design. --ar 16:9 --style clean minimal --v 6
```

**VERSION C (Generic/Flexible):** ⭐ RECOMMENDED FOR POC PHASE
```
Minimalist tech illustration, 16:9 landscape, dark navy blue background (#0A1628). Three-section horizontal flow: LEFT - six simple line-art platform icons (web, tv, mobile) emitting thin glowing data streams (cyan, green, orange) flowing rightward. CENTER - large circular OpenTelemetry hub node with soft glow, two nodes below: "Streaming Pipeline" and "Observability Platform" (generic labels, no specific vendor logos), streams flowing through hub. RIGHT - clean rectangular dashboard with 5x4 grid of test boxes: 6 boxes bright green with checkmarks (passed tests), 2 boxes red with X marks (caught failures), 1 box amber/orange with warning symbol, 11 boxes light gray (skipped tests). Large "70% ↓" text above grid. Below grid: thin horizontal gauge, left 30% bright green, right 70% dark gray. Modern SaaS product style, clean lines, minimal detail, professional, glowing accent effects, data visualization aesthetic, enterprise software design. --ar 16:9 --style clean minimal --v 6
```

### For DALL-E 3

```
Create a minimalist technical illustration in 16:9 aspect ratio. Dark navy blue background (#0A1628). Show a horizontal flow in three sections:

LEFT (30%): Six simple platform icons (web browser, TV, mobile devices) in a vertical arrangement, each emitting thin glowing streams in cyan, green, and orange colors flowing to the right.

CENTER (40%): A large circular node representing OpenTelemetry with a soft glow, receiving all the streams. Below it, three smaller circular nodes labeled with icons for Kafka, dbt, and BigQuery, connected by subtle lines.

RIGHT (30%): A clean rectangular dashboard frame containing a 5x4 grid of small squares (20 total). Arrange them as follows:
- 6 squares in bright green (#00FF88) with small checkmarks - representing passed tests
- 2 squares in bright red (#FF4444) with X marks - representing caught failures  
- 1 square in orange/amber (#FF6B35) with warning icon - representing alerts
- 11 squares in light gray (#555) - representing skipped tests
Distribute colors naturally across the grid. Above the grid, display "70%" in large white text with a downward arrow. Below the dashboard, show a thin horizontal progress bar: left 30% bright green, right 70% dark gray.

Style: Modern SaaS product design, clean geometric shapes, minimal details, professional enterprise software aesthetic, glowing effects on active elements, no photorealism, no people, pure data visualization style.
```

### For Google Gemini (Imagen) ⭐ RECOMMENDED

**Base Prompt (all versions share this foundation):**

Create a minimalist technical illustration for a data observability platform, 16:9 landscape format.

**Left section (Data Sources)**: Display six small, simple platform icons arranged in two vertical columns (web browser, connected TV, Roku device, Apple TV, iOS phone, Android device). From each icon, draw thin glowing lines in three colors - cyan for logs, bright green for metrics, and orange for traces - all flowing smoothly toward the center.

**Right section (Intelligence Output)**: Display a clean white/light rectangular dashboard mockup with a 5-by-4 grid of small rounded squares inside (20 tests total). Color-code the test results clearly:
- 6 squares BRIGHT GREEN with tiny checkmarks (passed tests)
- 2 squares RED with small X marks (caught failures)
- 1 square ORANGE/AMBER with warning symbol (alerts/flaky tests)
- 11 squares LIGHT GRAY or dimmed (intelligently skipped tests)

Arrange colors naturally throughout the grid - don't group same colors together. Above the grid, prominently display "70%" in large white text with a downward arrow. Below the dashboard, add a thin horizontal progress bar: left 30% bright green (tests executed), right 70% dark gray (tests skipped), clean separation.

**Visual style**: Modern SaaS product design with dark navy blue background (#0A1628). Clean geometric shapes, minimal details, soft glowing effects on data streams and central hub. Dashboard pops against dark background. Professional, enterprise-grade software visualization, focus on data flow and intelligent automation. No text labels except "70%" metric. No people, no photographs, no realistic textures - pure vector illustration.

---

**VERSION C (Generic/Flexible)** ⭐ BEST FOR POC PHASE:

**Center section (Processing Pipeline)**: Feature a large circular node with subtle glow representing the OpenTelemetry hub where colored streams converge. Below this hub, show two medium-sized circular nodes in vertical arrangement: top one labeled "Streaming Pipeline" and bottom one labeled "Observability Platform" (use generic geometric icons, no vendor logos), connected by thin lines showing data flow downward. Keep it abstract and platform-agnostic.

---

**VERSION B (Monte Carlo Platform)** - If using specific vendor:

**Center section (Processing Pipeline)**: Feature a large circular node with subtle glow representing the OpenTelemetry hub where colored streams converge. Below this hub, show two circular nodes: smaller "Kafka" node for streaming ingestion, then larger "Monte Carlo" node (the main data observability platform) with prominent glow, connected by thin lines showing data transformation flow downward.

---

**VERSION A (DIY Stack)** - If showing technical depth:

**Center section (Processing Pipeline)**: Feature a large circular node with subtle glow representing the OpenTelemetry hub where colored streams converge. Below this hub, show three smaller circles in vertical arrangement: "Kafka" (streaming), "dbt" (transformation), and "BigQuery" (storage), connected by thin lines showing data flow downward.

---

**Tips for Gemini:**
- Gemini excels at understanding detailed natural language descriptions
- Break down complex layouts into clear spatial relationships
- Specify colors by name and hex code for accuracy
- Use phrases like "professional SaaS design" to set the right style
- If first result is too complex, emphasize "minimal" and "clean geometric shapes"
- **Start with VERSION C** (generic) since you're evaluating Monte Carlo vs custom build

### For Stable Diffusion

```
Positive: minimalist data pipeline visualization, dark mode interface, 16:9 composition, three horizontal sections, platform icons with glowing data streams on left, central processing hub with observability nodes, test results dashboard with color-coded grid on right, navy blue background (#0A1628), bright green passed tests, red failed tests, orange warning tests, gray skipped tests, cyan and green data streams, modern tech illustration, clean geometric shapes, soft glow effects, professional software product design, enterprise dashboard aesthetic, vector art style, checkmarks and X marks on test boxes

Negative: cluttered, photorealistic, people, photographs, screenshots, complex details, busy composition, excessive text labels, realistic textures, 3D rendering, gradients, all tests same color, confusing color scheme
```

---

## AI Tool Comparison & Recommendations

### **🆓 FREE OPTIONS**

#### **Google Gemini (Imagen)** ⭐ **RECOMMENDED - 100% FREE**
**Cost:** FREE (with Google account)  
**Access:** https://aistudio.google.com/

**Strengths:**
- Completely free with generous usage limits
- Excellent at understanding detailed natural language prompts
- Good at creating clean, professional illustrations
- Fast generation (usually 10-30 seconds)
- Can iterate quickly with conversation-style refinements
- No credit card required

**Best For:**
- First-time users (easy to access)
- Iterative refinement through chat
- Technical diagrams with specific layouts
- Anyone on a budget

**How to Use:**
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with Google account (free)
3. Select "Generate image" mode
4. Paste the Gemini prompt from above
5. Click Generate
6. Iterate with follow-up prompts if needed

**Expected Quality:** 8/10 for this style of illustration

---

#### **Stable Diffusion Online** 💻 **FREE (with limitations)**
**Cost:** FREE on various platforms  
**Access Options:**
- **Hugging Face Spaces** (free, no signup): https://huggingface.co/spaces
  - Search for "Stable Diffusion" spaces
  - Limited daily generations, may have queues
- **DreamStudio** (free trial): 25 free credits on signup
- **Clipdrop** (free tier): Limited generations per month
- **Leonardo.ai** (free tier): 150 tokens/day

**Strengths:**
- Completely free options available
- Full control over generation parameters
- Can use specific models for tech illustrations
- High quality with right settings

**Limitations:**
- Free tiers have daily/monthly limits
- May experience queue times during peak hours
- Some platforms require email signup
- Results vary by model/settings

**Best For:**
- Experimenting with multiple variations
- If Gemini results don't match your vision
- Learning AI image generation

---

### **💰 PAID OPTIONS (Better Quality)**

#### **Midjourney** 💎 **Best Quality - $10/month**
**Cost:** $10/month (Basic plan) - $30/month (Standard)  
**Access:** Requires Discord + subscription

**Strengths:**
- Highest quality aesthetic results
- Best for "professional product design" style
- Great community and examples
- Consistent style across iterations
- 200+ generations/month on Basic plan

**Limitations:**
- Requires paid subscription
- Less precise control over exact layouts
- Need Discord app to use
- Public generations on Basic plan

**Best For:**
- Final production-quality images
- Professional portfolio presentation
- If budget allows ($10/month)

**Worth it if:** You need multiple high-quality hero images for all projects

---

#### **DALL-E 3** (via ChatGPT Plus) 🤖 **Good Quality - $20/month**
**Cost:** $20/month (ChatGPT Plus subscription)  
**Access:** https://chat.openai.com/

**Strengths:**
- Very good at following detailed instructions
- Better text rendering than others
- Integrated with ChatGPT for easy iteration
- ~50 images per day
- Also get GPT-4 access

**Limitations:**
- More expensive than Midjourney
- Can be overly literal with prompts
- Daily image generation limits

**Best For:**
- If you already have ChatGPT Plus
- Need precise text elements in image
- Want both AI chat + image generation

---

#### **Stable Diffusion Local** 🖥️ **FREE but Technical**
**Cost:** FREE (need your own hardware)  
**Requirements:** GPU with 6GB+ VRAM recommended

**Strengths:**
- Completely free once set up
- Unlimited generations
- Full control over every parameter
- Can use custom models/LoRAs
- Privacy (everything runs locally)

**Limitations:**
- Requires technical setup (ComfyUI, Automatic1111)
- Need decent GPU (or generations are slow)
- Steeper learning curve
- 4-8 hours to learn and configure

**Best For:**
- Maximum control and customization
- If you're already familiar with SD
- Long-term project with many images needed

---

## 🏆 Recommendation Matrix

| Your Situation | Recommended Tool | Why |
|----------------|------------------|-----|
| **Need image now, no budget** | Google Gemini (FREE) | Fast, easy, good quality |
| **Experimenting, learning** | Gemini + HuggingFace SD (FREE) | Try both, compare results |
| **Professional portfolio, have $10** | Midjourney ($10/mo) | Best visual quality |
| **Already have ChatGPT Plus** | DALL-E 3 (included) | No extra cost |
| **Need 10+ hero images** | Midjourney ($10) or Gemini (FREE) | Volume pricing |
| **Tech-savvy, own GPU** | SD Local (FREE) | Unlimited, full control |

---

## 💡 **My Recommendation for This Project:**

**Start with Google Gemini (FREE)** → If not satisfied → **Try Midjourney ($10 for 1 month)**

**Reasoning:**
1. Gemini is free and will likely give you 7-8/10 quality
2. For a QA portfolio, content matters more than perfect imagery
3. You can always upgrade specific hero images later with Midjourney
4. Save money for now, invest if you're presenting to executives

---

## Quick Start Guide: Using Gemini

Since Gemini is free and easy to access, here's a step-by-step guide:

### Step 1: Access Google AI Studio
- Visit: https://aistudio.google.com/
- Sign in with your Google account
- Click "Create" → "Generate image"

### Step 2: Generate Initial Image
Copy and paste this prompt:

```
Create a minimalist technical illustration for a data observability platform, 16:9 landscape format.

Composition: Divide the image into three equal horizontal sections showing data flow from left to right:

Left section (Data Sources): Display six small, simple platform icons arranged in two vertical columns (web browser, connected TV, Roku device, Apple TV, iOS phone, Android device). From each icon, draw thin glowing lines in three colors - cyan for logs, bright green for metrics, and orange for traces - all flowing smoothly toward the center.

Center section (Processing Pipeline): Feature a large circular node with a subtle glow representing the OpenTelemetry hub where all the colored streams converge. Below this central hub, show three smaller circles in a vertical arrangement representing Kafka, dbt, and BigQuery, connected by thin lines showing the data transformation flow downward.

Right section (Intelligence Output): Display a clean rectangular dashboard mockup with a 5-by-4 grid of small squares inside. Make 6 squares bright cyan or green (representing selected tests), and 14 squares dark gray (representing skipped tests). Above this grid, prominently show "70%" with a downward arrow. Below the dashboard, add a thin horizontal progress bar that's green on the left side fading to gray on the right.

Visual style: Modern SaaS product design with a dark navy blue background (#0A1628). Use clean geometric shapes, minimal details, and soft glowing effects on the active data streams and central hub. The overall aesthetic should be professional, enterprise-grade software visualization with a focus on data flow and intelligent automation. No text labels except the "70%" metric. No people, no photographs, no realistic textures - pure vector-style illustration.
```

### Step 3: Refine If Needed
If the result isn't quite right, use follow-up prompts:

**If too complex:**
```
Simplify this further - use only basic geometric shapes, reduce details, make it more minimalist
```

**If colors are off:**
```
Adjust colors: background should be darker navy blue (#0A1628), data streams should be bright cyan (#00D9FF), green (#00FF88), and orange (#FF6B35)
```

**If layout needs adjustment:**
```
Make the three sections more evenly spaced horizontally, with clear separation between data sources, pipeline, and dashboard
```

**If you want more glow:**
```
Increase the glowing effects on the data streams and central hub - make them more luminous and vibrant
```

### Step 4: Download & Save
- Download the image as PNG
- Convert to SVG if needed (using tools like Vectorizer.ai)
- Save to: `/public/assets/data-observability/hero/hero-data-observability-static.svg`

### Step 5: Update Project
Add the hero image path to your project metadata in `src/lib/constants/projects.ts`:

```typescript
{
  id: 'data-observability',
  slug: 'data-observability',
  title: 'Data Observability for QA - Streaming Insights & Test Intelligence',
  heroImage: '/assets/data-observability/hero/hero-data-observability-static.svg', // Add this
  // ... rest of metadata
}
```

---

## Design Principles Summary

1. **Clarity over Complexity**: Each element has a clear purpose
2. **Flow Direction**: Left-to-right visual progression tells the story
3. **Color Coding**: Consistent use of cyan/green/orange for data types
4. **Emphasis**: The 70% metric is the key takeaway, make it prominent
5. **Scalability**: Design works at all viewport sizes (responsive)
6. **Accessibility**: High contrast, no reliance on color alone
7. **Animation Purpose**: Animations reinforce the "flow" concept, not decoration

---

## Next Steps

1. **Generate Image**: Use one of the AI prompts above
2. **Refine**: Iterate on the output if needed
3. **Export**: Save as SVG (1920×1080px)
4. **Save Location**: `/public/assets/data-observability/hero/`
5. **Update Project**: Add hero image path to projects.ts
6. **Implement Animation**: Create Lottie version or CSS animations
7. **Test**: Verify on actual project page

---

## Questions Before Generation?

- Should the platform icons be specific brand logos (YouTube, Roku logo, etc.) or generic shapes?
- Should we include subtle tech badge logos (OpenTelemetry, Kafka) or keep it fully abstract?
- Any specific branding colors from your company we should incorporate?
- Do you have access to Midjourney, DALL-E, or should we use Stable Diffusion?


