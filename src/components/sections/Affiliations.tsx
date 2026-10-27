import Image from "next/image";
import { affiliations } from "@/content/affiliations";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Affiliations() {
  return (
    <Section className="py-16 lg:py-20" containerClassName="max-w-(--breakpoint-2xl)">
      <SectionHeading eyebrow={affiliations.eyebrow} title={affiliations.title} />
      <ul className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-12 lg:grid lg:grid-cols-5 lg:gap-x-12">
        {affiliations.items.map((affiliation) => (
          <li key={affiliation.name} className="flex w-full flex-col items-center text-center sm:w-72 lg:w-auto">
            <div className="flex h-20 items-center">
              <Image
                src={affiliation.logo.src}
                alt={affiliation.logo.alt}
                sizes="128px"
                className="h-20 w-auto max-w-32 object-contain"
              />
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold whitespace-nowrap">{affiliation.name}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/75">
              {affiliation.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
