import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getServiceSalesContent } from "@/data/service-sales";
import { getServiceBySlug, services } from "@/data/services";
import Link from "next/link";
import { notFound } from "next/navigation";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  const sales = getServiceSalesContent(slug);

  if (!service || !sales) {
    return {};
  }

  return {
    title: `${service.name} | Univibe Group`,
    description: sales.heroText,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  const sales = getServiceSalesContent(slug);

  if (!service || !sales) {
    notFound();
  }

  const currentIndex = services.findIndex((item) => item.slug === slug);

  const nextService =
    services[currentIndex + 1] ??
    services[0];

  return (
    <>
      <Navbar />

      <main className="conversion-page">
        <section className="conversion-hero">
          <div className="conversion-hero-background" aria-hidden="true">
            <div className="conversion-hero-grid" />
            <div className="conversion-hero-light conversion-hero-light-blue" />
            <div className="conversion-hero-light conversion-hero-light-red" />

            <span className="conversion-hero-letter">U</span>

            <div className="conversion-blueprint">
              <div className="conversion-blueprint-circle circle-large" />
              <div className="conversion-blueprint-circle circle-medium" />
              <div className="conversion-blueprint-circle circle-small" />

              <div className="conversion-blueprint-axis axis-horizontal" />
              <div className="conversion-blueprint-axis axis-vertical" />

              <span className="conversion-blueprint-node node-one" />
              <span className="conversion-blueprint-node node-two" />
              <span className="conversion-blueprint-node node-three" />
            </div>
          </div>

          <div className="section-container conversion-hero-container">
            <div className="conversion-hero-copy">
              <p className="conversion-eyebrow">
                {service.name}
              </p>

              <h1>{sales.promise}</h1>

              <p className="conversion-hero-description">
                {sales.heroText}
              </p>

              <div className="conversion-proof-line">
                {sales.heroHighlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>

              <div className="conversion-hero-actions">
                <Link href="#problema" className="conversion-primary-button">
                  Capisci cosa sta bloccando l&apos;azienda
                </Link>

                <Link href="#contatti" className="conversion-secondary-button">
                  Richiedi un&apos;analisi
                </Link>
              </div>

              <p className="conversion-hero-note">
                Nessun pacchetto standard. Prima analizziamo il problema,
                poi definiamo la soluzione più adatta.
              </p>
            </div>
          </div>
        </section>

        <section className="conversion-problem" id="problema">
          <div className="section-container conversion-reading-layout">
            <aside className="conversion-side-note">
              <p>Il punto di partenza</p>

              <span>
                Una soluzione digitale produce valore solo quando risolve
                un problema operativo, commerciale o organizzativo reale.
              </span>
            </aside>

            <article className="conversion-article">
              <p className="conversion-section-label">
                Il problema
              </p>

              <h2>{sales.problemTitle}</h2>

              <div className="conversion-rich-copy">
                {sales.problemCopy.map((paragraph, index) => (
                  <p
                    className={index === 0 ? "conversion-lead-paragraph" : ""}
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="conversion-callout">
                <p>
                  Più tempo passa, più procedure provvisorie, strumenti
                  scollegati e abitudini inefficienti diventano parte
                  dell&apos;organizzazione.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="conversion-cost">
          <div className="section-container">
            <div className="conversion-cost-heading">
              <p className="conversion-section-label">
                Il costo del non intervenire
              </p>

              <h2>{sales.consequencesTitle}</h2>

              <p>
                Questi problemi raramente compaiono in bilancio con una voce
                precisa. Si nascondono nelle ore perse, negli errori, nelle
                opportunità non seguite e nelle decisioni prese senza dati.
              </p>
            </div>

            <div className="conversion-cost-list">
              {sales.consequences.map((consequence) => (
                <article key={consequence}>
                  <h3>{consequence}</h3>
                </article>
              ))}
            </div>

            <div className="conversion-mid-cta">
              <div>
                <p>Non sai quanto ti sta costando?</p>

                <span>
                  Partiamo da un&apos;analisi del processo e individuiamo
                  inefficienze, rischi e opportunità.
                </span>
              </div>

              <Link href="#contatti">
                Richiedi una prima valutazione
              </Link>
            </div>
          </div>
        </section>

        <section className="conversion-solution">
          <div className="section-container conversion-solution-layout">
            <div className="conversion-solution-heading">
              <p className="conversion-section-label">
                Il nostro approccio
              </p>

              <h2>{sales.solutionTitle}</h2>
            </div>

            <article className="conversion-solution-copy">
              {sales.solutionCopy.map((paragraph, index) => (
                <p
                  className={index === 0 ? "conversion-lead-paragraph" : ""}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}

              <blockquote>
                Non introduciamo tecnologia per rendere il progetto più
                complesso. La introduciamo quando permette di lavorare meglio,
                controllare di più o crescere con meno dispersioni.
              </blockquote>
            </article>
          </div>
        </section>

        <section className="conversion-deliverables">
          <div className="section-container">
            <div className="conversion-deliverables-heading">
              <p className="conversion-section-label">
                Cosa possiamo realizzare
              </p>

              <h2>{sales.deliverablesTitle}</h2>

              <p>{sales.deliverablesIntro}</p>
            </div>

            <div className="conversion-deliverables-list">
              {sales.deliverables.map((deliverable) => (
                <article key={deliverable.title}>
                  <h3>{deliverable.title}</h3>
                  <p>{deliverable.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="conversion-method">
          <div className="section-container conversion-method-layout">
            <div className="conversion-method-intro">
              <p className="conversion-section-label">
                Come lavoriamo
              </p>

              <h2>
                Prima comprendiamo.
                <strong>
                  Poi progettiamo, realizziamo e misuriamo.
                </strong>
              </h2>

              <p>
                Il progetto non parte da un preventivo costruito su una lista
                di funzioni. Parte da un confronto con l&apos;azienda e
                dall&apos;analisi di ciò che deve cambiare concretamente.
              </p>
            </div>

            <div className="conversion-method-text">
              <p>
                Analizziamo il punto di partenza, gli strumenti già presenti,
                le persone coinvolte e il risultato che deve essere raggiunto.
              </p>

              <p>
                Definiamo quindi una soluzione sostenibile, evitando sia
                interventi insufficienti sia strutture inutilmente complesse.
              </p>

              <p>
                Quando possibile, il progetto viene diviso in fasi. In questo
                modo l&apos;azienda può verificare progressivamente il valore
                prodotto e prendere decisioni sulla base dei risultati.
              </p>
            </div>
          </div>
        </section>

        <section className="conversion-why">
          <div className="section-container conversion-reading-layout">
            <aside className="conversion-side-note">
              <p>Perché Univibe</p>

              <span>
                Strategia, software, infrastrutture, dati e crescita non
                possono essere gestiti come mondi separati.
              </span>
            </aside>

            <article className="conversion-article">
              <p className="conversion-section-label">
                Una visione completa
              </p>

              <h2>{sales.whyTitle}</h2>

              <div className="conversion-rich-copy">
                {sales.whyCopy.map((paragraph, index) => (
                  <p
                    className={index === 0 ? "conversion-lead-paragraph" : ""}
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link href="#contatti" className="conversion-text-link">
                Raccontaci il problema che vuoi risolvere
              </Link>
            </article>
          </div>
        </section>

        <section className="conversion-objections">
          <div className="section-container conversion-objections-layout">
            <div className="conversion-objections-heading">
              <p className="conversion-section-label">
                Prima di decidere
              </p>

              <h2>
                Le domande che dovresti fare prima di affidare il progetto.
              </h2>

              <p>
                Nessuna promessa generica. Qui trovi risposte chiare alle
                obiezioni che normalmente emergono prima di iniziare.
              </p>
            </div>

            <div className="conversion-objections-list">
              {sales.objections.map((objection) => (
                <details key={objection.question}>
                  <summary>{objection.question}</summary>
                  <p>{objection.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="conversion-final" id="contatti">
          <div className="conversion-final-background" aria-hidden="true">
            <div className="conversion-final-glow" />
            <span>UNIVIBE</span>
          </div>

          <div className="section-container conversion-final-container">
            <p className="conversion-section-label">
              Il prossimo passo
            </p>

            <h2>{sales.finalTitle}</h2>

            <p className="conversion-final-description">
              {sales.finalText}
            </p>

            <div className="conversion-final-box">
              <div>
                <strong>
                  Partiamo da un confronto concreto.
                </strong>

                <span>
                  Ci racconti il contesto, analizziamo il problema e valutiamo
                  se esistono le condizioni per costruire una soluzione utile.
                </span>
              </div>

              <div className="conversion-final-actions">
                <a href="mailto:info@univibegroup.it">
                  Richiedi un&apos;analisi
                </a>

                <a
                  href="https://wa.me/393000000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="conversion-next-service">
          <div className="section-container conversion-next-service-layout">
            <p>Continua a esplorare</p>

            <Link href={`/servizi/${nextService.slug}`}>
              <span>Approfondimento successivo</span>
              <strong>{nextService.name}</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
