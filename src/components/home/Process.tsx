"use client";

import Link from "next/link";
import { motion } from "motion/react";

const phases = [
  {
    name: "Capire",
    text:
      "Contesto, processi, persone, obiettivi e criticità prima di qualsiasi proposta.",
  },
  {
    name: "Disegnare",
    text:
      "Definiamo architettura, priorità e relazioni tra tecnologia e organizzazione.",
  },
  {
    name: "Costruire",
    text:
      "Realizziamo per fasi verificabili, riducendo rischio e complessità.",
  },
  {
    name: "Evolvere",
    text:
      "Misuriamo utilizzo e risultati per decidere cosa migliorare e potenziare.",
  },
];

export default function Process() {
  return (
    <section className="method-new" id="metodo">
      <div className="section-container method-new-container">
        <div className="method-new-opening">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <span className="uv-eyebrow">Il nostro metodo</span>

            <h2>
              Prima comprendiamo.
              <strong>Poi decidiamo cosa costruire.</strong>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Un progetto digitale efficace non nasce da una lista di
            funzionalità. Nasce da una comprensione precisa di ciò che
            deve cambiare nell&apos;azienda.
          </motion.p>
        </div>

        <motion.div
          className="method-new-question"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8 }}
        >
          <span>Non chiediamo</span>
          <p>“Quale software vuoi?”</p>

          <span>Chiediamo</span>
          <strong>
            “Quale problema non deve più esistere?”
          </strong>
        </motion.div>

        <div className="method-new-flow">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
            >
              <div className="method-new-marker" />
              <h3>{phase.name}</h3>
              <p>{phase.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="method-new-ending">
          <p>
            Il risultato è un progetto
            <strong>
              comprensibile, governabile e realmente utilizzabile.
            </strong>
          </p>

          <Link href="#contatti">
            Raccontaci il problema
          </Link>
        </div>
      </div>
    </section>
  );
}
