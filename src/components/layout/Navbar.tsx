"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Azienda", href: "#azienda", id: "azienda" },
  { label: "Metodo", href: "#metodo", id: "metodo" },
  { label: "Progetti", href: "#progetti", id: "progetti" },
];

const serviceGroups = [
  {
    title: "Engineering",
    services: [
      {
        label: "Software Engineering",
        description: "Applicazioni, gestionali e piattaforme su misura.",
        href: "/servizi/software-engineering",
      },
      {
        label: "Intelligenza Artificiale",
        description: "Agenti AI, automazioni e workflow intelligenti.",
        href: "/servizi/artificial-intelligence",
      },
    ],
  },
  {
    title: "Crescita",
    services: [
      {
        label: "Growth & Strategy",
        description: "Strategia digitale e sistemi commerciali misurabili.",
        href: "/servizi/growth-strategy",
      },
      {
        label: "SEO & Visibility",
        description: "Posizionamento, contenuti e visibilità locale.",
        href: "/servizi/seo-visibility",
      },
    ],
  },
  {
    title: "Infrastrutture",
    services: [
      {
        label: "Network Infrastructure",
        description: "Reti, Wi-Fi, sicurezza e continuità operativa.",
        href: "/servizi/network-infrastructure",
      },
      {
        label: "IT Consulting",
        description: "Governance, roadmap e scelte tecnologiche.",
        href: "/servizi/it-consulting",
      },
    ],
  },
  {
    title: "Governance",
    services: [
      {
        label: "Privacy & GDPR",
        description: "Protezione dei dati integrata nei processi reali.",
        href: "/servizi/privacy-gdpr",
      },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const servicesAreaRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const sectionIds = ["home", "azienda", "servizi", "metodo", "progetti"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          );

        const currentSection = visibleEntries[0];

        if (currentSection?.target.id) {
          setActiveSection(currentSection.target.id);
        }
      },
      {
        rootMargin: "-24% 0px -58% 0px",
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
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (
        servicesAreaRef.current &&
        !servicesAreaRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [menuOpen]);

  const openServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  };

  const closeEverything = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`site-header editorial-header ${
        scrolled ? "is-scrolled" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="editorial-navbar">
        <Link
          href="/#home"
          className="editorial-brand"
          aria-label="Univibe Group, torna all'inizio"
          onClick={closeEverything}
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
          <Link
            href="/#azienda"
            className={activeSection === "azienda" ? "is-active" : ""}
          >
            Azienda
          </Link>

          <div
            ref={servicesAreaRef}
            className={`services-navigation-area ${
              servicesOpen ? "is-open" : ""
            }`}
            onMouseEnter={openServices}
            onMouseLeave={scheduleServicesClose}
            onFocus={openServices}
          >
            <button
              type="button"
              className={`services-navigation-trigger ${
                activeSection === "servizi" ? "is-active" : ""
              }`}
              aria-expanded={servicesOpen}
              aria-controls="services-mega-menu"
              onClick={() => setServicesOpen((current) => !current)}
            >
              Servizi
              <span aria-hidden="true" />
            </button>

            <div
              id="services-mega-menu"
              className="services-mega-menu"
              aria-hidden={!servicesOpen}
            >
              <div className="services-mega-menu-inner">
                <div className="services-mega-menu-heading">
                  <p>Soluzioni integrate</p>

                  <h2>
                    Tecnologia, strategia e infrastrutture coordinate
                    all&apos;interno dello stesso progetto.
                  </h2>

                  <Link
                    href="/#servizi"
                    onClick={() => setServicesOpen(false)}
                    tabIndex={servicesOpen ? 0 : -1}
                  >
                    Scopri il nostro approccio
                  </Link>
                </div>

                <div className="services-mega-menu-groups">
                  {serviceGroups.map((group) => (
                    <section key={group.title}>
                      <p>{group.title}</p>

                      <div>
                        {group.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            tabIndex={servicesOpen ? 0 : -1}
                          >
                            <strong>{service.label}</strong>
                            <span>{service.description}</span>
                          </Link>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <aside className="services-mega-menu-cta">
                  <p>Hai un progetto complesso?</p>

                  <span>
                    Partiamo dal problema e individuiamo il sistema più adatto
                    alla tua organizzazione.
                  </span>

                  <Link
                    href="/#contatti"
                    onClick={() => setServicesOpen(false)}
                    tabIndex={servicesOpen ? 0 : -1}
                  >
                    Prenota un confronto
                  </Link>
                </aside>
              </div>
            </div>
          </div>

          {navigation.slice(1).map((item) => (
            <Link
              key={item.label}
              href={`/${item.href}`}
              className={activeSection === item.id ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contatti" className="editorial-navbar-cta">
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
        <Link
          href="/#azienda"
          onClick={closeEverything}
          tabIndex={menuOpen ? 0 : -1}
        >
          Azienda
        </Link>

        <div className="mobile-services-navigation">
          <button
            type="button"
            aria-expanded={mobileServicesOpen}
            onClick={() =>
              setMobileServicesOpen((current) => !current)
            }
            tabIndex={menuOpen ? 0 : -1}
          >
            Servizi
            <span aria-hidden="true" />
          </button>

          <div
            className={`mobile-services-list ${
              mobileServicesOpen ? "is-open" : ""
            }`}
          >
            {serviceGroups.flatMap((group) =>
              group.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={closeEverything}
                  tabIndex={
                    menuOpen && mobileServicesOpen ? 0 : -1
                  }
                >
                  <strong>{service.label}</strong>
                  <span>{service.description}</span>
                </Link>
              ))
            )}

            <Link
              href="/#servizi"
              className="mobile-services-all"
              onClick={closeEverything}
              tabIndex={menuOpen && mobileServicesOpen ? 0 : -1}
            >
              Esplora tutti i servizi
            </Link>
          </div>
        </div>

        <Link
          href="/#metodo"
          onClick={closeEverything}
          tabIndex={menuOpen ? 0 : -1}
        >
          Metodo
        </Link>

        <Link
          href="/#progetti"
          onClick={closeEverything}
          tabIndex={menuOpen ? 0 : -1}
        >
          Progetti
        </Link>

        <Link
          href="/#contatti"
          className="editorial-mobile-contact"
          onClick={closeEverything}
          tabIndex={menuOpen ? 0 : -1}
        >
          Prenota una consulenza
        </Link>
      </nav>
    </header>
  );
}
