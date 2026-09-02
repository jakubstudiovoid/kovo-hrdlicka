import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { materials, processSteps, services } from "@/data/services";
import { getProject } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const homeProjects = [
  "schodiste-a-zabradi",
  "terasa-a-schodiste",
  "pristresek",
  "vstupni-plosina",
  "brana-tahokov",
  "brana-drevo",
].flatMap((slug) => {
  const project = getProject(slug);
  return project ? [project] : [];
});
const imgSizes = "(min-width: 1120px) 1040px, 100vw";

const heroPhoto = {
  src: "/hero/cedule.webp",
  srcSet:
    "/hero/cedule-800.webp 800w, /hero/cedule-1400.webp 1400w, /hero/cedule.webp 1920w",
  width: 1920,
  height: 1011,
  alt: "Cedule Kovovýroba Hrdlička na ocelovém plotě. Nová Ves nad Nisou.",
};

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
          className="hero-fade page-hero-lead mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Schodiště, zábradlí, brány a ocelové konstrukce.
          <br />
          Návrh, výroba a&nbsp;montáž.
        </p>
        <div
          className="hero-fade mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/realizace">Realizace</Link>
          </Button>
          <Button asChild size="lg">
            <Link to="/kontakt">
              Poptávka
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="page-grid pb-16 md:pb-20">
        <figure className="group">
          <div className="overflow-hidden">
            <span className="hero-photo">
              <img
                src={heroPhoto.src}
                srcSet={heroPhoto.srcSet}
                sizes={imgSizes}
                width={heroPhoto.width}
                height={heroPhoto.height}
                alt={heroPhoto.alt}
                fetchPriority="high"
                className="img-frame img-zoom aspect-3/2 w-full object-cover object-[42%_center] md:aspect-video"
              />
            </span>
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs tracking-[0.18em] text-subtle uppercase transition-colors duration-500 group-hover:text-muted">
            <span>Kovovýroba</span>
            <span>{site.address.city}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Materials() {
  const half = [...materials, ...materials];
  const loop = [...half, ...half];

  return (
    <div className="border-y border-line">
      <p className="sr-only">Materiály: {materials.join(", ")}.</p>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-sep" />
            </span>
          ))}
        </div>
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
            Schodiště, zábradlí, brány, terasy, přístřešky, nábytek a atypické
            konstrukce. Vše vyrábíme pečlivě a na zakázku.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  if (!homeProjects.length) return null;
  const portfolioLink = (
    <Link
      to="/realizace"
      className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
    >
      Zobrazit kompletní portfolio
      <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
    </Link>
  );

  return (
    <section className="border-b border-line">
      <div className="page-grid py-16 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Portfolio</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Vybrané realizace
            </h2>
          </Reveal>
          <Reveal delay={80} className="hidden sm:block">
            {portfolioLink}
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          {homeProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 50} />
          ))}
        </div>

        <Reveal delay={80} className="sm:hidden">
          <div className="mt-12">{portfolioLink}</div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Služby</p>
          <h2 className="mt-4 font-medium text-4xl tracking-tight">
            Co vyrábíme
          </h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={i * 40}>
              <Link
                to="/sluzby"
                hash={s.slug}
                className="group grid grid-cols-12 items-baseline gap-x-3 gap-y-1 py-6 md:py-7"
              >
                <span className="col-span-2 text-xs tracking-[0.18em] text-subtle">
                  {s.number}
                </span>
                <span className="col-span-9">
                  <span className="block font-medium text-xl tracking-tight md:text-2xl">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {s.lead}
                  </span>
                </span>
                <span className="col-span-1 hidden self-center justify-end sm:flex">
                  <ArrowUpRight
                    className="size-4 text-subtle transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
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
        <ol className="mt-14 flex flex-col sm:flex-row">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 80}
              className="flex-1 border-l border-line py-7 pl-6 first:pt-0 last:pb-0 sm:border-l-0 sm:border-t sm:py-0 sm:pl-0 sm:pr-8 sm:pt-7 sm:first:pt-7 last:sm:pr-0"
            >
              <span className="text-xs tracking-[0.2em] text-subtle">
                {step.number}
              </span>
              <h3 className="mt-4 font-medium text-xl tracking-tight md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="about-portrait border-b border-line">
      <div className="page-grid">
        <div className="grid md:grid-cols-2 md:items-stretch">
          <Reveal className="py-20 md:py-28 md:pr-10">
            <p className="kicker">O firmě</p>
            <h2 className="mt-5 font-medium text-display tracking-tight">
              {site.brand}
            </h2>
            <p className="mt-2 text-sm tracking-[0.16em] text-muted uppercase">
              {site.legalName} · IČO {site.ico}
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted">
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
          <div className="relative grid min-h-80 overflow-hidden">
            <img
              src="/hero/pavel-portrait.webp"
              srcSet="/hero/pavel-portrait-700.webp 700w, /hero/pavel-portrait-1100.webp 1100w, /hero/pavel-portrait.webp 1680w"
              sizes="(min-width: 768px) 32rem, 100vw"
              width={1680}
              height={1344}
              alt="Pavel Hrdlička při práci s rozžhavenou ocelí"
              loading="lazy"
              decoding="async"
              className="about-portrait-img"
            />
            <div className="about-portrait-fade" aria-hidden="true" />
          </div>
        </div>
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
          <p className="page-hero-lead mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {children}
          </p>
        ) : null}
      </div>
    </header>
  );
}
