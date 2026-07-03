/**
 * Operating Manual data.
 *
 * Each entry renders as a public-safe shell: thesis, principles, an
 * operating-model outline, quality gates, and anti-patterns. Shells carry the
 * public status "In development" ("Shell v1" remains an internal type option;
 * do not expose it in rendered UI).
 * No full manual prose yet, and no new metrics — manual pages may reference
 * transformation stories but introduce no quantified claims beyond what the
 * claims register already approves.
 */

export type OperatingModelSection = {
  /** e.g. "Inputs", "Rituals", "Decision rules", "Outputs", "Ownership", "Review cadence" */
  heading: string;
  items: string[];
};

export type RelatedTransformation = {
  slug: string;
  title: string;
};

export type ManualStatus = "Shell v1" | "In development" | "Operating guide v1";

export type GuidePrinciple = {
  rule: string;
  note: string;
};

export type GuideStep = {
  step: string;
  purpose: string;
  owner: string;
  output: string;
};

export type OwnerCard = {
  role: string;
  owns: string[];
};

export type GateGroup = {
  stage: string;
  checks: string[];
};

export type GuidePhase = {
  phase: string;
  title: string;
  detail: string;
};

/** Editorial cross-reference from one guide to another. */
export type RelatedGuideLink = {
  title: string;
  href: string;
  description: string;
};

/**
 * Full operating-guide content. When present, the entry page renders the
 * expanded guide instead of the shell outline. Concept-led only — no
 * quantified claims; targets and benchmarks are never implied.
 */
export type ManualGuide = {
  supportingLine: string;
  whenToUse: string[];
  whenNotToUse: string[];
  principles: GuidePrinciple[];
  inputs: string[];
  steps: GuideStep[];
  owners: OwnerCard[];
  gateGroups: GateGroup[];
  metricsToTrack: string[];
  metricsNote: string;
  governance: string[];
  phases: GuidePhase[];
  leadershipQuestions: string[];
  derivedFromNote: string;
  /** Cross-references to other Operating Manual guides. */
  relatedGuides?: RelatedGuideLink[];
  futureAdditions: string[];
};

export type ManualEntry = {
  slug: string;
  number: string;
  category: string;
  title: string;
  status: ManualStatus;
  audience: string;
  thesis: string;
  whatItSolves: string[];
  principles: string[];
  operatingModel: OperatingModelSection[];
  qualityGates: string[];
  antiPatterns: string[];
  relatedTransformations: RelatedTransformation[];
  futureDepthNote: string;
  /** Present only once an entry has been expanded into a full guide. */
  guide?: ManualGuide;
};

const FUTURE_DEPTH_NOTE =
  "This manual entry is intentionally in shell form. It will expand into a full operating guide with examples, checklists, and decision rules.";

const STORY_BUILDING_DESIGN_ORG: RelatedTransformation = {
  slug: "building-design-organization",
  title: "Building the Design Organization",
};

const STORY_AI_NATIVE: RelatedTransformation = {
  slug: "ai-native-product-development",
  title: "AI-native Product Development",
};

export const manualEntries: ManualEntry[] = [
  {
    slug: "organization-design",
    number: "01",
    category: "Org System",
    title: "Organization Design",
    status: "Operating guide v1",
    audience: "Design leaders, product leaders, founders",
    thesis:
      "A design organization does not scale through headcount alone. It scales through ownership, rituals, quality standards, and trust.",
    whatItSolves: [
      "Design treated as a service desk",
      "Scattered ownership",
      "Late design involvement",
      "PMs bringing solution requests instead of problem briefs",
      "Inconsistent design quality",
      "Weak research input",
      "Weak design reviews",
      "Engineering handoff ambiguity",
      "Leadership not seeing design as a business capability",
      "Designers operating as task completers instead of product partners",
      "Design quality depending on heroic individuals",
      "Team growth without operating maturity",
    ],
    principles: [
      "Design must enter before solution decisions harden.",
      "Team structure should follow user and business complexity, not only org charts.",
      "Rituals create shared standards faster than documents alone.",
      "Designers need product fluency, not only craft strength.",
      "Trust is built through repeatable operating behavior.",
    ],
    operatingModel: [
      {
        heading: "Inputs",
        items: [
          "Business problems framed as problem briefs, not solution requests",
          "User and market research as a recurring input",
          "Product and engineering constraints made explicit early",
        ],
      },
      {
        heading: "Rituals",
        items: [
          "Structured design reviews and critique on a fixed cadence",
          "Regular product reviews with cross-functional partners",
          "Recurring team growth and upskilling sessions",
        ],
      },
      {
        heading: "Decision rules",
        items: [
          "Evidence from real customer behavior settles debates before opinion",
          "Design quality standards are shared, not per-designer",
          "Escalations resolve on outcomes, not seniority",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "A design capability with clear ownership per product area",
          "Consistent, review-backed product quality",
          "Leadership-legible evidence of design's business contribution",
        ],
      },
      {
        heading: "Ownership",
        items: [
          "Pod or area ownership with named leads",
          "Design signoff before development handoff",
          "The design leader owns the operating model, not every artifact",
        ],
      },
      {
        heading: "Review cadence",
        items: [
          "Weekly design rituals; periodic product reviews",
          "Quarterly operating-model retrospectives",
        ],
      },
    ],
    qualityGates: [
      "Design is present before solution decisions harden.",
      "Every product area has a named design owner.",
      "Reviews run on a cadence that survives busy weeks.",
      "Quality standards are written and shared, not implied.",
      "Leadership sees design outcomes in business language.",
    ],
    antiPatterns: [
      "Hiring designers without changing the operating model.",
      "Treating design as a ticket queue.",
      "Letting PMs prescribe screens instead of problems.",
      "Running reviews as taste debates.",
      "Doing research but not changing decisions.",
      "Creating pods without clear ownership.",
      "Scaling rituals into meeting overload.",
      "Letting design systems become optional.",
      "Measuring design by output volume.",
      "Treating handoff as the end of design.",
      "Positioning design maturity as correction or criticism.",
      "Relying on heroic senior designers instead of systems.",
    ],
    relatedTransformations: [STORY_BUILDING_DESIGN_ORG, STORY_AI_NATIVE],
    futureDepthNote: FUTURE_DEPTH_NOTE,
    guide: {
      supportingLine:
        "The goal is not to make design look more important. The goal is to make the organization better at deciding what to build, how to build it, and how to protect quality as it scales.",
      whenToUse: [
        "Design is being pulled into work too late.",
        "PMs give screens or solutions instead of business context and user problems.",
        "Designers are scattered across product areas without shared standards.",
        "Product quality varies by designer or squad.",
        "Design reviews are absent or taste-led.",
        "Research is not regularly shaping product decisions.",
        "Engineering handoff depends on individual discipline.",
        "Leadership sees design as execution rather than product capability.",
        "The design team is growing but rituals, ownership, and quality systems are not.",
      ],
      whenNotToUse: [
        "The team is tiny and still discovering basic product-market fit.",
        "The org does not yet have repeated product surfaces.",
        "There is no leadership support for shared standards.",
        "You only need short-term execution capacity.",
        "Designers are not yet ready for product ownership.",
        "The organization wants process theater but not decision change.",
        "You cannot protect time for rituals, reviews, and research.",
      ],
      principles: [
        {
          rule: "Headcount does not create maturity by itself.",
          note: "More designers inside a weak system produce more inconsistent output.",
        },
        {
          rule: "Design must enter before solutions harden.",
          note: "The leverage is in problem framing, not pixels.",
        },
        {
          rule: "Ownership should follow user and business complexity.",
          note: "Structure maps to the product, not to the org chart.",
        },
        {
          rule: "Rituals create shared standards faster than documents alone.",
          note: "Standards live in repeated behavior, not in wikis.",
        },
        {
          rule: "Designers must become product-fluent.",
          note: "Partnership requires business, data, and strategy literacy.",
        },
        {
          rule: "Research must become part of decision-making, not a separate activity.",
          note: "Evidence should settle debates, not decorate decks.",
        },
        {
          rule: "Quality gates protect trust.",
          note: "Every defect that ships spends credibility the team needs later.",
        },
        {
          rule: "Design leadership is operating-model design.",
          note: "The leader's real product is the system the team runs on.",
        },
      ],
      inputs: [
        "Product surface map",
        "Current design team structure",
        "PM/design intake pattern",
        "Research maturity assessment",
        "Design review maturity assessment",
        "Handoff quality assessment",
        "Design-system maturity assessment",
        "Hiring gaps",
        "Skill matrix",
        "Leadership expectations",
        "Product/business priorities",
        "Engineering collaboration model",
        "Current rituals",
        "Decision rights",
        "Quality standards",
      ],
      steps: [
        {
          step: "Diagnose design maturity.",
          purpose: "Establish where the organization actually is before changing it.",
          owner: "Design leadership",
          output: "A maturity assessment and gap list",
        },
        {
          step: "Map product surfaces and ownership gaps.",
          purpose: "See where design work has no clear owner.",
          owner: "Design leadership + product",
          output: "A surface-to-owner map",
        },
        {
          step: "Define design operating principles.",
          purpose: "Fix the standards the organization will run on.",
          owner: "Design leadership",
          output: "Written operating principles",
        },
        {
          step: "Create pod or ownership model.",
          purpose: "Attach designers to product areas with real accountability.",
          owner: "Design leadership",
          output: "A pod / ownership structure",
        },
        {
          step: "Establish intake rules.",
          purpose: "Shift PM requests from solutions to problem briefs.",
          owner: "Design leadership + product",
          output: "An intake standard",
        },
        {
          step: "Create design review and critique rituals.",
          purpose: "Build shared quality standards through repetition.",
          owner: "Design leads",
          output: "A fixed review cadence with decision criteria",
        },
        {
          step: "Build research-to-decision loop.",
          purpose: "Make evidence a recurring product input, not a side activity.",
          owner: "Design + research",
          output: "A research cadence wired to product decisions",
        },
        {
          step: "Standardize design-system and handoff quality.",
          purpose: "Remove the ambiguity engineering pays for downstream.",
          owner: "Design leads + engineering",
          output: "A handoff standard and system usage rules",
        },
        {
          step: "Create design signoff / quality gates.",
          purpose: "Protect quality at the most expensive moments to fix it.",
          owner: "Design leads",
          output: "Signoff gates inside the delivery loop",
        },
        {
          step: "Build hiring and growth paths.",
          purpose: "Raise the bar and grow product-fluent designers.",
          owner: "Design leadership",
          output: "A hiring bar, skill matrix, and growth paths",
        },
        {
          step: "Tell design impact in business language.",
          purpose: "Earn executive trust with outcomes, not artifacts.",
          owner: "Design leadership",
          output: "A recurring leadership narrative",
        },
        {
          step: "Feed learnings back into the operating model.",
          purpose: "Keep the model alive as the organization changes.",
          owner: "Design leadership",
          output: "Operating-model revisions",
        },
      ],
      owners: [
        {
          role: "Design leadership owns",
          owns: [
            "Operating model",
            "Design quality standards",
            "Team structure",
            "Hiring bar",
            "Ritual design",
            "Cross-functional trust",
            "Executive storytelling",
            "Career growth system",
          ],
        },
        {
          role: "Design leads own",
          owns: [
            "Pod-level quality",
            "Critique discipline",
            "Designer coaching",
            "Handoff quality",
            "Local stakeholder alignment",
            "Product-area design consistency",
          ],
        },
        {
          role: "Designers own",
          owns: [
            "Problem framing",
            "Experience quality",
            "Research participation",
            "Design rationale",
            "Design-system usage",
            "Edge cases and states",
            "Post-handoff follow-through",
          ],
        },
        {
          role: "Product owns",
          owns: [
            "Business context",
            "Problem briefs",
            "Prioritization",
            "Metrics and expected impact",
            "Roadmap tradeoffs",
            "Outcome validation",
          ],
        },
        {
          role: "Engineering owns",
          owns: [
            "Implementation feasibility",
            "Technical constraints",
            "Build quality",
            "Production review",
            "Delivery collaboration",
            "Feedback on handoff quality",
          ],
        },
      ],
      gateGroups: [
        {
          stage: "Before design starts",
          checks: [
            "Problem is framed.",
            "Business context is clear.",
            "User/customer evidence is available or research need is identified.",
            "Expected impact is stated.",
            "Constraints are known.",
            "Ownership is clear.",
          ],
        },
        {
          stage: "Before development handoff",
          checks: [
            "Design rationale is documented.",
            "States and edge cases are covered.",
            "Design-system usage is clear.",
            "Accessibility basics are considered.",
            "Engineering feasibility has been reviewed.",
            "Product acceptance criteria are aligned.",
          ],
        },
        {
          stage: "Before release",
          checks: [
            "Design QA is complete.",
            "Critical UX regressions are resolved.",
            "Product behavior matches intent.",
            "Analytics/learning plan exists where relevant.",
            "Post-launch review is scheduled.",
          ],
        },
      ],
      metricsToTrack: [
        "Design involvement stage",
        "Intake quality",
        "Rework caused by unclear briefs",
        "Review participation",
        "Design-system adoption",
        "Research influence on decisions",
        "Handoff clarification loops",
        "Design QA issues",
        "Time from problem framing to delivery",
        "Stakeholder satisfaction",
        "Designer growth and maturity",
        "Product outcome movement where measurable",
      ],
      metricsNote:
        "Track these before and after adoption. Targets depend on your product, team, and context — no benchmark numbers are implied here.",
      governance: [
        "PMs should bring problems, context, constraints, and expected impact.",
        "Designers should challenge weak briefs respectfully.",
        "Design reviews need decision criteria.",
        "Research insights should be visible to product leadership.",
        "Handoff quality must be standardized.",
        "Design signoff should protect quality, not create bureaucracy.",
        "Designers should stay involved after handoff when quality risk is high.",
        "Leadership should see design impact in business language.",
        "Rituals should reduce ambiguity, not create theater.",
      ],
      phases: [
        {
          phase: "Phase 1",
          title: "Diagnosis",
          detail:
            "Map current maturity, product surfaces, intake quality, handoff gaps, and leadership perception.",
        },
        {
          phase: "Phase 2",
          title: "Operating model definition",
          detail:
            "Define ownership, intake rules, design review rhythm, research loop, and quality gates.",
        },
        {
          phase: "Phase 3",
          title: "Team structure and hiring",
          detail:
            "Create pods, clarify roles, hire for product thinking, and build growth paths.",
        },
        {
          phase: "Phase 4",
          title: "Ritual adoption",
          detail:
            "Run design reviews, critiques, product reviews, 1:1s, design-dev syncs, and show-and-tell with discipline.",
        },
        {
          phase: "Phase 5",
          title: "Executive trust",
          detail:
            "Translate design work into business impact, delivery quality, risk reduction, and customer outcomes.",
        },
      ],
      leadershipQuestions: [
        "Where does design currently enter the product lifecycle?",
        "Are PMs bringing problems or solutions?",
        "What decisions can designers influence?",
        "What rituals protect quality?",
        "Where does research affect roadmap decisions?",
        "How does engineering experience design handoff?",
        "What design work creates business value?",
        "Which designers are ready for product ownership?",
        "What should be centralized vs owned by pods?",
        "Where is design maturity being mistaken for process?",
      ],
      derivedFromNote:
        "This operating guide is derived from the Building the Design Organization transformation story. AI-native workflows depend on the organizational foundations this guide describes: ownership, quality gates, design-system discipline, and engineering trust.",
      relatedGuides: [
        {
          title: "Design Systems",
          href: "/operating-manual/design-systems",
          description:
            "The product-infrastructure layer that helps design organizations scale consistency, quality, and implementation maturity.",
        },
        {
          title: "AI Workflow",
          href: "/operating-manual/ai-workflow",
          description:
            "The AI-native delivery layer that depends on mature ownership, review discipline, and engineering trust.",
        },
      ],
      futureAdditions: [
        "Design maturity assessment",
        "PM intake rubric",
        "Pod ownership model",
        "Design review rubric",
        "Research-to-decision template",
        "Handoff quality checklist",
        "Career ladder",
        "Stakeholder trust map",
        "Executive design impact narrative",
      ],
    },
  },
  {
    slug: "design-systems",
    number: "02",
    category: "Product Infrastructure",
    title: "Design Systems",
    status: "Operating guide v1",
    audience: "Design leaders, engineering leaders, product teams",
    thesis:
      "A design system is not a Figma library. It is product infrastructure for consistency, speed, governance, and implementation quality.",
    whatItSolves: [
      "Inconsistent UI across product surfaces",
      "Design debt",
      "Engineering rework",
      "Slow handoff",
      "Weak component governance",
      "Detached Figma libraries",
      "Teams rebuilding patterns differently",
      "QA catching visual inconsistencies late",
      "Designers duplicating old files or creating one-off patterns",
      "AI generation from messy source systems",
    ],
    principles: [
      "Components need ownership, not only documentation.",
      "Tokens, variants, states, and naming are production concerns.",
      "Governance matters more than library size.",
      "Design systems should reduce interpretation, not create decoration.",
      "AI-readiness starts with system hygiene.",
    ],
    operatingModel: [
      {
        heading: "Inputs",
        items: [
          "Product surfaces and patterns audited for reuse",
          "Token, variant, state, and naming conventions",
          "Engineering implementation constraints",
        ],
      },
      {
        heading: "Rituals",
        items: [
          "Component review before anything enters the system",
          "Regular design–engineering parity checks",
          "Deprecation and versioning passes",
        ],
      },
      {
        heading: "Decision rules",
        items: [
          "A pattern enters the system only with an owner",
          "Breaking changes require a migration path",
          "System needs beat feature-team preferences by default",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "A governed component and token library",
          "Faster, lower-interpretation handoff",
          "A source system clean enough to support AI-assisted generation",
        ],
      },
      {
        heading: "Ownership",
        items: [
          "Named system ownership with contribution rules",
          "Shared design–engineering accountability for parity",
        ],
      },
      {
        heading: "Review cadence",
        items: [
          "Ongoing component review; periodic system health audits",
        ],
      },
    ],
    qualityGates: [
      "Every component has an owner and a governance path.",
      "Tokens, variants, and states are named consistently across design and code.",
      "Design–code parity is checked, not assumed.",
      "Contribution and deprecation rules are written down.",
      "The system is clean enough that generation from it is safe.",
    ],
    antiPatterns: [
      "Treating the design system as a UI kit.",
      "Building components without ownership.",
      "Measuring success by component count.",
      "Creating components for one-off needs.",
      "Allowing detached local variants.",
      "Ignoring states and edge cases.",
      "Letting every squad customize patterns.",
      "Documenting without adoption rituals.",
      "Skipping engineering partnership.",
      "Using AI on messy components.",
      "Never deprecating old patterns.",
      "Turning governance into bureaucracy.",
    ],
    relatedTransformations: [STORY_BUILDING_DESIGN_ORG, STORY_AI_NATIVE],
    futureDepthNote: FUTURE_DEPTH_NOTE,
    guide: {
      supportingLine:
        "The value of a design system is not how many components it contains. The value is how much interpretation, rework, and product inconsistency it removes from the organization.",
      whenToUse: [
        "Multiple squads are designing and shipping related product surfaces.",
        "UI patterns are being recreated across teams.",
        "Figma components exist but adoption is inconsistent.",
        "Engineers repeatedly rebuild or reinterpret components.",
        "QA finds recurring visual or state inconsistencies.",
        "Product teams need faster delivery without sacrificing quality.",
        "The organization wants AI-assisted design-to-code workflows later.",
        "Design quality depends too much on individual designers.",
      ],
      whenNotToUse: [
        "The product surface is very small and stable.",
        "The team does not have repeated patterns yet.",
        "No one can own governance.",
        "Leadership wants a one-time UI kit, not a long-term system.",
        "Components will not be maintained after creation.",
        "Teams are unwilling to follow shared standards.",
        "The organization only wants visual polish, not operating discipline.",
      ],
      principles: [
        {
          rule: "Governance matters more than library size.",
          note: "A small governed system beats a large drifting one.",
        },
        {
          rule: "Components need ownership, not only documentation.",
          note: "Documentation describes; owners decide, maintain, and deprecate.",
        },
        {
          rule: "Tokens, variants, states, and naming are production concerns.",
          note: "They determine what ships, not just how the library looks.",
        },
        {
          rule: "A design system should reduce interpretation.",
          note: "Every ambiguous component becomes rework downstream.",
        },
        {
          rule: "System adoption is an operating problem, not a Figma problem.",
          note: "Rituals, reviews, and incentives drive usage; libraries alone do not.",
        },
        {
          rule: "Quality gates prevent the system from becoming design debt.",
          note: "Unchecked growth turns the system into the inconsistency it was built to remove.",
        },
        {
          rule: "AI-readiness starts with design-system hygiene.",
          note: "Generation reads structure; messy structure scales into messy code.",
        },
        {
          rule: "A design system should create leverage for design, engineering, product, and QA.",
          note: "If only designers benefit, it is a library, not infrastructure.",
        },
      ],
      inputs: [
        "Product surface inventory",
        "Repeated pattern audit",
        "Component ownership",
        "Naming conventions",
        "Design tokens",
        "Variants",
        "States",
        "Responsive rules",
        "Accessibility basics",
        "Usage guidelines",
        "Contribution rules",
        "Review process",
        "Engineering counterpart or coded-component mapping",
        "Adoption path",
        "Deprecation rules",
      ],
      steps: [
        {
          step: "Audit product surfaces and repeated patterns.",
          purpose: "Find where inconsistency and rework actually live.",
          owner: "Design, with product input",
          output: "A pattern inventory and priority list",
        },
        {
          step: "Define design-system ownership.",
          purpose: "Give the system a named owner before building anything.",
          owner: "Design leadership",
          output: "An owner and a governance mandate",
        },
        {
          step: "Establish tokens and naming conventions.",
          purpose: "Make styling decisions systematic and machine-readable.",
          owner: "Design + engineering",
          output: "A token set and naming rules",
        },
        {
          step: "Build foundational components.",
          purpose: "Cover the highest-frequency patterns first.",
          owner: "Design-system owner",
          output: "The foundation component set",
        },
        {
          step: "Define variants, states, and responsive behavior.",
          purpose: "Remove the ambiguity QA otherwise finds late.",
          owner: "Design",
          output: "Complete component definitions",
        },
        {
          step: "Create usage guidelines.",
          purpose: "Reduce interpretation at the point of use.",
          owner: "Design-system owner",
          output: "Usage guidance per component",
        },
        {
          step: "Map design components to coded components where possible.",
          purpose: "Keep design and implementation from drifting apart.",
          owner: "Design + engineering",
          output: "A design-to-code parity map",
        },
        {
          step: "Create contribution and review rules.",
          purpose: "Let the system grow without decaying.",
          owner: "Design-system owner",
          output: "A lightweight contribution model",
        },
        {
          step: "Introduce design-system QA during product delivery.",
          purpose: "Catch inconsistency before it ships, not after.",
          owner: "Design + QA",
          output: "System checks inside the delivery loop",
        },
        {
          step: "Track adoption and exceptions.",
          purpose: "Measure whether the system is used, not just built.",
          owner: "Design-system owner + product",
          output: "An adoption and exception log",
        },
        {
          step: "Feed product learnings back into the system.",
          purpose: "Keep the system aligned with real product needs.",
          owner: "Design-system owner",
          output: "Updated components and guidelines",
        },
      ],
      owners: [
        {
          role: "Design owns",
          owns: [
            "Component design quality",
            "Figma structure",
            "Naming",
            "Variants",
            "States",
            "Tokens usage",
            "Usage guidelines",
            "Design-system governance",
          ],
        },
        {
          role: "Engineering owns",
          owns: [
            "Coded components",
            "Frontend architecture",
            "Implementation constraints",
            "Accessibility implementation",
            "Performance",
            "Versioning",
            "Technical maintainability",
          ],
        },
        {
          role: "Product owns",
          owns: [
            "Pattern priority",
            "Business use cases",
            "Product adoption",
            "Exceptions based on user and business needs",
          ],
        },
        {
          role: "QA owns",
          owns: [
            "Implementation consistency",
            "Regression checks",
            "State coverage",
            "Device and browser validation",
          ],
        },
      ],
      gateGroups: [
        {
          stage: "Before adding a component",
          checks: [
            "Repeated use case exists.",
            "Existing component cannot solve the need.",
            "Owner is assigned.",
            "Naming fits the system.",
            "States are defined.",
            "Accessibility basics are considered.",
          ],
        },
        {
          stage: "Before adoption",
          checks: [
            "Usage guidelines exist.",
            "Variants are documented.",
            "Design and engineering mapping is clear.",
            "Common edge cases are covered.",
            "Contribution path is known.",
          ],
        },
        {
          stage: "Before AI-assisted generation",
          checks: [
            "Tokens are applied.",
            "Components are structured cleanly.",
            "States are complete.",
            "Responsive behavior is clear.",
            "Component naming is AI-readable.",
            "Coded counterpart or frontend convention is known.",
          ],
        },
      ],
      metricsToTrack: [
        "Component adoption rate",
        "Number of repeated patterns reduced",
        "Handoff clarification loops",
        "Visual QA defects",
        "Design-system exceptions",
        "Component reuse across squads",
        "Time from design to implementation",
        "Number of detached or local components",
        "Token usage consistency",
        "Coded-component parity",
        "Accessibility issues",
        "Contribution turnaround time",
      ],
      metricsNote:
        "Track these before and after adoption. Targets depend on your product, team, and context — no benchmark numbers are implied here.",
      governance: [
        "Every component needs an owner.",
        "Every new component needs a repeated use case.",
        "Variants and states must be documented before adoption.",
        "Components must map to product behavior, not only visuals.",
        "Exceptions must be recorded.",
        "Deprecated patterns must be removed.",
        "Contribution rules must be lightweight but real.",
        "Engineering must be involved where implementation parity matters.",
        "AI generation can only use system-approved components.",
      ],
      phases: [
        {
          phase: "Phase 1",
          title: "Pattern audit",
          detail: "Map repeated product surfaces and inconsistencies.",
        },
        {
          phase: "Phase 2",
          title: "Foundation components",
          detail:
            "Build tokens, typography, spacing, buttons, inputs, cards, navigation, and forms.",
        },
        {
          phase: "Phase 3",
          title: "Governance layer",
          detail:
            "Define owners, contribution model, review rhythm, and adoption rules.",
        },
        {
          phase: "Phase 4",
          title: "Engineering parity",
          detail:
            "Map Figma components to coded components and implementation conventions.",
        },
        {
          phase: "Phase 5",
          title: "AI-readiness",
          detail:
            "Prepare components for design-to-code workflows through naming, states, variants, tokens, and responsive rules.",
        },
      ],
      leadershipQuestions: [
        "What business problem is the design system solving?",
        "Which patterns repeat enough to deserve systemization?",
        "Who owns component quality?",
        "How does the system reduce rework?",
        "How does engineering participate?",
        "What should be standardized and what should remain flexible?",
        "How are exceptions handled?",
        "How will adoption be measured?",
        "Is the system ready for AI-assisted design-to-code workflows?",
      ],
      derivedFromNote:
        "This operating guide connects to the design-system governance work behind the Building the Design Organization transformation story. It also forms the foundation for the AI-native Product Development transformation, where design-system hygiene became a prerequisite for frontend generation.",
      relatedGuides: [
        {
          title: "AI Workflow",
          href: "/operating-manual/ai-workflow",
          description:
            "AI Workflow depends on design-system hygiene. This guide defines the system-readiness layer before AI-assisted generation.",
        },
        {
          title: "Organization Design",
          href: "/operating-manual/organization-design",
          description:
            "The ownership, ritual, and trust layer that makes design-system governance possible.",
        },
      ],
      futureAdditions: [
        "Design-system audit template",
        "Component contribution rubric",
        "Token governance checklist",
        "AI-readiness checklist",
        "Design QA checklist",
        "Engineering parity map",
        "Component deprecation model",
        "Adoption scorecard",
      ],
    },
  },
  {
    slug: "ai-workflow",
    number: "03",
    category: "AI-native Delivery",
    title: "AI Workflow",
    status: "Operating guide v1",
    audience: "Design leaders, product leaders, engineering leaders",
    thesis:
      "AI-native workflows should compress repetitive translation work without bypassing human judgment or engineering ownership.",
    whatItSolves: [
      "Manual Figma-to-code translation",
      "QA/UAT drift",
      "Repetitive frontend work",
      "Slow experimentation",
      "Weak design-to-production continuity",
      "Design system not connected to implementation",
      "Engineering time spent on repetitive UI translation",
      "Designers unable to validate production parity quickly",
    ],
    principles: [
      "AI should accelerate the system, not amplify inconsistency.",
      "Production-ready does not mean production-owned by AI.",
      "Human review becomes more important, not less.",
      "Prompts and workflows are product infrastructure.",
      "Engineering trust is a prerequisite for scale.",
    ],
    operatingModel: [
      {
        heading: "Inputs",
        items: [
          "A stable, AI-readable design system (tokens, variants, states)",
          "Structured design files checked against the system",
          "Reusable prompts and workflow rules",
        ],
      },
      {
        heading: "Rituals",
        items: [
          "Generate–review–refine loops on controlled surfaces",
          "Visual QA by design; production review by engineering",
          "Learnings fed back into the design system",
        ],
      },
      {
        heading: "Decision rules",
        items: [
          "Start with repetitive, low-judgment UI surfaces",
          "Business logic stays outside early generation",
          "Nothing ships without engineering review and the normal release process",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "Componentized, token-aligned, responsive frontend foundations",
          "Less repetitive translation between design intent and shipped UI",
          "A workflow the team can operate, not a personal trick",
        ],
      },
      {
        heading: "Ownership",
        items: [
          "Designers own visual QA and design-system compliance",
          "Engineering owns code quality, architecture, security, and integration",
        ],
      },
      {
        heading: "Review cadence",
        items: [
          "Human review on every generated foundation; periodic workflow audits",
        ],
      },
    ],
    qualityGates: [
      "The source design system is stable before AI is added.",
      "Every generated foundation passes design QA and engineering review.",
      "The boundary of what AI may generate is explicit.",
      "Prompts and workflow rules are maintained as shared infrastructure.",
      "Engineering trusts the workflow enough to keep using it.",
    ],
    antiPatterns: [
      "Generating from messy Figma files.",
      "Treating AI output as production code.",
      "Bypassing engineering review.",
      "Using AI for complex product logic too early.",
      "Hardcoding styles instead of tokens.",
      "Letting every designer invent their own prompts.",
      "Measuring tool usage instead of workflow impact.",
      "Calling prototypes “production-ready”.",
      "Scaling before controlled wins.",
      "Ignoring accessibility and responsive behavior.",
    ],
    relatedTransformations: [STORY_AI_NATIVE, STORY_BUILDING_DESIGN_ORG],
    futureDepthNote: FUTURE_DEPTH_NOTE,
    guide: {
      supportingLine:
        "The goal is not to prove that designers can generate code. The goal is to reduce waste between design intent and shipped product while protecting quality.",
      whenToUse: [
        "A design system exists but implementation still varies across squads.",
        "Engineers repeatedly rebuild UI from Figma.",
        "QA/UAT is catching visual parity problems late.",
        "Designers are producing polished screens but not production-ready foundations.",
        "Product teams need faster experiments without lowering implementation quality.",
        "AI tools are available but workflow governance is missing.",
      ],
      whenNotToUse: [
        "The design system is still messy.",
        "Components lack clear naming, variants, states, or tokens.",
        "Engineering has not agreed on review ownership.",
        "Product logic is complex, regulated, or security-sensitive.",
        "The team wants AI to bypass code review.",
        "Designers are not ready to own Figma hygiene.",
        "Leadership expects magic automation instead of operating change.",
      ],
      principles: [
        {
          rule: "AI accelerates the system you already have.",
          note: "If the operating model is weak, AI scales the weakness.",
        },
        {
          rule: "Source quality determines output quality.",
          note: "Generation is only as reliable as the tokens, variants, and naming it reads.",
        },
        {
          rule: "Production-ready does not mean production-owned by AI.",
          note: "Foundations still pass engineering review before anything ships.",
        },
        {
          rule: "Human review becomes more important, not less.",
          note: "Output volume rises; human judgment is the gate that keeps quality flat.",
        },
        {
          rule: "Prompts and workflows are product infrastructure.",
          note: "Reusable patterns beat personal tricks; maintain them like code.",
        },
        {
          rule: "Engineering trust is the scaling constraint.",
          note: "Adoption grows at the speed engineers trust the output — not faster.",
        },
        {
          rule: "Start with controlled components before journeys.",
          note: "Prove the loop on small surfaces before screens and full flows.",
        },
        {
          rule: "AI should automate translation, not judgment.",
          note: "Repetitive UI translation is in scope; product and design decisions are not.",
        },
      ],
      inputs: [
        "Clean Figma components",
        "Naming conventions",
        "Tokens",
        "Variants",
        "States",
        "Responsive rules",
        "Accessibility basics",
        "Existing frontend conventions",
        "Component ownership",
        "Review ownership",
        "Prompt patterns",
        "QA/UAT path",
        "Production release path",
      ],
      steps: [
        {
          step: "Audit design-system readiness.",
          purpose: "Confirm the source system can support generation before any tooling.",
          owner: "Design, with engineering input",
          output: "Readiness gaps and a go / no-go call",
        },
        {
          step: "Select controlled components.",
          purpose: "Start where volume is high and judgment is low.",
          owner: "Design + engineering",
          output: "A pilot component list",
        },
        {
          step: "Clean Figma source structure.",
          purpose: "Make the source unambiguous — naming, tokens, variants, states.",
          owner: "Design",
          output: "Generation-ready components",
        },
        {
          step: "Define generation boundaries.",
          purpose: "Fix what AI may produce and what stays human-led.",
          owner: "Design + engineering leadership",
          output: "Written boundary rules",
        },
        {
          step: "Connect Figma structure through MCP.",
          purpose: "Give the generation tool structured design input, not screenshots.",
          owner: "Engineering setup; design owns the source",
          output: "A live design-to-tool connection",
        },
        {
          step: "Generate frontend foundation.",
          purpose: "Produce componentized, token-aligned, responsive starting code.",
          owner: "The designer or engineer operating the workflow",
          output: "A reviewable frontend foundation",
        },
        {
          step: "Run design visual QA.",
          purpose: "Verify parity, states, hierarchy, and responsive behavior.",
          owner: "Design",
          output: "Visual QA pass, or a fix list",
        },
        {
          step: "Run engineering review.",
          purpose: "Protect code quality, architecture, security, and integration.",
          owner: "Engineering",
          output: "Production-quality code, or rework notes",
        },
        {
          step: "Run product and QA validation.",
          purpose: "Confirm behavior against acceptance criteria and edge cases.",
          owner: "Product + QA",
          output: "A validated build",
        },
        {
          step: "Move through the normal release process.",
          purpose: "Ship with the same guarantees as any other code.",
          owner: "Engineering",
          output: "A released frontend",
        },
        {
          step: "Feed failures back into the design system.",
          purpose: "Convert defects into system improvements, not one-off fixes.",
          owner: "Design-system owner",
          output: "Updated components, tokens, and prompt patterns",
        },
      ],
      owners: [
        {
          role: "Design owns",
          owns: [
            "Figma structure",
            "Component naming",
            "Visual parity",
            "Design tokens usage",
            "Interaction intent",
            "State completeness",
            "Visual QA",
          ],
        },
        {
          role: "Engineering owns",
          owns: [
            "Code quality",
            "Architecture",
            "Performance",
            "Accessibility",
            "Security",
            "API integration",
            "State management",
            "Testing",
            "Deployment",
            "Maintainability",
          ],
        },
        {
          role: "Product owns",
          owns: [
            "Business intent",
            "Flow priority",
            "Experiment scope",
            "Acceptance criteria",
            "Outcome validation",
          ],
        },
        {
          role: "QA owns",
          owns: [
            "Functional validation",
            "Edge cases",
            "Regression",
            "Release confidence",
          ],
        },
      ],
      gateGroups: [
        {
          stage: "Before generation",
          checks: [
            "Figma source uses approved components.",
            "Tokens are applied.",
            "States are defined.",
            "Responsive expectations are clear.",
            "Component ownership is known.",
          ],
        },
        {
          stage: "Before engineering review",
          checks: [
            "Generated UI matches Figma visually.",
            "No hardcoded styles where tokens exist.",
            "Common states are present.",
            "Component structure is reusable.",
            "Known gaps are documented.",
          ],
        },
        {
          stage: "Before production",
          checks: [
            "Engineering review complete.",
            "Accessibility reviewed.",
            "Functional QA complete.",
            "Product validation complete.",
            "Release path followed.",
            "Learnings captured.",
          ],
        },
      ],
      metricsToTrack: [
        "Time from approved design to working frontend foundation",
        "Visual QA defects",
        "QA/UAT cycle time",
        "Number of handoff clarification loops",
        "Rework caused by visual mismatch",
        "Component reuse rate",
        "Token usage consistency",
        "Number of AI-generated components accepted after review",
        "Engineering review effort",
        "Accessibility issues found",
        "Adoption across squads and designers",
      ],
      metricsNote:
        "Track these before and after adoption. Targets depend on your product, team, and regulatory context — no benchmark numbers are implied here.",
      governance: [
        "AI cannot bypass design QA.",
        "AI cannot bypass engineering review.",
        "AI cannot own regulated or business logic.",
        "AI cannot ship code without the normal release process.",
        "Prompt patterns must be reusable.",
        "Generation failures must improve the system.",
        "Human owners remain accountable.",
      ],
      phases: [
        {
          phase: "Phase 1",
          title: "Foundation audit",
          detail:
            "Design-system hygiene: tokens, variants, states, and coded-component parity.",
        },
        {
          phase: "Phase 2",
          title: "Controlled component pilot",
          detail: "Use safe, high-volume components first.",
        },
        {
          phase: "Phase 3",
          title: "Screen-level generation",
          detail: "Move from components to screens only after pilot stability.",
        },
        {
          phase: "Phase 4",
          title: "Review loop standardization",
          detail:
            "Design QA, engineering review, product validation, and QA/UAT as a fixed loop.",
        },
        {
          phase: "Phase 5",
          title: "Scale across teams",
          detail: "Adoption, training, prompt libraries, and measurement.",
        },
      ],
      leadershipQuestions: [
        "What should AI be allowed to generate?",
        "What should remain human-led?",
        "What must engineering own?",
        "What source-system quality is required before scaling?",
        "What metrics prove the workflow is working?",
        "What risks increase if adoption is forced too early?",
        "Where can this create technical or design debt?",
        "How will failures improve the system?",
      ],
      derivedFromNote:
        "This operating guide is derived from the AI-native Product Development transformation story. The workflow also depends on the design-system and organizational maturity built in Building the Design Organization.",
      relatedGuides: [
        {
          title: "Design Systems",
          href: "/operating-manual/design-systems",
          description:
            "The system-readiness layer for clean components, tokens, states, naming, and governance before AI-assisted generation.",
        },
        {
          title: "Organization Design",
          href: "/operating-manual/organization-design",
          description:
            "The operating model that creates the ownership, review discipline, and engineering trust required before AI-native workflows can scale.",
        },
      ],
      futureAdditions: [
        "AI-readiness checklist",
        "Prompt pattern library",
        "Design-system audit template",
        "Visual QA rubric",
        "Engineering review checklist",
        "Governance checklist",
        "Adoption scorecard",
      ],
    },
  },
  {
    slug: "design-reviews",
    number: "04",
    category: "Quality Ritual",
    title: "Design Reviews",
    status: "In development",
    audience: "Design managers, design leads, product teams",
    thesis:
      "Design reviews are not approval meetings. They are quality systems for judgment, consistency, and shared product thinking.",
    whatItSolves: [
      "Random stakeholder feedback",
      "Taste-led decisions",
      "Inconsistent craft",
      "Weak rationale",
      "Designers working in isolation",
    ],
    principles: [
      "Critique should improve judgment, not punish taste.",
      "Reviews need decision criteria.",
      "Product context must enter craft discussion.",
      "Repeated rituals build culture.",
      "The best reviews reduce future ambiguity.",
    ],
    operatingModel: [
      {
        heading: "Inputs",
        items: [
          "Work framed with its problem, constraints, and intended outcome",
          "Shared quality standards the review measures against",
        ],
      },
      {
        heading: "Rituals",
        items: [
          "Fixed-cadence design reviews and peer critique",
          "Signoff review before development handoff",
        ],
      },
      {
        heading: "Decision rules",
        items: [
          "Feedback attaches to criteria, not to taste",
          "Unresolved debates leave with an owner and a deadline",
          "Product context can veto craft preference",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "Consistent quality across designers and product areas",
          "Documented rationale for significant design decisions",
          "Faster shared judgment over time",
        ],
      },
      {
        heading: "Ownership",
        items: [
          "A named facilitator owns cadence and standards",
          "Designers own bringing reviewable framing, not just screens",
        ],
      },
      {
        heading: "Review cadence",
        items: ["Weekly rituals; signoff at sprint boundaries"],
      },
    ],
    qualityGates: [
      "Reviews run against written criteria, not personal preference.",
      "Every review ends with clear decisions or owners.",
      "Critique is safe enough that juniors bring unfinished work.",
      "Signoff happens before the most expensive moment to fix quality.",
      "The ritual survives deadline pressure.",
    ],
    antiPatterns: [
      "Reviews as approval theater for stakeholders.",
      "Feedback by hierarchy instead of criteria.",
      "Skipping reviews whenever delivery gets busy.",
      "Critique that punishes taste instead of building judgment.",
      "Decisions that evaporate because nobody wrote them down.",
    ],
    relatedTransformations: [STORY_BUILDING_DESIGN_ORG],
    futureDepthNote: FUTURE_DEPTH_NOTE,
  },
  {
    slug: "stakeholder-management",
    number: "05",
    category: "Trust System",
    title: "Stakeholder Management",
    status: "In development",
    audience: "Design leaders, product leaders, senior ICs",
    thesis:
      "Stakeholder management is not alignment theater. It is the operating discipline of building trust before decisions become expensive.",
    whatItSolves: [
      "Late pushback",
      "PM solution requests",
      "Leadership skepticism",
      "Cross-functional friction",
      "Design seen as execution",
    ],
    principles: [
      "Do not introduce maturity as correction; introduce it as leverage.",
      "PMs need to feel design reduces risk, not control.",
      "Engineering trust depends on respecting implementation effort.",
      "Leadership needs business language, not design jargon.",
      "Pushback works best when grounded in shared outcomes.",
    ],
    operatingModel: [
      {
        heading: "Inputs",
        items: [
          "A map of stakeholders, incentives, and decision moments",
          "Shared outcomes agreed before disagreements arrive",
        ],
      },
      {
        heading: "Rituals",
        items: [
          "Recurring cross-functional reviews and syncs",
          "Early problem-brief conversations with PMs",
          "Regular leadership updates in business language",
        ],
      },
      {
        heading: "Decision rules",
        items: [
          "Disagree with evidence, not with opinion",
          "Escalate on outcomes, not on turf",
          "Trust-building precedes process-changing",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "Earlier design involvement in product decisions",
          "Fewer expensive late-stage reversals",
          "Leadership that treats design as a business capability",
        ],
      },
      {
        heading: "Ownership",
        items: [
          "The design leader owns the trust system, not just the relationships",
          "Every recurring stakeholder has a named design counterpart",
        ],
      },
      {
        heading: "Review cadence",
        items: ["Ongoing rituals; periodic relationship health checks"],
      },
    ],
    qualityGates: [
      "Stakeholders hear from design before decisions harden.",
      "PM conversations start from problems, not solution requests.",
      "Engineering effort is respected in every design ask.",
      "Leadership updates land in business language.",
      "Pushback is grounded in shared outcomes, not preference.",
    ],
    antiPatterns: [
      "Alignment theater: meetings that perform agreement without building it.",
      "Introducing new process as an indictment of the old one.",
      "Winning debates while losing trust.",
      "Design jargon in leadership rooms.",
      "Saving disagreements for the most expensive moment.",
    ],
    relatedTransformations: [STORY_BUILDING_DESIGN_ORG, STORY_AI_NATIVE],
    futureDepthNote: FUTURE_DEPTH_NOTE,
  },
];

export function getManualEntry(slug: string): ManualEntry | undefined {
  return manualEntries.find((e) => e.slug === slug);
}
