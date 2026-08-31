import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/home-page";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/soukromi")({
  head: () =>
    seoHead(
      "Ochrana soukromí",
      `Informace o zpracování osobních údajů — ${site.legalName}, IČO ${site.ico}.`,
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero kicker="Právní informace" title="Ochrana soukromí">
        Zpracování osobních údajů v souvislosti s poptávkou a zakázkou. Web
        nepoužívá sledovací cookies.
      </PageHero>
      <article className="page-grid py-14 text-sm leading-relaxed text-muted md:py-16">
        <h2 className="font-medium text-xl tracking-tight text-fg">Správce</h2>
        <p className="mt-4">
          {site.legalName}, IČO {site.ico}, {site.address.full}. Telefon{" "}
          {site.phone}, e-mail {site.email}.
        </p>
        <h2 className="mt-10 font-medium text-xl tracking-tight text-fg">
          Rozsah zpracování
        </h2>
        <p className="mt-4">
          Při poptávce nebo telefonickém kontaktu zpracováváme jméno, kontaktní
          údaje a popis zakázky výhradně za účelem odpovědi a plnění zakázky.
          Údaje nepředáváme třetím stranám k marketingu.
        </p>
        <h2 className="mt-10 font-medium text-xl tracking-tight text-fg">
          Cookies a měření
        </h2>
        <p className="mt-4">
          Web nepoužívá cookies pro sledování ani nástroje typu Google
          Analytics.
        </p>
        <h2 className="mt-10 font-medium text-xl tracking-tight text-fg">
          Formulář
        </h2>
        <p className="mt-4">
          Poptávkový formulář nic neukládá na server. Otevře e-mailový program
          s předvyplněnou zprávou. Odeslání probíhá ve vašem klientovi.
        </p>
        <h2 className="mt-10 font-medium text-xl tracking-tight text-fg">
          Práva
        </h2>
        <p className="mt-4">
          Máte právo na přístup, opravu a výmaz údajů vedených v souvislosti se
          zakázkou. Kontakt: {site.email}.
        </p>
      </article>
    </SiteShell>
  );
}
