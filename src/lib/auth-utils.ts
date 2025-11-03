/**
 * Authentication utility functions
 * Author: AR
 * Created: 2025-11-03
 * Description: Helper functions for authentication flows
 */

import { signOut as nextAuthSignOut } from 'next-auth/react';

/**
 * Enhanced sign out that ensures proper session cleanup
 */
export async function signOutUser() {
  try {
    // Clear any local storage or session storage if needed
    if (typeof window !== 'undefined') {
      // Clear all auth-related storage
      sessionStorage.clear();
      
      // Clear specific cookies that might be lingering
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    }
    
    // Call NextAuth signOut with redirect
    await nextAuthSignOut({ 
      callbackUrl: '/auth/signin',
      redirect: true 
    });
  } catch (error) {
    console.error('Error during sign out:', error);
    // Force redirect even if signOut fails
    window.location.href = '/auth/signin';
  }
}

/**
 * Check if user is authenticated (client-side)
 */
export function isAuthenticated(session: any): boolean {
  return !!(session?.user?.email);
}
