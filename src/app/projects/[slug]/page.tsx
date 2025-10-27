/**
 * Page: Project Detail
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Detail view for a project by slug.
 */

import { PROJECTS } from '../../../lib/constants/projects';
import { sanitizeAllProjects } from '../../../lib/utils/safety';

interface Params {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Params) {
  const data = sanitizeAllProjects(PROJECTS);
  const project = data.find((p) => p.slug === params.slug);
  if (!project) return <div className="p-6">Project not found.</div>;

  return (
    <main className="container mx-auto p-6">
      {/* Hero Image */}
      {project.heroImage && (
        <div className="mb-8 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <img 
            src={project.heroImage} 
            alt={`${project.title} - Architecture Diagram`}
            className="w-full h-auto shadow-lg"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
      <p className="text-gray-900 dark:text-gray-100 mt-2 text-lg">{project.summary}</p>

      {/* Problem Section */}
      {project.problem && (
        <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Problem</h2>
          <p className="mt-3 text-gray-900 dark:text-gray-100 leading-relaxed">{project.problem}</p>
        </section>
      )}

      {/* Solution Section */}
      <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Solution</h2>
        <p className="mt-3 text-gray-900 dark:text-gray-100 leading-relaxed">{project.solution}</p>
      </section>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Metrics & Projected Impact</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow hover:shadow-lg transition-shadow">
                <div className="font-semibold text-gray-900 dark:text-white text-lg">{metric.label}</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{metric.value}</div>
                {metric.improvement && (
                  <div className="text-sm text-gray-900 dark:text-gray-200 mt-3 leading-relaxed">{metric.improvement}</div>
                )}
                {metric.impact && (
                  <div className="text-sm text-green-700 dark:text-green-400 mt-2 font-medium">{metric.impact}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Links Section */}
      {project.links && project.links.length > 0 && (
        <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🔗 Related Links</h2>
          <ul className="space-y-3">
            {project.links.map((l) => (
              <li key={`${l.label}-${l.url}`} className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">→</span>
                <a 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium text-lg" 
                  href={l.url} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Attachments Section */}
      {project.attachments && project.attachments.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📎 Resources & Documentation</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <li key={`${a.kind}-${a.src}`} className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-start gap-3 hover:shadow-lg transition-shadow">
                  <span className="text-2xl" aria-hidden>{icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">{a.title}</div>
                    <div className="flex gap-4">
                      <a 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" 
                        href={a.src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        👁️ View
                      </a>
                      <a 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" 
                        href={a.src} 
                        download
                      >
                        ⬇️ Download
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}


