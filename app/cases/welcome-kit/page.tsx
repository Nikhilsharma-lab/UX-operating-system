import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  P,
  BulletList,
  RelatedLinks,
} from "@/components/article";
import { welcomeKit } from "@/lib/welcome-kit-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * Welcome Kit case (Safe Second Account -> Activation). Presented in the site's
 * dark kamran language via PageShell + the shared article helpers, matching the
 * sibling case-detail pages. Static content from lib/welcome-kit-case.ts;
 * screens remain compact placeholder tiles the owner replaces later. No images
 * are imported.
 */

const c = welcomeKit;

export const metadata: Metadata = {
  title: `Welcome Kit · ${c.hierarchy.bigProject} · Cases · Nikhil Sharma`,
  description: c.subtitle,
};

function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <span className="k-label block">{label}</span>
      <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="rounded-lg border border-ash bg-paper px-2.5 py-1 text-[12.5px] leading-tight text-carbon">
              {s}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="text-[13px] text-sage">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function WelcomeKitCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Safe Second Account · Activation"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* Outcome */}
      <Section label="Outcome">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3">
          {c.outcome.map((s) => (
            <div key={s.label}>
              <div className="text-[18px] font-medium leading-tight tracking-tight tabular-nums text-ink">
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
        <h2 className="max-w-[40ch] text-[19px] font-medium leading-snug tracking-tight text-ink">
          {c.problem.heading}
        </h2>
        {c.problem.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The shift */}
      <Section label="The shift">
        <h2 className="max-w-[40ch] text-[19px] font-medium leading-snug tracking-tight text-ink">
          {c.shift.heading}
        </h2>
        {c.shift.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* What shipped */}
      <Section label="What shipped">
        <P>{c.shipped.welcomeLead}</P>
        <BulletList items={c.shipped.welcome} />
        <div className="mt-8">
          <P>{c.shipped.setForgetLead}</P>
          <BulletList items={c.shipped.setForget} />
        </div>
      </Section>

      {/* Key product decisions */}
      <Section label="Key product decisions">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {c.decisions.map((d, i) => (
            <div
              key={d.title}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <span className="font-geometric-mono text-[12px] tabular-nums text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[15px] font-medium leading-snug tracking-tight text-ink">
                {d.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-lichen">
                {d.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Before / after journey */}
      <Section label="Before / after journey">
        <div className="space-y-6">
          <Flow label="Before" steps={c.before} />
          <Flow label="After" steps={c.after} />
        </div>
      </Section>

      {/* Safe Second Account logic */}
      <Section label="Safe Second Account logic">
        <div className="rounded-xl border border-ash bg-bone p-5">
          <h2 className="text-[17px] font-medium leading-snug tracking-tight text-ink">
            {c.ssaLogic.heading}
          </h2>
          {c.ssaLogic.copy.map((t, i) => (
            <p key={i} className="mt-3 text-[14px] leading-[1.6] text-carbon">
              {t}
            </p>
          ))}
        </div>
      </Section>

      {/* UI evidence */}
      <Section label="UI evidence">
        <UiEvidence {...prototypes["welcome-kit"]} />
      </Section>

      {/* Metric movement */}
      <Section label={c.metrics.heading}>
        <p className="max-w-[64ch] text-[16px] leading-[1.6] text-ink">
          {c.metrics.primaryGoal}
        </p>
        <dl className="mt-5 divide-y divide-ash border-t border-b border-ash">
          {c.metrics.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-5"
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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {c.lessons.map((l) => (
            <div
              key={l.n}
              className="rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark"
            >
              <span className="font-geometric-mono text-[12px] tabular-nums text-sage">
                {l.n}
              </span>
              <p className="mt-2 text-[15px] font-medium leading-snug tracking-tight text-ink">
                {l.title}
              </p>
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
