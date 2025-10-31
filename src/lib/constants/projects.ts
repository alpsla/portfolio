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
    owner: 'rob1nalex',
    summary: 'Comprehensive test suite optimization initiative that reduced redundant test cases across platforms and brands through flow optimization, generalized steps, and efficient execution distribution.',
    problem: 'Redundant test cases were maintained across multiple platforms and brands with repeated test flows and steps. The maintenance burden was significant as teams had to manage duplicate tests that differed by only one or more steps, creating a risk of inconsistencies and making it difficult to avoid creating additional newer duplicate tests.',
    solution: 'Implemented a systematic 5-phase approach: (1) Reviewed test cases across all projects to identify redundancies, (2) Created optimized regression scenarios with streamlined flows, (3) Added generalized steps that could be mapped to various brands and platforms, (4) Conducted dry-runs and execution optimization across brands with the Run Team, and (5) Established regular maintenance through a review and approval process. This approach also enabled transitioning Progression/Feature tests into Regression tests for better suite optimization.',
    techStack: ['TestRail', 'JIRA'],
    metrics: [
      { label: 'Test Reduction', value: '30%', improvement: 'Optimization on flows and validation', impact: 'Reduced maintenance overhead and faster test suite updates' },
      { label: 'Execution Time Reduction', value: '60%', improvement: 'Efficient distribution across brands and platforms', impact: 'Faster feedback cycles and increased testing capacity' },
      { label: 'Test Suite Optimization', value: 'Progressive to Regression', improvement: 'Transitioned feature tests into regression suite', impact: 'Better test coverage and reusability' },
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'Unified Test Case Suite', src: '/assets/unified-test-case-optimization/pdfs/Unified Test Case Suite.pdf', sensitivity: 'internal' },
    ],
    links: [],
    tags: [
      { key: 'platform:multi', label: 'Multi-Platform' },
      { key: 'topic:optimization', label: 'Optimization' },
    ],
  },
  {
    id: 'unified-test-automation-framework',
    slug: 'unified-test-automation-framework',
    title: 'Unified Test Automation Framework',
    owner: 'rob1nalex',
    summary: 'Unified automation repository enabling cross-platform and cross-brand test reusability for Web, WCTV, Roku, Apple TV, iOS, and Android with high readability and efficient maintenance through smart abstractions.',
    problem: 'Redundant test cases were maintained across multiple platforms and brands with repeated test flows and steps. Each platform required separate test implementations, leading to code duplication, increased maintenance effort, and slower delivery cycles across the testing organization.',
    solution: 'Implemented a 3-phase unified automation approach: (1) Developed a suite definition using properties files for common page elements, enabling centralized element management, (2) Created an externalized UI layer to support multi-platform modules with shared abstractions, and (3) Built platform-specific adapters for drivers, selectors, and fixtures while maintaining a common test structure. Established regular pipeline executions and weekly smoke test runs to ensure continuous validation across all platforms.',
    techStack: ['TypeScript', 'Playwright', 'Appium'],
    metrics: [
      { label: 'Cross-Platform Reusability', value: '50-80%', improvement: 'Shared test logic across Web, TV, and Mobile platforms', impact: 'Reduced development time and maintenance effort across platforms' },
      { label: 'Cross-Brand Reusability', value: '80-100%', improvement: 'Unified test suite across multiple brands', impact: 'Eliminated brand-specific test duplication' },
      { label: 'Code Maintainability', value: 'High', improvement: 'Efficient abstraction with improved readability', impact: 'Faster onboarding and easier test updates' },
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'Unified Automation Repo', src: '/assets/unified-test-automation-framework/pdfs/Unified Automation Repo.pdf', sensitivity: 'internal' },
    ],
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
  {
    id: 'test-manager-bot-eva',
    slug: 'test-manager-bot-eva',
    title: 'Test Manager Bot & EVA',
    owner: 'JuneyJestin',
    summary: 'EVA designed to address queries from Scrum team and answer them.',
    problem: 'Scrum team has to manually search for information in various systems like JIRA, Confluence, etc. This is time-consuming.',
    solution: 'EVA is a bot that can answer questions from Scrum team.',
    techStack: ['RAG (Retrieval Augmented Generation)', 'LLM', 'Vector Database', 'Python', 'Confluence API', 'JIRA API', 'TestRail API', 'GitHub API', 'Embeddings'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'EVA Tech Stack', src: '/assets/test-manager-bot-eva/pdfs/VCD-EVA Tech Stack-211025-082100.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'EVA Features', src: '/assets/test-manager-bot-eva/pdfs/VCD-EVA Features-211025-081321.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'EVA Limitations', src: '/assets/test-manager-bot-eva/pdfs/VCD-EVA Limitations-211025-082305.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'EVA Deck June 2024', src: '/assets/test-manager-bot-eva/pdfs/EVA Deck June 2024 v3.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'EVA Sample Prompts', src: '/assets/test-manager-bot-eva/pdfs/EVA+Sample+Prompts.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'Innovation Fest Deck 2024 - Unified', src: '/assets/test-manager-bot-eva/pdfs/Innovation Fest Deck 2024 - Unified - Extended.pdf', sensitivity: 'public' },
      { kind: 'slide', title: 'EVA - Enterprise Virtual Assistant - AI/ML Conf 2025', src: '/assets/test-manager-bot-eva/slides/EVA - Enterprise Virtual Assistant - AI ML Conf 2025.pptx', sensitivity: 'public' },
      { kind: 'video', title: 'EVA Presentation and Demo', src: '/assets/test-manager-bot-eva/videos/Eva - Presentation and Demo v3.mp4', sensitivity: 'public' },
      { kind: 'video', title: 'Test Manager Bot Presentation', src: '/assets/test-manager-bot-eva/videos/Test Manager Bot Presentation v1.2.mp4', sensitivity: 'public' },
    ],
    links: [],
  },
  {
    id: 'dart',
    slug: 'dart',
    title: 'DART - Dynamic Analysis Routine Tester',
    owner: 'rohitmenonv',
    summary: 'DART (Dynamic Analysis Routine Tester) provides comprehensive code coverage analysis across multiple platforms including Android and Roku, enabling method-level visibility into test coverage gaps and automated reporting for improved test effectiveness.',
    problem: 'Multi-platform applications (Android, Roku) lacked unified code coverage visibility, making it difficult to identify untested code paths and assess test quality across different architectures. Traditional coverage tools were platform-specific and insufficient for component-based architectures, leading to coverage gaps and reduced confidence in releases.',
    solution: 'Implemented DART (Dynamic Analysis Routine Tester) with method-level code coverage analysis across multiple platforms. Integrated with Jenkins, New Relic dashboards, and GitHub workflow to provide automated coverage reporting, enabling precise identification of untested code paths and improving overall test quality across Android and Roku platforms.',
    techStack: ['Ruby', 'RVM', 'GitHub Actions', 'Jenkins', 'New Relic', 'Android SDK', 'Roku SDK', 'BrightScript', 'Coverage Analysis', 'Roku Test Framework', 'Roku Debugger', 'Roku Profiler', 'GitHub API', 'Confluence API', 'JIRA API'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [
      // Internal assets for DART remain hidden in external builds
      // { kind: 'pdf', title: 'Roku Code Coverage', src: '/assets/dart/pdfs/RokuCodeCoverage.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Code Coverage', src: '/assets/dart/pdfs/Code Coverage.pdf', sensitivity: 'internal' },
    ],
    links: [
      { label: 'Android Code Coverage Analysis', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/207233059/DART+-+Dynamic+Analysis+Routine+Tester+POC+Android', sensitivity: 'internal' },
      { label: 'Deck', url: 'https://viacom.sharepoint.com/:b:/s/VIA-Digital-QAConnectedTV/EfdDTV0GDntDr60MAAmp4DcBUWB0XSf3bXizwVHVrVivHg?e=1zP45G', sensitivity: 'internal' },
      { label: 'Presentation Recording', url: 'https://viacom.sharepoint.com/:v:/s/VIA-Digital-QAConnectedTV/EWG2BaWcdkJGh21nCT2u5KQB-lreBWMGCXiGjNlUXjY_sg?e=blPLwp', sensitivity: 'internal' },
      { label: 'Jenkins job', url: 'https://external-build.viacom.com/job/PlayPlexPlus/job/android-platform/job/android-coverage-report/', sensitivity: 'internal' },
      { label: 'Dashboards', url: 'https://one.newrelic.com/dashboards/detail/MTUxOTA5OHxWSVp8REFTSEJPQVJEfGRhOjYxMjA1MDc?state=77532ab6-0f6f-f454-9cc9-c565abcab7cc', sensitivity: 'internal' },
      { label: 'Roku Code Coverage Analysis', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/302484460/Analyzing+code+coverage+at+method+level.', sensitivity: 'internal' },
      { label: 'Roku Repository', url: 'https://github.com/viacomcbs/roku-vmn-core.git', sensitivity: 'internal' },
      { label: 'RVM installation', url: 'https://get.rvm.io/', sensitivity: 'internal' },
      { label: 'Reference', url: 'https://github.com/viacomcbs/roku-vmn-core/pull/2363', sensitivity: 'internal' },
    ],
    tags: [
      { key: 'platform:roku', label: 'Roku' },
      { key: 'platform:android', label: 'Android' },
      { key: 'platform:multi', label: 'Multi-Platform' },
      { key: 'topic:coverage', label: 'Code Coverage' },
      { key: 'topic:analysis', label: 'Analysis' },
    ],
  },
  {
    id: 'onboarding-automation-setup',
    slug: 'onboarding-automation-setup',
    title: 'Onboarding Automation Setup',
    owner: 'rob1nalex',
    summary: 'Automated onboarding workflows that provision access, repositories, dashboards, and project docs in minutes with consistent guardrails.',
    problem: 'Manual onboarding across tools (GitHub, Confluence, New Relic, CI) caused delays, inconsistencies, and access gaps. New teammates waited on ticket backlogs, and standards (linting, CI, security) were applied unevenly.',
    solution: 'Orchestrated an end-to-end onboarding pipeline: templated repo bootstrap (PR templates, CI, lint), auto-provisioned dashboards and channels, and one-click project scaffolding with privacy/safety checks. Added checklists and validators to ensure policy alignment.',
    techStack: ['TypeScript', 'Node.js', 'GitHub Actions', 'Confluence API', 'JIRA API', 'New Relic API'],
    metrics: [
      { label: 'Setup Time', value: '↓ 70%', improvement: 'From days to hours via automation', impact: 'Faster team productivity' },
      { label: 'Policy Compliance', value: '↑ 100%', improvement: 'Guardrails auto-applied on bootstrap', impact: 'Consistent quality and safety' },
      { label: 'Ticket Backlog', value: '↓ 50%', improvement: 'Reduced manual access/config tickets', impact: 'Lower ops overhead' }
    ],
    screenshots: [],
    status: 'draft',
    attachments: [],
    links: [],
    tags: [
      { key: 'topic:ai', label: 'AI/ML' },
      { key: 'topic:automation', label: 'Automation' },
    ],
  },
  {
    id: 'coppa-process-technology',
    slug: 'coppa-process-technology',
    title: 'COPPA - Process & Technology',
    owner: 'rob1nalex',
    summary: 'Comprehensive COPPA compliance validation system for Kids Platforms with automated Tech-Scan report generation, unified cross-platform processes, and streamlined PMO coordination through technical and process enhancements.',
    problem: 'The COPPA compliance validation process faced significant challenges including NSQE (Nick Software Quality Engineering) process gaps and report discrepancies, along with substantial PMO communication and coordination overheads across multiple teams. Application calls required manual validation during COPPA compliance reviews, creating bottlenecks and inefficiencies in the release process.',
    solution: 'Implemented a comprehensive three-pronged enhancement strategy: (1) NSQE Process Enhancements - Created process documentation, unified steps across platforms, established collaboration & support channels, built UI automation for log collection, and added appendix for debug info; (2) Overall Process Enhancements - Improved system calls and first-party calls handling, introduced quarterly approval cycles for long-term approvals, enhanced call grouping and RegEx pattern matching, and added Slack notifications for unknown and duplicate RegEx matches; (3) Technical Enactments - Secured sheets using Paramount Google workspace, standardized sheet naming conventions, fixed code debt with OneDrive support, enhanced error messages, and stabilized the system through defect fixes.',
    techStack: ['Java', 'HAR Files', 'Google Cloud Platform', 'Google Sheets API', 'Slack API', 'OneDrive', 'RegEx'],
    metrics: [
      { label: 'Report Generation Issues', value: '80%', improvement: 'Reduction in Tech-Scan report generation issues', impact: 'Significantly improved report reliability and reduced troubleshooting time' },
      { label: 'Coordination Effort', value: '30-60%', improvement: 'Reduction in coordination effort', impact: 'Decreased PMO communication overhead and faster review cycles' },
      { label: 'Report Quality', value: 'High', improvement: 'Improved report accuracy and comment quality', impact: 'Better compliance validation and audit trail' },
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'TechScan - Video Training v2', src: '/assets/coppa-process-technology/pdfs/TechScan - Video Training v2.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Tech-Scan Enhancements', src: '/assets/coppa-process-technology/pdfs/Tech-Scan Enhancements.pdf', sensitivity: 'internal' },
    ],
    links: [
      { label: 'COPPA Compliance Documentation', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/49601222/COPPA+Compliance', sensitivity: 'internal' },
    ],
    tags: [
      { key: 'topic:compliance', label: 'Compliance' },
      { key: 'topic:automation', label: 'Automation' },
    ],
  },
  {
    id: 'new-relic-qe-okr-dashboard',
    slug: 'new-relic-qe-okr-dashboard',
    title: 'New Relic QE OKR - Dashboard',
    owner: 'rob1nalex',
    summary: 'New Relic is an observability platform which helps you bring in data from any digital source.',
    problem: 'Relying on multiple disconnected tools for logs, metrics, and traces slows down the incident triage process.',
    solution: 'New Relic provides a unified observability platform that consolidates logs, metrics, and traces, enabling faster triage, real-time insights, and proactive incident response across our software systems.',
    techStack: ['New Relic', 'NRQL', 'Java', 'Apache HTTP Client'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'New Relic Integration Public Document', src: '/assets/new-relic-qe-okr-dashboard/pdfs/New Relic Integration Public Document.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'New Relic Integration - Technical Guide - Internal Document', src: '/assets/new-relic-qe-okr-dashboard/pdfs/New Relic Integration - Technical Guide - Internal Document.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'QE Dashboards', src: '/assets/new-relic-qe-okr-dashboard/pdfs/QE Dashboards.pdf', sensitivity: 'internal' },
    ],
    links: [
      { label: 'Unified Management Dashboard', url: 'https://one.newrelic.com/dashboards/detail/MTUxOTA5OHxWSVp8REFTSEJPQVJEfGRhOjI1NzQ5Mjg?state=936eaf62-c3ba-0c02-3f1e-09b7335448af', sensitivity: 'internal' },
      { label: 'Unified User Dashboard', url: 'https://one.newrelic.com/dashboards/detail/MTUxOTA5OHxWSVp8REFTSEJPQVJEfGRhOjI2MDg0NTk?state=8cc5cfad-1b03-7934-ba42-8496260c9030', sensitivity: 'internal' },
    ],
    tags: [
      { key: 'topic:observability', label: 'Observability' },
      { key: 'platform:multi', label: 'Multi-Platform' },
    ],
  },
  {
    id: 'report-portal',
    slug: 'report-portal',
    title: 'Report Portal',
    owner: 'JuneyJestin',
    summary: 'ReportPortal is a TestOps service, that provides increased capabilities to speed up results analysis and reporting through the use of built-in analytic features.',
    problem: 'Traditional test reporting workflows are slow, fragmented, and lack actionable insights, making it difficult to analyze results efficiently.',
    solution: 'ReportPortal streamlines test result analysis by centralizing reporting and leveraging built-in analytics to identify flaky tests, accelerate triage, and improve release confidence.',
    techStack: ['Java', 'TypeScript', 'REST API', 'React'],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [],
    links: [
      { label: 'Report Portal', url: 'https://paramount.atlassian.net/wiki/spaces/DEV/pages/301334529/Report+Portal', sensitivity: 'internal' },
      { label: 'Report Portal Training Video', url: 'https://viacom.sharepoint.com/:v:/s/VIA-Digital-QAConnectedTV/EZjSHbRIFqtHs9mxEhwleiABLmih2s2xu4cBSyfE3a_gXA?e=fnjBxC', sensitivity: 'internal' },
      { label: 'Report Portal Configuration', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/302417282/Report+Portal+-+Configuration', sensitivity: 'internal' },
      { label: 'Report Portal Presentation PDF', url: 'https://viacom.sharepoint.com/:b:/s/VIA-Digital-QAConnectedTV/EWsMghRiwbFAkF15Ubog8p8B9TaSr_F69mX8TRvzLjjmEg?e=z0AfKI', sensitivity: 'internal' },
      { label: 'Report Portal Docs', url: 'https://reportportal.io/docs/', sensitivity: 'public' },
    ],
    tags: [
      { key: 'topic:analytics', label: 'Analytics' },
      { key: 'topic:reporting', label: 'Reporting' },
    ],
  },
  {
    id: 'npaw-integration-testing',
    slug: 'npaw-integration-testing',
    title: 'NPAW Integration and Testing',
    owner: 'rostialpin',
    summary: '',
    problem: '',
    solution: '',
    techStack: [],
    metrics: [],
    screenshots: [],
    status: 'draft',
    attachments: [],
    links: [],
  },
  {
    id: 'data-observability',
    slug: 'data-observability',
    title: 'Data Observability for QA - Streaming Insights & Test Intelligence',
    heroImage: '/assets/data-observability/hero/d0_hero.png',
    owner: 'rostialpin',
    summary: 'From reactive testing to predictive quality: Observability-driven QA that detects risks before deployment. Initiative to slash test execution 50-70%, compress bug identification from days to minutes, and improve quality through intelligent test selection powered by real-time telemetry.',
    problem: 'QA operates at massive scale: thousands of automated tests every two weeks across real devices, multiple clouds, and all platforms (Web, WCTV, Roku, Apple TV, iOS, Android). Teams are constantly maintaining existing suites, developing new tests, and validating releases—all racing against tight deadlines. The reactive posture causes overload: engineers spend days triaging failures and manually reproducing issues. When bugs slip to production, root-cause analysis stretches from days into weeks. Without real-time observability into data flows and test impact, we firefight instead of preventing fires—expensive cloud costs, high maintenance overhead, and late-detected critical issues erode user trust.',
    solution: 'Data Observability flips the script: instrument services and pipelines with OpenTelemetry to emit rich telemetry (logs, metrics, traces) in real time. Signals flow through Kafka for streaming ingestion, land in BigQuery via dbt for analysis, and feed a test impact correlation engine. By mapping telemetry to historical coverage, we predict which tests catch regressions for each code change—enabling selective execution that cuts runs 50-70% while maintaining defect detection. Correlated traces accelerate bug triage from days to minutes. New Relic dashboards provide real-time error budgets and deployment risk scoring. Built on open standards (OpenTelemetry, Kafka, dbt), scalable, future-proof, and designed to reduce QA toil while improving quality. Currently in Q4 2025 preparing PoC and executive proposal to secure pilot funding.',
    techStack: ['OpenTelemetry', 'Kafka', 'Snowflake', 'Monte Carlo', 'dbt', 'BigQuery', 'New Relic', 'Python', 'TypeScript', 'Playwright'],
    metrics: [
      { label: 'Test Execution Reduction', value: '50-70%', improvement: 'Selective execution via observability-driven test impact analysis', impact: 'Projected: Lower cloud costs, faster CI/CD cycles' },
      { label: 'Bug Identification Time', value: 'Minutes (vs. Days/Weeks)', improvement: 'Real-time trace/metric correlation vs. manual log hunting', impact: 'Projected: Faster MTTR, fewer emergency patches' },
      { label: 'Production Issue Detection', value: 'Earlier (Pre-Deployment)', improvement: 'Shift-left defect detection via continuous observability signals', impact: 'Projected: Reduced customer-facing incidents, predictable releases' },
      { label: 'QA Team Capacity Freed', value: '30-40%', improvement: 'Reduced maintenance overhead and faster triage', impact: 'Projected: More time for feature work and innovation' },
      { label: 'Cost Savings', value: 'Significant (TBD)', improvement: '50-70% fewer test runs + faster resolution', impact: 'Projected: Direct cloud savings + productivity gains (to be validated in pilot)' }
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      // PDFs (public-safe only)
      { kind: 'pdf', title: 'Research: From POM to Observability-driven QA', src: '/assets/data-observability/pdfs/RESEARCH_From_POM_to_Observability_driven_QA.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'From POM to Observability-Driven QA (enhanced)', src: '/assets/data-observability/pdfs/From_POM_to_Observability_Driven_QA_enhanced.pdf', sensitivity: 'public' },
      { kind: 'pdf', title: 'AI-Powered QA Transformation (Enterprise AI/ML)', src: '/assets/data-observability/pdfs/AI_Powered_QA_Transformation_Enterprise_AI_ML_Excellence.pdf', sensitivity: 'public' },
      // Recording (internal)
      { kind: 'video', title: 'Eden Observability Dashboard (internal)', src: 'https://viacom.sharepoint.com/:v:/r/sites/VIA-Digital-QAConnectedTV/Shared%20Documents/Unified/Presentations/Artifacts/Eden_Observability_Dashboard.mp4?csf=1&web=1&e=MgxqK7', sensitivity: 'internal' }
    ],
    links: [
      { label: 'New Relic Dashboard (internal)', url: 'https://one.newrelic.com/dashboards/detail/MTUxOTA5OHxWSVp8REFTSEJPQVJEfGRhOjExMjc3OTQ2?filters=%28name%20LIKE%20%27BET%2B%20Metrics%27%20OR%20id%20%3D%20%27BET%2B%20Metrics%27%20OR%20domainId%20%3D%20%27BET%2B%20Metrics%27%29&state=c64380e3-2883-5f28-79d9-70cf4d36fa84', sensitivity: 'internal' }
    ],
    tags: [
      { key: 'platform:multi', label: 'Multi-Platform' },
      { key: 'topic:observability', label: 'Observability' },
      { key: 'topic:ai-ml', label: 'AI/ML' },
      { key: 'topic:automation', label: 'Automation' },
      { key: 'topic:testing', label: 'Testing' },
      { key: 'topic:analytics', label: 'Analytics' }
    ]
  },
  {
    id: 'config-comparison',
    slug: 'config-comparison',
    title: 'Config Comparison',
    owner: 'anilbvi',
    summary: 'Automated configuration validation system that proactively detects and prevents configuration discrepancies across multiple platforms and brands before production deployment, achieving zero configuration-related production issues through fast validation and comprehensive change detection.',
    problem: 'Configuration discrepancies were causing critical application issues in production that were never detected in QA environments due to environment-specific settings. Manual configuration validation was time-consuming, error-prone, and couldn\'t scale across multiple platforms (Android, iOS, Apple TV, Android TV, Fire TV, Roku, Web Connected TVs) and brands. Teams lacked visibility into configuration changes between releases, leading to unexpected production failures and lengthy incident resolution times.',
    solution: 'Implemented comprehensive automated configuration validation using dual approaches: (1) UI-Based validation - launches applications and captures actual configuration from proxy logs during app load, then validates against expected baselines; (2) API-Based validation - directly fetches configuration from Neutron API endpoints for instant validation without device deployment. The system maintains baselined expected configurations, compares them against actual values using configurable match types (exact, regex, optional), and generates detailed comparison reports. Integrated into CI/CD pipelines for continuous validation, with automated email notifications highlighting only configuration changes (not full configs) for efficient review. Supports environment comparison (RC vs Production) with visual dashboards and historical tracking.',
    techStack: ['Java', 'Apache HTTP Client', 'TestNG', 'New Relic', 'Synergy Platform', 'Neutron API', 'AWS S3'],
    metrics: [
      { label: 'Production Config Issues', value: '0', improvement: 'Eliminated all configuration-related production issues', impact: 'Zero config-related incidents and improved release confidence' },
      { label: 'Validation Speed', value: 'Seconds', improvement: 'Configuration validation completed in seconds vs hours of manual checks', impact: 'Faster feedback cycles and accelerated release velocity' },
      { label: 'Change Detection', value: '100%', improvement: 'Detects all configuration changes from last release', impact: 'Complete visibility and Dev approval before deployment' },
      { label: 'Platform Coverage', value: '12+ Platforms', improvement: 'Validates across Android, iOS, Apple TV, Android TV, Fire TV, Roku, and 6 WCTV platforms', impact: 'Consistent configuration quality across entire platform ecosystem' }
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'Configuration Validation Automation', src: '/assets/config-comparison/pdfs/Configuration Validation Automation.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Config Comparison Internal Document', src: '/assets/config-comparison/pdfs/App Config Test - Technical Implementation Guide - Internal.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Config Comparison Public Document', src: '/assets/config-comparison/pdfs/App Config Test - User Guide - Public.pdf', sensitivity: 'public' },
      { label: 'Github Application Config Test', url: 'https://github.com/viacomcbs/mqe-unified-oao-tests/blob/master/mqe-unified-platform-brand-tests/src/test/java/com/viacom/unified/tests/application/AppConfigTest.java', sensitivity: 'internal' },
    ],
    links: [
      { label: 'WCTV Config Report Generation Training Video', url: 'https://viacom.sharepoint.com/:v:/r/sites/VIA-Digital-QAConnectedTV/Shared%20Documents/Unified/CTV-Training/WCTV/20240125%20WCTV%20Config%20Report%20Generation%20for%20RC.mp4?csf=1&web=1&e=qiG0Sb', sensitivity: 'internal' },
      { label: 'Apple and Android (TV & Mobile) Config Validation and Process', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/49653379/Apple+and+Android+TV+Mobile+Config+Validation+and+Process', sensitivity: 'internal' },
      { label: 'Roku Config Validation and Process', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/49657193/Roku+Config+Validation+and+Process', sensitivity: 'internal' },
    ],
    tags: [
      { key: 'platform:wctv', label: 'WCTV' },
      { key: 'topic:automation', label: 'Automation' },
      { key: 'topic:validation', label: 'Validation' },
    ],
  },
];


