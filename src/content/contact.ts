import emblem from "@/assets/images/marci-metzger-badge.png";
import { site } from "@/content/site";

export const contact = {
  eyebrow: "Get in Touch",
  title: "Call or Visit",
  description:
    "Whether you're buying, selling or just exploring Pahrump, Marci is happy to talk. Stop by the office on Highway 160, call any day from 8 am to 7 pm, or send a quick message.",
  office: {
    name: `${site.name} - ${site.brokerage}`,
    address: site.address,
    phone: site.phone,
    directions: site.maps.directions,
    directionsLabel: "Get Directions",
  },
  hours: {
    title: "Office Hours",
    ...site.hours,
  },
  form: {
    title: "Send a Message!",
    submitLabel: "Send",
    requiredNote: "Required Fields",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    messagePlaceholder: "How can Marci help?",
    notice: "Online messages are coming soon. Please call (206) 919-6886 and Marci will be happy to help.",
  },
  map: {
    src: site.maps.embed,
    title: "Map showing The Ridge Realty Group office in Pahrump, Nevada",
  },
  emblem: {
    src: emblem,
    alt: "Marci Metzger Homes monogram in a gold hexagon",
  },
};
