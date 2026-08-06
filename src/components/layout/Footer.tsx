import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Software Engineering",
  "AI & Automation",
  "Growth Strategy",
  "SEO & Visibility",
  "GDPR & Privacy",
  "Network Infrastructure",
];

const company = [
  { label: "Azienda", href: "/azienda" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Lavora con noi", href: "/lavora-con-noi" },
  { label: "Contatti", href: "/contatti" },
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
              info@univibegroup.it
              <ArrowUpRight size={15} />
            </a>

            <a href="tel:+390000000000">
              +39 000 000 0000
              <ArrowUpRight size={15} />
            </a>

            <p>Taranto, Puglia — Italia</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Univibe Group Srls</p>

          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>

          <p>Digital Engineering Company</p>
        </div>
      </div>
    </footer>
  );
}
