/**
 * Component: AuthGuard
 * Author: AR
 * Created: 2025-11-02
 * Modified: 2025-11-05 by AR - Phase 2: Skip auth for external/personal mode
 * Description: Client-side authentication guard that redirects unauthenticated users
 *              Only enforces authentication for internal team sites
 */

'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isInternal } from '../../lib/utils/config';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Phase 2: Personal portfolios are PUBLIC - no auth required
  const requiresAuth = isInternal();
  
  // If external mode, skip authentication entirely
  if (!requiresAuth) {
    return <>{children}</>;
  }

  // Internal mode: Enforce authentication
  useEffect(() => {
    if (!requiresAuth) return;
    if (status === 'loading') return; // Still checking session
    
    if (status === 'unauthenticated') {
      // Not authenticated - redirect to sign in
      router.push('/auth/signin');
    }
  }, [status, router, requiresAuth]);

  // Show loading while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Not authenticated - show nothing (will redirect)
  if (status === 'unauthenticated') {
    return null;
  }

  // Authenticated - show the protected content
  return <>{children}</>;
}

