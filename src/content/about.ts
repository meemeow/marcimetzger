import portrait from "@/assets/images/marci-metzger-portrait.jpg";
import { site } from "@/content/site";
import type { Highlight, Stat } from "@/types/content";

export const about = {
  eyebrow: "Meet Your Realtor",
  title: site.name,
  headline: "Realtor for Nearly 3 Decades",
  bio: [
    "Marci started her real estate career in Washington State in 1995 and went on to become a licensed broker. Today she proudly calls the Pahrump valley home and serves buyers and sellers with The Ridge Realty Group.",
    "Whether you are buying your first home or selling one you love, you work directly with Marci and her family from the first call to closing day.",
  ],
  highlights: [
    {
      title: "Family-Run Team",
      description: "Marci works alongside her family, including her son James, so every client gets a close-knit team.",
    },
    {
      title: "Rooted in Pahrump",
      description: "A proud local sponsor of rodeo posters, t-ball jerseys and a non-profit community center.",
    },
    {
      title: "Buyers and Sellers",
      description: "Condos, luxury homes or fixer-uppers, Marci guides both sides of the move.",
    },
  ] satisfies Highlight[],
  phone: site.phone,
  phoneLabel: "Call Marci",
  messageCta: {
    label: "Send a Message",
    href: "#contact",
  },
  portrait: {
    src: portrait,
    alt: "Portrait of Marci Metzger in a navy blazer",
  },
  statsLabel: "By the Numbers",
  statsSource: "Sources: HomeLight, marcimetzger.com",
  stats: [
    { value: "86%", label: "Of listings sold" },
    { value: "90", label: "Clients helped in 2021" },
    { value: "$28.5M", label: "Closed in sales in 2021" },
  ] satisfies Stat[],
};
