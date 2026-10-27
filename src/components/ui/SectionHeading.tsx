import { Ornament } from "@/components/ui/Ornament";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  divider?: "ornament" | "flourish" | "line" | "none";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  divider = "ornament",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.3em]",
            tone === "dark" ? "text-gold" : "text-gold-light",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {divider === "ornament" && <Ornament align={align} tone={tone} className="mt-2" />}
      {divider === "flourish" && <Ornament variant="flourish" align={align} tone={tone} className="mt-1" />}
      {divider === "line" && (
        <div
          className={cn(
            "mt-6 flex items-center gap-3",
            tone === "dark" ? "text-gold" : "text-gold-light",
            align === "center" && "justify-center",
          )}
          aria-hidden
        >
          {align === "center" && <span className="h-px w-24 bg-linear-to-l from-current to-transparent sm:w-32" />}
          <span className="metallic-gold size-2 rotate-45" />
          <span className="h-px w-32 bg-linear-to-r from-current to-transparent sm:w-48" />
        </div>
      )}
    </div>
  );
}
