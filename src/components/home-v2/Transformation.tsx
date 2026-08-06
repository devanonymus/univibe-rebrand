"use client";

import Link from "next/link";
import { motion } from "motion/react";

const stages = [
  {
    title: "Comprendiamo",
    word: "Analyze",
    description:
      "Studiamo il modo in cui l’azienda lavora, vende, comunica e gestisce le informazioni. Prima di proporre qualsiasi tecnologia individuiamo inefficienze, rischi e opportunità reali.",
    capabilities: [
      "Consulenza IT",
      "Analisi dei processi",
      "Business strategy",
      "Assessment digitale",
    ],
    href: "/servizi/it-consulting",
  },
  {
    title: "Progettiamo",
    word: "Design",
    description:
      "Definiamo l’architettura del sistema, i flussi informativi, le responsabilità e le integrazioni necessarie. Ogni scelta viene collegata a un risultato operativo preciso.",
    capabilities: [
      "Software architecture",
      "Artificial Intelligence",
      "Network design",
      "Data governance",
    ],
    href: "/servizi/software-engineering",
  },
  {
    title: "Realizziamo",
    word: "Build",
    description:
      "Sviluppiamo applicazioni, piattaforme, gestionali, dashboard e automazioni progettate intorno alle attività reali dell’organizzazione.",
    capabilities: [
      "Web application",
      "Piattaforme SaaS",
      "Gestionali",
      "Dashboard",
    ],
    href: "/servizi/software-engineering",
  },
  {
    title: "Connettiamo",
    word: "Connect",
    description:
      "Colleghiamo software, dati, strumenti commerciali e infrastrutture per eliminare duplicazioni, passaggi manuali e informazioni isolate.",
    capabilities: [
      "API",
      "CRM ed ERP",
      "E-commerce",
      "Workflow automation",
    ],
    href: "/servizi/artificial-intelligence",
  },
  {
    title: "Proteggiamo",
    word: "Protect",
    description:
      "Progettiamo sicurezza, continuità operativa e protezione dei dati come elementi strutturali del sistema, non come interventi aggiunti alla fine.",
    capabilities: [
      "Privacy e GDPR",
      "Network security",
      "Backup",
      "Business continuity",
    ],
    href: "/servizi/privacy-gdpr",
  },
  {
    title: "Evolviamo",
    word: "Evolve",
    description:
      "Misuriamo ciò che accade, individuiamo nuove possibilità e miglioriamo progressivamente processi, piattaforme e strategie commerciali.",
    capabilities: [
      "SEO e visibilità",
      "Analytics",
      "Ottimizzazione",
      "Supporto evolutivo",
    ],
    href: "/servizi/growth-strategy",
  },
];

export default function Transformation() {
  return (
    <section className="transformation-v2" id="servizi">
      <div className="transformation-v2-background" aria-hidden="true">
        <div className="transformation-v2-glow transformation-v2-glow-red" />
        <div className="transformation-v2-glow transformation-v2-glow-blue" />
        <span>DIGITAL TRANSFORMATION</span>
      </div>

      <div className="section-container transformation-v2-container">
        <div className="transformation-v2-opening">
          <motion.div
            className="transformation-v2-heading"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p>Un unico partner. Un sistema completo.</p>

            <h2>
              La trasformazione digitale
              <strong> non inizia dal software.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="transformation-v2-intro"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              Molte aziende acquistano strumenti, piattaforme e consulenze,
              ma continuano a lavorare nello stesso modo.
            </p>

            <p>
              Noi partiamo dal cambiamento che deve avvenire e costruiamo
              intorno a esso tecnologia, processi e competenze.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="transformation-v2-declaration"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Non vendiamo servizi scollegati.
            <strong>
              Seguiamo l’impresa dalla comprensione del problema
              all’evoluzione del sistema.
            </strong>
          </p>
        </motion.div>

        <div className="transformation-v2-stages">
          {stages.map((stage, index) => (
            <motion.article
              className="transformation-v2-stage"
              key={stage.title}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.75,
                delay: index * 0.04,
              }}
            >
              <span className="transformation-v2-ghost">
                {stage.word}
              </span>

              <div className="transformation-v2-stage-main">
                <p className="transformation-v2-stage-label">
                  {stage.word}
                </p>

                <h3>{stage.title}.</h3>
              </div>

              <div className="transformation-v2-stage-copy">
                <p>{stage.description}</p>

                <div className="transformation-v2-capabilities">
                  {stage.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </div>

              <Link href={stage.href}>
                Approfondisci
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="transformation-v2-closing"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75 }}
        >
          <div>
            <p>Non sai da quale servizio iniziare?</p>

            <span>
              È normale. Il primo passo non è scegliere una soluzione,
              ma comprendere quale problema sta limitando l’azienda.
            </span>
          </div>

          <Link href="#contatti">
            Richiedi un confronto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
