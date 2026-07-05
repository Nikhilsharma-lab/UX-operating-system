import type { Metadata } from "next";
import Link from "next/link";
import { EditorialArt } from "@/components/editorial/editorial-art";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { transformations } from "@/lib/transformations";

export const metadata: Metadata = {
  title: "Transformations · Nikhil Sharma",
  description:
    "Transformation stories, not case studies: what changed, why it mattered, and the systems that made it possible.",
};

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";

export default function TransformationsIndex() {
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
                    Transformations
                  </span>
                </div>
                <span className="font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em] text-sage">
                  Archive · V1
                </span>
              </div>
              <h1 className="t-hed-1 text-ink">
                Transformation stories, not case studies.
              </h1>
              <div className="mt-5 space-y-3 t-dek text-olive-char">
                <p>A case study shows what was designed.</p>
                <p>A transformation story shows what changed.</p>
                <p className="text-lichen">
                  Each story documents the business problem, organizational
                  constraints, research, decisions, tradeoffs, execution,
                  outcomes, and lessons.
                </p>
              </div>
            </header>

            <EditorialArt
              slotId="transformations.index.opener"
              variant="transformation-plate"
              aspect="wide"
              caption="Field reports: organizational change rendered as layered forms."
              className="mb-12"
            />
            <ul className="grid gap-6 lg:grid-cols-3">
              {/* Digital Gold lives in Cases now; its transformation shell
                  stays routable (linked from the case) but is not listed. */}
              {transformations
                .filter((story) => story.slug !== "digital-gold-growth")
                .map((story) => (
                <li key={story.slug}>
                  <Link
                    href={`/transformations/${story.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-ash bg-paper transition-colors hover:border-olive-char"
                  >
                    <div className="flex items-center justify-between border-b border-ash px-6 py-3">
                      <span className={`${metaLabel} text-lichen`}>
                        Case file {story.index}
                      </span>
                      <span className={`${metaLabel} text-sage`}>
                        {story.capability}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6">
                      <h2 className="t-hed-card text-ink">
                        {story.title}
                      </h2>
                      <p className="t-body-sm text-olive-char">{story.proves}</p>
                      <div className="mt-auto">
                        <p className="mb-3 font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em] text-sage">
                          {story.status === "Draft v1"
                            ? "Field report v1"
                            : "In preparation"}
                        </p>
                        <span className="inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink">
                          Read transformation
                          <span aria-hidden="true" className="text-lichen">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 t-body-sm text-lichen">
              More transformation stories are in preparation.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
