import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

const metaLabel =
  "font-rubric text-[11px] font-medium uppercase tracking-[0.1em]";

type Story = {
  index: string;
  slug: string;
  cardHeadline: string;
  summary: string;
  proves: string;
};

const stories: Story[] = [
  {
    index: "01",
    slug: "building-design-organization",
    cardHeadline: "From scattered design execution to an operating model.",
    summary:
      "How a product design function evolved into a clearer organizational system: teams, rituals, research, reviews, hiring, design systems, and cross-functional product collaboration.",
    proves:
      "Built the operating model behind a maturing product design organization — not only its design output.",
  },
  {
    index: "02",
    slug: "ai-native-product-development",
    cardHeadline: "Modernizing how product work moves from idea to implementation.",
    summary:
      "How AI-assisted workflows, design systems, and product operating tools began changing the relationship between problem framing, validation, design, implementation, and engineering collaboration.",
    proves:
      "Applied AI-assisted design-to-code workflows that reduced implementation friction while keeping engineering ownership intact.",
  },
  {
    index: "03",
    slug: "digital-gold-growth",
    cardHeadline: "Designing growth around customer behavior.",
    summary:
      "How commitment anxiety, product framing, and behavioral insight shaped a model that made Digital Gold easier to start and easier to sustain.",
    // 28× is public-approved as a selected headline outcome (Decision 046);
    // the full story adds baseline/timeframe/attribution before publication.
    proves:
      "Connected customer behavior and product decisions to the selected 28× Digital Gold growth outcome — full story in preparation.",
  },
];

export function FeaturedTransformations() {
  return (
    <SectionShell
      id="transformations"
      index="04"
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
            className="group flex flex-col rounded-lg border border-ash bg-paper transition-colors hover:border-olive-char"
          >
            <div className="flex items-center justify-between border-b border-ash px-6 py-3">
              <span className={`${metaLabel} text-lichen`}>
                Case file {story.index}
              </span>
              <span className={`${metaLabel} text-sage`}>Transformation</span>
            </div>

            <div className="flex flex-1 flex-col gap-5 p-6">
              <h3 className="font-headline-serif text-[22px] font-normal leading-[1.16] tracking-[0] text-ink">
                {story.cardHeadline}
              </h3>
              <p className="t-body-sm text-olive-char">{story.summary}</p>

              <div className="mt-auto space-y-3 border-t border-ash pt-4">
                <div className="flex items-center justify-between gap-3">
                  <span className={`${metaLabel} text-lichen`}>
                    Leadership signal
                  </span>
                </div>
                <p className="t-body-sm text-carbon">{story.proves}</p>
              </div>
            </div>

            <div className="border-t border-ash px-6 py-4">
              <Link
                href={`/transformations/${story.slug}`}
                className="inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-lichen"
              >
                Read transformation
                <span aria-hidden="true" className="text-lichen">
                  →
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
