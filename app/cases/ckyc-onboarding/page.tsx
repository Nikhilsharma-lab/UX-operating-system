import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  P,
  BulletList,
  MetricStrip,
  LedgerList,
  LedgerItem,
  Note,
  RelatedLinks,
} from "@/components/article";
import { ckycOnboarding } from "@/lib/ckyc-onboarding-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * CKYC Onboarding case (Safe Second Account -> Digital Onboarding). Presented
 * in the site's dark kamran language via PageShell + the shared article
 * helpers, matching the sibling /cases detail pages. Static content from
 * lib/ckyc-onboarding-case.ts; screenshots remain compact placeholder tiles
 * the owner replaces later. No images imported.
 */

const c = ckycOnboarding;

export const metadata: Metadata = {
  title: `CKYC Onboarding · ${c.hierarchy.bigProject} · Cases · Nikhil Sharma`,
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
          <li key={i} className="flex items-center gap-2">
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

export default function CkycOnboardingCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Safe Second Account · Digital Onboarding"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* Outcome at a glance */}
      <Section label="Outcome">
        <MetricStrip items={c.outcome} />
      </Section>

      {/* The problem */}
      <Section label="The problem">
        <h2 className="max-w-[40ch] text-[18px] font-medium leading-snug tracking-tight text-ink">
          {c.problem.heading}
        </h2>
        {c.problem.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The shift */}
      <Section label="The shift">
        <h2 className="max-w-[40ch] text-[18px] font-medium leading-snug tracking-tight text-ink">
          {c.shift.heading}
        </h2>
        {c.shift.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* What shipped */}
      <Section label="What shipped">
        <P>{c.shipped.hubLead}</P>
        <BulletList items={c.shipped.hub} />
        <Note>{c.shipped.note}</Note>
      </Section>

      {/* Key product decisions and experiments */}
      <Section label="Key decisions & experiments">
        <LedgerList>
          {c.decisions.map((d, i) => (
            <LedgerItem
              key={d.title}
              marker={String(i + 1).padStart(2, "0")}
              title={d.title}
            >
              <p className="text-[13px] leading-[1.55] text-carbon">
                {d.copy}
              </p>
            </LedgerItem>
          ))}
        </LedgerList>
      </Section>

      {/* Before / after journey */}
      <Section label="Before / after">
        <div className="space-y-6">
          <Flow label="Before" steps={c.before} />
          <Flow label="After" steps={c.after} />
        </div>
      </Section>

      <Section label="UI evidence">
        <UiEvidence {...prototypes["ckyc-onboarding"]} />
      </Section>

      {/* Metric movement */}
      <Section label={c.metrics.heading}>
        <p className="max-w-[64ch] text-[16px] leading-[1.6] text-ink">
          {c.metrics.primary}
        </p>
        <dl className="mt-5 border-t border-ash">
          {c.metrics.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-ash py-3 sm:grid-cols-[160px_1fr] sm:gap-5"
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
        <LedgerList>
          {c.lessons.map((l) => (
            <LedgerItem
              key={l.n}
              marker={l.n}
              title={l.title}
            >
              {l.body && (
                <p className="text-[13px] leading-[1.55] text-carbon">
                  {l.body}
                </p>
              )}
            </LedgerItem>
          ))}
        </LedgerList>
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
