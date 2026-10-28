"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { HERO_COLLAPSE_RATIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const collapseKeys = new Set(["ArrowDown", "PageDown", "End", " "]);
const expandKeys = new Set(["ArrowUp", "PageUp", "Home"]);

type HeroCollapseProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function HeroCollapse({ id, className, children }: HeroCollapseProps) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const collapseDistance = () => window.innerHeight * HERO_COLLAPSE_RATIO;

    const apply = (next: number) => {
      progressRef.current = Math.min(1, Math.max(0, next));
      setProgress(progressRef.current);
    };

    const capture = (delta: number, event: Event) => {
      const atTop = window.scrollY <= 1;
      const collapsing = delta > 0 && progressRef.current < 1;
      const expanding = delta < 0 && progressRef.current > 0;
      if (!atTop || !(collapsing || expanding)) return;
      event.preventDefault();
      apply(progressRef.current + delta / collapseDistance());
    };

    const onWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) capture(event.deltaY, event);
    };

    let touchY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0].clientY;
    };
    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0].clientY;
      capture(touchY - currentY, event);
      touchY = currentY;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof Element && event.target.closest("input, textarea, select, button")) return;
      if (collapseKeys.has(event.key)) capture(collapseDistance(), event);
      if (expandKeys.has(event.key)) capture(-collapseDistance(), event);
    };

    const onScroll = () => {
      if (window.scrollY > 1 && progressRef.current < 1) apply(1);
    };

    onScroll();
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id={id}
      data-header-overlay
      data-collapsed={progress >= 1 || undefined}
      className={cn("group/hero", className)}
      style={{ minHeight: `calc(100dvh - ${HERO_COLLAPSE_RATIO * 100}dvh * ${progress})` }}
    >
      {children}
    </section>
  );
}
