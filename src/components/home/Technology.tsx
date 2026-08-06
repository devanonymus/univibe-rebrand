"use client";

import Link from "next/link";
import { motion } from "motion/react";

const foundations = [
  {
    title: "Architetture costruite per durare",
    description:
      "Progettiamo sistemi modulari, documentati e capaci di evolvere senza dover essere ricostruiti ogni volta che cambia una necessità.",
  },
  {
    title: "Integrazione prima della sostituzione",
    description:
      "Valutiamo ciò che l’azienda utilizza già e colleghiamo strumenti, dati e processi quando è più utile che sostituirli.",
  },
  {
    title: "Sicurezza dentro il progetto",
    description:
      "Accessi, ruoli, protezione dei dati, continuità e controllo non vengono aggiunti alla fine. Fanno parte dell’architettura.",
  },
  {
    title: "Tecnologia proporzionata al problema",
    description:
      "Evitiamo infrastrutture sovradimensionate e soluzioni eccessivamente complesse. Ogni scelta deve produrre un vantaggio concreto.",
  },
];

export default function Technology() {
  return (
    <section className="ecosystem-editorial" id="ecosistema">
      <div className="ecosystem-editorial-background" aria-hidden="true">
        <div className="ecosystem-editorial-grid" />
        <div className="ecosystem-editorial-glow" />
        <span>ECOSYSTEM</span>

        <div className="ecosystem-blueprint">
          <div className="ecosystem-circle ecosystem-circle-large" />
          <div className="ecosystem-circle ecosystem-circle-medium" />
          <div className="ecosystem-circle ecosystem-circle-small" />

          <div className="ecosystem-axis ecosystem-axis-horizontal" />
          <div className="ecosystem-axis ecosystem-axis-vertical" />

          <span className="ecosystem-node ecosystem-node-one" />
          <span className="ecosystem-node ecosystem-node-two" />
          <span className="ecosystem-node ecosystem-node-three" />
        </div>
      </div>

      <div className="section-container ecosystem-editorial-container">
        <div className="ecosystem-editorial-opening">
          <motion.div
            className="ecosystem-editorial-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p>Ecosistema tecnologico</p>

            <h2>
              La tecnologia giusta
              <strong> è quella che l’azienda riesce a governare.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="ecosystem-editorial-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              Non scegliamo strumenti perché sono nuovi, popolari o
              tecnicamente affascinanti.
            </p>

            <p>
              Li scegliamo quando permettono all’azienda di lavorare meglio,
              proteggere i dati, integrare i processi e sostenere la crescita
              senza aumentare inutilmente la complessità.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="ecosystem-editorial-statement"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Non vendiamo una tecnologia specifica.
            <strong>
              Costruiamo l’architettura più adatta al risultato da ottenere.
            </strong>
          </p>
        </motion.div>

        <div className="ecosystem-editorial-foundations">
          {foundations.map((foundation, index) => (
            <motion.article
              key={foundation.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
            >
              <h3>{foundation.title}</h3>
              <p>{foundation.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="ecosystem-editorial-stack">
          <motion.div
            className="ecosystem-editorial-stack-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75 }}
          >
            <p>Le competenze tecniche</p>

            <h3>
              Software, cloud, dati, intelligenza artificiale e infrastrutture
              diventano parti dello stesso sistema.
            </h3>
          </motion.div>

          <motion.div
            className="ecosystem-editorial-stack-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              Lavoriamo con tecnologie moderne e consolidate, selezionate in
              base a prestazioni, affidabilità, sicurezza, costi di gestione e
              possibilità di evoluzione.
            </p>

            <p>
              Il cliente non deve dipendere da una sigla tecnica. Deve poter
              contare su un sistema comprensibile, mantenibile e coerente con
              il proprio modello operativo.
            </p>

            <Link href="#contatti">
              Valutiamo insieme la tua infrastruttura
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
