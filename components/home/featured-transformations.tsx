import Link from "next/link";
import { EditorialArt } from "@/components/editorial/editorial-art";
import { SectionShell } from "@/components/section-shell";

const metaLabel =
  "font-rubric text-[11px] font-medium uppercase tracking-[0.1em]";

const readLink =
  "inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-lichen";

type Story = {
  index: string;
  /** Full route; Digital Gold points at its case page, not the story shell. */
  href: string;
  cardHeadline: string;
  summary: string;
  proves: string;
  cta: string;
};

/*
 * Magazine hierarchy (homepage recomposition): the organization-building
 * story is the lead — it answers the primary audience's question — and the
 * other two run as secondary columns beneath a hairline. "Case file NN"
 * numbering stays: the files are a real, typed sequence.
 */
const leadStory: Story = {
  index: "01",
  href: "/transformations/building-design-organization",
  cta: "Read transformation",
  cardHeadline: "From scattered design execution to an operating model.",
  summary:
    "How a product design function evolved into a clearer organizational system: teams, rituals, research, reviews, hiring, design systems, and cross-functional product collaboration.",
  proves:
    "Built the operating model behind a maturing product design organization, not only its design output.",
};

const secondaryStories: Story[] = [
  {
    index: "02",
    href: "/transformations/ai-native-product-development",
    cta: "Read transformation",
    cardHeadline:
      "Modernizing how product work moves from idea to implementation.",
    summary:
      "How AI-assisted workflows, design systems, and product operating tools began changing the relationship between problem framing, validation, design, implementation, and engineering collaboration.",
    proves:
      "Applied AI-assisted design-to-code workflows that reduced implementation friction while keeping engineering ownership intact.",
  },
  {
    index: "03",
    href: "/cases/digital-gold-growth",
    cta: "Read case",
    cardHeadline: "Designing growth around customer behavior.",
    summary:
      "How commitment anxiety, product framing, and behavioral insight shaped a model that made Digital Gold easier to start and easier to sustain.",
    // 28× is public-approved as a selected headline outcome (Decision 046);
    // the full story adds baseline/timeframe/attribution before publication.
    proves:
      "Connected customer behavior and product decisions to the selected 28× Digital Gold growth outcome; full story in preparation.",
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
      {/* Lead story — text left, art plate right */}
      <article className="grid gap-8 border-t border-ash pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,44%)] md:gap-14">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-4">
            <span className={`${metaLabel} text-lichen`}>
              Case file {leadStory.index}
            </span>
            <span className={`${metaLabel} text-sage`}>Transformation</span>
          </div>
          <h3 className="mt-5 t-hed-3 text-balance text-ink">
            <Link
              href={leadStory.href}
              className="transition-colors hover:text-olive-char"
            >
              {leadStory.cardHeadline}
            </Link>
          </h3>
          <p className="mt-5 max-w-[560px] t-body-serif text-olive-char">
            {leadStory.summary}
          </p>
          <div className="mt-7 max-w-[560px] border-t border-ash pt-5">
            <span className={`${metaLabel} text-lichen`}>
              Leadership signal
            </span>
            <p className="mt-2 t-body-sm text-carbon">{leadStory.proves}</p>
          </div>
          <div className="mt-8">
            <Link href={leadStory.href} className={readLink}>
              {leadStory.cta}
              <span aria-hidden="true" className="text-lichen">
                →
              </span>
            </Link>
          </div>
        </div>

        <EditorialArt
          slotId="home.transformations.lead-plate"
          variant="transformation-plate"
          aspect="plate"
          className="self-start"
        />
      </article>

      {/* Secondary stories — two columns under a hairline */}
      <div className="mt-12 grid gap-10 border-t border-ash pt-10 md:grid-cols-2 md:gap-14">
        {secondaryStories.map((story) => (
          <article key={story.index} className="flex flex-col">
            <div className="flex items-baseline gap-4">
              <span className={`${metaLabel} text-lichen`}>
                Case file {story.index}
              </span>
              <span className={`${metaLabel} text-sage`}>Transformation</span>
            </div>
            <h3 className="mt-4 t-hed-card text-balance text-ink">
              <Link
                href={story.href}
                className="transition-colors hover:text-olive-char"
              >
                {story.cardHeadline}
              </Link>
            </h3>
            <p className="mt-3 max-w-[460px] t-body-sm text-olive-char">
              {story.summary}
            </p>
            <p className="mt-4 max-w-[460px] t-body-sm text-carbon">
              {story.proves}
            </p>
            <div className="mt-5">
              <Link href={story.href} className={readLink}>
                {story.cta}
                <span aria-hidden="true" className="text-lichen">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
