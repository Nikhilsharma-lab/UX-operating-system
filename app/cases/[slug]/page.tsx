import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudies, getCaseStudy } from "@/lib/cases";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Cases · Nikhil Sharma" };
  return {
    title: `${cs.title} · Cases · Nikhil Sharma`,
    description: cs.caseTitle,
  };
}

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const relatedLink =
  "font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((t, i) => (
        <p
          key={i}
          className="max-w-[680px] font-editorial-serif text-[18px] leading-[1.6] tracking-[0] text-carbon"
        >
          {t}
        </p>
      ))}
    </div>
  );
}

function PendingBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="max-w-[680px] rounded-lg border border-ash bg-bone p-5">
      <p className={`${metaLabel} mb-3 text-lichen`}>{label}</p>
      {children}
    </div>
  );
}

function CaseSection({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ash pt-8">
      <div className="mb-5 flex items-baseline gap-4">
        <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="font-heading-serif text-[22px] font-normal leading-[1.18] tracking-[0] text-ink">
          {title}
        </h2>
      </div>
      <div className="pl-10">{children}</div>
    </section>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const headerMeta: [string, string][] = [
    ["Status", cs.status],
    ["Product / area", cs.productArea],
    ["Timeframe", cs.timeframe],
    ["Role", cs.role],
    ["Team", cs.team],
    ["Metric signal", cs.metricSignal],
  ];

  let n = 0;
  const next = () => ++n;

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="py-16 md:py-20">
          <div className="page-shell max-w-[860px]">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink"
            >
              <span aria-hidden="true">←</span> Cases
            </Link>

            <header className="mt-8 border-t border-ash pt-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                  {cs.number}
                </span>
                <span className={`${metaLabel} text-lichen`}>
                  Case · {cs.category}
                </span>
              </div>

              <h1 className="font-editorial-serif font-light text-[clamp(1.9rem,4.2vw,2.9rem)] leading-[1.08] tracking-[-0.02em] text-ink">
                {cs.caseTitle}
              </h1>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2 lg:grid-cols-3">
                {headerMeta.map(([label, value]) => (
                  <div key={label} className="bg-paper p-5">
                    <dt className={`${metaLabel} text-sage`}>{label}</dt>
                    <dd className="mt-2 t-body-sm text-carbon">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 max-w-[680px] border-l border-khaki-olive pl-4 t-body-sm text-lichen">
                {cs.prepNote}
              </p>
            </header>

            <div className="mt-14 space-y-12">
              <CaseSection n={next()} title="Executive Summary">
                <Prose paragraphs={cs.executiveSummary} />
              </CaseSection>

              <CaseSection n={next()} title="Business Problem">
                <Prose paragraphs={cs.businessProblem} />
              </CaseSection>

              <CaseSection n={next()} title="User Problem">
                <Prose paragraphs={cs.userProblem} />
              </CaseSection>

              <CaseSection n={next()} title="Journey Diagnosis">
                <Prose paragraphs={cs.journeyDiagnosis} />
              </CaseSection>

              <CaseSection n={next()} title="Strategic Bet">
                <Prose paragraphs={cs.strategicBet} />
              </CaseSection>

              <CaseSection n={next()} title="Key Decisions">
                <div className="grid gap-4 md:grid-cols-3">
                  {cs.keyDecisions.map((d, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-ash bg-paper p-5"
                    >
                      <p className="font-editorial-serif text-[17px] leading-[1.3] tracking-[-0.01em] text-ink">
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
                            <dd className="t-body-sm text-olive-char">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection n={next()} title="Experience Before">
                <PendingBlock label="Artifact pending">
                  <p className="t-body-sm text-olive-char">
                    {cs.experienceBefore.artifactNote}
                  </p>
                </PendingBlock>
                <div className="mt-5">
                  <Prose paragraphs={cs.experienceBefore.body} />
                </div>
              </CaseSection>

              <CaseSection n={next()} title="Experience After">
                <Prose paragraphs={cs.experienceAfter} />
              </CaseSection>

              <CaseSection n={next()} title="What Shipped">
                <Prose paragraphs={cs.whatShipped} />
              </CaseSection>

              <CaseSection n={next()} title="Tradeoffs">
                <Prose paragraphs={cs.tradeoffs} />
                <div className="mt-6 max-w-[680px] overflow-hidden rounded-lg border border-ash">
                  {cs.tradeoffMatrix.map(([a, b], i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[1fr_auto_1fr] items-baseline gap-3 px-5 py-3 ${
                        i > 0 ? "border-t border-ash" : ""
                      }`}
                    >
                      <span className="t-body-sm text-carbon">{a}</span>
                      <span className={`${metaLabel} text-sage`}>vs</span>
                      <span className="t-body-sm text-right text-olive-char">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection n={next()} title="Metric Movement">
                <p className={`${metaLabel} mb-3 text-lichen`}>
                  Known headline signal
                </p>
                <p className="max-w-[680px] font-editorial-serif text-[22px] leading-[1.3] text-ink">
                  {cs.metricMovement.known}
                </p>
                <div className="mt-6">
                  <PendingBlock label="To wire in before final publication">
                    <ul className="space-y-2">
                      {cs.metricMovement.toWire.map((item, i) => (
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
                  </PendingBlock>
                </div>
              </CaseSection>

              <CaseSection n={next()} title="My Role">
                <Prose paragraphs={cs.myRole} />
              </CaseSection>

              <CaseSection n={next()} title="Artifacts">
                <div className="grid gap-4 sm:grid-cols-2">
                  <PendingBlock label="Available artifacts to prepare">
                    <ul className="space-y-2">
                      {cs.artifacts.available.map((item, i) => (
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
                  </PendingBlock>
                  <PendingBlock label="To wire in">
                    <ul className="space-y-2">
                      {cs.artifacts.toWire.map((item, i) => (
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
                  </PendingBlock>
                </div>
                <p className="mt-4 max-w-[680px] t-body-sm text-lichen">
                  {cs.artifacts.note}
                </p>
              </CaseSection>

              <CaseSection n={next()} title="What Changed Beyond the Screen">
                <Prose paragraphs={cs.beyondTheScreen} />
              </CaseSection>

              <CaseSection n={next()} title="Lessons">
                <Prose paragraphs={cs.lessons} />
              </CaseSection>

              <CaseSection n={next()} title="What I’d Do Differently">
                <Prose paragraphs={cs.differently} />
              </CaseSection>
            </div>

            <nav
              aria-label="Related"
              className="mt-14 border-t border-ash pt-6"
            >
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link href="/cases" className={relatedLink}>
                    Back to Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/transformations/digital-gold-growth"
                    className={relatedLink}
                  >
                    Related transformation: Digital Gold Growth
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
