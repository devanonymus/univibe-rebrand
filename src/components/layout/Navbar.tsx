"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Azienda", href: "#azienda" },
  { label: "Servizi", href: "#servizi" },
  { label: "Metodo", href: "#metodo" },
  { label: "Progetti", href: "#progetti" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header editorial-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="editorial-navbar">
        <Link href="#home" className="editorial-brand" aria-label="Univibe Group">
          <span className="editorial-brand-name">
            <span>UNI</span>
            <strong>VIBE</strong>
          </span>

          <small>GROUP</small>
        </Link>

        <nav className="editorial-desktop-navigation" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contatti" className="editorial-navbar-cta">
          Parliamo
        </Link>

        <button
          type="button"
          className="editorial-menu-button"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="editorial-mobile-navigation" aria-label="Navigazione mobile">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link href="#contatti" onClick={() => setMenuOpen(false)}>
            Prenota una consulenza
          </Link>
        </nav>
      )}
    </header>
  );
}
