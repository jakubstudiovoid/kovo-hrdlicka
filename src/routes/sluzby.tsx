import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/home-page";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sluzby")({
  head: () =>
    seoHead(
      "Služby",
      "Schodiště, zábradlí, brány, terasy, přístřešky a atypická kovovýroba. Návrh, výroba a montáž. HRDL, Nová Ves nad Nisou.",
    ),
  component: SluzbyPage,
});

function SluzbyPage() {
  return (
    <SiteShell>
      <PageHero kicker="Nabídka" title="Služby">
        Zakázková kovovýroba — schodiště, zábradlí, brány, terasy, přístřešky a
        atypické konstrukce. Návrh, výroba a montáž. Povrchové úpravy zinek, lak
        a nerez.
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
