import { photoGallery } from "@/content/listings";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryViewer } from "@/components/sections/GalleryViewer";

export function PhotoGallery() {
  return (
    <Section tone="dark" containerClassName="max-w-(--breakpoint-2xl)">
      <div className="grid gap-16 lg:grid-cols-[2fr_1fr] lg:items-center lg:gap-16 xl:gap-24">
        <SectionHeading eyebrow={photoGallery.eyebrow} title={photoGallery.title} tone="light" className="lg:order-2" />
        <GalleryViewer images={photoGallery.images} className="lg:order-1" />
      </div>
    </Section>
  );
}
