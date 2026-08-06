"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero-premium" id="home">
      <div className="hero-premium-background" aria-hidden="true">
        <div className="hero-premium-grid" />
        <div className="hero-premium-glow hero-premium-glow-blue" />
        <div className="hero-premium-glow hero-premium-glow-red" />

        <span className="hero-premium-letter hero-premium-letter-u">U</span>
        <span className="hero-premium-letter hero-premium-letter-b">B</span>

        <div className="hero-blueprint">
          <div className="blueprint-circle blueprint-circle-large" />
          <div className="blueprint-circle blueprint-circle-medium" />
          <div className="blueprint-circle blueprint-circle-small" />

          <div className="blueprint-axis blueprint-axis-horizontal" />
          <div className="blueprint-axis blueprint-axis-vertical" />

          <div className="blueprint-line blueprint-line-one" />
          <div className="blueprint-line blueprint-line-two" />
          <div className="blueprint-line blueprint-line-three" />

          <span className="blueprint-point blueprint-point-one" />
          <span className="blueprint-point blueprint-point-two" />
          <span className="blueprint-point blueprint-point-three" />
          <span className="blueprint-point blueprint-point-four" />
          <span className="blueprint-point blueprint-point-center" />

          <span className="blueprint-label blueprint-label-top">
            DIGITAL ENGINEERING
          </span>

          <span className="blueprint-label blueprint-label-side">
            UNIVIBE SYSTEM
          </span>
        </div>
      </div>

      <div className="hero-premium-container">
        <div className="hero-premium-content">
          <motion.div
            className="hero-premium-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span />
            Digital Engineering Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Costruiamo sistemi digitali
            <strong>che trasformano le imprese.</strong>
          </motion.h1>

          <motion.div
            className="hero-premium-bottom"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <p>
              Software, intelligenza artificiale e infrastrutture progettate
              per rendere le aziende più efficienti, competitive e capaci di
              evolvere nel tempo.
            </p>

            <div className="hero-premium-actions">
              <Link href="#servizi" className="hero-premium-primary">
                Scopri le soluzioni
              </Link>

              <Link href="#contatti" className="hero-premium-secondary">
                Parliamo del tuo progetto
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-premium-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          <p>
            Software Engineering
            <span />
            Artificial Intelligence
            <span />
            Digital Strategy
            <span />
            IT Infrastructure
          </p>
        </motion.div>
      </div>

      <a href="#azienda" className="hero-premium-scroll">
        <span>Esplora</span>
        <i />
      </a>
    </section>
  );
}
