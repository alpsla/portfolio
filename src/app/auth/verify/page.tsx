/**
 * Page: Verify Magic Link (Human Confirm)
 * Author: AR
 * Created: 2025-11-03
 * Description: Interstitial page to prevent email scanners from consuming magic links.
 */

'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';

function VerifyContent() {
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);
  const nextUrl = useMemo(() => searchParams.get('next') || '/', [searchParams]);

  const handleContinue = () => {
    if (!nextUrl) return;
    setPending(true);
    // Ensure human flag present to bypass middleware redirect loop
    try {
      const u = new URL(nextUrl);
      u.searchParams.set('h', '1');
      window.location.href = u.toString();
    } catch {
      window.location.href = nextUrl;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full text-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 8v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Confirm Sign-in</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          To finish signing in, please confirm this action. This extra step prevents automated link scanners from using your one-time sign-in link.
        </p>

        <button
          onClick={handleContinue}
          disabled={pending || !nextUrl}
          className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
        >
          {pending ? 'Continuing…' : 'Continue to Sign In'}
        </button>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 break-all">
          If you prefer, you can copy this URL and paste it into your browser:
          <br />
          {nextUrl}
        </p>
      </div>
    </main>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">Loading…</div>}>
      <VerifyContent />
    </Suspense>
  );
}


