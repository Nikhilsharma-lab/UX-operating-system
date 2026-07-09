/**
 * CKYC Onboarding - real nested case study content (Decision 067).
 *
 * Case path: Safe Second Account → Digital Onboarding → CKYC Onboarding.
 * Rendered by app/cases/ckyc-onboarding.
 *
 * Fixed, public-safe copy. No invented names, dates, dashboards, or metrics.
 * CAC is shown only as "approximately 70-75%" with no rupee values. No launch
 * month/year. The "one of the first in the industry" claim appears once. The
 * employer is referred to generically as "the bank" per site convention.
 * Screenshots are placeholders only.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string; body: string };
export type RelatedLink = { href: string; label: string };

export const ckycOnboarding = {
  hierarchy: {
    bigProject: "Safe Second Account",
    subproject: "Digital Onboarding",
    caseName: "CKYC Onboarding",
  },
  title: "CKYC Onboarding",
  subtitle: "Turning account opening into a 24/7 digital scale engine.",

  meta: [
    { label: "Status", value: "Field report v1" },
    {
      label: "Timeframe",
      value: "18 months from CKYC launch to ~10,000 daily onboardings",
    },
    { label: "Role", value: "Product Design Head" },
    {
      label: "Team",
      value:
        "3-4 designers, 2 PMs, 8 developers, compliance, operations, analytics",
    },
  ] as MetaRow[],

  outcome: [
    { value: "10x+", label: "Increase in daily digital onboardings" },
    { value: "~800-900 → ~10,000/day", label: "Daily digital onboarding scale" },
    { value: "4-5+ hrs → 3-4 min", label: "Typical account-opening TAT" },
    { value: "70-75%", label: "Reduction in onboarding CAC" },
    { value: "35%", label: "All onboardings now from digital channels" },
  ] as MetricStat[],

  problem: {
    heading: "The onboarding was digital, but the operating model was not.",
    copy: [
      "The first digital onboarding approach depended on Video KYC. Users entered Aadhaar and PAN, completed Aadhaar OTP, waited for a live agent, went through video verification, added details, and then waited for manual auditor review.",
      "The flow ran into limit after limit: agent availability, working hours, queue load, patchy internet, whether the user had their documents ready, and a growing auditor backlog.",
      "Outside 8 AM to 10 PM, the journey had to stop and ask users to return later. For many users, account opening took 4-5+ hours instead of feeling instant.",
    ],
  },

  shift: {
    heading: "From human-dependent verification to 24/7 automated onboarding.",
    copy: [
      "CKYC changed the operating model.",
      "Instead of relying on a live Video KYC agent for every onboarding, verified identity details could be fetched through CKYC using CERSAI. This allowed eligible users to complete account opening digitally, at any time, in 3-4 minutes.",
      "The real design work came after the rail existed: finding drop-offs, forming hypotheses, and continuously improving the funnel.",
    ],
  },

  shipped: {
    hubLead: "A CKYC-based digital onboarding flow:",
    hub: [
      "PAN and Aadhaar entry",
      "CKYC consent",
      "Identity detail fetch through CERSAI",
      "Required verification",
      "Alternate recovery paths when CKYC fetch failed",
      "Mandatory money load from the user’s own bank account",
      "Name-match validation",
      "Final account creation",
    ],
    note: "The bank was one of the first in the industry to introduce CKYC-based onboarding.",
  },

  decisions: [
    {
      title: "Replace the Video KYC bottleneck",
      copy: "Video KYC looked digital but depended on agents, working hours, queue load, internet quality, and auditor review. CKYC moved onboarding to a 24/7 automated model.",
    },
    {
      title: "Merge early landing pages",
      copy: "The first page was one of the biggest drop-off points. Merging page one and page two reduced early friction and helped users reach the core onboarding action faster.",
    },
    {
      title: "Increase intent for fresh users",
      copy: "Existing wallet users had higher intent, but fresh users formed a larger traffic pool. Thanks 21 introduced a scratch-card reward on the first page to give new users a reason to continue.",
    },
    {
      title: "Reinforce that money load was not a fee",
      copy: "Users often thought the mandatory add-money step was an account-opening charge. The flow explained that the amount would go into their own new account, including the ₹21 reward where applicable.",
    },
    {
      title: "Tune money load for quality, not only conversion",
      copy: "The team tested ₹1, ₹50, ₹100, and ₹500 money-load amounts. Lower amounts improved account creation, while higher amounts correlated with better retention and quality.",
    },
    {
      title: "Recover CKYC dead ends",
      copy: "When CKYC details could not be fetched from CERSAI, users were offered alternate paths such as DigiLocker and FaceRD. DigiLocker worked in-app; FaceRD required app installation but recovered users who otherwise had no path forward.",
    },
    {
      title: "Improve name-match failures",
      copy: "After money load, the user’s other-bank account name had to match the KYC name. Initials, salutations, and formatting differences caused avoidable failures. Reviewing mismatch patterns improved the name-match step by 7-8%.",
    },
  ] as DecisionCard[],

  before: [
    "Start onboarding",
    "Aadhaar + PAN",
    "Aadhaar OTP",
    "Video KYC queue",
    "Agent call",
    "Additional details",
    "Nominee details",
    "Manual auditor review",
    "Account opens after 4-5+ hours",
  ],
  after: [
    "Start onboarding",
    "PAN / Aadhaar",
    "CKYC consent",
    "Identity fetch from CERSAI",
    "Alternate KYC recovery if needed",
    "Required details",
    "Own-bank money load",
    "Name match",
    "Account opens in 3-4 minutes",
  ],

  uiEvidence: {
    heading: "UI evidence",
    copy: "Screens will be added as annotated product-decision evidence, not as a Figma gallery.",
    placeholders: [
      { screen: "CKYC onboarding landing page", caption: "Introduced the account-opening journey as a fast digital flow." },
      { screen: "Merged landing-page experiment", caption: "Reduced early-step friction before the user reached core onboarding." },
      { screen: "PAN / Aadhaar entry", caption: "Captured the minimum identity inputs required to begin CKYC validation." },
      { screen: "CKYC consent", caption: "Made identity-detail fetch explicit and consent-led." },
      { screen: "CERSAI identity fetch", caption: "Turned document collection into identity confirmation." },
      { screen: "DigiLocker recovery", caption: "Recovered users when CKYC fetch could not complete through the primary path." },
      { screen: "FaceRD recovery", caption: "Created a fallback for otherwise dead-ended users, despite additional installation friction." },
      { screen: "Thanks 21 scratch card", caption: "Increased intent for fresh users with no existing bank relationship." },
      { screen: "Add-money explanation", caption: "Clarified that mandatory money load was not a fee." },
      { screen: "Wallet + new account balance", caption: "Showed users how their existing balance and added amount would carry into the new account." },
      { screen: "Money-load amount experiments", caption: "Balanced onboarding conversion against post-onboarding retention quality." },
      { screen: "Name-match validation", caption: "Reduced avoidable failures caused by initials, salutations, and formatting mismatches." },
      { screen: "Final account-created state", caption: "Delivered the instant-gratification moment missing from Video KYC." },
    ] as Placeholder[],
  },

  metrics: {
    heading: "Metric movement",
    primary:
      "Daily digital onboardings increased from approximately 800-900/day to approximately 10,000/day.",
    rows: [
      {
        label: "Initial CKYC lift",
        value:
          "After CKYC launch, daily digital onboardings scaled to approximately 3,000-3,500/day.",
      },
      {
        label: "Final scale",
        value:
          "Approximately 10,000/day over 18 months after CKYC launch and continuous funnel experiments.",
      },
      {
        label: "TAT",
        value:
          "Typical account-opening TAT reduced from 4-5+ hours to 3-4 minutes, measured from the first onboarding page to final account creation.",
      },
      {
        label: "CAC",
        value: "Onboarding CAC reduced by approximately 70-75%.",
      },
      {
        label: "Digital contribution",
        value:
          "35% of all onboardings now come from digital channels; the remaining volume largely comes through the offline retailer ecosystem.",
      },
      {
        label: "Name-match improvement",
        value: "7-8% improvement at the name-match step after refining mismatch handling.",
      },
      {
        label: "Attribution",
        value:
          "Primarily attributable to CKYC-based automation and subsequent onboarding funnel experiments.",
      },
    ] as MetaRow[],
  },

  myRole: {
    intro: [
      "As Product Design Head, I led the UX strategy for moving savings-account onboarding from a Video KYC-led flow to a scalable CKYC-based digital journey.",
    ],
    bullets: [
      "Designing a user-understandable CKYC onboarding flow",
      "Identifying step-level funnel drop-offs",
      "Creating hypotheses for conversion experiments",
      "Improving the first landing step",
      "Increasing intent for fresh users through Thanks 21",
      "Reframing the mandatory money-load step",
      "Designing recovery paths for CKYC dead ends",
      "Improving name-match failure handling with product",
      "Aligning the flow with RBI constraints and Safe Second Account positioning",
      "Working with product, engineering, compliance, operations, and analytics",
    ],
  },

  lessons: [
    { n: "01", title: "Digital UX is not enough if the operating model is still manual.", body: "" },
    { n: "02", title: "Scale often comes after launch, through step-level funnel work.", body: "" },
    {
      n: "03",
      title: "The best onboarding metric is not only completion.",
      body: "It is activated, retained account quality.",
    },
    { n: "04", title: "Regulated flows need recovery paths, not dead ends.", body: "" },
    {
      n: "05",
      title: "A small misunderstanding can kill conversion.",
      body: "The add-money step worked only when users understood it was not a fee.",
    },
  ] as Lesson[],

  related: [
    { href: "/cases", label: "Back to Cases" },
    { href: "/cases/fraud-alarm", label: "Related case: Fraud Alarm" },
    {
      href: "/cases/transparent-banking",
      label: "Related case: Transparent Banking",
    },
    { href: "/operating-manual/organization-design", label: "Operating Manual: Organization Design" },
    { href: "/operating-manual/design-systems", label: "Operating Manual: Design Systems" },
  ] as RelatedLink[],
};
