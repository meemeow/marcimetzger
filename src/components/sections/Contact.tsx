import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contact } from "@/content/contact";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { compactButtonStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

const iconBadgeStyles = "grid size-9 shrink-0 place-items-center rounded-full bg-cream text-gold xs:size-10";

export function Contact() {
  const { office, hours } = contact;

  return (
    <Section id="contact" tone="cream" containerClassName="max-w-(--breakpoint-2xl)">
      <div className="flex items-center gap-4 xs:gap-6 sm:gap-8">
        <p className="shrink-0 text-2xs font-semibold tracking-[0.2em] text-gold uppercase xs:text-xs xs:tracking-[0.3em]">
          {contact.eyebrow}
        </p>
        <span className="h-px flex-1 bg-gold/40" aria-hidden />
      </div>
      <h2 className="mt-3 font-serif text-3xl leading-tight font-medium xs:mt-4 xs:text-4xl sm:text-5xl xl:text-6xl">
        {contact.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70 xs:mt-4 xs:text-base">{contact.description}</p>
      <div className="mt-10 grid gap-6 xs:mt-12 xl:grid-cols-3">
        <div className="grid overflow-hidden rounded-md border border-gold/25 bg-white shadow-[0_24px_48px_rgb(0_0_0/0.25)] md:grid-cols-2 xl:col-span-2">
          <div className="flex flex-col gap-5 p-5 xs:gap-6 xs:p-6 sm:px-8 sm:py-12">
            <div className="flex items-center gap-3 xs:gap-4">
              <Image
                src={contact.emblem.src}
                alt={contact.emblem.alt}
                sizes="56px"
                className="size-11 shrink-0 object-contain xs:size-14"
              />
              <h3 className="font-serif text-xl leading-tight font-medium xs:text-2xl">{office.name}</h3>
            </div>
            <ul className="flex flex-col gap-3 text-xs xs:gap-4 xs:text-sm">
              <li className="flex items-start gap-4">
                <span className={iconBadgeStyles}>
                  <MapPin className="size-4" aria-hidden />
                </span>
                <address className="pt-1 leading-relaxed not-italic">
                  {office.address.street}
                  <br />
                  {office.address.locality}
                  <br />
                  {office.address.country}
                </address>
              </li>
              <li className="flex items-center gap-4">
                <span className={iconBadgeStyles}>
                  <Phone className="size-4" aria-hidden />
                </span>
                <a href={office.phone.href} className="transition-colors hover:text-gold">
                  {office.phone.display}
                </a>
              </li>
            </ul>
            <div className="border-t border-black/10 pt-5 xs:pt-6">
              <h4 className="text-2xs font-semibold tracking-widest text-foreground/70 uppercase xs:text-xs">{hours.title}</h4>
              <div className="mt-3 flex items-start gap-4 text-xs xs:mt-4 xs:text-sm">
                <span className={iconBadgeStyles}>
                  <Clock className="size-4" aria-hidden />
                </span>
                <div className="pt-1">
                  <p>{hours.summary}</p>
                  <p className="mt-2 text-foreground/70">{hours.note}</p>
                </div>
              </div>
            </div>
            <Button
              href={office.directions}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineDark"
              className={cn("mt-auto w-full", compactButtonStyles)}
            >
              <Navigation className="size-4" aria-hidden />
              {office.directionsLabel}
            </Button>
          </div>
          <div className="relative h-72 md:h-auto md:min-h-96">
            <iframe
              src={contact.map.src}
              title={contact.map.title}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
