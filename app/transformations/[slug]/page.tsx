import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { evidenceMode } from "@/lib/evidence";
import {
  STORY_FRAMEWORK,
  getStory,
  transformations,
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
  if (!story) return { title: "Transformation — Nikhil Sharma" };
  return {
    title: `${story.title} — Nikhil Sharma`,
    description: story.proves,
  };
}

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const relatedLink =
  "font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const internal = evidenceMode() === "internal";

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
                <span aria-hidden="true" className="h-px w-6 bg-olive-char" />
                <span className={`${metaLabel} text-lichen`}>
                  Transformation · {story.capability}
                </span>
              </div>

              <h1 className="font-editorial-serif font-light text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.06] tracking-[-0.02em] text-ink">
                {story.title}
              </h1>

              <p className="mt-6 max-w-[640px] t-body text-olive-char">
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
                  <dd className="mt-2 t-body-sm text-carbon">
                    {internal ? "Evidence intake in progress" : "In preparation"}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 max-w-[640px] t-body-sm text-lichen">
                This transformation story is being prepared as an
                evidence-backed leadership narrative. The final version will
                include context, decisions, tradeoffs, outcomes, and lessons
                once evidence intake is complete.
              </p>
            </header>

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
                        <h2 className="font-editorial-serif text-[19px] font-normal leading-[1.2] tracking-[-0.01em] text-ink">
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

            {internal && (
              <p className="mt-10 t-body-sm text-sage">
                Internal: capture the evidence above before writing the story;
                no metric publishes until it is registered in
                EVIDENCE/CLAIMS_REGISTER.md and approved.
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
