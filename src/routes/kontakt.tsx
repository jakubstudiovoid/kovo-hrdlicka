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
      <PageHero kicker="Poptávka" title="Napište. Zavolejte. Přijedu.">
        Nejrychlejší je telefon. Když chcete poslat foto místa, hodí se e-mail
        nebo formulář.
      </PageHero>

      <section className="border-b border-line">
        <div className="page-grid grid gap-16 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-5">
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
                <p className="kicker mb-2">Dílna</p>
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
          <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="relative h-[50vh] min-h-80 overflow-hidden bg-surface">
          <iframe
            title={`Mapa — ${site.address.city}`}
            src={mapSrc}
            className="h-full w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteShell>
  );
}
