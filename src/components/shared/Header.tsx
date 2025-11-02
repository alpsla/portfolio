/**
 * Component: Header
 * Author: AR
 * Created: 2025-10-31
 * Modified: 2025-10-31 by AR
 * Description: Global navigation header with logo and links.
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                QA Innovation Hub
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Team Portfolio & Achievements
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
          </div>
        </div>
      </nav>
    </header>
  );
}
