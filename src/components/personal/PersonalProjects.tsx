/**
 * Component: PersonalProjects
 * Author: AR
 * Created: 2025-11-05
 * Description: Projects grid for personal portfolios with ownership indicators
 */

'use client';

import { getFilteredProjects, getFeaturedProjects } from '../../lib/utils/owner-filter';
import { getEffectiveConfig } from '../../lib/utils/config';
import { ProjectCard } from '../shared/ProjectCard';
import Link from 'next/link';

export function PersonalProjects() {
  const allProjects = getFilteredProjects();
  const config = getEffectiveConfig();
  
  // Use featured project ordering if specified in personal config
  const projects = config.personal?.featuredProjects
    ? getFeaturedProjects(allProjects, config.personal.featuredProjects)
    : allProjects;
  
  if (projects.length === 0) {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">📂</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            No Projects Yet
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Projects will appear here as you contribute to the team's initiatives.
          </p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects & Contributions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'} showcasing my work in test automation, quality engineering, and innovation
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isOwner = project.owner === config.site.owner;
            const isContributor = !isOwner && project.contributors?.includes(config.site.owner || '');
            
            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                aria-label={`Open ${project.title}`}
                className="group relative"
              >
                <div className="h-full">
                  <ProjectCard project={project} />
                  
                  {/* Ownership Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    {isOwner && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                        Owner
                      </span>
                    )}
                    {isContributor && (
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
                        Contributor
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

