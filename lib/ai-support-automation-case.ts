/**
 * AI-led Support Automation - real standalone Big Project case (Decision 071).
 *
 * Case path: Cases -> Big Project -> AI-led Support Automation.
 * Rendered by app/cases/ai-led-support-automation.
 *
 * A service-experience + automation case (NOT an app-UI case): redesigning
 * customer issue resolution across IVR, chatbot, email, SMS, and app
 * self-serve journeys using intent mapping, bot workflows, and an Issue
 * Prediction API. Fixed, public-safe copy: no invented CSAT improvement
 * numbers (the CSAT note stays qualitative); the high-confidence-case decision
 * is stated in softened language; artifacts are service/flow/system
 * placeholders, never app screenshots or fake dashboards; no internal-evidence
 * language; no em/en dashes in visible copy. Related links include Transparent
 * Banking (charge issues routed there) and deliberately exclude Fraud Alarm.
 */

export type MetricStat = { value: string; label: string };
export type MetaRow = { label: string; value: string };
export type DecisionCard = { title: string; copy: string };
export type UseCase = { title: string; copy: string };
export type Placeholder = { screen: string; caption: string };
export type Lesson = { n: string; title: string };
export type RelatedLink = { href: string; label: string };

export const aiSupportAutomation = {
  crumbs: ["Cases", "Big Project", "AI-led Support Automation"],
  title: "AI-led Support Automation",
  subtitle:
    "Automating customer issue resolution across IVR, chatbot, email, and app self-serve journeys.",

  meta: [
    { label: "Status", value: "Field report v1" },
    {
      label: "Timeline",
      value: "Two quarters to implement; ongoing expansion to more issue types",
    },
    { label: "Case type", value: "Service experience + automation" },
    { label: "Role", value: "Design Head" },
    {
      label: "Team",
      value:
        "Design Head + Product Head, 3 PMs, data team, AI team, customer support team",
    },
  ] as MetaRow[],

  outcome: [
    { value: "30-50%", label: "Inbound queries automated" },
    { value: "40-60%", label: "Response-time reduction" },
    { value: "12%", label: "Support-cost reduction" },
    { value: "22%", label: "Bot resolution rate" },
    {
      value: "5 intents",
      label: "Freeze, charges, transaction failure, fraud, MPIN/password",
    },
  ] as MetricStat[],

  problem: {
    heading: "Support scale was growing faster than human support could.",
    copy: [
      "As transactions, onboarding, and customer volume grew, support demand grew with it.",
      "Every spike in call volume created the same problem: longer waits, higher call-center cost, more pressure to keep hiring agents, and a worse experience for the customer.",
      "The issue was not always that a digital solution did not exist. In many cases, the solution already existed inside the app. The experience problem was discovery, routing, and timing.",
      `Users came through IVR, chatbot, or email describing symptoms like "transaction failed" or "unable to transact," while the real root cause could be something else, such as account freeze.`,
    ],
  },

  shift: {
    heading: "From support contact to predicted intent.",
    copy: [
      "The goal was not to replace support with bots.",
      "The goal was to understand why customers were reaching out, predict the likely issue using behavioral and profile-based signals, and route them to the fastest digital resolution path.",
      "Instead of treating every contact as a fresh support request, the system used issue signals to decide whether the customer should go to IVR, chatbot, email response, SMS deep link, or an app self-serve journey.",
    ],
  },

  whatChanged: {
    systemLead: "The system covered:",
    system: [
      "Chatbot workflows",
      "IVR routing",
      "Email bot responses",
      "SMS deep links",
      "Proactive app surfaces",
      "App self-serve journeys",
      "Issue-intent mapping",
      "Lifecycle-triggered communication",
      "Tier-1 bot workflows for high-frequency issues",
    ],
    intentsLead: "Primary automated intents:",
    intents: [
      "Account freeze",
      "Charges",
      "Transaction failure",
      "Fraud",
      "Forgot MPIN / password",
    ],
  },

  api: {
    heading: "Issue Prediction API",
    intro: [
      "The Issue Prediction API acted as the intelligence layer behind support routing.",
      "It used behavioral and profile-based data from a central data lake to infer likely customer issues with reasonable accuracy.",
    ],
    signalsLabel: "Signals included",
    signals: [
      "Transaction success rates",
      "Load times",
      "Banking-point visits",
      "Account status",
      "Recent registration",
      "Recent charges",
      "Transaction failure data",
      "Freeze status",
      "Other behavioral and profile indicators",
    ],
    closing:
      "This allowed IVR, chatbot, email, and app surfaces to route customers toward the right resolution path before a human agent had to investigate the issue from scratch.",
  },

  decisions: [
    {
      title: "Start with Pareto, not bot coverage",
      copy: "The team identified the few high-frequency intents driving a large share of support volume, instead of trying to automate everything at once.",
    },
    {
      title: "Digitize the resolution journey",
      copy: "Automation only worked when there was a real self-serve path behind it. High-volume issues needed digital journeys, not just bot replies.",
    },
    {
      title: "Treat IVR as a routing layer",
      copy: "IVR was redesigned from a generic menu into a smarter routing surface that could acknowledge known issues and guide users to app-based resolution.",
    },
    {
      title: "Reduce human routing for high-confidence issues",
      copy: "For high-confidence blocker cases, the system first guided customers to the relevant self-serve journey instead of sending them through generic IVR or agent queues.",
    },
    {
      title: "Use SMS as a bridge to self-serve",
      copy: "When users came through IVR, SMS deep links helped move them from phone support into the correct app journey.",
    },
    {
      title: "Proactively surface help in the app",
      copy: "If signals suggested a likely issue, chatbot or help entry points could be surfaced on relevant app screens or the homepage for critical scenarios.",
    },
  ] as DecisionCard[],

  before: [
    "Customer faces issue",
    "Calls IVR / opens chatbot / sends email",
    "Generic menu or generic bot",
    "Customer explains symptom",
    "Issue may be tagged incorrectly",
    "Human agent investigates root cause",
    "Resolution delayed",
  ],
  after: [
    "Customer reaches IVR / chatbot / email / app",
    "Issue Prediction API reads behavioral/profile signals",
    "Likely intent is predicted",
    "Customer routed to relevant self-serve path",
    "SMS/app deep link opens resolution journey",
    "Human escalation reserved for uncertain cases",
  ],

  useCases: {
    examples: [
      {
        title: "Account freeze",
        copy: "If freeze status was detected, IVR could acknowledge the issue and send an SMS link to the relevant app journey. A freeze API then identified the freeze type and routed the customer to the right action.",
      },
      {
        title: "Charges",
        copy: "Charge-related queries were routed to Transparent Banking, where users could see past charges, upcoming charges, and the exact charge logic behind deductions.",
      },
      {
        title: "Transaction failure",
        copy: "Users were shown refund timelines, failure context, and whether the issue needed to be resolved through the receiver-side bank.",
      },
      {
        title: "Forgot MPIN / password",
        copy: "Handled through a fully self-serve reset journey, reducing the need for human support.",
      },
    ] as UseCase[],
    quote:
      "We noticed your account is frozen. We have sent you an SMS to resolve this in the app. If you are calling for something else, continue.",
  },

  artifacts: {
    heading: "Service design artifacts",
    copy: "This case is not about screens. Artifacts should show the service system behind resolution.",
    placeholders: [
      {
        screen: "Pareto issue analysis",
        caption:
          "Identified the few issue types driving the largest share of support demand.",
      },
      {
        screen: "Intent map",
        caption:
          "Mapped customer symptoms to likely root causes and resolution paths.",
      },
      {
        screen: "Old support journey",
        caption: "Showed how users moved from symptom to agent investigation.",
      },
      {
        screen: "New issue-prediction journey",
        caption:
          "Showed how signals routed users to self-serve before human escalation.",
      },
      {
        screen: "IVR routing flow",
        caption: "Turned IVR from menu navigation into a personalized routing layer.",
      },
      {
        screen: "Email bot flow",
        caption: "Automated high-frequency written support responses.",
      },
      {
        screen: "Chatbot conversation flow",
        caption: "Handled tier-1 intents through structured resolution paths.",
      },
      {
        screen: "SMS deep-link handoff",
        caption: "Moved phone-support users into the correct app journey.",
      },
      {
        screen: "App self-serve routing",
        caption: "Connected predicted intent to digital resolution.",
      },
      {
        screen: "High-confidence blocker logic",
        caption: "Prioritized known issues like freeze before generic support menus.",
      },
      {
        screen: "Escalation logic",
        caption: "Reserved human support for unresolved or uncertain cases.",
      },
      {
        screen: "Metrics panel",
        caption: "Tracked automation, response time, resolution, and cost deflection.",
      },
    ] as Placeholder[],
  },

  metrics: {
    heading: "Metric movement",
    rows: [
      {
        label: "Primary automation",
        value:
          "30-50% of inbound queries automated through tier-1 bot workflows.",
      },
      {
        label: "Time compression",
        value:
          "40-60% response-time reduction through real-time conversational and self-serve routing.",
      },
      {
        label: "Cost impact",
        value: "12% reduction in support costs through call-center deflection.",
      },
      { label: "Resolution", value: "22% bot resolution rate." },
    ] as MetaRow[],
    csatLabel: "CSAT",
    csatNote:
      "The goal was to protect wait time and CSAT as business volume scaled, without linearly increasing call-center headcount and cost.",
  },

  myRole: {
    intro: [
      "As Design Head, I worked directly with the Product Head from an experience strategy point of view.",
      "This was not a UI project with dedicated designers. It was a service-experience redesign across support channels.",
    ],
    bullets: [
      "Framing support automation as a customer-experience problem",
      "Identifying why users were contacting support",
      "Helping map high-volume intents",
      "Influencing the move from human-first support to self-serve routing",
      "Shaping the high-confidence blocker logic",
      "Working with PMs, data, AI, and customer support teams",
      "Ensuring automation reduced cost without abandoning the customer",
    ],
  },

  lessons: [
    {
      n: "01",
      title: "A bot is not the product. The resolution path behind it is the product.",
    },
    {
      n: "02",
      title: "Customers describe symptoms. Systems need to infer root causes.",
    },
    {
      n: "03",
      title: "IVR can be more than a menu. It can become an intent-aware routing layer.",
    },
    {
      n: "04",
      title:
        "Human support should be reserved for uncertainty, not used as the default crutch.",
    },
    {
      n: "05",
      title:
        "Automation improves experience only when it gets users to the right resolution faster.",
    },
  ] as Lesson[],

  related: [
    { href: "/cases", label: "Back to Cases" },
    {
      href: "/cases/transparent-banking",
      label: "Related case: Transparent Banking",
    },
    {
      href: "/cases/airtel-payments-bank-app",
      label: "Related case: Airtel Payments Bank App",
    },
    {
      href: "/cases/airtel-payments-bank-for-business",
      label: "Related case: Airtel Payments Bank for Business",
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
