/**
 * Component: SessionProvider
 * Author: AR
 * Created: 2025-11-02
 * Description: NextAuth session provider wrapper for client components
 */

'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}

