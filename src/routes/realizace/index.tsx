import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/home-page";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/realizace/")({
  head: () =>
    seoHead(
      "Realizace",
      "Hotové zakázky KOVO Hrdlička — schodiště, zábradlí a ocelové konstrukce. Nová Ves nad Nisou.",
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
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <Link
              to="/realizace/$slug"
              params={{ slug: project.slug }}
              className="group block"
            >
              <div className="overflow-hidden bg-surface">
                <img
                  src={project.cover.src}
                  srcSet="/realizace/schodiste-800.webp 800w, /realizace/schodiste-1200.webp 1200w, /realizace/schodiste-full.webp 1536w"
                  sizes="(min-width: 768px) 704px, 100vw"
                  width={project.cover.width}
                  height={project.cover.height}
                  alt={project.cover.alt}
                  className="img-frame aspect-4/5 w-full object-cover object-[58%_38%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6">
                <p className="text-xs tracking-[0.2em] text-subtle uppercase">
                  {project.year} — {project.category}
                </p>
                <h2 className="mt-3 font-medium text-3xl tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{project.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase">
                  Detail realizace
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-line">
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <p className="kicker">Další práce</p>
            <h2 className="mt-4 font-medium text-3xl tracking-tight">
              Obory výroby
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Kromě interiérových schodišť vyrábíme brány, ploty, venkovní
              schodiště, terasy, přístřešky a atypické konstrukce.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} as="li" delay={i * 50}>
                <Link
                  to="/sluzby"
                  hash={s.slug}
                  className="flex h-full flex-col bg-bg p-6 transition-colors duration-200 hover:bg-bg-elevated"
                >
                  <span className="text-xs tracking-[0.18em] text-subtle">
                    {s.number}
                  </span>
                  <span className="mt-6 font-medium text-xl tracking-tight">
                    {s.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">
                    {s.lead}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
