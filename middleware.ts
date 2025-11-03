/**
 * Middleware: Protect NextAuth email callback from HEAD link scanners
 * Author: AR
 * Created: 2025-11-03
 * Description: Some corporate email/security scanners issue HEAD requests to links.
 * For magic links, this can consume the token prematurely. We ignore HEAD requests
 * to /api/auth/callback/* so only real user GET clicks will verify tokens.
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { method, nextUrl } = request;

  // Ignore HEAD requests to the NextAuth email callback endpoint
  if (method === 'HEAD' && nextUrl.pathname.startsWith('/api/auth/callback/')) {
    return new NextResponse(null, { status: 204 });
  }

  // Force human confirmation: redirect raw GET clicks on callback to /auth/verify
  if (method === 'GET' && nextUrl.pathname.startsWith('/api/auth/callback/email')) {
    const hasHumanFlag = nextUrl.searchParams.get('h') === '1';
    if (!hasHumanFlag) {
      const original = nextUrl.toString();
      const callbackUrl = new URL(original);
      callbackUrl.searchParams.set('h', '1');
      const verifyUrl = new URL('/auth/verify', nextUrl.origin);
      verifyUrl.searchParams.set('next', callbackUrl.toString());
      return NextResponse.redirect(verifyUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/auth/callback/:path*'],
};


