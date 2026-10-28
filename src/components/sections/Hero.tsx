import Image from "next/image";
import { ArrowRight, ChevronDown, House, Phone } from "lucide-react";
import { hero } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { HeroBadge } from "@/components/sections/HeroBadge";
import { HeroCollapse } from "@/components/sections/HeroCollapse";
import { sectionGutterStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

const heroButtonStyles =
  "min-h-9 gap-2 px-3 text-2xs tracking-wide text-nowrap xs:min-h-11 xs:px-5 xs:text-xs xs:tracking-widest xl:min-h-12 xl:gap-3 xl:px-7 xl:text-sm";

export function Hero() {
  return (
    <HeroCollapse
      id="home"
      className="relative isolate flex items-center overflow-hidden transition-[min-height] duration-300 ease-out"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-radial from-black/65 to-black/40 lg:bg-linear-to-r lg:from-black/70 lg:via-black/35 lg:to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/50 to-transparent" />
      <div className={cn("w-full py-24 text-center text-white lg:pt-32 lg:pb-28 lg:text-left", sectionGutterStyles)}>
        <p className="text-hero-eyebrow font-semibold text-balance uppercase tracking-[0.2em] text-white/85 xs:tracking-[0.3em]">
          {hero.eyebrow}
        </p>
        <div className="relative mt-4 flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 lg:mt-5 lg:justify-start lg:gap-6">
          <h1 className="font-serif text-hero-title leading-tight text-nowrap">{hero.heading}</h1>
          <HeroBadge label={hero.badgeLabel} source={hero.badgeSource} stats={hero.stats} />
        </div>
        <p className="mx-auto mt-4 max-w-xl text-hero-tagline leading-relaxed text-balance text-white/85 lg:mx-0 lg:mt-5">
          {hero.tagline}
        </p>
        <div className="mt-7 flex justify-center gap-2 xs:gap-3 lg:mt-9 lg:justify-start lg:gap-4">
          <Button href={hero.primaryCta.href} className={heroButtonStyles}>
            <House className="hidden size-4 xs:block" aria-hidden />
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline" className={heroButtonStyles}>
            <Phone className="hidden size-4 xs:block" aria-hidden />
            {hero.secondaryCta.label}
          </Button>
        </div>
        <p className="mt-5 flex flex-col items-center gap-x-1 gap-y-1 text-2xs min-[22.5rem]:flex-row min-[22.5rem]:justify-center text-white/75 xs:text-xs sm:text-sm lg:mt-6 lg:justify-start">
          {hero.sellerCta.prompt}
          <a
            href={hero.sellerCta.href}
            className="inline-flex items-center gap-1 font-semibold text-white underline decoration-gold-light underline-offset-4 transition-colors hover:text-gold-light"
          >
            {hero.sellerCta.label}
            <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </p>
      </div>
      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/85 transition-opacity duration-300 group-data-collapsed/hero:opacity-0"
        aria-hidden
      >
        <span className="flex items-center gap-3 font-serif text-sm tracking-[0.15em] whitespace-nowrap italic sm:text-base">
          <span className="h-px w-6 bg-gold-light/70" />
          {hero.scrollHint}
          <span className="h-px w-6 bg-gold-light/70" />
        </span>
        <ChevronDown className="size-4 motion-safe:animate-bounce" />
      </div>
    </HeroCollapse>
  );
}
