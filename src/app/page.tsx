/**
 * Page: Home
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Lists all projects with sensitivity-aware sanitization.
 */

import { PROJECTS } from '../lib/constants/projects';
import { sanitizeAllProjects } from '../lib/utils/safety';
import { ProjectCard } from '../components/shared/ProjectCard';
import { SafetyBanner } from '../components/shared/SafetyBanner';
import Link from 'next/link';

export default function HomePage() {
  const data = sanitizeAllProjects(PROJECTS);
  return (
    <main className="container mx-auto p-6">
      <SafetyBanner />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {data.map((p) => (
          <div key={p.id}>
            <Link href={`/projects/${p.slug}`} aria-label={`Open ${p.title}`}>
              {/* NOTE: AR - Card is not clickable by default; wrapped with Link for navigation */}
              <ProjectCard project={p} />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}


