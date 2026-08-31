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
      "Schodiště, zábradlí, brány, terasy, přístřešky a atypická kovovýroba. Zakázkově, od zaměření po montáž. HRDL, Nová Ves nad Nisou.",
    ),
  component: SluzbyPage,
});

function SluzbyPage() {
  return (
    <SiteShell>
      <PageHero kicker="Nabídka" title="Co vyrábím">
        Zakázková kovovýroba od schodiště po bránu. Navrhnu, vyrobím a namontuji.
        Povrch podle místa — zinek, lak, nerez.
      </PageHero>

      <div>
        {services.map((s) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 border-b border-line"
          >
            <div className="page-grid grid gap-10 py-16 md:grid-cols-12 md:py-20">
              <Reveal className="md:col-span-5">
                <p className="text-xs tracking-[0.2em] text-subtle">{s.number}</p>
                <h2 className="mt-4 font-medium text-4xl tracking-tight">
                  {s.title}
                </h2>
              </Reveal>
              <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
                <p className="text-lg leading-relaxed">{s.lead}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-8 grid gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line py-3 text-sm text-muted first:border-t-0 first:pt-0"
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
        <div className="page-grid py-20">
          <Reveal>
            <h2 className="max-w-xl font-medium text-3xl tracking-tight">
              Nevíte, do které kolonky to spadá?
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              Pošlete foto místa. Řekneme si, jestli to má smysl z oceli — a jak.
            </p>
            <Button asChild className="mt-8">
              <Link to="/kontakt">
                Napsat
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
