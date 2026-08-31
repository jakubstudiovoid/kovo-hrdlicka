export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  excerpt: string;
  body: string[];
  materials: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "schodiste-a-zabradi",
    title: "Schodiště a zábradlí",
    location: "Rodinný dům",
    year: "2025",
    category: "Schodiště",
    excerpt:
      "Světlé dřevěné stupně, černé ocelové zábradlí, otevřený prostor až do krovu. Jedna linie od přízemí do galerie.",
    body: [
      "Schodiště spojuje dvě podlaží otevřeného domu s pohledovým krovem. Stupně ze světlého dřeva nesou černou ocelovou konstrukci. Zábradlí je vodorovné, tiché — drží předpis a nechá dřevo i světlo pracovat.",
      "Pohled shora dolů do schodišťové šachty je součástí návrhu: zábradlí kreslí rastr přes bílé stěny, galerie zůstává otevřená, nic zbytečně nezahušťuje prostor.",
      "Kotvení, výška madla i rozteč výplní jsou řešené jako jeden celek se schodištěm. Žádný dodatečný zámečník, žádný kompromis mezi dvěma firmami.",
    ],
    materials: ["Ocel", "Černý lak", "Dřevo", "Vodorovná výplň"],
    cover: {
      src: "/realizace/schodiste-hero.webp",
      width: 1400,
      height: 1789,
      alt: "Pohled shora na interiérové schodiště s černým ocelovým zábradlím a dřevěnými stupni",
    },
    gallery: [
      {
        src: "/realizace/schodiste-full.webp",
        width: 1536,
        height: 2048,
        alt: "Schodišťová šachta s černým zábradlím a světlými dřevěnými stupni",
      },
      {
        src: "/realizace/schodiste-zabradi.webp",
        width: 1400,
        height: 1333,
        alt: "Detail černého ocelového zábradlí s vodorovnými příčkami",
      },
      {
        src: "/realizace/schodiste-pohled.webp",
        width: 1200,
        height: 1599,
        alt: "Pohled dolů schodištěm do přízemí",
      },
      {
        src: "/realizace/schodiste-galerie.webp",
        width: 1400,
        height: 932,
        alt: "Galerie v podkroví s ocelovým zábradlím a dřevěným krovem",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
