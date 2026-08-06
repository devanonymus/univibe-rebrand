"use client";

import Link from "next/link";
import { motion } from "motion/react";

const projects = [
  {
    slug: "uviq",
    name: "UVIQ",
    category: "AI Business Operating System",
    statement:
      "Un reparto marketing digitale composto da agenti di intelligenza artificiale specializzati.",
    description:
      "UVIQ nasce per trasformare analisi, strategia, produzione dei contenuti, automazioni, pubblicazione e misurazione in un unico sistema operativo per il marketing aziendale.",
    challenge:
      "Ridurre la frammentazione tra strumenti, attività e decisioni commerciali.",
    solution:
      "Un ecosistema capace di coordinare agenti AI, dati, workflow e persone all’interno dello stesso processo.",
    result:
      "Più velocità operativa, maggiore controllo e una strategia continuamente ottimizzabile.",
    technologies:
      "Artificial Intelligence · Automation · Strategy · Data",
    className: "project-case-uviq",
  },
  {
    slug: "netaudit-pro",
    name: "NetAudit Pro",
    category: "Network Audit Platform",
    statement:
      "L’analisi delle infrastrutture di rete diventa un processo tecnico ordinato, documentato e misurabile.",
    description:
      "NetAudit Pro supporta consulenti e tecnici durante sopralluoghi, verifiche, progettazione degli interventi e produzione di report professionali.",
    challenge:
      "Trasformare informazioni tecniche sparse in una diagnosi chiara e utilizzabile.",
    solution:
      "Una piattaforma che centralizza dati, criticità, apparati, fotografie, verifiche e raccomandazioni operative.",
    result:
      "Audit più completi, report più professionali e maggiore controllo sullo stato dell’infrastruttura.",
    technologies:
      "Networking · Infrastructure · SaaS · Reporting",
    className: "project-case-network",
  },
];

export default function Projects() {
  return (
    <section className="projects-editorial" id="progetti">
      <div className="projects-editorial-background" aria-hidden="true">
        <div className="projects-editorial-glow" />
        <span>PROJECTS</span>
      </div>

      <div className="section-container projects-editorial-container">
        <div className="projects-editorial-opening">
          <motion.div
            className="projects-editorial-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p>Progetti proprietari</p>

            <h2>
              Non ci limitiamo a consigliare innovazione.
              <strong> Costruiamo prodotti che la rendono concreta.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="projects-editorial-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              I nostri progetti nascono da problemi osservati direttamente
              nelle aziende e nelle attività professionali.
            </p>

            <p>
              Non sono semplici esercizi tecnologici. Sono sistemi progettati
              per organizzare processi, aumentare il controllo e creare nuove
              possibilità operative.
            </p>
          </motion.div>
        </div>

        <div className="projects-editorial-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`project-case ${project.className}`}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
            >
              <div className="project-case-visual" aria-hidden="true">
                <div className="project-case-grid" />
                <div className="project-case-orbit project-case-orbit-large" />
                <div className="project-case-orbit project-case-orbit-small" />
                <span className="project-case-letter">
                  {project.name.charAt(0)}
                </span>
              </div>

              <div className="project-case-content">
                <p className="project-case-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-case-statement">
                  {project.statement}
                </p>

                <p className="project-case-description">
                  {project.description}
                </p>

                <div className="project-case-analysis">
                  <div>
                    <span>La sfida</span>
                    <p>{project.challenge}</p>
                  </div>

                  <div>
                    <span>La soluzione</span>
                    <p>{project.solution}</p>
                  </div>

                  <div>
                    <span>Il risultato</span>
                    <p>{project.result}</p>
                  </div>
                </div>

                <div className="project-case-footer">
                  <p>{project.technologies}</p>

                  <Link href={`/progetti/${project.slug}`}>
                    Scopri il progetto
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-editorial-closing"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75 }}
        >
          <p>
            Hai individuato un problema che nessun software risolve davvero?
            <span>
              Potrebbe essere il punto di partenza per costruire un nuovo
              sistema digitale.
            </span>
          </p>

          <Link href="#contatti">
            Parliamo della tua idea
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
