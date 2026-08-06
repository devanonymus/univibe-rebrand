import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceSalesContent } from "@/data/service-sales";
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
    services[currentIndex + 1] ?? services[0];

  return (
    <>
      <Navbar />

      <main className="sales-service-page">
        <section className="sales-service-hero">
          <div className="sales-service-hero-bg" aria-hidden="true">
            <div className="sales-service-grid" />
            <div className="sales-service-blue-glow" />
            <div className="sales-service-red-glow" />
            <span>U</span>
          </div>

          <div className="section-container sales-service-hero-container">
            <p className="sales-service-eyebrow">{service.name}</p>

            <h1>{sales.promise}</h1>

            <p className="sales-service-lead">{sales.heroText}</p>

            <div className="sales-service-highlights">
              {sales.heroHighlights.map((highlight) => (
                <p key={highlight}>{highlight}</p>
              ))}
            </div>

            <div className="sales-service-actions">
              <Link href="#analisi">Scopri come lavoriamo</Link>
              <Link href="#contatti">Richiedi un’analisi</Link>
            </div>
          </div>
        </section>

        <section className="sales-narrative" id="analisi">
          <div className="section-container sales-narrative-grid">
            <aside>
              <p>Il problema</p>
              <span>
                Prima di proporre una soluzione, bisogna comprendere dove
                l’azienda sta perdendo tempo, margine o controllo.
              </span>
            </aside>

            <div className="sales-long-copy">
              <h2>{sales.problemTitle}</h2>

              {sales.problemCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="sales-consequences">
          <div className="section-container">
            <div className="sales-consequences-heading">
              <p>Il costo del non intervenire</p>
              <h2>{sales.consequencesTitle}</h2>
            </div>

            <div className="sales-consequences-text">
              {sales.consequences.map((consequence) => (
                <p key={consequence}>{consequence}</p>
              ))}
            </div>

            <Link href="#contatti" className="sales-inline-cta">
              Verifica dove la tua azienda sta perdendo risorse
            </Link>
          </div>
        </section>

        <section className="sales-solution">
          <div className="section-container sales-solution-grid">
            <div>
              <p className="sales-section-label">La soluzione Univibe</p>
              <h2>{sales.solutionTitle}</h2>
            </div>

            <div className="sales-solution-copy">
              {sales.solutionCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="sales-deliverables">
          <div className="section-container">
            <div className="sales-deliverables-heading">
              <p>Cosa realizziamo</p>
              <h2>{sales.deliverablesTitle}</h2>
              <span>{sales.deliverablesIntro}</span>
            </div>

            <div className="sales-deliverables-list">
              {sales.deliverables.map((deliverable) => (
                <article key={deliverable.title}>
                  <h3>{deliverable.title}</h3>
                  <p>{deliverable.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sales-why">
          <div className="section-container sales-why-grid">
            <div>
              <p>Perché Univibe</p>
              <h2>{sales.whyTitle}</h2>
            </div>

            <div>
              {sales.whyCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <Link href="#contatti">
                Parliamo del tuo caso specifico
              </Link>
            </div>
          </div>
        </section>

        <section className="sales-objections">
          <div className="section-container">
            <div className="sales-objections-heading">
              <p>Domande che è giusto fare</p>
              <h2>
                Prima di decidere, devi avere risposte chiare.
              </h2>
            </div>

            <div className="sales-objections-list">
              {sales.objections.map((objection) => (
                <details key={objection.question}>
                  <summary>{objection.question}</summary>
                  <p>{objection.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sales-final" id="contatti">
          <div className="sales-final-bg" aria-hidden="true">
            <span>UNIVIBE</span>
          </div>

          <div className="section-container sales-final-container">
            <p>Il prossimo passo</p>
            <h2>{sales.finalTitle}</h2>
            <span>{sales.finalText}</span>

            <div className="sales-final-actions">
              <a href="mailto:info@univibegroup.it">
                Richiedi un’analisi
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
        </section>

        <section className="sales-next-service">
          <div className="section-container">
            <p>Esplora anche</p>
            <Link href={`/servizi/${nextService.slug}`}>
              {nextService.name}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
