import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-shell";

const systems = [
  "Hiring creates the team.",
  "Research changes decisions.",
  "Reviews protect quality.",
  "Design systems reduce drift.",
  "AI workflows compress translation.",
  "Trust compounds execution.",
  "Culture is what repeats.",
];

/*
 * Operating Thesis (homepage IA cleanup, Decision 056): the intellectual
 * spine of the site, positioned as the editorial bridge between the proof
 * strip and the proof sections. Bone tint band, the thesis line as a Caslon
 * title, drop-cap essay opener; the right rail states what each system
 * does rather than repeating "is a system."
 */
export function BeliefSection() {
  return (
    <section id="belief" className="border-t border-ash bg-bone py-20 md:py-28">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-20">
          <Reveal className="max-w-[680px]">
            <div className="mb-5">
              <SectionEyebrow>Operating Thesis</SectionEyebrow>
            </div>
            <h2 className="t-hed-1 text-balance text-ink">
              Design creates systems that create products.
            </h2>

            <div className="mt-9 space-y-6">
              <p className="dropcap t-body-serif text-ink">
                Most portfolios show the visible layer: screens, flows,
                launches, and metrics. But products are shaped much earlier.
                They are shaped by how teams frame problems, how research
                changes decisions, how product and engineering collaborate,
                how quality is reviewed, how systems are maintained, and how
                leaders create conditions for repeatable execution.
              </p>
              <p className="t-body-serif text-ink">
                My work focuses on building those systems so teams can ship
                better products repeatedly, not accidentally.
              </p>
            </div>
          </Reveal>

          <ul className="flex flex-col self-center divide-y divide-ash border-t border-b border-ash">
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
      </div>
    </section>
  );
}
