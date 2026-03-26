export type ThemeMode = 'light' | 'night'

export type SectionId =
  | 'hero'
  | 'impact'
  | 'skills'
  | 'projects'
  | 'demos'
  | 'terminal'
  | 'about'
  | 'contact'

type HeroStat = {
  value: string
  label: string
  detail: string
}

type Skill = {
  name: string
  context: string
  level: number
}

type SkillGroup = {
  title: string
  kicker: string
  description: string
  skills: Skill[]
}

type ProjectSignal = {
  label: string
  value: string
  level: number
}

type CaseStudy = {
  problem: string
  approach: string
  challenges: string[]
  learnings: string[]
}

type ArchitectureLayer = {
  title: string
  nodes: string[]
}

type DemoCard = {
  previewUrl: string
  tagline: string
  credentials: string
}

export type Project = {
  id: string
  title: string
  category: string
  statement: string
  description: string
  tech: string[]
  filters: string[]
  features: string[]
  signals: ProjectSignal[]
  links: {
    live: string
    github: string
  }
  caseStudy: CaseStudy
  architecture: {
    overview: string
    layers: ArchitectureLayer[]
    notes: string[]
  }
  demo: DemoCard
}

export const siteMetadata = {
  title: 'Arjun Sethi | MERN Stack Developer',
  description:
    'MERN stack developer portfolio focused on fast React interfaces, resilient Node APIs, and strong case-study driven storytelling.',
  siteUrl: 'https://your-portfolio.vercel.app',
}

export const sectionLinks: { id: SectionId; label: string }[] = [
  { id: 'hero', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'demos', label: 'Demos' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  brand: 'DevGrid',
  name: 'Arjun Sethi',
  role: 'MERN Stack Developer',
  location: 'Bengaluru, India',
  email: 'hello@arjunsethi.dev',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  resumeUrl: '/Arjun-Sethi-Resume.pdf',
  heroHeadline:
    'I build React interfaces and Node APIs that make operational products feel faster, cleaner, and more obvious.',
  heroBody:
    'The goal is not just shipping screens. It is removing friction from real workflows, keeping performance tight, and turning complex state into interfaces people can trust under pressure.',
  valueStatement:
    'Strongest work: dashboards, internal tools, and full-stack product flows where UX clarity matters as much as database queries and API contracts.',
  heroStats: [
    {
      value: '08+',
      label: 'Projects shipped',
      detail: 'From workflow dashboards to internal documentation systems.',
    },
    {
      value: '95+',
      label: 'Lighthouse target',
      detail: 'Performance-first frontends with code splitting and optimized assets.',
    },
    {
      value: '12',
      label: 'Real-world flows',
      detail: 'Auth, search, filters, dashboards, forms, and background sync.',
    },
  ] satisfies HeroStat[],
  heroSignals: [
    {
      label: 'Build focus',
      value: 'Product engineering, internal tooling, performance',
    },
    {
      label: 'Career direction',
      value: 'Product companies and high-scale systems',
    },
  ],
}

export const impactStats = [
  {
    value: '08',
    label: 'Projects built',
    description: 'A focused set of product-style builds with real constraints, not cloned landing pages.',
  },
  {
    value: '14',
    label: 'Technical challenges solved',
    description: 'Realtime sync, large-table filtering, async forms, role-based UI, caching, and search.',
  },
  {
    value: '18',
    label: 'Technologies used in context',
    description: 'React, Vite, Tailwind, Node.js, Express, MongoDB, Socket.IO, deployment tooling.',
  },
]

export const impactScenarios = [
  {
    title: 'Realtime operational views',
    description:
      'Built interfaces that surface live status changes without sacrificing readability or interaction speed.',
    detail: 'Web sockets, optimistic UI, activity streams',
  },
  {
    title: 'Backend flows with guardrails',
    description:
      'Designed APIs with validation, rate-conscious persistence, and cleaner boundaries between client and server logic.',
    detail: 'Express, schema validation, structured errors',
  },
  {
    title: 'Performance as a product feature',
    description:
      'Kept UIs responsive by reducing rendering cost, splitting heavy chunks, and trimming visual overhead.',
    detail: 'Lazy sections, image strategy, animation restraint',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    kicker: 'Interface Layer',
    description: 'UI systems designed for clarity, motion restraint, and performance.',
    skills: [
      {
        name: 'React + Vite',
        context: 'Used in 6 portfolio-grade projects and rapid iteration workflows.',
        level: 94,
      },
      {
        name: 'Tailwind CSS',
        context: 'Used for design systems, responsive layout, and theming without CSS sprawl.',
        level: 92,
      },
      {
        name: 'Framer Motion',
        context: 'Applied to reveal patterns, section transitions, and polished feedback states.',
        level: 82,
      },
      {
        name: 'State and form handling',
        context: 'Used in filter-heavy dashboards, async forms, and interaction-rich UIs.',
        level: 88,
      },
    ],
  },
  {
    title: 'Backend',
    kicker: 'API Layer',
    description: 'Server work centered on clean contracts, validation, and maintainable routes.',
    skills: [
      {
        name: 'Node.js + Express',
        context: 'Used for auth-aware APIs, contact flows, and internal product backends.',
        level: 91,
      },
      {
        name: 'MongoDB',
        context: 'Used for document workflows, search-friendly content, and admin tools.',
        level: 84,
      },
      {
        name: 'REST API design',
        context: 'Shaped endpoints around predictable error handling and frontend-friendly payloads.',
        level: 89,
      },
      {
        name: 'Validation + security basics',
        context: 'Applied through schema validation, structured inputs, and origin-aware API setup.',
        level: 85,
      },
    ],
  },
  {
    title: 'Tools',
    kicker: 'Delivery Stack',
    description: 'Practical tooling for fast shipping and clean handoff.',
    skills: [
      {
        name: 'Git + GitHub',
        context: 'Used for feature branches, scoped changes, and review-friendly history.',
        level: 90,
      },
      {
        name: 'Vercel + Render',
        context: 'Used to split static frontend delivery from backend service deployment.',
        level: 83,
      },
      {
        name: 'Chrome DevTools + Lighthouse',
        context: 'Used to audit layout shifts, long tasks, and bundle weight.',
        level: 86,
      },
      {
        name: 'Postman / API inspection',
        context: 'Used for route verification and contract debugging during integration.',
        level: 80,
      },
    ],
  },
  {
    title: 'Other',
    kicker: 'Engineering Thinking',
    description: 'Cross-cutting skills that matter once the app is more than a tutorial.',
    skills: [
      {
        name: 'Problem framing',
        context: 'Starts from workflow pain points before writing UI or routes.',
        level: 90,
      },
      {
        name: 'Performance budgets',
        context: 'Used to decide what deserves motion, what must load first, and what can wait.',
        level: 84,
      },
      {
        name: 'Accessibility basics',
        context: 'Semantic layout, keyboard-close modals, readable contrast, reduced-motion awareness.',
        level: 82,
      },
      {
        name: 'Deployment readiness',
        context: 'Configured around environment variables, service separation, and clean build steps.',
        level: 86,
      },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'signalstack',
    title: 'SignalStack',
    category: 'Engineering Analytics',
    statement: 'Release and incident visibility for engineering leads.',
    description:
      'A product-style dashboard that brings deploy health, regression signals, and live incident context into one fast operational view.',
    tech: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    filters: ['React', 'Node.js', 'MongoDB', 'Realtime'],
    features: [
      'Live deploy health board with status rollups',
      'Incident timeline with searchable release markers',
      'Ownership views by squad, service, and severity',
      'Saved filters for engineering managers and ICs',
    ],
    signals: [
      { label: 'UI complexity', value: 'High', level: 92 },
      { label: 'Backend depth', value: 'API + realtime', level: 88 },
      { label: 'Product clarity', value: 'Strong', level: 90 },
    ],
    links: {
      live: 'https://signalstack-demo.vercel.app',
      github: 'https://github.com/yourusername/signalstack',
    },
    caseStudy: {
      problem:
        'Engineering teams were splitting incident context across dashboards, alerts, and release notes, which slowed triage during active regressions.',
      approach:
        'I consolidated those signals into a single dashboard with role-based views, meaningful defaults, and small realtime updates instead of constant full refreshes.',
      challenges: [
        'Keeping busy data dense without making the interface noisy.',
        'Balancing live updates with predictable layout and scroll position.',
      ],
      learnings: [
        'Operational UIs need strong visual hierarchy more than extra features.',
        'Partial updates outperform brute-force refetches for both UX and perceived speed.',
      ],
    },
    architecture: {
      overview:
        'A React dashboard consumes an Express API and a lightweight realtime layer. Aggregated data is stored in MongoDB while websocket updates handle targeted activity refreshes.',
      layers: [
        {
          title: 'Client',
          nodes: ['React dashboard', 'Framer Motion transitions', 'Filter and saved view state'],
        },
        {
          title: 'API',
          nodes: ['Express routes', 'Validation middleware', 'Aggregated query handlers'],
        },
        {
          title: 'Data',
          nodes: ['MongoDB collections', 'Incident snapshots', 'Release metadata'],
        },
        {
          title: 'Live layer',
          nodes: ['Socket updates', 'Status broadcasts', 'Optimistic refresh hooks'],
        },
      ],
      notes: [
        'The UI only re-renders changed surfaces instead of refetching the whole dashboard.',
        'Saved filter state keeps engineering managers in their own operational context.',
        'Backend responsibilities stay narrow: validate, aggregate, and stream targeted updates.',
      ],
    },
    demo: {
      previewUrl: '/previews/signalstack.svg',
      tagline: 'Best demo for showing product judgment under noisy operational data.',
      credentials: 'No auth required in demo mode. Use the live filters and release timeline directly.',
    },
  },
  {
    id: 'queuepilot',
    title: 'QueuePilot',
    category: 'Operations Workflow',
    statement: 'Realtime waitlist and service flow management.',
    description:
      'A customer-ops style tool for hospitality teams that manages walk-ins, table readiness, queue movement, and staff visibility from a single responsive interface.',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    filters: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Live waitlist sorting with seating priority rules',
      'Role-aware staff dashboard for hosts and managers',
      'Manual override flows without breaking queue integrity',
      'Compact mobile view for front-of-house usage',
    ],
    signals: [
      { label: 'Workflow depth', value: 'High', level: 88 },
      { label: 'Mobile readiness', value: 'Strong', level: 84 },
      { label: 'State handling', value: 'Advanced', level: 87 },
    ],
    links: {
      live: 'https://queuepilot-demo.vercel.app',
      github: 'https://github.com/yourusername/queuepilot',
    },
    caseStudy: {
      problem:
        'Staff needed a tool that handled a fast-changing queue without turning the interface into a spreadsheet under pressure.',
      approach:
        'I designed the UI around task flow first: add party, update status, seat table, and resolve exceptions with clear visual checkpoints.',
      challenges: [
        'Protecting queue order while still allowing manual intervention.',
        'Keeping tap targets and hierarchy strong on smaller screens.',
      ],
      learnings: [
        'Operations UIs need fewer decisions per screen, not more controls.',
        'Good mobile admin views rely on information compression, not feature cuts.',
      ],
    },
    architecture: {
      overview:
        'QueuePilot uses a React client and Express API with MongoDB persistence. Data models focus on queue status transitions, table state, and audit-friendly updates.',
      layers: [
        {
          title: 'Client',
          nodes: ['Responsive waitlist UI', 'Role-based dashboards', 'Optimistic status changes'],
        },
        {
          title: 'API',
          nodes: ['Queue routes', 'Validation layer', 'Status transition guards'],
        },
        {
          title: 'Data',
          nodes: ['Party records', 'Table availability', 'Audit-friendly updates'],
        },
        {
          title: 'Delivery',
          nodes: ['Vercel frontend', 'Render API', 'Environment-based config'],
        },
      ],
      notes: [
        'Business rules stay on the server so queue integrity does not depend on client state.',
        'The layout shifts from desktop command center to mobile control panel cleanly.',
        'Small feedback animations make status transitions easier to trust.',
      ],
    },
    demo: {
      previewUrl: '/previews/queuepilot.svg',
      tagline: 'Strong demo for recruiter walkthroughs because the user value is obvious quickly.',
      credentials: 'Demo account: host@queuepilot.dev / Frontdesk2026',
    },
  },
  {
    id: 'cachecanvas',
    title: 'CacheCanvas',
    category: 'Performance Tooling',
    statement: 'API bottleneck visibility for teams fixing slow endpoints.',
    description:
      'A performance-focused internal tool that maps slow endpoints, cache opportunities, and throughput patterns in a visual dashboard made for engineering debugging.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Tailwind'],
    filters: ['React', 'Node.js', 'Performance'],
    features: [
      'Latency trend boards across endpoints and environments',
      'Cache hit simulation view for backend what-if analysis',
      'Shareable snapshots for async debugging handoff',
      'Performance recommendations tied to route behavior',
    ],
    signals: [
      { label: 'Performance focus', value: 'Very high', level: 95 },
      { label: 'Data density', value: 'High', level: 90 },
      { label: 'Decision support', value: 'Strong', level: 89 },
    ],
    links: {
      live: 'https://cachecanvas-demo.vercel.app',
      github: 'https://github.com/yourusername/cachecanvas',
    },
    caseStudy: {
      problem:
        'Performance data existed, but teams still struggled to see which endpoints were actually worth optimizing first.',
      approach:
        'I framed the tool around prioritization: route hotspots, estimated wins, and which bottlenecks repeated across environments.',
      challenges: [
        'Presenting performance data without burying the real bottleneck in decoration.',
        'Balancing charts and dense tables while keeping the page responsive.',
      ],
      learnings: [
        'Performance tools should point to action, not just display telemetry.',
        'Chunking and deferring non-critical UI matters even inside internal tooling.',
      ],
    },
    architecture: {
      overview:
        'The app pairs a React analytics surface with an Express API that normalizes endpoint metrics into frontend-friendly aggregates and recommendations.',
      layers: [
        {
          title: 'Client',
          nodes: ['Trend cards', 'Endpoint ranking table', 'Deferred visual modules'],
        },
        {
          title: 'API',
          nodes: ['Metrics normalization', 'Recommendation scoring', 'Snapshot generation'],
        },
        {
          title: 'Analysis',
          nodes: ['Cache simulation logic', 'Latency grouping', 'Priority heuristics'],
        },
        {
          title: 'Output',
          nodes: ['Actionable summaries', 'Shared debugging snapshots', 'Review-ready exports'],
        },
      ],
      notes: [
        'Recommendation scoring keeps the interface focused on action instead of raw telemetry.',
        'The analytics surface uses deferred sections to keep the initial render light.',
        'A smaller palette and stronger spacing make dense views easier to scan.',
      ],
    },
    demo: {
      previewUrl: '/previews/cachecanvas.svg',
      tagline: 'Best demo for showing performance awareness and systems thinking.',
      credentials: 'No login required. Open endpoint drill-down panels from the overview cards.',
    },
  },
  {
    id: 'atlasdocs',
    title: 'AtlasDocs',
    category: 'Knowledge System',
    statement: 'Structured internal documentation with cleaner publishing.',
    description:
      'A documentation workspace for product and engineering teams with permissions, content stages, and search-oriented structure instead of static markdown dumps.',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    filters: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Draft, review, and publish workflow',
      'Role-aware editing and navigation rules',
      'Search-oriented information architecture',
      'Structured content blocks for reusable documentation',
    ],
    signals: [
      { label: 'Content modeling', value: 'High', level: 86 },
      { label: 'UX clarity', value: 'Strong', level: 88 },
      { label: 'Search readiness', value: 'High', level: 84 },
    ],
    links: {
      live: 'https://atlasdocs-demo.vercel.app',
      github: 'https://github.com/yourusername/atlasdocs',
    },
    caseStudy: {
      problem:
        'Teams had documentation, but not a system for publishing it consistently or keeping it easy to find.',
      approach:
        'I created a structured flow with reusable blocks, clear content states, and a navigation model designed around how teams actually search for answers.',
      challenges: [
        'Balancing editor flexibility with content consistency.',
        'Making the information hierarchy work for both contributors and readers.',
      ],
      learnings: [
        'Knowledge tools succeed when structure is helpful but not oppressive.',
        'Search quality starts with content modeling, not just a search box.',
      ],
    },
    architecture: {
      overview:
        'AtlasDocs uses a React frontend for editing and reading workflows, backed by Express routes that manage content states, roles, and search-ready content models.',
      layers: [
        {
          title: 'Client',
          nodes: ['Reader mode', 'Editor workspace', 'Role-aware navigation'],
        },
        {
          title: 'API',
          nodes: ['Content state routes', 'Role checks', 'Search payload shaping'],
        },
        {
          title: 'Data',
          nodes: ['Structured content documents', 'Revision states', 'Metadata tags'],
        },
        {
          title: 'Output',
          nodes: ['Published docs', 'Review queues', 'Filtered search results'],
        },
      ],
      notes: [
        'Structured blocks keep documentation consistent without forcing a rigid layout.',
        'The backend separates editing rules from reading payloads cleanly.',
        'Search becomes more useful once the information architecture is explicit.',
      ],
    },
    demo: {
      previewUrl: '/previews/queuepilot.svg',
      tagline: 'Included in project cards for documentation and content-architecture depth.',
      credentials: 'Reviewer account available in docs demo mode on request.',
    },
  },
]

export const demoProjects = projects.slice(0, 3)

export const aboutHighlights = [
  {
    kicker: 'What I build',
    title: 'Operational products',
    description:
      'Dashboards, admin surfaces, and systems that help teams make decisions faster without drowning them in UI noise.',
  },
  {
    kicker: 'Problems I like',
    title: 'Complex state made legible',
    description:
      'I enjoy products where filters, permissions, async updates, and structured data all have to work together cleanly.',
  },
  {
    kicker: 'Career goal',
    title: 'Product companies and scale',
    description:
      'I want to work on teams that care about system quality, product sense, and the craft of keeping software understandable as it grows.',
  },
]

export const footerPanels = [
  {
    title: 'Terms',
    copy: 'Portfolio content is provided for evaluation, interviewing, and collaboration discussions. Do not reuse the branding or case-study copy as-is for commercial redistribution.',
  },
  {
    title: 'Privacy Policy',
    copy: 'The contact form only collects the details needed to reply to a message. This demo backend stores submissions in a local JSON file and should be connected to a proper notification service before production use.',
  },
  {
    title: 'Credits',
    copy: 'Built with React, Vite, Tailwind CSS, Framer Motion, and Express. Visual direction is intentionally product-like, with a custom light theme and Night Vision mode.',
  },
]
