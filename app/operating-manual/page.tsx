import type { Metadata } from "next";
import Link from "next/link";
import { EditorialArt } from "@/components/editorial/editorial-art";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { manualEntries } from "@/lib/operating-manual";

export const metadata: Metadata = {
  title: "Operating Manual · Nikhil Sharma",
  description:
    "A field guide for the operating models, rituals, decision systems, and quality gates behind high-trust product teams.",
};

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";

export default function OperatingManualIndex() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="py-20 md:py-24">
          <div className="page-shell">
            <header className="mb-12 max-w-[760px]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                    00
                  </span>
                  <span className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.06em] font-geometric-mono text-lichen">
                    Operating Manual
                  </span>
                </div>
                <span className={`${metaLabel} text-sage`}>
                  Field guide · In development
                </span>
              </div>
              <h1 className="t-hed-1 text-ink">
                Systems for building AI-native product organizations.
              </h1>
              <div className="mt-5 space-y-3 t-dek text-olive-char">
                <p>
                  A field guide for the operating models, rituals, decision
                  systems, and quality gates behind high-trust product teams.
                </p>
                <p className="border-l border-khaki-olive pl-4 t-body-sm text-lichen">
                  This is not a blog. It is a growing manual of repeatable
                  systems extracted from transformation work.
                </p>
              </div>
            </header>

            <EditorialArt
              slotId="manual.index.opener"
              variant="diagram-painting"
              aspect="wide"
              caption="A field manual, in abstract: grids, nodes, flows, and governance."
              className="mb-12"
            />
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {manualEntries.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/operating-manual/${entry.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-ash bg-paper transition-colors hover:border-olive-char"
                  >
                    <div className="flex items-center justify-between border-b border-ash px-5 py-2.5">
                      <span className={`${metaLabel} text-lichen`}>
                        Entry {entry.number}
                      </span>
                      <span className={`${metaLabel} text-sage`}>
                        {entry.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-5">
                      <h2 className="t-hed-card text-ink">
                        {entry.title}
                      </h2>
                      <p className="t-body-sm text-olive-char">
                        {entry.thesis}
                      </p>
                      <div className="mt-auto space-y-3">
                        {entry.relatedTransformations.length > 0 && (
                          <p className={`${metaLabel} text-lichen`}>
                            From:{" "}
                            {entry.relatedTransformations
                              .map((t) => t.title)
                              .join(" · ")}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className={`${metaLabel} text-sage`}>
                            {entry.status}
                          </span>
                          <span
                            aria-hidden="true"
                            className="font-geometric-mono text-[13px] text-lichen transition-colors group-hover:text-ink"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 t-body-sm text-lichen">
              The manual will expand as transformation stories are converted
              into reusable operating models.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
