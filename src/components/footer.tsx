import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="page-grid py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo className="mb-8" />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Zakázková kovovýroba. Schodiště, zábradlí, brány a konstrukce
              z&nbsp;Nové Vsi nad Nisou.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="kicker mb-5">Navigace</p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors duration-200 hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="kicker mb-5">Kontakt</p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-fg transition-colors duration-200 hover:text-steel"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="transition-colors duration-200 hover:text-fg"
                >
                  {site.email}
                </a>
              </li>
              <li>
                {site.address.line}
                <br />
                {site.address.zip} {site.address.city}
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-fg"
                >
                  Facebook
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · IČO {site.ico}
          </p>
          <p>
            {site.address.full}
            {" · "}
            <Link to="/soukromi" className="hover:text-muted">
              Soukromí
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
