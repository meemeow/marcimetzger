"use client";

import { useRef, useState, type FocusEvent, type PointerEvent } from "react";
import Image from "next/image";
import diamond from "@/assets/svg/diamond-3d.svg";
import { StatsPanel } from "@/components/ui/StatsPanel";
import { usePointerTilt } from "@/hooks/use-pointer-tilt";
import type { Stat } from "@/types/content";
import { cn } from "@/lib/utils";

const cursorOffset = 20;
const edgeGap = 16;

type Position = {
  x: number;
  y: number;
};

type HeroBadgeProps = {
  label: string;
  source: string;
  stats: Stat[];
};

export function HeroBadge({ label, source, stats }: HeroBadgeProps) {
  const [cursor, setCursor] = useState<Position | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tilt = usePointerTilt({ maxTilt: 28, perspective: "150px" });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const panel = panelRef.current;
    const maxX = window.innerWidth - (panel?.offsetWidth ?? 0) - edgeGap;
    const maxY = window.innerHeight - (panel?.offsetHeight ?? 0) - edgeGap;
    setCursor({
      x: Math.min(event.clientX + cursorOffset, maxX),
      y: Math.min(event.clientY + cursorOffset, maxY),
    });
  }

  function handleFocus(event: FocusEvent<HTMLButtonElement>) {
    if (event.currentTarget.matches(":focus-visible")) setCursor(null);
  }

  return (
    <div className="group/badge" onPointerMove={handlePointerMove}>
      <button
        type="button"
        aria-label={label}
        aria-describedby="hero-badge-panel"
        onFocus={handleFocus}
        {...tilt}
        className="gold-plated relative flex items-center justify-center rounded-md p-0.5 shadow-[0_4px_18px_rgb(0_0_0/0.45),inset_0_1px_0_rgb(255_255_255/0.08)] transition duration-300 hover:shadow-[0_6px_24px_rgb(210_180_124/0.35),inset_0_1px_0_rgb(255_255_255/0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light xs:p-1 sm:p-1.5"
      >
        <Image
          src={diamond}
          alt=""
          sizes="28px"
          className="size-5 xs:size-6 sm:size-6.5"
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(115deg,transparent_40%,rgb(255_255_255/0.22)_50%,transparent_60%)] bg-size-[250%_100%] bg-position-[calc(50%_-_var(--tilt-x,0)_*_120%)_0] opacity-0 transition-[opacity,background-position] duration-100 group-hover/badge:opacity-100"
          aria-hidden
        />
      </button>
      <StatsPanel
        ref={panelRef}
        id="hero-badge-panel"
        role="tooltip"
        label={label}
        stats={stats}
        source={source}
        style={cursor ? { left: cursor.x, top: cursor.y } : undefined}
        className={cn(
          "pointer-events-none invisible z-50 w-[min(26rem,calc(100vw-2rem))] translate-y-2 opacity-0 transition duration-300 group-has-focus-visible/badge:visible group-has-focus-visible/badge:translate-y-0 group-has-focus-visible/badge:opacity-100 group-hover/badge:visible group-hover/badge:translate-y-0 group-hover/badge:opacity-100",
          cursor ? "fixed" : "absolute top-full left-0 mt-4 max-lg:right-0 max-lg:mx-auto",
        )}
      />
    </div>
  );
}
