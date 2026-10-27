"use client";

import { useState } from "react";
import { TextField } from "@/components/ui/TextField";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function toPlainNumber(value: string) {
  const [whole, ...decimals] = value.replace(/[^\d.]/g, "").split(".");
  return decimals.length > 0 ? `${whole}.${decimals.join("").slice(0, 2)}` : whole;
}

type PriceFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
};

export function PriceField({ label, name, placeholder, className }: PriceFieldProps) {
  const [value, setValue] = useState("");

  return (
    <TextField
      variant="dark"
      label={label}
      name={name}
      placeholder={placeholder}
      className={className}
      inputMode="decimal"
      autoComplete="off"
      value={value}
      onFocus={() => setValue((current) => toPlainNumber(current))}
      onChange={(event) => setValue(toPlainNumber(event.target.value))}
      onBlur={() => setValue((current) => currency.format(Number(current) || 0))}
    />
  );
}
