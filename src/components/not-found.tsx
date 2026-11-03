import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteShell>
      <header className="border-b border-line pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="page-grid">
          <p className="kicker">404</p>
          <h1 className="mt-5 font-medium text-display tracking-tight">
            Stránka nebyla nalezena
          </h1>
          <p className="page-hero-lead mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Požadovaná adresa neexistuje nebo byla přesunuta.
            <br />
            Pokračujte na úvod, realizace nebo kontakt.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/">Úvod</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/realizace">Realizace</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/kontakt">
                Kontakt
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </SiteShell>
  );
}
