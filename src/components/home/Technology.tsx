"use client";

import { motion } from "motion/react";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Docker",
  "Linux",
  "Supabase",
  "PostgreSQL",
  "Cloudflare",
  "AWS",
  "Azure",
  "OpenAI",
  "Google Cloud",
  "WordPress",
  "GitHub",
];

export default function Technology() {
  return (
    <section className="technology-section" id="ecosistema">
      <div className="section-container">
        <div className="technology-heading">
          <div className="section-label">
            <span>05</span>
            <p>Ecosistema</p>
          </div>

          <div>
            <p className="section-kicker">Tecnologie moderne, scelte con criterio</p>

            <h2>
              Il futuro non è avere un software.
              <span> È avere un sistema.</span>
            </h2>
          </div>
        </div>

        <div className="technology-layout">
          <motion.div
            className="technology-orb"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="orb-ring orb-ring-one" />
            <div className="orb-ring orb-ring-two" />
            <div className="orb-ring orb-ring-three" />

            <div className="orb-core">
              <span>U</span>
              <p>UNIVIBE SYSTEM</p>
            </div>

            <span className="orb-point orb-point-one" />
            <span className="orb-point orb-point-two" />
            <span className="orb-point orb-point-three" />
            <span className="orb-point orb-point-four" />
          </motion.div>

          <div className="technology-content">
            <p className="technology-description">
              Non adottiamo tecnologie per moda. Selezioniamo strumenti,
              infrastrutture e framework in funzione degli obiettivi,
              dell&apos;affidabilità e della capacità di evolvere nel tempo.
            </p>

            <div className="technology-grid">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology}
                  className="technology-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.025 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{technology}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
