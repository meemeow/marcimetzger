import dividerOrnament from "@/assets/svg/ornament-divider.svg";
import flourishOrnament from "@/assets/svg/ornament-flourish.svg";
import { cn } from "@/lib/utils";

const variants = {
  divider: { src: dividerOrnament.src, className: "aspect-[249.3/26.6]" },
  flourish: { src: flourishOrnament.src, className: "aspect-[300/40]" },
};

type OrnamentProps = {
  variant?: keyof typeof variants;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function Ornament({ variant = "divider", align = "center", tone = "dark", className }: OrnamentProps) {
  const { src, className: aspectClassName } = variants[variant];
  return (
    <div className={cn("flex", align === "center" ? "justify-center" : "justify-start", className)} aria-hidden>
      <span
        className={cn(
          "ornament block w-60 sm:w-72 lg:w-80",
          aspectClassName,
          tone === "light" ? "metallic-gold" : "metallic-gold-muted",
        )}
        style={{ maskImage: `url(${src})` }}
      />
    </div>
  );
}
