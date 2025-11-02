/**
 * API Route: NextAuth Configuration
 * Author: AR
 * Created: 2025-11-02
 * Modified: 2025-11-02
 * Description: Passwordless magic link authentication with @paramount.com whitelist
 */

import NextAuth, { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../../../../lib/prisma';
import nodemailer from 'nodemailer';

// Whitelist of allowed company email domains
const ALLOWED_DOMAINS = process.env.ALLOWED_EMAIL_DOMAINS?.split(',') || ['paramount.com'];

// Individual email whitelist (optional - for contractors, etc.)
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
      // Customize the email sent
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
    maxAge: 30 * 24 * 60 * 60, // 30 days
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

      // Check if email domain is allowed (exact match)
      const emailDomain = email.split('@')[1];
      const isDomainAllowed = ALLOWED_DOMAINS.some(domain => emailDomain === domain);
      
      // Check if specific email is whitelisted
      const isEmailWhitelisted = ALLOWED_EMAILS.includes(email);

      if (isDomainAllowed || isEmailWhitelisted) {
        return true;
      }

      // Reject if not authorized
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

// Email HTML body
function html({ url, host, email }: { url: string; host: string; email: string }) {
  const escapedHost = host.replace(/\./g, '&#8203;.');
  const brandColor = '#3b82f6';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; padding: 40px 20px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <tr>
      <td style="background: linear-gradient(135deg, ${brandColor} 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
        <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold;">QA Team Portfolio</h1>
        <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Internal Access</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 24px;">Sign in to your account</h2>
        <p style="margin: 0 0 30px; color: #6b7280; font-size: 16px; line-height: 1.6;">
          Hello <strong>${email}</strong>,<br><br>
          Click the button below to securely sign in to the QA Team Portfolio. This link will expire in 24 hours.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding: 20px 0;">
              <a href="${url}" target="_blank" style="background: linear-gradient(135deg, ${brandColor} 0%, #8b5cf6 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 16px; font-weight: 600; display: inline-block; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                Sign In to ${escapedHost}
              </a>
            </td>
          </tr>
        </table>
        <p style="margin: 30px 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
          Or copy and paste this URL into your browser:<br>
          <a href="${url}" style="color: ${brandColor}; word-break: break-all;">${url}</a>
        </p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.6;">
          If you didn't request this email, you can safely ignore it. Only @paramount.com emails are authorized for access.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          © ${new Date().getFullYear()} QA Team Portfolio | Internal Use Only
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// Email Text body (fallback for email clients that don't support HTML)
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to QA Team Portfolio (${host})\n\n${url}\n\n`;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
