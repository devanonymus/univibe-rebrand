import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
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

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | Univibe Group`,
    description: service.introduction,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex(
    (currentService) => currentService.slug === service.slug
  );

  const previousService =
    currentIndex > 0 ? services[currentIndex - 1] : services.at(-1);

  const nextService =
    currentIndex < services.length - 1
      ? services[currentIndex + 1]
      : services[0];

  return (
    <>
      <Navbar />

      <main className="service-detail-page">
        <section className="service-detail-hero">
          <div className="service-detail-hero-background" aria-hidden="true">
            <div className="service-detail-grid" />
            <div className="service-detail-blue-glow" />
            <div className="service-detail-red-glow" />

            <div className="service-detail-blueprint">
              <div className="detail-blueprint-circle detail-blueprint-large" />
              <div className="detail-blueprint-circle detail-blueprint-medium" />
              <div className="detail-blueprint-circle detail-blueprint-small" />
              <div className="detail-blueprint-axis detail-blueprint-horizontal" />
              <div className="detail-blueprint-axis detail-blueprint-vertical" />
              <div className="detail-blueprint-path detail-blueprint-path-one" />
              <div className="detail-blueprint-path detail-blueprint-path-two" />
              <span className="detail-blueprint-point detail-blueprint-point-one" />
              <span className="detail-blueprint-point detail-blueprint-point-two" />
              <span className="detail-blueprint-point detail-blueprint-point-three" />
            </div>

            <span className="service-detail-letter">U</span>
          </div>

          <div className="section-container service-detail-hero-container">
            <p className="service-detail-eyebrow">{service.eyebrow}</p>

            <h1>{service.title}</h1>

            <div className="service-detail-hero-lower">
              <p>{service.introduction}</p>

              <div className="service-detail-hero-actions">
                <Link href="#visione">Scopri l&apos;approccio</Link>
                <Link href="#contatti">Parliamo del progetto</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="service-detail-vision" id="visione">
          <div className="section-container service-detail-vision-grid">
            <div className="service-detail-section-title">
              <p>La nostra visione</p>

              <h2>
                Prima della tecnologia,
                <strong> viene il problema da risolvere.</strong>
              </h2>
            </div>

            <div className="service-detail-long-copy">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-impact">
          <div className="section-container">
            <div className="service-detail-impact-heading">
              <p>Impatto</p>

              <h2>
                Il valore non è nello strumento.
                <strong> È nel cambiamento che produce.</strong>
              </h2>
            </div>

            <div className="service-detail-impact-flow">
              {service.outcomes.map((outcome, index) => (
                <div
                  className={`service-detail-impact-item impact-item-${
                    index + 1
                  }`}
                  key={outcome}
                >
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-capabilities">
          <div className="section-container service-detail-capabilities-layout">
            <div className="service-detail-capabilities-copy">
              <p>Ambiti di intervento</p>

              <h2>
                Competenze coordinate
                <strong> all&apos;interno dello stesso sistema.</strong>
              </h2>

              <p className="service-detail-capabilities-description">
                Selezioniamo tecnologie, strumenti e competenze in funzione
                dell&apos;obiettivo. Ogni intervento viene progettato per
                integrarsi con il resto dell&apos;organizzazione.
              </p>
            </div>

            <div className="service-detail-capabilities-words">
              {service.capabilities.map((capability, index) => (
                <span key={capability}>
                  {capability}
                  {index < service.capabilities.length - 1 && <i />}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-method">
          <div className="section-container">
            <div className="service-detail-method-heading">
              <p>Metodo</p>

              <h2>
                Un percorso chiaro,
                <strong> costruito intorno alla realtà aziendale.</strong>
              </h2>
            </div>

            <div className="service-detail-method-flow">
              {service.process.map((step) => (
                <article key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-closing">
          <div className="service-detail-closing-background" aria-hidden="true">
            <div />
            <span>UNIVIBE</span>
          </div>

          <div className="section-container service-detail-closing-container">
            <p>La nostra direzione</p>
            <h2>{service.closingTitle}</h2>
            <div className="service-detail-closing-lower">
              <p>{service.closingText}</p>

              <Link href="#contatti">
                Iniziamo da un&apos;analisi
              </Link>
            </div>
          </div>
        </section>

        <section className="service-detail-contact" id="contatti">
          <div className="section-container service-detail-contact-grid">
            <div>
              <p>Hai un progetto da sviluppare?</p>

              <h2>
                Parliamo della tua azienda,
                <strong> prima ancora della tecnologia.</strong>
              </h2>
            </div>

            <div className="service-detail-contact-actions">
              <a href="mailto:info@univibegroup.it">
                info@univibegroup.it
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

        <nav
          className="service-detail-navigation"
          aria-label="Navigazione tra i servizi"
        >
          <div className="section-container service-detail-navigation-grid">
            {previousService && (
              <Link href={`/servizi/${previousService.slug}`}>
                <span>Servizio precedente</span>
                <strong>{previousService.name}</strong>
              </Link>
            )}

            {nextService && (
              <Link href={`/servizi/${nextService.slug}`}>
                <span>Servizio successivo</span>
                <strong>{nextService.name}</strong>
              </Link>
            )}
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
