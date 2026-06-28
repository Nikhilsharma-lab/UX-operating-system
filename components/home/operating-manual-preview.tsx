import { SectionShell } from "@/components/section-shell";
import { CtaLink } from "@/components/cta-link";

const topics = [
  "Hiring",
  "Design Reviews",
  "Product Reviews",
  "AI Workflow",
  "Research",
  "Decision Making",
  "Design Systems",
  "Stakeholder Management",
];

export function OperatingManualPreview() {
  return (
    <SectionShell
      id="operating-manual"
      eyebrow="Operating Manual"
      title="A public operating manual for design organizations that ship."
      intro={
        <>
          <p>
            The Operating Manual turns leadership experience into reusable
            systems: hiring, research, design reviews, product reviews, AI
            workflows, decision-making, stakeholder alignment, and team rituals.
          </p>
          <p className="text-lichen">
            This is where the site becomes useful beyond proof.
          </p>
        </>
      }
    >
      <div className="border-t border-ash">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <a
              key={topic}
              href="#operating-manual"
              className={`group flex items-baseline gap-4 border-b border-ash px-1 py-4 transition-colors hover:bg-bone/50 ${
                index % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <span className="t-caption font-geometric-mono tabular-nums text-lichen">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-editorial-serif text-[17px] tracking-[-0.01em] text-ink">
                {topic}
              </span>
              <span
                aria-hidden="true"
                className="ml-auto font-geometric-mono text-[13px] text-sage"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <CtaLink href="#operating-manual" variant="secondary">
          Explore Operating Manual
        </CtaLink>
      </div>
    </SectionShell>
  );
}
