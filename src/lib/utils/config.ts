/**
 * Utils: Configuration management for template and personal portfolios
 * Author: AR
 * Created: 2025-11-05
 * Description: Manages site configuration, personal config, and effective merged config
 */

import type { SiteConfig, PersonalConfig, EffectiveConfig } from '@/lib/types/config';
import { TEAM_MEMBERS } from '@/lib/constants/team';

/**
 * Get runtime site configuration from environment variables
 * 
 * Environment variables:
 * - NEXT_PUBLIC_MODE: 'internal' | 'external' (default: 'external')
 * - NEXT_PUBLIC_SITE_TYPE: 'team' | 'personal' (default: 'team')
 * - NEXT_PUBLIC_OWNER: team member ID for personal sites
 * - NEXT_PUBLIC_BASE_URL: base URL for the site
 * 
 * @returns {SiteConfig} Site configuration object
 */
export function getSiteConfig(): SiteConfig {
  const mode = (process.env.NEXT_PUBLIC_MODE || 'external') as 'internal' | 'external';
  const siteType = (process.env.NEXT_PUBLIC_SITE_TYPE || 'team') as 'team' | 'personal';
  const owner = process.env.NEXT_PUBLIC_OWNER;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // Derive site type from owner if not explicitly set
  const effectiveSiteType = owner ? 'personal' : siteType;
  
  return {
    mode,
    siteType: effectiveSiteType,
    owner,
    baseUrl,
    
    // Convenience flags
    isPersonal: effectiveSiteType === 'personal',
    isTeam: effectiveSiteType === 'team',
    isInternal: mode === 'internal',
    isExternal: mode === 'external',
  };
}

/**
 * Get personal configuration from config file
 * This file only exists in personal portfolio repositories
 * 
 * @returns {PersonalConfig | null} Personal config or null if not found
 */
export function getPersonalConfig(): PersonalConfig | null {
  try {
    // Dynamic import to avoid build errors when file doesn't exist
    const config = require('@/config/personal-config');
    return config.PERSONAL_CONFIG || null;
  } catch (error) {
    // File doesn't exist - this is expected for team site and template
    return null;
  }
}

/**
 * Get effective configuration by merging site config, personal config, and team data
 * 
 * Priority order:
 * 1. Personal config (highest priority)
 * 2. Team member data from team.ts
 * 3. Defaults
 * 
 * @returns {EffectiveConfig} Merged configuration
 */
export function getEffectiveConfig(): EffectiveConfig {
  const siteConfig = getSiteConfig();
  const personalConfig = getPersonalConfig();
  
  // If no owner, this is a team site
  if (!siteConfig.owner) {
    return {
      site: siteConfig,
      personal: null,
    };
  }
  
  // Find team member data
  const member = TEAM_MEMBERS.find(m => m.id === siteConfig.owner);
  
  if (!member) {
    console.warn(`[Config] Team member not found: ${siteConfig.owner}`);
  }
  
  // Merge configurations with priority: personal > team > defaults
  return {
    site: siteConfig,
    personal: personalConfig,
    member: member ? {
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role,
      background: member.background,
    } : undefined,
    
    // Effective values
    displayName: personalConfig?.displayName || member?.name,
    bio: personalConfig?.customBio || member?.background,
    
    // Merge social links (personal overrides team)
    social: {
      ...member,
      ...personalConfig?.social,
    },
    
    // Theme
    theme: personalConfig?.theme,
  };
}

/**
 * Check if current site is in internal mode
 * Convenience function for existing code
 * 
 * @returns {boolean} True if internal mode
 */
export function isInternal(): boolean {
  return getSiteConfig().isInternal;
}

/**
 * Check if current site is external mode
 * 
 * @returns {boolean} True if external mode
 */
export function isExternal(): boolean {
  return getSiteConfig().isExternal;
}

/**
 * Check if current site is a personal portfolio
 * 
 * @returns {boolean} True if personal portfolio
 */
export function isPersonalSite(): boolean {
  return getSiteConfig().isPersonal;
}

/**
 * Check if current site is a team portfolio
 * 
 * @returns {boolean} True if team portfolio
 */
export function isTeamSite(): boolean {
  return getSiteConfig().isTeam;
}

/**
 * Get the current owner ID (for personal sites)
 * 
 * @returns {string | undefined} Owner ID or undefined for team sites
 */
export function getOwnerId(): string | undefined {
  return getSiteConfig().owner;
}

/**
 * Validate configuration
 * Checks for common misconfigurations
 * 
 * @returns {Array<string>} Array of validation errors (empty if valid)
 */
export function validateConfig(): string[] {
  const errors: string[] = [];
  const config = getSiteConfig();
  
  // Personal site must have owner
  if (config.isPersonal && !config.owner) {
    errors.push('Personal site requires NEXT_PUBLIC_OWNER to be set');
  }
  
  // Owner must exist in team.ts
  if (config.owner) {
    const member = TEAM_MEMBERS.find(m => m.id === config.owner);
    if (!member) {
      errors.push(`Owner "${config.owner}" not found in team.ts`);
    }
  }
  
  // Personal config must match owner
  const personalConfig = getPersonalConfig();
  if (personalConfig && config.owner && personalConfig.owner !== config.owner) {
    errors.push(
      `Personal config owner "${personalConfig.owner}" doesn't match NEXT_PUBLIC_OWNER "${config.owner}"`
    );
  }
  
  return errors;
}

