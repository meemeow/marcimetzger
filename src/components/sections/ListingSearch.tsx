import Image from "next/image";
import { listingSearch } from "@/content/listings";
import { ListingSearchForm } from "@/components/sections/ListingSearchForm";
import { SkyRise } from "@/components/sections/SkyRise";
import { sectionGutterStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function ListingSearch() {
  return (
    <section
      id="listings"
      data-header-overlay="sky"
      className={cn(
        "relative isolate pt-24 pb-28 text-white xs:pt-28 xs:pb-36 lg:pt-48 lg:pb-64",
        sectionGutterStyles,
      )}
    >
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
      <div className="mx-auto w-full max-w-(--breakpoint-2xl)">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-2xs font-semibold uppercase tracking-[0.2em] text-gold-light xs:gap-4 xs:text-xs xs:tracking-[0.3em]">
            <span className="h-px w-6 bg-current xs:w-8 sm:w-12" aria-hidden />
            {listingSearch.eyebrow}
            <span className="h-px w-6 bg-current xs:w-8 sm:w-12" aria-hidden />
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight xs:mt-4 xs:text-4xl sm:text-5xl xl:text-6xl">
            {listingSearch.title}
          </h2>
          <p className="mt-3 font-serif text-base text-balance text-white/80 italic xs:mt-4 xs:text-lg sm:text-xl">
            {listingSearch.tagline}
          </p>
        </div>
        <ListingSearchForm className="mt-10 xs:mt-12 lg:mt-16" />
      </div>
    </section>
  );
}
