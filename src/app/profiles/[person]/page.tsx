// @ts-nocheck
/**
 * Page: Profile View
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Curated project list for a teammate.
 */

import { PROJECTS } from '../../../lib/constants/projects';
import { sanitizeAllProjects } from '../../../lib/utils/safety';
import { ProjectCard } from '../../../components/shared/ProjectCard';

interface Params {
  params: { person: string };
}

// Simple placeholder filter: show all for now; later map person -> curated slugs
export default function ProfilePage({ params }: Params) {
  const data = sanitizeAllProjects(PROJECTS);
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold capitalize">{params.person}</h1>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {data.map((p) => (
          <div key={p.id}>
            <ProjectCard project={p} />
          </div>
        ))}
      </section>
    </main>
  );
}


