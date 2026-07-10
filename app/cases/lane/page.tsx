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
import { lane } from "@/lib/lane-case";
import { UiEvidence } from "@/components/ui-evidence";
import { prototypes } from "@/lib/prototypes";

/*
 * Founder-built SaaS case (Decision 072), in the dark kamran language: a
 * single reading column inside <PageShell>, long-form content via the shared
 * article helpers. Flat route /cases/lane. All copy comes from
 * lib/lane-case.ts. This is a private-beta product case, not a traction case:
 * no pricing, team size, revenue, MRR, PMF, or broad-adoption claims.
 * Artifacts are product-system placeholder tiles only; no images.
 */

const c = lane;

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

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-full border border-ash bg-paper px-2.5 py-1 text-[12.5px] text-lichen"
        >
          {s}
        </li>
      ))}
    </ul>
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

function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 border-y border-ash py-4">
      <p className="text-[20px] font-medium leading-snug text-ink">{children}</p>
    </div>
  );
}

export default function LaneCasePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Founder-built SaaS"
        title={c.title}
        dek={c.subtitle}
        meta={c.meta}
      />

      {/* Hero intro */}
      <div className="mt-6">
        {c.intro.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </div>

      {/* Metric strip */}
      <Section label="At a glance">
        <MetricStrip items={c.outcome} />
      </Section>

      {/* The founder problem */}
      <Section label="The founder problem">
        <Lead>{c.founderProblem.heading}</Lead>
        {c.founderProblem.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* The product thesis */}
      <Section label="The thesis">
        <Lead>{c.thesis.heading}</Lead>
        {c.thesis.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <Highlight>{c.thesis.principle}</Highlight>
      </Section>

      {/* The wedge */}
      <Section label="The wedge">
        <Lead>{c.wedge.heading}</Lead>
        {c.wedge.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* Built broadly, launched narrowly */}
      <Section label="Launch strategy">
        <Lead>{c.builtBroadly.heading}</Lead>
        {c.builtBroadly.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <Highlight>{c.builtBroadly.question}</Highlight>
      </Section>

      {/* What Lane is */}
      <Section label="What Lane is">
        {c.whatLaneIs.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-6">
          <Flow label={c.whatLaneIs.flowLabel} steps={c.whatLaneIs.flow} />
        </div>
        <Note>{c.whatLaneIs.flowClose}</Note>
      </Section>

      {/* The product model */}
      <Section label={c.productModel.heading}>
        <LedgerList>
          {c.productModel.cards.map((card) => (
            <LedgerItem
              key={card.title}
              eyebrow={card.owner}
              title={card.title}
            >
              <p className="text-[13.5px] leading-[1.55] text-carbon">
                {card.copy}
              </p>
            </LedgerItem>
          ))}
        </LedgerList>
      </Section>

      {/* The AI Intake Gate */}
      <Section label={c.intakeGate.heading}>
        <P>{c.intakeGate.intro}</P>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <p className={subLabel}>{c.intakeGate.verdictsLabel}</p>
            <Chips items={c.intakeGate.verdicts} />
          </div>
          <div>
            <p className={subLabel}>{c.intakeGate.actionsLabel}</p>
            <Chips items={c.intakeGate.actions} />
          </div>
        </div>
        <P>{c.intakeGate.passLine}</P>
        <P>{c.intakeGate.blockLine}</P>
        <LedgerList>
          <LedgerItem eyebrow="Gate message">
            <p className="text-[16px] italic leading-[1.5] text-carbon">
              &ldquo;{c.intakeGate.uiCopy}&rdquo;
            </p>
          </LedgerItem>
        </LedgerList>
        <Note>{c.intakeGate.detail}</Note>
      </Section>

      {/* Anti-surveillance principle */}
      <Section label={c.antiSurveillance.heading}>
        {c.antiSurveillance.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-5 border-y border-ash">
          <div className="grid gap-5 border-b border-ash py-4 sm:grid-cols-[140px_1fr]">
            <p className={subLabel}>{c.antiSurveillance.neverLabel}</p>
            <ul className="mt-3 space-y-2">
              {c.antiSurveillance.never.map((t) => (
                <li
                  key={t}
                  className="flex gap-2.5 text-[13.5px] leading-[1.5] text-carbon"
                >
                  <span aria-hidden="true" className="mt-[1px] text-sage">
                    ✕
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 py-4 sm:grid-cols-[140px_1fr]">
            <p className={subLabel}>{c.antiSurveillance.alwaysLabel}</p>
            <ul className="mt-3 space-y-2">
              {c.antiSurveillance.always.map((t) => (
                <li
                  key={t}
                  className="flex gap-2.5 text-[13.5px] leading-[1.5] text-carbon"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-blue"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What is built */}
      <Section label={c.whatIsBuilt.heading}>
        {c.whatIsBuilt.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <Chips items={c.whatIsBuilt.features} />
      </Section>

      {/* What is hidden for v1 */}
      <Section label={c.hiddenV1.heading}>
        {c.hiddenV1.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-6">
          <Flow label={c.hiddenV1.lifecycleLabel} steps={c.hiddenV1.lifecycle} />
        </div>
        <div className="mt-6">
          <p className={subLabel}>{c.hiddenV1.hiddenLabel}</p>
          <Chips items={c.hiddenV1.hidden} />
        </div>
        <Note>{c.hiddenV1.note}</Note>
      </Section>

      {/* Tech stack */}
      <Section label={c.techStack.heading}>
        <P>{c.techStack.intro}</P>
        <Chips items={c.techStack.stack} />
        <Note>{c.techStack.note}</Note>
      </Section>

      {/* Progressive GTM */}
      <Section label={c.gtm.heading}>
        {c.gtm.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-5">
          <p className={subLabel}>{c.gtm.signalsLabel}</p>
          <BulletList items={c.gtm.signals} />
        </div>
      </Section>

      {/* My role */}
      <Section label={c.myRole.heading}>
        {c.myRole.copy.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* Founder lessons */}
      <Section label={c.founderLessons.heading}>
        <LedgerList>
          {c.founderLessons.cards.map((l, i) => (
            <LedgerItem
              key={l.title}
              marker={String(i + 1).padStart(2, "0")}
              title={l.title}
            >
              <p className="text-[13.5px] leading-[1.55] text-carbon">
                {l.copy}
              </p>
            </LedgerItem>
          ))}
        </LedgerList>
      </Section>

      {/* UI evidence - single gated card, matching the other case pages */}
      <Section label="UI evidence">
        <UiEvidence {...prototypes.lane} />
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
