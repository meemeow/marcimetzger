"use client";

import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { contact } from "@/content/contact";
import { buttonStyles } from "@/components/ui/Button";
import { FormNotice } from "@/components/ui/FormNotice";
import { GoldPlate } from "@/components/ui/GoldPlate";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { form } = contact;
  const titleId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <GoldPlate className="self-center [--plate-fill:var(--color-charcoal)]">
      <form onSubmit={handleSubmit} aria-labelledby={titleId} className="flex flex-col gap-3 p-5 xs:gap-4 xs:p-6 sm:p-8">
        <h3 id={titleId} className="mb-1 text-center font-serif text-2xl font-medium xs:mb-2 xs:text-3xl sm:text-4xl">
          {form.title}
        </h3>
        <TextField label={form.labels.name} name="name" autoComplete="name" variant="darkOutlined" />
        <TextField label={form.labels.email} name="email" type="email" autoComplete="email" required variant="darkOutlined" />
        <TextAreaField label={form.labels.message} name="message" placeholder={form.messagePlaceholder} variant="darkOutlined" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xs text-white/70 xs:text-xs">
            <span className="text-gold-light">*</span> {form.requiredNote}
          </p>
          <button type="submit" className={buttonStyles("solid", "min-h-9 gap-2 px-6 text-2xs xs:min-h-10 xs:gap-3 xs:px-10 xs:text-xs")}>
            <Send className="size-4" aria-hidden />
            {form.submitLabel}
          </button>
        </div>
        {submitted && <FormNotice message={form.notice} />}
      </form>
    </GoldPlate>
  );
}
