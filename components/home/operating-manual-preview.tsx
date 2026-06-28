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
      <ul className="divide-y divide-ash border-t border-b border-ash">
        {topics.map((topic, index) => (
          <li key={topic}>
            <a
              href="#operating-manual"
              className="flex items-baseline gap-4 py-4 transition-colors hover:bg-bone/60"
            >
              <span className="t-caption font-geometric-mono text-lichen">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-editorial-serif text-[18px] tracking-[-0.01em] text-ink">
                {topic}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <CtaLink href="#operating-manual" variant="secondary">
          Explore Operating Manual
        </CtaLink>
      </div>
    </SectionShell>
  );
}
