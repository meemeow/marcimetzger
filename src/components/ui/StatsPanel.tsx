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
    <GoldPlate innerClassName="px-5 pt-5 pb-4" {...props}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
        <span className="h-px flex-1 bg-gold-light/30" aria-hidden />
        {label}
        <span className="h-px flex-1 bg-gold-light/30" aria-hidden />
      </p>
      <dl className="mt-5 grid grid-cols-3 divide-x divide-gold-light/20">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center justify-end px-2 text-center">
            <dt className="mt-2 text-[11px] uppercase leading-snug tracking-[0.18em] text-white/65">{stat.label}</dt>
            <dd className="font-serif text-[2rem] leading-none whitespace-nowrap">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 border-t border-gold-light/15 pt-3 text-center font-serif text-sm text-white/50 italic">
        {source}
      </p>
    </GoldPlate>
  );
}
