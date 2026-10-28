"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { ExpandLabels, Feature } from "@/types/content";
import { FormattedText } from "@/components/ui/FormattedText";
import { GoldPlate } from "@/components/ui/GoldPlate";
import { cn } from "@/lib/utils";

const imagePositions = {
  center: "object-center",
  right: "object-right",
};

type FeatureCardProps = {
  feature: Feature;
  index: number;
  isActive: boolean;
  expandLabels: ExpandLabels;
  className?: string;
};

export function FeatureCard({ feature, index, isActive, expandLabels, className }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionId = useId();
  const showFullText = isExpanded && isActive;

  return (
    <article className={cn("h-full", className)}>
      <GoldPlate className="h-full" innerClassName="flex h-full flex-col p-3 xs:p-4">
        <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white/20 2xl:aspect-3/2">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            fill
            placeholder="blur"
            draggable={false}
            sizes="(min-width: 1536px) 28vw, (min-width: 640px) 448px, (min-width: 480px) 75vw, 88vw"
            className={cn("object-cover", imagePositions[feature.imagePosition ?? "center"])}
          />
        </div>
        <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-3 pb-2 xs:mt-6 xs:gap-x-5 xs:pb-3 2xl:mt-10 2xl:pb-6">
          <span className="font-serif text-3xl leading-none text-gold-light italic xs:text-5xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-serif text-xl leading-tight font-medium text-white xs:text-2xl lg:text-3xl">
              {feature.title}
            </h3>
            <div
              id={descriptionId}
              className={cn("mt-2 space-y-3 xs:mt-4 sm:line-clamp-none", !showFullText && "line-clamp-3")}
            >
              {feature.description.map((paragraph) => (
                <p key={paragraph} className="text-xs leading-relaxed text-white/65 xs:text-sm">
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(!showFullText)}
              aria-expanded={showFullText}
              aria-controls={descriptionId}
              tabIndex={isActive ? 0 : -1}
              className="mt-2 text-2xs font-semibold uppercase tracking-widest text-gold-light underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light sm:hidden"
            >
              {showFullText ? expandLabels.less : expandLabels.more}
            </button>
          </div>
        </div>
      </GoldPlate>
    </article>
  );
}
