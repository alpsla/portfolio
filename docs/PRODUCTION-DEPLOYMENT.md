# Production Deployment Guide

## Prisma Database Error Fix

If you see the error: **"@prisma/client did not initialize yet. Please run 'prisma generate'"**

This happens because Prisma Client needs to be generated during the build process.

## Quick Fix

### Option 1: Set DATABASE_URL in Production

1. **Go to your deployment platform** (Vercel, Netlify, etc.)
2. **Add environment variable:**
   ```
   DATABASE_URL=postgresql://user:password@host:port/database
   ```
3. **Redeploy** your application

### Option 2: Use Dummy Database URL (if no database needed)

If you're running in **external mode** (personal portfolio) and don't need authentication:

1. **Add this environment variable:**
   ```
   DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
   ```
2. **Redeploy**

This allows Prisma to generate the client during build, even though the database won't be used at runtime.

---

## Vercel Deployment Steps

### 1. Initial Setup

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link project
cd /Users/alpinro/Code\ Prjects/portfolio
vercel link
```

### 2. Configure Environment Variables

**For Team Site (Internal Mode):**

```bash
vercel env add DATABASE_URL production
# Paste your PostgreSQL connection string

vercel env add NEXTAUTH_URL production
# Enter: https://your-domain.vercel.app

vercel env add NEXTAUTH_SECRET production
# Generate with: openssl rand -base64 32

vercel env add NEXT_PUBLIC_MODE production
# Enter: internal

vercel env add NEXT_PUBLIC_SITE_TYPE production
# Enter: team

vercel env add GITHUB_ID production
# Your GitHub OAuth App ID

vercel env add GITHUB_SECRET production
# Your GitHub OAuth App Secret
```

**For Personal Portfolio (External Mode):**

```bash
vercel env add DATABASE_URL production
# Use dummy: postgresql://dummy:dummy@localhost:5432/dummy

vercel env add NEXT_PUBLIC_MODE production
# Enter: external

vercel env add NEXT_PUBLIC_SITE_TYPE production
# Enter: personal

vercel env add NEXT_PUBLIC_OWNER production
# Enter: your_github_username (e.g., rostialpin)
```

### 3. Deploy

```bash
# Deploy to production
vercel --prod

# Or push to main/master branch (auto-deploy)
git push origin main
```

---

## GitHub Actions Deployment

If using GitHub Actions, add these secrets:

1. Go to **Repository → Settings → Secrets and variables → Actions**
2. Add secrets:
   - `DATABASE_URL`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
   - `NEXT_PUBLIC_MODE`
   - `NEXT_PUBLIC_SITE_TYPE`
   - `NEXT_PUBLIC_OWNER` (for personal portfolios)
   - `GITHUB_ID`
   - `GITHUB_SECRET`

---

## Database Setup (PostgreSQL)

### Option 1: Vercel Postgres

```bash
# Add Vercel Postgres to your project
vercel postgres create

# Link to project
vercel env pull .env.local

# Push schema to database
npx prisma db push
```

### Option 2: External PostgreSQL (Railway, Supabase, etc.)

1. **Create PostgreSQL database** on your provider
2. **Get connection string:**
   ```
   postgresql://user:password@host:port/database
   ```
3. **Add to Vercel:**
   ```bash
   vercel env add DATABASE_URL production
   # Paste connection string
   ```
4. **Push schema:**
   ```bash
   npx prisma db push
   ```

---

## Troubleshooting

### Error: "Prisma Client did not initialize"

**Cause:** DATABASE_URL not set during build  
**Solution:** Add DATABASE_URL to environment variables and redeploy

### Error: "Can't reach database server"

**Cause:** Database not accessible at runtime  
**Solution:** 
- For team site: Ensure database is running and accessible
- For personal portfolio: This is expected - authentication is skipped in external mode

### Build Succeeds but Shows Sign-in Page

**Cause:** AuthGuard requiring authentication in external mode  
**Solution:** Already fixed in `src/components/shared/AuthGuard.tsx` - ensure latest code is deployed

---

## Environment Variable Checklist

### Team Site (Internal Mode)
- ✅ `DATABASE_URL` - PostgreSQL connection string
- ✅ `NEXTAUTH_URL` - Your production URL
- ✅ `NEXTAUTH_SECRET` - Random secret (32+ chars)
- ✅ `NEXT_PUBLIC_MODE=internal`
- ✅ `NEXT_PUBLIC_SITE_TYPE=team`
- ✅ `GITHUB_ID` - OAuth App ID
- ✅ `GITHUB_SECRET` - OAuth App Secret

### Personal Portfolio (External Mode)
- ✅ `DATABASE_URL` - Can use dummy value
- ✅ `NEXT_PUBLIC_MODE=external`
- ✅ `NEXT_PUBLIC_SITE_TYPE=personal`
- ✅ `NEXT_PUBLIC_OWNER` - Your GitHub username
- ❌ No authentication secrets needed

---

## Quick Commands

```bash
# Check Vercel environment variables
vercel env ls

# Pull environment variables locally
vercel env pull .env.local

# Test build locally
npm run build

# Start production server locally
npm run start

# Deploy to production
vercel --prod
```

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs
- NextAuth Docs: https://next-auth.js.org/

