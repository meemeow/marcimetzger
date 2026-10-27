"use client";

import { useEffect } from "react";
import { SMOOTH_SCROLL_EASE } from "@/lib/constants";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let target = 0;
    let current = 0;
    let lastY = 0;
    let anchor: HTMLElement | null = null;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    const clamp = (value: number) => Math.min(maxScroll(), Math.max(0, value));
    const anchorOffset = () => parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

    const tick = () => {
      if (Math.abs(window.scrollY - lastY) > 2) {
        frame = 0;
        anchor = null;
        return;
      }
      if (anchor) target = clamp(anchor.getBoundingClientRect().top + window.scrollY - anchorOffset());
      const distance = target - current;
      if (Math.abs(distance) <= 0.5) {
        window.scrollTo(0, target);
        frame = 0;
        anchor = null;
        return;
      }
      current += distance * SMOOTH_SCROLL_EASE;
      window.scrollTo(0, current);
      lastY = window.scrollY;
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame) return;
      current = window.scrollY;
      lastY = window.scrollY;
      frame = requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey) return;
      if ((event.target as Element).closest("[data-native-scroll]")) return;
      event.preventDefault();
      if (!frame || anchor) target = window.scrollY;
      anchor = null;
      target = clamp(target + event.deltaY);
      start();
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const element = id ? document.getElementById(id) : null;
      if (!element) return;
      event.preventDefault();
      history.pushState(null, "", `#${id}`);
      anchor = element;
      start();
    };

    const smoothWheel = !("ontouchstart" in window);
    if (smoothWheel) window.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
