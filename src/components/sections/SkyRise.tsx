"use client";

import { useEffect, useRef } from "react";
import { SKY_RISE_END_PX, SKY_RISE_START_PX } from "@/lib/constants";

export function SkyRise() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;

    const update = () => {
      const top = section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (SKY_RISE_START_PX - top) / (SKY_RISE_START_PX - SKY_RISE_END_PX)));
      layer.style.height = `${Math.max(0, top) * progress}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={layerRef} aria-hidden className="pointer-events-none absolute inset-x-0 bottom-full h-0 bg-sky" />;
}
