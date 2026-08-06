"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Analisi",
    description:
      "Studiamo il contesto aziendale, i processi, le criticità e le opportunità prima di proporre qualsiasi tecnologia.",
  },
  {
    number: "02",
    title: "Strategia",
    description:
      "Definiamo obiettivi, priorità, architettura della soluzione, tempi e indicatori di risultato.",
  },
  {
    number: "03",
    title: "Progettazione",
    description:
      "Disegniamo esperienza, infrastruttura, flussi, dati e integrazioni in modo coerente e scalabile.",
  },
  {
    number: "04",
    title: "Sviluppo",
    description:
      "Trasformiamo la strategia in software, automazioni e sistemi digitali testabili e realmente utilizzabili.",
  },
  {
    number: "05",
    title: "Lancio",
    description:
      "Configuriamo ambienti, monitoraggio, formazione e processi necessari per una partenza controllata.",
  },
  {
    number: "06",
    title: "Evoluzione",
    description:
      "Analizziamo dati e utilizzo reale per migliorare continuamente performance, sicurezza e risultati.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="metodo">
      <div className="process-background" aria-hidden="true">
        <div className="process-glow" />
        <span>PROCESS</span>
      </div>

      <div className="section-container process-container">
        <div className="process-heading">
          <div className="section-label">
            <span>04</span>
            <p>Metodo</p>
          </div>

          <div>
            <p className="section-kicker">Dal problema alla soluzione</p>

            <h2>
              Un processo chiaro.
              <span> Nessuna tecnologia scelta a caso.</span>
            </h2>
          </div>
        </div>

        <div className="process-list">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <div className="process-number">{step.number}</div>

              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <div className="process-line">
                <span />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
