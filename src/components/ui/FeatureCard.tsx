import Image from "next/image";
import type { Feature } from "@/types/content";
import { FormattedText } from "@/components/ui/FormattedText";
import { GoldPlate } from "@/components/ui/GoldPlate";
import { cn } from "@/lib/utils";

const imagePositions = {
  center: "object-center",
  right: "object-right",
};

type FeatureCardProps = {
  feature: Feature;
  index: number;
  className?: string;
};

export function FeatureCard({ feature, index, className }: FeatureCardProps) {
  return (
    <article className={cn("h-full", className)}>
      <GoldPlate className="h-full" innerClassName="flex h-full flex-col p-4">
        <div className="relative aspect-3/2 overflow-hidden rounded-lg border-2 border-white/20">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            fill
            placeholder="blur"
            draggable={false}
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 60vw, 75vw"
            className={cn("object-cover", imagePositions[feature.imagePosition ?? "center"])}
          />
        </div>
        <div className="mt-10 grid grid-cols-[auto_1fr] gap-x-5 pb-6">
          <span className="font-serif text-5xl leading-none text-gold-light italic">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-serif text-2xl leading-tight font-medium text-white lg:text-3xl">{feature.title}</h3>
            <div className="mt-4 space-y-3">
              {feature.description.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-white/65">
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </GoldPlate>
    </article>
  );
}
