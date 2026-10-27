import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { about } from "@/content/about";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsPanel } from "@/components/ui/StatsPanel";

export function About() {
  return (
    <Section id="about-us">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative isolate mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <span className="absolute -top-4 -left-4 -z-10 size-full border border-gold/40" aria-hidden />
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
            className="relative mx-4 -mt-16 sm:mx-8"
          />
        </div>
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" divider="line" />
          <p className="mt-8 font-serif text-2xl italic text-foreground/80">{about.headline}</p>
          <div className="mt-6 space-y-4 leading-relaxed text-foreground/70">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ol className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {about.highlights.map((highlight, index) => (
              <li key={highlight.title} className="flex gap-6 py-5">
                <span className="font-serif text-2xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest">{highlight.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href={about.phone.href}
              variant="dark"
              className="group"
              aria-label={`${about.phoneLabel} at ${about.phone.display}`}
            >
              <Phone
                className="size-4 motion-safe:group-hover:animate-ring"
                aria-hidden
              />
              {about.phone.display}
            </Button>
            <Button href={about.messageCta.href} variant="outlineDark">
              {about.messageCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
