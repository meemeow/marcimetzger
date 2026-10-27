import Image from "next/image";
import { listingSearch } from "@/content/listings";
import { Container } from "@/components/ui/Container";
import { ListingSearchForm } from "@/components/sections/ListingSearchForm";
import { SkyRise } from "@/components/sections/SkyRise";

export function ListingSearch() {
  return (
    <section id="listings" data-header-overlay="sky" className="relative isolatept-28 pb-36 text-white lg:pt-48 lg:pb-64">
      <Image
        src={listingSearch.background.src}
        alt={listingSearch.background.alt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <SkyRise />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-ink lg:h-64" />
      <Container className="max-w-(--breakpoint-2xl)">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            <span className="h-px w-8 bg-current sm:w-12" aria-hidden />
            {listingSearch.eyebrow}
            <span className="h-px w-8 bg-current sm:w-12" aria-hidden />
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            {listingSearch.title}
          </h2>
          <p className="mt-4 font-serif text-lg text-white/80 italic sm:text-xl">{listingSearch.tagline}</p>
        </div>
        <ListingSearchForm className="mt-12 lg:mt-16" />
      </Container>
    </section>
  );
}
