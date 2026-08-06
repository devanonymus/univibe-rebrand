"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Azienda", href: "#azienda", id: "azienda" },
  { label: "Trasformazione", href: "#servizi", id: "servizi" },
  { label: "Metodo", href: "#metodo", id: "metodo" },
  { label: "Progetti", href: "#progetti", id: "progetti" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const hero = document.getElementById("home");

    if (hero) {
      sections.unshift(hero);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          );

        const current = visibleEntries[0];

        if (current?.target.id) {
          setActiveSection(current.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -58% 0px",
        threshold: [0.08, 0.2, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header editorial-header ${
        scrolled ? "is-scrolled" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="editorial-navbar">
        <Link
          href="#home"
          className="editorial-brand"
          aria-label="Univibe Group, torna all'inizio"
          onClick={closeMenu}
        >
          <span className="editorial-brand-name">
            <span>UNI</span>
            <strong>VIBE</strong>
          </span>

          <small>GROUP</small>
        </Link>

        <nav
          className="editorial-desktop-navigation"
          aria-label="Navigazione principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={activeSection === item.id ? "is-active" : ""}
              aria-current={
                activeSection === item.id ? "location" : undefined
              }
            >
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
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`editorial-mobile-navigation ${
          menuOpen ? "is-visible" : ""
        }`}
        aria-label="Navigazione mobile"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={activeSection === item.id ? "is-active" : ""}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="#contatti"
          className="editorial-mobile-contact"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          Prenota una consulenza
        </Link>
      </nav>
    </header>
  );
}
