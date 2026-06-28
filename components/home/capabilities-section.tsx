import { SectionShell } from "@/components/section-shell";

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
      <ul className="grid gap-px overflow-hidden rounded-lg border border-ash bg-ash md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => (
          <li key={capability.title} className="flex flex-col gap-4 bg-paper p-6">
            <span className="t-caption font-geometric-mono text-lichen">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-editorial-serif text-[20px] font-normal leading-[1.2] tracking-[-0.01em] text-ink">
              {capability.title}
            </h3>
            <p className="t-body-sm text-olive-char">{capability.copy}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
