/**
 * API Route: NextAuth Configuration
 * Author: AR
 * Created: 2025-11-02
 * Modified: 2025-11-02
 * Description: Simple access code authentication with @paramount.com whitelist
 */

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Whitelist of allowed company email domains
const ALLOWED_DOMAINS = process.env.ALLOWED_EMAIL_DOMAINS?.split(',') || ['paramount.com'];

// Individual email whitelist (optional - for contractors, etc.)
const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS?.split(',') || [];

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'email-access-code',
      name: 'Company Email',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'your.name@paramount.com' },
        accessCode: { label: 'Access Code', type: 'password', placeholder: 'Enter team access code' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.accessCode) {
          return null;
        }

        const email = credentials.email.toLowerCase().trim();
        
        // Check access code (simple human-readable password)
        const validAccessCode = process.env.ACCESS_CODE || 'QAInnovation2024';
        if (credentials.accessCode !== validAccessCode) {
          console.log('Invalid access code attempt for:', email);
          return null;
        }

        // Check if email domain is allowed (exact match)
        const emailDomain = email.split('@')[1];
        const isDomainAllowed = ALLOWED_DOMAINS.some(domain => emailDomain === domain);
        
        // Check if specific email is whitelisted
        const isEmailWhitelisted = ALLOWED_EMAILS.includes(email);

        if (isDomainAllowed || isEmailWhitelisted) {
          return {
            id: email,
            email: email,
            name: email.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          };
        }

        console.log('Unauthorized email domain attempt:', email);
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
