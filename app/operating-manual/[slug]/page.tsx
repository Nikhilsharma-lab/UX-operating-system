import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getManualEntry, manualEntries } from "@/lib/operating-manual";

export function generateStaticParams() {
  return manualEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getManualEntry(slug);
  if (!entry) return { title: "Operating Manual — Nikhil Sharma" };
  return {
    title: `${entry.title} — Operating Manual — Nikhil Sharma`,
    description: entry.thesis,
  };
}

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const relatedLink =
  "font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink";

function HairlineList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 t-body-sm text-carbon">
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

function ManualSection({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ash pt-7">
      <div className="mb-5 flex items-baseline gap-4">
        <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
          {n}
        </span>
        <h2 className="font-heading-serif text-[21px] font-normal leading-[1.18] tracking-[0] text-ink">
          {title}
        </h2>
      </div>
      <div className="pl-10">{children}</div>
    </section>
  );
}

export default async function ManualEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getManualEntry(slug);
  if (!entry) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="py-16 md:py-20">
          <div className="page-shell max-w-[820px]">
            <Link
              href="/operating-manual"
              className="inline-flex items-center gap-2 font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink"
            >
              <span aria-hidden="true">←</span> Operating Manual
            </Link>

            <header className="mt-8 border-t border-ash pt-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                  {entry.number}
                </span>
                <span aria-hidden="true" className="h-px w-6 bg-olive-char" />
                <span className={`${metaLabel} text-lichen`}>
                  Manual · {entry.category}
                </span>
              </div>

              <h1 className="font-editorial-serif font-light text-[clamp(2rem,4.6vw,3rem)] leading-[1.06] tracking-[-0.02em] text-ink">
                {entry.title}
              </h1>

              <p className="mt-6 max-w-[660px] font-editorial-serif text-[18px] leading-[1.55] text-carbon">
                {entry.thesis}
              </p>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2">
                <div className="bg-paper p-5">
                  <dt className={`${metaLabel} text-sage`}>Audience</dt>
                  <dd className="mt-2 t-body-sm text-carbon">
                    {entry.audience}
                  </dd>
                </div>
                <div className="bg-paper p-5">
                  <dt className={`${metaLabel} text-sage`}>Status</dt>
                  <dd className="mt-2 t-body-sm text-carbon">{entry.status}</dd>
                </div>
              </dl>
            </header>

            <div className="mt-14 space-y-11">
              <ManualSection n="01" title="What this solves">
                <HairlineList items={entry.whatItSolves} />
              </ManualSection>

              <ManualSection n="02" title="Core principles">
                <ol className="space-y-4">
                  {entry.principles.map((p, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="shrink-0 pt-0.5 font-geometric-mono text-[12px] tabular-nums text-sage">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="max-w-[640px] font-editorial-serif text-[17px] leading-[1.5] text-carbon">
                        {p}
                      </span>
                    </li>
                  ))}
                </ol>
              </ManualSection>

              <ManualSection n="03" title="Operating model">
                <div className="grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2">
                  {entry.operatingModel.map((section) => (
                    <div key={section.heading} className="bg-paper p-5">
                      <h3 className={`${metaLabel} mb-3 text-lichen`}>
                        {section.heading}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 t-body-sm text-olive-char"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ManualSection>

              <ManualSection n="04" title="Quality gates">
                <p className="mb-4 t-body-sm text-lichen">
                  What must be true for this system to work.
                </p>
                <HairlineList items={entry.qualityGates} />
              </ManualSection>

              <ManualSection n="05" title="Anti-patterns">
                <p className="mb-4 t-body-sm text-lichen">
                  What breaks this system.
                </p>
                <HairlineList items={entry.antiPatterns} />
              </ManualSection>

              <ManualSection n="06" title="Related transformations">
                <ul className="space-y-3">
                  {entry.relatedTransformations.map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/transformations/${t.slug}`}
                        className="group inline-flex items-baseline gap-3"
                      >
                        <span className="font-editorial-serif text-[17px] leading-[1.4] text-ink transition-colors group-hover:text-olive-char">
                          {t.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="font-geometric-mono text-[13px] text-sage"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </ManualSection>
            </div>

            <p className="mt-12 max-w-[660px] border-l border-khaki-olive pl-4 t-body-sm text-lichen">
              {entry.futureDepthNote}
            </p>

            <nav
              aria-label="Related"
              className="mt-14 border-t border-ash pt-6"
            >
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link href="/operating-manual" className={relatedLink}>
                    Back to Operating Manual
                  </Link>
                </li>
                <li>
                  <Link href="/transformations" className={relatedLink}>
                    Transformations
                  </Link>
                </li>
                <li>
                  <Link href="/" className={relatedLink}>
                    Return Home
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
