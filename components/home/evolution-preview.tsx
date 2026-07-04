import { SectionShell } from "@/components/section-shell";
import { CtaLink } from "@/components/cta-link";

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
      index="09"
      eyebrow="Evolution"
      title="From architecture to healthcare, payments, banking, AI, and entrepreneurship."
    >
      <ol className="border-t border-ash">
        {arc.map((step, index) => (
          <li
            key={step.era}
            className="flex items-baseline gap-4 border-b border-ash py-3"
          >
            <span className="t-caption font-geometric-mono tabular-nums text-lichen">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-[150px] font-editorial-serif text-[17px] tracking-[-0.01em] text-ink sm:min-w-[200px]">
              {step.era}
            </span>
            <span className="t-body-sm text-olive-char">{step.lesson}</span>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <CtaLink href="#evolution" variant="secondary">
          Read Evolution
        </CtaLink>
      </div>
    </SectionShell>
  );
}
