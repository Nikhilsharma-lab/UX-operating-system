import { SectionShell } from "@/components/section-shell";

// New Yorker color-blocked feature tiles — verified pastels from newyorker.com.
const cardTones = [
  "bg-card-yellow",
  "bg-card-sky",
  "bg-card-green",
  "bg-card-lavender",
  "bg-card-paleyellow",
  "bg-card-blue",
];

const capabilities = [
  {
    title: "Organizational Design",
    copy: "Building design teams, rituals, reviews, hiring practices, onboarding systems, and operating models that move design from service function to strategic product capability.",
  },
  {
    title: "AI-native Product Development",
    copy: "Using AI to reshape how teams frame problems, validate direction, move from design to code, and reduce friction between product, design, and engineering.",
  },
  {
    title: "Behavioral Growth",
    copy: "Designing around real customer behavior — not idealized user journeys — to improve activation, adoption, retention, and business outcomes.",
  },
  {
    title: "Customer Trust",
    copy: "Building trust in regulated financial products through transparency, safety, recovery, education, and product architecture.",
  },
  {
    title: "Product Infrastructure",
    copy: "Creating design systems, component models, product workflows, and governance systems that reduce rework and improve execution quality.",
  },
  {
    title: "Builder Energy",
    copy: "Building products and businesses — including LANE, Svenklas, internal tools, and AI experiments — as proof that the operating philosophy is not theoretical.",
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
        {capabilities.map((capability, index) => (
          <li
            key={capability.title}
            className={`group flex min-h-[236px] flex-col gap-4 rounded-lg p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0px_6px_18px_rgba(35,31,32,0.14)] ${cardTones[index % cardTones.length]}`}
          >
            <div className="flex items-center justify-between text-ink/55">
              <span className="font-geometric-mono text-[12px] font-medium tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-rubric text-[10px] uppercase tracking-[0.16em]">
                Capability
              </span>
            </div>
            <h3 className="font-headline-serif text-[23px] font-normal leading-[1.12] tracking-[0] text-ink">
              {capability.title}
            </h3>
            <p className="font-editorial-serif text-[15px] leading-[1.45] text-ink/75">
              {capability.copy}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
