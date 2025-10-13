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
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-gray-700 mt-2">{project.summary}</p>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">Solution</h2>
        <p className="mt-2">{project.solution}</p>
      </section>

      {project.links && project.links.length > 0 && (
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Links</h3>
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

      {project.attachments && project.attachments.length > 0 && (
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Attachments</h3>
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
                    <div className="mt-1">
                      <a className="text-blue-600 hover:underline" href={a.src} download>
                        View / Download
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


