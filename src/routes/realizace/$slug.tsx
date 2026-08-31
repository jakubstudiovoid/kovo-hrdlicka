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

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <SiteShell>
      <article>
        <header className="page-grid pt-28 pb-10 md:pt-36 md:pb-14">
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
          <h1 className="mt-4 max-w-4xl font-medium text-display tracking-tight">
            {project.title}
          </h1>
        </header>

        <div className="overflow-hidden bg-surface">
          <img
            src={project.gallery[0]?.src ?? project.cover.src}
            srcSet="/realizace/schodiste-800.webp 800w, /realizace/schodiste-1200.webp 1200w, /realizace/schodiste-full.webp 1536w"
            sizes="100vw"
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt}
            fetchPriority="high"
            className="img-frame mx-auto max-h-[88dvh] w-full object-cover object-center"
          />
        </div>

        <section className="page-grid grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            {project.body.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-base leading-relaxed text-fg/90 first:mt-0 md:text-lg"
              >
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
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
                Podobná zakázka
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
          </Reveal>
        </section>

        <section className="border-t border-line">
          <div className="page-grid grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.slice(1).map((img, i) => (
              <Reveal key={img.src} delay={i * 70} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <img
                  src={img.src}
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

        {others.length > 0 ? (
          <section className="border-t border-line">
            <div className="page-grid py-16">
              <p className="kicker mb-8">Další</p>
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/realizace/$slug"
                  params={{ slug: p.slug }}
                  className="group flex items-center justify-between gap-4 border-t border-line py-6"
                >
                  <span className="font-medium text-2xl tracking-tight">
                    {p.title}
                  </span>
                  <ArrowUpRight className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section className="border-t border-line">
            <div className="page-grid py-16 md:py-20">
              <p className="kicker">Další zakázka</p>
              <h2 className="mt-4 max-w-xl font-medium text-3xl tracking-tight">
                Máte podobné zadání?
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted">
                Schodiště, zábradlí, brány, terasy. Napište — zaměřím a navrhneme
                to na míru.
              </p>
              <Button asChild className="mt-8">
                <Link to="/kontakt">Poptávka</Link>
              </Button>
            </div>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
