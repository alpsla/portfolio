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
  robin: ['unified-test-case-optimization', 'unified-test-automation-framework', 'coppa-process-technology', 'new-relic-qe-okr-dashboard'],
  rostislav: ['npaw-integration-testing', 'data-observability'],
  rohit: ['dart', 'onboarding-automation-setup'],
  bobby: ['config-comparison'],
  juney: ['test-manager-bot-eva', 'report-portal'],
  dhanya: ['coppa-process-technology'],
};


