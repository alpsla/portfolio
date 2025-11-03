# Authentication Issue - Magic Link Verification Failing

## 🎯 Goal
Implement passwordless magic link authentication for internal company portfolio site, restricting access to @paramount.com email addresses only.

---

## ✅ What's Working

1. **Sign-in page loads correctly** - https://ns-qa-unified-oao-team-portfolio.vercel.app/auth/signin
2. **Email domain validation works** - Rejects non-@paramount.com emails client-side
3. **Magic link emails are sent successfully** via SendGrid
4. **Email delivery works** - Beautiful branded emails arrive in inbox
5. **Database operations execute** - Prisma queries run successfully:
   - `INSERT INTO VerificationToken` when email is sent ✅
   - `SELECT User WHERE email` when verifying ✅
   - `DELETE FROM VerificationToken` when link is clicked ✅
   - `UPDATE User SET emailVerified` runs ✅
6. **Database schema exists** - All tables created (User, Account, Session, VerificationToken)
7. **Build succeeds** - Both locally (with warnings) and on Vercel
8. **AuthGuard component works** - Redirects unauthenticated users to sign-in page

---

## ❌ The Problem

**Magic link authentication fails with "Verification" error**

### Symptoms:
1. User requests magic link → Email sent ✅
2. User clicks magic link → Redirects to callback ✅
3. Database token is found and deleted ✅
4. **Then redirects to `/auth/error?error=Verification`** ❌
5. User never gets authenticated session
6. Every subsequent attempt with new magic links fails the same way

### Observed Behavior:
- **First login attempt**: Successfully authenticated, homepage loaded, session worked
- **After logout**: All subsequent magic link attempts fail with Verification error
- **Deployment-specific URLs** (e.g., `*-bg1z21jm7.vercel.app`) work intermittently
- **Main domain** (`ns-qa-unified-oao-team-portfolio.vercel.app`) consistently fails

---

## 🔍 Technical Details

### Stack:
- **Framework**: Next.js 14.2.5 (App Router)
- **Auth**: NextAuth.js v4.24.13
- **Database**: Vercel Postgres (Prisma adapter)
- **Email**: SendGrid SMTP
- **Adapter**: @auth/prisma-adapter v2.11.1
- **ORM**: Prisma v6.18.0

### Environment Variables (Verified Present):
```bash
NEXTAUTH_SECRET=vK7xQm2wN9pL4sR8tY5uE3oA6iF1jH0gD
NEXTAUTH_URL=https://ns-qa-unified-oao-team-portfolio.vercel.app
EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=apikey
EMAIL_SERVER_PASSWORD=SG.*** (valid SendGrid API key)
EMAIL_FROM=rostislav.alpin@paramount.com
ALLOWED_EMAIL_DOMAINS=paramount.com
NEXT_PUBLIC_ALLOWED_EMAIL_DOMAINS=paramount.com
DATABASE_URL=postgres://*** (Vercel Postgres)
NEXT_PUBLIC_MODE=internal
```

### Request Flow (from logs):
```
1. POST /api/auth/signin/email → 200 (email sent)
   - Prisma: SELECT User WHERE email
   - Prisma: INSERT INTO VerificationToken
   
2. GET /api/auth/callback/email?token=*** → 302 (redirect)
   - Prisma: SELECT 1 (db ping)
   - Prisma: DELETE FROM VerificationToken (token consumed)
   - Redirects to /api/auth/error
   
3. HEAD /api/auth/callback/email → 400 (ERROR!)
   - This is where it fails
   
4. GET /api/auth/error?error=Verification → 302
   - User sees error page
```

---

## 🔧 What We've Tried

### Authentication Approaches Attempted:
1. ✅ **Server-side middleware** - Didn't work (pages were statically generated)
2. ✅ **Client-side AuthGuard** - Works for page protection
3. ✅ **Credentials provider** with access code - Worked but not secure enough
4. ✅ **Email provider** with database adapter - Current approach (failing)

### Infrastructure Changes:
1. ✅ Created Vercel Postgres database
2. ✅ Installed Prisma and @auth/prisma-adapter
3. ✅ Created Prisma schema with NextAuth models
4. ✅ Database migration runs successfully (`prisma db push`)
5. ✅ All tables exist in database
6. ✅ Prisma Client generates correctly

### Deployment Attempts:
1. ✅ Deployed via Vercel UI (original attempt)
2. ✅ Deployed via Vercel CLI (to bypass auto-deploy issues)
3. ✅ Created deploy hooks
4. ✅ Manual redeployments with cache clearing
5. ✅ Alias command to point main domain to specific deployment

### Configuration Fixes:
1. ✅ Fixed NEXTAUTH_URL (removed trailing spaces, double https://)
2. ✅ Updated domain aliases
3. ✅ Verified all environment variables
4. ✅ Build scripts updated for Prisma generation
5. ✅ Added `vercel-build` script for database migration

---

## 📊 Log Evidence

### Successful Database Operations:
```json
{
  "message": "prisma:query INSERT INTO \"public\".\"VerificationToken\" (...)",
  "responseStatusCode": 200
}
{
  "message": "prisma:query DELETE FROM \"public\".\"VerificationToken\" WHERE (...)",  
  "responseStatusCode": 302
}
{
  "message": "prisma:query UPDATE \"public\".\"User\" SET \"emailVerified\" = $1 ..."
}
```

### The Failure Point:
```json
{
  "time": "Nov 02 19:24:00.72",
  "requestMethod": "HEAD",
  "responseStatusCode": 400,
  "requestPath": "/api/auth/callback/email",
  "level": "info" // No error-level logs found
}
```

Followed by:
```json
{
  "requestPath": "/api/auth/error",
  "requestQueryString": "error=Verification",
  "responseStatusCode": 302
}
```

---

## 🤔 Observations

### Domain-Specific Behavior:
- **Deployment URLs** (with random suffixes like `-bg1z21jm7`, `-k071qs5bo`) **sometimes work**
- **Main domain** (`ns-qa-unified-oao-team-portfolio.vercel.app`) **consistently fails**
- Even after aliasing main domain to working deployment, auth still fails
- User successfully logged in ONCE (first attempt), never again after logout

### Database State:
- Tables exist and are accessible
- Queries execute without errors
- VerificationToken INSERT and DELETE both succeed
- User UPDATE succeeds
- No database connection errors in logs

### Missing from Logs:
- **No error-level logs** for the authentication failure
- **No stack traces** explaining the HEAD 400
- **No NextAuth error messages** (like `[next-auth][error]` patterns we saw with email adapter error)
- Logs only show HTTP status codes, not internal errors

---

## 📁 Relevant Code Files

### `/src/app/api/auth/[...nextauth]/route.ts`
```typescript
import NextAuth, { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../../../../lib/prisma';
import nodemailer from 'nodemailer';

const ALLOWED_DOMAINS = process.env.ALLOWED_EMAIL_DOMAINS?.split(',') || ['paramount.com'];
const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS?.split(',') || [];

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || 'smtp.sendgrid.net',
        port: Number(process.env.EMAIL_SERVER_PORT) || 587,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM || 'noreply@qa-portfolio.com',
      sendVerificationRequest: async ({ identifier: email, url, provider }) => {
        const { host } = new URL(url);
        const transport = nodemailer.createTransport(provider.server);
        
        await transport.sendMail({
          to: email,
          from: provider.from,
          subject: `Sign in to QA Team Portfolio`,
          text: text({ url, host }),
          html: html({ url, host, email }),
        });
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user }) {
      const email = user.email?.toLowerCase();
      
      if (!email) {
        return false;
      }

      const emailDomain = email.split('@')[1];
      const isDomainAllowed = ALLOWED_DOMAINS.some(domain => emailDomain === domain);
      const isEmailWhitelisted = ALLOWED_EMAILS.includes(email);

      if (isDomainAllowed || isEmailWhitelisted) {
        return true;
      }

      console.log('Unauthorized email domain attempt:', email);
      return `/auth/error?error=AccessDenied`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name || user.email?.split('@')[0].replace('.', ' ');
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
```

### `/prisma/schema.prisma`
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  @@unique([identifier, token])
}
```

### `/package.json` Build Scripts:
```json
{
  "scripts": {
    "build": "next build",
    "postinstall": "prisma generate || true",
    "vercel-build": "prisma generate && prisma db push --accept-data-loss && next build"
  }
}
```

---

## 🚨 Critical Questions to Investigate

1. **Why does HEAD 400 occur after successful DELETE?**
   - Token is deleted from database (consumed)
   - User is found/updated
   - Then HEAD request returns 400
   - What is NextAuth checking in the HEAD request?

2. **Why does signIn callback succeed but session creation fails?**
   - Logs show no rejection from signIn callback
   - Database operations all succeed
   - But session is never created

3. **Why did it work once, then never again?**
   - First login after initial deployment worked
   - All subsequent attempts fail
   - Same code, same database, same env vars

4. **Why does deployment-specific URL sometimes work?**
   - `*-bg1z21jm7.vercel.app` worked
   - `*-k071qs5bo.vercel.app` should work (hasn't been tested thoroughly)
   - Main domain fails even when aliased to working deployment

5. **Is there a CSRF or session cookie issue?**
   - Could browser security settings interfere?
   - Are cookies being set correctly?
   - Domain/subdomain cookie issues?

---

## 🔍 Debugging Suggestions Needed

1. **How to get detailed error logs** from NextAuth on Vercel?
2. **What does HEAD 400 on callback endpoint mean** in NextAuth context?
3. **How to verify session cookie creation** after magic link callback?
4. **Could PrismaAdapter type casting** (`as any`) be causing issues?
5. **Is there a NextAuth debug mode** that can be enabled in production?

---

## 📝 Additional Context

### Git Repositories:
- **Origin**: `git@github.com:alpsla/portfolio.git`
- **Upstream**: `https://github.com/rostialpin/project-showcase-template.git`
- **Current branch**: `main`
- **Latest commit**: `8bf7cba` - "chore: trigger fresh production deployment"

### Vercel Project:
- **Project name**: `ns-qa-unified-oao-team-portfolio`
- **URL**: https://ns-qa-unified-oao-team-portfolio.vercel.app
- **Latest deployment**: `EDq7fkbcJ`
- **Database**: `prisma-postgres-amber-island` (Connected ✅)

### Build Output (from logs):
```
Detected Next.js version: 14.2.5
Running "npm run vercel-build"
> prisma generate && prisma db push --accept-data-loss && next build

Loaded Prisma config from prisma.config.ts.
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "public" at "db.prisma.io:5432"

The database is already in sync with the Prisma schema.

✔ Generated Prisma Client (v6.18.0) to ./node_modules/@prisma/client in 105ms

✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (8/8)
✓ Collecting build traces
✓ Finalizing page optimization
```

### Database Queries (from Runtime Logs):
```sql
-- When email is sent:
SELECT "public"."User"."id", "public"."User"."name", "public"."User"."email", 
       "public"."User"."emailVerified", "public"."User"."image" 
FROM "public"."User" 
WHERE ("public"."User"."email" = $1 AND 1=1) 
LIMIT $2 OFFSET $3

INSERT INTO "public"."VerificationToken" ("identifier","token","expires") 
VALUES ($1,$2,$3) 
RETURNING "public"."VerificationToken"."token", 
          "public"."VerificationToken"."identifier", 
          "public"."VerificationToken"."expires"

-- When link is clicked:
SELECT 1  -- Database connection check

DELETE FROM "public"."VerificationToken" 
WHERE (("public"."VerificationToken"."identifier" = $1 
        AND "public"."VerificationToken"."token" = $2) AND 1=1) 
RETURNING "public"."VerificationToken"."token", 
          "public"."VerificationToken"."identifier", 
          "public"."VerificationToken"."expires"

UPDATE "public"."User" 
SET "emailVerified" = $1 
WHERE ("public"."User"."id" = $2 AND 1=1) 
RETURNING "public"."User"."id", "public"."User"."name", 
          "public"."User"."email", "public"."User"."emailVerified", 
          "public"."User"."image"
```

**All queries return successfully!** No database errors.

---

## ⚠️ Error Sequence (Exact HTTP Logs):

```
Time: 00:11:31
1. GET  /api/auth/callback/email?callbackUrl=...&email=rostislav.alpin@paramount.com
   Status: 302 (redirect initiated)
   Duration: 20ms
   Message: prisma:query DELETE FROM "VerificationToken" ...

2. HEAD /api/auth/callback/email  
   Status: 400 ⚠️ ERROR
   Duration: -1ms
   Message: (none - no error logged)

3. GET  /api/auth/error?error=Verification
   Status: 302
   Duration: 7ms
```

**Key observation**: The HEAD request returns 400, but there's **NO error message** logged!

---

## 🔑 Critical Files

### NextAuth Route Handler:
`/src/app/api/auth/[...nextauth]/route.ts`

### Prisma Client:
`/src/lib/prisma.ts`
```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

### AuthGuard Component:
`/src/components/shared/AuthGuard.tsx` - Client-side session check and redirect

---

## 🎯 Specific Questions for Claude Opus

1. **What does `HEAD 400` on NextAuth callback mean?**
   - Why would NextAuth send a HEAD request after GET succeeds?
   - What validation happens in the HEAD request?
   - Why no error message is logged?

2. **Why does the flow show:**
   - Token DELETE succeeds
   - User UPDATE succeeds  
   - But then HEAD 400 occurs?

3. **Is there a known issue** with:
   - NextAuth v4 + Prisma v6?
   - NextAuth Email Provider + JWT sessions?
   - Session creation after email verification?

4. **How to enable NextAuth debug logging** in production on Vercel?

5. **Could the issue be:**
   - CSRF token validation?
   - Cookie domain mismatch?
   - Session cookie not being set?
   - Callback URL encoding problem?

---

## 💡 What Should Happen

**Expected Flow:**
1. User requests magic link → Email sent with token ✅
2. Token stored in database → VerificationToken table ✅
3. User clicks link → Callback validates token ✅
4. Token found in DB → Deleted (single-use) ✅
5. User found/created → emailVerified updated ✅
6. **Session created** → JWT with email/name ❌ (FAILING HERE)
7. **Redirect to callbackUrl** with session cookie ❌ (NEVER HAPPENS)
8. User authenticated → Can access protected pages ❌ (NEVER HAPPENS)

---

## 🆘 Help Needed

**How do we:**
1. Get detailed error messages from the failing HEAD 400 request?
2. Verify if session is being created in the database?
3. Check if session cookies are being set correctly?
4. Debug why it worked once but never again?
5. Fix the Verification error permanently?

---

## 📎 Attachments

- Full runtime logs available in: `/Users/alpinro/Downloads/logs_result (1).json`
- Repository: https://github.com/rostialpin/project-showcase-template
- Live (failing) site: https://ns-qa-unified-oao-team-portfolio.vercel.app
- Vercel project: https://vercel.com/rostislavs-projects-e0f1f42c/ns-qa-unified-oao-team-portfolio

---

**Current Status**: Stuck on Verification error. Need guidance on debugging NextAuth magic link + Prisma adapter authentication flow.

