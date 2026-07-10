import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  BulletList,
  Note,
  RelatedLinks,
} from "@/components/article";
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
  if (!entry) return { title: "Operating Manual · Nikhil Sharma" };
  return {
    title: `${entry.title} · Operating Manual · Nikhil Sharma`,
    description: entry.thesis,
  };
}

/* ------------------------------- primitives ------------------------------ */

/** Muted lead-in line above a list or block. */
function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.6] text-lichen first:mt-0">
      {children}
    </p>
  );
}

/** Ordered list with mono index; `strong` brightens the text to ink. */
function NumberedList({
  items,
  strong = false,
}: {
  items: string[];
  strong?: boolean;
}) {
  return (
    <ol className="mt-4 space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-px w-6 shrink-0 font-mono text-[12px] tabular-nums text-sage">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={`max-w-[60ch] text-[15px] leading-[1.6] ${
              strong ? "text-ink" : "text-carbon"
            }`}
          >
            {t}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Principle cards: an emphasized rule with a muted note beneath. */
function PrincipleList({
  items,
}: {
  items: { rule: string; note: string }[];
}) {
  return (
    <ol className="mt-4 space-y-4">
      {items.map((p, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-px w-6 shrink-0 font-mono text-[12px] tabular-nums text-sage">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="max-w-[60ch]">
            <p className="text-[15px] font-medium leading-[1.5] text-ink">
              {p.rule}
            </p>
            <p className="mt-1 text-[14px] leading-[1.6] text-lichen">
              {p.note}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Heading + string-list cards. Shared by the operating model, ownership model,
 * and quality gates, which all share a { heading, items } shape.
 */
function GroupCards({
  groups,
}: {
  groups: { heading: string; items: string[] }[];
}) {
  return (
    <div className="mt-4 border-y border-ash">
      {groups.map((g) => (
        <div
          key={g.heading}
          className="grid gap-x-6 gap-y-2 border-b border-ash py-4 last:border-b-0 sm:grid-cols-[148px_1fr]"
        >
          <h3 className="text-[11px] font-medium uppercase tracking-wider text-sage sm:pt-1">
            {g.heading}
          </h3>
          <ul className="space-y-1.5">
            {g.items.map((it, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[13.5px] leading-[1.5] text-carbon"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-blue"
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Operating-model steps: numbered card with purpose / owner / output. */
function StepList({
  steps,
}: {
  steps: { step: string; purpose: string; owner: string; output: string }[];
}) {
  return (
    <ol className="mt-4 border-y border-ash">
      {steps.map((s, i) => (
        <li
          key={i}
          className="border-b border-ash py-4 last:border-b-0"
        >
          <div className="flex items-baseline gap-3">
            <span className="shrink-0 font-mono text-[12px] tabular-nums text-sage">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[14px] font-medium leading-[1.4] text-ink">
              {s.step}
            </p>
          </div>
          <dl className="mt-2.5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 pl-8 text-[13px] leading-[1.5]">
            <dt className="text-sage">Purpose</dt>
            <dd className="text-carbon">{s.purpose}</dd>
            <dt className="text-sage">Owner</dt>
            <dd className="text-carbon">{s.owner}</dd>
            <dt className="text-sage">Output</dt>
            <dd className="text-carbon">{s.output}</dd>
          </dl>
        </li>
      ))}
    </ol>
  );
}

/** Implementation-sequence phases: label + title + detail. */
function PhaseList({
  phases,
}: {
  phases: { phase: string; title: string; detail: string }[];
}) {
  return (
    <ol className="mt-4 border-y border-ash">
      {phases.map((p) => (
        <li
          key={p.phase}
          className="border-b border-ash py-4 last:border-b-0"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-sage sm:w-16 sm:shrink-0">
              {p.phase}
            </span>
            <div>
              <p className="text-[14px] font-medium text-ink">{p.title}</p>
              <p className="mt-1 text-[13.5px] leading-[1.6] text-lichen">
                {p.detail}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* --------------------------------- bodies -------------------------------- */

function GuideBody({
  entry,
  guide,
}: {
  entry: ManualEntry;
  guide: ManualGuide;
}) {
  const relatedTransformationsLabel =
    entry.relatedTransformations.length > 1
      ? "Related transformations"
      : "Related transformation";
  const relatedGuidesLabel =
    (guide.relatedGuides?.length ?? 0) > 1
      ? "Related operating guides"
      : "Related operating guide";

  return (
    <>
      <Section label="What this solves">
        <BulletList items={entry.whatItSolves} />
      </Section>

      <Section label="When to use this system">
        <Lead>Use this operating model when:</Lead>
        <BulletList items={guide.whenToUse} />
      </Section>

      <Section label="When not to use this system">
        <Lead>Do not use this model when:</Lead>
        <BulletList items={guide.whenNotToUse} />
      </Section>

      <Section label="Core principles">
        <PrincipleList items={guide.principles} />
      </Section>

      <Section label="Inputs required">
        <Lead>What must exist before the workflow starts.</Lead>
        <BulletList items={guide.inputs} />
      </Section>

      <Section label="Operating model">
        <Lead>
          The step-by-step system. Each step has a purpose, an owner, and an
          output.
        </Lead>
        <StepList steps={guide.steps} />
      </Section>

      <Section label="Ownership model">
        <GroupCards
          groups={guide.owners.map((o) => ({
            heading: o.role,
            items: o.owns,
          }))}
        />
      </Section>

      <Section label="Quality gates">
        <Lead>What must be true at each stage before work moves forward.</Lead>
        <GroupCards
          groups={guide.gateGroups.map((g) => ({
            heading: g.stage,
            items: g.checks,
          }))}
        />
      </Section>

      <Section label="Anti-patterns">
        <Lead>What breaks this system.</Lead>
        <BulletList items={entry.antiPatterns} />
      </Section>

      <Section label="Metrics to track">
        <Lead>{guide.metricsNote}</Lead>
        <BulletList items={guide.metricsToTrack} />
      </Section>

      <Section label="Governance rules">
        <BulletList items={guide.governance} />
      </Section>

      <Section label="Implementation sequence">
        <PhaseList phases={guide.phases} />
      </Section>

      <Section label="Leadership questions">
        <Lead>
          The questions a leadership team should be able to answer before and
          during adoption.
        </Lead>
        <NumberedList items={guide.leadershipQuestions} strong />
      </Section>

      <Section label={relatedTransformationsLabel}>
        <Note>{guide.derivedFromNote}</Note>
        <RelatedLinks
          items={entry.relatedTransformations.map((t) => ({
            title: t.title,
            href: `/transformations/${t.slug}`,
          }))}
        />
      </Section>

      {guide.relatedGuides && guide.relatedGuides.length > 0 && (
        <Section label={relatedGuidesLabel}>
          <RelatedLinks
            items={guide.relatedGuides.map((g) => ({
              title: g.title,
              href: g.href,
              description: g.description,
            }))}
          />
        </Section>
      )}

      <Section label="Future additions">
        <Lead>This guide will expand with:</Lead>
        <BulletList items={guide.futureAdditions} />
      </Section>
    </>
  );
}

function ShellBody({ entry }: { entry: ManualEntry }) {
  const relatedTransformationsLabel =
    entry.relatedTransformations.length > 1
      ? "Related transformations"
      : "Related transformation";

  return (
    <>
      <Section label="What this solves">
        <BulletList items={entry.whatItSolves} />
      </Section>

      <Section label="Core principles">
        <NumberedList items={entry.principles} strong />
      </Section>

      <Section label="Operating model">
        <GroupCards
          groups={entry.operatingModel.map((s) => ({
            heading: s.heading,
            items: s.items,
          }))}
        />
      </Section>

      <Section label="Quality gates">
        <Lead>What must be true for this system to work.</Lead>
        <BulletList items={entry.qualityGates} />
      </Section>

      <Section label="Anti-patterns">
        <Lead>What breaks this system.</Lead>
        <BulletList items={entry.antiPatterns} />
      </Section>

      <Section label={relatedTransformationsLabel}>
        <RelatedLinks
          items={entry.relatedTransformations.map((t) => ({
            title: t.title,
            href: `/transformations/${t.slug}`,
          }))}
        />
      </Section>

      <Section label="Note">
        <Note>{entry.futureDepthNote}</Note>
      </Section>
    </>
  );
}

/* ---------------------------------- page --------------------------------- */

export default async function ManualEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getManualEntry(slug);
  if (!entry) notFound();

  return (
    <PageShell>
      <ArticleHead
        eyebrow={`Operating Manual · ${entry.category}`}
        title={entry.title}
        dek={entry.thesis}
        meta={[
          { label: "Audience", value: entry.audience },
          { label: "Status", value: entry.status },
        ]}
      />

      {entry.guide && <Note>{entry.guide.supportingLine}</Note>}

      {entry.guide ? (
        <GuideBody entry={entry} guide={entry.guide} />
      ) : (
        <ShellBody entry={entry} />
      )}

      <nav
        aria-label="Related"
        className="mt-14 flex flex-wrap gap-x-5 gap-y-2 border-t border-ash pt-6 text-[13px] text-lichen"
      >
        <Link
          href="/operating-manual"
          className="underline underline-offset-2 transition-colors hover:text-ink"
        >
          Operating Manual
        </Link>
        <Link
          href="/transformations"
          className="underline underline-offset-2 transition-colors hover:text-ink"
        >
          Transformations
        </Link>
        <Link
          href="/"
          className="underline underline-offset-2 transition-colors hover:text-ink"
        >
          Home
        </Link>
      </nav>
    </PageShell>
  );
}
