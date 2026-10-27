import { services } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";

export function Services() {
  return (
    <Section
      id="lets-move"
      tone="charcoal"
      className="pt-28 pb-18 lg:pt-44 lg:pb-26"
      containerClassName="max-w-(--breakpoint-2xl)"
    >
      <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} tone="light" divider="flourish" className="lg:col-span-2 lg:-ml-12" />
        <ServicesCarousel label={services.eyebrow} features={services.features} className="lg:col-span-3" />
      </div>
    </Section>
  );
}
