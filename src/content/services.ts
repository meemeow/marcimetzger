import handshake from "@/assets/images/service-expertise-handshake.jpg";
import homePool from "@/assets/images/service-home-pool.jpg";
import houseKeys from "@/assets/images/service-house-keys.jpg";
import kitchen from "@/assets/images/service-kitchen.jpg";
import modernHome from "@/assets/images/service-modern-home.jpg";
import realEstate from "@/assets/images/service-real-estate.jpg";
import type { Feature } from "@/types/content";

export const services = {
  eyebrow: "Our Services",
  title: "Get It Sold",
  features: [
    {
      title: "Top Residential Sales Last 5 Years",
      description: [
        "We helped **nearly 90 clients** in 2021, and closed **28.5 million in sales**! Our team works hard every day to grow and learn, so that we may continue to excel in our market. _Our clients deserve our best_, & we want to make sure our best is better every year.",
      ],
      image: { src: kitchen, alt: "Open-concept kitchen with a marble island and pendant lights" },
    },
    {
      title: "Don't Just List It...",
      description: [
        "**Get it SOLD!** We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you **top dollar** for your home.",
      ],
      image: { src: homePool, alt: "Spanish-style home with a backyard pool at dusk" },
    },
    {
      title: "Guide to Buyers",
      description: [
        "_Nobody knows the market like we do._ Enjoy having a pro at your service. **Market analysis, upgrades lists, contractors on speed dial**, & more!",
      ],
      image: { src: houseKeys, alt: "House keys with a red house-shaped keychain on a wooden surface" },
      imagePosition: "right",
    },
    {
      title: "Real Estate Done Right",
      description: [
        "_Nervous about your property adventure? Don't be._ Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get **the best experience possible**!",
      ],
      image: { src: realEstate, alt: "Bright living room with a white pallet coffee table and potted plants" },
    },
    {
      title: "Commercial & Residential",
      description: [
        "Large or small, **condo or mansion**, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! _We live, work, and play in this community._ Happy to help you find where to put your hard-earned dollars.",
      ],
      image: { src: modernHome, alt: "Modern concrete home with a pool and lawn overlooking the mountains" },
    },
    {
      title: "Rely on Expertise",
      description: [
        "If you have questions about **affordability, credit, and loan options**, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel _confident and educated_ every step of the way.",
      ],
      image: { src: handshake, alt: "Agent shaking hands with a smiling client across a desk" },
    },
  ] satisfies Feature[],
};
