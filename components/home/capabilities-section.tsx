import { SectionShell } from "@/components/section-shell";

/*
 * Capability tiles, recomposed (Decision 049): the pastel color-block layer
 * retired as non-premium. Cells now use the site's ledger vocabulary with
 * three deliberate surfaces: paper + hairline (default), one carbon feature
 * cell (the flagship capability, echoing the masthead/footer), and one bone
 * closing cell. Hover is the site-wide border tone-shift.
 */
type CellTone = "paper" | "carbon" | "bone";

const cellTone = (tone: CellTone) =>
  tone === "carbon"
    ? {
        cell: "border border-carbon bg-carbon hover:border-olive-char",
        meta: "text-moss",
        title: "text-paper",
        copy: "text-moss",
      }
    : {
        cell: `border border-ash hover:border-olive-char ${
          tone === "bone" ? "bg-bone" : "bg-paper"
        }`,
        meta: "text-ink/55",
        title: "text-ink",
        copy: "text-ink/75",
      };

const capabilities: { title: string; copy: string; tone: CellTone }[] = [
  {
    title: "Organizational Design",
    copy: "Building design teams, rituals, reviews, hiring practices, onboarding systems, and operating models that move design from service function to strategic product capability.",
    tone: "paper",
  },
  {
    title: "AI-native Product Development",
    copy: "Using AI to reshape how teams frame problems, validate direction, move from design to code, and reduce friction between product, design, and engineering.",
    tone: "carbon",
  },
  {
    title: "Behavioral Growth",
    copy: "Designing around real customer behavior, not idealized user journeys, to improve activation, adoption, retention, and business outcomes.",
    tone: "paper",
  },
  {
    title: "Customer Trust",
    copy: "Building trust in regulated financial products through transparency, safety, recovery, education, and product architecture.",
    tone: "paper",
  },
  {
    title: "Product Infrastructure",
    copy: "Creating design systems, component models, product workflows, and governance systems that reduce rework and improve execution quality.",
    tone: "paper",
  },
  {
    title: "Builder Energy",
    copy: "Building products and businesses, including LANE, Svenklas, internal tools, and AI experiments, as proof that the operating philosophy is not theoretical.",
    tone: "bone",
  },
];

export function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      index="03"
      eyebrow="Capabilities"
      title="Capabilities over projects."
      intro={
        <>
          <p>Projects expire. Capabilities compound.</p>
          <p className="text-lichen">
            I organize my work around the capabilities that help product
            organizations move from scattered execution to repeatable quality.
          </p>
        </>
      }
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => {
          const tone = cellTone(capability.tone);
          return (
            <li
              key={capability.title}
              className={`group flex min-h-[236px] flex-col gap-4 rounded-lg p-7 transition-colors duration-200 ${tone.cell}`}
            >
              <div
                className={`flex items-center justify-between ${tone.meta}`}
              >
                <span className="font-geometric-mono text-[12px] font-medium tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-rubric text-[10px] uppercase tracking-[0.16em]">
                  Capability
                </span>
              </div>
              <h3
                className={`font-headline-serif text-[23px] font-normal leading-[1.12] tracking-[0] ${tone.title}`}
              >
                {capability.title}
              </h3>
              <p
                className={`font-editorial-serif text-[15px] leading-[1.45] ${tone.copy}`}
              >
                {capability.copy}
              </p>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
