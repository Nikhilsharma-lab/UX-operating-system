/**
 * Airtel Payments Bank for Business - real standalone Big Project case
 * (Decision 070).
 *
 * Case path: Cases -> Big Project -> Airtel Payments Bank for Business.
 * Rendered by app/cases/airtel-payments-bank-for-business.
 *
 * A shipped business-banking app case with ecosystem strategy as context:
 * consolidating fragmented merchant + current-account experiences into one
 * app. Fixed, public-safe copy. This case names the Airtel brand on purpose
 * (title, route, and thesis), consistent with the sibling Airtel Payments
 * Bank App case. Hard rules honored: no invented post-launch metrics (the app
 * shipped recently and metrics are still being measured); AI Insights is
 * designed and in development, NOT live; the ~Rs.10/month AI Insights price is
 * framed as potential future monetization only; no reference to the separate
 * merchant-assistant app; no internal-evidence language; no em/en dashes in
 * visible copy. Artifacts are
 * placeholders only.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string; note?: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string };
export type RelatedLink = { href: string; label: string };

export const airtelPaymentsBankForBusiness = {
  crumbs: ["Cases", "Big Project", "Airtel Payments Bank for Business"],
  title: "Airtel Payments Bank for Business",
  subtitle:
    "Combining merchant payments, current account, settlement, and lending into one business banking experience.",

  meta: [
    { label: "Status", value: "Field report v1 · shipped" },
    { label: "Duration", value: "Three quarters" },
    { label: "Case type", value: "Business app + ecosystem strategy" },
    { label: "Role", value: "Design Head" },
    {
      label: "Team",
      value:
        "4 designers, 2 PMs, 10 engineers, business, lending, analytics, operations, compliance",
    },
  ] as MetaRow[],

  // Metric / context strip (five panels)
  outcome: [
    { value: "3 quarters", label: "Strategy, design, and ship" },
    {
      value: "4 designers / 2 PMs / 10 engineers",
      label: "Core product team",
    },
    {
      value: "5 priority metrics",
      label:
        "CA cross-sell, Soundbox adoption, settlement linkage, lending funnel, app adoption",
    },
    { value: "Tier-3 / tier-4", label: "Primary merchant design context" },
    { value: "AI Insights", label: "Designed and in development" },
  ] as MetricStat[],

  problem: {
    heading: "The merchant experience was fragmented.",
    copy: [
      "Merchant payments, Current Account, settlements, QR, Soundbox, and lending opportunities were not experienced as one connected business relationship.",
      "The old business app was also carrying real product debt: slow loading, confusing navigation, unclear labels, visual clutter, backend failures, and everyday tasks that took far longer than they should.",
      "For small merchants, especially in tier-3 and tier-4 markets, this meant daily business tasks took more effort than they should.",
    ],
  },

  insight: {
    heading: "Merchants were already connecting payments and banking.",
    copy: [
      "Market visits showed that many merchants were using Airtel Payments Bank Current Account as their settlement account.",
      "That was the strategic opening.",
      "Most merchant players can help businesses accept payments. Airtel Payments Bank could go further: payment acceptance, settlement, current account, QR, Soundbox, reports, and future lending could live inside one owned banking ecosystem.",
      "When merchants used Airtel Payments Bank Current Account for settlement, settlement could become instant instead of moving through another bank account with a time lag.",
    ],
  },

  shift: {
    heading: "From payment acceptance to business banking.",
    copy: [
      "The goal was not only to help merchants accept payments.",
      "The goal was to turn a merchant relationship into a business banking relationship.",
      "Airtel Payments Bank for Business combined merchant use cases and current-account use cases into one app, creating a clearer path for current account cross-sell, Soundbox adoption, settlement linkage, and transaction-led lending.",
    ],
  },

  shipped: {
    lead: "A business banking app covering:",
    items: [
      "Today's collection",
      "Settlement balance",
      "Current Account balance",
      "QR payments",
      "Soundbox management",
      "Transaction history",
      "Settlements",
      "Reports",
      "Current Account cross-sell",
      "Loan / lending eligibility",
      "Business app adoption flows",
      "Language / vernacular support considerations",
      "AI Insights as an in-development layer",
    ],
    note: "The app is shipped. AI Insights is designed and in development.",
  },

  decisions: [
    {
      title: "Make Current Account the business anchor",
      copy: "Current Account was not treated as a separate banking product. It became the anchor that connected settlement, merchant acceptance, and future lending.",
    },
    {
      title: "Combine merchant and banking into one dashboard",
      copy: "Merchants needed one place to see collections, settlements, Current Account balance, QR payments, Soundbox, and transactions.",
    },
    {
      title: "Anchor the homepage in daily merchant questions",
      copy: "The homepage centered on today's collection and settlement balance because merchants primarily ask: how much did I collect, where is my money, and has it settled?",
    },
    {
      title: "Design for small-merchant ease of use",
      copy: "Most merchants were from tier-3 and tier-4 markets, so the app had to be simple, fast, clear, vernacular-aware, and task-first.",
    },
    {
      title: "Use settlement behavior to cross-sell Current Account",
      copy: "If a merchant was settling into another bank account, there was a time lag and a weaker Airtel Payments Bank relationship. Current Account settlement made the value proposition stronger.",
    },
    {
      title: "Solve the Soundbox app-adoption gap",
      copy: "Soundbox confirmed payments aloud, so merchants had less reason to open the app. The app needed useful reasons beyond payment alerts.",
    },
    {
      title: "Add AI Insights as a reason to return",
      copy: "AI Insights was designed to help merchants understand business performance: nearby similar-store comparison, ARPU comparison, best-performing day, and local rank/percentile.",
      note: "Future monetization was explored as a merchant intelligence subscription, potentially around ₹10/month.",
    },
  ] as DecisionCard[],

  before: [
    "Merchant accepts payment",
    "Checks payment in old merchant app",
    "Settlement may go to another bank",
    "Current account lives separately",
    "Soundbox reduces need to open app",
    "Cross-sell and lending hard to discover",
  ],
  after: [
    "Merchant opens Business App",
    "Sees today's collection and settlement balance",
    "Manages QR / Soundbox / transactions",
    "Sees Current Account as business anchor",
    "Links settlement to APB Current Account",
    "Discovers lending and growth opportunities",
  ],

  research: {
    heading: "Built from market visits, not assumptions.",
    copy: [
      "The strategy came from market visits, merchant interviews, prototype testing, field observation, task completion on the old app, and competitive benchmarking.",
      "Research showed two important things.",
      "First, the old experience was too slow and difficult for daily merchant tasks.",
      "Second, Soundbox reduced app habit because merchants already heard payment confirmations from the device. To make the app valuable, it had to help merchants grow their business, not only check payments.",
    ],
    principleLabel: "Design principle",
    principle: "Ease of use for small merchants.",
    languageLabel: "Language / vernacular",
    language:
      "The experience considered major Indian languages such as Hindi, Bengali, Tamil, Punjabi, English, and others. Voice and sound cues were planned for future accessibility, but not shipped yet.",
  },

  artifacts: {
    heading: "UI and strategy artifacts",
    copy: "Artifacts will be added as product-decision evidence, not as a Figma gallery.",
    placeholders: [
      {
        screen: "Business app homepage",
        caption: "Combined merchant and banking tasks into one business surface.",
      },
      {
        screen: "Today's collection",
        caption:
          "Answered the merchant's first daily question: how much did I collect today?",
      },
      {
        screen: "Settlement balance",
        caption: "Made money movement and settlement status visible.",
      },
      {
        screen: "Current Account card",
        caption: "Positioned Current Account as the business banking anchor.",
      },
      {
        screen: "QR payments",
        caption: "Kept payment acceptance easy to access.",
      },
      {
        screen: "Soundbox management",
        caption:
          "Supported a key merchant product while acknowledging that Soundbox reduced app-opening habit.",
      },
      {
        screen: "Transaction history",
        caption: "Made daily reconciliation easier.",
      },
      {
        screen: "Settlements",
        caption:
          "Showed where money was going and whether settlement had happened.",
      },
      {
        screen: "Reports",
        caption: "Supported business review and operational clarity.",
      },
      {
        screen: "Loan / lending eligibility",
        caption:
          "Created a path from transaction behavior to lending opportunity.",
      },
      {
        screen: "AI Insights",
        caption:
          "Gave merchants a future reason to return beyond payment confirmation.",
      },
      {
        screen: "Language / vernacular screens",
        caption: "Supported small merchants across tier-3 and tier-4 markets.",
      },
    ] as Placeholder[],
  },

  tracking: {
    heading: "Metrics being tracked",
    metricsLabel: "Primary metrics",
    metrics: [
      "Current Account cross-sell",
      "Soundbox adoption",
      "Settlement account linkage",
      "Loan eligibility / lending funnel",
      "Business App adoption",
    ],
    statusLabel: "Status",
    status:
      "The app has shipped recently, so actual post-launch performance metrics are still being measured.",
  },

  myRole: {
    intro: [
      "As Design Head, I helped frame Airtel Payments Bank for Business as a combined merchant-banking experience.",
      "The insight came from market visits: merchants were already connecting merchant payments and current-account settlement in practice, but the product experience was fragmented.",
    ],
    bullets: [
      "Identifying the disjointed merchant / current-account experience",
      "Framing Current Account as the anchor for the business app",
      "Shaping the combined merchant + business banking experience",
      "Identifying the Soundbox app-adoption problem",
      "Helping reposition the app from payment acceptance to business growth",
      "Conceptualizing AI Insights as a reason for merchants to return",
      "Aligning product, business, lending, analytics, operations, compliance, design, and engineering",
    ],
  },

  lessons: [
    {
      n: "01",
      title:
        "A merchant app should not only show payments. It should help run the business.",
    },
    {
      n: "02",
      title:
        "A convenience product can weaken app habit. Soundbox solved payment confirmation, but reduced reasons to open the app.",
    },
    {
      n: "03",
      title:
        "Current Account can become a moat when settlement, merchant acceptance, and lending are connected.",
    },
    {
      n: "04",
      title: "Small merchants need speed and clarity before sophistication.",
    },
    {
      n: "05",
      title: "Growth features work better when they are useful, not just visible.",
    },
  ] as Lesson[],

  related: [
    { href: "/cases", label: "Back to Cases" },
    {
      href: "/cases/airtel-payments-bank-app",
      label: "Related case: Airtel Payments Bank App",
    },
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
