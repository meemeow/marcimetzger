import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type GoldPlateProps = ComponentProps<"div"> & {
  innerClassName?: string;
};

export function GoldPlate({ className, innerClassName, children, ...props }: GoldPlateProps) {
  return (
    <div
      className={cn(
        "gold-plated rounded-md p-1 [--plate-fill:var(--color-ink)] text-white shadow-[0_24px_48px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.1),inset_0_-1px_0_rgb(0_0_0/0.5)]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "rounded-sm border border-gold-light/20 bg-linear-to-b from-white/3 to-transparent",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
