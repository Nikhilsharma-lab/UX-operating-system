import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  P,
  BulletList,
  RelatedLinks,
} from "@/components/article";
import { fraudAlarm } from "@/lib/fraud-alarm-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * Fraud Alarm case (Safe Second Account -> Safety). Dedicated static route;
 * takes precedence over the dynamic placeholder route for this exact path.
 * All copy comes from lib/fraud-alarm-case.ts. Presentation only: rendered in
 * the site's dark kamran language via PageShell + the shared article helpers.
 * Screenshots are compact placeholder tiles only - no images are imported.
 */

const c = fraudAlarm;

export const metadata: Metadata = {
  title: `Fraud Alarm · ${c.hierarchy.bigProject} · Cases · Nikhil Sharma`,
  description: c.subtitle,
};

const subLabel =
  "text-[12px] font-medium uppercase tracking-wider text-sage";

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

export default function FraudAlarmCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Safe Second Account · Safety"
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
      </Section>

      {/* What shipped */}
      <Section label="What shipped">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <span className={subLabel}>{c.shipped.entryLead}</span>
            <BulletList items={c.shipped.entryPoints} />
          </div>
          <div>
            <span className={subLabel}>{c.shipped.sequenceLead}</span>
            <ol className="mt-4 space-y-2">
              {c.shipped.sequence.map((s, i) => (
                <li
                  key={s}
                  className="flex gap-3 text-[15px] leading-[1.6] text-carbon"
                >
                  <span className="mt-px text-[12px] tabular-nums text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Key product decisions */}
      <Section label="Key product decisions">
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.decisions.map((d, i) => (
            <li
              key={d.title}
              className={`rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark${c.decisions.length % 2 === 1 && i === c.decisions.length - 1 ? " sm:col-span-2" : ""}`}
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
        <UiEvidence {...prototypes["fraud-alarm"]} />
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
        <P>{c.myRole.intro}</P>
        <BulletList items={c.myRole.bullets} />
      </Section>

      {/* Lessons */}
      <Section label="Lessons">
        <ul className="grid gap-3 sm:grid-cols-3">
          {c.lessons.map((l, i) => (
            <li
              key={l.n}
              className={`rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark${c.lessons.length % 2 === 1 && i === c.lessons.length - 1 ? " sm:col-span-2" : ""}`}
            >
              <span className="text-[12px] tabular-nums text-sage">{l.n}</span>
              <p className="mt-2 text-[14px] font-medium leading-snug text-ink">
                {l.title}
              </p>
            </li>
          ))}
        </ul>
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
