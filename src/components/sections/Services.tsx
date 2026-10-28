import { services } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";

export function Services() {
  return (
    <Section
      id="lets-move"
      tone="charcoal"
      className="pt-20 pb-14 xs:pt-28 xs:pb-18 lg:pt-44 lg:pb-26"
      containerClassName="max-w-(--breakpoint-2xl)"
    >
      <div className="grid items-center gap-10 2xl:grid-cols-5 2xl:gap-16">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          tone="light"
          divider="flourish"
          className="2xl:col-span-2 2xl:-ml-12"
        />
        <ServicesCarousel
          label={services.eyebrow}
          features={services.features}
          expandLabels={services.expandLabels}
          className="2xl:col-span-3"
        />
      </div>
    </Section>
  );
}
