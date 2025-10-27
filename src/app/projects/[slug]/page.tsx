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

      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-gray-700 mt-2">{project.summary}</p>

      {/* Problem Section */}
      {project.problem && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Problem</h2>
          <p className="mt-2 text-gray-700">{project.problem}</p>
        </section>
      )}

      {/* Solution Section */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold">Solution</h2>
        <p className="mt-2 text-gray-700">{project.solution}</p>
      </section>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Tech Stack</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Key Metrics</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border rounded-lg p-4">
                <div className="font-semibold text-gray-900">{metric.label}</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">{metric.value}</div>
                {metric.improvement && (
                  <div className="text-sm text-gray-600 mt-2">{metric.improvement}</div>
                )}
                {metric.impact && (
                  <div className="text-sm text-green-700 mt-1">{metric.impact}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Tags</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag.key} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                {tag.label}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Links Section */}
      {project.links && project.links.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            {project.links.map((l) => (
              <li key={`${l.label}-${l.url}`}>
                <a className="text-blue-600 hover:underline" href={l.url} target="_blank" rel="noreferrer">
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
          <h2 className="text-lg font-semibold">Attachments</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                <li key={`${a.kind}-${a.src}`} className="border rounded p-3 flex items-start gap-3">
                  <span className="text-xl" aria-hidden>{icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{a.title}</div>
                    <div className="mt-1 flex gap-3">
                      <a 
                        className="text-blue-600 hover:underline" 
                        href={a.src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                      <a 
                        className="text-blue-600 hover:underline" 
                        href={a.src} 
                        download
                      >
                        Download
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


