"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    category: "AI BUSINESS OPERATING SYSTEM",
    title: "UVIQ",
    description:
      "Un ecosistema di agenti intelligenti progettato per analizzare, creare, pubblicare, automatizzare e ottimizzare il marketing aziendale.",
    tags: ["Artificial Intelligence", "Automation", "Business"],
    className: "project-uviq",
  },
  {
    category: "NETWORK AUDIT PLATFORM",
    title: "NetAudit Pro",
    description:
      "Piattaforma tecnica per la gestione degli audit di rete, l'analisi delle infrastrutture e la produzione di report professionali.",
    tags: ["Networking", "SaaS", "Infrastructure"],
    className: "project-network",
  },
  {
    category: "DIGITAL HEALTH",
    title: "Go-Care",
    description:
      "Ecosistema digitale per servizi di telemedicina, gestione dei dati e innovazione dei processi sanitari.",
    tags: ["Healthcare", "Privacy", "Platform"],
    className: "project-health",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="progetti">
      <div className="section-container">
        <div className="projects-heading">
          <div className="section-label">
            <span>06</span>
            <p>Progetti</p>
          </div>

          <div>
            <p className="section-kicker">Selected work</p>

            <h2>
              Sistemi progettati
              <span> per lavorare nel mondo reale.</span>
            </h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card ${project.className}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className="project-card-background">
                <div className="project-grid-lines" />
                <div className="project-visual">
                  <span>{project.title.charAt(0)}</span>
                </div>
              </div>

              <div className="project-card-content">
                <div className="project-topline">
                  <p>{project.category}</p>

                  <button type="button" aria-label={`Apri progetto ${project.title}`}>
                    <ArrowUpRight size={22} />
                  </button>
                </div>

                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Link href="/portfolio" className="projects-link">
          Esplora tutti i progetti
          <ArrowRight size={19} />
        </Link>
      </div>
    </section>
  );
}
