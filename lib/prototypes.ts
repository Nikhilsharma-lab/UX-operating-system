/*
 * Password-gated Figma prototypes per case ("UI evidence"), rendered by
 * <UiEvidence>. Each case links to its own frame in the Portfolio 2026 Figma
 * file. Hero images live in public/case-ui/<slug>.jpg; until one is added the
 * card shows a "Hero image" placeholder.
 *
 * NOTE: the password is a client-side gate only (it ships in the page bundle),
 * so it just deters casual access. For real protection, also set a password on
 * the Figma link itself, or restrict it to specific viewers.
 */
export type Prototype = {
  heading: string;
  subheading: string;
  image?: string;
  href: string;
  password: string;
  cta?: string;
};

const PASSWORD = "nikhil";

export const prototypes: Record<string, Prototype> = {
  "fraud-alarm": {
    heading: "The Fraud Alarm journey",
    subheading: "The full in-app emergency-control experience, from alarm to resolution.",
    image: "/case-ui/fraud-alarm.jpg",
    href: "https://www.figma.com/design/1L83tiqaCC9WnOh0CeZoyN/Portfolio-2026?node-id=3-33",
    password: PASSWORD,
  },
  "transparent-banking": {
    heading: "Transparent Banking, end to end",
    subheading: "The full journey that earns customer trust through transparency.",
    image: "/case-ui/transparent-banking.jpg",
    href: "https://www.figma.com/design/1L83tiqaCC9WnOh0CeZoyN/Portfolio-2026?node-id=3-43",
    password: PASSWORD,
  },
  "ckyc-onboarding": {
    heading: "The CKYC onboarding flow",
    subheading: "Account opening, from the first tap to a verified account.",
    image: "/case-ui/ckyc-onboarding.jpg",
    href: "https://www.figma.com/design/1L83tiqaCC9WnOh0CeZoyN/Portfolio-2026?node-id=0-1",
    password: PASSWORD,
  },
  "welcome-kit": {
    heading: "The Welcome Kit experience",
    subheading: "The full activation and first-run journey for new accounts.",
    image: "/case-ui/welcome-kit.jpg",
    href: "https://www.figma.com/design/1L83tiqaCC9WnOh0CeZoyN/Portfolio-2026?node-id=3-2",
    password: PASSWORD,
  },
  "airtel-payments-bank-app": {
    heading: "The Airtel Payments Bank app",
    subheading: "The consumer payments and banking experience, end to end.",
    image: "/case-ui/airtel-payments-bank-app.jpg",
    href: "https://www.figma.com/design/1L83tiqaCC9WnOh0CeZoyN/Portfolio-2026?node-id=3-13",
    password: PASSWORD,
  },
  "airtel-payments-bank-for-business": {
    heading: "Airtel Payments Bank for Business",
    subheading: "The merchant and business banking journey.",
    image: "/case-ui/airtel-payments-bank-for-business.jpg",
    href: "https://www.figma.com/design/1L83tiqaCC9WnOh0CeZoyN/Portfolio-2026?node-id=3-23",
    password: PASSWORD,
  },
};

export function getPrototype(slug: string): Prototype | undefined {
  return prototypes[slug];
}
