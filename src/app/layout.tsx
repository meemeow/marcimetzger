import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Marci Metzger | The Ridge Realty Group",
  description: "Marci Metzger, real estate agent at The Ridge Realty Group in Pahrump, Nevada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full scroll-pt-20 antialiased [overflow-anchor:none] lg:scroll-pt-24`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
