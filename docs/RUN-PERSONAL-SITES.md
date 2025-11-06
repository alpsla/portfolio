# 🏃 Quick Reference - Running Personal Sites

**For:** Developers testing different teammate portfolios  
**Time:** 30 seconds per switch

---

## 🎯 Quick Commands

### Run Your Own Portfolio

```bash
# 1. Make sure .env.local is configured
cat .env.local

# Should show:
# NEXT_PUBLIC_MODE=external
# NEXT_PUBLIC_OWNER=yourname
# NEXT_PUBLIC_SITE_TYPE=personal

# 2. Start dev server
npm run dev

# 3. Visit
open http://localhost:3000
```

---

## 👥 Test Other Teammates' Portfolios

### Method 1: Update .env.local (Persistent)

```bash
# Edit .env.local
nano .env.local

# Change owner:
NEXT_PUBLIC_MODE=external
NEXT_PUBLIC_OWNER=rob1nalex    # ← Change this
NEXT_PUBLIC_SITE_TYPE=personal

# Restart server
npm run dev
```

### Method 2: Environment Variable (Temporary)

```bash
# Run with different owner (doesn't change .env.local)
NEXT_PUBLIC_OWNER=rob1nalex npm run dev

# Or for multiple variables:
NEXT_PUBLIC_MODE=external \
NEXT_PUBLIC_OWNER=rohitmenonv \
NEXT_PUBLIC_SITE_TYPE=personal \
npm run dev
```

---

## 🔄 Quick Switch Between Teammates

Create shell aliases for fast switching:

```bash
# Add to ~/.zshrc or ~/.bashrc
alias portfolio-alpin="NEXT_PUBLIC_OWNER=rostialpin npm run dev"
alias portfolio-robin="NEXT_PUBLIC_OWNER=rob1nalex npm run dev"
alias portfolio-rohit="NEXT_PUBLIC_OWNER=rohitmenonv npm run dev"
alias portfolio-juney="NEXT_PUBLIC_OWNER=juneyjestin npm run dev"
alias portfolio-dhanya="NEXT_PUBLIC_OWNER=dhanyamathew npm run dev"
alias portfolio-bobby="NEXT_PUBLIC_OWNER=anilbvi npm run dev"
alias portfolio-team="NEXT_PUBLIC_MODE=internal npm run dev"
```

Then just run:

```bash
portfolio-robin    # View Robin's portfolio
portfolio-team     # View team site
```

---

## 📊 All Team Members

| Name | ID | Command |
|------|----|----|
| Rostislav Alpin | `rostialpin` | `NEXT_PUBLIC_OWNER=rostialpin npm run dev` |
| Robin Alex | `rob1nalex` | `NEXT_PUBLIC_OWNER=rob1nalex npm run dev` |
| Rohit Menon V | `rohitmenonv` | `NEXT_PUBLIC_OWNER=rohitmenonv npm run dev` |
| Juney Jestin | `juneyjestin` | `NEXT_PUBLIC_OWNER=juneyjestin npm run dev` |
| Dhanya Mathew | `dhanyamathew` | `NEXT_PUBLIC_OWNER=dhanyamathew npm run dev` |
| Bobby Antony | `anilbvi` | `NEXT_PUBLIC_OWNER=anilbvi npm run dev` |

---

## 🧪 Test All Configurations

### Team Site (Internal)

```bash
NEXT_PUBLIC_MODE=internal \
NEXT_PUBLIC_SITE_TYPE=team \
npm run dev
```

**Expected:**
- Shows "QA Innovation Hub" branding
- All 10 projects visible
- "Contact Our Team" CTA
- Internal links visible

### Team Site (External)

```bash
NEXT_PUBLIC_MODE=external \
NEXT_PUBLIC_SITE_TYPE=team \
npm run dev
```

**Expected:**
- Shows "QA Innovation Hub" branding
- Public projects only
- "Contact Our Team" CTA
- Internal links hidden

### Personal Site (Alpin)

```bash
NEXT_PUBLIC_MODE=external \
NEXT_PUBLIC_OWNER=rostialpin \
NEXT_PUBLIC_SITE_TYPE=personal \
npm run dev
```

**Expected:**
- Shows "Rostislav Alpin" branding
- Only Alpin's 10 projects (owned/contributed)
- "Get In Touch" CTA (personal)
- Personal bio from config

---

## ✅ Validation Commands

### Check Configuration

```bash
# Validate current configuration
npm run check:ownership
```

**Output shows:**
- Current mode and owner
- Number of projects visible
- Any configuration errors

### Check Projects for Specific Owner

```bash
# See what projects a teammate will see
NEXT_PUBLIC_OWNER=rob1nalex npm run check:ownership
```

### Verify Filtering Logic

```bash
# Check project counts
NEXT_PUBLIC_OWNER=rostialpin npm run check:ownership | grep "Total visible"
NEXT_PUBLIC_OWNER=rob1nalex npm run check:ownership | grep "Total visible"
```

---

## 🐛 Debug Issues

### "No projects showing!"

```bash
# 1. Check ownership validation
npm run check:ownership

# 2. Check .env.local
cat .env.local

# 3. Check if owner exists in team.ts
grep "id: 'yourname'" src/lib/constants/team.ts

# 4. Check if owner is in any project
grep "rostialpin" src/lib/constants/projects.ts
```

### "Wrong site type showing!"

```bash
# Clear Next.js cache
rm -rf .next

# Restart server
npm run dev
```

### "Changes not reflecting!"

```bash
# 1. Hard refresh browser
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R

# 2. Check environment variables actually changed
echo $NEXT_PUBLIC_OWNER

# 3. Restart dev server
killall node
npm run dev
```

---

## 📝 .env.local Examples

### Personal Portfolio Template

```bash
# Copy this and customize:
NEXT_PUBLIC_MODE=external
NEXT_PUBLIC_OWNER=yourname
NEXT_PUBLIC_SITE_TYPE=personal
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Optional:
# NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

### Team Site Template

```bash
NEXT_PUBLIC_MODE=internal
NEXT_PUBLIC_SITE_TYPE=team
NEXT_PUBLIC_BASE_URL=https://qa-team.internal.company.com

# Authentication (team site only):
NEXTAUTH_URL=https://qa-team.internal.company.com
NEXTAUTH_SECRET=your-secret-here
DATABASE_URL=postgresql://...
ALLOWED_EMAIL_DOMAINS=paramount.com
```

---

## 🚀 Production Testing

### Test Build Before Deploy

```bash
# Build personal site
NEXT_PUBLIC_MODE=external \
NEXT_PUBLIC_OWNER=rostialpin \
npm run build

# Start production server
npm start
```

### Test All Teammates' Builds

```bash
# Create test script
cat > test-all-builds.sh << 'EOF'
#!/bin/bash
owners=("rostialpin" "rob1nalex" "rohitmenonv" "juneyjestin" "dhanyamathew" "anilbvi")

for owner in "${owners[@]}"; do
  echo "Testing build for: $owner"
  NEXT_PUBLIC_MODE=external \
  NEXT_PUBLIC_OWNER=$owner \
  NEXT_PUBLIC_SITE_TYPE=personal \
  npm run build
  
  if [ $? -eq 0 ]; then
    echo "✅ $owner build successful"
  else
    echo "❌ $owner build failed"
  fi
done
EOF

chmod +x test-all-builds.sh
./test-all-builds.sh
```

---

## 📊 Project Count Reference

Quick reference of expected project counts per teammate:

```bash
# Rostislav (Owner of Data Observability)
NEXT_PUBLIC_OWNER=rostialpin npm run check:ownership
# Expected: 10 projects (owner + contributor)

# Robin (Major contributor)
NEXT_PUBLIC_OWNER=rob1nalex npm run check:ownership
# Expected: 8-9 projects

# Check for yourself:
npm run check:ownership | grep "Total visible"
```

---

## 🔧 Development Workflow

### Working on Personal Features

```bash
# 1. Switch to your profile
NEXT_PUBLIC_OWNER=rostialpin npm run dev

# 2. Make changes to personal-config.ts
nano config/personal-config.ts

# 3. Test changes (auto-refresh)
# Visit http://localhost:3000

# 4. Test validation
npm run check:ownership

# 5. Commit when happy
git add config/personal-config.ts
git commit -m "Update personal bio"
```

### Testing Cross-User Features

```bash
# Terminal 1: Run as Alpin
NEXT_PUBLIC_OWNER=rostialpin npm run dev

# Terminal 2: Run as Robin (different port)
NEXT_PUBLIC_OWNER=rob1nalex PORT=3001 npm run dev

# Compare:
# http://localhost:3000  (Alpin)
# http://localhost:3001  (Robin)
```

---

## 💡 Pro Tips

### Tip 1: Use .env.local for Your Default

If you're mainly working on your own portfolio:

```bash
# Set your owner in .env.local
echo "NEXT_PUBLIC_OWNER=yourname" >> .env.local

# Then just run:
npm run dev
```

### Tip 2: Create Test Scripts

```bash
# package.json
{
  "scripts": {
    "dev:alpin": "NEXT_PUBLIC_OWNER=rostialpin npm run dev",
    "dev:robin": "NEXT_PUBLIC_OWNER=rob1nalex npm run dev",
    "dev:team": "NEXT_PUBLIC_MODE=internal npm run dev"
  }
}

# Then run:
npm run dev:robin
```

### Tip 3: Use tmux/screen for Multiple Sites

```bash
# Terminal multiplexer to test multiple portfolios simultaneously
tmux new-session -d -s alpin 'NEXT_PUBLIC_OWNER=rostialpin npm run dev'
tmux new-session -d -s robin 'NEXT_PUBLIC_OWNER=rob1nalex PORT=3001 npm run dev'
tmux new-session -d -s rohit 'NEXT_PUBLIC_OWNER=rohitmenonv PORT=3002 npm run dev'

tmux attach -t alpin   # Switch between them
```

---

## 📚 Related Documentation

- **Setup Guide:** `docs/TEAMMATE-SETUP-GUIDE.md` (for end users)
- **Architecture:** `docs/design/OPTION-1-ARCHITECTURE.md` (how it works)
- **Migration Plan:** `docs/design/MIGRATION-PLAN.md` (implementation roadmap)
- **Scripts:** `env.template` (all environment variables explained)

---

**Last Updated:** 2025-11-05  
**For:** Phase 3+ development

