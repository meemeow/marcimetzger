import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contact } from "@/content/contact";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";

const iconBadgeStyles = "grid size-10 shrink-0 place-items-center rounded-full bg-cream text-gold";

export function Contact() {
  const { office, hours } = contact;

  return (
    <Section id="contact" tone="cream" containerClassName="max-w-(--breakpoint-2xl)">
      <div className="flex items-center gap-6 sm:gap-8">
        <p className="shrink-0 text-xs font-semibold tracking-[0.3em] text-gold uppercase">{contact.eyebrow}</p>
        <span className="h-px flex-1 bg-gold/40" aria-hidden />
      </div>
      <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl lg:text-6xl">{contact.title}</h2>
      <p className="mt-4 leading-relaxed text-foreground/70">{contact.description}</p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="grid overflow-hidden bg-white shadow-sm md:grid-cols-2 lg:col-span-2">
          <div className="flex flex-col gap-6 p-6 sm:px-8 sm:py-12">
            <div className="flex items-center gap-4">
              <Image src={contact.emblem.src} alt={contact.emblem.alt} sizes="56px" className="size-14 shrink-0 object-contain" />
              <h3 className="font-serif text-2xl leading-tight font-medium">{office.name}</h3>
            </div>
            <ul className="flex flex-col gap-4 text-sm">
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
            <div className="border-t border-black/10 pt-6">
              <h4 className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">{hours.title}</h4>
              <div className="mt-4 flex items-start gap-4 text-sm">
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
              className="mt-auto w-full"
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
