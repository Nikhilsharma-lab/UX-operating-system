import type { Metadata } from "next";
import type { ReactNode } from "react";
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
import { airtelPaymentsBankApp } from "@/lib/airtel-payments-bank-app-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * Real standalone Big Project case (Decision 069), rebuilt in the dark kamran
 * language: a single reading column inside <PageShell>, long-form content via
 * the shared article helpers. All copy comes from
 * lib/airtel-payments-bank-app-case.ts; artifacts are placeholder tiles only.
 */

const c = airtelPaymentsBankApp;

export const metadata: Metadata = {
  title: `${c.title} · Cases · Nikhil Sharma`,
  description: c.subtitle,
};

const subLabel = "text-[11px] font-medium uppercase tracking-wider text-sage";

function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[56ch] text-[17px] font-medium leading-snug text-ink">
      {children}
    </p>
  );
}

function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <p className={subLabel}>{label}</p>
      <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2.5">
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

export default function AirtelPaymentsBankAppCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Airtel Payments Bank"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* Outcome strip */}
      <Section label="Outcome">
        <MetricStrip items={c.outcome} />
      </Section>

      {/* The problem */}
      <Section label="The problem">
        <Lead>{c.problem.heading}</Lead>
        {c.problem.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The strategic question */}
      <Section label="Strategic question">
        <Lead>{c.strategicQuestion.heading}</Lead>
        {c.strategicQuestion.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The shift */}
      <Section label="The shift">
        <Lead>{c.shift.heading}</Lead>
        {c.shift.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* Research */}
      <Section label="Research">
        <Lead>{c.research.heading}</Lead>
        {c.research.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-6">
          <p className={subLabel}>{c.research.patternsLabel}</p>
          <LedgerList className="mt-3">
            {c.research.patterns.map((q, i) => (
              <LedgerItem key={q} marker={String(i + 1).padStart(2, "0")}>
                <p className="text-[15px] italic leading-[1.5] text-carbon">
                  &ldquo;{q}&rdquo;
                </p>
              </LedgerItem>
            ))}
          </LedgerList>
        </div>
      </Section>

      {/* What shipped */}
      <Section label="What shipped">
        <P>{c.shipped.lead}</P>
        <BulletList items={c.shipped.items} />
        <Note>{c.shipped.rolloutNote}</Note>
      </Section>

      {/* Homepage strategy */}
      <Section label="Homepage strategy">
        <Lead>{c.homepage.heading}</Lead>
        {c.homepage.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-6">
          <p className={subLabel}>{c.homepage.bucketsLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {c.homepage.buckets.map((b) => (
              <li
                key={b}
                className="rounded-full border border-ash bg-paper px-2.5 py-1 text-[12.5px] text-lichen"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        <LedgerList className="mt-5">
          <LedgerItem eyebrow={c.homepage.principleLabel} title={c.homepage.principle}>
            <p className="text-[14px] leading-[1.6] text-carbon">
              {c.homepage.meaning}
            </p>
          </LedgerItem>
        </LedgerList>
        <Note>{c.homepage.note}</Note>
      </Section>

      {/* Key product decisions */}
      <Section label="Key product decisions">
        <LedgerList>
          {c.decisions.map((d, i) => (
            <LedgerItem
              key={d.title}
              marker={String(i + 1).padStart(2, "0")}
              title={d.title}
            >
              <p className="text-[13.5px] leading-[1.55] text-carbon">
                {d.copy}
              </p>
            </LedgerItem>
          ))}
        </LedgerList>
      </Section>

      {/* Before / After */}
      <Section label="Before / After">
        <div className="space-y-6">
          <Flow label="Before" steps={c.before} />
          <Flow label="After" steps={c.after} />
        </div>
      </Section>

      <Section label="UI evidence">
        <UiEvidence {...prototypes["airtel-payments-bank-app"]} />
      </Section>

      {/* Validation */}
      <Section label={c.validation.heading}>
        <dl className="divide-y divide-ash border-y border-ash">
          {c.validation.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-3.5 sm:grid-cols-[170px_1fr] sm:gap-5"
            >
              <dt className={subLabel}>{row.label}</dt>
              <dd className="text-[14px] leading-[1.6] text-carbon">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className={subLabel}>{c.validation.signalsLabel}</p>
            <BulletList items={c.validation.signals} />
          </div>
          <div>
            <p className={subLabel}>{c.validation.learningLabel}</p>
            <BulletList items={c.validation.learning} />
          </div>
        </div>
        <Note>{c.validation.businessNote}</Note>
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
