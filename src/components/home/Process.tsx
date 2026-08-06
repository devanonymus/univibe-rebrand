"use client";

import Link from "next/link";
import { motion } from "motion/react";

const principles = [
  {
    title: "Comprendere prima di proporre",
    description:
      "Analizziamo il contesto, i processi, le persone coinvolte e il problema reale. Una soluzione corretta non può nascere da una richiesta interpretata superficialmente.",
  },
  {
    title: "Progettare il sistema completo",
    description:
      "Definiamo come devono lavorare insieme dati, software, infrastrutture, automazioni e responsabilità. Evitiamo interventi isolati che spostano semplicemente il problema.",
  },
  {
    title: "Realizzare per fasi verificabili",
    description:
      "Quando il progetto lo consente, procediamo attraverso rilasci progressivi. L’azienda può utilizzare, valutare e migliorare il sistema senza attendere mesi prima di vedere un risultato.",
  },
  {
    title: "Misurare ciò che cambia",
    description:
      "Il progetto non termina con la consegna. Verifichiamo utilizzo, criticità, prestazioni e impatto operativo per capire cosa mantenere, correggere o potenziare.",
  },
];

export default function Process() {
  return (
    <section className="method-editorial" id="metodo">
      <div className="method-editorial-background" aria-hidden="true">
        <div className="method-editorial-glow" />
        <span>METHOD</span>
      </div>

      <div className="section-container method-editorial-container">
        <div className="method-editorial-opening">
          <motion.div
            className="method-editorial-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p>Il nostro metodo</p>

            <h2>
              Non partiamo dalla tecnologia.
              <strong> Partiamo da ciò che deve cambiare.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="method-editorial-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              Molti progetti digitali iniziano nel modo sbagliato: con una
              lista di funzionalità, una piattaforma già scelta o un
              preventivo costruito prima di comprendere il problema.
            </p>

            <p>
              Noi seguiamo il percorso opposto. Prima individuiamo ciò che
              rallenta, disperde risorse o limita la crescita. Solo dopo
              definiamo quale sistema può produrre il cambiamento necessario.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="method-editorial-question"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            La domanda non è:
            <span>“Quale software vuoi realizzare?”</span>
          </p>

          <p>
            La domanda corretta è:
            <strong>
              “Quale problema deve smettere di esistere dopo il progetto?”
            </strong>
          </p>
        </motion.div>

        <div className="method-editorial-principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
            >
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="method-editorial-result">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75 }}
          >
            <p>Il risultato</p>

            <h3>
              Un progetto comprensibile, governabile e costruito per essere
              utilizzato realmente.
            </h3>
          </motion.div>

          <motion.div
            className="method-editorial-result-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              L’azienda conosce la direzione, comprende le priorità e può
              valutare progressivamente il valore prodotto.
            </p>

            <Link href="#contatti">
              Raccontaci il problema da risolvere
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
