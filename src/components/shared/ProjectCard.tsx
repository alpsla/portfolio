/**
 * Component: ProjectCard
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Card view for a project listing.
 */

import { IProject } from '../../lib/types/project';

interface ProjectCardProps {
  project: IProject; // Project to render
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border p-4 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((t) => (
          <span key={t.key} className="text-xs bg-gray-100 px-2 py-1 rounded">{t.label}</span>
        ))}
      </div>
    </article>
  );
}


