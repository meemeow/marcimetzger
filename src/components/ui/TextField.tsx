import type { ComponentProps } from "react";
import { fieldVariantStyles, labelVariantStyles, type FieldVariant } from "@/lib/styles";

type TextFieldProps = ComponentProps<"input"> & {
  label: string;
  name: string;
  variant?: FieldVariant;
};

export function TextField({ label, name, variant = "light", className, ...props }: TextFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelVariantStyles[variant]}>
        {label}
        {props.required && <span className="text-gold-light">*</span>}
      </label>
      <input id={name} name={name} className={fieldVariantStyles[variant]} {...props} />
    </div>
  );
}
