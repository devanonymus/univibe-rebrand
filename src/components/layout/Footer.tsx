import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  "Software Engineering",
  "AI & Automation",
  "Growth Strategy",
  "SEO & Visibility",
  "GDPR & Privacy",
  "Network Infrastructure",
];

const company = [
  { label: "Azienda", href: "/#azienda" },
  { label: "Metodo", href: "/#metodo" },
  { label: "Progetti", href: "/#progetti" },
  { label: "Contatti", href: "/#contatti" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand-column">
            <Link href="/" className="footer-brand">
              <span className="brand-uni">UNI</span>
              <span className="brand-vibe">VIBE</span>
            </Link>

            <p className="footer-group">GROUP SRLS</p>

            <p className="footer-description">
              Progettiamo sistemi digitali, software e infrastrutture per
              trasformare tecnologia e strategia in risultati reali.
            </p>
          </div>

          <div className="footer-column">
            <p className="footer-title">Servizi</p>

            {services.map((service) => (
              <Link key={service} href="/#servizi">
                {service}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <p className="footer-title">Univibe</p>

            {company.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <p className="footer-title">Contatti</p>

            <a href="mailto:info@univibegroup.it">
              <span className="footer-contact-main">
                <Mail size={17} />
                <strong>info@univibegroup.it</strong>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <a href="tel:+393509052874">
              <span className="footer-contact-main">
                <Phone size={17} />
                <strong>+39 350 905 2874</strong>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <a href="tel:+393884213290">
              <span className="footer-contact-main">
                <Phone size={17} />
                <strong>+39 388 421 3290</strong>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <div className="footer-locations-premium">
              <div className="footer-location-visual" aria-hidden="true">
                <span className="location-orbit location-orbit-one" />
                <span className="location-orbit location-orbit-two" />
                <span className="location-node location-node-main" />
                <span className="location-node location-node-one" />
                <span className="location-node location-node-two" />
                <span className="location-connection location-connection-one" />
                <span className="location-connection location-connection-two" />
              </div>

              <div className="footer-location-primary">
                <span className="footer-location-icon">
                  <MapPin size={18} />
                </span>

                <div>
                  <span className="footer-location-kicker">
                    Sede operativa
                  </span>

                  <strong>Taranto, Puglia</strong>

                  <small>
                    Hub operativo principale
                  </small>
                </div>
              </div>

              <div className="footer-location-secondary">
                <span>Punti operativi</span>

                <div className="footer-location-points">
                  <span>
                    <i />
                    <strong>Milano</strong>
                  </span>

                  <span>
                    <i />
                    <strong>Torino</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Univibe Group Srls</p>

          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="footer-policy-divider" />
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>

          <p>Digital Engineering Company</p>

          <span className="footer-signature-line" />

          <strong className="footer-signature">
            UNIVIBE GROUP
          </strong>
        </div>
      </div>
    </footer>
  );
}
