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
    yearsOfExperience: undefined,
    background: undefined,
    projectsParticipated: undefined,
    keySkills: undefined,
    professionalInterests: undefined,
    hobbies: undefined,
  },
  {
    id: 'dhanyamathew',
    name: 'Dhanya Mathew',
    email: 'dhanya.mathew@paramount.com',
    role: 'QA Engineer',
    yearsOfExperience: 10,
    background: 'Dhanya Mathew is a dedicated QA professional with over 9 years of IT experience, including 7.5 years in quality assurance, test automation, and cross-platform testing across Web UI, APIs, OTT, mobile, and mainframe systems. She has led complex testing initiatives, driven improvements in test coverage and defect reduction, and contributed to data validation, migration testing, and reporting automation. With a strong foundation in Agile methodologies and domain expertise in healthcare, banking, and high-tech, Dhanya consistently delivers innovation and efficiency in every project she is part of .',
    projectsParticipated:['unified-test-case-optimization', 'new-relic-qe-okr-dashboard', 'report-portal', 'npaw-integration-testing'],
    keySkills: ['Test Automation', 'Manual Testing', 'GenAI Tools', 'Cross-Platform Testing', 'CI/CD Integration', 'Data Quality Analysis', 'Agile Methodologies', 'Defect Management'],
    professionalInterests: ['Test Automation Strategy', 'Cross-Platform QA', 'Generative AI', 'Agile Quality Leadership', 'Process Optimization & Metrics'],
    hobbies: ['Dance & Movement Arts', 'Movies & Music',  'Reading', 'Creative Expression'],
    avatar: '/assets/team/Dhanya Mathew.png',
    linkedIn: 'http://www.linkedin.com/in/dhanya-mathew-1997691a7',
    github: 'https://github.com/dhanyamathew',
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
