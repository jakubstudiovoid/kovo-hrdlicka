import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  tone?: "dark" | "light";
};

export function ContactForm({ tone = "dark" }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const light = tone === "light";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const kind = String(data.get("kind") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Jméno: ${name}`,
      `Telefon: ${phone}`,
      `E-mail: ${email}`,
      `Zakázka: ${kind}`,
      "",
      message,
    ].join("\n");

    const href = `${site.emailHref}?subject=${encodeURIComponent(
      `Poptávka HRDL — ${kind || "zakázka"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className={cn(
          "flex flex-col gap-4 border p-8",
          light ? "border-ink/15" : "border-border",
        )}
      >
        <Check className="size-5" strokeWidth={1.5} />
        <p className="text-lg tracking-tight">Otevřel se e-mail.</p>
        <p className={cn("text-sm leading-relaxed", light ? "text-ink-muted" : "text-muted")}>
          Pokud se poštovní klient nespustil, napište přímo na{" "}
          <a href={site.emailHref} className="underline">
            {site.email}
          </a>{" "}
          nebo zavolejte {site.phone}.
        </p>
      </div>
    );
  }

  const field = cn("field", light && "field-light");
  const label = cn(
    "mb-1 block text-xs tracking-[0.16em] uppercase",
    light ? "text-ink-muted" : "text-subtle",
  );

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className={label}>Jméno</span>
          <input
            className={field}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jan Novák"
          />
        </label>
        <label className="block">
          <span className={label}>Telefon</span>
          <input
            className={field}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+420 …"
          />
        </label>
      </div>
      <label className="block">
        <span className={label}>E-mail</span>
        <input
          className={field}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jan@email.cz"
        />
      </label>
      <label className="block">
        <span className={label}>Typ zakázky</span>
        <select className={field} name="kind" required defaultValue="">
          <option value="" disabled>
            Vyberte
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Jiné">Jiné</option>
        </select>
      </label>
      <label className="block">
        <span className={label}>Zpráva</span>
        <textarea
          className={cn(field, "min-h-32 resize-y")}
          name="message"
          required
          placeholder="Rozměry, místo, termín — cokoliv, co už víte."
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant={light ? "ink" : "solid"} size="lg">
          Odeslat poptávku
          <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
        </Button>
        <p className={cn("max-w-xs text-xs leading-relaxed", light ? "text-ink-muted" : "text-subtle")}>
          Odesláním se otevře váš e-mail. Nic se neukládá na server.
        </p>
      </div>
    </form>
  );
}
