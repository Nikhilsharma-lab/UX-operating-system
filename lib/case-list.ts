/*
 * Flat case registry (Decision 072 IA flattening). Cards for the /cases index
 * and the homepage. Every case is served at /cases/<slug> — no nesting. The
 * `program` field keeps the old grouping (e.g. "Safe Second Account") as a tag
 * only, never in the URL.
 */

export type CaseCard = {
  slug: string;
  mono: string;
  title: string;
  category: string;
  status: string | null;
  summary: string;
  program: string | null;
};

export const caseList: CaseCard[] = [
  {
    slug: "digital-gold-growth",
    mono: "DG",
    title: "Digital Gold Growth",
    category: "Financial services · Behavioral growth",
    status: "Shipped",
    summary:
      "Reframed investment as a low-commitment savings habit (Digital Gold SIPs) — a 28× increase in Digital Gold purchases.",
    program: null,
  },
  {
    slug: "fraud-alarm",
    mono: "FA",
    title: "Fraud Alarm",
    category: "Trust · Safety",
    status: "Field report",
    summary:
      "Turned fraud reporting from a helpline dependency into an in-app emergency-control workflow.",
    program: "Safe Second Account",
  },
  {
    slug: "transparent-banking",
    mono: "TB",
    title: "Transparent Banking",
    category: "Trust",
    status: "Field report",
    summary: "Building customer trust through radical transparency.",
    program: "Safe Second Account",
  },
  {
    slug: "ckyc-onboarding",
    mono: "CK",
    title: "CKYC Onboarding",
    category: "Onboarding",
    status: "Field report",
    summary: "A digital KYC onboarding flow for the second account.",
    program: "Safe Second Account",
  },
  {
    slug: "welcome-kit",
    mono: "WK",
    title: "Welcome Kit",
    category: "Activation",
    status: "Field report",
    summary: "An activation welcome experience for new account holders.",
    program: "Safe Second Account",
  },
  {
    slug: "airtel-payments-bank-app",
    mono: "AP",
    title: "Airtel Payments Bank — App",
    category: "Consumer payments",
    status: null,
    summary: "Consumer payments and banking app experience at national scale.",
    program: "Airtel Payments Bank",
  },
  {
    slug: "airtel-payments-bank-for-business",
    mono: "AB",
    title: "Airtel Payments Bank — Business",
    category: "Business banking",
    status: null,
    summary: "Merchant and business banking surface for the payments bank.",
    program: "Airtel Payments Bank",
  },
  {
    slug: "ai-led-support-automation",
    mono: "AI",
    title: "AI-led Support Automation",
    category: "AI · Support operations",
    status: null,
    summary: "Customer support run end-to-end by AI agents.",
    program: null,
  },
  {
    slug: "lane",
    mono: "LN",
    title: "Lane",
    category: "Founder-built SaaS · AI-native product",
    status: "Private beta",
    summary:
      "Turning design operations from task tracking into decision infrastructure.",
    program: "Founder-built SaaS",
  },
];

export function caseHref(slug: string): string {
  return `/cases/${slug}`;
}
