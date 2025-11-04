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
    role: 'Sr. QE / Test Automation Architect',
    avatar: '/assets/team/rob1nalex.jpg',
    yearsOfExperience: 20,
    background: 'Robin brings extensive experience in quality assurance and test automation across multiple platforms. With a proven track record in leading complex testing initiatives, Robin has been instrumental in driving QA excellence and innovation within the team. Robin has worked on Web UI, Backend (DB & API), Multiplatform (OTT, Mobile), and Mainframe applications. Robin has also been involved in data quality analysis, data migration testing, and data validation/reporting automation. Robin has demonstrated continuous innovation and process best practices leading to effort and cost savings in almost all projects.',
    projectsParticipated: ['unified-test-case-optimization', 'unified-test-automation-framework', 'test-manager-bot-eva', 'coppa-process-technology', 'report-portal', 'config-comparison'],
    keySkills: ['Test Automation', 'Framework Design', 'GenAI Tools', 'Cross-Platform Testing', 'CI/CD Integration', 'Data Quality Analysis', 'Mentoring & Guiding Team'],
    professionalInterests: ['Test Architecture', 'Automation Innovation', 'Generative AI', 'DevOps Practices', 'Quality Metrics'],
    hobbies: ['Tech - News, Trends, Learnings', 'Movies & Music',  'Digital Designing', 'Health & Wellness'],
  },
  {
    id: 'anilbvi',
    name: 'Bobby Anil Alex',
    email: 'bobby.anil@paramount.com',
    role: 'QE Automation Engineer',
    avatar: '/assets/team/anilbvi.jpg',
    yearsOfExperience: 4,
    background: 'Passionate QE Automation Engineer proficient in a wide range of testing technologies and tools with focus on OTT Testing. Skilled in both manual and automated testing with a strong focus on performance optimization and test data management.',
    projectsParticipated: ['unified-test-case-optimization', 'unified-test-automation-framework', 'new-relic-qe-okr-dashboard', 'config-comparison', 'onboarding-automation-setup'],
    keySkills: ['Test Automation', 'Device Testing', 'Device Farm Management', 'OTT Testing'],
    professionalInterests: ['AI-powered testing', 'Performance optimization', 'Test data management'],
    hobbies: ['News - World Affairs, Technology and Space', 'Long Drives'],
  },
  {
    id: 'JuneyJestin',
    name: 'Juney Jestin',
    email: 'juney.jestin@paramount.com',
    role: 'QA Engineer',
    avatar: '/assets/team/juneyjestin.png',
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
    avatar: '/assets/team/dhanyamathew.png',
    linkedIn: 'https://www.linkedin.com/in/dhanya-mathew-1997691a7',
    github: 'https://github.com/dhanyamathew',
    yearsOfExperience: 10,
    background: 'Dhanya Mathew is a dedicated QA professional with over 9 years of IT experience, including 7.5 years in quality assurance, test automation, and cross-platform testing across Web UI, APIs, OTT, mobile, and mainframe systems. She has led complex testing initiatives, driven improvements in test coverage and defect reduction, and contributed to data validation, migration testing, and reporting automation. With a strong foundation in Agile methodologies and domain expertise in healthcare, banking, and high-tech, Dhanya consistently delivers innovation and efficiency in every project she is part of .',
    projectsParticipated:['unified-test-case-optimization', 'new-relic-qe-okr-dashboard', 'report-portal', 'npaw-integration-testing'],
    keySkills: ['Test Automation', 'Manual Testing', 'GenAI Tools', 'Cross-Platform Testing', 'CI/CD Integration', 'Data Quality Analysis', 'Agile Methodologies', 'Defect Management'],
    professionalInterests: ['Test Automation Strategy', 'Cross-Platform QA', 'Generative AI', 'Agile Quality Leadership', 'Process Optimization & Metrics'],
    hobbies: ['Dance & Movement Arts', 'Movies & Music',  'Reading', 'Creative Expression'],
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
