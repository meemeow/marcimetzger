import ailanto14 from "@/assets/images/property-ailanto-14.jpg";
import ailanto45 from "@/assets/images/property-ailanto-45.jpg";
import ailanto50 from "@/assets/images/property-ailanto-50.jpg";
import beaconRidge41 from "@/assets/images/property-beacon-ridge-41.jpg";
import beaconRidge53 from "@/assets/images/property-beacon-ridge-53.jpg";
import beaconRidge54 from "@/assets/images/property-beacon-ridge-54.jpg";
import roseworthy52 from "@/assets/images/property-roseworthy-52.jpg";
import mountainPond from "@/assets/images/pahrump-mountain-pond.jpg";
import type { ImageAsset, SelectOption } from "@/types/content";

const toOptions = (values: string[]): SelectOption[] => values.map((value) => ({ label: value, value }));

const locations = [
  "Alamo",
  "Alton",
  "Amargosa Valley",
  "Beatty",
  "Beryl",
  "Blue Diamond",
  "Boulder City",
  "Brian Head",
  "Cal Nev Ari",
  "Caliente",
  "Cedar City",
  "Cold Creek",
  "Crystal",
  "Duck Creek Village",
  "Dyer",
  "Elko",
  "Ely",
  "Goldfield",
  "Goodsprings",
  "Hatch",
  "Henderson",
  "Indian Springs",
  "Jean",
  "Las Vegas",
  "Laughlin",
  "Logandale",
  "Mc Gill",
  "Mesquite",
  "Moapa",
  "Mount Charleston",
  "Mountain Springs",
  "Nelson",
  "North Las Vegas",
  "Overton",
  "Pahrump",
  "Palm Gardens",
  "Panaca",
  "Parowan",
  "Pioche",
  "Ruth",
  "Sandy Valley",
  "Searchlight",
  "Tonopah",
  "Other",
];

export const listingSearch = {
  eyebrow: "Pahrump & Nye County",
  title: "Find Your Dream Home",
  tagline: "Luxury living. Wide open spaces. Endless possibilities.",
  formTitle: "Search Listings",
  submitLabel: "Search",
  labels: {
    location: "Location",
    type: "Type",
    sortBy: "Sort By",
    bedrooms: "Bedrooms",
    baths: "Baths",
    minPrice: "Min Price",
    maxPrice: "Max Price",
  },
  notice: "Live MLS search is coming soon. Call Marci at (206) 919-6886 for today's listings.",
  background: {
    src: mountainPond,
    alt: "Golf course pond with fountains and mountains in Pahrump, Nevada",
  },
  locations: [{ label: "Any", value: "" }, ...toOptions(locations)],
  propertyTypes: [{ label: "Any", value: "" }, ...toOptions(["Land", "Residential Lease", "High Rise", "Residential"])],
  bedrooms: [{ label: "Any Number", value: "" }, { label: "Studio", value: "0" }, ...toOptions(["1+", "2+", "3+", "4+", "5+", "6+"])],
  baths: [{ label: "Any Number", value: "" }, ...toOptions(["1+", "2+", "3+", "4+", "5+", "6+"])],
  sortBy: [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Least Expensive to Most", value: "price-asc" },
    { label: "Most Expensive to Least", value: "price-desc" },
    { label: "Bedrooms (Low to High)", value: "beds-asc" },
    { label: "Bedrooms (High to Low)", value: "beds-desc" },
    { label: "Bathrooms (Low to High)", value: "baths-asc" },
    { label: "Bathrooms (High to Low)", value: "baths-desc" },
  ] satisfies SelectOption[],
};

export const photoGallery = {
  eyebrow: "Around Pahrump",
  title: "Photo Gallery",
  images: [
    { src: roseworthy52, alt: "Aerial view of a resort-style community pool near a golf course lake" },
    { src: beaconRidge41, alt: "Aerial view of homes along a golf course lake with mountains behind" },
    { src: ailanto50, alt: "Aerial view of a home with a private pool and spa backing onto open desert" },
    { src: ailanto45, alt: "Aerial view of single-story homes with desert landscaping and mountain views" },
    { src: beaconRidge53, alt: "Aerial view of a community clubhouse with pickleball courts" },
    { src: beaconRidge54, alt: "Aerial view of community tennis courts beside a golf course" },
    { src: ailanto14, alt: "Sunlit living room with a red leather recliner and floor-to-ceiling windows" },
  ] satisfies ImageAsset[],
};
