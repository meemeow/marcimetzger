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
    sendingLabel: "Sending...",
    subject: "New message from the Marci Metzger website",
    requiredNote: "Required Fields",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    messagePlaceholder: "How can Marci help?",
    successMessage: "Thank you! Your message was sent and Marci will get back to you soon.",
    errorMessage: "Sorry, your message could not be sent. Please try again or call (206) 919-6886.",
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
