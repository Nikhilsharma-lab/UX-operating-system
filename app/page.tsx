import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { ExecutiveSnapshot } from "@/components/home/executive-snapshot";
import { BeliefSection } from "@/components/home/belief-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { FeaturedTransformations } from "@/components/home/featured-transformations";
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
        <ExecutiveSnapshot />
        <BeliefSection />
        <CapabilitiesSection />
        <FeaturedTransformations />
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
