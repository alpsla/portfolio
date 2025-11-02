# Team Member Photos

This directory contains profile photos for team members displayed on the About page.

## How to Add Your Photo

1. **Prepare your photo:**
   - Professional headshot or casual professional photo
   - Square aspect ratio preferred (400x400px minimum)
   - JPG or PNG format
   - Keep file size under 500KB

2. **Name your file:**
   - Use your team member ID (same as in `team.ts`)
   - Example: `rostialpin.jpg`, `krishnachaitanya.jpg`, `rob1nalex.jpg`

3. **Add to this directory:**
   - Place your photo file here: `public/assets/team/your-id.jpg`

4. **Update team.ts:**
   - Open `src/lib/constants/team.ts`
   - Find your entry
   - Add the avatar field:
   ```typescript
   avatar: '/assets/team/your-id.jpg'
   ```

## Example

If your ID is `rostialpin`:
- Photo location: `public/assets/team/rostialpin.jpg`
- In team.ts: `avatar: '/assets/team/rostialpin.jpg'`

## Current Team Member IDs
- rostialpin
- krishnachaitanya
- rob1nalex
- anilbvi
- JuneyJestin
- dhanyamathew
- rohitmenonv
