import { photoGallery } from "@/content/listings";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryViewer } from "@/components/sections/GalleryViewer";

export function PhotoGallery() {
  return (
    <Section tone="dark" containerClassName="max-w-(--breakpoint-2xl)">
      <div className="grid gap-10 xs:gap-16 2xl:grid-cols-[2fr_1fr] 2xl:items-center 2xl:gap-24">
        <SectionHeading eyebrow={photoGallery.eyebrow} title={photoGallery.title} tone="light" className="2xl:order-2" />
        <GalleryViewer
          images={photoGallery.images}
          className="mx-auto w-full max-w-4xl 2xl:order-1 2xl:max-w-none"
        />
      </div>
    </Section>
  );
}
