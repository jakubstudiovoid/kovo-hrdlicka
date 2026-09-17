import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const kindOptions = [...services.map((s) => s.title), "Jiné"];

type ContactFormProps = {
  tone?: "dark" | "light";
};

function KindSelect({
  light,
  fieldClass,
}: {
  light: boolean;
  fieldClass: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointer(e: PointerEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <input
        type="text"
        name="kind"
        value={value}
        required
        tabIndex={-1}
        readOnly
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />
      <button
        type="button"
        className={cn(
          fieldClass,
          "flex w-full cursor-pointer appearance-none items-center justify-between gap-4 bg-transparent text-left",
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={value ? undefined : light ? "text-ink-muted" : "text-subtle"}>
          {value || "Vyberte"}
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-200",
            light ? "text-ink-muted" : "text-muted",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>
      <ul
        id={listId}
        role="listbox"
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full z-30 mt-px py-1",
          light ? "bg-paper" : "bg-bg",
        )}
      >
        {kindOptions.map((opt) => {
          const selected = value === opt;
          return (
            <li key={opt} role="option" aria-selected={selected}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between py-3 text-left text-sm tracking-tight transition-colors duration-150",
                  light
                    ? selected
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                    : selected
                      ? "text-fg"
                      : "text-muted hover:text-fg",
                )}
                onClick={() => {
                  setValue(opt);
                  setOpen(false);
                }}
              >
                {opt}
                {selected ? (
                  <Check className="size-3.5 opacity-70" strokeWidth={1.5} />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

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
        <p className="text-lg tracking-tight">E-mailový klient je otevřen.</p>
        <p className={cn("text-sm leading-relaxed", light ? "text-ink-muted" : "text-muted")}>
          Pokud se poštovní klient nespustil, napište přímo na{" "}
          <a href={site.emailHref} className="underline">
            {site.email}
          </a>{" "}
          nebo volejte {site.phone}.
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
      <div className="grid gap-7 sm:grid-cols-2">
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
      <div className="block">
        <span className={label}>Typ zakázky</span>
        <KindSelect light={light} fieldClass={field} />
      </div>
      <label className="block">
        <span className={label}>Zpráva</span>
        <textarea
          className={cn(field, "min-h-32 resize-y")}
          name="message"
          required
          placeholder="Popis zakázky, přibližné rozměry a termín."
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant={light ? "ink" : "solid"} size="lg">
          Odeslat poptávku
          <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
        </Button>
        <p className={cn("max-w-xs text-xs leading-relaxed", light ? "text-ink-muted" : "text-subtle")}>
          Odesláním se otevře e-mailový program. Údaje se na server neukládají.
        </p>
      </div>
    </form>
  );
}
