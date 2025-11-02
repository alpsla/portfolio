/**
 * Page: Contact
 * Author: AR
 * Created: 2025-10-09
 * Modified: 2025-11-01 by AR - Force dynamic rendering for auth middleware
 * Description: Contact details for the team.
 */

import { SafetyBanner } from '../../components/shared/SafetyBanner';
import { TEAM_MEMBERS } from '../../lib/constants/team';

// Force dynamic rendering so middleware can protect this page
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-8">
      <SafetyBanner />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
            Have questions about our QA innovations? Want to collaborate or learn more about our projects?
            We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📧</span>
              <span>Team Contact Directory</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Reach out to any of our team members directly for inquiries, collaboration opportunities,
              or to learn more about specific projects.
            </p>

            {/* Team Members List */}
            <div className="grid md:grid-cols-2 gap-4">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 flex items-center justify-center text-white font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {member.role}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group/email"
                      >
                        <span className="group-hover/email:underline truncate">{member.email}</span>
                        <svg
                          className="w-4 h-4 flex-shrink-0 group-hover/email:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">General Inquiries</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For general questions, reach out to our Manager
              </p>
              <a
                href="mailto:rostislav.alpin@paramount.com"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2 inline-block"
              >
                Contact Manager
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


