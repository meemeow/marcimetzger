"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { listingSearch } from "@/content/listings";
import { buttonStyles } from "@/components/ui/Button";
import { FormNotice } from "@/components/ui/FormNotice";
import { SelectField } from "@/components/ui/SelectField";
import { PriceField } from "@/components/ui/PriceField";
import { cn } from "@/lib/utils";

const segmentStyles = "xl:min-w-0 xl:flex-1";
const noticeDurationMs = 6000;

type ListingSearchFormProps = {
  className?: string;
};

export function ListingSearchForm({ className }: ListingSearchFormProps) {
  const [submitCount, setSubmitCount] = useState(0);
  const [showNotice, setShowNotice] = useState(false);
  const { labels } = listingSearch;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitCount((count) => count + 1);
    setShowNotice(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("border-y border-gold-light/50 bg-ink/30 px-4 py-6 backdrop-blur-sm sm:px-6", className)}
    >
      <h3 className="sr-only">{listingSearch.formTitle}</h3>
      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:gap-6">
        <div className="grid flex-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:flex xl:gap-5">
          <SelectField
            label={labels.location}
            name="location"
            options={listingSearch.locations}
            className={cn(segmentStyles, "sm:col-span-2 xl:flex-[1.3]")}
          />
          <SelectField
            label={labels.type}
            name="type"
            options={listingSearch.propertyTypes}
            className={segmentStyles}
          />
          <SelectField
            label={labels.sortBy}
            name="sort"
            options={listingSearch.sortBy}
            className={cn(segmentStyles, "xl:flex-[1.3]")}
          />
          <SelectField
            label={labels.bedrooms}
            name="bedrooms"
            options={listingSearch.bedrooms}
            className={segmentStyles}
          />
          <SelectField
            label={labels.baths}
            name="baths"
            options={listingSearch.baths}
            className={segmentStyles}
          />
          <PriceField
            label={labels.minPrice}
            name="minPrice"
            placeholder="No min"
            className={segmentStyles}
          />
          <PriceField
            label={labels.maxPrice}
            name="maxPrice"
            placeholder="No max"
            className={segmentStyles}
          />
        </div>
        <button type="submit" className={buttonStyles("outline", "h-11 min-h-11 w-full rounded-xl border-white/30 text-white/75 hover:bg-white/10 hover:text-white/75 xl:w-auto xl:shrink-0")}>
          <Search className="size-4" aria-hidden />
          {listingSearch.submitLabel}
        </button>
      </div>
      {showNotice && (
        <div className="mt-6">
          <FormNotice
            key={submitCount}
            message={listingSearch.notice}
            durationMs={noticeDurationMs}
            onDismiss={() => setShowNotice(false)}
          />
        </div>
      )}
    </form>
  );
}
