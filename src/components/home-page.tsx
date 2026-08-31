import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { materials, processSteps, services } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const featured = projects[0];
const homeProjects = projects.slice(1, 7);
const imgSizes = "(min-width: 1120px) 1040px, 100vw";

export function HomePage() {
  return (
    <>
      <Hero />
      <Materials />
      <Intro />
      <Featured />
      <ServicesPreview />
      <Process />
      <AboutTeaser />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-bg">
      <div className="page-grid pt-28 pb-12 md:pt-36 md:pb-16">
        <p className="hero-fade kicker" style={{ animationDelay: "0.2s" }}>
          {site.address.city}
        </p>
        <h1 className="mt-5 font-medium text-hero tracking-tight">
          <span className="hero-line">
            <span>Zakázková</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "0.1s" }}>kovovýroba</span>
          </span>
        </h1>
        <p
          className="hero-fade mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Schodiště, zábradlí, brány a ocelové konstrukce. Návrh, výroba
          a&nbsp;montáž.
        </p>
        <div
          className="hero-fade mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <Button asChild size="lg">
            <Link to="/kontakt">
              Poptávka
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/realizace">Realizace</Link>
          </Button>
        </div>
      </div>

      {featured ? (
        <div className="page-grid pb-16 md:pb-20">
          <figure>
            <Link
              to="/realizace/$slug"
              params={{ slug: featured.slug }}
              className="group block"
            >
              <img
                src={featured.cover.src}
                srcSet={featured.cover.srcSet}
                sizes={imgSizes}
                width={featured.cover.width}
                height={featured.cover.height}
                alt={featured.cover.alt}
                fetchPriority="high"
                className="hero-photo img-frame aspect-4/5 w-full object-cover object-[58%_42%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] md:aspect-4/3"
              />
            </Link>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs tracking-[0.18em] text-subtle uppercase">
              <span>
                01 — {featured.category}
              </span>
              <span>{featured.year}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}

function Materials() {
  return (
    <div className="border-y border-line" aria-hidden="true">
      <div className="page-grid flex flex-wrap gap-x-5 gap-y-2 py-4">
        {materials.map((item) => (
          <span
            key={item}
            className="text-xs tracking-[0.2em] text-muted uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section id="intro" className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Firma</p>
          <h2 className="mt-5 font-medium text-4xl tracking-tight">
            Od zaměření po montáž
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg/90 md:text-lg">
            {site.brand} vyrábí zakázkové ocelové konstrukce v&nbsp;Nové Vsi nad
            Nisou. Zakázku zajišťujeme kompletně — zaměření na stavbě, návrh,
            výroba a montáž.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            Schodiště, zábradlí, brány, terasy, přístřešky a atypické konstrukce.
            Povrchové úpravy: žárový zinek, černý lak, nerez. Kombinace oceli
            a&nbsp;dřeva.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  if (!homeProjects.length) return null;
  return (
    <section className="border-b border-line">
      <div className="page-grid py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Portfolio</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Realizace
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/realizace"
              className="hidden items-center gap-1.5 text-xs tracking-[0.16em] text-muted uppercase transition-colors duration-200 hover:text-fg sm:inline-flex"
            >
              Přehled
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          {homeProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-paper text-ink">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-ink-muted uppercase">
            Služby
          </p>
          <h2 className="mt-4 font-medium text-4xl tracking-tight">
            Obory výroby
          </h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={i * 40}>
              <Link
                to="/sluzby"
                hash={s.slug}
                className="group grid grid-cols-12 items-baseline gap-x-3 gap-y-1 py-6 md:py-7"
              >
                <span className="col-span-2 text-xs tracking-[0.18em] text-ink-muted">
                  {s.number}
                </span>
                <span className="col-span-9">
                  <span className="block font-medium text-xl tracking-tight md:text-2xl">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                    {s.lead}
                  </span>
                </span>
                <span className="col-span-1 hidden self-center justify-end sm:flex">
                  <ArrowUpRight
                    className="size-4 text-ink/30 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Postup</p>
          <h2 className="mt-4 font-medium text-4xl tracking-tight">
            Průběh zakázky
          </h2>
        </Reveal>
        <ol className="mt-12 grid border-b border-line sm:grid-cols-2">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 80}
              className={cn(
                "border-t border-line",
                i % 2 === 0 && "sm:border-r",
              )}
            >
              <article className="flex h-full flex-col p-6 md:p-8">
                <span className="text-xs tracking-[0.2em] text-subtle">
                  {step.number}
                </span>
                <h3 className="mt-8 font-medium text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">O firmě</p>
          <h2 className="mt-5 font-medium text-display tracking-tight">
            {site.legalName}
          </h2>
          <p className="mt-2 text-sm tracking-[0.16em] text-muted uppercase">
            {site.brand} · IČO {site.ico}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
            Zakázkovou kovovýrobu vedeme jako specializovanou dílnu. Kontakt,
            návrh i montáž probíhá přímo s&nbsp;výrobcem, bez zprostředkovatele.
          </p>
          <Link
            to="/o-nas"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
          >
            Více o firmě
            <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section>
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Kontakt</p>
          <h2 className="mt-5 font-medium text-display tracking-tight">
            Poptávka zakázky
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Popište zadání nebo zavolejte. Ozveme se s&nbsp;termínem zaměření.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Poptávka
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.phoneHref}>{site.phone}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  children,
  className,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "border-b border-line pt-28 pb-12 md:pt-36 md:pb-16",
        className,
      )}
    >
      <div className="page-grid">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 font-medium text-display tracking-tight">{title}</h1>
        {children ? (
          <div className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
