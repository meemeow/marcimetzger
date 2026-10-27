"use client";

import type { MouseEvent } from "react";
import { navItems } from "@/content/navigation";

export function HeaderNav() {
  function handleClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    window.history.pushState(null, "", href);
  }

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-10">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
              className="text-sm uppercase tracking-widest opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
