import Image from "next/image";

/*
 * Feature-opener hero (Decision 054): the New Yorker feature-story
 * treatment replaces the white magazine lead. Near-black field, the
 * tile-grid face illustration as a centered plate, headline in Irvin
 * (t-display-feature) and Caslon dek in white beneath — all centered,
 * no eyebrow, no caption. The dek stays the h1's next sibling for the
 * check:type probe. Load sequence unchanged; reduced motion renders
 * instantly.
 */
export function HeroSection() {
  return (
    <section className="bg-[#050505]">
      {/* The opener is sized to the viewport: container height is 100svh
          minus the measured masthead (57px mobile / 93px at md), so plate,
          headline, and dek always land above the fold. The plate flexes to
          absorb whatever height the text doesn't need, capped at 470px. */}
      <div className="page-shell flex h-[calc(100svh-57px)] max-h-[880px] min-h-[520px] flex-col items-center justify-center py-8 text-center md:h-[calc(100svh-93px)] md:py-10">
        <figure className="hero-enter flex min-h-0 w-full flex-1 items-center justify-center">
          <Image
            src="/art/hero-face-grid.jpeg"
            alt="Illustration: a face assembled from sliding puzzle tiles while hands adjust and measure the pieces."
            width={2560}
            height={2560}
            priority
            sizes="(min-width: 768px) 470px, 100vw"
            className="h-full max-h-[470px] w-auto max-w-full object-contain"
          />
        </figure>

        <h1 className="hero-enter hero-enter-1 mt-7 max-w-[820px] t-display-feature text-balance text-paper">
          From ambiguity to shipped outcomes.
        </h1>

        <p className="hero-enter hero-enter-2 mt-5 max-w-[600px] t-dek text-paper">
          I build AI-native product design organizations that turn unclear
          problems into trusted systems, faster decisions, and measurable
          product impact.
        </p>
      </div>
    </section>
  );
}
