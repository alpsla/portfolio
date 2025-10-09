/**
 * Constants: team mapping
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Team member routes; Rostislav == Alpin Rostislav (AR).
 */

export const TEAM_MEMBERS = {
  ROBIN: { initials: 'RB', section: 'profiles/robin' },
  ROSTISLAV: { initials: 'AR', section: 'profiles/rostislav' },
  ROHIT: { initials: 'RH', section: 'profiles/rohit' },
  BOBBY: { initials: 'BB', section: 'profiles/bobby' },
  JUNEY: { initials: 'JY', section: 'profiles/juney' },
  DHANYA: { initials: 'DN', section: 'profiles/dhanya' },
} as const;

// Optional curated slugs per teammate for profile filtering
export const PROFILE_PROJECTS: Record<string, string[]> = {
  robin: ['onboarding-automation-setup', 'new-relic-qe-okr-dashboard'],
  rostislav: ['unified-test-automation-framework', 'npaw-integration-testing'],
  rohit: ['unified-test-case-optimization', 'report-portal'],
  bobby: ['config-comparison', 'test-manager-bot-eva'],
  juney: ['dart', 'data-observability'],
  dhanya: ['coppa-process-technology'],
};


