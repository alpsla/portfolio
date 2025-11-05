/**
 * Tests: Owner-based project filtering
 * Author: AR
 * Created: 2025-11-05
 * Description: Unit tests for owner filtering logic
 */

import type { IProject } from '../../types/project';
import {
  filterByOwnership,
  getProjectsForOwner,
  getProjectCountByOwner,
  hasProjects,
  getFeaturedProjects,
} from '../owner-filter';

// Mock getSiteConfig
jest.mock('../config', () => ({
  getSiteConfig: jest.fn(),
}));

const mockGetSiteConfig = require('../config').getSiteConfig;

// Sample test data
const mockProjects: IProject[] = [
  {
    id: 'project-1',
    slug: 'project-1',
    title: 'Project 1',
    owner: 'user1',
    contributors: ['user2', 'user3'],
    summary: 'Summary 1',
    problem: 'Problem 1',
    solution: 'Solution 1',
    techStack: ['TypeScript'],
    metrics: [],
    screenshots: [],
    status: 'complete',
  },
  {
    id: 'project-2',
    slug: 'project-2',
    title: 'Project 2',
    owner: 'user2',
    contributors: [],
    summary: 'Summary 2',
    problem: 'Problem 2',
    solution: 'Solution 2',
    techStack: ['JavaScript'],
    metrics: [],
    screenshots: [],
    status: 'complete',
  },
  {
    id: 'project-3',
    slug: 'project-3',
    title: 'Project 3',
    owner: 'user3',
    contributors: ['user1'],
    summary: 'Summary 3',
    problem: 'Problem 3',
    solution: 'Solution 3',
    techStack: ['Python'],
    metrics: [],
    screenshots: [],
    status: 'complete',
  },
];

describe('filterByOwnership', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns all projects when no owner is set (team site)', () => {
    mockGetSiteConfig.mockReturnValue({
      mode: 'internal',
      siteType: 'team',
      owner: undefined,
      isPersonal: false,
      isTeam: true,
    });

    const filtered = filterByOwnership(mockProjects);
    expect(filtered).toHaveLength(3);
    expect(filtered).toEqual(mockProjects);
  });

  test('filters to projects where user is owner', () => {
    mockGetSiteConfig.mockReturnValue({
      mode: 'external',
      siteType: 'personal',
      owner: 'user1',
      isPersonal: true,
      isTeam: false,
    });

    const filtered = filterByOwnership(mockProjects);
    expect(filtered).toHaveLength(2);
    expect(filtered.map(p => p.id)).toEqual(['project-1', 'project-3']);
  });

  test('filters to projects where user is contributor', () => {
    mockGetSiteConfig.mockReturnValue({
      mode: 'external',
      siteType: 'personal',
      owner: 'user2',
      isPersonal: true,
      isTeam: false,
    });

    const filtered = filterByOwnership(mockProjects);
    expect(filtered).toHaveLength(2);
    expect(filtered.map(p => p.id)).toEqual(['project-1', 'project-2']);
  });

  test('returns empty array when user has no projects', () => {
    mockGetSiteConfig.mockReturnValue({
      mode: 'external',
      siteType: 'personal',
      owner: 'user4',
      isPersonal: true,
      isTeam: false,
    });

    const filtered = filterByOwnership(mockProjects);
    expect(filtered).toHaveLength(0);
  });

  test('handles projects without contributors field', () => {
    const projectsWithoutContributors: IProject[] = [
      {
        ...mockProjects[0],
        contributors: undefined,
      },
    ];

    mockGetSiteConfig.mockReturnValue({
      mode: 'external',
      siteType: 'personal',
      owner: 'user2',
      isPersonal: true,
      isTeam: false,
    });

    const filtered = filterByOwnership(projectsWithoutContributors);
    expect(filtered).toHaveLength(0);
  });
});

describe('getProjectsForOwner', () => {
  test('returns projects for specific owner', () => {
    const projects = getProjectsForOwner(mockProjects, 'user1');
    expect(projects).toHaveLength(2);
    expect(projects.map(p => p.id)).toEqual(['project-1', 'project-3']);
  });

  test('returns empty array for non-existent owner', () => {
    const projects = getProjectsForOwner(mockProjects, 'user999');
    expect(projects).toHaveLength(0);
  });

  test('includes projects where user is contributor', () => {
    const projects = getProjectsForOwner(mockProjects, 'user3');
    expect(projects).toHaveLength(2);
    expect(projects.map(p => p.id)).toEqual(['project-1', 'project-3']);
  });
});

describe('getProjectCountByOwner', () => {
  test('counts projects per owner', () => {
    const counts = getProjectCountByOwner(mockProjects);
    expect(counts).toEqual({
      user1: 2, // owner of 1, contributor to 1
      user2: 2, // owner of 1, contributor to 1
      user3: 2, // owner of 1, contributor to 1
    });
  });

  test('handles empty project list', () => {
    const counts = getProjectCountByOwner([]);
    expect(counts).toEqual({});
  });

  test('counts contributors correctly', () => {
    const projectsWithMultipleContributors: IProject[] = [
      {
        ...mockProjects[0],
        owner: 'userA',
        contributors: ['userB', 'userC', 'userD'],
      },
    ];

    const counts = getProjectCountByOwner(projectsWithMultipleContributors);
    expect(counts.userA).toBe(1);
    expect(counts.userB).toBe(1);
    expect(counts.userC).toBe(1);
    expect(counts.userD).toBe(1);
  });
});

describe('hasProjects', () => {
  test('returns true when user owns projects', () => {
    expect(hasProjects(mockProjects, 'user1')).toBe(true);
    expect(hasProjects(mockProjects, 'user2')).toBe(true);
    expect(hasProjects(mockProjects, 'user3')).toBe(true);
  });

  test('returns false when user has no projects', () => {
    expect(hasProjects(mockProjects, 'user999')).toBe(false);
  });

  test('returns true when user is only a contributor', () => {
    const projects: IProject[] = [
      {
        ...mockProjects[0],
        owner: 'other',
        contributors: ['targetUser'],
      },
    ];
    expect(hasProjects(projects, 'targetUser')).toBe(true);
  });
});

describe('getFeaturedProjects', () => {
  test('returns projects in featured order', () => {
    const featuredIds = ['project-3', 'project-1'];
    const featured = getFeaturedProjects(mockProjects, featuredIds);

    expect(featured).toHaveLength(3);
    expect(featured[0].id).toBe('project-3');
    expect(featured[1].id).toBe('project-1');
    expect(featured[2].id).toBe('project-2');
  });

  test('returns all projects when no featured list provided', () => {
    const featured = getFeaturedProjects(mockProjects, undefined);
    expect(featured).toEqual(mockProjects);
  });

  test('returns all projects when empty featured list provided', () => {
    const featured = getFeaturedProjects(mockProjects, []);
    expect(featured).toEqual(mockProjects);
  });

  test('handles featured IDs that dont exist', () => {
    const featuredIds = ['project-999', 'project-1'];
    const featured = getFeaturedProjects(mockProjects, featuredIds);

    expect(featured).toHaveLength(3);
    expect(featured[0].id).toBe('project-1');
    // Remaining projects follow
  });

  test('does not duplicate projects', () => {
    const featuredIds = ['project-1', 'project-2'];
    const featured = getFeaturedProjects(mockProjects, featuredIds);

    const ids = featured.map(p => p.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids).toEqual(uniqueIds);
  });
});

