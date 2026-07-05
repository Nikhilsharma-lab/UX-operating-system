import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { EditorialArt } from "@/components/editorial/editorial-art";
import { SectionShell } from "@/components/section-shell";

/** Only live manual entries are listed; new topics appear as entries ship. */
const topics: { label: string; href: string }[] = [
  { label: "Organization Design", href: "/operating-manual/organization-design" },
  { label: "Design Systems", href: "/operating-manual/design-systems" },
  { label: "AI Workflow", href: "/operating-manual/ai-workflow" },
  { label: "Design Reviews", href: "/operating-manual/design-reviews" },
  { label: "Stakeholder Management", href: "/operating-manual/stakeholder-management" },
];

export function OperatingManualPreview() {
  return (
    <SectionShell
      id="operating-manual"
      index="06"
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
      <EditorialArt
        slotId="home.manual.strip"
        variant="diagram-painting"
        aspect="strip"
        className="mb-8"
      />
      <div className="border-t border-ash">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <Link
              key={topic.label}
              href={topic.href}
              className={`group flex items-baseline gap-4 border-b border-ash px-1 py-4 transition-colors hover:bg-bone/50 ${
                index % 2 === 0 && index !== topics.length - 1
                  ? "sm:border-r"
                  : ""
              }`}
            >
              <span className="t-caption font-geometric-mono tabular-nums text-lichen">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-editorial-serif text-[17px] tracking-[-0.01em] text-ink">
                {topic.label}
              </span>
              <span
                aria-hidden="true"
                className="ml-auto font-geometric-mono text-[13px] text-sage"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <CtaLink href="/operating-manual" variant="secondary">
          Explore Operating Manual
        </CtaLink>
      </div>
    </SectionShell>
  );
}
