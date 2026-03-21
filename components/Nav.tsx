"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Projekte" },
  { href: "/studio", label: "Studio" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const path = usePathname();

  return (
    <div className="nav dropdown smaller big">
      {/* Logo */}
      <Link href="/" className="new-logo w-inline-block">
        <Image
          src="/logo.png"
          alt="WaArchi"
          width={80}
          height={30}
          className="wa-logo"
          priority
        />
      </Link>

      {/* Nav links — direct children so flex-direction:column stacks them */}
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
