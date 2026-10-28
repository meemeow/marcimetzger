import type { ComponentProps } from "react";
import { sectionGutterStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

const tones = {
  white: "bg-white",
  cream: "bg-cream",
  dark: "bg-ink text-white",
  charcoal: "bg-charcoal text-white",
};

const darkTones = new Set<keyof typeof tones>(["dark", "charcoal"]);

type SectionProps = ComponentProps<"section"> & {
  tone?: keyof typeof tones;
  containerClassName?: string;
};

export function Section({ tone = "white", className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section
      data-header-overlay={darkTones.has(tone) || undefined}
      className={cn("py-16 xs:py-20 lg:py-28", sectionGutterStyles, tones[tone], className)}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-7xl", containerClassName)}>{children}</div>
    </section>
  );
}
