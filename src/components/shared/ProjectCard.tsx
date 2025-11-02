/**
 * Component: ProjectCard
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-31 by AR
 * Description: Enhanced card view for a project listing with animations.
 */

import { IProject } from '../../lib/types/project';

interface ProjectCardProps {
  project: IProject; // Project to render
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Determine if project has significant content
  const hasMetrics = project.metrics && project.metrics.length > 0;
  const hasAttachments = project.attachments && project.attachments.length > 0;
  const hasLinks = project.links && project.links.length > 0;
  const isRich = hasMetrics || hasAttachments || hasLinks;

  return (
    <article className="h-full bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-500 group relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Hero image if available */}
        {project.heroImage && (
          <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
          {project.summary}
        </p>

        {/* Status badges */}
        <div className="flex items-center gap-3 mb-4">
          {isRich && (
            <span className="inline-flex items-center gap-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full font-medium">
              <span>✓</span>
              <span>Complete</span>
            </span>
          )}
          {hasMetrics && (
            <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full font-medium">
              📊 Metrics
            </span>
          )}
          {(hasAttachments || hasLinks) && (
            <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-full font-medium">
              📎 Resources
            </span>
          )}
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t.key}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {t.label}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Hover arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
          <span className="text-sm">View Details</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </article>
  );
}


