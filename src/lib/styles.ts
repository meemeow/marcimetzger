export const fieldStyles =
  "w-full border border-black/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40";

export const darkFieldStyles =
  "w-full border-b border-white/40 bg-transparent py-1.5 text-xs font-medium xs:py-2 xs:text-sm text-white placeholder:text-white/60 transition-colors hover:border-gold-light focus:border-gold-light focus:shadow-[0_1px_0_0_var(--color-gold-light)] focus:outline-none";

export const sectionGutterStyles = "px-5 xs:px-[8vw] lg:px-[11vw]";

export const compactButtonStyles =
  "min-h-10 gap-2 px-4 text-2xs tracking-wide text-nowrap xs:min-h-11 xs:px-5 xs:text-xs xs:tracking-widest sm:min-h-12 sm:gap-3 sm:px-7 sm:text-sm";

export const roundControlStyles =
  "grid size-9 shrink-0 place-items-center rounded-full xs:size-11 border border-white/20 bg-white/5 text-white transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light";

export const labelStyles = "mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground/70";

export const darkLabelStyles = "mb-0.5 block text-2xs font-semibold uppercase tracking-widest text-white/75 xs:mb-1 xs:text-xs";

export const darkOutlinedFieldStyles =
  "w-full border border-white/30 bg-white/5 px-3 py-2 text-xs text-white xs:px-4 xs:py-3 xs:text-sm placeholder:text-white/50 transition-colors hover:border-gold-light/70 focus:border-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light/30";

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
