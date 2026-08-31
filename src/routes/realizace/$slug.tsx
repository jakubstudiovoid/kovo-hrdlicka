import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/realizace/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    return seoHead(
      project ? project.title : "Realizace",
      project
        ? `${project.title} — ${project.excerpt}`
        : "Realizace KOVO Hrdlička.",
    );
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);
  if (!project) throw notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 4);

  return (
    <SiteShell>
      <article>
        <header className="page-grid pt-28 pb-10 md:pt-36 md:pb-12">
          <Link
            to="/realizace"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors duration-200 hover:text-fg"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.75} />
            Realizace
          </Link>
          <p className="mt-8 text-xs tracking-[0.2em] text-subtle uppercase">
            {project.year} — {project.category} — {project.location}
          </p>
          <h1 className="mt-4 font-medium text-display tracking-tight">
            {project.title}
          </h1>
        </header>

        <div className="page-grid">
          <img
            src={project.cover.src}
            srcSet={project.cover.srcSet}
            sizes="(min-width: 1120px) 1040px, 100vw"
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt}
            fetchPriority="high"
            className="img-frame w-full object-cover object-center"
          />
        </div>

        <section className="page-grid py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              {project.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-5 text-base leading-relaxed text-fg/90 first:mt-0"
                >
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9" delay={80}>
              <dl className="border-t border-line">
                <div className="flex justify-between gap-4 border-b border-line py-4">
                  <dt className="text-xs tracking-[0.16em] text-subtle uppercase">
                    Místo
                  </dt>
                  <dd className="text-sm">{project.location}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line py-4">
                  <dt className="text-xs tracking-[0.16em] text-subtle uppercase">
                    Rok
                  </dt>
                  <dd className="text-sm">{project.year}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line py-4">
                  <dt className="text-xs tracking-[0.16em] text-subtle uppercase">
                    Typ
                  </dt>
                  <dd className="text-sm">{project.category}</dd>
                </div>
                <div className="border-b border-line py-4">
                  <dt className="text-xs tracking-[0.16em] text-subtle uppercase">
                    Materiál
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.materials.map((m) => (
                      <span
                        key={m}
                        className="border border-border px-2 py-1 text-xs text-muted"
                      >
                        {m}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <Button asChild className="mt-8" variant="outline">
                <Link to="/kontakt">
                  Poptávka
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {project.gallery.length > 0 ? (
          <section className="border-t border-line">
            <div className="page-grid grid gap-4 py-10">
              {project.gallery.map((img, i) => (
                <Reveal key={img.src} delay={i * 70}>
                  <img
                    src={img.src}
                    srcSet={img.srcSet}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="img-frame w-full object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="border-t border-line">
          <div className="page-grid py-14 md:py-16">
            <p className="kicker mb-8">Další realizace</p>
            <ul className="divide-y divide-line border-y border-line">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/realizace/$slug"
                    params={{ slug: p.slug }}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-xs tracking-[0.16em] text-subtle uppercase">
                        {p.category}
                      </span>
                      <span className="mt-1 block font-medium text-xl tracking-tight md:text-2xl">
                        {p.title}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
