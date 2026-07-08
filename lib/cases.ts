/**
 * Cases data.
 *
 * Two independent structures live here:
 *
 * 1. `caseProjects` — the nested Cases IA prototype (Decision 062):
 *    Big Project → Subproject → Case Study. Every name, category, and line
 *    of copy is a generic placeholder. No real project, subproject, or case
 *    names, no metrics, product data, or confidential context.
 *
 * 2. `digitalGoldCase` / `caseStudies` (below, typed `FullCaseStudy`) — the
 *    one real drafted case, kept only for its existing
 *    `/cases/digital-gold-growth` route. It is deliberately NOT featured
 *    anywhere in the Cases IA prototype.
 */

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  ctaLabel: string;
};

export type CaseSubproject = {
  slug: string;
  number: string;
  title: string;
  status: string;
  description: string;
  cases: CaseStudy[];
};

export type CaseBigProject = {
  slug: string;
  number: string;
  title: string;
  status: string;
  overview: string;
  scope: string[];
  subprojects: CaseSubproject[];
  /**
   * When set, this Big Project is itself a single deep case: the /cases index
   * links straight here instead of rendering a subproject band. Used by the
   * real Airtel Payments Bank App case (Decision 069), which is not nested
   * under any other program.
   */
  href?: string;
  /** Short label shown where the subproject/case count would otherwise sit. */
  caseType?: string;
};

const PLACEHOLDER_STATUS = "Content pending";
const PLACEHOLDER_CTA = "Open case shell";

const PROJECT_OVERVIEW =
  "A placeholder large product system containing multiple subprojects and UX and product cases. Real program context, product details, metrics, artifacts, and outcomes will be added after Nikhil provides the final case material.";

const SUBPROJECT_DESCRIPTION =
  "A placeholder product area inside this larger program. The final description will explain the specific journey family, user segment, product surface, or problem space.";

const CASE_SUMMARY =
  "A placeholder case study for a future UX and product case. This will later document the business problem, user journey, strategic design decisions, shipped experience, and measurable outcome.";

/** Generic, public-safe scope items shared by every placeholder project. */
const PROJECT_SCOPE = [
  "Product journey",
  "User behavior",
  "Experience strategy",
  "Shipped experience",
  "Metric movement",
  "Design artifacts",
];

/** Build generic placeholder case studies, one per supplied category. */
function placeholderCases(categories: string[]): CaseStudy[] {
  return categories.map((category, i) => {
    const number = String(i + 1).padStart(2, "0");
    return {
      slug: `case-${number}`,
      number,
      title: `Case Study ${number}`,
      category,
      status: PLACEHOLDER_STATUS,
      summary: CASE_SUMMARY,
      ctaLabel: PLACEHOLDER_CTA,
    };
  });
}

/** Build a placeholder subproject holding the supplied case categories. */
function subproject(n: number, categories: string[]): CaseSubproject {
  const number = String(n).padStart(2, "0");
  return {
    slug: `subproject-${number}`,
    number,
    title: `Subproject ${number}`,
    status: PLACEHOLDER_STATUS,
    description: SUBPROJECT_DESCRIPTION,
    cases: placeholderCases(categories),
  };
}

/* -- Real case: Safe Second Account -> Safety -> Fraud Alarm (Decision 063).
   Served by its own static route app/cases/safe-second-account/safety/
   fraud-alarm; excluded from the dynamic placeholder route below. -- */

const fraudAlarmCard: CaseStudy = {
  slug: "fraud-alarm",
  number: "01",
  title: "Fraud Alarm",
  category: "Trust system",
  status: "Field report v1",
  summary:
    "Turning fraud reporting from a helpline dependency into an in-app emergency-control workflow.",
  ctaLabel: "Read case study",
};

const transparentBankingCard: CaseStudy = {
  slug: "transparent-banking",
  number: "01",
  title: "Transparent Banking",
  category: "Trust system",
  status: "Field report v1",
  summary:
    "Turning banking transparency from buried disclosure into a visible trust system.",
  ctaLabel: "Read case study",
};

const ckycOnboardingCard: CaseStudy = {
  slug: "ckyc-onboarding",
  number: "01",
  title: "CKYC Onboarding",
  category: "Scale transformation",
  status: "Field report v1",
  summary: "Turning account opening into a 24/7 digital scale engine.",
  ctaLabel: "Read case study",
};

const welcomeKitCard: CaseStudy = {
  slug: "welcome-kit",
  number: "01",
  title: "Welcome Kit",
  category: "Activation surface",
  status: "Field report v1",
  summary:
    "Turning new account holders into daily-use Safe Second Account customers.",
  ctaLabel: "Read case study",
};

const safeSecondAccount: CaseBigProject = {
  slug: "safe-second-account",
  number: "01",
  title: "Safe Second Account",
  status: "Field report v1",
  overview:
    "A product system within the Safe Second Account program. Safety is the first documented area; further subprojects and cases are added as they are written.",
  scope: [
    "Fraud response",
    "Emergency workflow",
    "Customer trust",
    "Service operations",
    "Risk alignment",
  ],
  subprojects: [
    {
      slug: "safety",
      number: "01",
      title: "Safety",
      status: "Field report v1",
      description:
        "Fraud response and account-protection work inside the Safe Second Account program.",
      cases: [fraudAlarmCard],
    },
    {
      slug: "trust",
      number: "02",
      title: "Trust",
      status: "Field report v1",
      description:
        "Transparency and trust-infrastructure work inside the Safe Second Account program.",
      cases: [transparentBankingCard],
    },
    {
      slug: "digital-onboarding",
      number: "03",
      title: "Digital Onboarding",
      status: "Field report v1",
      description:
        "Account-opening scale and funnel work inside the Safe Second Account program.",
      cases: [ckycOnboardingCard],
    },
    {
      slug: "activation",
      number: "04",
      title: "Activation",
      status: "Field report v1",
      description:
        "Post-onboarding activation work that turns opened accounts into daily-use accounts.",
      cases: [welcomeKitCard],
    },
  ],
};

/* -- Real standalone Big Project: Airtel Payments Bank App (Decision 069).
   A research + product-strategy case that stands on its own (no subprojects);
   the index links straight to its dedicated static route. Not nested under
   Safe Second Account. -- */
const airtelPaymentsBankApp: CaseBigProject = {
  slug: "airtel-payments-bank-app",
  number: "02",
  title: "Airtel Payments Bank App",
  status: "Field report v1",
  overview:
    "A research and product-strategy program that gave Airtel Payments Bank a focused, bank-owned app surface, decoupling banking discovery from the telco super-app while both surfaces continue to coexist.",
  scope: [
    "Research",
    "Product strategy",
    "Controlled decoupling",
    "Homepage governance",
    "Discovery and cross-sell",
    "1% rollout",
  ],
  subprojects: [],
  href: "/cases/airtel-payments-bank-app",
  caseType: "Research + product strategy",
};

/* -- Real standalone Big Project: Airtel Payments Bank for Business
   (Decision 070). A shipped business-banking app case (with ecosystem
   strategy as context) that stands on its own; the index links straight to
   its dedicated static route. Not nested under Safe Second Account. -- */
const airtelPaymentsBankForBusiness: CaseBigProject = {
  slug: "airtel-payments-bank-for-business",
  number: "03",
  title: "Airtel Payments Bank for Business",
  status: "Field report v1 · shipped",
  overview:
    "A shipped business-banking app that consolidates fragmented merchant and current-account experiences into one surface, turning merchant payment acceptance into a deeper business banking relationship.",
  scope: [
    "Business app",
    "Ecosystem strategy",
    "Current Account anchor",
    "Settlement linkage",
    "Merchant research",
    "Lending funnel",
  ],
  subprojects: [],
  href: "/cases/airtel-payments-bank-for-business",
  caseType: "Business app + ecosystem strategy",
};

/* -- Real standalone Big Project: AI-led Support Automation (Decision 071).
   A service-experience + automation case (not an app-UI case) that stands on
   its own; the index links straight to its dedicated static route. Not nested
   under Safe Second Account. -- */
const aiSupportAutomation: CaseBigProject = {
  slug: "ai-led-support-automation",
  number: "04",
  title: "AI-led Support Automation",
  status: "Field report v1",
  overview:
    "A service-experience and automation program that redesigned customer issue resolution across IVR, chatbot, email, SMS, and app self-serve journeys using intent mapping, bot workflows, and an Issue Prediction API.",
  scope: [
    "Service experience",
    "Support automation",
    "Intent mapping",
    "Issue Prediction API",
    "Channel routing",
    "Cost deflection",
  ],
  subprojects: [],
  href: "/cases/ai-led-support-automation",
  caseType: "Service experience + automation",
};

/* -- Placeholder IA scaffold (Decision 062), shown after the real projects -- */

const placeholderProjects: CaseBigProject[] = [
  {
    slug: "project-01",
    number: "05",
    title: "Big Project 02",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    subprojects: [
      subproject(1, ["Product journey", "Funnel repair", "Trust system"]),
      subproject(2, ["Platform experience", "Research system"]),
    ],
  },
  {
    slug: "project-02",
    number: "06",
    title: "Big Project 03",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    subprojects: [
      subproject(1, ["Design infrastructure", "Product journey"]),
      subproject(2, ["Trust system"]),
    ],
  },
  {
    slug: "project-03",
    number: "07",
    title: "Big Project 04",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    subprojects: [subproject(1, ["Funnel repair", "Platform experience"])],
  },
  {
    slug: "project-04",
    number: "08",
    title: "Big Project 05",
    status: PLACEHOLDER_STATUS,
    overview: PROJECT_OVERVIEW,
    scope: PROJECT_SCOPE,
    subprojects: [subproject(1, ["Research system"])],
  },
];

/** The full library shown on /cases: the real projects lead the scaffold. */
export const caseProjects: CaseBigProject[] = [
  safeSecondAccount,
  airtelPaymentsBankApp,
  airtelPaymentsBankForBusiness,
  aiSupportAutomation,
  ...placeholderProjects,
];

export function getCaseBigProject(slug: string): CaseBigProject | undefined {
  return caseProjects.find((p) => p.slug === slug);
}

/**
 * Resolve a placeholder case for the dynamic route only. The real Fraud
 * Alarm case is intentionally excluded here: it is served by its own static
 * route, so the dynamic route never renders it.
 */
export function getCaseStudyRef(
  projectSlug: string,
  subSlug: string,
  caseSlug: string,
):
  | { project: CaseBigProject; sub: CaseSubproject; study: CaseStudy }
  | undefined {
  const project = placeholderProjects.find((p) => p.slug === projectSlug);
  const sub = project?.subprojects.find((s) => s.slug === subSlug);
  const study = sub?.cases.find((c) => c.slug === caseSlug);
  if (!project || !sub || !study) return undefined;
  return { project, sub, study };
}

/** Total case studies across a big project's subprojects. */
export function caseCount(project: CaseBigProject): number {
  return project.subprojects.reduce((n, s) => n + s.cases.length, 0);
}

/** All project/subproject/case slug triples, for generateStaticParams. */
export function allCaseParams(): {
  slug: string;
  subSlug: string;
  caseSlug: string;
}[] {
  return placeholderProjects.flatMap((p) =>
    p.subprojects.flatMap((s) =>
      s.cases.map((c) => ({ slug: p.slug, subSlug: s.slug, caseSlug: c.slug })),
    ),
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

export type FullCaseStudy = {
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

export const digitalGoldCase: FullCaseStudy = {
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

export const caseStudies: FullCaseStudy[] = [digitalGoldCase];

export function getCaseStudy(slug: string): FullCaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
