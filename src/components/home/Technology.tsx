"use client";

import Link from "next/link";
import { motion } from "motion/react";

const foundations = [
  {
    title: "Architetture che durano",
    text:
      "Sistemi modulari, documentati e progettati per evolvere senza ricostruire tutto ad ogni nuova esigenza.",
    meta: "Architecture · Scalability",
  },
  {
    title: "Integrare prima di sostituire",
    text:
      "Partiamo da ciò che l’azienda utilizza già. Dove ha senso colleghiamo strumenti, dati e processi invece di aggiungere nuove piattaforme.",
    meta: "Integration · Data",
  },
  {
    title: "Sicurezza dentro il sistema",
    text:
      "Accessi, ruoli, protezione dei dati e continuità operativa fanno parte dell’architettura fin dall’inizio.",
    meta: "Security · Governance",
  },
  {
    title: "Tecnologia proporzionata",
    text:
      "Niente infrastrutture sovradimensionate o complessità tecnica fine a sé stessa. Ogni scelta deve avere una ragione operativa.",
    meta: "Efficiency · Sustainability",
  },
];

const stack = [
  "Software",
  "Artificial Intelligence",
  "Cloud",
  "Data",
  "Network",
  "Security",
];

export default function Technology() {
  return (
    <section className="ecosystem-new" id="ecosistema">
      <div className="ecosystem-new-background" aria-hidden="true">
        <div className="ecosystem-new-orbit ecosystem-new-orbit-large" />
        <div className="ecosystem-new-orbit ecosystem-new-orbit-small" />
        <div className="ecosystem-new-axis ecosystem-new-axis-x" />
        <div className="ecosystem-new-axis ecosystem-new-axis-y" />

        <span className="ecosystem-new-node ecosystem-new-node-a" />
        <span className="ecosystem-new-node ecosystem-new-node-b" />
        <span className="ecosystem-new-node ecosystem-new-node-c" />
      </div>

      <div className="section-container ecosystem-new-container">
        <div className="ecosystem-new-opening">
          <motion.div
            className="ecosystem-new-heading"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <span className="uv-eyebrow">
              Ecosistema tecnologico
            </span>

            <h2>
              Tecnologia che l&apos;azienda
              <strong>può davvero governare.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="ecosystem-new-intro"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p>
              Non scegliamo tecnologie perché sono nuove o popolari.
              Le scegliamo quando rendono l&apos;organizzazione più semplice,
              sicura e capace di crescere.
            </p>

            <p>
              L&apos;obiettivo non è avere più strumenti.
              È avere un&apos;architettura coerente.
            </p>
          </motion.div>
        </div>

        <div className="ecosystem-new-layout">
          <motion.div
            className="ecosystem-new-principles"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            {foundations.map((item, index) => (
              <article
                key={item.title}
                className="ecosystem-new-principle"
              >
                <span className="ecosystem-new-principle-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="ecosystem-new-principle-meta">
                  {item.meta}
                </span>
              </article>
            ))}
          </motion.div>

          <motion.aside
            className="ecosystem-new-system"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <span>
              Un unico sistema
            </span>

            <h3>
              Software, dati, AI e infrastrutture non sono reparti separati.
            </h3>

            <p>
              Li progettiamo come parti dello stesso ecosistema:
              interoperabile, mantenibile e comprensibile anche nel tempo.
            </p>

            <div className="ecosystem-new-stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <Link href="#contatti">
              Analizziamo la tua infrastruttura
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
