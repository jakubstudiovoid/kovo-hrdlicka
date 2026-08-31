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
      "O řemesle",
      "Pavel Hrdlička — zakázková kovovýroba HRDL v Nové Vsi nad Nisou. Schodiště, zábradlí a ocelové konstrukce na míru.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero kicker="Dílna" title={`${site.legalName}.`}>
        {site.brand}. IČO {site.ico}. Nová Ves nad Nisou, kousek od Jablonce.
      </PageHero>

      <section className="border-b border-line">
        <div className="page-grid grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <p className="text-xl leading-relaxed md:text-2xl">
              Pracuji sám. Proto vím, co je svařené, co je zaměřené a co visí na
              stěně vašeho domu.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted">
              Kovovýrobu vedu jako živnost — bez zaměstnanců, bez obchodníka,
              bez anonymního provozu. Zakázka jde ode mě k vám. Od prvního
              telefonátu po utahování posledního šroubu na stavbě.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Dílna stojí v Nové Vsi nad Nisou. Jezdím po Jizerských horách,
              Jablonci, Liberci a dál, když dává smysl přijet. Interiér i
              exteriér. Novostavba i dům, který už nějakou ocel má a potřebuje
              další kus, který k ní sedne.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={80}>
            <dl className="border-t border-line text-sm">
              {[
                ["Značka", site.name],
                ["Firma", site.brand],
                ["Osoba", site.legalName],
                ["IČO", site.ico],
                ["Sídlo", site.address.full],
                ["Od", String(site.founded)],
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

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="kicker">Jak pracuji</p>
            <h2 className="mt-4 max-w-2xl font-medium text-3xl tracking-tight">
              Materiál podle místa. Tvar podle domu.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                t: "Zinek",
                d: "Žárový zinek na venkovní konstrukce, brány, schody do terénu. Drží počasí, stárne slušně.",
              },
              {
                t: "Lak",
                d: "Černý mat do interiéru i k dřevu. Když má ocel zmizet a nechat mluvit stupně nebo výhled.",
              },
              {
                t: "Kombinace",
                d: "Dřevo na oceli, tahokov, pororošt, nerezová lanka. Spoje, které mají smysl — ne efekt pro efekt.",
              },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <article className="bg-bg p-7 md:p-8">
                  <h3 className="font-medium text-xl tracking-tight">{b.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{b.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="page-grid py-20">
          <Reveal>
            <h2 className="max-w-xl font-medium text-3xl tracking-tight">
              Chcete se podívat na práci?
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
