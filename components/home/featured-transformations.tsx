import { SectionShell } from "@/components/section-shell";
import { EvidenceGateLabel } from "@/components/evidence-gate-label";
import { CtaLink } from "@/components/cta-link";

const stories = [
  {
    index: "01",
    cardHeadline: "From scattered design execution to an operating model.",
    summary:
      "How a product design function evolved into a clearer organizational system: teams, rituals, research, reviews, hiring, design systems, and cross-functional product collaboration.",
    proves:
      "Nikhil can build the operating system of a product design organization, not just manage design output.",
  },
  {
    index: "02",
    cardHeadline: "Modernizing how product work moves from idea to implementation.",
    summary:
      "How AI-assisted workflows, design systems, and product operating tools began changing the relationship between problem framing, validation, design, implementation, and engineering collaboration.",
    proves:
      "Nikhil is applying AI to product operating models, not using it as a buzzword.",
  },
  {
    index: "03",
    cardHeadline: "Designing growth around customer behavior.",
    summary:
      "How commitment anxiety, product framing, and behavioral insight shaped a model that made Digital Gold easier to start and easier to sustain.",
    proves:
      "Nikhil connects customer behavior, product decisions, and measurable business growth. 28× growth in Digital Gold adoption.",
  },
];

export function FeaturedTransformations() {
  return (
    <SectionShell
      id="transformations"
      eyebrow="Transformations"
      title="Transformation stories, not case studies."
      intro={
        <>
          <p>A case study shows what was designed.</p>
          <p>A transformation story shows what changed.</p>
          <p className="text-lichen">
            These stories document business problems, organizational
            constraints, research, decisions, tradeoffs, execution, outcomes,
            and lessons.
          </p>
        </>
      }
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {stories.map((story) => (
          <li
            key={story.index}
            className="flex flex-col gap-5 rounded-lg border border-ash bg-paper p-6"
          >
            <span className="t-caption font-geometric-mono text-sage">
              {story.index}
            </span>
            <h3 className="font-editorial-serif text-[22px] font-normal leading-[1.18] tracking-[-0.01em] text-ink">
              {story.cardHeadline}
            </h3>
            <p className="t-body-sm text-olive-char">{story.summary}</p>

            <div className="mt-auto space-y-3 border-t border-ash pt-4">
              <p className="t-caption font-geometric-mono uppercase text-sage">
                What it proves
              </p>
              <p className="t-body-sm text-carbon">{story.proves}</p>
              <EvidenceGateLabel />
            </div>

            <CtaLink href="#transformations" variant="secondary">
              Read Transformation
            </CtaLink>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
