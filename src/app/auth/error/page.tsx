/**
 * Page: Auth Error
 * Author: AR
 * Created: 2025-11-02
 * Description: Authentication error page
 */

'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { signOut } from 'next-auth/react';

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  // Clear session on Verification error to prevent session conflicts
  useEffect(() => {
    if (error === 'Verification') {
      // Clear any stale session data
      signOut({ redirect: false }).catch(console.error);
    }
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Authentication Error
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {error === 'AccessDenied' && 'Your email domain is not authorized to access this application.'}
          {error === 'Configuration' && 'There is a problem with the server configuration.'}
          {error === 'Verification' && 'The magic link verification failed. This can happen if the link expired or was already used. Please request a new magic link.'}
          {!error && 'An authentication error occurred.'}
        </p>

        <div className="space-y-4">
          <Link
            href="/auth/signin"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try Again
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  );
}

