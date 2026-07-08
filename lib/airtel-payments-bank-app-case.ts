/**
 * Airtel Payments Bank App — real standalone Big Project case (Decision 069).
 *
 * Case path: Cases → Big Project → Airtel Payments Bank App.
 * Rendered by app/cases/airtel-payments-bank-app.
 *
 * A research + product-strategy case about controlled decoupling from Airtel
 * ThanksApp. This is the one case where the brand is named explicitly: the
 * owner made "Airtel Payments Bank App" the case title, route, and thesis
 * (ThanksApp = acquisition engine; the bank app = engagement engine). It must
 * NOT be framed as a ThanksApp replacement — both surfaces coexist.
 *
 * Fixed, public-safe copy: no invented dates, dashboards, screenshots, or
 * metrics; no internal financial opportunity/cost numbers; the 1% rollout is
 * stated carefully and never overstated; "beta" is kept out of the hero. No
 * em/en dashes. Screens/artifacts are placeholders only.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string };
export type RelatedLink = { href: string; label: string };

export const airtelPaymentsBankApp = {
  crumbs: ["Cases", "Big Project", "Airtel Payments Bank App"],
  title: "Airtel Payments Bank App",
  subtitle: "Decoupling banking discovery from a telco super-app.",

  meta: [
    { label: "Status", value: "Field report v1" },
    { label: "Duration", value: "Three quarters" },
    { label: "Case type", value: "Research + product strategy" },
    { label: "Role", value: "Design Head" },
    {
      label: "Team",
      value:
        "~10 designers, 4 PMs, 30 engineers, 2 researchers, 1 analytics lead, plus QA, growth, security, and compliance",
    },
  ] as MetaRow[],

  outcome: [
    {
      value: "120M+",
      label: "Airtel ThanksApp monthly users (distribution tradeoff)",
    },
    { value: "1%", label: "Public rollout after employee launch" },
    { value: "3 quarters", label: "Strategy, research, design, and ship" },
    {
      value: "60-70 users",
      label: "Research across rural, tier-1, and tier-2 markets",
    },
    {
      value: "5-part construct",
      label: "Trust, service, growth, discovery, experimentation",
    },
  ] as MetricStat[],

  problem: {
    heading:
      "The bank was growing inside an app that was not primarily a bank app.",
    copy: [
      "Airtel Payments Bank lived inside Airtel ThanksApp, a large telco-led super-app. The bank had access to massive distribution, but customers still had to enter a broader Airtel environment and discover banking through the Money/banking section.",
      "This created a discovery problem. Users coming from products like NCMC, FASTag, debit card, or account opening could use the bank for one product without discovering the larger relationship.",
      "For a regulated bank, the app surface was becoming too important to remain one step away.",
    ],
  },

  strategicQuestion: {
    heading: "Should the bank have its own app?",
    copy: [
      "The decision was not obvious.",
      "ThanksApp gave the bank a powerful zero-CAC acquisition channel and access to a 120M+ monthly user surface.",
      "But the bank also needed stronger control over discovery, cross-sell, brand identity, security posture, customer engagement, and homepage real estate.",
      "The work started with a strategic question: should Airtel Payments Bank continue as a section inside a super-app, or own a focused banking surface?",
    ],
  },

  shift: {
    heading: "Controlled decoupling.",
    copy: [
      "This was not a clean break from ThanksApp.",
      "It was a controlled decoupling strategy.",
      "ThanksApp remained the acquisition engine. Airtel Payments Bank App became the engagement engine: a bank-owned surface for product discovery, trust, self-service, cross-sell, and deeper customer relationships.",
      "The challenge was to make both surfaces coexist without confusing users.",
    ],
  },

  research: {
    heading: "Research validated the need for a bank-owned surface.",
    copy: [
      "We conducted moderated usability testing, prototype testing, field research, concept testing, task-based testing, interviews, and competitor comparison with roughly 60-70 users across rural, tier-1, and tier-2 markets.",
      "We tested homepage variants, navigation variants, and core journeys such as NCMC, FASTag, debit card, bank account creation, and UPI.",
      "Users already understood standalone financial apps like PhonePe, Paytm, and Google Pay. What confused them was the bank being nested inside a telco-led app.",
    ],
    patternsLabel: "User research patterns",
    patterns: [
      "Now it looks like a bank.",
      "Things are easy to find.",
      "Every bank has its own app, but you don't.",
      "Less confusing than the earlier app.",
    ],
  },

  shipped: {
    lead: "A standalone Airtel Payments Bank app with:",
    items: [
      "Bank-first homepage",
      "Visible balance with hide option",
      "Account-first hierarchy",
      "UPI and money actions",
      "Bill payments",
      "Transaction history",
      "Debit card",
      "FASTag",
      "Safe Banking",
      "Transparent Banking",
      "Fixed deposit",
      "Digital gold",
      "Rewards and offers",
      "Feedback surface",
      "Final navigation: Home / Invest / Scan / Rewards / History",
    ],
    rolloutNote:
      "The app moved from employee launch to 1% public rollout to validate stability and real-world usage before broader scale.",
  },

  homepage: {
    heading: "Homepage as business real estate.",
    copy: [
      "The homepage was not designed by taste. It was designed as an operating surface.",
    ],
    bucketsLabel: "Public construct buckets",
    buckets: [
      "Trust",
      "Service",
      "Growth",
      "Discovery",
      "Brand",
      "Experimentation",
    ],
    principleLabel: "Operating principle",
    principle: "Pixel per dollar.",
    meaning:
      "Every module needed a customer objective and a business reason to exist: service value, trust value, discovery value, growth value, brand value, or learning value.",
    note: "The homepage construct artifact should be shown here later.",
  },

  decisions: [
    {
      title: "Make balance the first-class anchor",
      copy: "The app had to feel like a bank first, not a generic UPI app. Balance visibility created the account-first hierarchy, with an option to hide it.",
    },
    {
      title: "Prioritize self-service actions",
      copy: "Add money, send money, UPI, bill payments, transaction history, debit card, and FASTag needed high visibility because they represented repeated banking behavior.",
    },
    {
      title: "Make trust visible",
      copy: "Safe Banking and Transparent Banking were surfaced as visible trust modules, not hidden inside settings.",
    },
    {
      title: "Control growth real estate",
      copy: "Growth modules had to earn their space through the homepage construct instead of becoming random banners.",
    },
    {
      title: "Design for discovery",
      copy: "NCMC, FASTag, debit card, and account creation were journeys users struggled to find inside ThanksApp, so the standalone app had to make them easier to discover.",
    },
    {
      title: "Keep both apps coherent",
      copy: "Because ThanksApp and the standalone app would coexist, the experience had to account for routing, deep links, SMS/email links, UPI behavior, and user expectations across two apps.",
    },
  ] as DecisionCard[],

  before: [
    "Open Airtel ThanksApp",
    "Land in telco-led super-app",
    "Find Money / banking section",
    "Enter bank experience",
    "Search for banking product",
    "Limited discovery and cross-sell control",
  ],
  after: [
    "Open Airtel Payments Bank App",
    "Bank-first homepage",
    "Visible balance and self-service actions",
    "Discover NCMC / FASTag / debit card / account creation",
    "See trust modules",
    "Complete banking journeys inside a focused app",
  ],

  artifacts: {
    heading: "UI and strategy artifacts",
    copy: "Artifacts will be added as product-decision evidence, not as a Figma gallery.",
    placeholders: [
      {
        screen: "Homepage construct artifact",
        caption:
          "Showed how homepage real estate was governed by trust, service, growth, discovery, brand, and experimentation.",
      },
      {
        screen: "Homepage prototype",
        caption:
          "Translated controlled decoupling into a bank-first digital surface.",
      },
      {
        screen: "Navigation model",
        caption:
          "Created a focused structure: Home, Invest, Scan, Rewards, History.",
      },
      {
        screen: "Balance-first homepage",
        caption:
          "Made the app feel like a bank before it felt like a payments app.",
      },
      {
        screen: "UPI and money actions",
        caption: "Supported high-frequency banking and payment behavior.",
      },
      {
        screen: "NCMC discovery",
        caption:
          "Improved visibility for users acquired through offline card journeys.",
      },
      {
        screen: "FASTag discovery",
        caption: "Made a single-product relationship easier to expand.",
      },
      {
        screen: "Debit card journey",
        caption:
          "Surfaced a core banking product that was harder to discover inside the super-app.",
      },
      {
        screen: "Account creation journey",
        caption:
          "Reduced dependency on users finding banking inside ThanksApp.",
      },
      {
        screen: "Safe Banking module",
        caption: "Made security and trust visible in the app experience.",
      },
      {
        screen: "Transparent Banking module",
        caption: "Made clarity and disclosure part of the product surface.",
      },
      {
        screen: "Growth module placement",
        caption:
          "Showed how monetizable surfaces were governed instead of randomly inserted.",
      },
      {
        screen: "Feedback surface",
        caption: "Made beta learning part of the app experience.",
      },
      {
        screen: "1% rollout learning",
        caption:
          "Validated stability, journey discovery, and real-world app behavior before broader scale.",
      },
    ] as Placeholder[],
  },

  validation: {
    heading: "Validation",
    rows: [
      {
        label: "Research",
        value: "60-70 users across rural, tier-1, and tier-2 markets.",
      },
      {
        label: "Research method",
        value:
          "Moderated usability testing, task-based testing, prototype testing, field research, interviews, concept testing, and competitor comparison.",
      },
      {
        label: "Core journeys tested",
        value:
          "UPI, NCMC, FASTag, debit card, bank account creation, bill payments, transaction history, fixed deposit, digital gold, Safe Banking, Transparent Banking.",
      },
      {
        label: "Rollout",
        value: "Employee launch followed by 1% public rollout.",
      },
    ] as MetaRow[],
    signalsLabel: "Primary success signals",
    signals: [
      "App installs",
      "Uninterrupted usage",
      "Low/no critical bugs",
      "Users finding core journeys easily",
      "Core journey funnels benchmarked against ThanksApp",
    ],
    learningLabel: "1% rollout learning",
    learning: [
      "Stability was good with minor issues",
      "Homepage engagement looked promising",
      "Users discovered more products",
      "Feedback quality was useful",
      "Funnels were still being benchmarked against the mature ThanksApp experience",
    ],
    businessNote:
      "The business case showed meaningful upside, but also required new app operations, phased migration, and parallel running costs.",
  },

  myRole: {
    intro: [
      "As Design Head, I was involved from the 'should this app exist?' stage.",
    ],
    bullets: [
      "Evaluating the pros and cons of separating from ThanksApp",
      "Framing the customer experience and discovery problem",
      "Leading research across rural, tier-1, and tier-2 markets",
      "Testing homepage, navigation, and journey mockups",
      "Defining design principles for a bank-first app",
      "Shaping homepage real-estate strategy",
      "Partnering with product, design, engineering, research, analytics, growth, security, and compliance",
      "Helping move the app from strategy to employee launch and 1% public rollout",
    ],
  },

  lessons: [
    {
      n: "01",
      title:
        "A new app is not a design decision. It is a distribution, brand, security, and operating-model decision.",
    },
    { n: "02", title: "Super-app reach can hide product discovery problems." },
    {
      n: "03",
      title:
        "Banking apps need to feel like banks before they feel like payment apps.",
    },
    {
      n: "04",
      title: "Homepage real estate needs governance, not taste debates.",
    },
    {
      n: "05",
      title:
        "Decoupling does not always mean replacement. Sometimes the right move is controlled coexistence.",
    },
  ] as Lesson[],

  related: [
    { href: "/cases", label: "Back to Cases" },
    {
      href: "/cases/ckyc-onboarding",
      label: "Related case: CKYC Onboarding",
    },
    {
      href: "/cases/welcome-kit",
      label: "Related case: Welcome Kit",
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
