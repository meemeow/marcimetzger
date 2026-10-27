import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-16 lg:max-w-none lg:px-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <Logo tone="light" className="h-9" />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/15 pt-8 text-center text-xs tracking-wider text-white/55 lg:flex-row lg:justify-between lg:text-left">
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
