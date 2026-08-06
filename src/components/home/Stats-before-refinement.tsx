"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
};

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 360,
    suffix: "°",
    label: "Approccio integrato",
    description: "Strategia, tecnologia e crescita in un unico ecosistema.",
  },
  {
    value: 6,
    suffix: "",
    label: "Aree di competenza",
    description: "Un team multidisciplinare per affrontare progetti complessi.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Soluzioni su misura",
    description: "Ogni progetto nasce dai processi reali dell'impresa.",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Continuità digitale",
    description: "Sistemi progettati per essere affidabili e disponibili.",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="stats-heading">
          <div className="section-label">
            <span>03</span>
            <p>Impatto</p>
          </div>

          <div>
            <p className="section-kicker">Tecnologia con una direzione precisa</p>

            <h2>
              Non misuriamo il lavoro in output.
              <span> Lo misuriamo in valore generato.</span>
            </h2>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <div className="stat-index">0{index + 1}</div>

              <div className="stat-value">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
