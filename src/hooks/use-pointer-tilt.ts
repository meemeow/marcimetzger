"use client";

import type { PointerEvent } from "react";

const followMs = 80;
const settleMs = 500;

type PointerTiltOptions = {
  maxTilt: number;
  perspective: string;
  liftPx?: number;
};

export function usePointerTilt({ maxTilt, perspective, liftPx = 2 }: PointerTiltOptions) {
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    element.style.setProperty("--tilt-x", String(x));
    element.style.transform = `perspective(${perspective}) translateY(-${liftPx}px) rotateY(${x * maxTilt}deg) rotateX(${y * -maxTilt}deg)`;
    element.style.transition = `transform ${followMs}ms linear, box-shadow 200ms ease`;
  }

  function onPointerLeave(event: PointerEvent<HTMLElement>) {
    const element = event.currentTarget;
    element.style.removeProperty("--tilt-x");
    element.style.transform = "";
    element.style.transition = `transform ${settleMs}ms ease, box-shadow 200ms ease`;
  }

  return { onPointerMove, onPointerLeave };
}
