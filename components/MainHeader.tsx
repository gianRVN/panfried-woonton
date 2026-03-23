"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Projects", href: "/", heading: "Projects" },
  { label: "About", href: "/about", heading: "About" },
  { label: "Journey", href: "/journey", heading: "Journey" },
  { label: "Connect", href: "/connect", heading: "Connect" },
];

export default function MainHeader() {
  const pathname = usePathname();
  const active = navItems.find((item) => item.href === pathname) ?? navItems[0];
  const others = navItems.filter((item) => item.href !== pathname);

  return (
    <header className="sticky top-0 z-20 bg-[#faf9f6]/95 backdrop-blur-sm px-8 pt-12 pb-4 md:px-12 lg:px-20">
      <div className="flex items-end justify-between gap-6">
        <div className="flex-shrink-0">
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-[#303330] tracking-tighter mb-4">
            {active.heading}
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-full" />
        </div>
        <nav className="flex items-center gap-5 pb-3 flex-wrap justify-end">
          {others.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-label font-semibold text-[#5d605c] hover:text-primary transition-colors tracking-wide whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
