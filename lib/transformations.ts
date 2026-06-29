/**
 * Transformation story data.
 *
 * Stories without a `draft` render as evidence-gated "in preparation" outlines
 * (canonical 16-part framework). A story with a `draft` (status "Draft v1")
 * renders its evidence-backed narrative publicly. No numbers or outcomes are
 * invented here; unverified claims stay out of the public draft.
 */

export type FrameworkSection = {
  n: number;
  title: string;
  /** Generic, non-sensitive guiding question (safe to show publicly). */
  prompt: string;
};

/**
 * Canonical 16-part structure (mirrors TRANSFORMATION_STORIES/FRAMEWORK.md).
 * Prompts are editorial noun-phrases — a dossier table of contents, not a form.
 */
export const STORY_FRAMEWORK: FrameworkSection[] = [
  { n: 1, title: "Context", prompt: "The business, product, and market situation at the time." },
  { n: 2, title: "Business Problem", prompt: "The business outcome this transformation was created to address." },
  { n: 3, title: "Organizational Challenge", prompt: "The organizational condition that made the work difficult." },
  { n: 4, title: "Constraints", prompt: "The constraints that shaped what was possible." },
  { n: 5, title: "Research", prompt: "The evidence that informed the direction." },
  { n: 6, title: "Decisions", prompt: "The decisions that carried the most judgment." },
  { n: 7, title: "Tradeoffs", prompt: "What was given up to move the work forward." },
  { n: 8, title: "Execution", prompt: "How the work was turned into operating reality." },
  { n: 9, title: "Outcomes", prompt: "What measurably changed as a result." },
  { n: 10, title: "Lessons", prompt: "What this work teaches beyond the story itself." },
  { n: 11, title: "What I’d Do Differently", prompt: "What a second attempt would change." },
  { n: 12, title: "Frameworks Created", prompt: "The reusable model this work produced." },
  { n: 13, title: "Related Essays", prompt: "The thinking this story connects to." },
  { n: 14, title: "Related Operating Manual Pages", prompt: "The operating systems behind the work." },
  { n: 15, title: "Related Evidence", prompt: "The evidence that supports the claims." },
  { n: 16, title: "Related Future Formats", prompt: "How this story compounds into other formats." },
];

export type DecisionCard = {
  decision: string;
  why: string;
  tradeoff: string;
  result: string;
};

export type DraftBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "decisions"; items: DecisionCard[] }
  | { type: "note"; text: string };

export type StoryStatus = "Evidence Intake Required" | "Draft v1";

export type TransformationStory = {
  slug: string;
  index: string;
  title: string;
  capability: string;
  /** Public-approved qualitative proof line. */
  proves: string;
  /** Gated numeric proof — internal mode only (e.g. Digital Gold 28×). */
  provesMetric?: string;
  primaryAudience: string;
  status: StoryStatus;
  /** Per-section evidence-intake prompts shown in internal mode. */
  evidence: Partial<Record<number, string[]>>;
  /** Drafted narrative (Draft v1). When present, the public page renders prose. */
  draft?: Partial<Record<number, DraftBlock[]>>;
  sourceFile: string;
};

const buildingDesignOrganizationDraft: Partial<Record<number, DraftBlock[]>> = {
  1: [
    {
      type: "p",
      text: "In 2017, Airtel Payments Bank was scaling digital financial products in a regulated, high-pressure environment. Product teams were moving fast, but design was not yet operating as a centralized strategic function. There was no mature design system, no regular research practice, and no formal design-review culture — design work often arrived late, framed as execution.",
    },
  ],
  2: [
    {
      type: "p",
      text: "The business needed product teams to ship faster and at higher quality, but the operating model produced avoidable rework. Inconsistent experiences, unclear handoffs, and uneven product quality slowed delivery — and, in regulated financial products, put real pressure on customer trust and adoption.",
    },
  ],
  3: [
    {
      type: "p",
      text: "The deeper challenge was not design quality. Design was treated as a service function. Product managers, under real pressure to ship, were used to bringing solutions rather than problems. Designers were used to completing tasks. Engineering received uneven handoffs. Leadership — in a sales- and telco-oriented culture — had not yet consistently seen design as a business capability.",
    },
    {
      type: "p",
      text: "Changing this was a trust problem before it was a process problem. Design maturity could not be installed; it had to be earned, gradually, across people who each had reasonable incentives for the status quo.",
    },
  ],
  4: [
    {
      type: "list",
      items: [
        "A regulated banking environment with slow internal approvals.",
        "Legacy systems and constrained engineering bandwidth.",
        "Solution-first PM intake habits and low organizational design maturity.",
        "Hiring and budget constraints.",
        "Leadership skepticism from a sales/telco-oriented culture.",
        "Multiple product lines and constant business urgency.",
        "Low-literacy users requiring more explicit, trust-building experiences.",
        "Internal politics and ownership tensions.",
      ],
    },
  ],
  5: [
    {
      type: "p",
      text: "Nikhil built a regular field-research practice: monthly local-market visits and quarterly field visits across Indian states, focused mostly on Tier 2 and Tier 3 cities and sometimes rural areas. Over time, this practice grew into 50+ field studies across Tier 2, Tier 3, and occasional rural contexts, and the team published quarterly research reports for leadership and stakeholders.",
    },
    {
      type: "p",
      text: "Research moved product debate away from opinion-based pushback and toward evidence from real customer behavior — which is what eventually changed how decisions were argued.",
    },
  ],
  6: [
    {
      type: "p",
      text: "The transformation rested on a small number of decisions made consistently over time, not on a single reorganization.",
    },
    {
      type: "decisions",
      items: [
        { decision: "Build an internal design organization rather than rely on agencies.", why: "Durable product context compounds; outsourced work resets each project.", tradeoff: "Time, budget, and leadership ownership.", result: "A capability that grew instead of restarting." },
        { decision: "Move design upstream in the product lifecycle.", why: "The leverage is in problem framing, not pixels.", tradeoff: "Designers became accountable for business, data, and strategy.", result: "Earlier, better-aligned decisions." },
        { decision: "Create structured design reviews and critiques.", why: "Shared standards beat individual taste.", tradeoff: "Could be perceived as slowing teams down.", result: "Consistent quality and faster shared judgment." },
        { decision: "Start regular field research and customer immersion.", why: "Real behavior, not assumptions, should settle debates.", tradeoff: "Time, and it challenged existing beliefs.", result: "Evidence-led product conversations." },
        { decision: "Build design-system governance, not just a UI kit.", why: "A kit decays without ownership.", tradeoff: "More standards and process.", result: "Consistency, faster handoff, less rework." },
        { decision: "Hire product-minded designers, not only visual specialists.", why: "The work was product, not decoration.", tradeoff: "A harder, slower hiring bar.", result: "Designers who could own outcomes." },
        { decision: "Introduce design signoff before development handoff.", why: "Protect quality at the most expensive moment to fix it.", tradeoff: "Designers stayed involved longer.", result: "Fewer downstream defects." },
        { decision: "Shift PM intakes from solution requests to problem briefs.", why: "Solving the right problem beats executing the wrong one.", tradeoff: "Early friction with PMs.", result: "Better problems, better products." },
        { decision: "Tie design work to measurable business and user outcomes.", why: "Credibility comes from outcomes, not opinions.", tradeoff: "It exposed design to accountability.", result: "Leadership trust in design." },
        { decision: "Build a culture where designers challenge briefs respectfully.", why: "Deference produces weak products.", tradeoff: "Required maturity and trust on both sides.", result: "A partnership, not a service desk." },
      ],
    },
  ],
  7: [
    {
      type: "p",
      text: "Every gain carried a cost. Building an internal organization required time, budget, and sustained leadership ownership. Moving design upstream raised the bar on the team: designers became accountable for business, data, and product strategy, not just for finished screens.",
    },
    {
      type: "p",
      text: "Reviews and signoff lifted quality but could feel like a brake on delivery. Asking PMs for problem briefs created early friction before it created partnership. And shared standards improved scale while feeling restrictive to designers who valued individual range. None of these were free — each was a deliberate trade in service of a more reliable system.",
    },
  ],
  8: [
    {
      type: "p",
      text: "Nikhil built the design operating model deliberately — structure, rituals, standards, and collaboration — rather than chasing individual screens.",
    },
    {
      type: "list",
      items: [
        "Team: design capability scaled from 0→20, with 20 designers hired directly — visual designers, researchers, UX designers, and a UX copywriter.",
        "Structure: four pods, each with senior and junior designers, and four design leads reporting to Nikhil.",
        "Operating rhythm: Monday design reviews, 14-day product reviews, Friday critiques, weekly show-and-tell, sprint planning, design–dev sync, office hours, and weekly 1:1s.",
        "Growth: monthly three-hour upskilling sessions.",
        "Quality gate: design signoff at sprint end, before development handoff.",
        "Foundations: design-system governance (Vault) and quarterly research reports.",
      ],
    },
    {
      type: "note",
      text: "Nikhil led the shift, but the operating model only became real when designers, PMs, and engineering partners began using the same standards in live product work — not when a process was announced.",
    },
  ],
  9: [
    {
      type: "p",
      text: "The outcome was not only a larger design team; it was a more reliable product operating system across regulated products that serve 12M+ monthly active users and 1B+ transactions since 2017 — a foundation the wider product organization could build on.",
    },
    {
      type: "list",
      items: [
        "Design capability scaled from 0→20, with 20 designers hired directly.",
        "Design moved from scattered service execution to a strategic product function.",
        "Research became a recurring product input.",
        "Design reviews and critique created shared quality standards.",
        "Design-system governance improved consistency and handoff.",
        "Designers became more product-fluent, working in analytics and metrics language.",
        "Engineering handoff became more structured.",
        "Leadership began treating design as a business capability.",
      ],
    },
    {
      type: "note",
      text: "Later design-system and AI-assisted workflow maturity (Vault) contributed to an 85% reduction in QA time over two years. That outcome belongs to the AI-native Product Development story.",
    },
  ],
  10: [
    {
      type: "list",
      items: [
        "Design maturity does not improve only because designers get better.",
        "It improves when the product system around design changes.",
        "Process adoption is emotional and political, not only rational.",
        "Introduce design maturity as leverage, not as correction.",
        "Artifact change is fast; operating-model change is slow.",
        "A Figma library can be built in weeks; design culture takes years.",
      ],
    },
    {
      type: "note",
      text: "Design transformation is not a Figma transformation. It is a trust transformation.",
    },
  ],
  11: [
    {
      type: "list",
      items: [
        "Sequence the transformation more carefully.",
        "Start with a clearer design operating model.",
        "Create one or two visible business wins early.",
        "Upgrade the team's product thinking before expecting strategic partnership.",
        "Align leadership earlier, so PM and engineering adoption became easier.",
        "Avoid trying to improve too many systems in parallel.",
      ],
    },
  ],
  12: [
    {
      type: "list",
      items: [
        "Design Operating Model",
        "Problem Brief over Solution Request",
        "Design Review / Critique Rituals",
        "Research-to-Decision Loop",
        "Design System Governance",
        "Design Signoff",
        "Trust Transformation Model",
        "Ambiguity to Outcome",
      ],
    },
  ],
  13: [
    {
      type: "p",
      text: "Planned essays that will expand this story:",
    },
    {
      type: "list",
      items: [
        "Why case studies are too small for executive work",
        "Design transformation is not a Figma transformation",
        "How design earns executive trust",
        "Why PMs should bring problems, not solutions",
        "Design systems are product infrastructure",
      ],
    },
  ],
  14: [
    {
      type: "p",
      text: "Operating Manual areas this story will connect to:",
    },
    {
      type: "list",
      items: [
        "Organization Design",
        "Hiring",
        "Design Reviews",
        "Product Reviews",
        "Research",
        "Design Systems",
        "Stakeholder Management",
        "Decision Making",
        "AI Workflow",
        "Career Ladders",
      ],
    },
  ],
  15: [
    {
      type: "p",
      text: "Evidence areas tracked behind this story: organizational scale (0→20, with 20 designers hired directly), field research (50+ field studies), and product-delivery quality. A broader interview count is still being confirmed before any specific number is published.",
    },
  ],
  16: [
    {
      type: "p",
      text: "Ways this transformation can become reusable:",
    },
    {
      type: "list",
      items: [
        "LinkedIn post",
        "X thread",
        "Talk",
        "Workshop",
        "Operating Manual chapter",
        "Hiring rubric",
        "Design leadership course module",
        "Conference proposal",
      ],
    },
  ],
};

export const transformations: TransformationStory[] = [
  {
    slug: "building-design-organization",
    index: "01",
    title: "Building the Design Organization",
    capability: "Organizational Design",
    proves:
      "Nikhil can build the operating system of a product design organization, not just manage design output.",
    primaryAudience: "VP Design / Chief Design Officer",
    status: "Draft v1",
    sourceFile: "TRANSFORMATION_STORIES/BUILDING_DESIGN_ORGANIZATION.md",
    draft: buildingDesignOrganizationDraft,
    evidence: {
      9: [
        "0→20 and 20 direct hires public-approved; exact rework-reduction figure not claimed without evidence",
        "Business-impact line uses 12M+ MAU and 1B+ transactions since 2017 as context scale only — public-approved, external verification pending; design is not claimed as sole cause",
      ],
      15: ["500+ interviews — still needs checking; do not publish as a hard claim. Use 'field research and user conversations' instead.", "50+ field studies — confirmed and public-safe"],
    },
  },
  {
    slug: "ai-native-product-development",
    index: "02",
    title: "AI-native Product Development",
    capability: "AI-native Product Development",
    proves:
      "Nikhil is applying AI-assisted design-to-code workflows to reduce implementation friction and improve product delivery quality.",
    primaryAudience: "AI Product Builder / Engineering Leader",
    status: "Evidence Intake Required",
    sourceFile: "TRANSFORMATION_STORIES/AI_NATIVE_PRODUCT_DEVELOPMENT.md",
    evidence: {
      1: ["The product-development workflow that existed before (design → handoff → engineering)", "Where the friction and rework happened"],
      2: ["The cost of the old workflow (speed, rework, quality, alignment)"],
      6: ["What AI-assisted workflow was introduced and why", "Figma MCP / Claude Code / design-to-code choices", "Automation boundaries (what AI does vs what humans decide)"],
      8: ["Vault (public-safe description, role in the workflow)", "Engineering collaboration model after the change", "Rollout and governance"],
      9: ["QA-time impact — register in CLAIMS_REGISTER; confidentiality review before any number goes public"],
      15: ["Confidentiality note: define public-safe vs private (internal architecture, security-relevant detail)"],
    },
  },
  {
    slug: "digital-gold-growth",
    index: "03",
    title: "Digital Gold Growth",
    capability: "Behavioral Growth",
    proves:
      "Nikhil connects customer behavior, product decisions, and measurable business growth.",
    // GATED — internal mode only until baseline/final/timeframe/metric-type/attribution captured
    provesMetric: "28× growth in Digital Gold adoption.",
    primaryAudience: "Founder / CEO",
    status: "Evidence Intake Required",
    sourceFile: "TRANSFORMATION_STORIES/DIGITAL_GOLD_GROWTH.md",
    evidence: {
      1: ["What Digital Gold is (public-safe description)", "The business and market moment"],
      2: ["The business problem (low adoption / activation / retention)", "Why it mattered commercially"],
      5: ["The customer-behavior barrier (why users avoided lump-sum gold purchases)", "Research behind the ₹10/day SIP-style approach"],
      6: ["The core product decision (low-commitment recurring micro-investment vs lump sum)", "Behavioral framing and entry-point decisions"],
      8: ["Activation mechanics (onboarding, defaults, nudges, habit loop)"],
      9: ["GATED: 28× figure stays hidden publicly until baseline, final number, timeframe, exact metric type, and attribution are captured"],
      12: ["Candidate framework: Behavioral Growth Engine / Product Confidence Pyramid"],
    },
  },
];

export function getStory(slug: string): TransformationStory | undefined {
  return transformations.find((s) => s.slug === slug);
}
