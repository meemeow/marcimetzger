import heroImage from "@/assets/images/modern-pool-home.jpg";
import { site } from "@/content/site";
import type { Stat } from "@/types/content";

export const hero = {
  eyebrow: `${site.name} - ${site.brokerage}`,
  heading: "Pahrump Realtor",
  tagline:
    "A local, family-run team helping Pahrump buyers and sellers with confidence, backed by real estate experience since 1995.",
  primaryCta: {
    label: "Find Your Home",
    href: "#listings",
  },
  secondaryCta: {
    label: "Get in Touch",
    href: "#contact",
  },
  sellerCta: {
    prompt: "Thinking of selling?",
    label: "Request a market analysis",
    href: "#contact",
  },
  badgeLabel: "Marci's Track Record",
  badgeSource: "Sources: HomeLight, Pahrump Valley Chamber",
  stats: [
    { value: "30+", label: "Years" },
    { value: "700+", label: "Closings" },
    { value: "Top 100", label: "Southern NV, 2019" },
  ] satisfies Stat[],
  scrollHint: "Begin Your Journey",
  image: {
    src: heroImage,
    alt: "Modern white two-story home with an infinity pool at sunset",
  },
};
