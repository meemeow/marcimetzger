import Image from "next/image";
import wordmark from "@/assets/images/marci-metzger-logo-wordmark.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, imageClassName, tone = "dark" }: LogoProps) {
  return (
    <a href="#home" aria-label="Marci Metzger Homes, back to top" className={cn("inline-block", className)}>
      <Image
        src={wordmark}
        alt="Marci Metzger Homes"
        sizes="270px"
        loading="eager"
        className={cn("h-full w-auto", tone === "light" && "invert", imageClassName)}
      />
    </a>
  );
}
