import { SectionShell } from "@/components/section-shell";
import { CtaLink } from "@/components/cta-link";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="For serious product, design, AI, and operating-model conversations."
      intro={
        <p>
          Reach out for senior product design leadership, AI-native product
          organization conversations, advisory work, speaking, writing, or
          product-building discussions.
        </p>
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        <CtaLink href="mailto:hi.nikhilsharma@gmail.com" variant="primary">
          Contact
        </CtaLink>
        <CtaLink variant="secondary" pendingLabel="Add LinkedIn URL before launch">
          LinkedIn
        </CtaLink>
        <CtaLink variant="secondary" pendingLabel="Add resume link before launch">
          Resume
        </CtaLink>
      </div>
    </SectionShell>
  );
}
