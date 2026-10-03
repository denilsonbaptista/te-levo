"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LogoLink from "./LogoLink";

type NavLink = { href: string; label: string };

type HeaderProps = {
  links: NavLink[];
  cta: NavLink;
  badge?: string;
};

export default function Header({ links, cta, badge }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const className = ["topbar", scrolled && "scrolled", menuOpen && "menu-open"].filter(Boolean).join(" ");

  return (
    <header className={className} id="topbar">
      <div className="wrap nav">
        <LogoLink badge={badge} onClick={() => setMenuOpen(false)} />
        <nav className="nav-links" id="menu" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link className="btn btn-dark" href={cta.href}>
            {cta.label}
          </Link>
          <button
            className="menu-btn"
            aria-controls="menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
