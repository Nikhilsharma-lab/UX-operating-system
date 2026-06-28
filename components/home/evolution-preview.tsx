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
      eyebrow="Evolution"
      title="From architecture to healthcare, payments, banking, AI, and entrepreneurship."
    >
      <ol className="divide-y divide-ash border-t border-b border-ash">
        {arc.map((step) => (
          <li
            key={step.era}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="min-w-[200px] font-editorial-serif text-[18px] tracking-[-0.01em] text-ink">
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
