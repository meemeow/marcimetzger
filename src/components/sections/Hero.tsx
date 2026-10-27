import Image from "next/image";
import { ArrowRight, ChevronDown, House, Phone } from "lucide-react";
import { hero } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBadge } from "@/components/sections/HeroBadge";
import { HeroCollapse } from "@/components/sections/HeroCollapse";

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
      <div className="absolute inset-0 -z-10 bg-black/45 lg:bg-linear-to-r lg:from-black/70 lg:via-black/35 lg:to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/50 to-transparent" />
      <Container className="pt-28 pb-28 text-white lg:max-w-(--breakpoint-2xl) lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85 sm:text-sm">{hero.eyebrow}</p>
        <div className="relative mt-5 flex items-center gap-4 sm:gap-6">
          <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">{hero.heading}</h1>
          <HeroBadge label={hero.badgeLabel} source={hero.badgeSource} stats={hero.stats} />
        </div>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{hero.tagline}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href={hero.primaryCta.href}>
            <House className="size-4" aria-hidden />
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            <Phone className="size-4" aria-hidden />
            {hero.secondaryCta.label}
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/75">
          {hero.sellerCta.prompt}{" "}
          <a
            href={hero.sellerCta.href}
            className="inline-flex items-center gap-1 font-semibold text-white underline decoration-gold-light underline-offset-4 transition-colors hover:text-gold-light"
          >
            {hero.sellerCta.label}
            <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </p>
      </Container>
      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/85 transition-opacity duration-300 group-data-collapsed/hero:opacity-0"
        aria-hidden
      >
        <span className="flex items-center gap-3 font-serif text-base tracking-[0.15em] italic">
          <span className="h-px w-6 bg-gold-light/70" />
          {hero.scrollHint}
          <span className="h-px w-6 bg-gold-light/70" />
        </span>
        <ChevronDown className="size-4 motion-safe:animate-bounce" />
      </div>
    </HeroCollapse>
  );
}
