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
    </main>
  );
}


