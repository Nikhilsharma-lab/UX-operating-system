/**
 * Cases data.
 *
 * Two independent structures live here:
 *
 * 1. `caseProjects` — the Cases IA prototype (Decision 061): big product
 *    systems, each holding nested placeholder case cards that link to
 *    placeholder case landing pages. Every name, category, and line of copy
 *    is a generic placeholder. No real project names, metrics, product data,
 *    or confidential context appears here.
 *
 * 2. `digitalGoldCase` / `caseStudies` (below) — the one real drafted case,
 *    kept only for its existing `/cases/digital-gold-growth` route. It is
 *    deliberately NOT featured anywhere in the Cases IA prototype.
 */

export type CaseCard = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  ctaLabel: string;
};

export type CaseProject = {
  slug: string;
  number: string;
  title: string;
  status: string;
  overview: string;
  scope: string[];
  cases: CaseCard[];
};

const PLACEHOLDER_STATUS = "Content pending";
const PLACEHOLDER_CTA = "Open case shell";

const PROJECT_OVERVIEW =
  "A placeholder product system containing multiple UX and product cases. Real project context, product details, metrics, and artifacts will be added after Nikhil provides the final case material.";

const CARD_SUMMARY =
  "A placeholder case card for a future UX and product case. This will later document the business problem, user journey, design decisions, shipped experience, and measurable outcome.";

/** Generic, public-safe scope items shared by every placeholder project. */
const PROJECT_SCOPE = [
  "Product journey",
  "User behavior",
  "Experience strategy",
  "Shipped experience",
  "Metric movement",
  "Design artifacts",
];

/** Build generic placeholder case cards, one per supplied category. */
function placeholderCards(categories: string[]): CaseCard[] {
  return categories.map((category, i) => {
    const number = String(i + 1).padStart(2, "0");
    return {
      slug: `case-${number}`,
      number,
      title: `Case ${number}`,
      category,
      status: PLACEHOLDER_STATUS,
      summary: CARD_SUMMARY,
      ctaLabel: PLACEHOLDER_CTA,
    };
  });
}

export const caseProjects: CaseProject[] = [
  {
    slug: "project-01",
    number: "01",
    title: "Big Project 01",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    cases: placeholderCards([
      "Product journey",
      "Funnel repair",
      "Trust system",
    ]),
  },
  {
    slug: "project-02",
    number: "02",
    title: "Big Project 02",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    cases: placeholderCards(["Platform experience", "Research system"]),
  },
  {
    slug: "project-03",
    number: "03",
    title: "Big Project 03",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    cases: placeholderCards([
      "Design infrastructure",
      "Product journey",
      "Funnel repair",
    ]),
  },
  {
    slug: "project-04",
    number: "04",
    title: "Big Project 04",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    cases: placeholderCards(["Trust system", "Platform experience"]),
  },
];

export function getCaseProject(slug: string): CaseProject | undefined {
  return caseProjects.find((p) => p.slug === slug);
}

export function getCaseCard(
  projectSlug: string,
  caseSlug: string,
): { project: CaseProject; card: CaseCard } | undefined {
  const project = getCaseProject(projectSlug);
  const card = project?.cases.find((c) => c.slug === caseSlug);
  if (!project || !card) return undefined;
  return { project, card };
}

/** All project/case slug pairs, for generateStaticParams. */
export function allCaseParams(): { slug: string; caseSlug: string }[] {
  return caseProjects.flatMap((p) =>
    p.cases.map((c) => ({ slug: p.slug, caseSlug: c.slug })),
  );
}

/**
 * The senior case-report structure every placeholder case shell exposes.
 * Structure only; every section renders "Content pending" until real
 * material is provided.
 */
export const CASE_SHELL: string[] = [
  "Executive Summary",
  "Business Problem",
  "User Problem",
  "Journey Diagnosis",
  "Strategic Bet & Key Decisions",
  "Experience Before",
  "Experience After / What Shipped",
  "Tradeoffs",
  "Metric Movement",
  "My Role",
  "What Changed Beyond the Screen",
  "Lessons",
  "What I’d Do Differently",
];

/* ------------------------------ Case studies ----------------------------- */

export type CaseDecision = {
  decision: string;
  why: string;
  tradeoff: string;
  result: string;
};

export type CaseStudy = {
  number: string;
  slug: string;
  title: string;
  caseTitle: string;
  category: string;
  status: string;
  productArea: string;
  timeframe: string;
  role: string;
  team: string;
  metricSignal: string;
  prepNote: string;
  executiveSummary: string[];
  businessProblem: string[];
  userProblem: string[];
  journeyDiagnosis: string[];
  strategicBet: string[];
  keyDecisions: CaseDecision[];
  experienceBefore: { artifactNote: string; body: string[] };
  experienceAfter: string[];
  whatShipped: string[];
  tradeoffs: string[];
  tradeoffMatrix: [string, string][];
  metricMovement: { known: string; toWire: string[] };
  myRole: string[];
  artifacts: { available: string[]; toWire: string[]; note: string };
  beyondTheScreen: string[];
  lessons: string[];
  differently: string[];
};

export const digitalGoldCase: CaseStudy = {
  number: "01",
  slug: "digital-gold-growth",
  title: "Digital Gold Growth",
  caseTitle:
    "Digital Gold Growth: Reframing Investment as a Low-Commitment Habit",
  category: "Financial Services / Behavioral Growth",
  status: "Draft in progress",
  productArea: "Financial services",
  timeframe: "3 months",
  role: "Product Design Head",
  team: "2 designers, 5 developers, 1 PM",
  metricSignal: "28× increase in Digital Gold purchases",
  prepNote:
    "This case is being drafted from supplied project notes. Baseline, final metric definition, source artifacts, and selected screenshots will be wired in after evidence review.",
  executiveSummary: [
    "Digital Gold had discovery but weak purchase conversion. Funnel analysis and customer conversations showed that the core barrier was not awareness; it was trust at the moment of financial commitment. Users hesitated to commit larger amounts to an asset they could not physically possess.",
    "We reframed the product from a one-time gold purchase into a low-commitment savings habit by introducing Digital Gold SIPs and improving the purchase journey around confidence, education, and gradual participation. The change lowered psychological risk, created a recurring-use path, and contributed to a 28× increase in Digital Gold purchases.",
  ],
  businessProblem: [
    "The business needed to increase Digital Gold adoption by improving first-purchase conversion while maintaining sustainable unit economics.",
    "Users were reaching the Digital Gold product surface, but too many were dropping before completing the first purchase. The opportunity was not only to create more discovery; it was to convert existing interest into confident action.",
  ],
  userProblem: [
    "Users understood the idea of buying gold, but the digital format created hesitation. The asset felt intangible, the purchase felt high-commitment, and the value of starting was not immediately felt.",
    "For many users, the first transaction required more confidence than the journey had earned.",
  ],
  journeyDiagnosis: [
    "The journey was not primarily breaking at discovery. It was breaking near commitment.",
    "Users were landing on the product and exploring it, but the purchase moment created anxiety: should they put a meaningful amount of money into something they could not physically hold?",
    "The existing journey asked users to trust the product before giving them a low-risk way to experience it.",
  ],
  strategicBet: [
    "The strategic bet was that Digital Gold should not be positioned only as an investment purchase. For mass-market users, it needed to become a low-risk savings habit.",
    "If we reduced the first commitment and made participation feel small, repeatable, and understandable, trust could be built through usage rather than persuasion.",
  ],
  keyDecisions: [
    {
      decision: "Introduce Digital Gold SIPs.",
      why: "To lower the first-purchase barrier and turn gold purchase into a recurring savings behavior.",
      tradeoff: "Lower initial ticket size and added operational complexity.",
      result: "Created a lower-risk entry point into the product.",
    },
    {
      decision: "Give SIP its own ingress.",
      why: "Users needed to see SIP as a distinct behavior, not a secondary option hidden inside one-time purchase.",
      tradeoff: "Added product surface area and required clearer education.",
      result: "Made recurring gold savings more discoverable.",
    },
    {
      decision: "Add SIP education and projection tools on the landing page.",
      why: "Users needed to understand how small recurring investments could accumulate over time.",
      tradeoff: "More explanation on the page, with the risk of cognitive load.",
      result: "Helped users connect small daily or monthly action with future value.",
    },
  ],
  experienceBefore: {
    artifactNote: "Artifact placeholder: old journey screenshots / flow to be added.",
    body: [
      "The previous experience was centered around one-time purchase. Users discovered Digital Gold, reviewed basic product information, entered an amount, and moved toward purchase. The journey assumed users were already confident enough to commit money to digital gold.",
    ],
  },
  experienceAfter: [
    "The new experience created two entry paths: one-time purchase and SIP.",
    "SIP was introduced as a lower-commitment route for users who were interested but not ready to make a larger purchase. The landing page added a dedicated SIP section, projection logic, and explanatory tooltips to help users understand habit-based accumulation, maturity value, and the idea of investing gradually.",
  ],
  whatShipped: [
    "The shipped experience included Digital Gold SIPs as a new purchase path, a parallel SIP ingress, SIP education on the Digital Gold landing page, and a clearer choice between bulk purchase and recurring investment.",
  ],
  tradeoffs: [
    "The biggest tradeoff was between short-term transaction value and long-term trust.",
    "A one-time purchase model could preserve higher average order value, but it did not solve the hesitation around first commitment. SIPs reduced the initial ticket size and added operational complexity around recurring payments, failures, cancellations, reminders, and support.",
    "We accepted that complexity because the larger opportunity was to increase the number of users who could start, learn, and build trust through repeated participation.",
  ],
  tradeoffMatrix: [
    ["Higher conversion", "higher average order value"],
    ["Trust building", "immediate revenue"],
    ["Habit formation", "one-time purchase"],
    ["Customer acquisition", "short-term monetization"],
    ["Simplicity", "operational complexity"],
    ["Activation", "backend/support overhead"],
  ],
  metricMovement: {
    known: "28× increase in Digital Gold purchases.",
    toWire: [
      "Baseline",
      "Final number",
      "Timeframe definition",
      "Metric definition",
      "Measurement source",
      "Attribution model",
      "Whether the comparison is YoY, before/after, or cohort-based",
    ],
  },
  myRole: [
    "As Product Design Head, I led the problem framing, synthesized funnel and user signals, shaped the trust-and-commitment hypothesis, aligned product, design, and engineering around the SIP direction, reviewed the experience strategy, guided the UX decisions, and helped define the launch success metrics.",
  ],
  artifacts: {
    available: ["Screens", "Flows", "Research notes", "Dashboard screenshots"],
    toWire: [
      "Public-safe screenshot set",
      "Before/after journey flow",
      "Funnel snapshot",
      "SIP landing-page decision annotation",
    ],
    note: "Artifacts will be added after review for confidentiality, customer data, and public-safe presentation.",
  },
  beyondTheScreen: [
    "The work changed how the team approached product growth.",
    "Instead of debating UI changes subjectively, the team used funnel evidence, customer conversations, and behavioral diagnosis to identify the adoption barrier. It helped move the conversation from “How do we sell Digital Gold harder?” to “How do we make the first step feel safer?”",
  ],
  lessons: [
    "The biggest lesson was that conversion problems are not always usability problems. Sometimes the interface is clear, but the commitment is psychologically too heavy.",
    "In those cases, the role of design is not only to simplify the flow; it is to redesign the commitment model so the user can begin safely.",
  ],
  differently: [
    "Today I would validate the trust hypothesis earlier through more structured qualitative research and controlled experiments.",
    "I would also measure the journey beyond first conversion: SIP retention, repeat investment behavior, failed mandate recovery, lifetime value, and long-term trust. The first transaction was the unlock, but the larger product objective was building sustained investment behavior.",
  ],
};

export const caseStudies: CaseStudy[] = [digitalGoldCase];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
