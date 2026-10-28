import type { ComponentProps } from "react";
import type { Stat } from "@/types/content";
import { GoldPlate } from "@/components/ui/GoldPlate";

type StatsPanelProps = ComponentProps<"div"> & {
  label: string;
  stats: Stat[];
  source: string;
};

export function StatsPanel({ label, stats, source, ...props }: StatsPanelProps) {
  return (
    <GoldPlate innerClassName="px-3 pt-3 pb-2.5 xs:px-5 xs:pt-5 xs:pb-4" {...props}>
      <p className="flex items-center gap-3 text-3xs font-semibold uppercase tracking-[0.2em] text-gold-light xs:text-xs xs:tracking-[0.3em]">
        <span className="h-px flex-1 bg-gold-light/30" aria-hidden />
        {label}
        <span className="h-px flex-1 bg-gold-light/30" aria-hidden />
      </p>
      <dl className="mt-3 grid grid-cols-3 divide-x divide-gold-light/20 xs:mt-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center justify-end px-1 text-center xs:px-2">
            <dt className="mt-1.5 text-3xs uppercase leading-snug tracking-wider text-white/65 xs:mt-2 xs:text-2xs xs:tracking-[0.18em]">
              {stat.label}
            </dt>
            <dd className="font-serif text-xl leading-none whitespace-nowrap xs:text-[2rem]">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 border-t border-gold-light/15 pt-2 text-center font-serif text-2xs text-white/50 italic xs:mt-5 xs:pt-3 xs:text-sm">
        {source}
      </p>
    </GoldPlate>
  );
}
