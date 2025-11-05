/**
 * Types: Configuration for template and personal portfolios
 * Author: AR
 * Created: 2025-11-05
 * Description: Type definitions for site configuration system
 */

/**
 * Mode of operation for the portfolio
 * - internal: Shows all content including internal links/docs
 * - external: Shows only public-safe content
 */
export type Mode = 'internal' | 'external';

/**
 * Type of site deployment
 * - team: Team portfolio showing all projects
 * - personal: Personal portfolio filtered to one owner
 */
export type SiteType = 'team' | 'personal';

/**
 * Runtime site configuration derived from environment variables
 */
export interface SiteConfig {
  /** Current mode (internal or external) */
  mode: Mode;
  
  /** Type of site (team or personal) */
  siteType: SiteType;
  
  /** Owner ID for personal sites (undefined for team sites) */
  owner?: string;
  
  /** Convenience flags */
  isPersonal: boolean;
  isTeam: boolean;
  isInternal: boolean;
  isExternal: boolean;
  
  /** Base URL for the site */
  baseUrl?: string;
}

/**
 * Theme customization options for personal portfolios
 */
export interface ThemeConfig {
  /** Primary brand color (hex) */
  primaryColor?: string;
  
  /** Accent color (hex) */
  accentColor?: string;
  
  /** Custom font family */
  fontFamily?: string;
  
  /** Dark mode preference */
  preferDarkMode?: boolean;
}

/**
 * Social media links
 */
export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  email?: string;
  portfolio?: string;
}

/**
 * SEO metadata for personal portfolios
 */
export interface SEOConfig {
  /** Page title */
  title?: string;
  
  /** Meta description */
  description?: string;
  
  /** Keywords for SEO */
  keywords?: string[];
  
  /** Open Graph image URL */
  ogImage?: string;
}

/**
 * Personal portfolio configuration
 * This is created in each personal repository to customize the portfolio
 */
export interface PersonalConfig {
  // Identity
  /** Owner ID - must match team.ts */
  owner: string;
  
  /** Display name override (if different from team.ts) */
  displayName?: string;
  
  /** Personal tagline/headline */
  tagline?: string;
  
  // Branding
  /** Theme customization */
  theme?: ThemeConfig;
  
  // Content
  /** Custom bio (overrides team.ts background) */
  customBio?: string;
  
  /** Featured projects in order (project IDs) */
  featuredProjects?: string[];
  
  /** Hide specific projects from personal portfolio */
  hiddenProjects?: string[];
  
  // Social
  /** Social media links */
  social?: SocialLinks;
  
  // Features
  /** Show resume download button */
  showResume?: boolean;
  
  /** Resume file path */
  resumePath?: string;
  
  /** Show contact form */
  showContact?: boolean;
  
  /** Enable blog section (future feature) */
  enableBlog?: boolean;
  
  // SEO
  /** SEO metadata */
  meta?: SEOConfig;
  
  // Analytics
  /** Google Analytics ID (optional) */
  gaId?: string;
  
  /** Plausible Analytics domain (optional) */
  plausibleDomain?: string;
}

/**
 * Effective configuration combining site config, personal config, and team data
 */
export interface EffectiveConfig {
  /** Runtime site configuration */
  site: SiteConfig;
  
  /** Personal configuration (if personal site) */
  personal: PersonalConfig | null;
  
  /** Team member data from team.ts */
  member?: {
    id: string;
    name: string;
    email: string;
    role: string;
    background?: string;
    [key: string]: unknown;
  };
  
  /** Effective display name (personal > team) */
  displayName?: string;
  
  /** Effective bio (personal > team) */
  bio?: string;
  
  /** Merged social links */
  social?: SocialLinks;
  
  /** Effective theme */
  theme?: ThemeConfig;
}

