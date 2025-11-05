/**
 * Component: Header
 * Author: AR
 * Created: 2025-10-31
 * Modified: 2025-11-05 by AR - Phase 2: Add personal portfolio support
 * Description: Global navigation header with logo and links.
 *              Adapts branding based on team vs personal site mode.
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOutUser } from '../../lib/auth-utils';
import { getSiteConfig, getEffectiveConfig } from '../../lib/utils/config';

export function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const siteConfig = getSiteConfig();
  const effectiveConfig = getEffectiveConfig();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  // Don't show logout button on auth pages
  const isAuthPage = pathname?.startsWith('/auth');
  
  // Determine branding based on site type
  const title = siteConfig.isPersonal 
    ? effectiveConfig.displayName || 'Portfolio'
    : 'QA Innovation Hub';
    
  const subtitle = siteConfig.isPersonal
    ? effectiveConfig.member?.role || 'QA Engineer'
    : 'Team Portfolio & Achievements';
  
  const logoLetter = siteConfig.isPersonal
    ? (effectiveConfig.displayName?.[0] || 'P')
    : 'Q';

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand - Adapts to personal vs team */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-xl">{logoLetter}</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {title}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {subtitle}
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="hidden sm:inline">Home</span>
              <span className="sm:hidden">🏠</span>
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="hidden sm:inline">About</span>
              <span className="sm:hidden">ℹ️</span>
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="hidden sm:inline">Contact</span>
              <span className="sm:hidden">📧</span>
            </Link>

            {/* Logout Button - Hide on auth pages */}
            {!isAuthPage && session && (
              <button
                onClick={() => signOutUser()}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border-2 border-red-200 dark:border-red-800"
                title="Sign Out"
              >
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">🚪</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
