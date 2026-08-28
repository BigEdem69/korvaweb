import { Link } from "@tanstack/react-router";
import korvaLogo from "@/assets/korva-logo.png";

export function SiteFooter() {
  return (
    <footer className="night">
      <div className="wrap grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-10">
          <div className="flex items-center">
            <img src={korvaLogo} alt="Korva Systems" className="h-20 w-auto object-contain" />
          </div>
          <p className="mt-4 text-sm text-midnight-muted">
            Digital infrastructure for African businesses and communities. Starting with sanitation.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-midnight-foreground">
            Products
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-midnight-muted">
            <li>
              <Link to="/korva-waste" className="hover:text-cyan">
                Korva Waste
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className="hover:text-cyan">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-midnight-foreground">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-midnight-muted">
            <li>
              <Link to="/about" className="hover:text-cyan">
                About
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-cyan">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/press-kit" className="hover:text-cyan">
                Press Kit
              </Link>
            </li>
            <li>
              <Link to="/partner" className="hover:text-cyan">
                Partner With Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-midnight-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-midnight-muted">
            <li>
              <a href="mailto:korvasystems@gmail.com" className="hover:text-cyan">
                korvasystems@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/233000000000" className="hover:text-cyan">
                WhatsApp
              </a>
            </li>
            <li>Tema, Ghana</li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-2 border-t border-midnight-foreground/15 py-6 text-xs text-midnight-muted">
          <span>© 2026 Korva Systems</span>
          <span>Building the operating systems behind African businesses and communities.</span>
        </div>
      </div>
    </footer>
  );
}
