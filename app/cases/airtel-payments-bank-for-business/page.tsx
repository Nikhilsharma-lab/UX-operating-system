import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  P,
  BulletList,
  Note,
  RelatedLinks,
} from "@/components/article";
import { airtelPaymentsBankForBusiness } from "@/lib/airtel-payments-bank-for-business-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * Airtel Payments Bank for Business — shipped business-banking case, rebuilt in
 * the site's dark kamran language (PageShell + shared article helpers).
 * Presentation only: all copy comes from
 * lib/airtel-payments-bank-for-business-case.ts. Artifacts are placeholder
 * tiles; no images are imported.
 */

const c = airtelPaymentsBankForBusiness;

export const metadata: Metadata = {
  title: `${c.title} · Cases · Nikhil Sharma`,
  description: c.subtitle,
};

/* Sentence-style subheading for each part's data heading. */
function Lead({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-[52ch] text-[19px] font-medium leading-snug tracking-tight text-ink">
      {children}
    </h2>
  );
}

/* Paragraph group. */
function Paras({ copy }: { copy: string[] }) {
  return (
    <>
      {copy.map((t, i) => (
        <P key={i}>{t}</P>
      ))}
    </>
  );
}

/* Before / After step flow rendered as wrapping mono chips. */
function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wider text-sage">
        {label}
      </div>
      <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2.5">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="rounded-md border border-ash bg-paper px-2.5 py-1 font-geometric-mono text-[12px] tracking-tight text-carbon">
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

export default function AirtelPaymentsBankForBusinessCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Airtel Payments Bank · Business"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* At a glance — metric / context strip */}
      <Section label="At a glance">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {c.outcome.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <div className="text-[15px] font-medium leading-tight tracking-tight text-ink">
                {s.value}
              </div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-lichen">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The problem */}
      <Section label="The problem">
        <Lead>{c.problem.heading}</Lead>
        <Paras copy={c.problem.copy} />
      </Section>

      {/* The business insight */}
      <Section label="The business insight">
        <Lead>{c.insight.heading}</Lead>
        <Paras copy={c.insight.copy} />
      </Section>

      {/* The shift */}
      <Section label="The shift">
        <Lead>{c.shift.heading}</Lead>
        <Paras copy={c.shift.copy} />
      </Section>

      {/* What shipped */}
      <Section label="What shipped">
        <P>{c.shipped.lead}</P>
        <BulletList items={c.shipped.items} />
        <Note>{c.shipped.note}</Note>
      </Section>

      {/* Key product decisions */}
      <Section label="Key product decisions">
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.decisions.map((d, i) => (
            <li
              key={d.title}
              className="flex flex-col rounded-xl border border-ash bg-paper p-5 transition-colors hover:border-rule-dark"
            >
              <span className="font-geometric-mono text-[12px] tabular-nums text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[15px] font-medium leading-snug text-ink">
                {d.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-lichen">
                {d.copy}
              </p>
              {d.note && (
                <p className="mt-3 border-t border-ash pt-3 text-[12.5px] leading-[1.5] text-sage">
                  {d.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Before / After model */}
      <Section label="Before / after model">
        <div className="space-y-6">
          <Flow label="Before" steps={c.before} />
          <Flow label="After" steps={c.after} />
        </div>
      </Section>

      {/* Research and market learning */}
      <Section label="Research & market learning">
        <Lead>{c.research.heading}</Lead>
        <Paras copy={c.research.copy} />

        <div className="mt-6 rounded-xl border border-ash bg-paper p-5">
          <span className="k-label block">{c.research.principleLabel}</span>
          <p className="mt-2 text-[18px] font-medium leading-snug text-ink">
            {c.research.principle}
          </p>
        </div>

        <div className="mt-5">
          <span className="text-[11px] font-medium uppercase tracking-wider text-sage">
            {c.research.languageLabel}
          </span>
          <Note>{c.research.language}</Note>
        </div>
      </Section>

      {/* UI evidence */}
      <Section label="UI evidence">
        <UiEvidence {...prototypes["airtel-payments-bank-for-business"]} />
      </Section>

      {/* Metrics being tracked */}
      <Section label="Metrics being tracked">
        <span className="text-[11px] font-medium uppercase tracking-wider text-sage">
          {c.tracking.metricsLabel}
        </span>
        <BulletList items={c.tracking.metrics} />
        <Note>{c.tracking.status}</Note>
      </Section>

      {/* My role */}
      <Section label="My role">
        <Paras copy={c.myRole.intro} />
        <BulletList items={c.myRole.bullets} />
      </Section>

      {/* Lessons */}
      <Section label="Lessons">
        <div className="border-t border-ash">
          {c.lessons.map((l) => (
            <div
              key={l.n}
              className="flex gap-3 border-b border-ash py-3"
            >
              <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                {l.n}
              </span>
              <span className="text-[14px] leading-[1.55] text-carbon">
                {l.title}
              </span>
            </div>
          ))}
        </div>
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
