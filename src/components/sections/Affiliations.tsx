import Image from "next/image";
import { affiliations } from "@/content/affiliations";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Affiliations() {
  return (
    <Section className="py-14 xs:py-16 lg:py-20" containerClassName="max-w-(--breakpoint-2xl)">
      <SectionHeading eyebrow={affiliations.eyebrow} title={affiliations.title} />
      <ul className="mt-8 flex flex-wrap justify-center divide-y divide-black/10 border-y border-black/10 xs:mt-14 xs:gap-x-10 xs:gap-y-10 sm:gap-x-8 xs:divide-y-0 xs:border-y-0 sm:gap-y-12 2xl:grid 2xl:grid-cols-5 2xl:gap-x-12">
        {affiliations.items.map((affiliation) => (
          <li
            key={affiliation.name}
            className="flex w-full items-center gap-4 py-4 xs:w-44 xs:flex-col xs:gap-0 xs:py-0 xs:text-center sm:w-60 2xl:w-auto"
          >
            <div className="flex size-14 shrink-0 items-center justify-center xs:h-14 xs:w-auto sm:h-16 lg:h-20">
              <Image
                src={affiliation.logo.src}
                alt={affiliation.logo.alt}
                sizes="128px"
                className="h-12 w-auto max-w-14 object-contain xs:h-14 xs:max-w-24 sm:h-16 sm:max-w-28 lg:h-20 lg:max-w-32"
              />
            </div>
            <div className="xs:flex xs:flex-col xs:items-center">
              <h3 className="font-serif text-base font-semibold text-balance xs:mt-5 sm:text-xl sm:whitespace-nowrap">
                {affiliation.name}
              </h3>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-foreground/75 xs:mt-3 sm:text-sm">
                {affiliation.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
