# DART Hero Image Generation Prompt

## Project Context
**DART** (Dynamic Analysis Routine Tester) - Intelligent test selection and optimization system that analyzes code changes and automatically determines which tests to execute, which to skip, and which new tests to create. Maps test coverage to code at the method level across Android and Roku platforms, reducing regression testing from days to hours. Additionally identifies dead code (unused classes/methods) to help reduce technical debt.

---

## Image Generation Prompt

Create a professional, technical hero image (1920x1080px) for a code coverage analysis tool called DART (Dynamic Analysis Routine Tester). The image should be modern, clean, and data-focused with a dark tech aesthetic.

### Layout Structure (3 Panels)

**LEFT PANEL (30% width): Platform Coverage**
- Title: "Multi-Platform Coverage"
- Two platform icons/logos stacked vertically:
  - Android logo with "Android SDK" label
  - Roku logo with "Roku BrightScript" label
- Show green checkmarks next to each platform
- Subtle gradient background (dark blue to purple)

**CENTER PANEL (40% width): Coverage Analysis Dashboard**
- Title: "Method-Level Analysis"
- Display a code coverage visualization showing:
  - Overall coverage metric: "78.5%" in large, bold text (gradient from green to blue)
  - Coverage breakdown bar chart:
    - Covered Methods: 65% (green bar)
    - Partially Covered: 13.5% (yellow/orange bar)
    - Uncovered Methods: 21.5% (red bar)
  - Small code snippet overlay showing:
    ```
    ✓ getUserProfile()    100%
    ⚠ validateSession()   45%
    ✗ handleError()       0%
    ```
  - Use monospace font for code, with green (✓), yellow (⚠), and red (✗) indicators

**RIGHT PANEL (30% width): Integration & Reporting**
- Title: "Automated Reporting"
- Stack of integration badges/icons:
  - Jenkins (with automation icon)
  - New Relic dashboard icon
  - GitHub Actions workflow icon
  - Confluence API icon
- Show a mini dashboard preview with:
  - "Coverage Trends" line graph showing upward trend
  - "Last Report: 2 hours ago" timestamp
  - "Issues Found: 3" in orange badge

### Visual Style
- **Color Palette**:
  - Background: Dark blue-gray gradient (#1a1f2e to #2d3748)
  - Accent colors: Electric blue (#3b82f6), Purple (#8b5cf6), Green (#10b981), Orange (#f59e0b), Red (#ef4444)
  - Text: White (#ffffff) and light gray (#e5e7eb)
- **Typography**: Modern sans-serif (similar to Inter or Roboto)
- **Icons**: Flat, minimalist style with subtle glow effects
- **Data Visualization**: Clean, professional charts with smooth gradients
- **Overall Feel**: High-tech, data-driven, professional development tool

### Additional Elements
- Subtle grid pattern in background
- Soft glow/shadow effects around panels for depth
- Small "DART" logo/text at top center with tagline: "Dynamic Analysis Routine Tester"
- Connecting lines or data flow indicators between panels (optional)

### Technical Requirements
- Resolution: 1920x1080px (16:9 aspect ratio)
- Format: PNG with transparency support
- File size: Under 500KB (optimize for web)
- Ensure text is readable when scaled down to 800px width

---

## Alternative Simplified Version

If the 3-panel layout is too complex, create a centered dashboard-style visualization:

- Large center display showing:
  - DART logo at top
  - Circular coverage gauge showing 78.5% with gradient fill
  - Platform icons (Android + Roku) below the gauge
  - 3 key metrics in boxes:
    - "Methods Covered: 1,247"
    - "Coverage Gaps: 342"
    - "Platforms: 2"
  - Integration logos at bottom (Jenkins, New Relic, GitHub)
  - Dark tech background with subtle code pattern overlay

---

## Save Location

Once generated, save the hero image as:
`/Users/alpinro/Code Prjects/portfolio/public/assets/dart/hero/dart_hero.png`

Then update `src/lib/constants/projects.ts`:
```typescript
heroImage: '/assets/dart/hero/dart_hero.png'
```
