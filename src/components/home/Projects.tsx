"use client";

import Link from "next/link";
import { motion } from "motion/react";

const projects = [
  {
    slug: "uviq",
    name: "UVIQ",
    category: "AI Business Operating System",
    description:
      "Un ecosistema di agenti AI che coordina analisi, strategia, contenuti, automazioni, pubblicazione e controllo delle performance.",
    focus:
      "Artificial Intelligence · Marketing Automation · Business Intelligence",
  },
  {
    slug: "netaudit-pro",
    name: "NetAudit Pro",
    category: "Network Audit Platform",
    description:
      "Una piattaforma per organizzare sopralluoghi, verifiche tecniche, criticità infrastrutturali e report professionali di rete.",
    focus:
      "Networking · Infrastructure · Audit · Reporting",
  },
];

export default function Projects() {
  return (
    <section className="projects-simple" id="progetti">
      <div className="projects-simple-background" aria-hidden="true">
        <div />
        <span>PROJECTS</span>
      </div>

      <div className="section-container projects-simple-container">
        <div className="projects-simple-opening">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <p className="projects-simple-label">
              Progetti proprietari
            </p>

            <h2>
              Idee trasformate
              <strong> in sistemi digitali reali.</strong>
            </h2>
          </motion.div>

          <motion.p
            className="projects-simple-intro"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            Prodotti nati dall’osservazione di problemi concreti e progettati
            per semplificare attività, informazioni e decisioni.
          </motion.p>
        </div>

        <div className="projects-simple-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="projects-simple-item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
              }}
            >
              <div className="projects-simple-name">
                <p>{project.category}</p>
                <h3>{project.name}</h3>
              </div>

              <div className="projects-simple-copy">
                <p>{project.description}</p>
                <span>{project.focus}</span>
              </div>

              <Link href={`/progetti/${project.slug}`}>
                Approfondisci
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-simple-closing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Hai un problema operativo che nessun software risolve davvero?
          </p>

          <Link href="#contatti">
            Valutiamo la tua idea
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
