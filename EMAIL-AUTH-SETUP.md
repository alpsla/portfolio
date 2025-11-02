# Email Authentication Setup Guide

## 🔐 Passwordless Authentication with @paramount.com Whitelisting

This application uses **NextAuth.js** with **email-based magic links** for secure, passwordless authentication. Only users with `@paramount.com` email addresses can access the portfolio.

---

## ⚙️ Environment Variables Required

Create a `.env.local` file in the project root with the following:

```bash
# Application Mode
NEXT_PUBLIC_MODE=internal

# NextAuth Secret (REQUIRED)
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your-generated-secret-here

# NextAuth URL
NEXTAUTH_URL=http://localhost:3000  # Change to your deployed URL in production

# Email Provider Configuration
# Option 1: Gmail (Easiest for testing)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-gmail@gmail.com
EMAIL_SERVER_PASSWORD=your-app-specific-password

# Option 2: SendGrid
# EMAIL_SERVER_HOST=smtp.sendgrid.net
# EMAIL_SERVER_PORT=587
# EMAIL_SERVER_USER=apikey
# EMAIL_SERVER_PASSWORD=your-sendgrid-api-key

# Option 3: AWS SES
# EMAIL_SERVER_HOST=email-smtp.us-east-1.amazonaws.com
# EMAIL_SERVER_PORT=587
# EMAIL_SERVER_USER=your-aws-smtp-username
# EMAIL_SERVER_PASSWORD=your-aws-smtp-password

# From Email Address
EMAIL_FROM=noreply@qa-portfolio.com

# Allowed Email Domains (comma-separated)
# Server-side validation
ALLOWED_EMAIL_DOMAINS=paramount.com

# Client-side validation (must match ALLOWED_EMAIL_DOMAINS)
# NEXT_PUBLIC_ prefix makes it available to client-side code
NEXT_PUBLIC_ALLOWED_EMAIL_DOMAINS=paramount.com

# Optional: Whitelist specific emails for contractors/vendors
# ALLOWED_EMAILS=contractor@otherdomain.com,vendor@example.com
```

---

## 📧 Email Provider Setup Options

### Option 1: Gmail (Quick Setup for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
3. **Add to `.env.local`**:
   ```bash
   EMAIL_SERVER_USER=your-email@gmail.com
   EMAIL_SERVER_PASSWORD=your-16-char-app-password
   ```

**Pros:** Free, instant setup  
**Cons:** Gmail has sending limits (500 emails/day), not recommended for production

---

### Option 2: SendGrid (Recommended for Production)

1. **Sign up** at https://sendgrid.com/ (Free tier: 100 emails/day forever)
2. **Create API Key**:
   - Go to Settings → API Keys → Create API Key
   - Full Access permission
   - Copy the API key
3. **Verify Domain** (optional but recommended):
   - Settings → Sender Authentication → Verify Single Sender
4. **Add to `.env.local`**:
   ```bash
   EMAIL_SERVER_HOST=smtp.sendgrid.net
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=apikey
   EMAIL_SERVER_PASSWORD=SG.your-actual-api-key-here
   EMAIL_FROM=verified-email@yourdomain.com
   ```

**Pros:** Professional, reliable, 100 emails/day free  
**Cons:** Requires signup and domain verification

---

### Option 3: Vercel Email Service (Coming Soon)

Vercel is building an integrated email service. When available, it will be the easiest option for Vercel deployments.

---

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "feat: add passwordless email authentication"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. **Configure Environment Variables** in Vercel:
   - Click "Environment Variables"
   - Add each variable from your `.env.local`:
     - `NEXT PUBLIC_MODE` = `internal`
     - `NEXTAUTH_SECRET` = (generate new: `openssl rand -base64 32`)
     - `NEXTAUTH_URL` = `https://your-app.vercel.app`
     - `EMAIL_SERVER_HOST` = `smtp.sendgrid.net`
     - `EMAIL_SERVER_PORT` = `587`
     - `EMAIL_SERVER_USER` = `apikey`
     - `EMAIL_SERVER_PASSWORD` = `your-sendgrid-api-key`
     - `EMAIL_FROM` = `noreply@yourdomain.com`
     - `ALLOWED_EMAIL_DOMAINS` = `paramount.com`
     - `NEXT_PUBLIC_ALLOWED_EMAIL_DOMAINS` = `paramount.com`
6. Click "Deploy"

### Step 3: Test Authentication

1. Visit your deployed URL
2. Enter a `@paramount.com` email address
3. Check your email for the magic link
4. Click the link to sign in
5. You're authenticated! ✅

---

## 🔒 Security Features

✅ **Passwordless** - No passwords to steal or forget  
✅ **Domain Whitelisting** - Only `@paramount.com` emails allowed (exact match)  
✅ **Magic Links** - Secure, time-limited authentication tokens  
✅ **Email Verification** - Users must have access to their email account  
✅ **JWT Sessions** - Secure, stateless session management  
✅ **Automatic Expiry** - Links expire after 24 hours  
✅ **Dual Validation** - Both client-side (UX) and server-side (security) validation with exact domain matching

### Domain Validation Security

Both client and server perform **exact domain matching** to prevent spoofing:

❌ **Blocked:** `fakeparamount.com`, `paramount.com.evil.com`, `myparamount.com`  
✅ **Allowed:** `user@paramount.com` only

**Why both client and server validation?**
- **Client-side:** Immediate feedback to users (better UX)
- **Server-side:** True security barrier (cannot be bypassed)
- **Exact match:** Prevents subdomain and look-alike domain attacks  

---

## 🧪 Testing Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create `.env.local`** with your email provider credentials

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Visit** http://localhost:3000
5. **Enter a `@paramount.com` email** (must be a real email you can access)
6. **Check your email** for the sign-in link
7. **Click the link** to authenticate

---

## 🛠 Troubleshooting

### "Unable to send email" Error

- **Check email credentials** in `.env.local`
- **Gmail**: Ensure app password is correct (not your regular password)
- **SendGrid**: Verify API key has send permissions
- **Check spam folder** - email might be filtered

### "Access Denied" Error

- Email domain must be `@paramount.com`
- Check `ALLOWED_EMAIL_DOMAINS` in `.env.local`
- Add specific emails to `ALLOWED_EMAILS` if needed

### Links Not Working

- Ensure `NEXTAUTH_URL` matches your deployment URL
- Check if link expired (24-hour limit)
- Try requesting a new link

---

## 📝 Adding Additional Email Domains

To allow contractors or partners:

```bash
# Option 1: Add to allowed domains
ALLOWED_EMAIL_DOMAINS=paramount.com,partner-company.com

# Option 2: Whitelist specific emails
ALLOWED_EMAILS=john.doe@contractor.com,jane@vendor.com
```

---

## 🎯 Production Recommendations

1. ✅ Use **SendGrid** or **AWS SES** (not Gmail)
2. ✅ Verify your **sending domain** to avoid spam filters
3. ✅ Set up **SPF, DKIM, and DMARC** records
4. ✅ Use environment variables in Vercel (never commit secrets)
5. ✅ Monitor email delivery rates
6. ✅ Set up custom domain for professional emails

---

## 📚 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Email Provider Setup](https://next-auth.js.org/providers/email)
- [SendGrid Setup Guide](https://docs.sendgrid.com/)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

**Need Help?** Contact the QA Manager at rostislav.alpin@paramount.com

