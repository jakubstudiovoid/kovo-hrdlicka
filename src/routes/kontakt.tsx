import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/home-page";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    seoHead(
      "Kontakt",
      `Poptávka kovovýroby HRDL. ${site.phone}, ${site.email}, ${site.address.full}.`,
    ),
  component: KontaktPage,
});

function KontaktPage() {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.lng - 0.02}%2C${site.geo.lat - 0.012}%2C${site.geo.lng + 0.02}%2C${site.geo.lat + 0.012}&layer=mapnik&marker=${site.geo.lat}%2C${site.geo.lng}`;

  return (
    <SiteShell>
      <PageHero kicker="Poptávka" title="Kontakt">
        Telefon, e-mail nebo poptávkový formulář. Dílna v Nové Vsi nad Nisou.
      </PageHero>

      <section className="border-b border-line">
        <div className="page-grid py-14 md:py-20">
          <Reveal>
            <ul className="flex flex-col gap-8">
              <li>
                <p className="kicker mb-2">Telefon</p>
                <a
                  href={site.phoneHref}
                  className="font-medium text-2xl tracking-tight transition-colors duration-200 hover:text-steel"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="kicker mb-2">E-mail</p>
                <a
                  href={site.emailHref}
                  className="text-lg tracking-tight transition-colors duration-200 hover:text-steel"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="kicker mb-2">Sídlo</p>
                <p className="text-base leading-relaxed">
                  {site.address.line}
                  <br />
                  {site.address.zip} {site.address.city}
                </p>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${site.geo.lat}&mlon=${site.geo.lng}#map=15/${site.geo.lat}/${site.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-[0.14em] text-muted uppercase transition-colors duration-200 hover:text-fg"
                >
                  Mapa
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </a>
              </li>
              <li>
                <p className="kicker mb-2">Facebook</p>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-steel"
                >
                  {site.brand}
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={80} className="mt-14 border-t border-line pt-14">
            <p className="kicker mb-8">Formulář</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="page-grid py-10 md:py-12">
          <div className="relative h-72 overflow-hidden bg-surface md:h-80">
            <iframe
              title={`Mapa — ${site.address.city}`}
              src={mapSrc}
              className="h-full w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
