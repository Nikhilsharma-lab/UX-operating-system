import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  getManualEntry,
  manualEntries,
  type ManualEntry,
  type ManualGuide,
} from "@/lib/operating-manual";

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

function EntryHeader({ entry }: { entry: ManualEntry }) {
  return (
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

      {entry.guide && (
        <p className="mt-4 max-w-[660px] border-l border-khaki-olive pl-4 t-body-sm text-olive-char">
          {entry.guide.supportingLine}
        </p>
      )}

      <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2">
        <div className="bg-paper p-5">
          <dt className={`${metaLabel} text-sage`}>Audience</dt>
          <dd className="mt-2 t-body-sm text-carbon">{entry.audience}</dd>
        </div>
        <div className="bg-paper p-5">
          <dt className={`${metaLabel} text-sage`}>Status</dt>
          <dd className="mt-2 t-body-sm text-carbon">{entry.status}</dd>
        </div>
      </dl>
    </header>
  );
}

function RelatedTransformationsBlock({
  entry,
  note,
}: {
  entry: ManualEntry;
  note?: string;
}) {
  return (
    <>
      {note && (
        <p className="mb-5 max-w-[660px] t-body-sm text-olive-char">{note}</p>
      )}
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
    </>
  );
}

/* ------------------------------ Guide layout ----------------------------- */

function GuideBody({ entry, guide }: { entry: ManualEntry; guide: ManualGuide }) {
  return (
    <div className="mt-14 space-y-11">
      <ManualSection n="01" title="What this solves">
        <HairlineList items={entry.whatItSolves} />
      </ManualSection>

      <ManualSection n="02" title="When to use this system">
        <p className="mb-4 t-body-sm text-lichen">
          Use this operating model when:
        </p>
        <HairlineList items={guide.whenToUse} />
      </ManualSection>

      <ManualSection n="03" title="When not to use this system">
        <p className="mb-4 t-body-sm text-lichen">Do not use this model when:</p>
        <HairlineList items={guide.whenNotToUse} />
      </ManualSection>

      <ManualSection n="04" title="Core principles">
        <ol className="space-y-5">
          {guide.principles.map((p, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 pt-0.5 font-geometric-mono text-[12px] tabular-nums text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="max-w-[640px]">
                <p className="font-editorial-serif text-[17px] leading-[1.4] text-ink">
                  {p.rule}
                </p>
                <p className="mt-1 t-body-sm text-olive-char">{p.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </ManualSection>

      <ManualSection n="05" title="Inputs required">
        <p className="mb-4 t-body-sm text-lichen">
          What must exist before the workflow starts.
        </p>
        <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {guide.inputs.map((item, i) => (
            <li key={i} className="flex gap-3 t-body-sm text-carbon">
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ManualSection>

      <ManualSection n="06" title="Operating model">
        <p className="mb-5 t-body-sm text-lichen">
          The step-by-step system. Each step has a purpose, an owner, and an
          output.
        </p>
        <ol className="space-y-4">
          {guide.steps.map((s, i) => (
            <li key={i} className="rounded-lg border border-ash bg-paper p-5">
              <div className="flex items-baseline gap-3">
                <span className="shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-editorial-serif text-[17px] leading-[1.3] tracking-[-0.01em] text-ink">
                  {s.step}
                </p>
              </div>
              <dl className="mt-3 space-y-2 pl-7">
                {(
                  [
                    ["Purpose", s.purpose],
                    ["Owner", s.owner],
                    ["Output", s.output],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="flex gap-3">
                    <dt className={`${metaLabel} w-16 shrink-0 pt-0.5 text-sage`}>
                      {label}
                    </dt>
                    <dd className="t-body-sm text-olive-char">{value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
      </ManualSection>

      <ManualSection n="07" title="Ownership model">
        <div className="grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2">
          {guide.owners.map((o) => (
            <div key={o.role} className="bg-paper p-5">
              <h3 className={`${metaLabel} mb-3 text-lichen`}>{o.role}</h3>
              <ul className="space-y-1.5">
                {o.owns.map((item, i) => (
                  <li key={i} className="flex gap-3 t-body-sm text-olive-char">
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

      <ManualSection n="08" title="Quality gates">
        <p className="mb-5 t-body-sm text-lichen">
          What must be true at each stage before work moves forward.
        </p>
        <div className="grid gap-px overflow-hidden rounded-lg border border-ash bg-ash lg:grid-cols-3">
          {guide.gateGroups.map((g) => (
            <div key={g.stage} className="bg-paper p-5">
              <h3 className={`${metaLabel} mb-3 text-lichen`}>{g.stage}</h3>
              <ul className="space-y-2">
                {g.checks.map((c, i) => (
                  <li key={i} className="flex gap-3 t-body-sm text-olive-char">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ManualSection>

      <ManualSection n="09" title="Anti-patterns">
        <p className="mb-4 t-body-sm text-lichen">What breaks this system.</p>
        <HairlineList items={entry.antiPatterns} />
      </ManualSection>

      <ManualSection n="10" title="Metrics to track">
        <p className="mb-4 max-w-[660px] t-body-sm text-lichen">
          {guide.metricsNote}
        </p>
        <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {guide.metricsToTrack.map((item, i) => (
            <li key={i} className="flex gap-3 t-body-sm text-carbon">
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-3 shrink-0 bg-olive-char"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ManualSection>

      <ManualSection n="11" title="Governance rules">
        <HairlineList items={guide.governance} />
      </ManualSection>

      <ManualSection n="12" title="Implementation sequence">
        <ol className="space-y-3">
          {guide.phases.map((p) => (
            <li
              key={p.phase}
              className="flex flex-col gap-1 rounded-lg border border-ash bg-paper p-5 sm:flex-row sm:items-baseline sm:gap-5"
            >
              <span className={`${metaLabel} w-20 shrink-0 text-sage`}>
                {p.phase}
              </span>
              <div>
                <p className="font-editorial-serif text-[17px] leading-[1.3] text-ink">
                  {p.title}
                </p>
                <p className="mt-1 t-body-sm text-olive-char">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </ManualSection>

      <ManualSection n="13" title="Leadership questions">
        <p className="mb-4 t-body-sm text-lichen">
          The questions a leadership team should be able to answer before and
          during adoption.
        </p>
        <ol className="space-y-3">
          {guide.leadershipQuestions.map((q, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 pt-0.5 font-geometric-mono text-[12px] tabular-nums text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="max-w-[640px] font-editorial-serif text-[17px] leading-[1.45] text-carbon">
                {q}
              </span>
            </li>
          ))}
        </ol>
      </ManualSection>

      <ManualSection n="14" title="Related transformations">
        <RelatedTransformationsBlock entry={entry} note={guide.derivedFromNote} />
      </ManualSection>

      {guide.relatedGuides && guide.relatedGuides.length > 0 && (
        <ManualSection
          n="15"
          title={
            guide.relatedGuides.length > 1
              ? "Related operating guides"
              : "Related operating guide"
          }
        >
          <ul className="space-y-4">
            {guide.relatedGuides.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="group block max-w-[680px] rounded-lg border border-ash bg-paper p-5 transition-colors hover:border-olive-char"
                >
                  <span className="inline-flex items-baseline gap-3">
                    <span className="font-editorial-serif text-[18px] leading-[1.3] tracking-[-0.01em] text-ink">
                      {g.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-geometric-mono text-[13px] text-sage transition-colors group-hover:text-ink"
                    >
                      →
                    </span>
                  </span>
                  <p className="mt-2 t-body-sm text-olive-char">
                    {g.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </ManualSection>
      )}

      <ManualSection
        n={guide.relatedGuides && guide.relatedGuides.length > 0 ? "16" : "15"}
        title="Future additions"
      >
        <p className="mb-4 t-body-sm text-lichen">
          This guide will expand with:
        </p>
        <HairlineList items={guide.futureAdditions} />
      </ManualSection>
    </div>
  );
}

/* ------------------------------ Shell layout ----------------------------- */

function ShellBody({ entry }: { entry: ManualEntry }) {
  return (
    <>
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
          <p className="mb-4 t-body-sm text-lichen">What breaks this system.</p>
          <HairlineList items={entry.antiPatterns} />
        </ManualSection>

        <ManualSection n="06" title="Related transformations">
          <RelatedTransformationsBlock entry={entry} />
        </ManualSection>
      </div>

      <p className="mt-12 max-w-[660px] border-l border-khaki-olive pl-4 t-body-sm text-lichen">
        {entry.futureDepthNote}
      </p>
    </>
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

            <EntryHeader entry={entry} />

            {entry.guide ? (
              <GuideBody entry={entry} guide={entry.guide} />
            ) : (
              <ShellBody entry={entry} />
            )}

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
