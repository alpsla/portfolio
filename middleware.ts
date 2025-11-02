/**
 * Middleware: Authentication Guard
 * Author: AR
 * Created: 2025-11-02
 * Description: Protects internal routes - requires authentication for all pages except auth
 */

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// This middleware protects all routes except those listed in matcher config
export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/auth/signin',
    },
  }
);

// Protect all routes except:
// - /auth/* (signin, error pages)
// - /api/auth/* (NextAuth API routes)
// - /_next/* (Next.js internals)
// - /favicon.ico, etc. (static assets)
export const config = {
  matcher: [
    '/((?!auth|api/auth|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};

