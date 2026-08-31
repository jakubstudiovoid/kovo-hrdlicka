import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";

const defaultSizes = "(min-width: 1120px) 504px, (min-width: 768px) 50vw, 100vw";

export function ProjectCard({
  project,
  delay = 0,
  sizes = defaultSizes,
}: {
  project: Project;
  delay?: number;
  sizes?: string;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        to="/realizace/$slug"
        params={{ slug: project.slug }}
        className="group block"
      >
        <div className="overflow-hidden bg-bg-elevated">
          <img
            src={project.cover.src}
            srcSet={project.cover.srcSet}
            sizes={sizes}
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt}
            loading="lazy"
            decoding="async"
            className="img-frame aspect-4/5 w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] text-subtle uppercase">
          {project.year} — {project.category}
        </p>
        <h3 className="mt-2 font-medium text-xl tracking-tight md:text-2xl">
          {project.title}
        </h3>
        <span className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-muted transition-colors duration-200 group-hover:text-fg">
          Detail
          <ArrowUpRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </span>
      </Link>
    </Reveal>
  );
}
