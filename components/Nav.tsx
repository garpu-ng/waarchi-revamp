"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Projekte" },
  { href: "/prozess", label: "Prozess" },
  { href: "/studio", label: "Studio" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const path = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Capture nav's natural vertical center before any scroll
    const rect = nav.getBoundingClientRect();
    const naturalCenter = rect.top + rect.height / 2;

    const onScroll = () => {
      if (window.scrollY > 30) {
        const viewportCenter = window.innerHeight / 2;
        setTranslateY(viewportCenter - naturalCenter);
      } else {
        setTranslateY(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="nav dropdown smaller big"
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Link href="/" className="new-logo w-inline-block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="WaArchi" className="wa-logo" />
      </Link>

      {links.map(({ href, label }) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className="link-5 big"
            style={{ opacity: active ? 1 : 0.45 }}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
