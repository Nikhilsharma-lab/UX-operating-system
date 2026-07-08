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

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {manualEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/operating-manual/${entry.slug}`}
            className="group flex h-full flex-col rounded-xl border border-ash bg-paper p-5 transition-colors hover:border-rule-dark"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-geometric-mono text-[12px] tabular-nums text-sage">
                {entry.number}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-sage">
                {entry.status}
              </span>
            </div>
            <div className="mt-3 flex items-start gap-2">
              <h2 className="flex-1 text-[16px] font-medium leading-snug text-ink">
                {entry.title}
              </h2>
              <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
            </div>
            <p className="mt-1 text-[12.5px] text-lichen">{entry.category}</p>
            <p className="mt-3 text-[13.5px] leading-[1.55] text-lichen">
              {entry.thesis}
            </p>
            {entry.relatedTransformations.length > 0 && (
              <p className="mt-auto pt-4 text-[11px] font-medium uppercase tracking-wider text-sage">
                From:{" "}
                {entry.relatedTransformations.map((t) => t.title).join(" · ")}
              </p>
            )}
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
