/**
 * Page: Project Detail
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-11-02 by AR - Add client-side auth guard
 * Description: Detail view for a project by slug with enhanced animations and icons.
 */

'use client';

import { PROJECTS } from '../../../lib/constants/projects';
import { sanitizeAllProjects } from '../../../lib/utils/safety';
import { AuthGuard } from '../../../components/shared/AuthGuard';

interface Params {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Params) {
  const data = sanitizeAllProjects(PROJECTS);
  const project = data.find((p) => p.slug === params.slug);
  if (!project) return <div className="p-6">Project not found.</div>;

  return (
    <AuthGuard>
      <main className="container mx-auto p-6 max-w-7xl pt-8">
      {/* Hero Image */}
      {project.heroImage && (
        <div className="mb-10 rounded-xl overflow-hidden max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform">
          <img
            src={project.heroImage}
            alt={`${project.title} - Architecture Diagram`}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>
      )}

      {/* Title & Summary - Only show title if no hero image */}
      <div className="mb-10">
        {!project.heroImage && (
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
        )}
        <p className="text-gray-700 dark:text-gray-200 text-xl leading-relaxed">{project.summary}</p>
      </div>

      {/* Problem Section */}
      {project.problem && (
        <section className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
            <span className="text-3xl">🚨</span>
            <span>Problem</span>
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed text-lg">{project.problem}</p>
        </section>
      )}

      {/* Solution Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <span>Solution</span>
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed text-lg">{project.solution}</p>
      </section>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
            <span className="text-3xl">🛠️</span>
            <span>Tech Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span>
            <span>Key Metrics & Impact</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{index === 0 ? '🎯' : index === 1 ? '⚡' : index === 2 ? '🔍' : '🌐'}</span>
                    <div className="font-semibold text-gray-900 dark:text-white text-lg">{metric.label}</div>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-2 mb-4">
                    {metric.value}
                  </div>
                  {metric.improvement && (
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">{metric.improvement}</div>
                  )}
                  {metric.impact && (
                    <div className="text-sm text-green-700 dark:text-green-400 mt-3 font-medium flex items-start gap-2">
                      <span className="text-lg">✓</span>
                      <span>{metric.impact}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Links Section */}
      {project.links && project.links.length > 0 && (
        <section className="mt-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            <span>Related Links</span>
          </h2>
          <ul className="space-y-4">
            {project.links.map((l, index) => (
              <li
                key={`${l.label}-${l.url}`}
                className="group flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-all duration-300 hover:pl-6"
              >
                <span className="text-blue-600 dark:text-blue-400 text-xl group-hover:scale-125 transition-transform duration-300">
                  {index === 0 ? '🎥' : index === 1 ? '📱' : index === 2 ? '📺' : '💻'}
                </span>
                <a
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium text-lg flex-1 group-hover:translate-x-1 transition-transform duration-300"
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
                <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Attachments Section */}
      {project.attachments && project.attachments.length > 0 && (
        <section className="mt-10 mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3">
            <span className="text-3xl">📎</span>
            <span>Resources & Documentation</span>
          </h2>
          <ul className={`grid gap-6 ${project.attachments.length === 1 ? 'sm:grid-cols-1 max-w-md mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {project.attachments.map((a) => {
              const icon = a.kind === 'pdf'
                ? '📄'
                : a.kind === 'slide'
                ? '📑'
                : a.kind === 'video'
                ? '🎥'
                : a.kind === 'audio'
                ? '🎧'
                : a.kind === 'image'
                ? '🖼️'
                : a.kind === 'doc'
                ? '📃'
                : '🔗';
              return (
                <li
                  key={`${a.kind}-${a.src}`}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col gap-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300" aria-hidden>
                      {icon}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {a.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                      href={a.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>👁️</span>
                      <span>View</span>
                    </a>
                    <a
                      className="flex-1 text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                      href={a.src}
                      download
                    >
                      <span>⬇️</span>
                      <span>Download</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
    </AuthGuard>
  );
}


