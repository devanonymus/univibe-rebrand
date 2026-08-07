"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    document.body.classList.toggle("uv-menu-open", menuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("uv-menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setServicesOpen(true);
  };

  const closeServicesDelayed = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 130);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`uv-header ${
        scrolled ? "is-scrolled" : ""
      } ${menuOpen ? "is-mobile-open" : ""}`}
    >
      <div className="uv-navbar">
        <Link
          href="/#home"
          className="uv-brand"
          onClick={closeAll}
          aria-label="Univibe Group"
        >
          <span>
            UNI<strong>VIBE</strong>
          </span>
          <small>GROUP</small>
        </Link>

        <nav
          className="uv-desktop-nav"
          aria-label="Navigazione principale"
        >
          <Link href="/#azienda">
            Azienda
          </Link>

          <div
            ref={servicesRef}
            className="uv-services-area"
            onMouseEnter={openServices}
            onMouseLeave={closeServicesDelayed}
          >
            <button
              type="button"
              className={servicesOpen ? "is-open" : ""}
              aria-expanded={servicesOpen}
              onClick={() =>
                setServicesOpen((current) => !current)
              }
            >
              Servizi
              <i />
            </button>

            <MegaMenu
              open={servicesOpen}
              onClose={() => setServicesOpen(false)}
            />
          </div>

          <Link href="/#metodo">
            Metodo
          </Link>

          <Link href="/#progetti">
            Progetti
          </Link>
        </nav>

        <Link
          href="/#contatti"
          className="uv-navbar-cta"
        >
          Parliamo
        </Link>

        <button
          type="button"
          className="uv-menu-button"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={closeAll}
      />
    </header>
  );
}
