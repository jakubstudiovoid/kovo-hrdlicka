import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/home-page";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/o-nas")({
  head: () =>
    seoHead(
      "O firmě",
      "Kovovýroba Hrdlička — zakázková kovovýroba v Nové Vsi nad Nisou. Schodiště, zábradlí a ocelové konstrukce. Návrh, výroba a montáž.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero kicker="O firmě" title={site.brand}>
        Zakázková kovovýroba. IČO {site.ico}. Sídlo Nová Ves nad Nisou,
        okres Jablonec nad Nisou.
      </PageHero>

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="text-lg leading-relaxed md:text-xl">
              {site.brand} je zakázková kovovýroba {site.legalName}. Zakázky
              zajišťujeme od prvního kontaktu po montáž.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
              Dílna sídlí v Nové Vsi nad Nisou. Působíme v Jizerských horách,
              Jablonci nad Nisou, Liberci a v širším Libereckém kraji. Interiér
              i exteriér, novostavby i rekonstrukce.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="mt-12 border-t border-line text-sm">
              {[
                ["Značka", site.name],
                ["Firma", site.brand],
                ["Osoba", site.legalName],
                ["IČO", site.ico],
                ["Sídlo", site.address.full],
                ["Založeno", String(site.founded)],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-3 gap-3 border-b border-line py-4"
                >
                  <dt className="text-xs tracking-[0.14em] text-subtle uppercase">
                    {k}
                  </dt>
                  <dd className="col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <h2 className="font-medium text-3xl tracking-tight">
              Realizace a poptávka
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/realizace">Realizace</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/kontakt">
                  Kontakt
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
