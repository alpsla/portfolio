/**
 * Utils: Owner-based project filtering
 * Author: AR
 * Created: 2025-11-05
 * Description: Filters projects based on ownership for personal portfolios
 */

import type { IProject } from '@/lib/types/project';
import { getSiteConfig } from './config';
import { sanitizeAllProjects } from './safety';

/**
 * Filter projects based on ownership
 * 
 * For team sites (no owner): Returns all projects
 * For personal sites: Returns only projects where person is owner or contributor
 * 
 * @param {IProject[]} projects - Array of projects to filter
 * @returns {IProject[]} Filtered projects
 */
export function filterByOwnership(projects: IProject[]): IProject[] {
  const config = getSiteConfig();
  
  // Team site - show all projects
  if (!config.owner) {
    return projects;
  }
  
  // Personal site - filter to owner's projects
  return projects.filter(project => {
    // Check if person is the primary owner
    const isOwner = project.owner === config.owner;
    
    // Check if person is a contributor
    const isContributor = project.contributors?.includes(config.owner);
    
    return isOwner || isContributor;
  });
}

/**
 * Get filtered projects with both sensitivity and ownership filtering applied
 * 
 * This is the main function to use throughout the application.
 * It applies filtering in the correct order:
 * 1. Sensitivity filtering (internal/external mode)
 * 2. Owner filtering (team/personal site)
 * 
 * @returns {IProject[]} Filtered projects ready to display
 */
export function getFilteredProjects(): IProject[] {
  // Import all projects (will be dynamic import in actual code)
  // For now, we'll make this function async-compatible
  const { PROJECTS } = require('@/lib/constants/projects');
  
  // Step 1: Apply sensitivity filtering (respects internal/external mode)
  const sanitizedProjects = sanitizeAllProjects(PROJECTS);
  
  // Step 2: Apply ownership filtering (respects owner config)
  const filteredProjects = filterByOwnership(sanitizedProjects);
  
  return filteredProjects;
}

/**
 * Get projects for a specific owner (utility function)
 * Useful for testing or generating multiple personal portfolios
 * 
 * @param {IProject[]} projects - Array of projects
 * @param {string} ownerId - Owner ID to filter by
 * @returns {IProject[]} Projects owned or contributed to by the specified person
 */
export function getProjectsForOwner(projects: IProject[], ownerId: string): IProject[] {
  return projects.filter(project => {
    const isOwner = project.owner === ownerId;
    const isContributor = project.contributors?.includes(ownerId);
    return isOwner || isContributor;
  });
}

/**
 * Get project count for each team member
 * Useful for analytics and team overview
 * 
 * @param {IProject[]} projects - Array of projects
 * @returns {Record<string, number>} Map of owner ID to project count
 */
export function getProjectCountByOwner(projects: IProject[]): Record<string, number> {
  const counts: Record<string, number> = {};
  
  projects.forEach(project => {
    // Count for primary owner
    counts[project.owner] = (counts[project.owner] || 0) + 1;
    
    // Count for contributors
    project.contributors?.forEach(contributorId => {
      counts[contributorId] = (counts[contributorId] || 0) + 1;
    });
  });
  
  return counts;
}

/**
 * Check if a team member has any projects
 * Useful for validation
 * 
 * @param {IProject[]} projects - Array of projects
 * @param {string} ownerId - Owner ID to check
 * @returns {boolean} True if person has at least one project
 */
export function hasProjects(projects: IProject[], ownerId: string): boolean {
  return projects.some(
    project => project.owner === ownerId || project.contributors?.includes(ownerId)
  );
}

/**
 * Get featured projects for personal portfolio
 * Returns projects in order specified in personal config, or all if not specified
 * 
 * @param {IProject[]} projects - Array of filtered projects
 * @param {string[]} [featuredIds] - Optional array of project IDs in desired order
 * @returns {IProject[]} Projects in featured order
 */
export function getFeaturedProjects(
  projects: IProject[],
  featuredIds?: string[]
): IProject[] {
  if (!featuredIds || featuredIds.length === 0) {
    return projects;
  }
  
  // Create a map for quick lookup
  const projectMap = new Map(projects.map(p => [p.id, p]));
  
  // Return projects in featured order (only those that exist in filtered projects)
  const featured = featuredIds
    .map(id => projectMap.get(id))
    .filter((p): p is IProject => p !== undefined);
  
  // Add remaining projects not in featured list
  const featuredIdSet = new Set(featuredIds);
  const remaining = projects.filter(p => !featuredIdSet.has(p.id));
  
  return [...featured, ...remaining];
}

