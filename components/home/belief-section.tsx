import { SectionShell } from "@/components/section-shell";

const systems = [
  "Hiring is a system.",
  "Research is a system.",
  "Decision-making is a system.",
  "Design reviews are systems.",
  "AI workflows are systems.",
  "Trust is a system.",
  "Culture is a system.",
];

export function BeliefSection() {
  return (
    <SectionShell id="belief" eyebrow="Belief">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-16">
        <div className="max-w-[680px]">
          {/* editorial accent mark (2 of 2 on the page) */}
          <span
            aria-hidden="true"
            className="mb-6 block h-[4px] w-12 bg-highlighter-yellow"
          />
          <h2 className="font-editorial-serif font-light text-[clamp(2rem,4.4vw,3rem)] leading-[1.06] tracking-[-0.02em] text-ink">
            Design creates systems that create products.
          </h2>

          <div className="mt-8 space-y-4 t-body text-olive-char">
            <p>
              Most portfolios show the visible layer: screens, flows, launches,
              and metrics.
            </p>
            <p>But products are shaped much earlier.</p>
            <p>
              They are shaped by how teams frame problems, how research changes
              decisions, how product and engineering collaborate, how quality is
              reviewed, how systems are maintained, and how leaders create
              conditions for repeatable execution.
            </p>
            <p className="text-ink">
              My work focuses on building those systems so teams can ship better
              products repeatedly, not accidentally.
            </p>
          </div>
        </div>

        <ul className="flex flex-col self-start divide-y divide-ash border-t border-b border-ash">
          {systems.map((line) => (
            <li
              key={line}
              className="py-3 font-geometric-mono text-[14px] tracking-[-0.02em] text-carbon"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
