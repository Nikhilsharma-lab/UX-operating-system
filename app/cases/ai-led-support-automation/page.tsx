import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ArticleHead, Section, P, BulletList, Note, RelatedLinks } from "@/components/article";
import { aiSupportAutomation } from "@/lib/ai-support-automation-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * AI-led Support Automation — service-experience + automation case, rebuilt in
 * the site's dark kamran language. Presentation-only: all copy comes from
 * lib/ai-support-automation-case.ts. This is a SERVICE case, so artifact tiles
 * are service/flow/system placeholders, never app screenshots. No images.
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
      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {c.outcome.map((s) => (
          <div key={s.label} className="rounded-xl border border-ash bg-paper p-4">
            <dt className="text-[17px] font-medium leading-tight tabular-nums text-ink">
              {s.value}
            </dt>
            <dd className="mt-1.5 text-[12.5px] leading-[1.4] text-lichen">{s.label}</dd>
          </div>
        ))}
      </dl>

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
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.decisions.map((d, i) => (
            <li
              key={d.title}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <span className="font-mono text-[12px] tabular-nums text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[15px] font-medium leading-snug text-ink text-balance">
                {d.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-lichen">{d.copy}</p>
            </li>
          ))}
        </ul>
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
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.useCases.examples.map((e) => (
            <li
              key={e.title}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <h3 className="text-[15px] font-medium leading-snug text-ink text-balance">
                {e.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-lichen">{e.copy}</p>
            </li>
          ))}
        </ul>
        <figure className="mt-4 rounded-xl border border-ash bg-bone p-5">
          <span className="k-label block">IVR acknowledgement</span>
          <blockquote className="mt-2.5 text-[16px] italic leading-snug text-ink">
            &ldquo;{c.useCases.quote}&rdquo;
          </blockquote>
        </figure>
      </Section>

      <Section label="UI evidence">
        <UiEvidence {...prototypes["ai-led-support-automation"]} />
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
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.lessons.map((l) => (
            <li
              key={l.n}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <span className="font-mono text-[12px] tabular-nums text-sage">{l.n}</span>
              <p className="mt-2 text-[14px] leading-[1.6] text-carbon">{l.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Related */}
      <Section label="Related">
        <RelatedLinks items={c.related.map((r) => ({ title: r.label, href: r.href }))} />
      </Section>
    </PageShell>
  );
}
