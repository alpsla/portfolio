# FINAL GEMINI PROMPT - Data Observability Hero Image

## COPY THIS ENTIRE PROMPT TO GEMINI:

---

Create a minimalist technical illustration for a data observability platform in 16:9 landscape format with a dark navy blue background (#0A1628).

## LEFT SECTION - DATA SOURCES (30% of width):

Display 6 platform icons in 2 vertical columns:
- Column 1 (top to bottom): Connected TV icon, TV/Roku icon, Logs/Media player icon
- Column 2 (top to bottom): TV icon, iPhone icon, Android icon

Label them: "Connected TV", "TV", "Roku", "iPon", "Andoes", "Android"

From each icon, draw thin glowing curved lines flowing rightward toward the center:
- Some lines in CYAN color (for logs)
- Some lines in BRIGHT GREEN color (for metrics)  
- Some lines in ORANGE color (for traces)

Add a legend in the upper right of this section:
- Green circle + "Metrics"
- Orange circle + "Traces"

## CENTER SECTION - PROCESSING PIPELINE (40% of width):

**Top node**: Large circular node with glowing ring around it, labeled "OpenTelemetry" at the top. This is where all the colored data streams from the left converge. Make it look like an hourglass or funnel shape with the streams flowing into it.

**Below OpenTelemetry, show 3 nodes in VERTICAL arrangement** (this is critical - one on top of another, NOT side by side):

1. **KAFKA node** (top):
   - Small-medium circular node
   - Dark blue/grey circle with white "K" icon inside
   - Label "Kafka" below the circle
   
2. **SNOWFLAKE node** (middle): ⚠️ IMPORTANT - ONLY ONE SNOWFLAKE
   - Medium circular node  
   - BRIGHT GREEN/CYAN circle with white snowflake ❄️ icon inside
   - Label "Snowflake" below the circle
   - This node should glow slightly
   - DO NOT create duplicate Snowflake nodes - only ONE!
   
3. **MONTE CARLO node** (bottom):
   - Medium-large circular node
   - ORANGE circle with white "MC" or data icon inside
   - Label "Monte Carlo" in white text
   - Below that, smaller text: "Observability analysis platform"
   - This node should have the most prominent glow

Connect all three nodes with thin curved lines showing data flowing downward: OpenTelemetry → Kafka → Snowflake → Monte Carlo. Show the colored streams (cyan, green, orange) continuing through these nodes.

Place all these nodes inside a subtle rounded rectangle frame/border to group them as "Processing Pipeline" section. Add "Processing Pipeline" as a header label at the top.

## RIGHT SECTION - INTELLIGENCE OUTPUT (30% of width):

Create a clean white rectangular dashboard mockup (like a window or panel) with rounded corners.

**Above the dashboard**: Large white text "Intelligence Output" as header

**Inside the white dashboard panel**:

1. **Test Results Grid** - THIS IS CRITICAL:
   - Create a 5 columns × 4 rows grid = 20 small square boxes
   - Each box should be a small rounded square
   - Color-code them EXACTLY as follows (distribute naturally, don't group by color):
     * **6 squares**: BRIGHT GREEN (#00FF88) with small white checkmark ✓ symbol
     * **2 squares**: BRIGHT RED (#FF4444) with small white X mark ✗ symbol  
     * **1 square**: ORANGE (#FF6B35) with small white warning triangle ⚠ symbol
     * **11 squares**: LIGHT GRAY (#555555) - dimmed/faded, no symbols
   - Arrange these colors randomly throughout the grid to look like a real test dashboard
   - DO NOT make the dashboard all light gray - it must have these colored boxes!

2. **Above the grid**: Display "70%" in large text with a downward arrow ↓ below it

3. **Below the grid**: Add a thin horizontal progress bar:
   - Left 30% of the bar: BRIGHT GREEN (#00FF88)
   - Right 70% of the bar: DARK GRAY (#2D3748)
   - Show a clean separation/divider between the green and gray sections

## VISUAL STYLE REQUIREMENTS:

- Dark navy blue background (#0A1628) for the entire image
- Modern, clean SaaS product design aesthetic
- Soft glowing effects on:
  * Data stream lines (cyan, green, orange)
  * OpenTelemetry hub node
  * Snowflake node (medium glow)
  * Monte Carlo node (strong glow)
- The white dashboard panel on the right should "pop" against the dark background
- Use clean geometric shapes - circles for nodes, rounded rectangles for panels
- Minimal text labels (only what's specified above)
- Professional enterprise software visualization style
- NO photorealistic elements, NO people, NO screenshots
- Pure vector illustration style with smooth curves and clean lines

## CRITICAL FIXES FROM PREVIOUS ATTEMPT:

1. ⚠️ Use ONLY ONE Snowflake node in the center pipeline (not two)
2. ⚠️ The dashboard on the right MUST have colored test boxes (green checkmarks, red X's, orange warnings, gray skipped) - NOT a plain light gray dashboard
3. ⚠️ Arrange Kafka → Snowflake → Monte Carlo VERTICALLY (one below the other), not side by side
4. ⚠️ Make the data streams curve naturally as they flow from left to center to right

## COMPOSITION CHECK:

Final image should show:
- LEFT: 6 platforms with colored streams flowing right →
- CENTER: OpenTelemetry hub at top, then Kafka, then ONE Snowflake, then Monte Carlo below (vertical stack)
- RIGHT: White dashboard with 20 colored test boxes (6 green ✓, 2 red ✗, 1 orange ⚠, 11 gray), 70% metric, green/gray progress bar

Aspect ratio: 16:9 landscape
Resolution: At least 1920×1080 pixels

---

## IF RESULT STILL HAS ISSUES:

**If Snowflake appears twice**: "Remove the duplicate Snowflake label. There should be only ONE Snowflake node in the center pipeline between Kafka and Monte Carlo."

**If dashboard is plain gray**: "The dashboard on the right needs a 5×4 grid of colored squares: 6 bright green boxes with checkmarks, 2 red boxes with X marks, 1 orange box with warning symbol, and 11 light gray boxes. Show these test result colors clearly."

**If layout is wrong**: "Arrange the center pipeline vertically: OpenTelemetry at top, then Kafka below it, then Snowflake below that, then Monte Carlo at the bottom. Stack them vertically, not horizontally."

