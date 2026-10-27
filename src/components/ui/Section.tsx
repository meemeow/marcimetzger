import type { ComponentProps } from "react";
import { Container } from "@/components/ui/Container";
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
      className={cn("py-20 lg:py-28", tones[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
