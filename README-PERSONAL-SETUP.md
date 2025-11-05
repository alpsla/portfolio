# 🎯 Personal Portfolio Setup - Start Here!

**Welcome!** This is your guide to setting up your own personal portfolio from the QA team template.

---

## 🚀 Quick Start (Choose Your Path)

### 👤 I'm a Teammate Setting Up My Portfolio

**→ Read:** [Teammate Setup Guide](./docs/TEAMMATE-SETUP-GUIDE.md)

**What you'll do:**
1. Fork the template repository
2. Run `npm run init:personal`
3. Customize your content in `config/personal-config.ts`
4. Deploy to Vercel (free!)

**Time:** 15-30 minutes  
**Difficulty:** Easy

---

### 👨‍💻 I'm a Developer Testing Different Sites

**→ Read:** [Run Personal Sites Guide](./docs/RUN-PERSONAL-SITES.md)

**Quick commands:**
```bash
# Test Alpin's portfolio
NEXT_PUBLIC_OWNER=rostialpin npm run dev

# Test Robin's portfolio
NEXT_PUBLIC_OWNER=rob1nalex npm run dev

# Test team site
NEXT_PUBLIC_MODE=internal npm run dev
```

---

### 🏗️ I'm Understanding the Architecture

**→ Read:** [Option 1 Architecture](./docs/design/OPTION-1-ARCHITECTURE.md)

Learn how the template + personal portfolios system works.

---

## 📚 All Documentation

### For End Users (Teammates)
- **[Teammate Setup Guide](./docs/TEAMMATE-SETUP-GUIDE.md)** - Complete walkthrough
- **[ENV-CONFIG.md](./ENV-CONFIG.md)** - Environment variables explained
- **[PENDING-ASSETS.md](./docs/PENDING-ASSETS.md)** - Avatar images info

### For Developers
- **[Run Personal Sites](./docs/RUN-PERSONAL-SITES.md)** - Quick commands
- **[Quick Start Next Session](./QUICK_START_NEXT_SESSION.md)** - Development status
- **[Phase 2 Quickstart](./docs/PHASE2-QUICKSTART.md)** - Developer reference

### Architecture & Design
- **[Option 1 Architecture](./docs/design/OPTION-1-ARCHITECTURE.md)** - How it works
- **[Migration Plan](./docs/design/MIGRATION-PLAN.md)** - Implementation phases
- **[Parallel Development](./docs/design/PARALLEL-DEVELOPMENT-STRATEGY.md)** - Git workflow

---

## 🎨 What Each Teammate Needs to Do

### 1. Content (Required)

Edit `config/personal-config.ts`:

```typescript
{
  owner: 'yourname',
  displayName: 'Your Full Name',
  tagline: 'Your Professional Title',
  customBio: 'Your elevator pitch...',
  
  about: {
    introduction: 'Your story...',
    lookingFor: 'What roles you want...',
    highlights: ['Achievement 1', 'Achievement 2'],
  },
  
  contact: {
    email: 'your.personal@gmail.com',  // ⚠️ Personal email!
  },
  
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
}
```

**Time:** 30-60 minutes of writing

### 2. Resume (Optional but Recommended)

```bash
# Add your resume PDF
cp ~/Downloads/my-resume.pdf public/your-name-resume.pdf

# Enable in config
showResume: true,
resumePath: '/your-name-resume.pdf',
```

### 3. Deploy (Required)

```bash
# Deploy to Vercel (free!)
# See: docs/TEAMMATE-SETUP-GUIDE.md section "Deploy Your Portfolio"
```

**Your live site:** `https://yourname.vercel.app`

---

## ✅ Validation

Before deploying, check everything works:

```bash
# 1. Validate configuration
npm run check:ownership

# 2. Test locally
npm run dev
open http://localhost:3000

# 3. Check all pages work:
# - Home: http://localhost:3000
# - About: http://localhost:3000/about
# - Contact: http://localhost:3000/contact
# - Projects: Should show only YOUR projects
```

---

## 🆘 Common Questions

### "Which projects will show on my portfolio?"

Projects where you're listed as:
- **Owner:** `owner: 'yourname'`
- **Contributor:** `contributors: ['yourname', ...]`

Check: `src/lib/constants/projects.ts`

### "Can I customize colors?"

Yes! In `config/personal-config.ts`:

```typescript
theme: {
  primaryColor: '#10b981',  // Your brand color
  accentColor: '#3b82f6',   // Accent color
},
```

### "Do I need to keep syncing from template?"

Run quarterly to get updates:

```bash
npm run sync:template
```

This gets bug fixes and new features while keeping your content safe.

### "Can I add my own projects?"

For now, projects are managed in the template (`src/lib/constants/projects.ts`).

To add a project:
1. Create PR to template repo
2. Sync template to your fork
3. Project appears automatically

**Future:** Custom project support per person.

---

## 📞 Get Help

**Stuck?** Reach out:
- Slack: `#portfolio-setup`
- Email: Rostislav (template maintainer)
- Create issue on template repo

**Found a bug?** Create issue with:
- What you tried to do
- What happened
- Error messages
- Your configuration

---

## 🎯 Success Checklist

Before you share your portfolio:

- [ ] Content written (bio, about, highlights)
- [ ] Contact info updated (PERSONAL email!)
- [ ] Social links added (LinkedIn minimum)
- [ ] Resume uploaded and enabled
- [ ] Colors customized (optional)
- [ ] Tested locally - looks good
- [ ] Validated with `npm run check:ownership`
- [ ] Deployed to Vercel
- [ ] Custom domain added (optional)
- [ ] Shared with 2-3 people for feedback
- [ ] Added to LinkedIn profile
- [ ] Added to resume

---

## 🚀 Next Steps After Setup

1. **Share it!**
   - Add to LinkedIn
   - Include in resume
   - Email signature
   - Share with recruiters

2. **Maintain it:**
   - Update quarterly
   - Add new projects (sync template)
   - Keep content current
   - Track analytics (if enabled)

3. **Improve it:**
   - Get feedback from peers
   - A/B test different taglines
   - Add new sections (when template supports)
   - Refine based on recruiter questions

---

## 📊 Team Progress

Track team adoption:

| Teammate | Status | Live URL |
|----------|--------|----------|
| Rostislav | ✅ Complete | rostislav.dev |
| Robin | 🔄 In Progress | - |
| Rohit | ⏳ Not Started | - |
| Juney | ⏳ Not Started | - |
| Dhanya | ⏳ Not Started | - |
| Bobby | ⏳ Not Started | - |

---

## 🎉 Congratulations!

Once setup, you'll have a professional portfolio showcasing your QA achievements!

**Remember:** This is YOUR portfolio. Make it reflect you - your voice, your story, your achievements.

Good luck! 🚀

---

**Template Version:** Phase 3 Complete  
**Last Updated:** 2025-11-05  
**Maintained By:** Rostislav Alpin

