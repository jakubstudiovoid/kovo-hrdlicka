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
      <PageHero kicker="Právní" title="Ochrana soukromí">
        Krátce a na rovinu. Žádné sledovací cookies, žádný marketingový pixel.
      </PageHero>
      <article className="page-grid max-w-2xl py-16 text-sm leading-relaxed text-muted">
        <h2 className="text-fg font-medium text-xl tracking-tight">Správce</h2>
        <p className="mt-4">
          {site.legalName}, IČO {site.ico}, {site.address.full}. Telefon{" "}
          {site.phone}, e-mail {site.email}.
        </p>
        <h2 className="mt-10 text-fg font-medium text-xl tracking-tight">
          Co zpracovávám
        </h2>
        <p className="mt-4">
          Pokud napíšete nebo zavoláte, zpracuji jméno, kontakt a popis zakázky
          — jen proto, abych mohl odpovědět a zakázku splnit. Údaje nikomu
          neprodávám a nepředávám třetím stranám k marketingu.
        </p>
        <h2 className="mt-10 text-fg font-medium text-xl tracking-tight">
          Cookies a měření
        </h2>
        <p className="mt-4">
          Web nepoužívá cookies pro sledování ani nástroje typu Google
          Analytics. Technicky nutné údaje prohlížeče (např. jazyk, šířka okna)
          zůstávají u vás.
        </p>
        <h2 className="mt-10 text-fg font-medium text-xl tracking-tight">
          Formulář
        </h2>
        <p className="mt-4">
          Poptávkový formulář nic neukládá na server. Otevře váš e-mailový
          program s předvyplněnou zprávou. Odeslání tedy probíhá ve vašem
          klientovi.
        </p>
        <h2 className="mt-10 text-fg font-medium text-xl tracking-tight">
          Práva
        </h2>
        <p className="mt-4">
          Máte právo na přístup, opravu a výmaz údajů, které o vás vedu v
          souvislosti se zakázkou. Stačí napsat na {site.email}.
        </p>
      </article>
    </SiteShell>
  );
}
