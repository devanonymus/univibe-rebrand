import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="final-cta" id="contatti">
      <div className="final-cta-background" aria-hidden="true">
        <div className="final-cta-grid" />
        <div className="final-cta-glow final-cta-glow-red" />
        <div className="final-cta-glow final-cta-glow-blue" />
        <span>U</span>
      </div>

      <div className="section-container final-cta-container">
        <p className="section-kicker">Iniziamo da una conversazione</p>

        <h2>
          Il prossimo sistema digitale
          <span> potrebbe trasformare la tua azienda.</span>
        </h2>

        <p className="final-cta-description">
          Raccontaci dove vuoi arrivare. Analizzeremo il contesto e capiremo
          insieme quale soluzione può generare il maggiore valore.
        </p>

        <div className="final-cta-actions">
          <Link href="mailto:info@univibegroup.it" className="button button-primary">
            Parla con Univibe
            <ArrowUpRight size={18} />
          </Link>

          <a
            href="https://wa.me/393XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            Scrivici su WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
