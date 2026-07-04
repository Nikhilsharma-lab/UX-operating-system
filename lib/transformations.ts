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
 * Prompts are editorial noun-phrases: a dossier table of contents, not a form.
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

/** Editorial cross-reference from a story to a reusable Operating Manual guide. */
export type RelatedOperatingGuide = {
  title: string;
  href: string;
  description: string;
};

export type TransformationStory = {
  slug: string;
  index: string;
  title: string;
  capability: string;
  /** Public-approved qualitative proof line. */
  proves: string;
  /** Gated numeric proof, internal mode only (e.g. Digital Gold 28×). */
  provesMetric?: string;
  primaryAudience: string;
  status: StoryStatus;
  /** Per-section evidence-intake prompts shown in internal mode. */
  evidence: Partial<Record<number, string[]>>;
  /** Drafted narrative (Draft v1). When present, the public page renders prose. */
  draft?: Partial<Record<number, DraftBlock[]>>;
  /** Cross-references to reusable Operating Manual guides derived from this story. */
  relatedOperatingGuides?: RelatedOperatingGuide[];
  sourceFile: string;
};

const buildingDesignOrganizationDraft: Partial<Record<number, DraftBlock[]>> = {
  1: [
    {
      type: "p",
      text: "In 2017, Airtel Payments Bank was scaling digital financial products in a regulated, high-pressure environment. Product teams were moving fast, but design was not yet operating as a centralized strategic function. There was no mature design system, no regular research practice, and no formal design-review culture. Design work often arrived late, framed as execution.",
    },
  ],
  2: [
    {
      type: "p",
      text: "The business needed product teams to ship faster and at higher quality, but the operating model produced avoidable rework. Inconsistent experiences, unclear handoffs, and uneven product quality slowed delivery and, in regulated financial products, put real pressure on customer trust and adoption.",
    },
  ],
  3: [
    {
      type: "p",
      text: "The deeper challenge was not design quality. Design was treated as a service function. Product managers, under real pressure to ship, were used to bringing solutions rather than problems. Designers were used to completing tasks. Engineering received uneven handoffs. Leadership, in a sales- and telco-oriented culture, had not yet consistently seen design as a business capability.",
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
        "Organizational politics and ownership tensions.",
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
      text: "Research moved product debate away from opinion-based pushback and toward evidence from real customer behavior, which is what eventually changed how decisions were argued.",
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
      text: "Reviews and signoff lifted quality but could feel like a brake on delivery. Asking PMs for problem briefs created early friction before it created partnership. And shared standards improved scale while feeling restrictive to designers who valued individual range. None of these were free. Each was a deliberate trade in service of a more reliable system.",
    },
  ],
  8: [
    {
      type: "p",
      text: "Nikhil built the design operating model deliberately: structure, rituals, standards, and collaboration rather than chasing individual screens.",
    },
    {
      type: "list",
      items: [
        "Team: design capability scaled from 0→20, with 20 designers hired directly: visual designers, researchers, UX designers, and a UX copywriter.",
        "Structure: four pods, each with senior and junior designers, and four design leads reporting to Nikhil.",
        "Operating rhythm: Monday design reviews, 14-day product reviews, Friday critiques, weekly show-and-tell, sprint planning, design-dev sync, office hours, and weekly 1:1s.",
        "Growth: monthly three-hour upskilling sessions.",
        "Quality gate: design signoff at sprint end, before development handoff.",
        "Foundations: design-system governance (Vault) and quarterly research reports.",
      ],
    },
    {
      type: "note",
      text: "Nikhil led the shift, but the operating model only became real when designers, PMs, and engineering partners began using the same standards in live product work, not when a process was announced.",
    },
  ],
  9: [
    {
      type: "p",
      text: "The outcome was not only a larger design team; it was a more reliable product operating system across regulated products that serve 12M+ monthly active users and 1B+ transactions since 2017, a foundation the wider product organization could build on.",
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
      text: "Evidence areas tracked behind this story: organizational scale (0→20, with 20 designers hired directly), field research (50+ field studies and 500+ user interviews / research conversations), and product-delivery quality.",
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

const aiNativeProductDevelopmentDraft: Partial<Record<number, DraftBlock[]>> = {
  1: [
    {
      type: "p",
      text: "By the time this work began, Airtel Payments Bank had matured its design capability and built Vault, a central design system spanning the consumer app, business apps, the website, and internal artifacts. The design foundation was strong and widely adopted. What had not matured was the path from design to production: turning an approved Figma screen into shipped frontend was still a manual crossing, made component by component.",
    },
  ],
  2: [
    {
      type: "p",
      text: "The cost landed on the whole product organization, not only on visual polish. Repetitive frontend translation created rework, stretched QA and UAT cycles, produced inconsistent implementation, delayed experiments, and lowered confidence in what would actually ship.",
    },
    {
      type: "p",
      text: "It was not a skill problem. The work that consumed the most delivery time carried the least product judgment, and the organization paid that cost on every screen.",
    },
  ],
  3: [
    {
      type: "p",
      text: "The deeper challenge was structural. Design, the design system, engineering, and QA still operated as separate translation layers. Figma held design intent. Engineering held production reality. QA found the mismatches between them late, after the expensive work was done.",
    },
    {
      type: "p",
      text: "The organization had a design system, but not a design-to-production system: no shared path where intent became implementation without being rebuilt by hand.",
    },
  ],
  4: [
    {
      type: "p",
      text: "The constraints clustered into a few real risks, not a checklist:",
    },
    {
      type: "list",
      items: [
        "Trust and quality: engineering skepticism about AI-generated code, and genuine concerns about code quality, security, accessibility, responsiveness, and production readiness.",
        "Source quality: token and component mismatches between Figma and code, plus gaps in the design team's implementation-aware skills.",
        "Governance: version control, compliance in a regulated environment, and the need for clear review and ownership.",
        "Adoption: leadership skepticism about introducing AI tooling inside a regulated bank.",
      ],
    },
  ],
  5: [
    {
      type: "p",
      text: "This was not only user research; it was workflow research. Nikhil and the team treated the handoff itself as the object of study, mapping exactly where design-to-engineering translation broke down.",
    },
    {
      type: "list",
      items: [
        "Spacing and visual parity between Figma and code.",
        "Missing or inconsistent component states.",
        "Specs that varied from designer to designer.",
        "Responsive behavior and edge cases discovered late.",
        "Repeated QA and UAT loops on the same classes of issue.",
        "Engineering effort spent rebuilding UI that already existed in Figma.",
        "Unclear ownership between design QA and engineering QA.",
      ],
    },
  ],
  6: [
    {
      type: "p",
      text: "The shift rested on a set of deliberate decisions about where AI belonged in the workflow and, just as importantly, where it did not.",
    },
    {
      type: "decisions",
      items: [
        { decision: "Add AI to Vault only after the design-system foundations were stable.", why: "AI amplifies whatever it reads; unstable foundations would only scale inconsistency.", tradeoff: "Waiting, while the manual workflow kept costing time.", result: "AI worked from a coherent source, not a messy one." },
        { decision: "Use AI to reduce implementation friction, not to replace engineering.", why: "The waste was repetitive translation, not engineering judgment.", tradeoff: "Less dramatic than an 'AI builds the product' story.", result: "Engineering stayed the owner of production quality." },
        { decision: "Keep humans in the review loop.", why: "Generated code is a starting point, not a guarantee.", tradeoff: "Review time stays in the workflow.", result: "Speed without surrendering quality." },
        { decision: "Treat prompts and workflows as product infrastructure.", why: "Repeatable systems beat one-off cleverness.", tradeoff: "Up-front effort to build and maintain them.", result: "A workflow the team could use, not a personal trick." },
        { decision: "Make design tokens and components AI-readable.", why: "Structured, named inputs produce reliable outputs.", tradeoff: "Stricter Figma hygiene and discipline.", result: "Cleaner generation, less correction." },
        { decision: "Define 'production-ready frontend' carefully.", why: "An overstated claim would erode engineering trust.", tradeoff: "A more modest promise.", result: "Componentized, token-aligned, responsive foundations that still require engineering review, not code shipped without engineering ownership." },
      ],
    },
    {
      type: "note",
      text: "The full workflow rested on more decisions than the six above: starting with controlled components before full screens, using AI first for repetitive UI patterns, letting designers generate foundations without bypassing engineering quality, separating visual QA from engineering QA, keeping business logic outside early AI generation, and keeping LANE separate from Vault. Those are carried in the canonical story and future Operating Manual material; the six shown here are the ones that most shaped where AI belonged, and where it did not.",
    },
  ],
  7: [
    {
      type: "p",
      text: "Every advantage came with a counterweight. AI could speed up repetitive UI work, but it could just as easily accelerate inconsistency if the source design system was weak. Designers gained real leverage, but only by becoming more disciplined about Figma hygiene, tokens, variants, states, and implementation thinking.",
    },
    {
      type: "p",
      text: "Engineering spent less time on repetitive translation, yet still had to own production quality; review never went away. Starting with controlled components slowed the initial rollout, but it avoided scaling a broken workflow. And keeping business logic outside early AI generation limited scope on purpose, to protect quality and safety in a regulated environment.",
    },
  ],
  8: [
    {
      type: "p",
      text: "Nikhil shifted Vault from a Figma-first design system toward AI-assisted design-to-code infrastructure, connecting cleaner Figma components, tokens, and variants to a generate-review-refine workflow rather than a static handoff.",
    },
    {
      type: "list",
      items: [
        "A designer creates or updates a component or screen in Figma.",
        "The component is checked against the design system.",
        "Figma MCP connects the design file to Claude Code.",
        "Claude Code reads the Figma structure and maps it to the frontend stack.",
        "A designer or engineer gives implementation instructions.",
        "Claude Code generates a frontend foundation: componentized, token-aligned, and responsive.",
        "The designer performs visual QA: accuracy, interaction quality, responsive behavior, hierarchy, and design-system compliance.",
        "Engineering reviews the code and owns quality, architecture, performance, accessibility, security, and integration.",
        "Product and QA validate behavior.",
        "The code moves through the normal release process.",
        "Learnings feed back into the design system.",
      ],
    },
    {
      type: "p",
      text: "The stack was conventional and public-safe: Figma MCP, Claude Code (with Cursor and Codex), and a Next.js / React / Tailwind frontend built on design tokens, shipped through Vercel and an existing internal frontend system.",
    },
    {
      type: "note",
      text: "LANE is a separate system. Vault and this workflow are about design-system-to-frontend execution; LANE is an AI-native product-ops platform for problem framing and PM/design intake. LANE was not part of this workflow or the 85% QA/UAT reduction.",
    },
  ],
  9: [
    {
      type: "list",
      items: [
        "Frontend QA/UAT time dropped by about 85% over two years.",
        "For a single flow, QA/UAT moved from around a day to an hour or less.",
        "20 designers worked in the new workflow.",
        "Prototyping and handoff both got faster.",
        "Implementation became more consistent.",
        "Fewer QA defects, and less rework.",
        "Engineering dependency shifted from repetitive UI translation toward higher-value work: review, architecture, integration, performance, accessibility, and maintainability.",
        "Trust in what would actually ship improved.",
      ],
    },
    {
      type: "note",
      text: "AI did not replace the product team. It compressed the waste between design intent and shipped UI.",
    },
  ],
  10: [
    {
      type: "list",
      items: [
        "AI-native workflows are operating-model changes, not tool rollouts.",
        "Source quality determines output quality.",
        "Prompt discipline matters as much as design discipline.",
        "Human review becomes more important, not less.",
        "Engineering trust is a prerequisite, not a byproduct.",
        "AI should automate repetitive translation, not product judgment.",
        "The goal is not designers generating code; it is reducing the waste between design intent and shipped product.",
      ],
    },
    {
      type: "note",
      text: "AI will not fix a weak design system. It will expose it.",
    },
  ],
  11: [
    {
      type: "list",
      items: [
        "Audit the design system's AI-readiness earlier.",
        "Set stricter foundations first: naming, variants, tokens, states, accessibility, responsive rules, and coded-component parity.",
        "Run smaller, more controlled pilots.",
        "Build prompt libraries sooner.",
        "Involve engineering from the start.",
        "Measure workflow impact from day one: time saved, QA issues reduced, visual defects avoided, engineering rework reduced, and adoption across squads.",
      ],
    },
  ],
  12: [
    {
      type: "list",
      items: [
        "Executable Design System: a design system structured to support frontend generation, not only visual reuse.",
        "Design-to-Production Workflow: a repeatable path from Figma structure to generated frontend foundation to engineering review.",
        "AI-readiness for Design Systems: the hygiene bar for naming, variants, tokens, states, accessibility, and responsive behavior before AI generation.",
        "Human-in-the-Loop Review Model: the rule that AI output must pass design QA, engineering review, product validation, and QA/UAT.",
        "Visual QA vs Engineering QA: a separation of visual-parity ownership from code quality and production ownership.",
        "Prompt Systems as Product Infrastructure: reusable prompts and workflow rules treated as part of the delivery system, not ad hoc commands.",
        "Generate / Review / Refine / Ship: the operating loop that keeps AI useful without bypassing governance.",
        "AI Governance for Product Teams: the boundaries for what AI can generate, what humans must review, and what cannot be automated.",
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
        "AI will expose your design system",
        "Design-to-code is not the same as shipping",
        "Why AI-native teams need stronger governance",
        "Prompting as product infrastructure",
        "The future design system is executable",
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
        "AI Workflow",
        "Design Systems",
        "Design Reviews",
        "Product Reviews",
        "Decision Making",
        "Stakeholder Management",
        "Research",
        "Engineering Collaboration",
        "Quality Gates",
      ],
    },
  ],
  15: [
    {
      type: "p",
      text: "Evidence areas tracked behind this story: the AI-assisted design-to-code workflow (Figma MCP, Claude Code, Vault), QA/UAT impact (about 85% over two years; a single flow from roughly a day to an hour or less), and workflow adoption across 20 designers.",
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
        "AI workflow template",
        "Design system AI-readiness checklist",
        "Conference proposal",
        "Product demo narrative",
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
      "Built the operating model behind a maturing product design organization: teams, rituals, quality standards, and trust, not only design output.",
    primaryAudience: "VP Design / Chief Design Officer",
    status: "Draft v1",
    sourceFile: "TRANSFORMATION_STORIES/BUILDING_DESIGN_ORGANIZATION.md",
    draft: buildingDesignOrganizationDraft,
    relatedOperatingGuides: [
      {
        title: "Organization Design",
        href: "/operating-manual/organization-design",
        description:
          "A reusable guide for building the ownership, rituals, quality standards, and trust behind a mature design organization.",
      },
      {
        title: "Design Systems",
        href: "/operating-manual/design-systems",
        description:
          "A reusable guide for turning component libraries into governed product infrastructure.",
      },
    ],
    evidence: {
      9: [
        "0→20 and 20 direct hires public-approved; exact rework-reduction figure not claimed without evidence",
        "Business-impact line uses 12M+ MAU and 1B+ transactions since 2017 as context scale only; public-approved, external verification pending; design is not claimed as sole cause",
      ],
      15: ["500+ user interviews / research conversations: public-approved by Nikhil (Decision 046); external verification pending; supporting artifact recommended before broad public launch", "50+ field studies: confirmed and public-safe"],
    },
  },
  {
    slug: "ai-native-product-development",
    index: "02",
    title: "AI-native Product Development",
    capability: "AI-native Product Development",
    proves:
      "Applied AI-assisted design-to-code workflows that reduced implementation friction and improved product delivery quality, with engineering ownership intact.",
    primaryAudience: "AI Product Builder / Engineering Leader",
    status: "Draft v1",
    sourceFile: "TRANSFORMATION_STORIES/AI_NATIVE_PRODUCT_DEVELOPMENT.md",
    draft: aiNativeProductDevelopmentDraft,
    relatedOperatingGuides: [
      {
        title: "AI Workflow",
        href: "/operating-manual/ai-workflow",
        description:
          "A reusable operating guide for compressing the gap between design intent and shipped UI without bypassing design QA, engineering review, or product validation.",
      },
      {
        title: "Design Systems",
        href: "/operating-manual/design-systems",
        description:
          "The design-system foundation required before AI-assisted design-to-code workflows can scale.",
      },
    ],
    evidence: {
      8: [
        "Vault described public-safe (design system → AI-assisted design-to-code infra); no internal repo names, architecture, exact prompts, or security detail",
        "LANE kept separate from Vault and from the 85% figure (Decision 027 / CLAIM-007)",
        "'production-ready' always defined as componentized/token-aligned/responsive foundations that still require engineering review",
      ],
      9: [
        "85% QA/UAT reduction over two years and single-flow ~1 day → ~1 hour: user-confirmed / public-approved (CLAIM-004 / CLAIM-011), external verification pending",
        "20 designers used the workflow; 'zero developer dependency' softened to reduced repetitive translation / lower routine-UI dependency",
      ],
    },
  },
  {
    slug: "digital-gold-growth",
    index: "03",
    title: "Digital Gold Growth",
    capability: "Behavioral Growth",
    proves:
      "A behavioral-growth story being prepared to document the baseline, timeframe, product decisions, and attribution behind the selected 28× growth outcome.",
    primaryAudience: "Founder / CEO",
    status: "Evidence Intake Required",
    sourceFile: "TRANSFORMATION_STORIES/DIGITAL_GOLD_GROWTH.md",
    evidence: {
      1: ["What Digital Gold is (public-safe description)", "The business and market moment"],
      2: ["The business problem (low adoption / activation / retention)", "Why it mattered commercially"],
      5: ["The customer-behavior barrier (why users avoided lump-sum gold purchases)", "Research behind the ₹10/day SIP-style approach"],
      6: ["The core product decision (low-commitment recurring micro-investment vs lump sum)", "Behavioral framing and entry-point decisions"],
      8: ["Activation mechanics (onboarding, defaults, nudges, habit loop)"],
      9: ["28× is public-approved as a selected headline outcome (homepage + story lede, Decision 046); external verification pending. The full story must document baseline, final number, timeframe, exact metric type, and attribution before publication."],
      12: ["Candidate framework: Behavioral Growth Engine / Product Confidence Pyramid"],
    },
  },
];

export function getStory(slug: string): TransformationStory | undefined {
  return transformations.find((s) => s.slug === slug);
}
