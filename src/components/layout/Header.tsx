import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderShell } from "@/components/layout/HeaderShell";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <HeaderShell>
      <Container className="grid h-20 grid-cols-[1fr_auto_1fr] items-center lg:flex lg:h-24 lg:max-w-none lg:justify-between lg:px-16">
        <MobileNav className="justify-self-start text-white group-data-[tone=solid]:text-black" />
        <Logo className="h-9 lg:h-9.5" imageClassName="invert transition duration-300 group-data-[tone=solid]:invert-0" />
        <HeaderNav />
      </Container>
    </HeaderShell>
  );
}
