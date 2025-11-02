/**
 * Page: About
 * Author: AR
 * Created: 2025-10-09
 * Modified: 2025-10-31 by AR
 * Description: Team branding message and team member showcase.
 */

import { SafetyBanner } from '../../components/shared/SafetyBanner';
import { TEAM_MEMBERS } from '../../lib/constants/team';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-8">
      <SafetyBanner />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Our QA Team
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
            We build unified, scalable QA solutions across Web, WCTV, Roku, Apple TV, iOS, and Android.
            Our mission: faster releases with higher confidence through automation, observability, and insight.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              <span>Our Mission</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To transform quality assurance through cutting-edge automation, intelligent testing frameworks,
              and observability platforms that ensure zero-defect releases across all platforms and brands.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              <span>Our Vision</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the industry leader in QA innovation, pioneering solutions that reduce testing time by 70%,
              eliminate production issues, and empower teams to deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-6 py-16 bg-white/50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            The talented engineers behind our QA innovations and automation frameworks
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 group flex flex-col"
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 text-center mb-2">
                  {member.role}
                  {member.yearsOfExperience && (
                    <span className="text-gray-500 dark:text-gray-400"> · {member.yearsOfExperience} years</span>
                  )}
                </p>

                {/* Background */}
                {member.background && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-4 italic">
                    {member.background}
                  </p>
                )}

                {/* Key Skills */}
                {member.keySkills && member.keySkills.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-center gap-1">
                      <span>💡</span>
                      <span>Key Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Professional Interests */}
                {member.professionalInterests && member.professionalInterests.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-center gap-1">
                      <span>🎯</span>
                      <span>Interests</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.professionalInterests.map((interest) => (
                        <span
                          key={interest}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hobbies (Optional) */}
                {member.hobbies && member.hobbies.length > 0 && (
                  <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      {member.hobbies.join(' · ')}
                    </div>
                  </div>
                )}

                {/* Fallback to old bio if new fields aren't filled */}
                {!member.background && member.bio && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed italic">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                {TEAM_MEMBERS.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                11
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-2">
                12+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


