/**
 * Welcome Kit - real nested case study content (Decision 068).
 *
 * Case path: Safe Second Account → Activation → Welcome Kit.
 * Rendered by app/cases/welcome-kit.
 *
 * Post-onboarding activation, not an industry-first or revolutionary product.
 * The case strength is a simple product tightly aligned to activation metrics;
 * it must not be oversold. Fixed, public-safe copy: no invented dates,
 * dashboards, screenshots, or metrics; no exact uplift claimed for UPI setup,
 * transactions, or retention. The employer is referred to generically as
 * "the bank" per site convention (the UPI handle brand is generalized for the
 * same reason). Screens are placeholders only. No em/en dashes.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string };
export type RelatedLink = { href: string; label: string };

export const welcomeKit = {
  hierarchy: {
    bigProject: "Safe Second Account",
    subproject: "Activation",
    caseName: "Welcome Kit",
  },
  title: "Welcome Kit",
  subtitle:
    "Turning new account holders into daily-use Safe Second Account customers.",

  meta: [
    { label: "Status", value: "Field report v1" },
    { label: "Timeframe", value: "One sprint to build, test, and ship" },
    { label: "Role", value: "Head of Product Design" },
    { label: "Team", value: "1 designer, 1 PM, 1 developer, growth team" },
  ] as MetaRow[],

  outcome: [
    { value: "75-80%", label: "App install rate after offline onboarding" },
    {
      value: "80-85%",
      label: "Welcome Kit open rate among users who saw the impression",
    },
    { value: "30 days", label: "Persistent early-lifecycle guidance" },
    { value: "One sprint", label: "Built, tested, and shipped" },
    { value: "2 core actions", label: "UPI setup + auto-load" },
  ] as MetricStat[],

  problem: {
    heading: "Account opened did not mean account activated.",
    copy: [
      "A large share of users were onboarded through offline channels. Even when 75-80% installed the app afterward, many needed handholding to understand what to do next.",
      "They had a bank account, but not necessarily a banking habit.",
      "The product needed to help new users understand their account, complete setup, and move toward the behaviors that made the bank useful as a Safe Second Account.",
    ],
  },

  shift: {
    heading: "From account orientation to daily-use activation.",
    copy: [
      "Welcome Kit started as a digital version of the physical bank welcome kit: a simple place to understand account details, limits, password setup, and next steps.",
      "But the deeper goal was activation.",
      "Inside Welcome Kit, Set and Forget helped users set up UPI and auto-load so the account could become useful for everyday payments across food delivery, cabs, quick commerce, and other daily-use cases.",
    ],
  },

  shipped: {
    welcomeLead: "A Welcome Kit experience for newly onboarded users:",
    welcome: [
      "Top-of-home placement",
      "Envelope-style entry",
      "Account details",
      "Account limits",
      "Setup guidance",
      "UPI setup CTA",
      "Set and Forget section",
      "Auto-load setup through UPI mandate",
      "Daily-use payments explanation",
      "Persistent access during the first 30 days",
    ],
    setForgetLead: "Set and Forget flow:",
    setForget: [
      "Understand the concept",
      "Set up UPI ID and handle",
      "Set auto-load rule from primary bank account",
      "Choose balance threshold and load amount",
      "Approve UPI mandate",
      "Use the account for daily transactions",
    ],
  },

  decisions: [
    {
      title: "Make it feel like bank communication",
      copy: "The Welcome Kit opened like an envelope and sat at the top of the app, so it felt like guidance from the bank rather than another promotional banner.",
    },
    {
      title: "Keep it available for 30 days",
      copy: "The kit was not a one-time tooltip. Users could return to it during the first 30 days whenever they needed account details, setup guidance, or next steps.",
    },
    {
      title: "Avoid hard selling",
      copy: "The page consciously avoided banner-like cross-selling. Products were introduced only when they helped complete account setup or activation.",
    },
    {
      title: "Use Set and Forget as the activation engine",
      copy: "The goal was to drive two behaviors: UPI setup and auto-load. Together, they made the account easier to use for everyday payments.",
    },
    {
      title: "Anchor the value in Safe Second Account",
      copy: "Users could keep their main bank account less exposed and their main statement cleaner by using the bank for frequent small transactions.",
    },
    {
      title: "Accept fewer app opens if account habit improves",
      copy: "Set and Forget could reduce the need to open the bank app frequently. That was acceptable because the goal was daily account usage, not vanity app opens.",
    },
  ] as DecisionCard[],

  before: [
    "Account opened",
    "User installs app",
    "Lands in app",
    "Unclear next steps",
    "May not set up UPI",
    "Account remains underused",
  ],
  after: [
    "Account opened",
    "User installs app",
    "Sees Welcome Kit",
    "Understands account and limits",
    "Sets up UPI",
    "Enables auto-load",
    "Uses account for daily payments",
  ],

  ssaLogic: {
    heading: "Why Set and Forget mattered",
    copy: [
      "The user pain was not only 'set up UPI.'",
      "Frequent payments on food delivery, ride-hailing, and quick-commerce apps can clutter the main bank statement and repeatedly expose the primary bank account.",
      "Set and Forget positioned the bank as the everyday payments layer: keep the main account cleaner, keep enough balance through auto-load, and use the second account for small daily transactions.",
    ],
  },

  uiEvidence: {
    heading: "UI evidence",
    copy: "Screens will be added as annotated product-decision evidence, not as a Figma gallery.",
    placeholders: [
      {
        screen: "Welcome Kit envelope entry",
        caption:
          "Made account guidance feel like bank communication, not a sales banner.",
      },
      {
        screen: "Welcome Kit opened state",
        caption:
          "Turned first-use orientation into a structured account setup surface.",
      },
      {
        screen: "Account details",
        caption: "Gave users one place to find basic account information.",
      },
      {
        screen: "Account limits",
        caption:
          "Helped users understand what their new account could and could not do.",
      },
      {
        screen: "Password / MPIN setup",
        caption: "Guided users through essential security setup.",
      },
      {
        screen: "UPI setup CTA",
        caption: "Moved users toward the most important activation action.",
      },
      {
        screen: "Set and Forget section",
        caption: "Converted account understanding into daily-use behavior.",
      },
      {
        screen: "Set and Forget landing",
        caption: "Explained why the account should be used for everyday payments.",
      },
      {
        screen: "Auto-load setup",
        caption: "Allowed users to define load amount and balance threshold.",
      },
      {
        screen: "UPI mandate approval",
        caption: "Enabled auto-load from the user's primary bank account.",
      },
      {
        screen: "Daily-use apps explanation",
        caption:
          "Made the value concrete through everyday use cases like food delivery, ride-hailing, and quick commerce.",
      },
      {
        screen: "Clean statement explanation",
        caption: "Connected the feature to the Safe Second Account promise.",
      },
      {
        screen: "30-day persistent card",
        caption: "Kept guidance available through the early lifecycle period.",
      },
    ] as Placeholder[],
  },

  metrics: {
    heading: "Metric movement",
    primaryGoal:
      "Increase UPI setup, daily transactions, and retention among newly onboarded users. Exact uplift is not claimed.",
    rows: [
      {
        label: "Leading metric",
        value:
          "80-85% Welcome Kit open rate among users who saw the impression.",
      },
      { label: "Source", value: "Firebase analytics dashboard." },
      {
        label: "Install context",
        value: "75-80% app install rate after offline onboarding.",
      },
      {
        label: "Availability",
        value: "Welcome Kit remained available during the first 30 days.",
      },
      { label: "Build time", value: "One sprint to build, test, and ship." },
      {
        label: "Strategic behavior",
        value:
          "Set and Forget was designed to drive UPI setup and auto-load so users could use the bank across daily-use categories.",
      },
    ] as MetaRow[],
  },

  myRole: {
    intro: [
      "As Head of Product Design, I conceptualized Welcome Kit and framed it as an account activation surface, not just an app onboarding screen.",
      "I spoke to users and internal stakeholders to understand what a new account holder needed to know after onboarding, and what belonged inside a digital welcome kit.",
    ],
    bullets: [
      "Identifying the gap between account opening and account activation",
      "Conceptualizing the digital Welcome Kit",
      "Connecting it to Safe Second Account positioning",
      "Shaping Set and Forget as the activation behavior loop",
      "Ensuring the experience felt like account guidance, not a sales pitch",
      "Aligning product, growth, and design on activation goals",
    ],
  },

  lessons: [
    { n: "01", title: "Account opening is not activation." },
    { n: "02", title: "First-use guidance should build confidence before selling." },
    {
      n: "03",
      title: "A simple product can matter if it is aligned to the right behavior.",
    },
    { n: "04", title: "The goal was not app opens. The goal was account habit." },
    {
      n: "05",
      title: "Safe Second Account becomes real only when users know what to use it for.",
    },
  ] as Lesson[],

  related: [
    { href: "/cases", label: "Back to Cases" },
    {
      href: "/cases/ckyc-onboarding",
      label: "Related case: CKYC Onboarding",
    },
    {
      href: "/cases/fraud-alarm",
      label: "Related case: Fraud Alarm",
    },
    {
      href: "/cases/transparent-banking",
      label: "Related case: Transparent Banking",
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
