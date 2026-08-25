"use client";

import Link from "next/link";
import { motion } from "motion/react";

const outcomes = [
  {
    title: "Meno lavoro inutile",
    text:
      "Riduciamo attività manuali, duplicazioni e passaggi che assorbono tempo senza creare valore.",
    accent: "Efficienza operativa",
  },
  {
    title: "Più controllo",
    text:
      "Dati, responsabilità e processi diventano leggibili. Chi decide sa cosa sta accadendo e perché.",
    accent: "Governance",
  },
  {
    title: "Sistemi realmente utilizzati",
    text:
      "La tecnologia viene progettata intorno al lavoro delle persone, non il contrario.",
    accent: "Adoption",
  },
  {
    title: "Crescita senza caos",
    text:
      "Costruiamo fondamenta digitali capaci di sostenere nuovi clienti, processi e volumi senza moltiplicare la complessità.",
    accent: "Scalabilità",
  },
];

export default function Stats() {
  return (
    <section className="impact-new">
      <div className="section-container impact-new-container">
        <div className="impact-new-opening">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <span className="uv-eyebrow">Impatto reale</span>

            <h2>
              La tecnologia non deve impressionare.
              <strong>Deve migliorare l&apos;azienda.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="impact-new-copy"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p>
              Non valutiamo un progetto dal numero di funzioni sviluppate.
              Lo valutiamo da ciò che cambia concretamente dopo la sua
              introduzione.
            </p>

            <p>
              Più tempo, più controllo, meno errori e una struttura capace
              di sostenere la crescita.
            </p>
          </motion.div>
        </div>

        <div className="impact-new-grid">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              className="impact-new-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
            >
              <span>{outcome.accent}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="impact-new-conversion"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Non sai quale tecnologia ti serve?
            <strong>
              Perfetto. Partiamo dal problema, non dal prodotto.
            </strong>
          </p>

          <Link href="#contatti">
            Parliamo del tuo caso
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
