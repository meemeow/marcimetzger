"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Feature } from "@/types/content";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { readingTimeMs } from "@/lib/reading-time";
import { roundControlStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

const peekShiftPercent = 36;
const peekScale = 0.8;
const clickSlopPx = 6;
const settleTransition = "transform 450ms cubic-bezier(.2,.9,.2,1), opacity 450ms ease, filter 450ms ease";

type ServicesCarouselProps = {
  label: string;
  features: Feature[];
  className?: string;
};

export function ServicesCarousel({ label, features, className }: ServicesCarouselProps) {
  const count = features.length;
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const currentSlideRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const hasMoved = useRef(false);
  const pressedIndex = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const isPaused = isHovered || isDragging;
  const isAutoplaying = !prefersReducedMotion && !isPaused;
  const activeFeature = features[active];
  const slideDurationMs = readingTimeMs([activeFeature.title, ...activeFeature.description].join(" "));

  const goTo = (index: number) => setActive((index + count) % count);
  const showPrevious = () => setActive((current) => (current - 1 + count) % count);
  const showNext = () => setActive((current) => (current + 1) % count);

  function offsetFromActive(index: number) {
    const half = Math.floor(count / 2);
    return ((index - active + count + half) % count) - half;
  }

  function slideStyle(index: number): CSSProperties {
    const position = offsetFromActive(index) - dragProgress;
    const distance = Math.min(Math.abs(position), 2);
    const nearness = Math.min(distance, 1);
    return {
      transform: `translateX(${position * peekShiftPercent}%) scale(${1 - (1 - peekScale) * nearness})`,
      opacity: distance <= 1 ? 1 - 0.25 * distance : Math.max(0, 0.75 * (2 - distance)),
      filter: `brightness(${1 - 0.15 * nearness})`,
      zIndex: 100 - Math.round(distance * 10),
      transition: isDragging || prefersReducedMotion ? "none" : settleTransition,
    };
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const slide = (event.target as HTMLElement).closest<HTMLElement>("[data-slide-index]");
    pressedIndex.current = slide ? Number(slide.dataset.slideIndex) : null;
    dragStartX.current = event.clientX;
    hasMoved.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging || !currentSlideRef.current) return;
    const distance = event.clientX - dragStartX.current;
    if (Math.abs(distance) > clickSlopPx) hasMoved.current = true;
    const progress = -distance / currentSlideRef.current.offsetWidth;
    setDragProgress(Math.max(-1, Math.min(1, progress)));
  }

  function endDrag() {
    if (!isDragging) return;
    if (dragProgress > 0.5) showNext();
    else if (dragProgress < -0.5) showPrevious();
    else if (!hasMoved.current && pressedIndex.current !== null) goTo(pressedIndex.current);
    setIsDragging(false);
    setDragProgress(0);
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className={cn("min-w-0", className)}>
      <div
        aria-live={isAutoplaying ? "off" : "polite"}
        className={cn(
          "isolate grid touch-pan-y overflow-x-clip py-4 select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {features.map((feature, index) => {
          const isCurrent = index === active;
          return (
            <div
              key={feature.title}
              ref={isCurrent ? currentSlideRef : undefined}
              data-slide-index={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-hidden={!isCurrent}
              style={slideStyle(index)}
              className="col-start-1 row-start-1 w-3/4 justify-self-center sm:w-3/5"
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6">
        <button type="button" onClick={showPrevious} aria-label="Previous service" className={roundControlStyles}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div className="flex items-center">
          {features.map((feature, index) => {
            const isCurrent = index === active;
            return (
              <button
                key={feature.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${feature.title}`}
                aria-current={isCurrent}
                className="group flex h-6 items-center px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                <span
                  className={cn(
                    "relative block h-2 overflow-hidden rounded-full transition-all duration-500",
                    isCurrent ? "w-10 bg-white/20" : "w-2 bg-white/35 group-hover:bg-white/60",
                  )}
                >
                  {isCurrent && (
                    <span
                      onAnimationEnd={showNext}
                      style={{ animationDuration: `${slideDurationMs}ms` }}
                      className={cn(
                        "absolute inset-0 origin-left rounded-full bg-gold-light",
                        !prefersReducedMotion && "animate-progress",
                        isPaused && "[animation-play-state:paused]",
                      )}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
        <button type="button" onClick={showNext} aria-label="Next service" className={roundControlStyles}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
