/**
 * Component: PersonalContact
 * Author: AR
 * Created: 2025-11-05
 * Description: Contact section for personal portfolios with customizable preferences
 */

'use client';

import { getEffectiveConfig } from '../../lib/utils/config';

export function PersonalContact() {
  const config = getEffectiveConfig();
  
  const displayName = config.displayName || 'Contact Me';
  const contact = config.personal?.contact;
  const social = config.social;
  
  // Show placeholder if no contact info configured
  if (!contact && !social?.linkedin && !social?.github) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-12 text-center">
          <div className="text-6xl mb-6">📧</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Configure Your Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Add your personal contact details in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">personal-config.ts</code>
          </p>
          <div className="text-left bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Example configuration:</p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`contact: {
  headline: "Let's Connect!",
  message: "I'm always open to discussing new opportunities...",
  email: "your.personal@email.com", // Your PERSONAL email
  phone: "+1 (555) 123-4567",
  timezone: "PST (UTC-8)",
  preferredMethod: "Email or LinkedIn",
  additionalMethods: [
    { name: "WeChat", value: "YourWeChatID", icon: "💬" },
  ]
}`}
            </pre>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {contact?.headline || "Let's Connect"}
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          {contact?.message || "I'd love to hear from you!"}
        </p>
      </div>
      
      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Personal Email */}
        {contact?.email && (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              {contact.preferredMethod?.toLowerCase().includes('email') ? 'Preferred method' : 'Personal email'}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 break-all">
              {contact.email}
            </p>
          </div>
        )}
        
        {/* LinkedIn */}
        {social?.linkedin && (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              {contactInfo?.preferredMethod === 'linkedin' ? 'Preferred method' : 'Connect professionally'}
            </p>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Profile
            </a>
          </div>
        )}
        
        {/* GitHub */}
        {social?.github && (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-2xl">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Check out my code
            </p>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        )}
        
        {/* Phone */}
        {contact?.phone && (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              {contact.timezone || 'Give me a call'}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Call Now
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              {contact.phone}
            </p>
          </div>
        )}
        
        {/* Additional Contact Methods (WeChat, Telegram, etc) */}
        {contact?.additionalMethods && contact.additionalMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="text-5xl mb-4">{method.icon || '💬'}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {method.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Connect via {method.name}
            </p>
            <p className="font-mono text-blue-600 dark:text-blue-400 font-semibold">
              {method.value}
            </p>
          </div>
        ))}
      </div>
      
      {/* Preferred Method & Timezone Info */}
      {(contact?.preferredMethod || contact?.timezone) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700 text-center">
          {contact.preferredMethod && (
            <p className="text-lg text-gray-800 dark:text-gray-200 font-medium mb-2">
              <strong>Preferred:</strong> {contact.preferredMethod}
            </p>
          )}
          {contact.timezone && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Timezone: {contact.timezone}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

