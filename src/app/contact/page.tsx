// @ts-nocheck
/**
 * Page: Contact
 * Author: AR
 * Created: 2025-10-09
 * Description: Contact details for the team.
 */

import { SafetyBanner } from '../../components/shared/SafetyBanner';

export default function ContactPage() {
  return (
    <main className="container mx-auto p-6">
      <SafetyBanner />
      <h1 className="text-2xl font-bold mt-4">Contact Us</h1>
      <p className="mt-3">For collaboration or inquiries, contact the team lead.</p>
      <ul className="mt-2 list-disc pl-6">
        <li>Team Lead: Rostialpin</li>
        <li>Assistant: rob1nalex</li>
      </ul>
    </main>
  );
}


