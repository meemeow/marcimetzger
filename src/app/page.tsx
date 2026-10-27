import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { About } from "@/components/sections/About";
import { Affiliations } from "@/components/sections/Affiliations";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ListingSearch } from "@/components/sections/ListingSearch";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Affiliations />
        <ListingSearch />
        <PhotoGallery />
        <Contact />
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
