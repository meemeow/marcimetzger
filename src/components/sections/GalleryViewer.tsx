"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePointerTilt } from "@/hooks/use-pointer-tilt";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { ImageAsset } from "@/types/content";
import { roundControlStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

type GalleryViewerProps = {
  images: ImageAsset[];
  className?: string;
};

export function GalleryViewer({ images, className }: GalleryViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tilt = usePointerTilt({ maxTilt: 6, perspective: "1200px", liftPx: 4 });
  const thumbnailListRef = useRef<HTMLUListElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const count = images.length;

  const show = (index: number) => setActiveIndex((index + count) % count);

  useEffect(() => {
    const list = thumbnailListRef.current;
    const thumbnail = list?.children[activeIndex] as HTMLElement | undefined;
    if (!list || !thumbnail) return;
    list.scrollTo({
      left: thumbnail.offsetLeft - (list.clientWidth - thumbnail.offsetWidth) / 2,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [activeIndex, prefersReducedMotion]);

  return (
    <div className={cn("flex flex-col gap-4 xs:gap-6", className)}>
      <div
        {...tilt}
        className="relative aspect-video overflow-hidden rounded-[14px] border-4 border-ink/90 shadow-[0_8px_24px_rgb(0_0_0/0.55)] hover:shadow-[0_18px_36px_rgb(0_0_0/0.6)]"
      >
        {images.map((image, index) => (
          <Image
            key={image.alt}
            src={image.src}
            alt={image.alt}
            fill
            placeholder="blur"
            quality={90}
            sizes="(min-width: 1536px) 60vw, (min-width: 1024px) 896px, 100vw"
            aria-hidden={index !== activeIndex}
            className={cn(
              "object-cover transition-opacity duration-400",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      <p aria-live="polite" className="text-center text-xs font-semibold tracking-widest text-white/80 xs:text-sm">
        {activeIndex + 1} <span className="font-normal text-white/50">of</span> {count}
      </p>

      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
        <button type="button" onClick={() => show(activeIndex - 1)} aria-label="Previous photo" className={roundControlStyles}>
          <ChevronLeft className="size-4 xs:size-5" aria-hidden />
        </button>
        <ul
          ref={thumbnailListRef}
          data-native-scroll
          className="relative flex min-w-0 flex-1 gap-(--thumb-gap) overflow-x-auto p-1 [--thumb-count:3] [--thumb-gap:0.375rem] [scrollbar-width:none] xs:[--thumb-count:5] xs:[--thumb-gap:0.5rem] sm:[--thumb-gap:0.75rem]"
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={image.alt} className="w-[calc((100%-(var(--thumb-count)-1)*var(--thumb-gap))/var(--thumb-count))] shrink-0">
                <button
                  type="button"
                  onClick={() => show(index)}
                  aria-label={`Show photo ${index + 1}: ${image.alt}`}
                  aria-current={isActive}
                  className={cn(
                    "relative block aspect-3/2 w-full overflow-hidden rounded-md border-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light",
                    isActive ? "border-gold-light opacity-100" : "border-transparent opacity-50 hover:opacity-100",
                  )}
                >
                  <Image src={image.src} alt="" fill sizes="(min-width: 1536px) 8vw, (min-width: 480px) 18vw, 30vw" className="object-cover" />
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={() => show(activeIndex + 1)} aria-label="Next photo" className={roundControlStyles}>
          <ChevronRight className="size-4 xs:size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
