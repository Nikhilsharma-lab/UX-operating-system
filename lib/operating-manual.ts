/**
 * Operating Manual data.
 *
 * Each entry renders as a public-safe shell (status "Shell v1"): thesis,
 * principles, an operating-model outline, quality gates, and anti-patterns.
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

export type ManualStatus = "Shell v1" | "In development";

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
    status: "Shell v1",
    audience: "Design leaders, product leaders, founders",
    thesis:
      "A design organization does not scale through headcount alone. It scales through ownership, rituals, quality standards, and trust.",
    whatItSolves: [
      "Design treated as a service desk",
      "Scattered ownership",
      "Late involvement",
      "Weak product partnership",
      "Inconsistent quality",
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
      "Scaling headcount before scaling the operating model.",
      "Introducing process as correction instead of leverage.",
      "Designers accountable for screens but not outcomes.",
      "Rituals that exist on the calendar but not in behavior.",
      "Design maturity announced rather than earned.",
    ],
    relatedTransformations: [STORY_BUILDING_DESIGN_ORG],
    futureDepthNote: FUTURE_DEPTH_NOTE,
  },
  {
    slug: "design-systems",
    number: "02",
    category: "Product Infrastructure",
    title: "Design Systems",
    status: "Shell v1",
    audience: "Design leaders, engineering leaders, product teams",
    thesis:
      "A design system is not a Figma library. It is product infrastructure for consistency, speed, governance, and implementation quality.",
    whatItSolves: [
      "Inconsistent UI",
      "Design debt",
      "Engineering rework",
      "Weak component governance",
      "Slow handoff",
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
      "A large library with no governance.",
      "Documentation standing in for ownership.",
      "System decisions made only by whoever shipped last.",
      "Letting drift between Figma and code accumulate silently.",
      "Treating the system as decoration instead of infrastructure.",
    ],
    relatedTransformations: [STORY_BUILDING_DESIGN_ORG, STORY_AI_NATIVE],
    futureDepthNote: FUTURE_DEPTH_NOTE,
  },
  {
    slug: "ai-workflow",
    number: "03",
    category: "AI-native Delivery",
    title: "AI Workflow",
    status: "Shell v1",
    audience: "Design leaders, product leaders, engineering leaders",
    thesis:
      "AI-native workflows should compress repetitive translation work without bypassing human judgment or engineering ownership.",
    whatItSolves: [
      "Manual Figma-to-code translation",
      "QA/UAT drift",
      "Repetitive frontend work",
      "Slow experimentation",
      "Weak design-to-production continuity",
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
      "Adding AI on top of a messy design system.",
      "Treating generated code as shippable without review.",
      "Framing the workflow as designers replacing developers.",
      "One-off prompt cleverness instead of repeatable systems.",
      "Letting AI scope creep into security- or data-sensitive logic.",
    ],
    relatedTransformations: [STORY_AI_NATIVE],
    futureDepthNote: FUTURE_DEPTH_NOTE,
  },
  {
    slug: "design-reviews",
    number: "04",
    category: "Quality Ritual",
    title: "Design Reviews",
    status: "Shell v1",
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
    status: "Shell v1",
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
