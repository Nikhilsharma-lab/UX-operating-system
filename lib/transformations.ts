/**
 * Transformation story data — v1 evidence-gated drafts.
 *
 * These are NOT finished prose. Each story is the canonical 16-part framework
 * plus per-section evidence-intake prompts. Public mode shows a restrained
 * "in preparation" outline; internal mode shows the working intake scaffold.
 * No numbers or outcomes are invented here.
 */

export type FrameworkSection = {
  n: number;
  title: string;
  /** Generic, non-sensitive guiding question (safe to show publicly). */
  prompt: string;
};

/** Canonical 16-part structure (mirrors TRANSFORMATION_STORIES/FRAMEWORK.md). */
export const STORY_FRAMEWORK: FrameworkSection[] = [
  { n: 1, title: "Context", prompt: "What was happening in the business, product, organization, or market?" },
  { n: 2, title: "Business Problem", prompt: "What business outcome needed to change?" },
  { n: 3, title: "Organizational Challenge", prompt: "What team, stakeholder, process, alignment, maturity, or operating-model challenge made this difficult?" },
  { n: 4, title: "Constraints", prompt: "What constraints shaped the work — regulation, legacy systems, time, alignment, data?" },
  { n: 5, title: "Research", prompt: "What evidence informed the direction?" },
  { n: 6, title: "Decisions", prompt: "What important decisions were made, and why? (Judgment, not just output.)" },
  { n: 7, title: "Tradeoffs", prompt: "What was sacrificed, delayed, simplified, or rejected?" },
  { n: 8, title: "Execution", prompt: "How was the work turned into reality?" },
  { n: 9, title: "Outcomes", prompt: "What changed? (Metrics only when they survive evidence review.)" },
  { n: 10, title: "Lessons", prompt: "What did this work teach that generalizes beyond the story?" },
  { n: 11, title: "What I’d Do Differently", prompt: "Honest reflection on what would change." },
  { n: 12, title: "Frameworks Created", prompt: "What reusable model, principle, or operating mechanism came out of it?" },
  { n: 13, title: "Related Essays", prompt: "Which essays does this connect to?" },
  { n: 14, title: "Related Operating Manual Pages", prompt: "Which operating-manual pages does this connect to?" },
  { n: 15, title: "Related Evidence", prompt: "Which evidence files support this story?" },
  { n: 16, title: "Related Future Formats", prompt: "How can this story compound — essay, talk, template, course?" },
];

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
  /** Per-section evidence-intake prompts shown in internal mode. */
  evidence: Partial<Record<number, string[]>>;
  sourceFile: string;
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
    sourceFile: "TRANSFORMATION_STORIES/BUILDING_DESIGN_ORGANIZATION.md",
    evidence: {
      1: ["Starting state of the design function (maturity, reporting line)", "The company / business moment that created the need"],
      2: ["What business outcome required a stronger design function", "Cost of the status quo (slow shipping, inconsistent quality, weak judgment)"],
      3: ["Team scale (starting size → current size)", "Cross-functional collaboration model and friction"],
      6: ["Hiring decisions (roles, levels, sequencing)", "Rituals and review systems introduced", "Most important judgment calls and why"],
      8: ["Operating rhythm, research practice, and design-system maturity introduced", "Before/after operating model"],
      9: ["Team-scale and quality/velocity outcomes — register in CLAIMS_REGISTER before any number goes public"],
      12: ["Candidate framework: Organizational Design Canvas / Design Operating System"],
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
