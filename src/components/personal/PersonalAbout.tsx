/**
 * Component: PersonalAbout
 * Author: AR
 * Created: 2025-11-05
 * Description: About section for personal portfolios with bio, skills, and interests
 */

'use client';

import { getEffectiveConfig } from '../../lib/utils/config';

export function PersonalAbout() {
  const config = getEffectiveConfig();
  
  const member = config.member;
  const about = config.personal?.about;
  const skills = (member?.keySkills as string[]) || [];
  const interests = (member?.professionalInterests as string[]) || [];
  const hobbies = (member?.hobbies as string[]) || [];
  const experience = member?.yearsOfExperience as number | undefined;
  
  return (
    <div className="space-y-12">
      {/* Main Introduction */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        
        {experience && (
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <span className="text-blue-800 dark:text-blue-300 font-semibold">
              {experience}+ Years of Experience
            </span>
          </div>
        )}
        
        {/* User's custom introduction OR fallback to team.ts bio */}
        {about?.introduction ? (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {about.introduction}
            </p>
          </div>
        ) : config.bio ? (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
              💡 <strong>Tip:</strong> Customize your about page by adding <code>about.introduction</code> to your personal-config.ts
            </p>
            {config.bio && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                {config.bio}
              </p>
            )}
          </div>
        ) : (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-8 text-center">
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              📝 <strong>Add your introduction in personal-config.ts:</strong>
            </p>
            <code className="text-sm text-gray-700 dark:text-gray-300">
              about: &#123; introduction: &quot;Your story here...&quot; &#125;
            </code>
          </div>
        )}
      </section>
      
      {/* Career Highlights */}
      {about?.highlights && about.highlights.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Career Highlights
          </h3>
          <ul className="space-y-3">
            {about.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-xl flex-shrink-0">✓</span>
                <span className="text-lg">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      
      {/* What I'm Looking For */}
      {about?.lookingFor && (
        <section>
          <div className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>What I&apos;m Looking For</span>
            </h3>
            <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">
              {about.lookingFor}
            </p>
          </div>
        </section>
      )}
      
      {/* Custom Sections - User can add any additional sections */}
      {about?.sections && about.sections.map((section, index) => (
        <section key={index}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {section.title}
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        </section>
      ))}
      
      {/* Key Skills */}
      {skills && skills.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
      
      {/* Professional Interests */}
      {interests && interests.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg font-medium border-2 border-emerald-200 dark:border-emerald-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      )}
      
      {/* Hobbies */}
      {hobbies && hobbies.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg font-medium"
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

