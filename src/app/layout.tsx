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
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

