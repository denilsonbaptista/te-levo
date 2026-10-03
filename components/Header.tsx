"use client";

import { useEffect, useState } from "react";
import { Mark } from "./Icons";

const links = [
  { href: "#passageiros", label: "Passageiros" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#motoristas", label: "Motoristas" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
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
        <a className="logo" href="#inicio" aria-label="TE LEVO Mobile, página inicial">
          <Mark />
          <b>
            te<i>levo</i>
          </b>
        </a>
        <nav className="nav-links" id="menu" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-dark" href="#baixar">
            Baixar o app
          </a>
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
