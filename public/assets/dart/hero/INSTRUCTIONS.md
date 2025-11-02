# DART Hero Image - Generation Instructions

## Step 1: Generate the Image

### Option A: Use ChatGPT with DALL-E
1. Open ChatGPT (requires ChatGPT Plus for DALL-E access)
2. Copy the prompt from `SHORT_PROMPT.txt` or `GENERATE_IMAGE.txt`
3. Paste into ChatGPT
4. Review the generated image
5. If needed, ask for refinements (e.g., "make the text larger", "adjust colors", "add more contrast")
6. Download the image

### Option B: Use Claude with Image Generation
1. Copy the prompt from `SHORT_PROMPT.txt`
2. Paste into Claude
3. Download the generated image

### Option C: Use Midjourney
1. Copy the Midjourney-specific prompt from `GENERATE_IMAGE.txt`
2. Paste in Midjourney Discord
3. Select the best variation
4. Upscale to full resolution
5. Download the image

### Option D: Use Any Other AI Image Generator
- Stable Diffusion, Leonardo.ai, Ideogram, etc.
- Use the prompt from `SHORT_PROMPT.txt` as a starting point
- Adjust as needed for the specific tool

---

## Step 2: Save the Generated Image

1. **Download the image** from your chosen tool
2. **Save it in this directory** as:
   ```
   /Users/alpinro/Code Prjects/portfolio/public/assets/dart/hero/dart_hero.png
   ```
3. **Optimize the image** (if needed):
   - Recommended size: 1920x1080px
   - Format: PNG
   - Target file size: Under 500KB
   - Use tools like TinyPNG.com if the file is too large

---

## Step 3: Update the Project Configuration

Open `/Users/alpinro/Code Prjects/portfolio/src/lib/constants/projects.ts`

Find the DART project entry (around line 92) and add the heroImage property:

```typescript
{
  id: 'dart',
  slug: 'dart',
  title: 'DART - Dynamic Analysis Routine Tester',
  heroImage: '/assets/dart/hero/dart_hero.png',  // <-- ADD THIS LINE
  owner: 'rohitmenonv',
  summary: 'Intelligent test selection and optimization system...',
  // ... rest of the configuration
}
```

---

## Step 4: Verify the Image

1. Save the changes to `projects.ts`
2. The dev server should auto-reload
3. Open your browser to: `http://localhost:3001/projects/dart`
4. You should see the hero image at the top of the page

---

## Troubleshooting

### Image not showing
- Check the file path is exactly: `public/assets/dart/hero/dart_hero.png`
- Verify the heroImage property is correctly added to projects.ts
- Check browser console for any 404 errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Image quality issues
- Ensure the image is at least 1920x1080px
- Save as PNG for better quality (not JPEG)
- Check that colors are vivid and text is readable

### File size too large
- Use image compression tools like:
  - TinyPNG.com
  - Squoosh.app
  - ImageOptim (Mac)
- Target: Under 500KB for optimal web performance

---

## Expected Result

Once completed, the DART project page will display:
- Hero image at the top showing the 4-step workflow
- Visual representation of DART's intelligent test selection process
- Professional, modern aesthetic matching the portfolio design
- Clean, readable visualization of the system's capabilities

The image will also appear in the featured projects carousel on the home page (if it's one of the only projects with a hero image).
