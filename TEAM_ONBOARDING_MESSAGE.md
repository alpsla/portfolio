# 📢 Team Member Profile Setup

Hi Team! 👋

We've created a QA Innovation Hub portfolio to showcase our team's amazing work and achievements over the past years. The portfolio includes an **About** page where each team member has a profile section.

## 🎯 What You Need to Do

Please fill out your professional profile information so we can highlight your expertise and contributions to the team!

### ⏱️ Time Required
Approximately **10-15 minutes** to complete

---

## 📝 Step-by-Step Instructions

### 1. **Open the team constants file**
Navigate to: `src/lib/constants/team.ts`

Find your entry in the `TEAM_MEMBERS` array.

### 2. **Fill out your information**

Replace the `undefined` values with your actual information:

#### **Required Fields:**
- ✅ `yearsOfExperience` - Your total years in QA/Testing (e.g., `8`)
- ✅ `background` - Your professional journey in 2-3 sentences
- ✅ `keySkills` - Your top 3-5 most valuable skills (as an array)
- ✅ `professionalInterests` - Areas you're passionate about (as an array)

#### **Optional Fields:**
- 📌 `projectsParticipated` - Project IDs from our portfolio you've worked on
- 📌 `hobbies` - Personal interests outside work (makes you relatable!)

### 3. **Add your photo (optional but recommended)**
- Save your professional photo as `your-id.jpg` in the `public/assets/team/` folder
- Add `avatar: '/assets/team/your-id.jpg'` to your entry

---

## 📖 Detailed Documentation

For detailed instructions, examples, and guidelines, see:

**👉 [CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** - Section: "How to Add/Update Your Team Member Profile"

**👉 [TEAM_INFO_TEMPLATE.md](./TEAM_INFO_TEMPLATE.md)** - Full template with examples

---

## 💡 Quick Example

Here's what your entry should look like when filled out:

```typescript
{
  id: 'your-id',
  name: 'Your Name',
  email: 'your.email@paramount.com',
  role: 'Senior QA Engineer',

  yearsOfExperience: 6,

  background: "Started my QA journey in 2018, specializing in mobile automation. Passionate about building reliable test frameworks and improving release quality across all platforms.",

  projectsParticipated: ['device-farm', 'appium-framework', 'ci-cd-integration'],

  keySkills: [
    'Mobile Test Automation',
    'Appium/XCUITest',
    'CI/CD Integration',
    'Performance Testing',
    'Cross-platform Testing'
  ],

  professionalInterests: [
    'AI-assisted testing',
    'Test observability',
    'Performance engineering',
    'DevOps practices'
  ],

  hobbies: ['Photography', 'Cooking', 'Gaming'],

  avatar: '/assets/team/your-id.jpg',  // Optional - add when you have a photo
},
```

---

## 🎨 How Your Profile Will Look

Once you fill out your information, it will display on the **About** page with:

- 📸 Your profile photo (or gradient avatar with your initials)
- 👤 Name, role, and years of experience
- 📖 Your background story
- 💡 **Key Skills** - Displayed as blue skill badges
- 🎯 **Professional Interests** - Displayed as purple interest badges
- 🎮 Hobbies (optional) - Shown at the bottom

**Preview:** Check `localhost:3001/about` after filling out your info!

---

## ❓ Questions?

If you have any questions or need help:
- Check the detailed guides: `CONTENT-GUIDE.md` or `TEAM_INFO_TEMPLATE.md`
- Reach out to Rostislav
- Look at the example entry in the template for reference

---

## 📅 Timeline

**Please complete your profile by:** [Add your deadline here]

---

## ✨ Why This Matters

This portfolio showcases our team's incredible work and expertise. Your profile helps:
- Highlight your professional achievements and skills
- Show the diverse talent and experience on our team
- Create a professional team presence
- Share our innovations with stakeholders and the broader organization

Thank you for taking the time to fill this out! 🙏

**— Rostislav & The QA Team**
