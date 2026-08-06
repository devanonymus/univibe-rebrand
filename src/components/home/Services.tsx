"use client";

import { services } from "@/data/services";
import Link from "next/link";
import { motion } from "motion/react";

const serviceStatements: Record<string, string> = {
  "software-engineering": "Software costruito intorno all’impresa.",
  "artificial-intelligence": "L’intelligenza artificiale diventa operativa.",
  "growth-strategy": "La tecnologia ha valore quando genera crescita.",
  "seo-visibility": "Essere online non significa essere visibili.",
  "it-consulting": "Decisioni tecnologiche più solide.",
  "privacy-gdpr": "Proteggere i dati significa proteggere l’impresa.",
  "network-infrastructure":
    "Ogni sistema digitale dipende dalla sua infrastruttura.",
};

const serviceFocus: Record<string, string> = {
  "software-engineering":
    "Web application · SaaS · Gestionali · Piattaforme",
  "artificial-intelligence":
    "AI Agents · Automation · Data Intelligence",
  "growth-strategy":
    "Strategy · Funnel · Business Design · Analytics",
  "seo-visibility":
    "SEO · Content Architecture · Local Visibility",
  "it-consulting":
    "Technology Advisory · Systems · Governance",
  "privacy-gdpr":
    "GDPR · Data Governance · Compliance",
  "network-infrastructure":
    "Networking · Security · Monitoring · Infrastructure",
};

export default function Services() {
  return (
    <section className="services-editorial" id="servizi">
      <div className="services-editorial-background" aria-hidden="true">
        <div className="services-editorial-glow" />
        <span>ENGINEERING</span>
      </div>

      <div className="section-container services-editorial-container">
        <div className="services-editorial-heading">
          <motion.p
            className="services-editorial-kicker"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Soluzioni digitali. Risultati reali.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Dalla strategia
            <strong> all’infrastruttura.</strong>
          </motion.h2>

          <motion.p
            className="services-editorial-introduction"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Competenze coordinate all’interno di un unico sistema progettuale.
            Non vendiamo servizi isolati: costruiamo soluzioni capaci di
            lavorare insieme.
          </motion.p>
        </div>

        <div className="services-editorial-layout">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              className="service-editorial-block"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.75,
                delay: index * 0.04,
              }}
            >
              <div className="service-editorial-title">
                <p>{service.name}</p>
                <h3>{serviceStatements[service.slug]}</h3>
              </div>

              <div className="service-editorial-copy">
                <p>{service.introduction}</p>

                <span>{serviceFocus[service.slug]}</span>

                <Link href={`/servizi/${service.slug}`}>
                  Approfondisci
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
