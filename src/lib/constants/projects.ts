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
    heroImage: '/assets/unified-test-case-optimization/hero/test_optimization_hero.svg',
    owner: 'rob1nalex',
    summary: 'Foundation initiative that enabled the Unified Test Automation Framework by designing platform-neutral and app-neutral test case structures. Created a collaborative maintenance process where test cases are shared across all platform teams (11-13 applications on 8+ platforms), allowing one team to create or update tests that all other teams can reuse for free. Reduced redundant test cases by 30% and execution time by 60% through flow optimization, generalized steps, and cross-team collaboration with a rigorous review and approval process.',
    problem: 'Before the unified automation framework could work, teams faced fundamental test case structure challenges across multiple similar applications on different platforms (Apple TV, iOS, Android Mobile/Tablet, Android TV, Fire TV, Roku, WCTV, Web). Test cases were not neutral - they were tightly coupled to specific apps and platforms, making reuse impossible. Each platform team maintained redundant test cases with repeated test flows and steps that differed by only one or two variations. The maintenance burden was crushing: constant updates, bug fixes, and new requirements meant existing tests quickly became outdated or partially changed. Without coordination, teams risked creating duplicate tests as they could not easily determine what already existed across other platform teams. The fragmentation made it difficult to avoid inconsistencies and duplication, and teams had no efficient way to share test improvements across platforms.',
    solution: 'Designed and implemented a revolutionary test case structure built on platform-neutrality and app-neutrality, creating the foundation that later enabled the Unified Test Automation Framework to achieve 90% code reuse. Implemented a systematic 5-phase approach: (1) Reviewed test cases across all projects to identify redundancies, (2) Created optimized regression scenarios with streamlined flows, (3) Added generalized steps that could be mapped to various brands and platforms, (4) Conducted dry-runs and execution optimization across brands with the Run Team, and (5) Established regular maintenance through a rigorous review and approval process. The key innovation was the collaborative maintenance model: when someone from one platform team creates or updates a test, all other teams can reuse it for free without duplicating effort. To ensure quality and cross-platform applicability, every test change requires review and approval from a minimum of 3 approvers from different platforms, guaranteeing that tests work universally. This approach also enabled transitioning Progression/Feature tests into Regression tests for better suite optimization, and eliminated the constant risk of duplication by creating a single source of truth for test cases across all platforms.',
    techStack: ['TestRail', 'JIRA'],
    metrics: [
      { label: 'Test Reduction', value: '30%', improvement: 'Optimization on flows and validation', impact: 'Reduced maintenance overhead and faster test suite updates' },
      { label: 'Execution Time Reduction', value: '60%', improvement: 'Efficient distribution across brands and platforms', impact: 'Faster feedback cycles and increased testing capacity' },
      { label: 'Test Suite Optimization', value: 'Progressive to Regression', improvement: 'Transitioned feature tests into regression suite', impact: 'Better test coverage and reusability' },
      { label: 'Cross-Team Collaboration', value: '3+ Approvers', improvement: 'Minimum 3 approvers from different platforms ensure universal test quality', impact: 'One team creates/updates, all teams reuse for free - eliminates duplicate effort' },
      { label: 'Foundation for Automation', value: 'Enabled 90% Code Reuse', improvement: 'Platform-neutral structure enabled the Unified Automation Framework', impact: 'Created the foundation that later allowed 90%+ code reuse across all platforms' },
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
    heroImage: '/assets/unified-test-automation-framework/hero/unified_framework_hero.png',
    owner: 'rob1nalex',
    summary: 'Revolutionary unified automation framework that enables 90%+ code reuse across 11-13 applications and all CTV/mobile platforms (Apple TV, iOS, Android Mobile/Tablet, Android TV, Fire TV, Roku, WCTV, Web). Build tests once for one platform, then adapt to other platforms with just 10% additional effort, dramatically reducing development time and maintenance burden while ensuring consistent quality across the entire platform ecosystem.',
    problem: 'The team supports QA for all CTV and mobile platforms (Apple TV, iOS, Android phones/tablets, Android TV, Fire TV, Roku, WCTV, Web), testing 11-13 applications across each platform. Using traditional Selenium-Appium and company frameworks, each platform required completely separate test implementations due to platform-specific automation differences (element locators, navigation patterns, input methods like remote control vs clicks/taps). This created massive code duplication - essentially writing the same tests 6+ times for each application across platforms. The maintenance burden was enormous, and developing new test coverage meant multiplying effort across all platforms, severely limiting testing capacity and release velocity.',
    solution: 'Built a sophisticated unified automation framework that abstracts platform differences while maximizing code reuse across both applications and platforms. The framework uses intelligent adapters and platform-specific modules to handle differences in element locators, navigation patterns (mobile/tablet vs TV), and input methods (remote control vs clicks/taps). Test logic is written once and shared across platforms, with only small configuration tweaks needed for platform specifics. The key breakthrough: develop tests for one platform (e.g., Roku), then adapt to any other platform with only 10% additional effort. This approach dramatically reduces lines of code, slashes maintenance burden, and enables rapid test development - what used to take weeks across 6+ platforms now takes days.',
    techStack: ['TypeScript', 'Java', 'Playwright', 'Appium', 'Selenium', 'Synergy Platform', 'Platform-Specific Adapters', 'Smart Abstractions'],
    metrics: [
      { label: 'Development Efficiency', value: '90%', improvement: 'Build for one platform, adapt to others with only 10% additional effort', impact: 'What took weeks across 6 platforms now takes days' },
      { label: 'Code Reuse', value: '90%+', improvement: 'Shared test logic across all CTV and mobile platforms', impact: 'Eliminated massive code duplication - no longer writing same tests 5-6 times' },
      { label: 'Application Coverage', value: '11-13 Apps', improvement: 'Single framework supports entire application portfolio across all platforms', impact: 'Unified testing approach across complete product ecosystem' },
      { label: 'Platform Support', value: '8+ Platforms', improvement: 'Apple TV, iOS, Android Mobile/Tablet, Android TV, Fire TV, Roku, WCTV, Web - all from one codebase', impact: 'Complete platform ecosystem coverage with minimal platform-specific code' },
      { label: 'Maintenance Burden', value: 'Slashed', improvement: 'Fix once, deploy everywhere - no more platform-by-platform updates', impact: 'Dramatically reduced ongoing maintenance and faster test updates' },
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
    heroImage: '/assets/test-manager-bot-eva/hero/eva_hero.png',
    owner: 'JuneyJestin',
    summary: 'EVA (Enterprise Virtual Assistant) - The company\'s first AI-powered chatbot that unifies knowledge from internal documentation systems (Confluence, JIRA, GitHub) through automated data collection and intelligent RAG (Retrieval Augmented Generation). Built to revolutionize team productivity, EVA assists QA engineers with test creation and duplicate identification, helps clarify requirements across agile processes, and serves as an intelligent knowledge hub for Product Owners and Developers. Features extensive onboarding and training support through a comprehensive recording library, marking one of the first major AI initiatives in the company.',
    problem: 'Development teams faced critical knowledge fragmentation and information retrieval challenges across multiple disconnected systems. QA engineers, Product Owners, and Developers spent excessive time manually searching through Confluence documentation, JIRA tickets, GitHub repositories, and various other internal sources to find answers to common questions. This manual information hunting was especially problematic in agile environments where compiled data from different sources is essential for decision-making. New team members faced steep onboarding curves without centralized access to tribal knowledge, best practices, and training materials. Test creation was inefficient as engineers had to manually verify if similar tests already existed, leading to duplicate test creation and wasted effort. Requirement ambiguities required lengthy back-and-forth conversations to clarify, slowing down sprint velocity. The lack of a unified knowledge assistant meant every team member had to become an expert in navigating multiple systems just to do their daily work.',
    solution: 'Built EVA as an enterprise-grade AI chatbot leveraging RAG (Retrieval Augmented Generation) architecture to create a unified knowledge assistant for the entire engineering organization. EVA automatically collects and indexes data from Confluence, JIRA, GitHub, and other internal systems on a scheduled basis, ensuring the knowledge base stays current without manual intervention. The system uses vector embeddings to understand natural language queries and retrieve relevant information across all connected sources, providing compiled answers that would normally require searching multiple systems. For QA Engineers: EVA assists in creating new tests by understanding requirements and providing templates/examples, identifies duplicate tests in existing storage to prevent redundant work, and helps clarify ambiguous requirements by pulling relevant context from JIRA stories, Confluence specs, and GitHub discussions. For Product Owners and Developers: EVA serves as an intelligent documentation assistant, answering technical questions, retrieving specifications, and providing historical context on features and decisions. For Onboarding and Training: EVA provides instant access to a comprehensive library of training recordings, documentation, and best practices, dramatically accelerating new team member productivity. As one of the company\'s first AI initiatives, EVA demonstrated the transformative potential of LLM-powered tools in enterprise environments, paving the way for broader AI adoption.',
    techStack: ['RAG (Retrieval Augmented Generation)', 'LLM', 'Vector Database', 'Python', 'Confluence API', 'JIRA API', 'TestRail API', 'GitHub API', 'Embeddings'],
    metrics: [
      {
        label: 'Data Source Integration',
        value: '4+ Systems',
        improvement: 'Unified knowledge from Confluence, JIRA, GitHub, and TestRail',
        impact: 'Single AI-powered interface for all internal documentation and project data'
      },
      {
        label: 'User Base Expansion',
        value: 'Multi-Role',
        improvement: 'Adopted by QA Engineers, Product Owners, and Developers',
        impact: 'Cross-functional knowledge assistant serving entire engineering organization'
      },
      {
        label: 'Duplicate Prevention',
        value: 'Automated',
        improvement: 'Identifies existing tests before creation, preventing redundant work',
        impact: 'Reduced test suite bloat and eliminated duplicate test development effort'
      },
      {
        label: 'Onboarding Acceleration',
        value: 'Training Library',
        improvement: 'Instant access to comprehensive recording library and documentation',
        impact: 'Faster new team member ramp-up and reduced onboarding overhead'
      },
      {
        label: 'AI Innovation',
        value: 'First in Company',
        improvement: 'Pioneering AI chatbot demonstrating enterprise LLM capabilities',
        impact: 'Established foundation for company-wide AI adoption and innovation'
      },
    ],
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
    heroImage: '/assets/dart/hero/dart_hero.webp',
    owner: 'rohitmenonv',
    summary: 'Intelligent test selection and optimization system that analyzes code changes and automatically determines which tests to execute, which to skip, and which new tests to create. DART maps test coverage to code at the method level across Android and Roku platforms, reducing regression testing from days to hours while ensuring comprehensive coverage of modified code.',
    problem: 'Running complete test suites for every build was extremely time-consuming and resource-intensive, often taking several days per regression cycle. Teams had no systematic way to determine which tests were actually relevant to code changes, leading to wasted effort testing unchanged functionality. Additionally, there was no automated mechanism to identify test coverage gaps for newly added code, resulting in missed edge cases and inconsistent test coverage across platforms.',
    solution: 'Built DART as an intelligent test selection and optimization system that revolutionizes QA efficiency. For each build, DART collects code coverage data from multiple platforms (Roku, Android), then maps all automated and manual tests to specific classes, methods, and branches. When code changes are detected, DART analyzes the impact and automatically determines: (1) which existing tests must run to cover modified code, (2) which tests can be safely skipped, and (3) which new tests need to be created for uncovered methods. Additionally, DART identifies dead code - classes and methods that are never executed in the final application - enabling developers to clean up outdated code and reduce technical debt. This intelligent approach reduces regression testing from days to hours while maintaining comprehensive coverage and ensuring no critical tests are missed.',
    techStack: ['Ruby', 'RVM', 'GitHub Actions', 'Jenkins', 'New Relic', 'Android SDK', 'Roku SDK', 'BrightScript', 'Coverage Analysis', 'Roku Test Framework', 'Roku Debugger', 'Roku Profiler', 'GitHub API', 'Confluence API', 'JIRA API'],
    metrics: [
      {
        label: 'Time Reduction',
        value: 'Days → Hours',
        improvement: 'Regression testing reduced from several days to just hours per build',
        impact: 'Enables rapid feedback cycles and faster release velocity'
      },
      {
        label: 'Test Optimization',
        value: '47 of 1,200',
        improvement: 'Intelligent selection runs only relevant tests based on code changes',
        impact: 'Saves engineering resources while maintaining comprehensive coverage'
      },
      {
        label: 'Coverage Analysis',
        value: 'Method-Level',
        improvement: 'Maps every test to specific classes, methods, and branches across platforms',
        impact: 'Automatically identifies coverage gaps and suggests new tests for uncovered code'
      },
      {
        label: 'Platform Support',
        value: '2+',
        improvement: 'Currently supports Android and Roku with extensible architecture',
        impact: 'Unified test intelligence across multiple platform architectures'
      },
      {
        label: 'Dead Code Detection',
        value: 'Automated',
        improvement: 'Identifies unused classes and methods never executed in production',
        impact: 'Enables code cleanup, reduces technical debt, and improves maintainability'
      }
    ],
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
    summary: 'Comprehensive video training library that simplifies complex test automation setup across all platforms. Platform-specific guides created by team members based on real experience cover device preparation, proxy configuration, framework dependencies, and test environment setup - enabling new team members to independently configure any platform (WCTV, Web, Roku, Apple TV, iOS, Android, Fire TV) in hours instead of days without requiring expert assistance.',
    problem: 'Setting up test automation for each platform required extensive tribal knowledge and expert assistance. Each platform (WCTV, Web desktop/mobile, Roku, Apple TV/iOS, Android TV/mobile, Fire TV/Amazon mobile) has unique device preparation requirements, platform-specific proxy configurations, framework dependencies, and test environment settings. New team members faced steep learning curves trying to navigate complex setup procedures without documentation. The lack of standardized onboarding materials meant every new engineer needed hands-on help from senior teammates, creating knowledge transfer bottlenecks and delaying productivity. Without guided resources, setup could take days or weeks of trial-and-error, and inconsistent configurations led to test environment issues.',
    solution: 'Created a comprehensive video training library with step-by-step setup guides for every platform, built from real team member experience. Each platform has dedicated video tutorials covering device preparation, proxy configuration for automation testing, framework installation and dependencies, test environment setup, and troubleshooting common issues. The guides capture tribal knowledge and best practices from experienced team members, providing new engineers with self-service learning resources. Videos show actual setup procedures with visual guidance, eliminating the need for constant expert assistance. New team members can now independently configure any platform by following the relevant video guide, reducing onboarding time from days/weeks to hours and freeing senior engineers from repetitive knowledge transfer tasks. The library ensures consistent, correct setup across the team and serves as permanent knowledge preservation even as team composition changes.',
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
    summary: 'Automated COPPA compliance validation system that ensures Kids content applications meet federal law requirements by automatically scanning API calls, validating against legal-approved lists, and generating Tech-Scan compliance reports - transforming hours/days of manual legal validation into minutes of fully automated compliance checking.',
    problem: 'Federal COPPA (Children\'s Online Privacy Protection Act) compliance for Kids content applications required extensive manual validation of every API call to ensure it was legally approved for children\'s apps. QA teams had to manually extract all application calls, compare them against legal approval lists, identify unapproved calls, coordinate with legal teams for review, wait for approvals, update tracking sheets, and generate compliance reports. This manual process took hours or days, created bottlenecks in release cycles, involved substantial PMO coordination overhead, and risked human error in identifying non-compliant calls that could result in federal law violations.',
    solution: 'Built Tech-Scan, a fully automated COPPA compliance validation system that scans Kids content applications and validates all API calls against legal-approved lists without manual intervention. The system automatically extracts all application calls using HAR file analysis, matches them against pre-approved legal lists stored in secured Google Sheets, flags any unapproved or unknown calls, generates comprehensive Tech-Scan compliance reports, sends automated Slack notifications to legal and PMO teams for flagged calls, and maintains audit trails for federal compliance. Enhanced with RegEx pattern matching for call grouping, quarterly approval cycles for long-term permissions, improved error handling, and OneDrive integration. The automation ensures 100% compliance checking happens in minutes instead of hours, eliminates manual validation errors, and provides consistent federal law compliance across all Kids platform releases.',
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
    heroImage: '/assets/new-relic-qe-okr-dashboard/hero/qe_dashboard_hero.svg',
    owner: 'rob1nalex',
    summary: 'Comprehensive QA intelligence dashboards that aggregate data from multiple sources (TestRail, automated test reports, JIRA, Report Portal) into unified New Relic dashboards, providing real-time visibility into testing progress, smart bug detection, failure pattern analysis, and quality metrics across all platform teams. Two dashboard views: Management (whole team comparison) and Platform-Specific (detailed team insights with AI-powered bug matching).',
    problem: 'QA teams lacked unified visibility into testing progress and quality metrics across multiple platforms and tools. Critical data was scattered across disconnected systems: TestRail for test management, JIRA for bug tracking, Report Portal for test execution results, and various CI/CD pipelines for automation reports. This fragmentation made it impossible to get a comprehensive view of team progress, compare performance across platforms, identify patterns in test failures, detect flaky tests, or make data-driven decisions about testing priorities. Leadership had no single source of truth for QA metrics, and teams spent significant time manually aggregating data from multiple sources to answer basic questions about test coverage and quality.',
    solution: 'Built two comprehensive New Relic dashboards that integrate data from all QA tools and provide actionable intelligence. The system pulls data from TestRail (test management), automated test reports, JIRA (bug tracking), and Report Portal (test execution analytics) into unified visualizations. Dashboard 1 - Unified Management Dashboard: Shows whole team progress with cross-team comparisons of bugs found, automated tests developed, pending tests, manual-only tests, all presented in comparative charts for leadership visibility. Dashboard 2 - Platform-Specific User Dashboard: Provides detailed team insights based on selected platform and app, including issues per pipeline (smoke, regression), pass rates, error descriptions for failed tests with pattern detection to identify multiple tests with similar errors, smart bug detection using Report Portal AI to match new test failures against patterns from previously found bugs, regression completion tracking showing remaining tests to execute, infrastructure failure classification (network issues, Synergy platform issues vs. actual test failures), and flaky test identification. The platform-specific dashboard enables teams to quickly diagnose issues, identify known bugs automatically, and focus efforts on real problems rather than infrastructure noise.',
    techStack: ['New Relic', 'NRQL', 'TestRail API', 'JIRA API', 'Report Portal API', 'Java', 'Apache HTTP Client'],
    metrics: [
      {
        label: 'Data Source Integration',
        value: '4 Systems',
        improvement: 'Unified data from TestRail, JIRA, Report Portal, and automation pipelines',
        impact: 'Single source of truth for all QA metrics and testing progress'
      },
      {
        label: 'Smart Bug Detection',
        value: 'AI-Powered',
        improvement: 'Report Portal patterns automatically match new failures to known bugs',
        impact: 'Eliminates duplicate bug reports and accelerates failure triage'
      },
      {
        label: 'Platform Coverage',
        value: 'All Teams',
        improvement: 'Dashboards support all platform teams with app-specific views',
        impact: 'Each team gets tailored insights for their platform and applications'
      },
      {
        label: 'Failure Classification',
        value: 'Automated',
        improvement: 'Separates test failures from infrastructure issues (network, Synergy)',
        impact: 'Teams focus on real test failures, not environmental noise'
      },
      {
        label: 'Test Progress Visibility',
        value: 'Real-Time',
        improvement: 'Live tracking of regression completion and remaining test execution',
        impact: 'Clear visibility into release readiness and testing bottlenecks'
      },
    ],
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
    heroImage: '/assets/report-portal/hero/report_portal_hero.svg',
    owner: 'dhanyamathew',
    summary: 'AI-powered TestOps platform that transforms tedious manual test result analysis into intelligent, automated insights. Using machine learning, Report Portal automatically categorizes test failures, identifies flaky tests, detects patterns across historical data, and provides unified dashboards for comprehensive QA metrics - dramatically reducing triage time from hours to minutes.',
    problem: 'Analyzing scheduled automated test results is extremely tedious and time-consuming. QA engineers must manually investigate every failure to determine root causes: Is it test maintenance? System/network failure? Synergy framework issues? Content-related? Application bug? Is this a known bug with an open ticket? Is it a recurring issue from a previously closed bug? Is it similar to other historical issues? Beyond triage, teams need unified dashboards showing stats on failed tests, new bugs, issues per feature, flaky test identification, and grouping failures by common error messages to prioritize maintenance - all of which consumed countless hours of manual effort.',
    solution: 'Implemented Report Portal as an ML-powered intelligent test analysis platform that automates the entire triage process. The system automatically categorizes failures by root cause (test maintenance, system issues, application bugs, content problems), matches failures against known bugs and historical patterns, identifies recurring issues, and flags similar failures based on error signatures. Built-in analytics detect flaky tests, group failures by common error messages for efficient prioritization, and generate comprehensive dashboards with metrics on test health, bug trends, and feature quality. QA engineers simply review and train the ML model periodically, while Report Portal handles the heavy lifting of analysis, pattern recognition, and intelligent categorization - transforming hours of manual work into minutes of focused review.',
    techStack: ['Java', 'TypeScript', 'REST API', 'React'],
    metrics: [
      {
        label: 'Centralized Test Reporting',
        value: 'Unified Dashboard',
        improvement: 'Aggregates test results from multiple frameworks and tools into single view',
        impact: 'Eliminates context switching between systems, reduces time spent gathering test data'
      },
      {
        label: 'Flaky Test Detection',
        value: 'Automated Identification',
        improvement: 'Built-in analytics automatically identify and flag unstable tests',
        impact: 'Teams can prioritize fixing unreliable tests, reducing false positives and wasted investigation time'
      },
      {
        label: 'Test Result Analysis Speed',
        value: 'Accelerated Triage',
        improvement: 'Advanced filtering, search, and analytics reduce manual analysis time',
        impact: 'Engineers spend less time digging through logs and more time fixing issues'
      },
      {
        label: 'Historical Trend Analysis',
        value: 'Pattern Recognition',
        improvement: 'Track test execution trends, failure patterns, and quality metrics over time',
        impact: 'Data-driven decisions on test stability, coverage gaps, and release readiness'
      },
      {
        label: 'Release Confidence',
        value: 'Improved Visibility',
        improvement: 'Real-time dashboards show test execution status and quality metrics',
        impact: 'Better release decisions with clear visibility into test coverage and failure rates'
      },
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'Report Portal', src: '/assets/report-portal/pdfs/Report Portal.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Report Portal - User Guide', src: '/assets/report-portal/pdfs/Report Portal - User Guide.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Report Portal - Overview & Capabilities', src: '/assets/report-portal/pdfs/Report Portal - Overview & Capabilities.pdf', sensitivity: 'internal' },
    ],
    links: [
      { label: 'What is Report Portal? - Video', url: 'https://youtu.be/Xci19TAiO50', sensitivity: 'public' },
      { label: 'Report Portal Training Video', url: 'https://viacom.sharepoint.com/:v:/s/VIA-Digital-QAConnectedTV/EZjSHbRIFqtHs9mxEhwleiABLmih2s2xu4cBSyfE3a_gXA?e=fnjBxC', sensitivity: 'internal' },
      { label: 'Report Portal Tutorial', url: 'https://reportportal.io/docs/tutorial/', sensitivity: 'public' },
      { label: 'Report Portal Docs', url: 'https://reportportal.io/docs/', sensitivity: 'public' },
    ],
    tags: [
      { key: 'topic:analytics', label: 'Analytics' },
      { key: 'topic:reporting', label: 'Reporting' }, 
      { key: 'topic:testing', label: 'Testing' },
      { key: 'platform:multi', label: 'Multi-Platform' },
      { key: 'topic:automation', label: 'Automation' },
    ],
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
    heroImage: '/assets/config-comparison/hero/cc_hero.png',
    owner: 'anilbvi',
    summary: 'Automated configuration validation system that proactively detects and prevents configuration discrepancies across multiple platforms and brands before production deployment, achieving zero configuration-related production issues through fast validation and comprehensive change detection.',
    problem: "Configuration discrepancies were causing critical application issues in production that were never detected in QA environments due to environment-specific settings. Manual configuration validation was time-consuming, error-prone, and couldn't scale across multiple platforms (Android, iOS, Apple TV, Android TV, Fire TV, Roku, Web Connected TVs) and brands. Teams lacked visibility into configuration changes between releases, leading to unexpected production failures and lengthy incident resolution times.",
    solution: 'Implemented comprehensive automated configuration validation using dual approaches: (1) UI-Based validation - launches applications and captures actual configuration from proxy logs during app load, then validates against expected baselines; (2) API-Based validation - directly fetches configuration from Neutron API endpoints for instant validation without device deployment. The system maintains baselined expected configurations, compares them against actual values using configurable match types (exact, regex, optional), and generates detailed comparison reports. Integrated into CI/CD pipelines for continuous validation, with automated email notifications highlighting only configuration changes (not full configs) for efficient review. Supports environment comparison (RC vs Production) with visual dashboards and historical tracking.',
    techStack: ['Java', 'Apache HTTP Client', 'TestNG', 'New Relic', 'Synergy Platform', 'Neutron API', 'AWS S3'],
    metrics: [
      { label: 'Production Config Issues', value: '0', improvement: 'Eliminated all configuration-related production issues', impact: 'Zero config-related incidents and improved release confidence' },
      { label: 'Validation Speed', value: '20s', improvement: 'Configuration validation completed in 20 seconds vs hours of manual checks', impact: 'Faster feedback cycles and accelerated release velocity' },
      { label: 'Change Detection', value: '100%', improvement: 'Detects all configuration changes from last release', impact: 'Complete visibility and Dev approval before deployment' },
      { label: 'Platform Coverage', value: '12+ Platforms', improvement: 'Validates across Android, iOS, Apple TV, Android TV, Fire TV, Roku, and 6 WCTV platforms', impact: 'Consistent configuration quality across entire platform ecosystem' }
    ],
    screenshots: [],
    status: 'draft',
    attachments: [
      { kind: 'pdf', title: 'Configuration Validation Automation', src: '/assets/config-comparison/pdfs/Configuration Validation Automation.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Config Comparison Internal Document', src: '/assets/config-comparison/pdfs/App Config Test - Technical Implementation Guide - Internal.pdf', sensitivity: 'internal' },
      { kind: 'pdf', title: 'Config Comparison Public Document', src: '/assets/config-comparison/pdfs/App Config Test - User Guide - Public.pdf', sensitivity: 'public' },
      { kind: 'doc', title: 'WCTV Config Comparison Report', src: '/assets/config-comparison/spreadsheets/WCTV-ConfigValidation-ProdVsRc-20251023.xlsx', sensitivity: 'internal' },
    ],
    links: [
      { label: 'WCTV Config Report Generation Training Video', url: 'https://viacom.sharepoint.com/:v:/r/sites/VIA-Digital-QAConnectedTV/Shared%20Documents/Unified/CTV-Training/WCTV/20240125%20WCTV%20Config%20Report%20Generation%20for%20RC.mp4?csf=1&web=1&e=qiG0Sb', sensitivity: 'internal' },
      { label: 'Apple and Android (TV & Mobile) Config Validation and Process', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/49653379/Apple+and+Android+TV+Mobile+Config+Validation+and+Process', sensitivity: 'internal' },
      { label: 'Roku Config Validation and Process', url: 'https://paramount.atlassian.net/wiki/spaces/VCD/pages/49657193/Roku+Config+Validation+and+Process', sensitivity: 'internal' },
      { label: 'Github Application Config Test', url: 'https://github.com/viacomcbs/mqe-unified-oao-tests/blob/master/mqe-unified-platform-brand-tests/src/test/java/com/viacom/unified/tests/application/AppConfigTest.java', sensitivity: 'internal' },
    ],
    tags: [
      { key: 'platform:wctv', label: 'WCTV' },
      { key: 'topic:automation', label: 'Automation' },
      { key: 'topic:validation', label: 'Validation' },
    ],
  },
];


