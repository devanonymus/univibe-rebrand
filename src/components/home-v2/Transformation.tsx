"use client";

import Link from "next/link";
import { motion } from "motion/react";

const systems = [
  {
    title: "Comprendiamo il problema",
    text:
      "Analizziamo come l’azienda lavora oggi: processi, strumenti, dati, comunicazione e punti di attrito. Prima di proporre tecnologia definiamo dove si perde tempo, controllo o opportunità.",
    meta: "Analisi · Processi · Strategia",
  },
  {
    title: "Progettiamo il sistema",
    text:
      "Disegniamo flussi, responsabilità, integrazioni e architettura tecnologica. Ogni componente nasce per risolvere un problema operativo preciso, non per aggiungere complessità.",
    meta: "Architecture · AI · Data · Infrastructure",
  },
  {
    title: "Costruiamo e integriamo",
    text:
      "Software, automazioni, piattaforme e infrastrutture vengono sviluppati come parti dello stesso sistema, collegando ciò che oggi lavora in modo separato.",
    meta: "Software · Automation · Network",
  },
  {
    title: "Misuriamo e facciamo evolvere",
    text:
      "Una volta operativo, il sistema continua a migliorare. Analizziamo risultati, comportamenti e nuove opportunità per aumentare efficienza, controllo e capacità di crescita.",
    meta: "Analytics · Growth · Optimization",
  },
];

export default function Transformation() {
  return (
    <section className="transformation-new" id="servizi">
      <div className="section-container transformation-new-container">
        <div className="transformation-new-top">
          <motion.div
            className="transformation-new-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <span className="transformation-new-kicker">
              Digital transformation
            </span>

            <h2>
              La tecnologia da sola
              <strong>non trasforma un’azienda.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="transformation-new-intro"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p>
              Il valore nasce quando strategia, processi e tecnologia vengono
              progettati insieme.
            </p>

            <p>
              Per questo non partiamo dal servizio da vendere. Partiamo dal
              problema da risolvere.
            </p>
          </motion.div>
        </div>

        <div className="transformation-new-grid">
          {systems.map((system, index) => (
            <motion.article
              className="transformation-new-card"
              key={system.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
              }}
            >
              <div className="transformation-new-card-line" />

              <h3>{system.title}</h3>

              <p>{system.text}</p>

              <span>{system.meta}</span>
            </motion.article>
          ))}
        </div>

        <div className="transformation-new-bottom">
          <div>
            <span>Il risultato</span>

            <p>
              Meno strumenti scollegati.
              <strong>
                Più controllo, efficienza e capacità di crescere.
              </strong>
            </p>
          </div>

          <Link href="#contatti">
            Raccontaci il tuo progetto
          </Link>
        </div>
      </div>
    </section>
  );
}
