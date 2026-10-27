import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid:
    "bg-white text-black shadow-[0_10px_28px_rgb(0_0_0/0.35)] hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_16px_36px_rgb(0_0_0/0.45)]",
  outline:
    "border border-white bg-white/10 text-white shadow-[0_10px_28px_rgb(0_0_0/0.3),inset_0_1px_0_rgb(255_255_255/0.25)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_16px_36px_rgb(0_0_0/0.4)]",
  dark: "bg-ink text-white shadow-[0_10px_28px_rgb(0_0_0/0.2)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgb(0_0_0/0.28)]",
  outlineDark:
    "border border-ink bg-white text-ink shadow-[0_10px_28px_rgb(0_0_0/0.12)] hover:-translate-y-0.5 hover:bg-ink hover:text-white hover:shadow-[0_16px_36px_rgb(0_0_0/0.28)]",
};

export type ButtonVariant = keyof typeof variants;

export function buttonStyles(variant: ButtonVariant = "solid", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-3 px-7 text-sm font-semibold uppercase tracking-widest transition duration-300 active:translate-y-0 active:scale-[0.97] active:shadow-[0_4px_12px_rgb(0_0_0/0.3)] active:duration-100",
    variants[variant],
    className,
  );
}

type ButtonProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
};

export function Button({ className, variant, ...props }: ButtonProps) {
  return <a className={buttonStyles(variant, className)} {...props} />;
}
