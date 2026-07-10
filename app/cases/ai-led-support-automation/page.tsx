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
import { aiSupportAutomation } from "@/lib/ai-support-automation-case";

/*
 * AI-led Support Automation - service-experience + automation case, rebuilt in
 * the site's dark kamran language. Presentation-only: all copy comes from
 * lib/ai-support-automation-case.ts. This is a SERVICE case: it carries no
 * artifact/placeholder tiles and no app screenshots - the flow diagrams and
 * ledgers carry the evidence.
 */

const c = aiSupportAutomation;

export const metadata: Metadata = {
  title: `${c.title} · Cases · Nikhil Sharma`,
  description: c.subtitle,
};

const subhead = "text-[17px] font-medium leading-snug text-ink text-balance";
const lead = "text-[13px] leading-[1.6] text-lichen";

function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <span className="k-label block">{label}</span>
      <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="rounded-lg border border-ash bg-paper px-2.5 py-1 text-[13px] leading-tight text-carbon">
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

export default function AiSupportAutomationCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="AI · Support operations"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* Outcome metric strip */}
      <Section label="Outcome">
        <MetricStrip items={c.outcome} className="sm:grid-cols-3 lg:grid-cols-5" />
      </Section>

      {/* The problem */}
      <Section label="The problem">
        <h2 className={subhead}>{c.problem.heading}</h2>
        {c.problem.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The shift */}
      <Section label="The shift">
        <h2 className={subhead}>{c.shift.heading}</h2>
        {c.shift.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* What changed */}
      <Section label="What changed">
        <p className={lead}>{c.whatChanged.systemLead}</p>
        <BulletList items={c.whatChanged.system} />
        <p className={`${lead} mt-8`}>{c.whatChanged.intentsLead}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {c.whatChanged.intents.map((s) => (
            <li
              key={s}
              className="rounded-full border border-ash bg-paper px-3 py-1 text-[13px] text-carbon"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* Issue Prediction API */}
      <Section label={c.api.heading}>
        {c.api.intro.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-6">
          <span className="k-label block">{c.api.signalsLabel}</span>
          <BulletList items={c.api.signals} />
        </div>
        <Note>{c.api.closing}</Note>
      </Section>

      {/* Key experience decisions */}
      <Section label="Key experience decisions">
        <LedgerList>
          {c.decisions.map((d, i) => (
            <LedgerItem
              key={d.title}
              marker={String(i + 1).padStart(2, "0")}
              title={d.title}
            >
              <p className="text-[14px] leading-[1.6] text-carbon">{d.copy}</p>
            </LedgerItem>
          ))}
        </LedgerList>
      </Section>

      {/* Before / After service flow */}
      <Section label="Before / After service flow">
        <div className="space-y-6">
          <Flow label="Before" steps={c.before} />
          <Flow label="After" steps={c.after} />
        </div>
      </Section>

      {/* Use-case examples */}
      <Section label="Use-case examples">
        <LedgerList>
          {c.useCases.examples.map((e, i) => (
            <LedgerItem
              key={e.title}
              marker={String(i + 1).padStart(2, "0")}
              title={e.title}
            >
              <p className="text-[14px] leading-[1.6] text-carbon">{e.copy}</p>
            </LedgerItem>
          ))}
        </LedgerList>
        <LedgerList>
          <LedgerItem eyebrow="IVR acknowledgement">
            <blockquote className="text-[16px] italic leading-snug text-ink">
              &ldquo;{c.useCases.quote}&rdquo;
            </blockquote>
          </LedgerItem>
        </LedgerList>
      </Section>

      {/* Metric movement */}
      <Section label={c.metrics.heading}>
        <dl className="divide-y divide-ash border-y border-ash">
          {c.metrics.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:gap-5"
            >
              <dt className="text-[11px] font-medium uppercase tracking-wider text-sage">
                {row.label}
              </dt>
              <dd className="text-[14px] leading-[1.5] text-carbon">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6">
          <span className="k-label block">{c.metrics.csatLabel}</span>
          <Note>{c.metrics.csatNote}</Note>
        </div>
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
            >
              <p className="text-[14px] leading-[1.6] text-carbon">{l.title}</p>
            </LedgerItem>
          ))}
        </LedgerList>
      </Section>

      {/* Related */}
      <Section label="Related">
        <RelatedLinks items={c.related.map((r) => ({ title: r.label, href: r.href }))} />
      </Section>
    </PageShell>
  );
}
