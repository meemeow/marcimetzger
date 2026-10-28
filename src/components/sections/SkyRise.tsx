"use client";

import { useEffect, useRef } from "react";
import { getSkyRiseRange } from "@/lib/sky-rise";

const seamOverlapPx = 1;

export function SkyRise() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;

    const update = () => {
      const top = section.getBoundingClientRect().top;
      const { startPx, endPx } = getSkyRiseRange(section);
      const progress = Math.min(1, Math.max(0, (startPx - top) / (startPx - endPx)));
      layer.style.height = `${(Math.max(0, top) + seamOverlapPx) * progress}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={layerRef} aria-hidden className="pointer-events-none absolute inset-x-0 bottom-full h-0 translate-y-px bg-sky" />;
}
