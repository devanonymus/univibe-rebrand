"use client";

import { motion } from "motion/react";

const capabilities = [
  "Software",
  "Artificial Intelligence",
  "Strategy",
  "Data",
  "Infrastructure",
  "Growth",
];

export default function Manifesto() {
  return (
    <section className="manifesto-editorial" id="azienda">
      <div className="manifesto-editorial-background" aria-hidden="true">
        <span>UNIVIBE</span>
      </div>

      <div className="section-container manifesto-editorial-container">
        <motion.div
          className="manifesto-editorial-label"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span />
          Il nostro modo di lavorare
        </motion.div>

        <div className="manifesto-editorial-grid">
          <motion.div
            className="manifesto-editorial-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>
              Non siamo una semplice agenzia digitale.
              <strong>
                Costruiamo il sistema che fa funzionare l&apos;azienda.
              </strong>
            </h2>
          </motion.div>

          <motion.div
            className="manifesto-editorial-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p className="manifesto-editorial-lead">
              Il problema raramente è la mancanza di tecnologia.
              Il problema è quando software, marketing, dati e infrastruttura
              lavorano come mondi separati.
            </p>

            <p>
              Univibe unisce queste competenze in un unico progetto.
              Partiamo dai processi reali dell&apos;impresa, individuiamo ciò
              che rallenta crescita ed efficienza e costruiamo un sistema
              digitale coerente intorno agli obiettivi aziendali.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="manifesto-editorial-capabilities"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </motion.div>

        <motion.div
          className="manifesto-editorial-statement"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Un solo partner.
            <strong>
              Una sola architettura digitale.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
