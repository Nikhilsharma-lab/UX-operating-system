import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  Section,
  P,
  BulletList,
  Note,
  DecisionList,
  LedgerList,
  LedgerItem,
  RelatedLinks,
} from "@/components/article";
import { caseStudies, getCaseStudy } from "@/lib/cases";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Cases · Nikhil Sharma" };
  return {
    title: `${cs.title} · Cases · Nikhil Sharma`,
    description: cs.caseTitle,
  };
}

const subLabel =
  "text-[11px] font-medium uppercase tracking-wider text-sage";

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <PageShell>
      <ArticleHead
        eyebrow={`Case · ${cs.category}`}
        title={cs.caseTitle}
        meta={[
          { label: "Role", value: cs.role },
          { label: "Team", value: cs.team },
          { label: "Timeframe", value: cs.timeframe },
          { label: "Product area", value: cs.productArea },
          { label: "Status", value: cs.status },
          { label: "Metric signal", value: cs.metricSignal },
        ]}
      />

      <Note>{cs.prepNote}</Note>

      <Section label="Executive Summary">
        {cs.executiveSummary.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Business Problem">
        {cs.businessProblem.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="User Problem">
        {cs.userProblem.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Journey Diagnosis">
        {cs.journeyDiagnosis.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Strategic Bet">
        {cs.strategicBet.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Key Decisions">
        <DecisionList items={cs.keyDecisions} />
      </Section>

      <Section label="Experience Before">
        <Note>{cs.experienceBefore.artifactNote}</Note>
        {cs.experienceBefore.body.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Experience After">
        {cs.experienceAfter.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="What Shipped">
        {cs.whatShipped.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Tradeoffs">
        {cs.tradeoffs.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
        <div className="mt-5 border-y border-ash">
          {cs.tradeoffMatrix.map(([a, b], i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-3 text-[14px] leading-[1.4] ${
                i > 0 ? "border-t border-ash" : ""
              }`}
            >
              <span className="text-carbon">{a}</span>
              <span className={subLabel}>vs</span>
              <span className="text-right text-lichen">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Metric Movement">
        <p className="text-[18px] font-medium leading-snug text-ink">
          {cs.metricMovement.known}
        </p>
        <LedgerList>
          <LedgerItem eyebrow="To wire in before publication">
          <BulletList items={cs.metricMovement.toWire} />
          </LedgerItem>
        </LedgerList>
      </Section>

      <Section label="My Role">
        {cs.myRole.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Artifacts">
        <LedgerList>
          <LedgerItem eyebrow="Available">
            <BulletList items={cs.artifacts.available} />
          </LedgerItem>
          <LedgerItem eyebrow="To wire in">
            <BulletList items={cs.artifacts.toWire} />
          </LedgerItem>
        </LedgerList>
        <Note>{cs.artifacts.note}</Note>
      </Section>

      <Section label="What Changed Beyond the Screen">
        {cs.beyondTheScreen.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Lessons">
        {cs.lessons.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="What I’d Do Differently">
        {cs.differently.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      <Section label="Related">
        <RelatedLinks
          items={[
            {
              title: "Digital Gold Growth",
              href: "/transformations/digital-gold-growth",
              description: "The transformation story behind this case.",
            },
            {
              title: "All cases",
              href: "/cases",
              description: "Back to the case index.",
            },
          ]}
        />
      </Section>
    </PageShell>
  );
}
