# Deployment Guide - QA Team Portfolio

## 🔒 Security First!

**CRITICAL:** Never commit API keys or secrets to git! 

### Environment Variables Setup

#### **For Local Development:**

Create a file named `.env.local` in the project root (it's already git-ignored):

```bash
# Copy these lines and replace with your actual values

# Application Mode
NEXT_PUBLIC_MODE=internal

# NextAuth Configuration
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=<GENERATE_THIS>
NEXTAUTH_URL=http://localhost:3000

# Email Provider - SendGrid
EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=apikey
EMAIL_SERVER_PASSWORD=<YOUR_SENDGRID_API_KEY>
EMAIL_FROM=<YOUR_EMAIL>@paramount.com

# Email Domain Whitelist
ALLOWED_EMAIL_DOMAINS=paramount.com
NEXT_PUBLIC_ALLOWED_EMAIL_DOMAINS=paramount.com
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

---

## 🚀 Deploy to Vercel

### Step 1: Import Project

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select **`rostialpin/project-showcase-template`**
5. Click **"Import"**

### Step 2: Configure Environment Variables

In Vercel's deployment settings, add these environment variables:

**Click "Environment Variables" and add each one:**

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_MODE` | `internal` |
| `NEXTAUTH_SECRET` | Generate new: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Will be: `https://your-app.vercel.app` |
| `EMAIL_SERVER_HOST` | `smtp.sendgrid.net` |
| `EMAIL_SERVER_PORT` | `587` |
| `EMAIL_SERVER_USER` | `apikey` |
| `EMAIL_SERVER_PASSWORD` | Your SendGrid API key |
| `EMAIL_FROM` | `your-email@paramount.com` |
| `ALLOWED_EMAIL_DOMAINS` | `paramount.com` |
| `NEXT_PUBLIC_ALLOWED_EMAIL_DOMAINS` | `paramount.com` |

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (~2 minutes)
3. Visit your deployed URL
4. Test authentication!

---

## 📧 SendGrid Setup (If Not Done)

1. **Sign up:** https://sendgrid.com/free/
2. **Create API Key:**
   - Settings → API Keys → Create API Key
   - Name: "QA Portfolio Auth"
   - Permission: Full Access
   - **Copy the key immediately!**
3. **Verify Sender:**
   - Settings → Sender Authentication
   - Verify your @paramount.com email

---

## 🧪 Testing After Deployment

1. Visit your Vercel URL (e.g., `https://qa-portfolio.vercel.app`)
2. You'll be redirected to sign-in page
3. Enter your `@paramount.com` email
4. Check your email for the magic link
5. Click the link to authenticate
6. You're in! 🎉

---

## 🔧 Troubleshooting

### "Unable to send email"
- Check SendGrid API key is correct in Vercel
- Verify EMAIL_FROM matches verified sender in SendGrid

### "Access Denied"
- Ensure email domain is `@paramount.com`
- Check `ALLOWED_EMAIL_DOMAINS` is set correctly

### Links not working
- Verify `NEXTAUTH_URL` matches your actual Vercel URL
- Make sure it starts with `https://`

---

## 📝 Notes

- **Never commit `.env.local`** - it's git-ignored for security
- **Regenerate secrets** if they're ever exposed
- **Use different secrets** for development vs production
- **Keep API keys secure** - rotate them periodically

---

For detailed setup instructions, see `EMAIL-AUTH-SETUP.md`

