// @ts-nocheck
/**
 * Page: About
 * Author: AR
 * Created: 2025-10-09
 * Description: Team branding message.
 */

import { SafetyBanner } from '../../components/shared/SafetyBanner';

export default function AboutPage() {
  return (
    <main className="container mx-auto p-6">
      <SafetyBanner />
      <h1 className="text-2xl font-bold mt-4">About Our QA Team</h1>
      <p className="mt-3 max-w-3xl">
        We build unified, scalable QA solutions across Web, WCTV, Roku, Apple TV, iOS, and Android.
        Our mission: faster releases with higher confidence through automation, observability, and insight.
      </p>
    </main>
  );
}


