import { EditorialArt } from "@/components/editorial/editorial-art";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { ExecutiveSnapshot } from "@/components/home/executive-snapshot";
import { BeliefSection } from "@/components/home/belief-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { FeaturedTransformations } from "@/components/home/featured-transformations";
import { CasesPreview } from "@/components/home/cases-preview";
import { OperatingManualPreview } from "@/components/home/operating-manual-preview";
import { ThinkingPreview } from "@/components/home/thinking-preview";
import { BuildingPreview } from "@/components/home/building-preview";
import { EvolutionPreview } from "@/components/home/evolution-preview";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <div className="page-shell pb-4">
          <EditorialArt
            slotId="home.hero.editorial-opener"
            variant="hero-painting"
            aspect="wide"
            caption="Ambiguity becoming structure: an abstract systems field."
          />
        </div>
        <ExecutiveSnapshot />
        <BeliefSection />
        <CapabilitiesSection />
        <FeaturedTransformations />
        <CasesPreview />
        <OperatingManualPreview />
        <ThinkingPreview />
        <BuildingPreview />
        <EvolutionPreview />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
