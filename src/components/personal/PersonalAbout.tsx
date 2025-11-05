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
  if (!member) return null;
  
  const skills = member.keySkills || [];
  const interests = member.professionalInterests || [];
  const hobbies = member.hobbies || [];
  const experience = member.yearsOfExperience;
  
  return (
    <div className="space-y-12">
      {/* About Me Section */}
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
        
        {config.bio && (
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {config.bio}
          </p>
        )}
      </section>
      
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

