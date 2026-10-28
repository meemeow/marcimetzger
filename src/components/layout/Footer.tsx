import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-12 xs:py-16 lg:max-w-none lg:px-16">
        <div className="flex flex-col items-center gap-8 xs:gap-10 lg:flex-row lg:justify-between">
          <Logo tone="light" className="h-7 xs:h-8 sm:h-9" />
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-center xs:flex xs:flex-wrap xs:justify-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-2xs uppercase tracking-widest text-white/70 transition-colors hover:text-white xs:text-xs"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/15 pt-6 text-center text-2xs tracking-wider text-white/55 xs:mt-12 xs:gap-3 xs:pt-8 xs:text-xs lg:flex-row lg:justify-between lg:text-left">
          <p>
            Copyright © <CurrentYear /> {site.name} - All Rights Reserved
          </p>
          <p>
            {site.brokerage} ·{" "}
            <a href={site.phone.href} className="transition-colors hover:text-white">
              {site.phone.display}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
