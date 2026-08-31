import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/home-page";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/data/projects";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/realizace/")({
  head: () =>
    seoHead(
      "Realizace",
      "Hotové zakázky KOVO Hrdlička — schodiště, zábradlí, brány a ocelové konstrukce. Nová Ves nad Nisou.",
    ),
  component: RealizaceIndex,
});

function RealizaceIndex() {
  return (
    <SiteShell>
      <PageHero kicker="Portfolio" title="Realizace">
        Vybrané zakázky. Každá konstrukce je navržena podle objektu a účelu.
      </PageHero>

      <section className="page-grid py-14 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 40} />
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <p className="kicker">Poptávka</p>
            <h2 className="mt-4 font-medium text-3xl tracking-tight">
              Podobné zadání
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Schodiště, zábradlí, brány, terasy a atypické konstrukce. Popište
              zakázku, navrhneme řešení.
            </p>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
            >
              Kontakt
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
