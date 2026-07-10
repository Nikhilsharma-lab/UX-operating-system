import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Arrow } from "@/components/ui";
import { ArticleHead, Note } from "@/components/article";
import { manualEntries } from "@/lib/operating-manual";

export const metadata: Metadata = {
  title: "Operating Manual · Nikhil Sharma",
  description:
    "A field guide for the operating models, rituals, decision systems, and quality gates behind high-trust product teams.",
};

export default function OperatingManualIndex() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Operating Manual"
        title="Systems for building AI-native product organizations."
        dek="A field guide for the operating models, rituals, decision systems, and quality gates behind high-trust product teams."
      />
      <Note>
        This is not a blog. It is a growing manual of repeatable systems
        extracted from transformation work.
      </Note>

      <div className="mt-10 border-y border-ash">
        {manualEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/operating-manual/${entry.slug}`}
            className="group -mx-2 block border-b border-ash px-2 py-4 transition-colors last:border-b-0 hover:bg-bone"
          >
            <div className="grid gap-x-5 gap-y-2 sm:grid-cols-[64px_1fr]">
              <span className="font-geometric-mono text-[12px] tabular-nums text-sage sm:pt-0.5">
                {entry.number}
              </span>
              <div className="min-w-0">
                <div className="flex items-start gap-3">
                  <h2 className="flex-1 text-[16px] font-medium leading-snug text-ink">
                    {entry.title}
                  </h2>
                  <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
                </div>
                <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-sage">
                  <span>{entry.category}</span>
                  <span>{entry.status}</span>
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-lichen">
                  {entry.thesis}
                </p>
                {entry.relatedTransformations.length > 0 && (
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-sage">
                    From:{" "}
                    {entry.relatedTransformations.map((t) => t.title).join(" · ")}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-[13.5px] leading-[1.55] text-lichen">
        The manual will expand as transformation stories are converted into
        reusable operating models.
      </p>
    </PageShell>
  );
}
