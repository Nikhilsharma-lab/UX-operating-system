import { SectionShell } from "@/components/section-shell";

/*
 * The evolution arc as a compact timeline strip: six eras reading left to
 * right at desktop, a hairline list on mobile. Chronology is a real
 * sequence, so the small indices stay. The self-referencing "Read
 * Evolution" button was removed; the section links out once
 * PAGES/EVOLUTION.md ships a real page.
 */
const arc = [
  { era: "Architecture", lesson: "taught systems and space." },
  { era: "Healthcare", lesson: "taught safety-critical complexity." },
  { era: "Payments", lesson: "taught scale and trust." },
  { era: "Banking", lesson: "taught regulation and business outcomes." },
  { era: "AI-native building", lesson: "is teaching new operating models." },
  { era: "Entrepreneurship", lesson: "is teaching ownership." },
];

export function EvolutionPreview() {
  return (
    <SectionShell
      id="evolution"
      eyebrow="Evolution"
      title="From architecture to healthcare, payments, banking, AI, and entrepreneurship."
    >
      <ol className="grid border-t border-ash sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {arc.map((step, index) => (
          <li
            key={step.era}
            className="flex flex-col gap-2 border-b border-ash py-5 xl:border-b-0 xl:border-r xl:py-6 xl:pr-5 xl:[&:nth-child(6)]:border-r-0 xl:[&:nth-child(n+2)]:pl-5"
          >
            <span className="t-caption font-geometric-mono tabular-nums text-lichen">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="t-body-serif text-ink">{step.era}</span>
            <span className="t-body-sm text-olive-char">{step.lesson}</span>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
