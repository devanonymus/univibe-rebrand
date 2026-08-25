"use client";

import Link from "next/link";
import { motion } from "motion/react";

const disciplines = [
  "Software Engineering",
  "Artificial Intelligence",
  "Digital Strategy",
  "IT Infrastructure",
];

export default function Hero() {
  return (
    <section className="hero-premium" id="home">
      <div className="hero-premium-background" aria-hidden="true">
        <div className="hero-premium-grid" />
        <div className="hero-premium-glow hero-premium-glow-blue" />
        <div className="hero-premium-glow hero-premium-glow-red" />

        <div className="hero-blueprint">
          <div className="blueprint-circle blueprint-circle-large" />
          <div className="blueprint-circle blueprint-circle-medium" />
          <div className="blueprint-circle blueprint-circle-small" />

          <div className="blueprint-axis blueprint-axis-horizontal" />
          <div className="blueprint-axis blueprint-axis-vertical" />

          <div className="blueprint-line blueprint-line-one" />
          <div className="blueprint-line blueprint-line-two" />

          <span className="blueprint-point blueprint-point-one" />
          <span className="blueprint-point blueprint-point-two" />
          <span className="blueprint-point blueprint-point-three" />
          <span className="blueprint-point blueprint-point-center" />

          <span className="blueprint-label blueprint-label-top">
            DIGITAL SYSTEMS
          </span>
        </div>
      </div>

      <div className="hero-premium-container">
        <div className="hero-premium-layout">
          <div className="hero-premium-content">
            <motion.div
              className="hero-premium-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span />
              Digital Engineering Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Progettiamo sistemi digitali
              <strong>
                che fanno <span>funzionare meglio</span> le aziende.
              </strong>
            </motion.h1>

            <motion.div
              className="hero-premium-bottom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p>
                Software, intelligenza artificiale, strategia e infrastrutture
                progettati come un unico sistema per rendere l&apos;impresa più
                efficiente, competitiva e pronta a crescere.
              </p>

              <div className="hero-premium-actions">
                <Link href="#servizi" className="hero-premium-primary">
                  Raccontaci il tuo progetto
                </Link>

                <Link href="#metodo" className="hero-premium-secondary">
                  Scopri come lavoriamo
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.aside
            className="hero-premium-aside"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            <span className="hero-premium-aside-label">
              Il nostro approccio
            </span>

            <p>
              Non aggiungiamo strumenti.
              <strong>
                Progettiamo architetture digitali che collegano tecnologia,
                processi e crescita.
              </strong>
            </p>
          </motion.aside>
        </div>

        <motion.div
          className="hero-premium-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="hero-premium-disciplines">
            {disciplines.map((discipline) => (
              <span key={discipline}>{discipline}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
