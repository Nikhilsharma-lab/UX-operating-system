/**
 * Cases section data.
 *
 * SHELL ONLY. These are generic placeholder slots — Nikhil will provide the
 * actual case names, business context, journey details, decisions, artifacts,
 * metrics, and role details later. Do not add case names, metrics, or product
 * specifics here until they are provided and pass evidence review.
 */

export type CaseSlot = {
  number: string;
  status: string;
  title: string;
  description: string;
};

export const caseSlots: CaseSlot[] = [
  {
    number: "01",
    status: "Content pending",
    title: "Case 01",
    description:
      "A senior UX/product case will be added here after the business context, journey details, artifacts, decisions, and outcome evidence are collated.",
  },
  {
    number: "02",
    status: "Content pending",
    title: "Case 02",
    description:
      "Reserved for a full case report — business problem, journey diagnosis, strategic bet, shipped experience, and metric movement.",
  },
  {
    number: "03",
    status: "Content pending",
    title: "Case 03",
    description:
      "Reserved for a full case report — to be written after evidence intake, with public-safe product context confirmed.",
  },
  {
    number: "04",
    status: "Content pending",
    title: "Case 04",
    description:
      "Reserved for a full case report — added only once the underlying artifacts and outcome evidence are in place.",
  },
];

/**
 * The senior case structure every future case will follow.
 * Structure only — full case content is written after evidence intake.
 */
export const CASE_STRUCTURE: string[] = [
  "Executive Summary",
  "Business Problem",
  "User Problem",
  "Journey Diagnosis",
  "Strategic Bet",
  "Key Decisions",
  "Experience Before",
  "Experience After",
  "What Shipped",
  "Tradeoffs",
  "Metric Movement",
  "My Role",
  "Artifacts",
  "What Changed Beyond the Screen",
  "Lessons",
  "What I’d Do Differently",
];
