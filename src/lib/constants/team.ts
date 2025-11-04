/**
 * Constants: team members
 * Author: AR
 * Created: 2025-10-31
 * Modified: 2025-10-31 by AR
 * Description: Team member information for the QA Innovation Hub.
 */

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;

  // Professional Background
  yearsOfExperience?: number;
  background?: string; // Brief background/journey

  // Projects & Skills
  projectsParticipated?: string[]; // List of project IDs or names
  keySkills?: string[]; // Top 3-5 sellable skills

  // Interests
  professionalInterests?: string[]; // Areas of professional interest
  hobbies?: string[]; // Personal hobbies (optional)

  // Legacy fields
  bio?: string; // Replaced by background, but kept for backward compatibility
  avatar?: string;
  linkedIn?: string;
  github?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'rostialpin',
    name: 'Rostislav Alpin',
    email: 'rostislav.alpin@paramount.com',
    role: 'Manager',

    // TEMPLATE - Please fill out the sections below:

    yearsOfExperience: undefined, // e.g., 8
    background: undefined,
    /* Example:
    "Started as a QA Engineer in 2015, progressed through automation and leadership roles.
    Passionate about building scalable testing solutions and mentoring teams to achieve excellence."
    */

    projectsParticipated: undefined,
    /* Example:
    ['data-observability', 'config-comparison', 'device-farm', 'playwright-framework']
    */

    keySkills: undefined,
    /* Example:
    ['Test Automation Architecture', 'Team Leadership', 'CI/CD Pipeline Design',
     'Cross-platform Testing', 'Mentoring & Training']
    */

    professionalInterests: undefined,
    /* Example:
    ['AI-powered testing', 'Performance optimization', 'DevOps integration',
     'Test data management']
    */

    hobbies: undefined, // Optional
    /* Example:
    ['Photography', 'Hiking', 'Chess', 'Reading sci-fi']
    */
  },
  {
    id: 'krishnachaitanya',
    name: 'Krishna Chaitanya',
    email: 'Krishna.Chaitanya@paramount.com',
    role: 'Senior QA Engineer',
    yearsOfExperience: undefined,
    background: undefined,
    projectsParticipated: undefined,
    keySkills: undefined,
    professionalInterests: undefined,
    hobbies: undefined,
  },
  {
    id: 'rob1nalex',
    name: 'Robin Alex',
    email: 'robin.alex@paramount.com',
    role: 'Senior QA Engineer',
    yearsOfExperience: undefined,
    background: undefined,
    projectsParticipated: undefined,
    keySkills: undefined,
    professionalInterests: undefined,
    hobbies: undefined,
  },
  {
    id: 'anilbvi',
    name: 'Bobby Anil Alex',
    email: 'bobby.anil@paramount.com',
    role: 'QA Engineer',
    yearsOfExperience: undefined,
    background: undefined,
    projectsParticipated: undefined,
    keySkills: undefined,
    professionalInterests: undefined,
    hobbies: undefined,
  },
  {
    id: 'JuneyJestin',
    name: 'Juney Jestin',
    email: 'juney.jestin@paramount.com',
    role: 'QA Engineer',
    yearsOfExperience: 8,
    background: 'Quality-focused Automation Engineer driving testing excellence in Web and OTT platform applications. Leverages 5+ years of advanced proficiency in Selenium WebDriver, Java, and TestNG to build scalable automation frameworks. Expert in full STLC implementation with hands-on experience in requirement analysis, test design, execution, and comprehensive defect management using JIRA, Rally, and TestRail. Proven track record in Financial and Media domains, combining Agile methodology expertise with strong analytical and interpersonal skills to deliver impactful results in both team and individual contributor roles.',
    projectsParticipated: ['unified-test-case-optimization', 'unified-test-automation-framework', 'new-relic-qe-okr-dashboard', 'report-portal', 'test-manager-bot-eva'],
    keySkills: ['Test Automation', 'Manual Testing', 'GenAI Tools', 'Agile Methodologies', 'Defect Management', 'OTT Platforms Testing'],
    professionalInterests: ['AI-powered testing', 'Test Automation Strategy', 'Performance optimization'],
    hobbies: ['Dancing', 'Movies & Music', 'Food & Cooking'],
  },
  {
    id: 'dhanyamathew',
    name: 'Dhanya Mathew',
    email: 'dhanya.mathew@paramount.com',
    role: 'QA Engineer',
    yearsOfExperience: undefined,
    background: undefined,
    projectsParticipated: undefined,
    keySkills: undefined,
    professionalInterests: undefined,
    hobbies: undefined,
  },
  {
    id: 'rohitmenonv',
    name: 'Rohit Menon',
    email: 'rohit.menon@paramount.com',
    role: 'QA Engineer',
    yearsOfExperience: undefined,
    background: undefined,
    projectsParticipated: undefined,
    keySkills: undefined,
    professionalInterests: undefined,
    hobbies: undefined,
  },
];
