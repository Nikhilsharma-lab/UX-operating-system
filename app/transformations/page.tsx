import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ArticleHead } from "@/components/article";
import { Arrow } from "@/components/ui";
import { transformations } from "@/lib/transformations";

export const metadata: Metadata = {
  title: "Transformations · Nikhil Sharma",
  description:
    "Transformation stories, not case studies: what changed, why it mattered, and the systems that made it possible.",
};

export default function TransformationsIndex() {
  // Digital Gold lives in Cases now; its transformation shell stays routable
  // (linked from the case) but is not listed here.
  const stories = transformations.filter(
    (story) => story.slug !== "digital-gold-growth",
  );

  return (
    <PageShell>
      <ArticleHead
        eyebrow="Transformations"
        title="Transformation stories, not case studies."
        dek={
          <>
            <p>
              A case study shows what was designed. A transformation story shows
              what changed.
            </p>
            <p className="mt-3 text-lichen">
              Each documents the business problem, organizational constraints,
              research, decisions, tradeoffs, execution, outcomes, and lessons.
            </p>
          </>
        }
      />

      <div className="mt-10 border-y border-ash">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/transformations/${story.slug}`}
            className="group -mx-2 block border-b border-ash px-2 py-4 transition-colors last:border-b-0 hover:bg-bone"
          >
            <div className="grid gap-x-5 gap-y-2 sm:grid-cols-[64px_1fr]">
              <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-sage sm:pt-0.5">
                {story.index}
              </span>
              <div className="min-w-0">
                <div className="flex items-start gap-3">
                  <h2 className="min-w-0 flex-1 text-[16px] font-medium leading-snug text-ink">
                    {story.title}
                  </h2>
                  <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
                </div>
                <p className="mt-1 text-[12.5px] leading-snug text-sage">
                  {story.capability}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-lichen">
                  {story.proves}
                </p>
                <p className="mt-3.5 text-[11px] font-medium uppercase tracking-wider text-sage">
                  {story.status === "Draft v1"
                    ? "Field report v1"
                    : "In preparation"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-[14px] leading-[1.6] text-lichen">
        More transformation stories are in preparation.
      </p>
    </PageShell>
  );
}
