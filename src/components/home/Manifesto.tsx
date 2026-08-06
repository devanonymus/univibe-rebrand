"use client";

import { motion } from "motion/react";

const capabilities = [
  "Software Engineering",
  "Artificial Intelligence",
  "Business Strategy",
  "Data & Intelligence",
  "IT Infrastructure",
  "Digital Growth",
];

export default function Manifesto() {
  return (
    <section className="manifesto-premium" id="azienda">
      <div className="manifesto-premium-background" aria-hidden="true">
        <div className="manifesto-premium-glow" />
        <span className="manifesto-premium-word">SYSTEMS</span>
      </div>

      <div className="section-container manifesto-premium-container">
        <div className="manifesto-premium-heading">
          <motion.div
            className="manifesto-premium-intro"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <span />
            Non una semplice agenzia digitale
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Una visione unica.
            <strong>
              Tecnologia, strategia e competenze che lavorano insieme.
            </strong>
          </motion.h2>
        </div>

        <div className="manifesto-premium-body">
          <motion.div
            className="manifesto-premium-copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
          >
            <p className="manifesto-premium-lead">
              Le aziende non hanno bisogno di più strumenti scollegati.
              Hanno bisogno di un sistema capace di unire processi,
              persone, dati e tecnologia.
            </p>

            <p>
              Univibe Group progetta ecosistemi digitali completi, costruiti
              intorno agli obiettivi reali dell&apos;impresa. Dalla strategia
              allo sviluppo, dall&apos;infrastruttura alla crescita, ogni
              componente viene progettato per generare valore misurabile e
              duraturo.
            </p>
          </motion.div>

          <motion.div
            className="manifesto-capabilities"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85 }}
          >
            <p className="manifesto-capabilities-label">
              Competenze integrate
            </p>

            <div className="manifesto-capabilities-flow">
              {capabilities.map((capability, index) => (
                <span key={capability}>
                  {capability}
                  {index < capabilities.length - 1 && <i />}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="manifesto-premium-statement"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <p>
            Non sviluppiamo singoli prodotti.
            <strong> Costruiamo sistemi che evolvono con l&apos;azienda.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
