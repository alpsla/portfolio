/**
 * Types: Project & Attachments
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Shared data structures for projects and sensitivity model.
 */

export type Sensitivity = 'public' | 'internal' | 'restricted';

export interface IAttachment {
  kind: 'video' | 'pdf' | 'slide' | 'image' | 'link' | 'doc';
  title: string;
  src: string;
  provider?: 'youtube' | 'vimeo' | 'drive' | 'confluence' | 'github' | 'npaw' | 'jira';
  description?: string;
  sensitivity?: Sensitivity;
}

export interface ILink {
  label: string;
  url: string;
  sensitivity?: Sensitivity;
}

export interface ITag {
  key: string;
  label: string;
}

export interface IMetric {
  label: string;
  value: string;
  improvement?: string;
  impact?: string;
}

export interface IProject {
  id: string;
  slug: string;
  title: string;
  owner: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: IMetric[];
  videoUrl?: string;
  screenshots: string[];
  status: 'draft' | 'review' | 'complete';
  attachments?: IAttachment[];
  links?: ILink[];
  tags?: ITag[];
  sensitivity?: Sensitivity;
}


