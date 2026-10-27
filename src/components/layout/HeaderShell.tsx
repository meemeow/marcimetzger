"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SKY_RISE_END_PX } from "@/lib/constants";

type HeaderTone = "top" | "image" | "sky" | "solid";

type HeaderShellProps = {
  children: ReactNode;
};

export function HeaderShell({ children }: HeaderShellProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [tone, setTone] = useState<HeaderTone>("top");

  useEffect(() => {
    const update = () => {
      const midline = (headerRef.current?.offsetHeight ?? 0) / 2;
      const overlays = Array.from(document.querySelectorAll<HTMLElement>("[data-header-overlay]"));
      const underSky = overlays.some((element) => {
        const { top } = element.getBoundingClientRect();
        return element.dataset.headerOverlay === "sky" && top > 0 && top <= SKY_RISE_END_PX;
      });
      const overImage = overlays.some((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        return top <= midline && bottom >= midline;
      });
      setTone(window.scrollY <= 1 ? "top" : underSky ? "sky" : overImage ? "image" : "solid");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      data-tone={tone}
      className="group fixed inset-x-0 top-0 z-50 border-b border-transparent text-white transition-all duration-300 data-[tone=image]:border-white/15 data-[tone=image]:bg-white/10 data-[tone=image]:shadow-[0_8px_32px_rgb(0_0_0/0.15),inset_0_1px_0_rgb(255_255_255/0.25)] data-[tone=image]:backdrop-blur-2xl data-[tone=image]:backdrop-saturate-150 data-[tone=sky]:border-white/10 data-[tone=solid]:border-white/40 data-[tone=solid]:bg-white/70 data-[tone=solid]:text-foreground data-[tone=solid]:shadow-[0_8px_32px_rgb(0_0_0/0.08),inset_0_1px_0_rgb(255_255_255/0.6)] data-[tone=solid]:backdrop-blur-xl data-[tone=solid]:backdrop-saturate-150"
    >
      {children}
    </header>
  );
}
