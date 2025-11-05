import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/shared/Header";
import { SessionProvider } from "../components/shared/SessionProvider";

export const metadata: Metadata = {
  title: "QA Team Portfolio - Unified QA Innovations",
  description: "Showcasing 5 years of QA automation achievements and tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Phase 2: Detect site configuration for styling and behavior
  const mode = process.env.NEXT_PUBLIC_MODE || 'external';
  const siteType = process.env.NEXT_PUBLIC_OWNER ? 'personal' : 'team';
  const owner = process.env.NEXT_PUBLIC_OWNER;
  
  // Development-only: Validate configuration
  if (process.env.NODE_ENV === 'development') {
    const { validateConfig } = require('../lib/utils/config');
    const errors = validateConfig();
    if (errors.length > 0) {
      console.warn('[Config Validation] Issues detected:');
      errors.forEach((error: string) => console.warn('  -', error));
    }
  }
  
  return (
    <html lang="en">
      <body 
        className="antialiased"
        data-site-mode={mode}
        data-site-type={siteType}
        data-owner={owner}
      >
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

