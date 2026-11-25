"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { districtLinks, navItems, pageNameFromPath } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} pathname={pathname} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
  const pageName = pageNameFromPath(pathname);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center gap-2 px-4 md:h-24 md:gap-3">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Ana menü">
          {navItems.slice(1, 5).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-sm font-bold text-coral-text" : "text-sm font-semibold text-ink hover:text-coral-text"}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <PhoneLink size="sm" label="Ara" />
          <WhatsAppLink pageName={pageName} size="sm" iconOnly />
        </div>
        <div className="hidden md:block lg:hidden">
          <PhoneLink size="md" label="Ara" />
        </div>
        <div className="hidden lg:block">
          <PhoneLink size="md" showNumber />
        </div>
        <div className="hidden md:block">
          <WhatsAppLink pageName={pageName} size="md" />
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
        </button>
      </div>
      {open ? (
        <nav id="site-menu" className="border-t border-line bg-white px-4 py-3 lg:hidden" aria-label="Mobil menü">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-ink"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {districtLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-muted"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function HeaderFallback() {
  return <div className="h-20 border-b border-line bg-white md:h-24" />;
}
