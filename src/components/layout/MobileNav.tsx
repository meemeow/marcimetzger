"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { Phone } from "lucide-react";
import { menuLabels, navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { buttonStyles } from "@/components/ui/Button";
import { MenuButton } from "@/components/layout/MenuButton";
import { MenuGridIcon } from "@/components/layout/MenuGridIcon";

const desktopQuery = "(min-width: 64rem)";

type MobileNavProps = {
  className?: string;
};

export function MobileNav({ className }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery);
    const closeOnDesktop = () => {
      if (mediaQuery.matches) dialogRef.current?.close();
    };
    mediaQuery.addEventListener("change", closeOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
  }

  return (
    <>
      <MenuButton label={menuLabels.open} onClick={open} className={className} />
      <dialog
        ref={dialogRef}
        aria-label={menuLabels.title}
        onClick={handleBackdropClick}
        data-native-scroll
        className="drawer inset-y-0 right-auto left-0 m-0 h-dvh max-h-none w-80 max-w-[85vw] border-r border-gold-light/30 bg-charcoal p-0 text-white"
      >
        <div className="flex h-full flex-col overflow-y-auto px-4 pb-8 sm:px-6">
          <div className="flex h-20 shrink-0 items-center">
            <button
              type="button"
              aria-label={menuLabels.close}
              onClick={close}
              className="-ml-2 grid size-11 place-items-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold-light"
            >
              <MenuGridIcon />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <a
                    href={item.href}
                    onClick={close}
                    className="block py-3 font-serif text-2xl transition-colors hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={site.phone.href} className={buttonStyles("solid", "mt-auto w-full")}>
            <Phone className="size-4" aria-hidden />
            {site.phone.display}
          </a>
        </div>
      </dialog>
    </>
  );
}
