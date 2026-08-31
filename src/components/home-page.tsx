import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { materials, processSteps, services } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const featured = projects[0];

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
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
    <section className="relative min-h-dvh bg-bg">
      <div className="grid min-h-dvh lg:grid-cols-12">
        <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-10 pt-28 md:px-8 md:pb-14 lg:col-span-6 lg:px-12 xl:px-16">
          <p className="hero-fade kicker" style={{ animationDelay: "0.35s" }}>
            {site.tagline}
          </p>
          <h1 className="mt-6 font-medium text-hero tracking-tight">
            <span className="hero-line">
              <span>Na míru.</span>
            </span>
            <span className="hero-line">
              <span style={{ animationDelay: "0.12s" }}>Na stálo.</span>
            </span>
          </h1>
          <p
            className="hero-fade mt-7 max-w-md text-sm leading-relaxed text-muted md:text-base"
            style={{ animationDelay: "0.45s" }}
          >
            Schodiště, zábradlí, brány a ocelové konstrukce. Od zaměření po
            montáž. {site.address.city}.
          </p>
          <div
            className="hero-fade mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg">
              <Link to="/kontakt">
                Poptat zakázku
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/realizace">Realizace</Link>
            </Button>
          </div>
          <div
            className="hero-fade mt-16 flex items-center justify-between gap-6 border-t border-line pt-5 text-xs tracking-[0.14em] text-subtle uppercase"
            style={{ animationDelay: "0.75s" }}
          >
            <span>{site.address.city}</span>
            <span className="hidden sm:inline">{site.area.split(",")[0]}</span>
            <a
              href="#intro"
              className="inline-flex items-center gap-2 text-muted transition-colors duration-200 hover:text-fg"
            >
              Dál
              <ArrowDown className="size-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="absolute inset-0 lg:relative lg:col-span-6">
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/55 to-bg/20 lg:hidden" />
          {featured ? (
            <img
              src={featured.cover.src}
              srcSet="/realizace/schodiste-800.webp 800w, /realizace/schodiste-1200.webp 1200w, /realizace/schodiste-full.webp 1536w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={featured.cover.width}
              height={featured.cover.height}
              alt={featured.cover.alt}
              fetchPriority="high"
              className="hero-photo h-full min-h-dvh w-full object-cover object-[58%_42%] lg:min-h-0"
            />
          ) : null}
          <div className="pointer-events-none absolute right-5 bottom-8 hidden text-right lg:block">
            <p className="text-[0.65rem] tracking-[0.22em] text-paper/70 uppercase">
              01 — {featured?.category}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const loop = [...materials, ...materials];
  return (
    <div className="overflow-hidden border-y border-line bg-bg" aria-hidden="true">
      <div className="marquee-track py-4">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center px-6 text-xs tracking-[0.28em] text-muted uppercase"
          >
            <span className="mr-6 text-subtle">/</span>
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
      <div className="page-grid grid gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <Reveal className="md:col-span-5">
          <p className="kicker">Dílna</p>
          <h2 className="mt-5 max-w-md font-medium text-4xl tracking-tight">
            Ne z katalogu.
            <br />
            Z místa.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
          <p className="text-lg leading-relaxed text-fg/90 md:text-xl">
            Každý kus vzniká v&nbsp;Nové Vsi nad Nisou — od prvního metru na
            stavbě po poslední svár. Jedna hlava, jedna dílna, žádný
            prostředník.
          </p>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            Pavel Hrdlička. Kovovýroba pod značkou HRDL. Schody, zábradlí, brány,
            terasy, přístřešky a to, co nejde koupit hotové. Žárový zinek, černý
            lak, nerez, dřevo na oceli.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  if (!featured) return null;
  return (
    <section className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Vybraná práce</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">Realizace</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/realizace"
              className="hidden items-center gap-1.5 text-xs tracking-[0.16em] text-muted uppercase transition-colors duration-200 hover:text-fg sm:inline-flex"
            >
              Archiv
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <Link
            to="/realizace/$slug"
            params={{ slug: featured.slug }}
            className="group grid gap-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className="overflow-hidden bg-surface lg:col-span-8">
              <img
                src={featured.cover.src}
                srcSet="/realizace/schodiste-800.webp 800w, /realizace/schodiste-1200.webp 1200w, /realizace/schodiste-full.webp 1536w"
                sizes="(min-width: 1024px) 60vw, 100vw"
                width={featured.cover.width}
                height={featured.cover.height}
                alt={featured.cover.alt}
                loading="lazy"
                decoding="async"
                className="img-frame aspect-4/5 w-full object-cover object-[58%_38%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:aspect-4/3 lg:aspect-4/5"
              />
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
              <p className="text-xs tracking-[0.2em] text-subtle uppercase">
                {featured.year} — {featured.category}
              </p>
              <h3 className="mt-4 font-medium text-3xl tracking-tight">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase">
                Podívat se
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </div>
          </Link>
        </Reveal>
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
            Co dělám
          </p>
          <h2 className="mt-4 max-w-xl font-medium text-4xl tracking-tight">
            Ocel tam, kde má nést, držet a slušet domu.
          </h2>
        </Reveal>
        <ul className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={i * 40}>
              <Link
                to="/sluzby"
                hash={s.slug}
                className="group grid grid-cols-12 items-baseline gap-4 py-6 md:py-8"
              >
                <span className="col-span-2 text-xs tracking-[0.18em] text-ink-muted md:col-span-1">
                  {s.number}
                </span>
                <span className="col-span-9 font-medium text-xl tracking-tight md:col-span-4 md:text-2xl">
                  {s.title}
                </span>
                <span className="col-span-12 mt-1 text-sm leading-relaxed text-ink-muted md:col-span-6 md:mt-0">
                  {s.lead}
                </span>
                <span className="col-span-1 hidden justify-end md:flex">
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
            Čtyři kroky.
            <br />
            Žádný chaos.
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 80}>
              <article className="flex h-full flex-col bg-bg p-6 md:p-8">
                <span className="text-xs tracking-[0.2em] text-subtle">
                  {step.number}
                </span>
                <h3 className="mt-10 font-medium text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
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
      <div className="page-grid grid items-end gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <p className="kicker">Řemeslo</p>
          <h2 className="mt-5 font-medium text-display tracking-tight">
            {site.legalName}
          </h2>
          <p className="mt-2 text-sm tracking-[0.18em] text-muted uppercase">
            {site.brand} · IČO {site.ico}
          </p>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={100}>
          <p className="text-base leading-relaxed text-muted">
            Pracuji sám. Proto vím, co je svařené, co je zaměřené a co visí na
            stěně vašeho domu. Žádný anonymní provoz, žádný obchodník mezi vámi
            a dílnou.
          </p>
          <Link
            to="/o-nas"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
          >
            O řemesle
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
      <div className="page-grid py-24 md:py-32">
        <Reveal>
          <p className="kicker">Začít</p>
          <h2 className="mt-5 max-w-3xl font-medium text-display tracking-tight">
            Máte místo.
            <br />
            Já mám ocel.
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Popište zakázku, pošlete foto nebo jen zavolejte. Ozvu se a
            domluvíme zaměření.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Napsat
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
    <header className={cn("border-b border-line pt-28 pb-14 md:pt-36 md:pb-20", className)}>
      <div className="page-grid">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-4xl font-medium text-display tracking-tight">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
