"use client";

import Link from "next/link";
import { motion } from "motion/react";

const outcomes = [
  {
    title: "Meno complessità operativa",
    description:
      "Riduciamo passaggi manuali, strumenti scollegati e attività che consumano tempo senza generare valore.",
  },
  {
    title: "Più controllo sui processi",
    description:
      "Rendiamo informazioni, responsabilità e risultati più leggibili per chi deve prendere decisioni.",
  },
  {
    title: "Tecnologia realmente utilizzabile",
    description:
      "Progettiamo sistemi intorno alle persone e al modo in cui l’azienda lavora davvero.",
  },
  {
    title: "Crescita più sostenibile",
    description:
      "Costruiamo fondamenta digitali capaci di accompagnare l’impresa senza moltiplicare costi e disordine.",
  },
];

export default function Stats() {
  return (
    <section className="impact-editorial">
      <div className="impact-editorial-background" aria-hidden="true">
        <div className="impact-editorial-glow impact-editorial-glow-red" />
        <div className="impact-editorial-glow impact-editorial-glow-blue" />
        <span>IMPACT</span>
      </div>

      <div className="section-container impact-editorial-container">
        <div className="impact-editorial-heading">
          <motion.div
            className="impact-editorial-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
          >
            <p>Il valore che cerchiamo</p>

            <h2>
              La tecnologia non deve impressionare.
              <strong> Deve migliorare il modo in cui l’azienda funziona.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="impact-editorial-introduction"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p>
              Un progetto digitale è utile quando riduce un problema,
              semplifica un processo, migliora una decisione o crea una nuova
              opportunità commerciale.
            </p>

            <p>
              Per questo non misuriamo il lavoro sulla quantità di funzioni
              consegnate. Lo misuriamo sull’impatto che il sistema riesce a
              produrre nell’organizzazione.
            </p>
          </motion.div>
        </div>

        <div className="impact-editorial-statement">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            Prima di proporre una soluzione chiediamo:
            <strong>
              cosa deve cambiare concretamente dopo il nostro intervento?
            </strong>
          </motion.p>
        </div>

        <div className="impact-editorial-outcomes">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
              }}
            >
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="impact-editorial-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Non sai quale tecnologia serve?
            <span>
              È normale. Il primo passo è capire il problema, non scegliere lo
              strumento.
            </span>
          </p>

          <Link href="#contatti">
            Richiedi un confronto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
