import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/home-page";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { finishes, services } from "@/data/services";
import { seoHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sluzby")({
  head: () =>
    seoHead(
      "Služby",
      "Schodiště, zábradlí, brány, terasy, přístřešky a kovový nábytek. Návrh, výroba a montáž. Povrchové úpravy zinek, lak, duplex a nerez. Nová Ves nad Nisou.",
    ),
  component: SluzbyPage,
});

function SluzbyPage() {
  return (
    <SiteShell>
      <PageHero kicker="Nabídka" title="Služby">
        Zakázková kovovýroba — schodiště, zábradlí, brány, terasy, přístřešky a
        nábytek. Návrh, výroba a montáž. Povrchové úpravy žárový zinek,
        práškový lak, duplex a nerez.
      </PageHero>

      <div>
        {services.map((s) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 border-b border-line"
          >
            <div className="page-grid py-14 md:py-16">
              <Reveal>
                <p className="text-xs tracking-[0.2em] text-subtle">{s.number}</p>
                <h2 className="mt-3 font-medium text-4xl tracking-tight">
                  {s.title}
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  {s.lead}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-8 grid gap-0">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line py-3 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="kicker">Materiály</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Povrchové úpravy
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Povrch se volí podle místa, zátěže a požadované životnosti.
              Úprava je součástí návrhu zakázky.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2">
            {finishes.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 2) * 60}
                className={cn(
                  "border-t border-line py-8",
                  i % 2 === 0 ? "sm:pr-10" : "sm:pl-10",
                )}
              >
                <p className="text-xs tracking-[0.2em] text-subtle">{f.number}</p>
                <h3 className="mt-3 font-medium text-xl tracking-tight md:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <h2 className="font-medium text-3xl tracking-tight">
              Atypické zadání
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Pokud zadání nespadá do uvedených kategorií, pošlete fotografii
              místa. Navrhneme vhodné řešení.
            </p>
            <Button asChild className="mt-8">
              <Link to="/kontakt">
                Poptávka
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
