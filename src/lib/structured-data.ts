import { hero } from "@/content/hero";
import { site } from "@/content/site";

export const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  description: site.description,
  url: site.url,
  image: new URL(hero.image.src.src, site.url).toString(),
  telephone: site.phone.href.replace("tel:", ""),
  openingHours: site.hours.schedule,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.brokerage,
  },
};

export function toJsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
