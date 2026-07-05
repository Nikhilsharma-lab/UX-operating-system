import Image from "next/image";
import { Reveal } from "@/components/reveal";

const essaySeeds = [
  "Why case studies are too small for executive work",
  "Design systems are product infrastructure",
  "Trust is not a UI layer",
  "AI-native teams need new operating models",
  "Design creates systems that create products",
];

/*
 * Thinking as its own full-viewport section (Decision 055), decoupled from
 * the library band. Composition follows the New Yorker fiction-page
 * grammar: left column carries rubric + Irvin title above a maximized
 * plate with a Caslon line in the byline position beneath; right column
 * opens with a drop-cap Caslon paragraph and closes with the essay-seed
 * river under an accent rubric header. Bone tint band complements the
 * plate's pink field (token-only). Seeds stay unnumbered; all copy is
 * previously approved language.
 */
export function ThinkingSection() {
  return (
    <section id="thinking" className="border-t border-ash bg-bone">
      <div className="page-shell flex min-h-[100svh] flex-col items-center justify-center gap-12 py-16 md:flex-row md:items-center md:gap-14">
        {/* Plate column — image as large as the grid allows */}
        <Reveal className="w-full text-center md:w-[58%]">
          <p className="text-[11px] font-medium uppercase leading-[16px] tracking-[0.1em] font-rubric text-lichen">
            Thinking
          </p>
          <h2 className="mt-3 t-hed-2 text-balance text-ink">
            Essays, frameworks, and mental models.
          </h2>
          <Image
            src="/art/thinking-album.jpeg"
            alt="Illustration: an open sticker album of portrait trading cards spilling across two phones."
            width={2132}
            height={1599}
            sizes="(min-width: 768px) 58vw, 100vw"
            className="mt-7 h-auto w-full"
          />
          <p className="mx-auto mt-5 max-w-[480px] t-body-serif text-olive-char">
            Not a blog of opinions: the ideas behind the work, written so they
            can be reused.
          </p>
        </Reveal>

        {/* Reading column — drop-cap excerpt + seed river */}
        <Reveal className="w-full max-w-[560px] md:w-[42%]">
          <p className="dropcap t-dek text-ink">
            The Thinking section expands the ideas behind the work: AI-native
            product teams, design systems as infrastructure, behavioral
            growth, trust in financial products, and why transformation
            stories are stronger than case studies.
          </p>

          <div className="mt-10">
            <p className="border-t border-ash pt-4 text-[11px] font-medium uppercase leading-[16px] tracking-[0.1em] font-rubric text-accent-blue">
              In edit · publishing as they clear review
            </p>
            <ul className="mt-2">
              {essaySeeds.map((seed) => (
                <li
                  key={seed}
                  className="border-b border-ash py-3.5 first:border-t first:border-ash"
                >
                  <p className="t-dek text-balance text-ink">{seed}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
