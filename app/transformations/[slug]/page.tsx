import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialArt } from "@/components/editorial/editorial-art";
import { ImageSlot } from "@/components/image-slot";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { evidenceMode } from "@/lib/evidence";
import {
  STORY_FRAMEWORK,
  getStory,
  transformations,
  type DraftBlock,
} from "@/lib/transformations";

export function generateStaticParams() {
  return transformations.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Transformation · Nikhil Sharma" };
  return {
    title: `${story.title} · Nikhil Sharma`,
    description: story.proves,
  };
}

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const relatedLink =
  "font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink";

function Blocks({
  blocks,
  dropcap = false,
}: {
  blocks: DraftBlock[];
  dropcap?: boolean;
}) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p
              key={i}
              className={`max-w-[680px] t-body-serif text-carbon ${
                dropcap && i === 0 ? "dropcap" : ""
              }`}
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 t-body-sm text-carbon">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
                  />
                  <span className="max-w-[660px]">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "decisions") {
          return (
            <div key={i} className="grid gap-4 md:grid-cols-2">
              {block.items.map((d, j) => (
                <div
                  key={j}
                  className="rounded-lg border border-ash bg-paper p-5"
                >
                  <p className="t-body-serif text-ink">
                    {d.decision}
                  </p>
                  <dl className="mt-3 space-y-2">
                    {(
                      [
                        ["Why", d.why],
                        ["Tradeoff", d.tradeoff],
                        ["Result", d.result],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label} className="flex gap-3">
                        <dt
                          className={`${metaLabel} w-16 shrink-0 pt-0.5 text-sage`}
                        >
                          {label}
                        </dt>
                        <dd className="t-body-sm text-olive-char">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          );
        }
        // note
        return (
          <p
            key={i}
            className="max-w-[680px] border-l border-khaki-olive pl-4 t-body-serif text-carbon"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const internal = evidenceMode() === "internal";
  const drafted = story.status === "Draft v1" && !!story.draft;

  const statusText = drafted
    ? "Field report v1"
    : internal
      ? "Evidence intake in progress"
      : "In preparation";

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="py-16 md:py-20">
          <div className="page-shell max-w-[820px]">
            <Link
              href="/transformations"
              className="inline-flex items-center gap-2 font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink"
            >
              <span aria-hidden="true">←</span> Transformations
            </Link>

            <header className="mt-8 border-t border-ash pt-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                  {story.index}
                </span>
                <span className={`${metaLabel} text-lichen`}>
                  Transformation · {story.capability}
                </span>
              </div>

              <h1 className="t-hed-1 text-ink">
                {story.title}
              </h1>

              <p className="mt-6 max-w-[640px] t-dek text-olive-char">
                {story.proves}
                {internal && story.provesMetric
                  ? ` ${story.provesMetric}`
                  : ""}
              </p>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2">
                <div className="bg-paper p-5">
                  <dt className={`${metaLabel} text-sage`}>Primary audience</dt>
                  <dd className="mt-2 t-body-sm text-carbon">
                    {story.primaryAudience}
                  </dd>
                </div>
                <div className="bg-paper p-5">
                  <dt className={`${metaLabel} text-sage`}>Status</dt>
                  <dd className="mt-2 t-body-sm text-carbon">{statusText}</dd>
                </div>
              </dl>

              {!drafted && (
                <p className="mt-6 max-w-[640px] t-body-sm text-lichen">
                  This transformation story is being prepared as an
                  evidence-backed leadership narrative. The final version will
                  include context, decisions, tradeoffs, outcomes, and lessons
                  once evidence intake is complete.
                </p>
              )}
            </header>

            <EditorialArt
              slotId={`transformation.${story.slug}.opener`}
              variant="transformation-plate"
              aspect="plate"
              caption="Opening plate: the operating system behind this transformation, in abstract."
              className="mt-10"
            />

            {drafted && (
              <ImageSlot
                label="Image slot 04 · Artifact"
                note="A public-safe annotated artifact for this story is pending evidence and confidentiality review."
                ratio="1360/560"
                className="mt-10"
              />
            )}

            {drafted ? (
              <div className="mt-14 space-y-12">
                {STORY_FRAMEWORK.map((section) => {
                  const blocks = story.draft?.[section.n];
                  const bullets = story.evidence[section.n];
                  return (
                    <section
                      key={section.n}
                      className="border-t border-ash pt-8"
                    >
                      <div className="mb-5 flex items-baseline gap-4">
                        <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                          {String(section.n).padStart(2, "0")}
                        </span>
                        <h2 className="t-hed-3 text-ink">
                          {section.title}
                        </h2>
                      </div>

                      <div className="pl-10">
                        {blocks ? (
                          <Blocks blocks={blocks} dropcap={section.n === 1} />
                        ) : (
                          <p className="t-body-sm text-lichen">
                            {section.prompt}
                          </p>
                        )}

                        {internal && bullets && (
                          <div className="mt-5 rounded-lg border border-ash bg-paper p-5">
                            <p className={`${metaLabel} mb-3 text-lichen`}>
                              Internal · evidence note
                            </p>
                            <ul className="space-y-2">
                              {bullets.map((b, i) => (
                                <li
                                  key={i}
                                  className="flex gap-3 t-body-sm text-carbon"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
                                  />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
            ) : (
              <section className="mt-14">
                <p className="mb-6 t-caption font-geometric-mono uppercase tracking-[0.06em] text-lichen">
                  Structure
                </p>
                <ol className="divide-y divide-ash border-t border-b border-ash">
                  {STORY_FRAMEWORK.map((section) => {
                    const bullets = story.evidence[section.n];
                    return (
                      <li key={section.n} className="py-5">
                        <div className="flex items-baseline gap-4">
                          <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                            {String(section.n).padStart(2, "0")}
                          </span>
                          <h2 className="t-hed-3 text-ink">
                            {section.title}
                          </h2>
                        </div>
                        <p className="mt-1.5 pl-10 t-body-sm text-lichen">
                          {section.prompt}
                        </p>

                        {internal && bullets && (
                          <div className="mt-4 ml-10 rounded-lg border border-ash bg-paper p-5">
                            <p className={`${metaLabel} mb-3 text-lichen`}>
                              Evidence intake
                            </p>
                            <ul className="space-y-2">
                              {bullets.map((b, i) => (
                                <li
                                  key={i}
                                  className="flex gap-3 t-body-sm text-carbon"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
                                  />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}

            {story.relatedOperatingGuides &&
              story.relatedOperatingGuides.length > 0 && (
                <aside className="mt-14 border-t border-ash pt-6">
                  <p className={`${metaLabel} mb-4 text-lichen`}>
                    {story.relatedOperatingGuides.length > 1
                      ? "Related operating guides"
                      : "Related operating guide"}
                  </p>
                  <ul className="space-y-4">
                    {story.relatedOperatingGuides.map((guide) => (
                      <li key={guide.href}>
                        <Link
                          href={guide.href}
                          className="group block max-w-[680px] rounded-lg border border-ash bg-paper p-5 transition-colors hover:border-olive-char"
                        >
                          <span className="inline-flex items-baseline gap-3">
                            <span className="t-hed-card text-ink">
                              {guide.title}
                            </span>
                            <span
                              aria-hidden="true"
                              className="font-geometric-mono text-[13px] text-sage transition-colors group-hover:text-ink"
                            >
                              →
                            </span>
                          </span>
                          <p className="mt-2 t-body-sm text-olive-char">
                            {guide.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}

            {internal && (
              <p className="mt-10 t-body-sm text-sage">
                Internal: no metric publishes until it is registered in
                EVIDENCE/CLAIMS_REGISTER.md and approved. Unverified claims (e.g.
                interview counts) stay out of the public draft.
              </p>
            )}

            <nav
              aria-label="Related"
              className="mt-14 border-t border-ash pt-6"
            >
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link href="/transformations" className={relatedLink}>
                    Back to Transformations
                  </Link>
                </li>
                {story.slug === "digital-gold-growth" && (
                  <li>
                    <Link
                      href="/cases/digital-gold-growth"
                      className={relatedLink}
                    >
                      Related case: Digital Gold Growth
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/" className={relatedLink}>
                    Return Home
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className={relatedLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
