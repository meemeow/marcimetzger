import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { fieldVariantStyles, labelVariantStyles, type FieldVariant } from "@/lib/styles";

type TextAreaFieldProps = ComponentProps<"textarea"> & {
  label: string;
  name: string;
  variant?: FieldVariant;
};

export function TextAreaField({ label, name, variant = "light", className, ...props }: TextAreaFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelVariantStyles[variant]}>
        {label}
      </label>
      <textarea id={name} name={name} className={cn(fieldVariantStyles[variant], "min-h-20 resize-y xs:min-h-24")} {...props} />
    </div>
  );
}
