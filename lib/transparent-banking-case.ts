/**
 * Transparent Banking - real nested case study content (Decision 066).
 *
 * Case path: Safe Second Account → Trust → Transparent Banking.
 * Rendered by app/cases/transparent-banking/page.tsx.
 *
 * Fixed, public-safe copy. No invented names, dates, metrics, dashboards,
 * press links, or persona narrative. The metric is scoped to the exposed-user
 * group ("among users who visited Transparent Banking") and must not be
 * overstated. Screenshots are placeholders only.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string; body: string };
export type RelatedLink = { href: string; label: string };

export const transparentBanking = {
  hierarchy: {
    bigProject: "Safe Second Account",
    subproject: "Trust",
    caseName: "Transparent Banking",
  },
  title: "Transparent Banking",
  subtitle:
    "Turning banking transparency from buried disclosure into a visible trust system.",

  meta: [
    { label: "Status", value: "Field report v1" },
    { label: "Timeframe", value: "1 month to build; 3 months to measure" },
    { label: "Role", value: "Head of Product Design" },
    {
      label: "Team",
      value:
        "1 designer, 1 PM, 2 developers, support analytics, legal, growth",
    },
  ] as MetaRow[],

  outcome: [
    { value: "22%", label: "Reduction in charge-related support calls among exposed users" },
    { value: "30-40%", label: "Users exposed through top quick-action placement" },
    { value: "3 months", label: "Measurement window after launch" },
    { value: "GFF 2024", label: "Publicly launched at Global Fintech Fest" },
  ] as MetricStat[],

  problem: {
    heading: "Banking information existed, but users could not use it.",
    copy: [
      "Charges were hard to understand. Terms and conditions were written in legalese. App permissions were requested without clear explanation. Data practices were vague.",
      "Call-center data showed that charge-related queries were a major support driver. The problem was not only that information was missing. It was that the information users needed to trust the bank was scattered, technical, or hidden inside low-visibility surfaces.",
    ],
  },

  shift: {
    heading: "From disclosure to trust infrastructure.",
    copy: [
      "We stopped treating transparency as a compliance box to tick and started building it as part of the product.",
      "Transparent Banking became a visible trust surface, not just a charges or T&C page.",
    ],
    reframeFrom: "“Where do we disclose this?”",
    reframeTo:
      "“What does the user need to understand before they trust the bank?”",
  },

  shipped: {
    hubLead: "A dedicated Transparent Banking hub covering:",
    hub: [
      "Simplified charges",
      "Upcoming charges specific to the user’s account",
      "Charges already levied",
      "Simplified terms and conditions",
      "Banking glossary / banking dictionary",
      "App permissions and why they are needed",
      "Data stored about the user",
      "How user data is used",
      "Secure data practices",
      "Complaints / key fact sheet",
      "Transparency pledge",
    ],
    note: "The philosophy extended beyond the section itself. Charges were also shown upfront before account creation, even if that could create a small funnel hit, because long-term trust and acquisition quality mattered more than hiding friction.",
  },

  decisions: [
    {
      title: "Create one visible trust destination",
      copy: "Charges, T&Cs, permissions, data practices, complaints, and commitments were brought into a single user-facing hub instead of being scattered across support and legal surfaces.",
    },
    {
      title: "Make charges personal",
      copy: "A generic schedule of charges explains what the bank can charge. Users needed to understand what had been charged to their own account and what could be charged next.",
    },
    {
      title: "Use plain language, not banking language",
      copy: "The section simplified terms, charges, permissions, and data practices so users could understand them without legal or financial interpretation.",
    },
    {
      title: "Fight for high-visibility placement",
      copy: "Transparent Banking was not immediately monetizable, so placing it in the top four quick actions required alignment with growth around trust, brand, and support-cost impact.",
    },
    {
      title: "Turn transparency into philosophy",
      copy: "The goal was not just to publish one section. The principle had to influence other journeys, including showing charges upfront before account creation.",
    },
  ] as DecisionCard[],

  before: [
    "Charge noticed",
    "User confused",
    "Searches app / support",
    "Calls customer care",
    "Waits for explanation",
    "Trust erodes",
  ],
  after: [
    "Charge noticed",
    "Opens Transparent Banking",
    "Checks simplified / upcoming / levied charges",
    "Understands reason",
    "Avoids support call",
    "Trust improves",
  ],

  uiEvidence: {
    heading: "UI evidence",
    copy: "Screens will be added as annotated product-decision evidence, not as a Figma gallery.",
    placeholders: [
      { screen: "Transparent Banking hub", caption: "Turned scattered trust information into a visible destination." },
      { screen: "Simple Charges", caption: "Made charges understandable without a support call." },
      { screen: "Upcoming Charges", caption: "Showed what could be charged next based on the user’s account and usage." },
      { screen: "Charges Levied", caption: "Helped users understand deductions that had already happened." },
      { screen: "Simple T&C", caption: "Translated dense legal terms into plain-language banking commitments." },
      { screen: "Banking Dictionary", caption: "Reduced financial-literacy friction by explaining banking terms." },
      { screen: "App Permissions", caption: "Explained what access the app needs and why." },
      { screen: "Data Practices", caption: "Made stored data and usage more visible." },
      { screen: "Complaints / Key Fact Sheet", caption: "Made complaint-volume transparency part of the trust experience." },
      { screen: "Transparency Pledge", caption: "Positioned transparency as a bank commitment, not just a feature." },
    ] as Placeholder[],
  },

  metrics: {
    heading: "Metric movement",
    primary:
      "22% reduction in charge-related support calls among users who visited Transparent Banking.",
    rows: [
      {
        label: "Source",
        value:
          "Month-on-month call-center data for charge-related calls, filtered for users who visited Transparent Banking.",
      },
      {
        label: "Measurement window",
        value: "Observed over three months after launch.",
      },
      {
        label: "Scope",
        value: "Charge-related support calls only, not total support calls.",
      },
      {
        label: "Attribution",
        value:
          "Directionally attributable to Transparent Banking because the reduction was observed among users exposed to the section. This gave confidence that wider exposure could reduce charge-related calls at a broader level.",
      },
      {
        label: "Placement",
        value:
          "Placed in the top four quick actions, exposing it to approximately 30-40% of users.",
      },
    ] as MetaRow[],
  },

  myRole: {
    intro: [
      "As Head of Product Design, I led the discovery and framing of Transparent Banking.",
      "I listened to customer-care calls to understand where users were getting confused, especially around charges. I also ran user interviews to identify what else belonged in a transparency section beyond charges and terms.",
    ],
    bullets: [
      "Identified charge-related support calls as a major problem",
      "Shaped Transparent Banking as a trust philosophy, not a utility page",
      "Directed the information architecture and UX",
      "Expanded the section through user interviews and stakeholder input",
      "Aligned product, growth, legal, support, and engineering",
      "Pushed for high-visibility placement despite unclear immediate monetization",
    ],
  },

  lessons: [
    {
      n: "01",
      title: "Transparency is not disclosure.",
      body: "Disclosure protects the bank. Transparency helps the user.",
    },
    {
      n: "02",
      title: "Trust can reduce cost.",
      body: "Clear explanations can reduce avoidable support calls.",
    },
    {
      n: "03",
      title: "Non-monetizable surfaces can be strategic.",
      body: "Not every important product surface has immediate revenue ROI.",
    },
    {
      n: "04",
      title: "Plain language is a product decision.",
      body: "Simplifying banking language can change user trust and behavior.",
    },
  ] as Lesson[],

  future: {
    heading: "From explanation to control.",
    copy: [
      "The next evolution is to integrate DPDP and turn Transparent Banking into a Consent Centre.",
      "Users should be able to review every consent they have given to the bank, including account-opening consent, standing instructions, WhatsApp communication consent, data-use consent, and other permissions, and revoke them from one central place.",
      "Transparent Banking should evolve from explaining trust to giving users control over it.",
    ],
  },

  related: [
    { href: "/cases", label: "Back to Cases" },
    {
      href: "/cases/fraud-alarm",
      label: "Related case: Fraud Alarm",
    },
    { href: "/operating-manual/design-systems", label: "Operating Manual: Design Systems" },
    {
      href: "/operating-manual/organization-design",
      label: "Operating Manual: Organization Design",
    },
  ] as RelatedLink[],
};
