import { SectionShell } from "@/components/section-shell";
import { CtaLink } from "@/components/cta-link";

const essaySeeds = [
  "Why case studies are too small for executive work",
  "Design systems are product infrastructure",
  "Trust is not a UI layer",
  "AI-native teams need new operating models",
  "Design creates systems that create products",
];

export function ThinkingPreview() {
  return (
    <SectionShell
      id="thinking"
      eyebrow="Thinking"
      title="Essays, frameworks, and mental models for modern product organizations."
      intro={
        <>
          <p>
            The Thinking section expands the ideas behind the work: AI-native
            product teams, design systems as infrastructure, behavioral growth,
            trust in financial products, and why transformation stories are
            stronger than case studies.
          </p>
          <p className="text-lichen">
            This is not a blog of opinions. It is where experience becomes
            reusable thinking.
          </p>
        </>
      }
    >
      <ul className="space-y-px overflow-hidden rounded-lg border border-ash bg-ash">
        {essaySeeds.map((seed) => (
          <li
            key={seed}
            className="flex items-center justify-between gap-4 bg-paper px-5 py-4"
          >
            <span className="font-editorial-serif text-[18px] tracking-[-0.01em] text-ink">
              {seed}
            </span>
            <span className="t-caption font-geometric-mono uppercase text-sage">
              Seed
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <CtaLink href="#thinking" variant="secondary">
          Read Thinking
        </CtaLink>
      </div>
    </SectionShell>
  );
}
