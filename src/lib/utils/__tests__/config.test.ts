/**
 * Tests: Configuration management
 * Author: AR
 * Created: 2025-11-05
 * Description: Unit tests for configuration management system
 */

import {
  getSiteConfig,
  getPersonalConfig,
  getEffectiveConfig,
  isInternal,
  isExternal,
  isPersonalSite,
  isTeamSite,
  getOwnerId,
  validateConfig,
} from '../config';

// Mock TEAM_MEMBERS
jest.mock('../../constants/team', () => ({
  TEAM_MEMBERS: [
    {
      id: 'user1',
      name: 'User One',
      email: 'user1@example.com',
      role: 'Engineer',
      background: 'Background for user1',
    },
    {
      id: 'user2',
      name: 'User Two',
      email: 'user2@example.com',
      role: 'Manager',
      background: 'Background for user2',
    },
  ],
}));

describe('getSiteConfig', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('defaults to external and team mode', () => {
    delete process.env.NEXT_PUBLIC_MODE;
    delete process.env.NEXT_PUBLIC_SITE_TYPE;
    delete process.env.NEXT_PUBLIC_OWNER;

    const config = getSiteConfig();
    expect(config.mode).toBe('external');
    expect(config.siteType).toBe('team');
    expect(config.owner).toBeUndefined();
    expect(config.isExternal).toBe(true);
    expect(config.isTeam).toBe(true);
  });

  test('detects internal mode', () => {
    process.env.NEXT_PUBLIC_MODE = 'internal';

    const config = getSiteConfig();
    expect(config.mode).toBe('internal');
    expect(config.isInternal).toBe(true);
    expect(config.isExternal).toBe(false);
  });

  test('detects personal site when owner is set', () => {
    process.env.NEXT_PUBLIC_OWNER = 'user1';

    const config = getSiteConfig();
    expect(config.siteType).toBe('personal');
    expect(config.owner).toBe('user1');
    expect(config.isPersonal).toBe(true);
    expect(config.isTeam).toBe(false);
  });

  test('includes base URL when provided', () => {
    process.env.NEXT_PUBLIC_BASE_URL = 'https://example.com';

    const config = getSiteConfig();
    expect(config.baseUrl).toBe('https://example.com');
  });

  test('sets all convenience flags correctly for internal team site', () => {
    process.env.NEXT_PUBLIC_MODE = 'internal';
    delete process.env.NEXT_PUBLIC_OWNER;

    const config = getSiteConfig();
    expect(config.isInternal).toBe(true);
    expect(config.isExternal).toBe(false);
    expect(config.isTeam).toBe(true);
    expect(config.isPersonal).toBe(false);
  });

  test('sets all convenience flags correctly for external personal site', () => {
    process.env.NEXT_PUBLIC_MODE = 'external';
    process.env.NEXT_PUBLIC_OWNER = 'user1';

    const config = getSiteConfig();
    expect(config.isInternal).toBe(false);
    expect(config.isExternal).toBe(true);
    expect(config.isTeam).toBe(false);
    expect(config.isPersonal).toBe(true);
  });
});

describe('getPersonalConfig', () => {
  test('returns null when personal config file does not exist', () => {
    const config = getPersonalConfig();
    expect(config).toBeNull();
  });

  // Note: Testing actual config file requires mocking require
  // In real usage, this would be tested with actual config files
});

describe('getEffectiveConfig', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_MODE = 'external';
    delete process.env.NEXT_PUBLIC_OWNER;
  });

  test('returns only site config for team site', () => {
    const effective = getEffectiveConfig();
    expect(effective.site).toBeDefined();
    expect(effective.personal).toBeNull();
    expect(effective.member).toBeUndefined();
  });

  test('includes member data for personal site', () => {
    process.env.NEXT_PUBLIC_OWNER = 'user1';

    const effective = getEffectiveConfig();
    expect(effective.site.owner).toBe('user1');
    expect(effective.member).toBeDefined();
    expect(effective.member?.name).toBe('User One');
  });

  test('merges personal config with team data', () => {
    process.env.NEXT_PUBLIC_OWNER = 'user1';

    const effective = getEffectiveConfig();
    expect(effective.displayName).toBe('User One');
    expect(effective.bio).toBe('Background for user1');
  });

  test('handles non-existent team member', () => {
    process.env.NEXT_PUBLIC_OWNER = 'nonexistent';

    const effective = getEffectiveConfig();
    expect(effective.member).toBeUndefined();
    expect(effective.displayName).toBeUndefined();
  });
});

describe('convenience functions', () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_MODE;
    delete process.env.NEXT_PUBLIC_OWNER;
  });

  describe('isInternal', () => {
    test('returns true for internal mode', () => {
      process.env.NEXT_PUBLIC_MODE = 'internal';
      expect(isInternal()).toBe(true);
    });

    test('returns false for external mode', () => {
      process.env.NEXT_PUBLIC_MODE = 'external';
      expect(isInternal()).toBe(false);
    });
  });

  describe('isExternal', () => {
    test('returns true for external mode', () => {
      process.env.NEXT_PUBLIC_MODE = 'external';
      expect(isExternal()).toBe(true);
    });

    test('returns false for internal mode', () => {
      process.env.NEXT_PUBLIC_MODE = 'internal';
      expect(isExternal()).toBe(false);
    });
  });

  describe('isPersonalSite', () => {
    test('returns true when owner is set', () => {
      process.env.NEXT_PUBLIC_OWNER = 'user1';
      expect(isPersonalSite()).toBe(true);
    });

    test('returns false when owner is not set', () => {
      expect(isPersonalSite()).toBe(false);
    });
  });

  describe('isTeamSite', () => {
    test('returns true when owner is not set', () => {
      expect(isTeamSite()).toBe(true);
    });

    test('returns false when owner is set', () => {
      process.env.NEXT_PUBLIC_OWNER = 'user1';
      expect(isTeamSite()).toBe(false);
    });
  });

  describe('getOwnerId', () => {
    test('returns owner ID when set', () => {
      process.env.NEXT_PUBLIC_OWNER = 'user1';
      expect(getOwnerId()).toBe('user1');
    });

    test('returns undefined when not set', () => {
      expect(getOwnerId()).toBeUndefined();
    });
  });
});

describe('validateConfig', () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_MODE;
    delete process.env.NEXT_PUBLIC_OWNER;
    delete process.env.NEXT_PUBLIC_SITE_TYPE;
  });

  test('returns no errors for valid team site config', () => {
    const errors = validateConfig();
    expect(errors).toHaveLength(0);
  });

  test('returns error when personal site has no owner', () => {
    process.env.NEXT_PUBLIC_SITE_TYPE = 'personal';
    delete process.env.NEXT_PUBLIC_OWNER;

    const errors = validateConfig();
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain('Personal site requires NEXT_PUBLIC_OWNER');
  });

  test('returns error when owner does not exist in team.ts', () => {
    process.env.NEXT_PUBLIC_OWNER = 'nonexistent';

    const errors = validateConfig();
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain('not found in team.ts');
  });

  test('returns no errors for valid personal site config', () => {
    process.env.NEXT_PUBLIC_OWNER = 'user1';

    const errors = validateConfig();
    expect(errors).toHaveLength(0);
  });
});

