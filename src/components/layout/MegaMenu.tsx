"use client";

import Link from "next/link";

export const serviceGroups = [
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

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MegaMenu({
  open,
  onClose,
}: MegaMenuProps) {
  return (
    <div
      className={`uv-mega-menu ${open ? "is-open" : ""}`}
      aria-hidden={!open}
    >
      <div className="uv-mega-menu-inner">
        <div className="uv-mega-intro">
          <span>Soluzioni integrate</span>

          <h2>
            Tecnologia, strategia e infrastrutture coordinate
            all&apos;interno dello stesso progetto.
          </h2>

          <Link href="/#servizi" onClick={onClose}>
            Scopri il nostro approccio
          </Link>
        </div>

        <div className="uv-mega-groups">
          {serviceGroups.map((group) => (
            <section key={group.title}>
              <p>{group.title}</p>

              {group.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={onClose}
                >
                  <strong>{service.label}</strong>
                  <span>{service.description}</span>
                </Link>
              ))}
            </section>
          ))}
        </div>

        <aside className="uv-mega-cta">
          <span>Hai un progetto complesso?</span>

          <p>
            Partiamo dal problema e individuiamo il sistema più adatto
            alla tua organizzazione.
          </p>

          <Link href="/#contatti" onClick={onClose}>
            Prenota un confronto
          </Link>
        </aside>
      </div>
    </div>
  );
}
