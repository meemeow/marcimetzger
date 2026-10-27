import { cn } from "@/lib/utils";

const letterDelayMs = 80;

type GlowHeadingProps = {
  text: string;
  id?: string;
  className?: string;
};

export function GlowHeading({ text, id, className }: GlowHeadingProps) {
  return (
    <h3 id={id} className={cn("font-script font-semibold text-white", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {Array.from(text).map((character, index) =>
          character === " " ? (
            " "
          ) : (
            <span
              key={index}
              style={{ animationDelay: `${index * letterDelayMs}ms` }}
              className="inline-block text-shadow-[0_0_6px_rgb(255_200_160/0.12)] will-change-[transform,filter,opacity] motion-safe:animate-letter-glow"
            >
              {character}
            </span>
          ),
        )}
      </span>
    </h3>
  );
}
