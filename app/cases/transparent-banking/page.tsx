import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  P,
  BulletList,
  Note,
  RelatedLinks,
} from "@/components/article";
import { transparentBanking } from "@/lib/transparent-banking-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * Transparent Banking case (Safe Second Account -> Trust). Dedicated static
 * route; takes precedence over the dynamic placeholder route for this exact
 * path. All copy comes from lib/transparent-banking-case.ts. Presentation
 * only: rendered in the site's dark kamran language via PageShell + the shared
 * article helpers. Screenshots are compact placeholder tiles only - no images
 * are imported.
 */

const c = transparentBanking;

export const metadata: Metadata = {
  title: `Transparent Banking · ${c.hierarchy.bigProject} · Cases · Nikhil Sharma`,
  description: c.subtitle,
};

const subLabel = "text-[12px] font-medium uppercase tracking-wider text-sage";

/* Horizontal step flow of hairline pills for the before/after journey. */
function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <span className={subLabel}>{label}</span>
      <ol className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-lg border border-ash bg-paper px-2.5 py-1 text-[12.5px] leading-tight text-carbon">
              {s}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="text-sage">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TransparentBankingCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Safe Second Account · Trust"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* Outcome at a glance */}
      <Section label="Outcome">
        <dl className="grid grid-cols-2 gap-3">
          {c.outcome.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-ash bg-paper p-4"
            >
              <dt className="text-[15px] font-medium leading-snug tabular-nums text-ink">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-[12.5px] leading-[1.45] text-lichen">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* The problem */}
      <Section label="The problem">
        <h2 className="text-[18px] font-medium leading-snug text-ink">
          {c.problem.heading}
        </h2>
        {c.problem.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The shift */}
      <Section label="The shift">
        <h2 className="text-[18px] font-medium leading-snug text-ink">
          {c.shift.heading}
        </h2>
        {c.shift.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-5 space-y-3 border-l-2 border-accent-blue/50 pl-4">
          <div>
            <span className={subLabel}>From</span>
            <p className="mt-1 max-w-[62ch] text-[15px] leading-[1.6] text-lichen">
              {c.shift.reframeFrom}
            </p>
          </div>
          <div>
            <span className={subLabel}>To</span>
            <p className="mt-1 max-w-[62ch] text-[15px] leading-[1.6] text-ink">
              {c.shift.reframeTo}
            </p>
          </div>
        </div>
      </Section>

      {/* What shipped */}
      <Section label="What shipped">
        <span className={subLabel}>{c.shipped.hubLead}</span>
        <BulletList items={c.shipped.hub} />
        <Note>{c.shipped.note}</Note>
      </Section>

      {/* Key product decisions */}
      <Section label="Key product decisions">
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.decisions.map((d, i) => (
            <li
              key={d.title}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <span className="text-[12px] tabular-nums text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[14px] font-medium leading-snug text-ink">
                {d.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-carbon">
                {d.copy}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Before / after journey */}
      <Section label="Before / after">
        <div className="space-y-6">
          <Flow label="Before" steps={c.before} />
          <Flow label="After" steps={c.after} />
        </div>
      </Section>

      <Section label="UI evidence">
        <UiEvidence {...prototypes["transparent-banking"]} />
      </Section>

      {/* Metric movement */}
      <Section label={c.metrics.heading}>
        <p className="max-w-[62ch] text-[16px] leading-[1.6] text-ink">
          {c.metrics.primary}
        </p>
        <dl className="mt-5 border-t border-ash">
          {c.metrics.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-ash py-3 sm:grid-cols-[130px_1fr] sm:gap-5"
            >
              <dt className="text-[11px] font-medium uppercase tracking-wider text-sage">
                {row.label}
              </dt>
              <dd className="text-[14px] leading-[1.6] text-carbon">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* My role */}
      <Section label="My role">
        {c.myRole.intro.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <BulletList items={c.myRole.bullets} />
      </Section>

      {/* Lessons */}
      <Section label="Lessons">
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.lessons.map((l) => (
            <li
              key={l.n}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <span className="text-[12px] tabular-nums text-sage">{l.n}</span>
              <p className="mt-2 text-[14px] font-medium leading-snug text-ink">
                {l.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-carbon">
                {l.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Future direction */}
      <Section label="Future direction">
        <h2 className="text-[18px] font-medium leading-snug text-ink">
          {c.future.heading}
        </h2>
        {c.future.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* Related */}
      <Section label="Related">
        <RelatedLinks
          items={c.related.map((r) => ({ title: r.label, href: r.href }))}
        />
      </Section>
    </PageShell>
  );
}
