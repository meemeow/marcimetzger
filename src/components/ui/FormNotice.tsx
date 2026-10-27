"use client";

import { useEffect, useEffectEvent } from "react";
import { Info } from "lucide-react";

type FormNoticeProps = {
  message: string;
  durationMs?: number;
  onDismiss?: () => void;
};

export function FormNotice({ message, durationMs, onDismiss }: FormNoticeProps) {
  const dismiss = useEffectEvent(() => onDismiss?.());

  useEffect(() => {
    if (!durationMs) return;
    const timer = setTimeout(dismiss, durationMs);
    return () => clearTimeout(timer);
  }, [durationMs]);

  return (
    <div role="status" className="relative overflow-hidden border-l-2 border-gold bg-cream">
      <p className="flex items-start gap-3 px-4 py-3 text-sm text-foreground/80">
        <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
        {message}
      </p>
      {durationMs && (
        <span
          aria-hidden
          style={{ animationDuration: `${durationMs}ms` }}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left animate-progress bg-gold [animation-direction:reverse] motion-reduce:hidden"
        />
      )}
    </div>
  );
}
