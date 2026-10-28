import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { realEstateAgentJsonLd, toJsonLdScript } from "@/lib/structured-data";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = `${site.name} | ${site.brokerage}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: hero.image.src.src,
        width: hero.image.src.width,
        height: hero.image.src.height,
        alt: hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [hero.image.src.src],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full scroll-pt-20 antialiased [overflow-anchor:none] lg:scroll-pt-24`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLdScript(realEstateAgentJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
