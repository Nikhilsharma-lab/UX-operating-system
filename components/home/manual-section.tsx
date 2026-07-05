import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { SectionShell } from "@/components/section-shell";

/** Only live manual entries are listed; new topics appear as entries ship. */
const topics: { label: string; href: string }[] = [
  { label: "Organization Design", href: "/operating-manual/organization-design" },
  { label: "Design Systems", href: "/operating-manual/design-systems" },
  { label: "AI Workflow", href: "/operating-manual/ai-workflow" },
  { label: "Design Reviews", href: "/operating-manual/design-reviews" },
  { label: "Stakeholder Management", href: "/operating-manual/stakeholder-management" },
];

/*
 * Operating Manual as a standalone section again (homepage IA cleanup,
 * Decision 056): the reading river from the former library band, placed
 * after Transformations per the target IA. Content unchanged.
 */
export function ManualSection() {
  return (
    <SectionShell
      id="operating-manual"
      eyebrow="Operating Manual"
      title="A public operating manual for design organizations that ship."
      intro={
        <p>
          Leadership experience turned into reusable systems: hiring,
          research, reviews, AI workflows, decision-making, and team rituals.
          This is where the site becomes useful beyond proof.
        </p>
      }
    >
      <div className="max-w-[720px] border-t border-ash">
        {topics.map((topic) => (
          <Link
            key={topic.label}
            href={topic.href}
            className="group flex items-baseline gap-4 border-b border-ash py-4 pr-1 transition-colors hover:bg-bone/50"
          >
            <span className="t-body-serif text-ink">{topic.label}</span>
            <span
              aria-hidden="true"
              className="ml-auto font-geometric-mono text-[13px] text-sage transition-colors group-hover:text-ink"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <CtaLink href="/operating-manual" variant="secondary">
          Explore Operating Manual
        </CtaLink>
      </div>
    </SectionShell>
  );
}
