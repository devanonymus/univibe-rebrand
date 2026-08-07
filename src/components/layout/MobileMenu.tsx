"use client";

import Link from "next/link";
import { useState } from "react";
import { serviceGroups } from "./MegaMenu";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav
      className={`uv-mobile-menu ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      aria-label="Navigazione mobile"
    >
      <Link href="/#azienda" onClick={onClose}>
        Azienda
      </Link>

      <div className="uv-mobile-services">
        <button
          type="button"
          aria-expanded={servicesOpen}
          onClick={() => setServicesOpen((current) => !current)}
        >
          <span>Servizi</span>
          <i />
        </button>

        <div
          className={`uv-mobile-services-list ${
            servicesOpen ? "is-open" : ""
          }`}
        >
          {serviceGroups.flatMap((group) =>
            group.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={onClose}
              >
                <strong>{service.label}</strong>
                <span>{service.description}</span>
              </Link>
            ))
          )}

          <Link
            href="/#servizi"
            className="uv-mobile-services-all"
            onClick={onClose}
          >
            Tutti i servizi
          </Link>
        </div>
      </div>

      <Link href="/#metodo" onClick={onClose}>
        Metodo
      </Link>

      <Link href="/#progetti" onClick={onClose}>
        Progetti
      </Link>

      <Link
        href="/#contatti"
        className="uv-mobile-contact"
        onClick={onClose}
      >
        Prenota una consulenza
      </Link>
    </nav>
  );
}
