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
    letter: "U",
    className: "project-compact-uviq",
  },
  {
    slug: "netaudit-pro",
    name: "NetAudit Pro",
    category: "Network Audit Platform",
    description:
      "Una piattaforma per organizzare sopralluoghi, verifiche tecniche, criticità infrastrutturali e report professionali di rete.",
    focus:
      "Networking · Infrastructure · Audit · Reporting",
    letter: "N",
    className: "project-compact-network",
  },
];

export default function Projects() {
  return (
    <section className="projects-compact" id="progetti">
      <div className="projects-compact-background" aria-hidden="true">
        <div />
        <span>PROJECTS</span>
      </div>

      <div className="section-container projects-compact-container">
        <div className="projects-compact-opening">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <p className="projects-compact-label">
              Progetti proprietari
            </p>

            <h2>
              Idee trasformate
              <strong> in prodotti digitali reali.</strong>
            </h2>
          </motion.div>

          <motion.p
            className="projects-compact-intro"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            Soluzioni nate da problemi concreti e progettate per rendere
            processi, informazioni e decisioni più semplici da governare.
          </motion.p>
        </div>

        <div className="projects-compact-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`project-compact-card ${project.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <div className="project-compact-visual" aria-hidden="true">
                <div className="project-compact-grid-lines" />
                <div className="project-compact-orbit" />
                <span>{project.letter}</span>
              </div>

              <div className="project-compact-content">
                <p className="project-compact-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-compact-description">
                  {project.description}
                </p>

                <p className="project-compact-focus">
                  {project.focus}
                </p>

                <Link href={`/progetti/${project.slug}`}>
                  Approfondisci
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-compact-closing"
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
