/**
 * Configuration: Template defaults
 * Author: AR
 * Created: 2025-11-05
 * Description: Default configuration values for template repository
 */

import type { PersonalConfig } from '@/lib/types/config';

/**
 * Default personal configuration
 * This file serves as a reference for personal portfolios
 * Copy to personal-config.ts in personal repositories and customize
 */
export const DEFAULT_PERSONAL_CONFIG: PersonalConfig = {
  // Identity (REQUIRED)
  owner: 'example-id', // Replace with your ID from team.ts
  
  // Display (Optional - defaults to team.ts values)
  displayName: undefined,
  tagline: undefined,
  
  // Branding (Optional)
  theme: {
    primaryColor: '#10b981', // Emerald green
    accentColor: '#3b82f6',  // Blue
    fontFamily: undefined,
    preferDarkMode: undefined,
  },
  
  // Content (Optional)
  customBio: undefined,
  featuredProjects: undefined, // e.g., ['project-1', 'project-2']
  hiddenProjects: undefined,   // e.g., ['project-3']
  
  // Social (Optional - extends team.ts values)
  social: {
    linkedin: undefined,
    github: undefined,
    twitter: undefined,
    website: undefined,
    email: undefined,
  },
  
  // Features (Optional)
  showResume: true,
  resumePath: '/resume.pdf',
  showContact: true,
  enableBlog: false,
  
  // SEO (Optional)
  meta: {
    title: undefined,
    description: undefined,
    keywords: [],
  },
  
  // Analytics (Optional)
  gaId: undefined,
  plausibleDomain: undefined,
};

/**
 * Color palette options for themes
 * Choose from these or use custom hex colors
 */
export const COLOR_PALETTES = {
  emerald: {
    primary: '#10b981',
    accent: '#3b82f6',
    name: 'Emerald & Blue',
  },
  purple: {
    primary: '#8b5cf6',
    accent: '#ec4899',
    name: 'Purple & Pink',
  },
  orange: {
    primary: '#f97316',
    accent: '#0ea5e9',
    name: 'Orange & Sky',
  },
  teal: {
    primary: '#14b8a6',
    accent: '#f59e0b',
    name: 'Teal & Amber',
  },
  slate: {
    primary: '#64748b',
    accent: '#06b6d4',
    name: 'Slate & Cyan',
  },
} as const;

/**
 * Font family options
 */
export const FONT_FAMILIES = {
  inter: '"Inter", system-ui, sans-serif',
  roboto: '"Roboto", system-ui, sans-serif',
  poppins: '"Poppins", system-ui, sans-serif',
  montserrat: '"Montserrat", system-ui, sans-serif',
  sourceCodePro: '"Source Code Pro", monospace',
  jetBrainsMono: '"JetBrains Mono", monospace',
} as const;

/**
 * Example personal configurations for reference
 */
export const EXAMPLE_CONFIGS = {
  minimal: {
    owner: 'example-id',
    showResume: true,
    showContact: true,
  },
  
  customized: {
    owner: 'example-id',
    displayName: 'John Doe',
    tagline: 'QA Automation Architect | 10 Years Experience',
    theme: {
      primaryColor: COLOR_PALETTES.purple.primary,
      accentColor: COLOR_PALETTES.purple.accent,
    },
    customBio: 'Expert in building scalable test automation frameworks...',
    featuredProjects: ['project-1', 'project-2', 'project-3'],
    social: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'john@example.com',
    },
    showResume: true,
    resumePath: '/john-doe-resume.pdf',
    showContact: true,
    meta: {
      title: 'John Doe - QA Automation Expert',
      description: 'Portfolio showcasing 10 years of QA automation excellence',
      keywords: ['QA Automation', 'Test Architecture', 'Selenium', 'CI/CD'],
    },
  },
} as const;

