import chamber from "@/assets/images/pahrump-valley-chamber-logo.jpg";
import equalHousing from "@/assets/images/equal-housing-opportunity-logo.png";
import lasVegasRealtors from "@/assets/images/las-vegas-realtors-logo.png";
import realtor from "@/assets/images/realtor-logo.jpg";
import ridgeRealty from "@/assets/images/ridge-realty-group-logo.png";
import type { Affiliation } from "@/types/content";

export const affiliations = {
  eyebrow: "Affiliations",
  title: "Memberships & Credentials",
  items: [
    {
      name: "The Ridge Realty Group",
      description: "The Pahrump brokerage Marci co-owns and runs as managing broker.",
      logo: { src: ridgeRealty, alt: "The Ridge Realty Group" },
    },
    {
      name: "REALTOR®",
      description: "A member of the National Association of REALTORS®, pledged to its Code of Ethics.",
      logo: { src: realtor, alt: "Realtor, member of the National Association of Realtors" },
    },
    {
      name: "Equal Housing Opportunity",
      description: "Committed to the Fair Housing Act, with no discrimination in buying or selling a home.",
      logo: { src: equalHousing, alt: "Equal Housing Opportunity" },
    },
    {
      name: "Pahrump Valley Chamber",
      description: "A member business of the Pahrump Valley Chamber of Commerce, rooted in the local community.",
      logo: { src: chamber, alt: "Pahrump Valley Chamber of Commerce" },
    },
    {
      name: "Las Vegas REALTORS® MLS",
      description: "Listings appear on the MLS that serves Southern Nevada, Pahrump included.",
      logo: { src: lasVegasRealtors, alt: "Las Vegas REALTORS" },
    },
  ] satisfies Affiliation[],
};
