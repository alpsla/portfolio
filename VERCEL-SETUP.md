# Vercel Production Setup

## 🎯 Your Database Configuration

You have **Prisma Data Platform** set up. Here's how to configure Vercel:

### 📊 Your Database URLs:

**Option 1: Prisma Accelerate (Recommended)**
- ✅ Connection pooling
- ✅ Edge caching
- ✅ Better performance

```bash
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19zOFFWR0k0amVoR3hleXZBNUhuSDciLCJhcGlfa2V5IjoiMDFLOTJCTVZYWjdSQzZCUkVZQTBOSkpTUlMiLCJ0ZW5hbnRfaWQiOiIwODQ5MDIxZWNkMDJkOTNlNTM2MjZmMzE2MTU3NzQ3NGI1OWYwZjY0OWFhNTIwNDczNzE4NDVhMWE4Y2FjYTcxIiwiaW50ZXJuYWxfc2VjcmV0IjoiMWQzYTRmNmQtZTY1YS00OThhLWFkYjQtMzEzZTc0ODIyMTk1In0.dFBLYy28GEDx04YzBfUUkRE6vXGBeKfo3uMkRD6L1NM"
```

**Option 2: Direct Connection**
- Standard PostgreSQL connection
- No additional features

```bash
DATABASE_URL="postgres://0849021ecd02d93e53626f3161577474b59f0f649aa52047371845a1a8caca71:sk_s8QVGI4jehGxeyvA5HnH7@db.prisma.io:5432/postgres?sslmode=require"
```

---

## 🚀 Quick Setup (CLI Method)

### Step 1: Install Vercel CLI (if not installed)
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Link Your Project
```bash
cd /Users/alpinro/Code\ Prjects/portfolio
vercel link
```

### Step 4: Add DATABASE_URL (Choose Option 1 or 2)

**For Prisma Accelerate (Recommended):**
```bash
vercel env add DATABASE_URL production
# When prompted, paste:
prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19zOFFWR0k0amVoR3hleXZBNUhuSDciLCJhcGlfa2V5IjoiMDFLOTJCTVZYWjdSQzZCUkVZQTBOSkpTUlMiLCJ0ZW5hbnRfaWQiOiIwODQ5MDIxZWNkMDJkOTNlNTM2MjZmMzE2MTU3NzQ3NGI1OWYwZjY0OWFhNTIwNDczNzE4NDVhMWE4Y2FjYTcxIiwiaW50ZXJuYWxfc2VjcmV0IjoiMWQzYTRmNmQtZTY1YS00OThhLWFkYjQtMzEzZTc0ODIyMTk1In0.dFBLYy28GEDx04YzBfUUkRE6vXGBeKfo3uMkRD6L1NM
```

**Or for Direct Connection:**
```bash
vercel env add DATABASE_URL production
# When prompted, paste:
postgres://0849021ecd02d93e53626f3161577474b59f0f649aa52047371845a1a8caca71:sk_s8QVGI4jehGxeyvA5HnH7@db.prisma.io:5432/postgres?sslmode=require
```

### Step 5: Add Other Required Variables

```bash
# NextAuth URL (replace with your actual domain)
vercel env add NEXTAUTH_URL production
# Enter: https://your-project.vercel.app

# NextAuth Secret (generate with: openssl rand -base64 32)
vercel env add NEXTAUTH_SECRET production
# Enter: (paste output from openssl rand -base64 32)

# Site Configuration
vercel env add NEXT_PUBLIC_MODE production
# Enter: internal

vercel env add NEXT_PUBLIC_SITE_TYPE production
# Enter: team
```

### Step 6: Add GitHub OAuth (for authentication)

```bash
vercel env add GITHUB_ID production
# Enter your GitHub OAuth App ID

vercel env add GITHUB_SECRET production
# Enter your GitHub OAuth App Secret
```

### Step 7: Deploy
```bash
vercel --prod
```

---

## 🖱️ Dashboard Method (Alternative)

If you prefer using the Vercel dashboard:

### 1. Go to Vercel Dashboard
https://vercel.com/dashboard

### 2. Select Your Project
- Find: `project-showcase-template` (or your project name)

### 3. Go to Settings → Environment Variables

### 4. Add Each Variable:

| Key | Value | Environment |
|-----|-------|-------------|
| `DATABASE_URL` | `prisma+postgres://accelerate.prisma-data.net/?api_key=...` | Production |
| `NEXTAUTH_URL` | `https://your-project.vercel.app` | Production |
| `NEXTAUTH_SECRET` | Generate with: `openssl rand -base64 32` | Production |
| `NEXT_PUBLIC_MODE` | `internal` | Production |
| `NEXT_PUBLIC_SITE_TYPE` | `team` | Production |
| `GITHUB_ID` | Your GitHub OAuth App ID | Production |
| `GITHUB_SECRET` | Your GitHub OAuth App Secret | Production |

### 5. Redeploy
- Go to **Deployments** tab
- Click **⋯** (three dots) on latest deployment
- Click **Redeploy**

---

## 🔐 GitHub OAuth Setup (if not done)

For team site authentication:

### 1. Create GitHub OAuth App
1. Go to: https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name:** `QA Team Portfolio`
   - **Homepage URL:** `https://your-project.vercel.app`
   - **Authorization callback URL:** `https://your-project.vercel.app/api/auth/callback/github`
4. Click **"Register application"**

### 2. Copy Credentials
- **Client ID** → Use for `GITHUB_ID`
- **Client Secret** → Click "Generate new client secret" → Use for `GITHUB_SECRET`

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Visit `https://your-project.vercel.app`
- [ ] Sign-in page shows
- [ ] Can sign in with GitHub
- [ ] All projects display
- [ ] No Prisma errors in logs
- [ ] Database connection working

---

## 🐛 Troubleshooting

### Error: "Prisma Client did not initialize"
**Solution:** DATABASE_URL is set correctly now. Redeploy.

### Error: "Can't reach database server"
**Solution:** Check DATABASE_URL is correct. Try Option 2 (direct connection) if Option 1 fails.

### Error: "Invalid client_id/client_secret"
**Solution:** Verify GITHUB_ID and GITHUB_SECRET in Vercel match your GitHub OAuth App.

### Build succeeds but shows errors at runtime
**Solution:** Check Vercel logs:
```bash
vercel logs --prod
```

---

## 📋 Quick Command Reference

```bash
# Check current environment variables
vercel env ls

# Pull production env vars to local
vercel env pull .env.production

# Remove a variable
vercel env rm DATABASE_URL production

# Deploy to production
vercel --prod

# Check logs
vercel logs --prod

# Open project in dashboard
vercel
```

---

## 🎯 Next Steps After Setup

1. ✅ Verify production site works
2. ✅ Test authentication
3. ✅ Confirm all projects display
4. Consider merging `feature/option1-template` to `main` if ready
5. Share production URL with team

---

**Need Help?**
- Vercel CLI: `vercel help`
- Prisma Docs: https://www.prisma.io/docs
- Vercel Docs: https://vercel.com/docs

