import { SectionShell } from "@/components/section-shell";

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
      index="07"
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
      <ul className="border-t border-ash">
        {essaySeeds.map((seed, index) => (
          <li
            key={seed}
            className="flex flex-col gap-2 border-b border-ash py-5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="t-caption font-geometric-mono uppercase tracking-[0.04em] text-lichen sm:w-24 sm:shrink-0">
              Note {String(index + 1).padStart(2, "0")}
            </span>
            <p className="max-w-[640px] font-editorial-serif text-[19px] font-light leading-[1.32] tracking-[-0.01em] text-ink">
              {seed}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center gap-3">
        <p className="font-geometric-mono text-[12px] font-medium uppercase tracking-[0.06em] text-lichen">
          Essays in development
        </p>
      </div>
    </SectionShell>
  );
}
