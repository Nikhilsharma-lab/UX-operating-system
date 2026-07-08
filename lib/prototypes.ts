/*
 * Password-gated Figma prototypes per case ("UI evidence"), rendered by
 * <UiEvidence>. Fill in the real Figma link, password, and hero image for each
 * case below. Hero images go in public/case-ui/<slug>.jpg (any path works);
 * until one is added, the card shows a "Hero image" placeholder.
 *
 * NOTE: the password is a client-side gate only - also enable Figma's own link
 * password on the prototype for real protection.
 */
export type Prototype = {
  heading: string;
  subheading: string;
  image?: string;
  href: string;
  password: string;
  cta?: string;
};

// TODO(owner): replace these two per case with the real values.
const FIGMA = "https://www.figma.com/"; // paste the protected Figma prototype link
const PASSWORD = "nikhil"; // temporary shared password; Figma links to be added later

export const prototypes: Record<string, Prototype> = {
  "fraud-alarm": {
    heading: "The Fraud Alarm journey",
    subheading: "The full in-app emergency-control experience, from alarm to resolution.",
    image: "/case-ui/fraud-alarm.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
  "transparent-banking": {
    heading: "Transparent Banking, end to end",
    subheading: "The full journey that earns customer trust through transparency.",
    image: "/case-ui/transparent-banking.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
  "ckyc-onboarding": {
    heading: "The CKYC onboarding flow",
    subheading: "Account opening, from the first tap to a verified account.",
    image: "/case-ui/ckyc-onboarding.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
  "welcome-kit": {
    heading: "The Welcome Kit experience",
    subheading: "The full activation and first-run journey for new accounts.",
    image: "/case-ui/welcome-kit.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
  "airtel-payments-bank-app": {
    heading: "The Airtel Payments Bank app",
    subheading: "The consumer payments and banking experience, end to end.",
    image: "/case-ui/airtel-payments-bank-app.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
  "airtel-payments-bank-for-business": {
    heading: "Airtel Payments Bank for Business",
    subheading: "The merchant and business banking journey.",
    image: "/case-ui/airtel-payments-bank-for-business.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
  "ai-led-support-automation": {
    heading: "AI-led support, in action",
    subheading: "The full AI-driven support resolution flow.",
    image: "/case-ui/ai-led-support-automation.jpg",
    href: FIGMA,
    password: PASSWORD,
  },
};

export function getPrototype(slug: string): Prototype | undefined {
  return prototypes[slug];
}
