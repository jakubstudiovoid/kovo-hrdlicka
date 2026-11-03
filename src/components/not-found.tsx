import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const links = [
  { to: "/", label: "Úvod" },
  { to: "/realizace", label: "Realizace" },
  { to: "/sluzby", label: "Služby" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function NotFound() {
  return (
    <SiteShell>
      <section className="page-grid flex min-h-[calc(100dvh-11rem)] flex-col justify-center py-24 md:py-32">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
          <p
            aria-hidden="true"
            className="not-found-num font-medium leading-none tracking-[-0.06em] text-fg/[0.12] md:col-span-6"
          >
            404
          </p>

          <div className="md:col-span-5 md:col-start-8">
            <p className="kicker">Chyba</p>
            <h1 className="mt-4 font-medium text-display tracking-tight">
              Stránka nebyla
              <br className="hidden sm:block" /> nalezena
            </h1>
            <p className="page-hero-lead mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              Požadovaná adresa neexistuje nebo byla přesunuta.
              <br />
              Pokračujte na jednu z hlavních stránek.
            </p>

            <nav aria-label="Pokračovat" className="mt-10 border-t border-line">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between border-b border-line py-4 text-sm tracking-[0.14em] uppercase transition-colors duration-200 hover:text-steel"
                >
                  {item.label}
                  <ArrowUpRight
                    className="size-3.5 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                    strokeWidth={1.75}
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
