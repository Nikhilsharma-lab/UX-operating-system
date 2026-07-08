/**
 * Lane - founder-built SaaS case (Decision 072).
 *
 * Case path: Cases -> Founder-built SaaS -> Lane.
 * Rendered by app/cases/lane in the flat, dark kamran IA (Decision 072);
 * the eyebrow reads "Founder-built SaaS".
 *
 * A founder/product-strategy case for a solo, AI-assisted, private-beta SaaS
 * product. Fixed, public-safe copy: NO pricing, team size, traction/revenue/
 * MRR/PMF claims, or broad-adoption claims; it is honestly a private-beta
 * product case, not a traction case. Allowed: private beta, working product,
 * progressive GTM, AI-assisted development, full tech stack, built solo,
 * ~4 months, ~40 screens, ~20 workflows, 60-70K lines, working/hidden
 * features, and the named competitors (Jira, Linear, Asana, Notion). The
 * AI-assisted-build shorthand appears exactly once in the copy, framed
 * seriously. No em/en dashes in visible copy; artifacts are product-system
 * placeholders, not dashboards.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type PhaseCard = { title: string; owner: string; copy: string };
export type LessonCard = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type RelatedLink = { href: string; label: string };

export const lane = {
  crumbs: ["Cases", "Founder-built SaaS", "Lane"],
  title: "Lane",
  subtitle:
    "Turning design operations from task tracking into decision infrastructure.",

  meta: [
    { label: "Status", value: "Private beta" },
    {
      label: "Case type",
      value: "Founder-built SaaS / AI-native product strategy",
    },
    { label: "Build mode", value: "Solo, AI-assisted development" },
    { label: "Timeline", value: "~4 months" },
    { label: "Stage", value: "Working product" },
  ] as MetaRow[],

  intro: [
    "Lane is an AI-native design operations platform built from a lived design-leadership problem.",
    "Product teams often manage design through engineering-shaped task tools. Jira, Linear, Asana, and Notion make work visible as tickets, tasks, and updates. But design work is not only task completion. It is framing, questioning, exploring, rejecting, deciding, and proving.",
    "Lane is my attempt to build the operating system I wished existed for design teams.",
  ],

  outcome: [
    { value: "~4 months", label: "Solo private-beta build" },
    { value: "40+", label: "Product screens" },
    { value: "20+", label: "Core workflows" },
    { value: "60-70K", label: "Lines of code" },
    { value: "1 wedge", label: "AI Intake Gate" },
  ] as MetricStat[],

  founderProblem: {
    heading: "Design work was being managed through the wrong model.",
    copy: [
      "Engineering teams have Linear. Design teams need Lane.",
      "Most workflow tools assume work equals tasks. That works for engineering because much of the work can be broken into discrete, binary tickets.",
      "Design does not work that way.",
      "The most valuable design work is often invisible to a tracker: understanding, reframing, exploring alternatives, killing weak directions, aligning stakeholders, and deciding what should be built.",
      "When designers are managed only through task movement, they optimize for visible progress instead of better decisions.",
    ],
  },

  thesis: {
    heading: "Work is not the unit. Decisions are.",
    copy: [
      "Jira and Linear optimize for task movement. Lane optimizes for decision quality.",
      "The thesis behind Lane is simple: design operations should not only show what moved. It should improve what gets worked on, how it gets framed, how decisions are made, and whether shipped work created impact.",
      "Lane treats design as a decision system, not a ticket factory.",
    ],
    principle:
      "Surveillance produces performance. Support produces truth. Lane optimizes for truth.",
  },

  wedge: {
    heading: "The wedge: AI Intake Gate",
    copy: [
      "The AI Intake Gate is Lane's riskiest and most important product bet.",
      "Before a request enters the system, Lane checks whether it is problem-framed or solution-specific.",
      `A request like "add a dark-mode toggle" does not pass just because it looks actionable. Lane asks for the problem behind it.`,
      "The product moment is simple: block the solution, preserve the signal, and help the requester reframe the work before it reaches design.",
    ],
  },

  builtBroadly: {
    heading: "Built broadly. Launched narrowly.",
    copy: [
      "Lane was built as a full design operating system, but the private-beta launch surface is intentionally smaller.",
      "The hardest product decision was not building more. It was hiding most of the product to validate the riskiest assumption first.",
      "The full system includes Predesign, Design, Build, Track, a non-linear design pipeline, Prove gates, Figma sync, PM calibration, weekly digest, morning briefing, Design Radar, and impact tracking.",
      "But the v1 launch focuses on one question:",
    ],
    question:
      "Can an AI gate change how PMs frame work before it enters the design pipeline?",
  },

  whatLaneIs: {
    heading: "What Lane is",
    copy: [
      "Lane is an AI-native design operations platform: an operating system for design teams.",
      "It replaces solution-driven ticket intake with a problem-first workflow designed for how design thinking actually works: iterative, non-linear, and exploratory.",
    ],
    flowLabel: "End-to-end model",
    flow: [
      "PM identifies a problem",
      "AI gate checks the framing",
      "Org shapes and bets on it",
      "Designer explores through scientific stages",
      "Developers build",
      "PM measures actual impact",
    ],
    flowClose: "AI runs the operations layer. Humans make the decisions.",
  },

  productModel: {
    heading: "The product model",
    cards: [
      {
        title: "Predesign",
        owner: "PM + org",
        copy: "Requests are framed, enriched with context, shaped, and either bet on, killed, or deferred.",
      },
      {
        title: "Design",
        owner: "Designers",
        copy: "Designers move non-linearly through Sense, Frame, Diverge, Converge, Validate when needed, and Prove.",
      },
      {
        title: "Build",
        owner: "Developers",
        copy: "Handoff-ready work moves into a developer kanban, with design QA required before completion.",
      },
      {
        title: "Track",
        owner: "PMs",
        copy: "After launch, PMs log actual impact so predicted impact can be compared with reality.",
      },
    ] as PhaseCard[],
  },

  intakeGate: {
    heading: "The AI Intake Gate",
    intro: "The Intake Gate classifies every request before it becomes work.",
    verdictsLabel: "Verdicts",
    verdicts: ["problem_framed", "solution_specific", "hybrid"],
    passLine: "If a request is problem-framed, it passes.",
    blockLine:
      "If it is solution-specific or hybrid, Lane blocks it and explains why. The system keeps the problem signal but separates it from the prescribed solution.",
    uiCopy:
      "This looks like a solution, not a problem. Lane works best when designers understand the WHY before the WHAT.",
    actionsLabel: "Actions",
    actions: ["Use rewrite", "Edit description", "Request admin override"],
    detail:
      "The original design included a soft 'submit anyway with justification' escape. It was removed because soft escape valves erode strong forcing functions. The override still exists, but it requires admin approval and leaves a visible audit trail.",
  },

  antiSurveillance: {
    heading: "Support over surveillance",
    copy: [
      "Lane's strongest product principle is that design teams do not produce better thinking when they feel watched.",
      "The product deliberately avoids individual utilization scores, last-active timestamps, designer speed rankings, timers, and automatic escalation of designer silence.",
      "Instead, Lane supports private nudges, team-level health, capacity, reflections, transparent AI reasoning, and human override.",
      "This is not a marketing principle. It is a build constraint.",
    ],
    neverLabel: "Never build",
    never: [
      "Individual utilization %",
      "Last active / last seen timestamps",
      "Per-designer speed ranking",
      "Time-per-task tracking",
      "Automatic escalation of designer silence",
      "Overdue labels on design work",
    ],
    alwaysLabel: "Always build",
    always: [
      "Private AI nudges first",
      "Team health, not individual surveillance",
      "Designer-owned capacity",
      "Reflections in the designer's own words",
      "AI recommendations with reasoning",
      "Human override for AI suggestions",
    ],
  },

  whatIsBuilt: {
    heading: "What is built",
    copy: [
      "Lane is a working private-beta product, not a concept deck.",
      "Built in ~4 months, solo, through AI-assisted development, the product currently includes around 40 screens, 20 core workflows, 60-70K lines of code, database tables/modules, and most AI features working.",
    ],
    features: [
      "AI Intake Gate",
      "Admin override",
      "Auto-triage",
      "4-phase model",
      "5-stage design flow",
      "Prove gate",
      "Dev kanban",
      "Figma OAuth",
      "Impact tracking",
      "PM calibration",
      "Idea board",
      "Weekly digest",
      "Morning briefing",
      "Design Radar",
      "Role-based access",
      "Notifications",
      "Onboarding",
    ],
  },

  hiddenV1: {
    heading: "What is hidden for v1",
    copy: [
      "The private-beta launch does not expose everything that has been built.",
      "The v1 surface is deliberately narrowed to the AI Intake Gate, a stripped PM-intake loop, go-live and impact-date fields, in-app notifications, impact-delay counter, functional tags, admin override flow, and six lifecycle states.",
    ],
    lifecycleLabel: "Lifecycle states",
    lifecycle: [
      "Created",
      "Assigned",
      "In progress",
      "Done",
      "Launched",
      "Impact marked",
    ],
    hiddenLabel: "Hidden / deferred from v1",
    hidden: [
      "5-stage design pipeline",
      "Figma sync",
      "Idea board",
      "Weekly digest",
      "Morning briefing",
      "PM calibration",
      "Design Radar",
    ],
    note: "These features are dormant, not deleted. The product is a single-product progressive launch, not a tiered offering.",
  },

  techStack: {
    heading: "Tech stack",
    intro: "Lane was built with a modern AI-native SaaS stack:",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Supabase",
      "Drizzle ORM",
      "Supabase Auth",
      "Claude via Vercel AI SDK",
      "Tailwind",
      "shadcn/ui",
      "Vercel",
      "Upstash Redis",
      "Resend",
      "Figma OAuth",
      "Stripe later",
    ],
    note: "Built solo through AI-assisted development. The current popular shorthand would be 'vibe coding,' but the actual work was product judgment, system design, and relentless pruning.",
  },

  gtm: {
    heading: "Progressive GTM",
    copy: [
      "Lane is in private beta with a progressive go-to-market motion.",
      "The first GTM motion does not try to sell the entire design operating system. It tests whether design leaders and PMs feel the value of better problem framing before work enters the pipeline.",
      "The first proof is not revenue or scale. It is whether the Intake Gate changes behavior.",
    ],
    signalsLabel: "Success signals",
    signals: [
      "Real workspaces using the gate",
      "PMs reframing solution requests into problems",
      "Override rate staying controlled",
      "At least one request moving end-to-end to impact marked",
      "Design leaders returning because the workflow improves clarity",
    ],
  },

  myRole: {
    heading: "My role",
    copy: [
      "I was the founder, product strategist, designer, PM, and AI-assisted builder.",
      "This meant making the product decisions, defining the philosophy, designing the workflow model, building the system, cutting the launch surface, and deciding what must never be built.",
      "The work combined design leadership, SaaS strategy, AI-assisted development, service design, workflow architecture, and founder judgment.",
      "The most important decision was not what to build. It was what to hide until the core thesis was validated.",
    ],
  },

  founderLessons: {
    heading: "Founder lessons",
    cards: [
      {
        title: "AI-native is not AI sprinkled on old workflows.",
        copy: "Lane works because AI is part of the operating model. It checks framing, suggests routing, generates context, and supports decision flow. It does not simply sit on top of a ticket system.",
      },
      {
        title: "The hardest founder decision was cutting.",
        copy: "Building the full system was easier than choosing not to launch it all. The private-beta surface was narrowed to validate the riskiest assumption first.",
      },
      {
        title: "Philosophy must become constraints.",
        copy: "Anti-surveillance is not a brand line in Lane. It is enforced through what the product refuses to measure, expose, or rank.",
      },
    ] as LessonCard[],
  },

  artifacts: {
    heading: "Product artifacts",
    copy: "This case uses product-system artifacts, not fake traction dashboards.",
    placeholders: [
      {
        screen: "AI Intake Gate",
        caption:
          "The product wedge that blocks solution-specific requests before they enter the design pipeline.",
      },
      {
        screen: "Request classification flow",
        caption:
          "Classifies intake as problem-framed, solution-specific, or hybrid.",
      },
      {
        screen: "Admin override flow",
        caption: "Allows exceptions without making bypass behavior invisible.",
      },
      {
        screen: "Predesign / Design / Build / Track model",
        caption:
          "The operating model that moves work from problem framing to impact learning.",
      },
      {
        screen: "Five-stage design pipeline",
        caption:
          "A non-linear model for Sense, Frame, Diverge, Converge, Validate, and Prove.",
      },
      {
        screen: "Prove gate",
        caption: "Three sign-offs before design moves to build.",
      },
      {
        screen: "Impact tracking flow",
        caption: "Connects shipped work back to predicted impact.",
      },
      {
        screen: "PM calibration model",
        caption:
          "Compares predicted impact with actual impact as a learning loop.",
      },
      {
        screen: "Weekly digest",
        caption: "Narrative operating summary for design leaders.",
      },
      {
        screen: "Design Radar",
        caption:
          "Team health and risk visibility without individual surveillance.",
      },
      {
        screen: "Role-based visibility matrix",
        caption:
          "Different access by role, with surveillance rows forbidden for everyone.",
      },
      {
        screen: "Anti-surveillance constraints",
        caption: "Hard product rules around what Lane will never measure.",
      },
      {
        screen: "V1 launch surface",
        caption: "The intentionally narrow private-beta surface.",
      },
      {
        screen: "Dormant feature inventory",
        caption: "Built features preserved but hidden until the wedge validates.",
      },
      {
        screen: "GTM validation loop",
        caption: "How the product tests whether the Intake Gate changes behavior.",
      },
      {
        screen: "Tech architecture",
        caption: "The AI-native SaaS stack behind the working product.",
      },
    ] as Placeholder[],
  },

  related: [
    { href: "/cases", label: "Back to Cases" },
    {
      href: "/transformations/ai-native-product-development",
      label: "Transformation: AI-native Product Development",
    },
    {
      href: "/operating-manual/ai-workflow",
      label: "Operating Manual: AI Workflow",
    },
    {
      href: "/operating-manual/organization-design",
      label: "Operating Manual: Organization Design",
    },
    {
      href: "/operating-manual/design-systems",
      label: "Operating Manual: Design Systems",
    },
  ] as RelatedLink[],
};
