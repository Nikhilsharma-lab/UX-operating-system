import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import {
  ArticleHead,
  BulletList,
  DecisionList,
  LedgerList,
  LedgerItem,
  Note,
  P,
  RelatedLinks,
  Section,
} from "@/components/article";
import { evidenceMode } from "@/lib/evidence";
import {
  STORY_FRAMEWORK,
  getStory,
  transformations,
  type DraftBlock,
} from "@/lib/transformations";

export function generateStaticParams() {
  return transformations.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Transformation · Nikhil Sharma" };
  return {
    title: `${story.title} · Nikhil Sharma`,
    description: story.proves,
  };
}

const navLink = "text-[13px] text-lichen transition-colors hover:text-ink";

function DraftBlocks({ blocks }: { blocks: DraftBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p") return <P key={i}>{block.text}</P>;
        if (block.type === "list")
          return <BulletList key={i} items={block.items} />;
        if (block.type === "decisions")
          return <DecisionList key={i} items={block.items} />;
        return <Note key={i}>{block.text}</Note>;
      })}
    </>
  );
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const internal = evidenceMode() === "internal";
  const drafted = story.status === "Draft v1" && !!story.draft;

  const statusText = drafted
    ? "Field report v1"
    : internal
      ? "Evidence intake in progress"
      : "In preparation";

  const dek =
    story.proves +
    (internal && story.provesMetric ? ` ${story.provesMetric}` : "");

  const guides = story.relatedOperatingGuides ?? [];

  return (
    <PageShell>
      <ArticleHead
        eyebrow={`Transformation ${story.index} · ${story.capability}`}
        title={story.title}
        dek={dek}
        meta={[
          { label: "Primary audience", value: story.primaryAudience },
          { label: "Status", value: statusText },
        ]}
      />

      {!drafted && (
        <Note>
          This transformation story is being prepared as an evidence-backed
          leadership narrative. The final version will include context,
          decisions, tradeoffs, outcomes, and lessons once evidence intake is
          complete.
        </Note>
      )}

      {STORY_FRAMEWORK.map((section) => {
        const blocks = drafted ? story.draft?.[section.n] : undefined;
        const bullets = story.evidence[section.n];
        return (
          <Section key={section.n} label={section.title}>
            {blocks ? (
              <DraftBlocks blocks={blocks} />
            ) : (
              <p className="max-w-[64ch] text-[15px] leading-[1.7] text-lichen">
                {section.prompt}
              </p>
            )}

            {internal && bullets && (
              <LedgerList className="mt-4">
                <LedgerItem
                  eyebrow={drafted ? "Internal · evidence note" : "Evidence intake"}
                >
                <BulletList items={bullets} />
                </LedgerItem>
              </LedgerList>
            )}
          </Section>
        );
      })}

      {guides.length > 0 && (
        <Section
          label={
            guides.length > 1
              ? "Related operating guides"
              : "Related operating guide"
          }
        >
          <RelatedLinks items={guides} />
        </Section>
      )}

      {internal && (
        <p className="mt-10 max-w-[62ch] text-[13px] leading-[1.6] text-sage">
          Internal: no metric publishes until it is registered in
          EVIDENCE/CLAIMS_REGISTER.md and approved. Unverified claims (e.g.
          interview counts) stay out of the public draft.
        </p>
      )}

      <nav
        aria-label="Related"
        className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-ash pt-6"
      >
        <Link href="/transformations" className={navLink}>
          Transformations
        </Link>
        {story.slug === "digital-gold-growth" && (
          <Link href="/cases/digital-gold-growth" className={navLink}>
            Related case: Digital Gold Growth
          </Link>
        )}
        <Link href="/#contact" className={navLink}>
          Contact
        </Link>
      </nav>
    </PageShell>
  );
}
