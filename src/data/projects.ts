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
      "Interiérové schodiště se světlými dřevěnými stupni a černým ocelovým zábradlím. Konstrukce spojuje přízemí s galerií.",
    body: [
      "Schodiště propojuje dvě podlaží otevřeného domu s pohledovým krovem. Stupně ze světlého dřeva nese černá ocelová konstrukce. Zábradlí s vodorovnou výplní splňuje předepsané parametry a zachovává průhlednost prostoru.",
      "Kotvení, výška madla a rozteč výplní jsou řešeny jako jeden celek se schodištěm.",
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
