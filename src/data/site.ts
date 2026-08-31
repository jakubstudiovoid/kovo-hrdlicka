export const site = {
  name: "HRDL",
  legalName: "Pavel Hrdlička",
  brand: "Kovovýroba Hrdlička",
  ico: "18002447",
  tagline: "Zakázková kovovýroba",
  description:
    "Zakázková kovovýroba HRDL — schodiště, zábradlí, brány a ocelové konstrukce. Návrh, výroba a montáž. Kovovýroba Hrdlička, Nová Ves nad Nisou.",
  phone: "+420 775 323 303",
  phoneHref: "tel:+420775323303",
  email: "info@kovohrdlicka.cz",
  emailHref: "mailto:info@kovohrdlicka.cz",
  address: {
    line: "Nová Ves nad Nisou 350",
    city: "Nová Ves nad Nisou",
    zip: "468 27",
    region: "Jablonec nad Nisou",
    country: "Česko",
    full: "Nová Ves nad Nisou 350, 468 27 Nová Ves nad Nisou",
  },
  geo: { lat: 50.72528, lng: 15.21472 },
  facebook: "https://www.facebook.com/profile.php?id=61556386705370",
  founded: 2023,
  area: "Jizerské hory, Jablonec nad Nisou, Liberecký kraj",
} as const;

export const nav = [
  { to: "/realizace" as const, label: "Realizace" },
  { to: "/sluzby" as const, label: "Služby" },
  { to: "/o-nas" as const, label: "O firmě" },
  { to: "/kontakt" as const, label: "Kontakt" },
];

export function pageTitle(title?: string) {
  return title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
}
