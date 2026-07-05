import Image from "next/image";

/*
 * Poster hero (user-approved real asset): the doorway illustration is the
 * full-bleed background; headline in poster yellow, dek in parchment. The
 * image is flipped horizontally so the light shaft sits right and the text
 * composes into the black field on the left at md+; mobile gets a scrim.
 * Replaces the painterly SVG opener slot home.hero.editorial-opener.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <Image
        src="/art/hero-doorway.png"
        alt=""
        fill
        priority
        className="-scale-x-100 object-cover object-left-bottom"
      />
      {/* mobile-only scrim; the md+ composition sits on the black field */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55 md:bg-transparent"
      />
      <div className="relative z-10 flex min-h-[76vh] items-center py-24 md:py-32">
        <div className="page-shell w-full">
          <div className="flex flex-col items-center text-center md:mr-auto md:w-[58%] md:items-start md:text-left">
            <p className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.1em] font-rubric text-bone/70">
              AI-native Product Executive
            </p>

            <h1 className="mt-6 t-display text-[#ffd23f]">
              From ambiguity to shipped outcomes.
            </h1>

            <p className="mt-8 max-w-[560px] t-dek text-bone">
              I build AI-native product design organizations that turn unclear
              problems into trusted systems, faster decisions, and measurable
              product impact.
            </p>

            {/* editorial accent mark (1 of 2 on the page) */}
            <span
              aria-hidden="true"
              className="mt-9 block h-[4px] w-12 bg-[#ffd23f]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
