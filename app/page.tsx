import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { ExecutiveSnapshot } from "@/components/home/executive-snapshot";
import { SelectedOutcomes } from "@/components/home/selected-outcomes";
import { BeliefSection } from "@/components/home/belief-section";
import { CasesSection } from "@/components/home/cases-section";
import { FeaturedTransformations } from "@/components/home/featured-transformations";
import { ManualSection } from "@/components/home/manual-section";
import { ThinkingSection } from "@/components/home/thinking-section";
import { BuildingPreview } from "@/components/home/building-preview";
import { EvolutionPreview } from "@/components/home/evolution-preview";
import { ContactSection } from "@/components/home/contact-section";

/*
 * Homepage IA (Decision 056): Hero → Executive Snapshot → Selected Outcomes
 * → Operating Thesis → Cases → Transformations → Operating Manual →
 * Thinking → Ventures → Evolution → Contact. Standalone Capabilities was
 * removed; its job is covered by Snapshot (scope), Outcomes (proof), Cases /
 * Transformations (problem-solving), and the Manual (reusable systems).
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ExecutiveSnapshot />
        <SelectedOutcomes />
        <BeliefSection />
        <CasesSection />
        <FeaturedTransformations />
        <ManualSection />
        <ThinkingSection />
        <BuildingPreview />
        <EvolutionPreview />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
