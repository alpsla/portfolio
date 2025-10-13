/**
 * Constants: projects catalog
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Seed list of projects; use sensitivity flags for internal/external builds.
 */

import { IProject } from '../../lib/types/project';

export const PROJECTS: IProject[] = [
  {
    id: 'unified-test-case-optimization',
    slug: 'unified-test-case-optimization',
    title: 'Unified Test Case Optimization',
    owner: 'rohitmenonv',
    summary: 'Reduce duplication and runtime via shared steps, fixtures, and impact-based selection.',
    problem: 'Test suites grew with duplicated steps across platforms, slowing feedback.',
    solution: 'Normalize steps, reuse fixtures, select tests based on changed code.',
    techStack: ['TypeScript', 'Playwright', 'Jest'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [],
    links: [],
    tags: [{ key: 'platform:multi', label: 'Multi-Platform' }],
  },
  {
    id: 'unified-test-automation-framework',
    slug: 'unified-test-automation-framework',
    title: 'Unified Test Automation Framework',
    owner: 'rostialpin',
    summary: 'One framework for Web, WCTV, Roku, Apple TV, iOS, Android (mobile/TV).',
    problem: 'Platform-specific frameworks caused high maintenance and slow delivery.',
    solution: 'Abstractions for drivers/selectors/fixtures; adapters per platform.',
    techStack: ['TypeScript', 'Playwright', 'Appium'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [],
    links: [],
    tags: [
      { key: 'platform:web', label: 'Web' },
      { key: 'platform:wctv', label: 'WCTV' },
      { key: 'platform:roku', label: 'Roku' },
      { key: 'platform:apple-tv', label: 'Apple TV' },
      { key: 'platform:ios', label: 'iOS' },
      { key: 'platform:android', label: 'Android' },
    ],
  },
  { id: 'test-manager-bot-eva', slug: 'test-manager-bot-eva', title: 'Test Manager Bot & EVA', owner: 'anilbvi', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  { id: 'dart', slug: 'dart', title: 'DART', owner: 'JuneyJestin', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  { id: 'onboarding-automation-setup', slug: 'onboarding-automation-setup', title: 'Onboarding Automation Setup', owner: 'rob1nalex', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  { id: 'coppa-process-technology', slug: 'coppa-process-technology', title: 'COPPA - Process & Technology', owner: 'mathewdhanya13', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  { id: 'new-relic-qe-okr-dashboard', slug: 'new-relic-qe-okr-dashboard', title: 'New Relic QE OKR - Dashboard', owner: 'rob1nalex', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  { id: 'report-portal', slug: 'report-portal', title: 'Report Portal', owner: 'rohitmenonv', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  { id: 'npaw-integration-testing', slug: 'npaw-integration-testing', title: 'NPAW Integration and Testing', owner: 'rostialpin', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
  {
    id: 'data-observability',
    slug: 'data-observability',
    title: 'Data Observability (Next Move)',
    owner: 'rostialpin',
    summary: 'End-to-end observability of data pipelines to power QA insights and test selection.',
    problem: 'Limited visibility into data flows and quality issues delayed incident detection and slowed QA feedback.',
    solution: 'Instrument pipelines, centralize metrics/logs/traces, derive test impact and health signals for faster decisions.',
    techStack: ['OpenTelemetry', 'Kafka', 'dbt', 'BigQuery'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [
      {
        kind: 'pdf',
        title: 'Public-Safe Brief',
        src: '/assets/data-observability/pdfs/data-observability-brief_v1.pdf',
        sensitivity: 'public'
      }
    ],
    links: [
      { label: 'Confluence Overview (internal)', url: 'https://confluence.example.com/display/QA/Data+Observability', sensitivity: 'internal' }
    ],
    tags: [{ key: 'topic:observability', label: 'Observability' }]
  },
  { id: 'config-comparison', slug: 'config-comparison', title: 'Config Comparison', owner: 'anilbvi', summary: '', problem: '', solution: '', techStack: [], metrics: [], screenshots: [], status: 'draft' },
];


