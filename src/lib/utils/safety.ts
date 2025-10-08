/**
 * Utils: safety and redaction for internal/external builds
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Sanitizes project data for public builds and governs sensitivity.
 */

import { IAttachment, ILink, IProject } from '../../lib/types/project';

type Mode = 'internal' | 'external';

export function getMode(): Mode {
  return (process.env.NEXT_PUBLIC_MODE === 'internal' ? 'internal' : 'external');
}

export function isInternal(): boolean {
  return getMode() === 'internal';
}

function allowBySensitivity(s: string | undefined, internal: boolean): boolean {
  const sensitivity = (s ?? 'public') as 'public' | 'internal' | 'restricted';
  if (internal) return sensitivity !== 'restricted';
  return sensitivity === 'public';
}

function redactText(input: string | undefined, internal: boolean): string | undefined {
  if (!input) return input;
  return internal ? input : input.replace(/(https?:\/\/\S+|[A-Z]{2,}-\d+)/g, '[redacted]');
}

export function sanitizeProject(project: IProject, internal: boolean): IProject {
  const attachments: IAttachment[] | undefined = project.attachments
    ?.filter(a => allowBySensitivity(a.sensitivity, internal))
    .map(a => ({
      ...a,
      src: internal ? a.src : a.src,
      description: redactText(a.description, internal),
    }));

  const links: ILink[] | undefined = project.links
    ?.filter(l => allowBySensitivity(l.sensitivity, internal))
    .map(l => ({
      ...l,
      url: internal ? l.url : l.url.startsWith('http') ? l.url.replace(/https?:\/\/[^/]+/, '[redacted]') : l.url,
    }));

  return {
    ...project,
    summary: redactText(project.summary, internal) ?? project.summary,
    problem: redactText(project.problem, internal) ?? project.problem,
    solution: redactText(project.solution, internal) ?? project.solution,
    attachments,
    links,
  };
}

export function sanitizeAllProjects(projects: IProject[]): IProject[] {
  const internal = isInternal();
  return projects
    .filter(p => allowBySensitivity(p.sensitivity, internal))
    .map(p => sanitizeProject(p, internal));
}


