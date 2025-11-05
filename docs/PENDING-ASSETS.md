# Pending Assets & Features

**Last Updated:** 2025-11-05  
**Status:** Tracking

---

## 🖼️ Avatar Images (To Be Provided)

### Internal Version
- **Location:** To be determined
- **Use Cases:**
  - Team member profiles in About page
  - Header avatar (optional)
  - Contact page
  - Project cards (show contributor avatars)

- **Requirements:**
  - Format: PNG or WebP
  - Size: 200x200px minimum (square)
  - Background: Transparent or professional
  - Quality: High resolution

- **Team Members Needing Avatars:**
  - Rostislav Alpin (rostialpin)
  - Robin Alex (rob1nalex)
  - Rohit Menon V (rohitmenonv)
  - Juney Jestin (juneyjestin)
  - Dhanya Mathew (dhanyamathew)
  - Bobby Antony (anilbvi)

### External Version
- **Location:** `public/avatars/` or personal portfolio repos
- **Use Cases:**
  - Personal hero section (optional)
  - About page profile photo
  - Social media preview (og:image)

- **Requirements:**
  - Same as internal version
  - Can be different from internal avatar (more professional/public-facing)

---

## 📂 Suggested File Structure

```
public/
  avatars/
    internal/
      rostialpin.png
      rob1nalex.png
      rohitmenonv.png
      juneyjestin.png
      dhanyamathew.png
      anilbvi.png
    external/
      rostialpin.png    # Optional: Different photo for public portfolio
      rob1nalex.png
      ...
```

---

## 🎨 Avatar Integration Plan

### Phase 1: Add Avatar Field to Team Data
```typescript
// src/lib/constants/team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;           // NEW: Path to avatar image
  avatarExternal?: string;   // NEW: Public-facing avatar (optional)
  // ... existing fields
}
```

### Phase 2: Update Components
- **Header:** Add avatar next to name (personal mode)
- **About Page:** Show avatar in hero section
- **Team Page:** Show all team member avatars
- **Project Cards:** Show contributor avatars (small circles)

### Phase 3: Personal Config Support
```typescript
// config/personal-config.ts
export const personalConfig = {
  // ...
  branding: {
    avatar: '/avatars/my-photo.png',  // Override team.ts avatar
    // ...
  },
};
```

---

## 🚀 Implementation Steps (When Assets Available)

1. **Receive Images**
   - Collect from all team members
   - Ensure proper formatting and size
   - Optimize for web (compress, convert to WebP if needed)

2. **Add to Repository**
   ```bash
   mkdir -p public/avatars/internal
   mkdir -p public/avatars/external
   # Copy images to respective folders
   ```

3. **Update Team Data**
   ```typescript
   {
     id: 'rostialpin',
     name: 'Rostislav Alpin',
     avatar: '/avatars/internal/rostialpin.png',
     avatarExternal: '/avatars/external/rostialpin.png',
     // ...
   }
   ```

4. **Update Components**
   - Add avatar display to PersonalHero
   - Add to About page
   - Add to Header (optional)
   - Add to team member cards

5. **Test**
   - Verify images load in all modes
   - Check responsive sizing
   - Test dark mode appearance
   - Validate SEO meta tags use correct avatar

---

## 📝 Notes

- **Privacy:** Internal avatars should be company headshots or team photos
- **External:** External avatars can be more casual or professional LinkedIn-style
- **Fallback:** Use initials in colored circles if avatar not provided
- **Lazy Loading:** Implement lazy loading for performance
- **Alt Text:** Always include descriptive alt text for accessibility

---

## ⏰ Timeline

- **Week 1-2:** Collect avatars from team members
- **Week 3:** Implement avatar support in components
- **Week 4:** Testing and refinement

---

## 🔗 Related Files

- `src/lib/constants/team.ts` - Team member data
- `src/components/personal/PersonalHero.tsx` - Hero section
- `src/app/about/page.tsx` - About page
- `config/personal-config.ts` - Personal configuration

---

**Status:** Documented, awaiting assets from team members

