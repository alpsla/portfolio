# 🚀 Teammate Setup Guide - Personal Portfolio

**For:** All QA Team Members  
**Time:** 15-30 minutes  
**Difficulty:** Easy - Just follow the steps!

---

## 📋 What You'll Get

Your own personal portfolio website showing:
- ✅ Only YOUR projects (owned or contributed to)
- ✅ Your personal bio, contact info, and social links
- ✅ Customized colors, tagline, and branding
- ✅ Resume download button
- ✅ Public-safe content only (no internal links)

**Live Example:** `https://your-name.vercel.app`

---

## 🎯 Quick Start (3 Steps)

### Step 1: Fork the Template Repository

```bash
# On GitHub:
1. Go to: https://github.com/your-org/portfolio-template
2. Click "Fork" button (top right)
3. Name it: portfolio-yourname (e.g., portfolio-rostislav)
4. Click "Create fork"
```

### Step 2: Clone Your Fork Locally

```bash
# In your terminal:
cd ~/Projects  # Or wherever you keep code
git clone https://github.com/YOUR-USERNAME/portfolio-yourname.git
cd portfolio-yourname
npm install
```

### Step 3: Run the Setup Script

```bash
npm run init:personal
```

The script will ask you:
- **Your ID:** Choose from the list (e.g., rostialpin, rob1nalex)
- **Your domain:** Press Enter to use default (yourname.dev)

That's it! 🎉

---

## 🖊️ Customize Your Content

After running the setup, you'll have a file: `config/personal-config.ts`

This is YOUR file - customize it however you want!

### 1. Update Your Basic Info

```typescript
export const PERSONAL_CONFIG: PersonalConfig = {
  owner: 'yourname',              // Your ID from team.ts
  displayName: 'Your Full Name',
  tagline: 'Your Professional Title',  // What you want to be known for
  
  // ... more below
};
```

**Example Taglines:**
- `"Senior QA Automation Engineer | Platform Testing Expert"`
- `"QA Engineering Manager | Automation Architecture & Team Leadership"`
- `"Test Automation Specialist | Cross-Platform Testing"`

### 2. Write Your Bio (Hero Section)

This appears at the top of your home page:

```typescript
customBio: `
  Your elevator pitch here! 2-3 sentences about who you are,
  what you do, and what makes you unique. This is the first
  thing visitors see, so make it count!
`,
```

**Example:**
```typescript
customBio: `
  Senior QA Automation Engineer with 8 years of experience building 
  test frameworks for streaming platforms. I specialize in cross-platform 
  automation, CI/CD integration, and making testing fast and reliable.
`,
```

### 3. Customize Your About Page

Tell your story in your own words:

```typescript
about: {
  introduction: `
    Write 2-4 paragraphs about your journey:
    - How you got into QA/testing
    - What you're passionate about
    - Key experiences that shaped you
    - What you're working on now
    
    This is YOUR story - be authentic!
  `,
  
  lookingFor: `
    What roles are you seeking?
    - Senior QA Engineer
    - Test Automation Lead
    - SDET positions
    
    What companies interest you?
    - Streaming/media companies
    - High-growth SaaS
    - Fintech startups
  `,
  
  highlights: [
    'Your top achievement #1',
    'Your top achievement #2',
    'Your top achievement #3',
    'Key project or skill',
    'Recognition or milestone',
  ],
},
```

### 4. Add Your Contact Info

**IMPORTANT:** Use your PERSONAL email, not company email!

```typescript
contact: {
  headline: "Let's Connect!",
  message: "I'm open to new opportunities and always happy to chat about QA!",
  email: 'your.personal@gmail.com',  // ⚠️ PERSONAL EMAIL!
  timezone: 'PST (UTC-8)',
  preferredMethod: 'Email or LinkedIn',
},
```

### 5. Add Social Links

```typescript
social: {
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',  // Optional
  email: 'your.personal@gmail.com',
},
```

### 6. Enable Resume Download

```typescript
showResume: true,
resumePath: '/your-name-resume.pdf',
```

Then add your resume PDF to the `public/` folder:

```bash
# Copy your resume file
cp ~/Downloads/my-resume.pdf public/your-name-resume.pdf
```

### 7. Choose Your Colors (Optional)

Personalize your brand colors:

```typescript
theme: {
  primaryColor: '#10b981',  // Emerald green
  accentColor: '#3b82f6',   // Blue
},
```

**Color Options:**
- Blue: `#3b82f6`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Orange: `#f97316`
- Red: `#ef4444`
- Teal: `#14b8a6`

Pick colors that feel like "you"!

---

## 🧪 Test Your Site Locally

### Start the Dev Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

You should see:
- ✅ Your name and tagline
- ✅ Only your projects (not all team projects)
- ✅ Your bio and about page content
- ✅ Your contact info
- ✅ Resume button (if enabled)

### Test Different Pages

- **Home:** `http://localhost:3000`
- **About:** `http://localhost:3000/about`
- **Contact:** `http://localhost:3000/contact`
- **Project:** `http://localhost:3000/projects/unified-test-automation-framework`

### Validate Configuration

```bash
npm run check:ownership
```

This checks:
- ✅ Your owner ID is valid
- ✅ Projects are filtering correctly
- ✅ All contributors are team members

---

## 🚀 Deploy Your Portfolio

### Option A: Vercel (Recommended - FREE!)

1. **Create Vercel Account:**
   - Go to: https://vercel.com
   - Sign up with GitHub

2. **Import Your Repository:**
   - Click "New Project"
   - Select your forked repository
   - Click "Import"

3. **Configure Environment Variables:**
   ```
   NEXT_PUBLIC_MODE=external
   NEXT_PUBLIC_OWNER=yourname
   NEXT_PUBLIC_SITE_TYPE=personal
   NEXT_PUBLIC_BASE_URL=https://yourname.vercel.app
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

Your site will be live at: `https://yourname.vercel.app`

### Option B: Custom Domain (Optional)

If you own a domain (e.g., `john-smith.dev`):

1. Add custom domain in Vercel settings
2. Update DNS records (Vercel provides instructions)
3. Update `NEXT_PUBLIC_BASE_URL` to your domain

---

## 🔄 Keep Your Portfolio Updated

### Sync Template Updates (Quarterly)

The template repository gets updates (bug fixes, new features, etc.).

To sync these to your portfolio:

```bash
# Add template as upstream (one-time setup)
git remote add upstream https://github.com/your-org/portfolio-template.git

# Sync updates (run quarterly)
npm run sync:template
```

This will:
- ✅ Pull latest template changes
- ✅ Keep your personal config safe
- ✅ Preserve your resume and assets

### Update Your Content Anytime

```bash
# Edit your config
nano config/personal-config.ts

# Test locally
npm run dev

# Commit and push
git add config/personal-config.ts
git commit -m "Update bio and projects"
git push

# Vercel auto-deploys in ~2 minutes
```

---

## 📚 Content Writing Tips

### Your Bio

**Do:**
- ✅ Be authentic and conversational
- ✅ Highlight what makes you unique
- ✅ Show your passion for quality/testing
- ✅ Keep it 2-3 paragraphs

**Don't:**
- ❌ Copy/paste from LinkedIn
- ❌ Use corporate jargon
- ❌ Make it too long (save details for About page)

### Your About Page

**Do:**
- ✅ Tell your story (how you got into QA)
- ✅ Share what you're proud of
- ✅ Mention specific projects by name
- ✅ Use first person ("I built..." not "Built...")

**Don't:**
- ❌ List everything you've ever done
- ❌ Use bullet points exclusively (tell stories!)
- ❌ Be overly formal

### Your Highlights

Pick 4-6 achievements that:
- Show technical skills
- Demonstrate impact (with numbers!)
- Are recent (last 3-5 years)
- Make you stand out

**Examples:**
- ❌ "Wrote test automation" (too generic)
- ✅ "Built unified framework with 90% code reuse across 8 platforms"
- ✅ "Reduced test execution time from 5 hours to 1.5 hours"
- ✅ "Led team of 4 QA engineers in zero-defect release cycle"

---

## 🆘 Troubleshooting

### "I don't see my projects!"

**Check:**
1. Is your owner ID correct in `.env.local`?
2. Are you listed as owner or contributor in `projects.ts`?
3. Run: `npm run check:ownership`

### "Colors aren't changing!"

**Fix:**
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Restart dev server: `Ctrl+C`, then `npm run dev`
3. Check `theme` in `personal-config.ts` has valid hex colors

### "Resume button not showing!"

**Check:**
1. `showResume: true` in config
2. Resume file exists: `public/your-resume.pdf`
3. `resumePath` matches actual filename

### "Site looks like team site, not personal!"

**Check:**
1. `.env.local` has: `NEXT_PUBLIC_OWNER=yourname`
2. `.env.local` has: `NEXT_PUBLIC_SITE_TYPE=personal`
3. Restart dev server

---

## 📞 Get Help

**Stuck?** Ask in:
- Slack: `#portfolio-setup`
- Email: Rostislav (template creator)

**Found a bug?** Create an issue on the template repo.

---

## ✅ Completion Checklist

Before deploying, make sure:

- [ ] Personal config file created (`config/personal-config.ts`)
- [ ] Bio and tagline written
- [ ] About page content written (introduction, looking for, highlights)
- [ ] Contact info updated with PERSONAL email
- [ ] Social links added (LinkedIn at minimum)
- [ ] Resume uploaded to `public/` folder
- [ ] Resume button enabled and tested
- [ ] Colors customized (optional)
- [ ] Tested locally - everything looks good
- [ ] Validated with `npm run check:ownership`
- [ ] Deployed to Vercel
- [ ] Shared link with team for feedback

---

## 🎉 You're Done!

Congratulations! Your personal portfolio is live. 

**Share it:**
- Add to LinkedIn profile
- Include in resume
- Share with recruiters
- Update email signature

**Maintain it:**
- Update quarterly
- Add new projects
- Sync template updates
- Keep content fresh

**Make it yours:**
- Your story, your words
- Your achievements, your projects
- Your brand, your colors

Good luck with your job search! 🚀

---

**Document Version:** 1.0  
**Last Updated:** 2025-11-05  
**Template Version:** Phase 3 Complete

