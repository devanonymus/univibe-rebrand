import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MobileConversionBar() {
  return (
    <div className="mobile-conversion-bar" aria-label="Contatto rapido">
      <div className="mobile-conversion-bar-inner">
        <div className="mobile-conversion-brand">
          U
        </div>

        <div className="mobile-conversion-copy">
          <span>Hai un progetto?</span>
          <strong>Parliamone.</strong>
        </div>

        <Link href="/#contatti" className="mobile-conversion-button">
          Contattaci
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
