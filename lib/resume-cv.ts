/**
 * Résumé / CV content (Decision 075). 100% sourced from the owner's CV PDF
 * (nikhil-sharma-cv.pdf) - wording is the CV's; only typography is normalized
 * to the site convention (sentence-case section labels, hyphens instead of
 * en-dashes in date ranges). Rendered by app/resume in the dark kamran design
 * (the PDF's visual design is NOT copied - only its content).
 */

export const cv = {
  name: "Nikhil Sharma",
  title: "Head of Product Design · AI-Native Product Organizations",
  contact: {
    email: "hi.nikhilsharma@gmail.com",
    phone: "+91-9999724809",
    linkedin: "linkedin.com/in/nikhilsharma09",
    linkedinUrl: "https://www.linkedin.com/in/nikhilsharma09/",
  },

  summary: [
    "I have spent 12+ years turning unclear problems into products people trust, and building the teams that keep shipping them. At Airtel Payments Bank I started with no design function and grew it into the multidisciplinary team now behind products used by 12M+ people a month, with design sitting at the table with product, engineering, and leadership.",
    "Most of the work is upstream of the screen: figuring out what to build and why. My team ships production code through AI-assisted design-to-code pipelines, grounds decisions in field research across rural and urban India, and has made customer trust something the bank can market, not just claim.",
  ],

  snapshot: [
    {
      label: "Leadership",
      stats: [
        { value: "0→20", note: "Built design function" },
        { value: "20+", note: "Direct design hires" },
      ],
    },
    {
      label: "Business impact",
      stats: [
        { value: "28×", note: "Digital gold growth" },
        { value: "7×", note: "Customer onboarding growth" },
        { value: "62%", note: "Fraud reduction" },
        { value: "85%", note: "QA/UAT effort reduction" },
      ],
    },
    {
      label: "Scale",
      stats: [
        { value: "12M+", note: "Monthly active users" },
        { value: "500+", note: "User interviews, 50 field studies" },
      ],
    },
    {
      label: "Entrepreneurship",
      stats: [
        { value: "₹70L", note: "Monthly revenue (Svenklas)" },
        { value: "3 lakh+", note: "Units sold" },
        { value: "30+", note: "Retail partners" },
        { value: "LANE", note: "AI-native design ops SaaS" },
      ],
    },
  ],

  experience: [
    {
      company: "Airtel Payments Bank",
      role: "Head of Product Design",
      dates: "Sep 2017 - Present",
      intro:
        "Built and scaled the Product Design function into a strategic capability across consumer banking, merchant platforms, and AI-enabled product development, partnering with executive leadership on strategy, operating models, and business outcomes.",
      groups: [
        {
          label: "Organizational leadership",
          bullets: [
            "Built Airtel Payments Bank's Product Design function from zero into a 20-person multidisciplinary organization, establishing hiring, career development, design operations, UX research, and design systems as core organizational capabilities.",
            "Hired 20+ designers directly at Airtel Payments Bank and mentored 40+ across the industry, building high-performing teams through structured hiring, performance management, and leadership development.",
            "Repositioned Design as a strategic business function by introducing executive design reviews, problem-first product discovery, research-led prioritization, and cross-functional planning with Product, Engineering, Compliance, and Business leadership.",
          ],
        },
        {
          label: "AI transformation & product infrastructure",
          bullets: [
            "Authored the CEO-approved strategy to make Airtel Payments Bank an AI-native product organization, building a Figma-to-production-code pipeline (Figma MCP with Claude Code) that lets designers ship production frontend directly, cutting QA/UAT from two weeks to two days.",
            "Built Vault, an AI-powered design system spanning consumer and merchant platforms, where 12 designers now ship production code with zero frontend-engineering dependency and 85% lower QA/UAT effort.",
          ],
        },
        {
          label: "Product strategy & business growth",
          bullets: [
            "Led the design strategy for Airtel Payments Bank's standalone banking platform, separating banking from the telecom ecosystem without disrupting an active nationwide customer base.",
            "Designed Airtel Payments Bank for Business from inception, a unified merchant platform spanning payments, current accounts, lending, analytics, and business operations, and presented its vision in board-level strategy reviews.",
            "Increased first-time digital gold adoption by 28× by introducing a ₹10-a-day SIP model informed by behavioral research into why casual savers never bought gold.",
            "Increased customer onboarding by 7× by redesigning activation around behavioral barriers, simplifying KYC, improving recovery flows, and reducing the first deposit requirement from ₹100 to ₹1.",
          ],
        },
        {
          label: "Trust, safety & customer experience",
          bullets: [
            "Studied real fraud patterns across the customer base to design both prevention and rapid-response systems for digitally vulnerable, low-literacy users, reducing digital fraud by 62% in two quarters.",
            "Built contextual, native-language interventions and redesigned recovery journeys that made trust and safety part of the bank's public brand.",
          ],
        },
      ],
    },
    {
      company: "PayU India",
      role: "Senior UX Designer",
      dates: "Jul 2016 - Sep 2017",
      intro: "",
      groups: [
        {
          label: "",
          bullets: [
            "Led end-to-end design for payment experiences across web and mobile, simplifying checkout journeys and reducing customer friction.",
            "Partnered with Product Managers and Engineering to improve payment success, merchant onboarding, and customer retention through data-informed design decisions.",
          ],
        },
      ],
    },
    {
      company: "GE Healthcare",
      role: "UX Designer",
      dates: "Jul 2014 - Jul 2016",
      intro: "",
      groups: [
        {
          label: "",
          bullets: [
            "Designed enterprise healthcare applications supporting clinicians and hospital operations across diagnostic and imaging workflows.",
            "Collaborated with cross-functional teams across Product Management and Engineering to simplify high-risk workflows while maintaining regulatory and usability requirements.",
          ],
        },
      ],
    },
  ],

  signatureWork: [
    {
      title: "Fraud Alarm",
      copy: "One swipe freezes the account, resets credentials, reports the fraud, and triggers a bank callback in a single gesture.",
      result: "Innovation of the Year. Resolves 39% of frauds.",
    },
    {
      title: "Transparent Banking",
      copy: "Plain-language view of charges, permissions, data use, and account states for low-literacy customers, adopted bank-wide.",
      result: "Cut charge-related support calls by 22%.",
    },
    {
      title: "Safe Pay",
      copy: "India-first third-factor authentication: explicit in-app approval required before any UPI or net-banking debit goes out.",
      result: "2 industry awards. 32% higher balances.",
    },
  ],

  ventures: [
    {
      name: "LANE",
      role: "Founder",
      tag: "AI-native Design Ops SaaS",
      copy: "Building an AI-native design ops platform that takes product teams from ideas to validated decisions: structured problem framing, hypothesis validation, design collaboration, and delivery planning in one place.",
      groupLabel: "Product craft",
      bullets: [
        "Designed, built, and shipped solo end to end on Next.js, Supabase, and the Claude API.",
        "AI workflows evaluate hypotheses and requirement quality before a team commits to execution.",
      ],
    },
    {
      name: "Svenklas",
      role: "Founder",
      tag: "Premium Minimalist Travel Accessories Brand",
      copy: "Built a digitally native lifestyle brand focused on premium backpacks and travel accessories.",
      groupLabel: "Business impact",
      bullets: [
        "Scaled to ₹70L monthly revenue and 3 lakh+ units sold across online and offline channels.",
        "Expanded distribution through 30+ retail partners, bootstrapped with no external funding.",
      ],
    },
  ],

  expertise: [
    { label: "Leadership", items: ["Organizational Design", "Product Strategy", "Design Leadership", "Executive Stakeholder Management"] },
    { label: "Product", items: ["Consumer Fintech", "Growth & Activation", "Trust & Safety", "Behavioral Design"] },
    { label: "AI & design", items: ["Design-to-Code Pipelines", "Design Systems", "Design Operations", "UX Research"] },
    { label: "Technology", items: ["Figma", "Claude Code & Cursor", "Next.js & React", "Supabase & Vercel"] },
  ],

  education: {
    degree: "Bachelor of Architecture",
    school: "National Institute of Technology, Hamirpur",
    dates: "2005 - 2010",
  },

  awards: [
    "Innovation of the Year, Finnoviti Awards (Fraud Alarm)",
    "Best Digital Banking Initiative, Digital Banker Awards",
    "Best Payments Experience, Asiamoney Awards",
  ],

  beyondWork:
    "Music producer and multi-instrumentalist, watercolourist, and lifelong maths enthusiast, currently exploring documentary filmmaking.",
};
