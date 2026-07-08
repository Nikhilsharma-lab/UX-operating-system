/**
 * Fraud Alarm - real nested case study content (Decision 063, condensed in
 * Decision 064 to a skimmable executive brief).
 *
 * Case path: Safe Second Account → Safety → Fraud Alarm.
 * Rendered by app/cases/fraud-alarm/page.tsx.
 *
 * Fixed, public-safe copy. No invented names, dates, metrics, dashboards, or
 * persona narrative. The metric wording "approximately 15 minutes" and
 * "under 3 minutes" is intentional and must not be paraphrased. Screenshots
 * are placeholders only; the owner holds the real UI screens.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string };
export type RelatedLink = { href: string; label: string };

export const fraudAlarm = {
  hierarchy: {
    bigProject: "Safe Second Account",
    subproject: "Safety",
    caseName: "Fraud Alarm",
  },
  title: "Fraud Alarm",
  subtitle:
    "Turning fraud reporting from a helpline dependency into an in-app emergency-control workflow.",

  meta: [
    { label: "Status", value: "Field report v1" },
    { label: "Timeframe", value: "1 month" },
    { label: "Role", value: "Product Design Head" },
    { label: "Team", value: "1 designer, 1 PM, 4 developers, risk, CRM/support" },
  ] as MetaRow[],

  outcome: [
    { value: "~15 min → <3 min", label: "Response window" },
    { value: "39%", label: "Fraud reports moved directly into the app" },
    { value: "2", label: "Entry points: transaction detail + Security Centre" },
    { value: "6", label: "Automated protection actions" },
  ] as MetricStat[],

  problem: {
    heading: "Fraud was being handled like support.",
    copy: [
      "When users noticed suspicious activity, they often had to search for the customer-care number, call the helpline, navigate IVR, and wait for a human agent, all while panicking.",
      "The issue was not just delay. If credentials were already exposed, every minute spent searching, calling, and waiting created another window for additional fraud.",
    ],
  },

  shift: {
    heading: "From customer-care escalation to emergency control.",
    copy: [
      "We reframed fraud reporting from “how does the user reach support?” to “how does the bank start protection immediately?”",
      "Fraud Alarm moved the first protective action into the app, then brought CRM/support into the workflow after the emergency sequence had already started.",
    ],
  },

  shipped: {
    entryLead: "Two entry points",
    entryPoints: [
      "Report Fraud on transaction detail page",
      "Fraud reporting inside Security Centre",
    ],
    sequenceLead: "Protection sequence",
    sequence: [
      "Account frozen",
      "MPIN expired",
      "New MPIN sent by SMS",
      "Service request raised with last 24 hours transaction history",
      "CRM team notified",
      "Callback initiated",
    ],
  },

  decisions: [
    {
      title: "Place reporting at the point of suspicion",
      copy: "The transaction detail page was the most likely place users would notice fraud, so the Report Fraud action was placed there.",
    },
    {
      title: "Create a persistent safety destination",
      copy: "Security Centre grouped safety-related products and conditioned users to return there for fraud and security needs.",
    },
    {
      title: "Add intentional friction",
      copy: "Swipe, warning, and countdown were added because account freeze and MPIN expiry were high-consequence actions.",
    },
    {
      title: "Separate fraud from general support",
      copy: "Users who cancelled were shown the normal non-emergency customer-care number, so they were not abandoned.",
    },
    {
      title: "Filter for fraud-relevant transactions",
      copy: "The emergency path was limited to recent outgoing-money transactions within 24 hours across both entry points.",
    },
  ] as DecisionCard[],

  before: [
    "Suspicious transaction",
    "Search customer-care number",
    "Call helpline",
    "IVR",
    "Agent wait",
    "Explain issue",
    "Protection begins",
  ],
  after: [
    "Suspicious transaction",
    "Report Fraud",
    "Swipe",
    "Warning + countdown",
    "Protection sequence",
    "Live checklist",
    "Callback/recovery",
  ],

  uiEvidence: {
    heading: "UI evidence",
    copy: "Screens will be added as annotated product-decision evidence, not as a Figma gallery.",
    placeholders: [
      { screen: "Transaction detail entry", caption: "Report Fraud at the point of suspicion." },
      { screen: "Security Centre entry", caption: "A persistent home for safety actions." },
      { screen: "Warning + countdown", caption: "Consequences made explicit before freeze." },
      { screen: "Live checklist", caption: "Backend protection made visible." },
      { screen: "Restoration flow", caption: "A path back to account access." },
    ] as Placeholder[],
  },

  metrics: {
    heading: "Metric movement",
    primary:
      "Fraud Alarm reduced the response window from approximately 15 minutes to under 3 minutes.",
    rows: [
      {
        label: "Definition",
        value:
          "Time from suspected fraud transaction to completion of Fraud Alarm protection sequence.",
      },
      { label: "Source", value: "Transaction logs + customer-care logs." },
      {
        label: "Attribution",
        value:
          "Primarily attributable to Fraud Alarm because the workflow replaced helpline dependency with an in-app one-swipe emergency action.",
      },
      {
        label: "Supporting signal",
        value:
          "39% of fraud reports moved directly into the app without speaking to anyone.",
      },
    ] as MetaRow[],
  },

  myRole: {
    intro:
      "As Product Design Head, I identified the fraud-response gap through support-call analysis, reframed the problem as emergency control, directed the UX strategy, and aligned product, risk, CRM/support, and engineering.",
    bullets: [
      "Identified the delay before protective action",
      "Framed the emergency-control hypothesis",
      "Directed entry-point and friction strategy",
      "Aligned product, risk, CRM/support, and engineering",
      "Used post-launch behavior to refine eligibility",
    ],
  },

  lessons: [
    { n: "01", title: "Emergency UX must match panic-state behavior." },
    { n: "02", title: "High-consequence actions need deliberate friction." },
    { n: "03", title: "Visible reassurance is part of the product." },
  ] as Lesson[],

  related: [
    { href: "/cases", label: "Back to Cases" },
    { href: "/operating-manual/design-reviews", label: "Operating Manual: Design Reviews" },
    {
      href: "/operating-manual/organization-design",
      label: "Operating Manual: Organization Design",
    },
    { href: "/transformations", label: "Transformation stories" },
  ] as RelatedLink[],
};
