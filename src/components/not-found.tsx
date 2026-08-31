import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteShell>
      <section className="page-grid flex min-h-[80dvh] flex-col justify-end pb-20 pt-32">
        <p className="kicker mb-6">404</p>
        <h1 className="max-w-3xl font-medium text-display tracking-tight">
          Tahle stránka
          <br />
          tady nestojí.
        </h1>
        <p className="mt-6 max-w-md text-muted">
          Odkaz je špatně, nebo stránka zmizela. Vraťte se na úvod, nebo rovnou
          napište.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Úvod</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/kontakt">
              Kontakt
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
