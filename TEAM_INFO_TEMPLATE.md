# Team Member Information Template

## Instructions for Team Members

Please fill out your information in `/src/lib/constants/team.ts` by replacing the `undefined` values with your actual information. Follow the examples provided below.

---

## What to Fill Out

### 1. **Years of Experience** (Required)
Total years in QA/Testing field
```typescript
yearsOfExperience: 8
```

### 2. **Background** (Required)
Brief 2-3 sentence professional journey - your story!
```typescript
background: "Started as a QA Engineer in 2015, progressed through automation and leadership roles. Passionate about building scalable testing solutions and mentoring teams to achieve excellence."
```

### 3. **Projects Participated** (Optional)
List project IDs from our portfolio that you've worked on
```typescript
projectsParticipated: ['data-observability', 'config-comparison', 'device-farm', 'playwright-framework']
```

**Available Project IDs:**
- `data-observability`
- `config-comparison`
- `test-execution-dashboard`
- `appium-framework`
- `device-farm`
- `playwright-framework`
- `unified-config`
- `migration-tools`
- `api-automation`
- `performance-testing`
- `ci-cd-integration`

### 4. **Key Skills** (Required)
Your top 3-5 most valuable/sellable skills
```typescript
keySkills: [
  'Test Automation Architecture',
  'Team Leadership',
  'CI/CD Pipeline Design',
  'Cross-platform Testing',
  'Mentoring & Training'
]
```

**Skill Ideas:**
- Technical: "Playwright Automation", "API Testing", "Performance Testing", "Mobile Testing (iOS/Android)", "Device Farm Management"
- Leadership: "Team Leadership", "Mentoring", "Project Planning"
- Tools: "CI/CD", "Docker", "AWS", "Jenkins", "GitHub Actions"
- Languages: "TypeScript", "Python", "Java", "JavaScript"

### 5. **Professional Interests** (Required)
Areas you're passionate about or want to grow in
```typescript
professionalInterests: [
  'AI-powered testing',
  'Performance optimization',
  'DevOps integration',
  'Test data management'
]
```

**Interest Ideas:**
- "AI/ML in testing", "Test observability", "Shift-left testing"
- "Cloud testing", "Microservices testing", "API security"
- "Performance engineering", "Chaos engineering"

### 6. **Hobbies** (Optional)
Personal interests outside work - makes you human!
```typescript
hobbies: ['Photography', 'Hiking', 'Chess', 'Reading sci-fi']
```

### 7. **Profile Picture** (Later)
When ready, add your photo:
1. Save your photo as `your-id.jpg` in `/public/assets/team/`
   - Example: `/public/assets/team/rostialpin.jpg`
2. Update your entry:
```typescript
avatar: '/assets/team/rostialpin.jpg'
```

**Photo Guidelines:**
- Professional headshot or casual professional photo
- Square aspect ratio preferred (400x400px minimum)
- JPG or PNG format
- Keep file size under 500KB

---

## Full Example

Here's a complete example of a filled-out profile:

```typescript
{
  id: 'rostialpin',
  name: 'Rostislav Alpin',
  email: 'rostislav.alpin@paramount.com',
  role: 'Manager',

  yearsOfExperience: 8,

  background: "Started as a QA Engineer in 2015, progressed through automation and leadership roles. Passionate about building scalable testing solutions and mentoring teams to achieve excellence.",

  projectsParticipated: [
    'data-observability',
    'config-comparison',
    'device-farm',
    'playwright-framework'
  ],

  keySkills: [
    'Test Automation Architecture',
    'Team Leadership',
    'CI/CD Pipeline Design',
    'Cross-platform Testing',
    'Mentoring & Training'
  ],

  professionalInterests: [
    'AI-powered testing',
    'Performance optimization',
    'DevOps integration',
    'Test data management'
  ],

  hobbies: ['Photography', 'Hiking', 'Chess', 'Reading sci-fi'],

  avatar: '/assets/team/rostialpin.jpg', // Add later when you have your photo
},
```

---

## How It Will Look

Once you fill out your information, it will display on the **About** page:

- **Name & Role** with years of experience
- **Background** story (italic text)
- **💡 Key Skills** - Blue skill badges
- **🎯 Interests** - Purple interest badges
- **Hobbies** - At the bottom in small text (optional, separated by dots)

---

## Questions?

If you have questions about what to write, reach out to Rostislav or check the template comments in the team.ts file.

**File Location:** `/src/lib/constants/team.ts`
