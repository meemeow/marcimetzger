import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { about } from "@/content/about";
import { Button } from "@/components/ui/Button";
import { Ornament } from "@/components/ui/Ornament";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsPanel } from "@/components/ui/StatsPanel";
import { compactButtonStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <Section id="about-us">
      <Ornament className="-mt-4 mb-10 sm:hidden" />
      <div className="grid items-center gap-12 xs:gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative isolate mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <span className="absolute -top-4 -left-4 -z-10 hidden size-full border border-gold/40 sm:block" aria-hidden />
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={about.portrait.src}
                alt={about.portrait.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 45vw, 28rem"
                className="object-cover object-top"
              />
            </div>
          </div>
          <StatsPanel
            label={about.statsLabel}
            stats={about.stats}
            source={about.statsSource}
            className="relative mx-2 -mt-12 xs:mx-4 xs:-mt-16 sm:mx-8"
          />
        </div>
        <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-none">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" divider="line" />
          <p className="mt-6 font-serif text-xl italic text-foreground/80 xs:mt-8 xs:text-2xl">{about.headline}</p>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/70 xs:mt-6 xs:text-base">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ol className="mt-8 divide-y divide-black/10 border-y border-black/10 xs:mt-10">
            {about.highlights.map((highlight, index) => (
              <li key={highlight.title} className="flex gap-4 py-4 xs:gap-6 xs:py-5">
                <span className="font-serif text-xl text-gold xs:text-2xl">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider xs:text-sm xs:tracking-widest">
                    {highlight.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/70 xs:text-sm">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3 xs:mt-10 sm:gap-4">
            <Button
              href={about.phone.href}
              variant="dark"
              className={cn("group", compactButtonStyles)}
              aria-label={`${about.phoneLabel} at ${about.phone.display}`}
            >
              <Phone
                className="size-4 motion-safe:group-hover:animate-ring"
                aria-hidden
              />
              {about.phone.display}
            </Button>
            <Button href={about.messageCta.href} variant="outlineDark" className={compactButtonStyles}>
              {about.messageCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
