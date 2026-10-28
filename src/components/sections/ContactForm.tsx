"use client";

import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { contact } from "@/content/contact";
import { buttonStyles } from "@/components/ui/Button";
import { FormNotice } from "@/components/ui/FormNotice";
import { GoldPlate } from "@/components/ui/GoldPlate";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { WEB3FORMS_ENDPOINT } from "@/lib/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { form } = contact;
  const titleId = useId();
  const isSending = status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    formData.append("subject", form.subject);

    setStatus("sending");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const result: { success: boolean } = await response.json();
      if (!result.success) throw new Error("Message was not accepted");
      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
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
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xs text-white/70 xs:text-xs">
            <span className="text-gold-light">*</span> {form.requiredNote}
          </p>
          <button
            type="submit"
            disabled={isSending}
            className={buttonStyles(
              "solid",
              "min-h-9 gap-2 px-6 text-2xs disabled:cursor-wait disabled:opacity-70 xs:min-h-10 xs:gap-3 xs:px-10 xs:text-xs",
            )}
          >
            <Send className="size-4" aria-hidden />
            {isSending ? form.sendingLabel : form.submitLabel}
          </button>
        </div>
        {status === "success" && <FormNotice message={form.successMessage} />}
        {status === "error" && <FormNotice message={form.errorMessage} />}
      </form>
    </GoldPlate>
  );
}
