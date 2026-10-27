export const fieldStyles =
  "w-full border border-black/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40";

export const darkFieldStyles =
  "w-full border-b border-white/40 bg-transparent py-2 text-sm font-medium text-white placeholder:text-white/60 transition-colors hover:border-gold-light focus:border-gold-light focus:shadow-[0_1px_0_0_var(--color-gold-light)] focus:outline-none";

export const roundControlStyles =
  "grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light";

export const labelStyles = "mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground/70";

export const darkLabelStyles = "mb-1 block text-xs font-semibold uppercase tracking-widest text-white/75";

export const darkOutlinedFieldStyles =
  "w-full border border-white/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 transition-colors hover:border-gold-light/70 focus:border-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light/30";

export const fieldVariantStyles = {
  light: fieldStyles,
  dark: darkFieldStyles,
  darkOutlined: darkOutlinedFieldStyles,
};

export const labelVariantStyles = {
  light: labelStyles,
  dark: darkLabelStyles,
  darkOutlined: darkLabelStyles,
};

export type FieldVariant = keyof typeof fieldVariantStyles;
