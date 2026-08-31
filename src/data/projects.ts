export type ProjectImage = {
  src: string;
  srcSet?: string;
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

function photo(
  slug: string,
  width: number,
  height: number,
  alt: string,
): ProjectImage {
  return {
    src: `/realizace/${slug}.webp`,
    srcSet: `/realizace/${slug}-800.webp 800w, /realizace/${slug}.webp 1400w`,
    width,
    height,
    alt,
  };
}

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
      srcSet:
        "/realizace/schodiste-800.webp 800w, /realizace/schodiste-1200.webp 1200w, /realizace/schodiste-full.webp 1536w",
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
  {
    slug: "terasa-a-schodiste",
    title: "Terasa a schodiště",
    location: "Rodinný dům",
    year: "2025",
    category: "Terasy",
    excerpt:
      "Venkovní schodiště s dřevěnými stupni, ocelovou konstrukcí a zábradlím z nerezových lanek.",
    body: [
      "Ocelová konstrukce nese dřevěné stupně a navazuje na terasu s dřevěnou pochozí vrstvou. Zábradlí je řešeno nerezovými lanky v ocelových sloupcích — na schodišti i po obvodu terasy.",
      "Kotvení, sklon a výplň zábradlí jsou navrženy jako jeden celek.",
    ],
    materials: ["Ocel", "Dřevo", "Nerezová lanka", "Lak"],
    cover: photo(
      "terasa-schodiste",
      1400,
      1522,
      "Venkovní schodiště s dřevěnými stupni a zábradlím z nerezových lanek u terasy",
    ),
    gallery: [],
  },
  {
    slug: "venkovni-schodiste",
    title: "Venkovní schodiště",
    location: "Rodinný dům",
    year: "2024",
    category: "Schodiště",
    excerpt:
      "Žárově zinkované schodiště s podestou, pororoštem a zábradlím.",
    body: [
      "Samonosné venkovní schodiště s mezipodestou. Stupně a podesta z pororoštu, povrch žárový zinek. Zábradlí s vodorovnou výplní je součástí konstrukce.",
      "Kotvení do terénu a do objektu. Konstrukce je navržena pro trvalé venkovní použití.",
    ],
    materials: ["Ocel", "Žárový zinek", "Pororošt"],
    cover: photo(
      "venkovni-schodiste",
      1400,
      1186,
      "Žárově zinkované venkovní schodiště s podestou a pororoštem",
    ),
    gallery: [],
  },
  {
    slug: "vstupni-plosina",
    title: "Vstupní plošina",
    location: "Dřevostavba",
    year: "2025",
    category: "Terasy",
    excerpt:
      "Žárově zinkovaná vstupní plošina s pororoštem a zábradlím.",
    body: [
      "Vstupní plošina ke dřevostavbě. Pochozí vrstva z pororoštu, zábradlí s vodorovnou příčkou, povrch žárový zinek.",
      "Konstrukce je kotvena do terénu. Plošina sjednocuje dva vstupy objektu.",
    ],
    materials: ["Ocel", "Žárový zinek", "Pororošt"],
    cover: photo(
      "vstupni-plosina",
      1400,
      1437,
      "Žárově zinkovaná vstupní plošina s pororoštem u dřevostavby",
    ),
    gallery: [],
  },
  {
    slug: "brana-tahokov",
    title: "Brána z tahokovu",
    location: "Rodinný dům",
    year: "2024",
    category: "Brány a ploty",
    excerpt:
      "Křídlová brána a branka. Ocelový rám, výplň z tahokovu, žárový zinek.",
    body: [
      "Vjezdová křídlová brána s navazující brankou. Ocelový rám s výplní z tahokovu, kování a zámek jsou součástí dodávky.",
      "Povrchová úprava žárovým zinkem. Sloupky kotvené do terénu.",
    ],
    materials: ["Ocel", "Tahokov", "Žárový zinek"],
    cover: photo(
      "brana-tahokov",
      1400,
      1563,
      "Křídlová brána z tahokovu se žárovým zinkem",
    ),
    gallery: [],
  },
  {
    slug: "brana-drevo",
    title: "Brána dřevo a ocel",
    location: "Pozemek",
    year: "2024",
    category: "Brány a ploty",
    excerpt:
      "Posuvná brána — ocelový rám, dřevěná výplň, žárový zinek.",
    body: [
      "Posuvná vjezdová brána v ocelovém rámu s dřevěnou výplní. Rám je ztužen táhlem, povrch žárový zinek.",
      "Navazuje na dřevěný plot. Kování a vedení brány jsou součástí zakázky.",
    ],
    materials: ["Ocel", "Dřevo", "Žárový zinek"],
    cover: photo(
      "brana-drevo",
      1400,
      1073,
      "Posuvná brána s ocelovým rámem a dřevěnou výplní",
    ),
    gallery: [],
  },
  {
    slug: "plot",
    title: "Plot a branka",
    location: "Rodinný dům",
    year: "2024",
    category: "Brány a ploty",
    excerpt:
      "Žárově zinkovaný plot se svislými pruty a brankou.",
    body: [
      "Plotová pole se svislými pruty, sloupky a branka s kováním. Povrch žárový zinek.",
      "Kotvení do terénu, výška a rozteč prutů podle zadání a předpisu.",
    ],
    materials: ["Ocel", "Žárový zinek"],
    cover: photo(
      "plot",
      1400,
      1300,
      "Žárově zinkovaný plot se svislými pruty a brankou",
    ),
    gallery: [],
  },
  {
    slug: "zahradni-schodiste",
    title: "Zahradní schodiště",
    location: "Zahrada",
    year: "2024",
    category: "Schodiště",
    excerpt:
      "Ocelové schodiště v terénu. Černý lak, stupně z perforovaného plechu.",
    body: [
      "Schodiště překonává výškový rozdíl v zahradě. Stupně z perforovaného plechu, konstrukce a zábradlí v černém laku.",
      "Půdorys je přizpůsobený terénu, včetně zalomení.",
    ],
    materials: ["Ocel", "Černý lak", "Perforovaný plech"],
    cover: photo(
      "zahradni-schodiste",
      1400,
      1867,
      "Černé ocelové zahradní schodiště se stupni z perforovaného plechu",
    ),
    gallery: [],
  },
  {
    slug: "pristresek",
    title: "Přístřešek",
    location: "Areál",
    year: "2025",
    category: "Přístřešky",
    excerpt:
      "Technický objekt na ocelovém skeletu s výplněmi z tahokovu.",
    body: [
      "Ocelový skelet, tahokovové výplně, plochá střecha a dveře. Objekt slouží jako technické zázemí.",
      "Konstrukce je navržena podle místa a účelu, mimo katalogové řady.",
    ],
    materials: ["Ocel", "Tahokov", "Lak"],
    cover: photo(
      "pristresek",
      1400,
      1323,
      "Ocelový přístřešek s tahokovovými výplněmi",
    ),
    gallery: [],
  },
  {
    slug: "zabradi-terasa",
    title: "Zábradlí terasy",
    location: "Rodinný dům",
    year: "2025",
    category: "Zábradlí",
    excerpt:
      "Zábradlí s nerezovými lanky podél terasy rodinného domu.",
    body: [
      "Zábradlí terasy nesené ocelovou konstrukcí. Výplň nerezovými lanky, sloupky a madlo v laku.",
      "Kotvení do ocelových konzol a do stavby. Řešení sjednocuje zábradlí s nosnou konstrukcí terasy.",
    ],
    materials: ["Ocel", "Nerezová lanka", "Lak"],
    cover: photo(
      "zabradi-terasa",
      1400,
      931,
      "Zábradlí terasy s nerezovými lanky podél rodinného domu",
    ),
    gallery: [],
  },
  {
    slug: "drevnik",
    title: "Dřevník",
    location: "Pozemek",
    year: "2024",
    category: "Atyp",
    excerpt:
      "Dřevník s ocelovou konstrukcí, dřevěnými latěmi a trapézovou střechou.",
    body: [
      "Ocelový skelet na patkách, čelní otevřená stěna, boční výplň dřevěnými latěmi, střecha z trapézového plechu.",
      "Konstrukce je dimenzovaná na běžnou zásobu palivového dřeva a odolnost vůči počasí.",
    ],
    materials: ["Ocel", "Dřevo", "Lak"],
    cover: photo(
      "drevnik",
      1400,
      1859,
      "Dřevník s ocelovou konstrukcí a dřevěnými latěmi",
    ),
    gallery: [],
  },
  {
    slug: "stojan-na-drevo",
    title: "Stojan na dřevo",
    location: "Terasa",
    year: "2024",
    category: "Atyp",
    excerpt:
      "Atypický stojan na palivo. Černý lak, ocelová síť, členěný prostor.",
    body: [
      "Stojan na palivové dřevo s členěnými přihrádkami. Ocelový rám, výplň sítí, povrch černý lak.",
      "Atypický tvar podle zadání. Určeno pro interiér i krytou terasu.",
    ],
    materials: ["Ocel", "Černý lak", "Síť"],
    cover: photo(
      "stojan-na-drevo",
      1340,
      1066,
      "Šestiúhelníkový ocelový stojan na palivové dřevo",
    ),
    gallery: [],
  },
  {
    slug: "lavice",
    title: "Lavice",
    location: "Venkovní posezení",
    year: "2024",
    category: "Atyp",
    excerpt:
      "Venkovní ocelová lavice. Černý lak, vodorovné lamely, svařovaný rám.",
    body: [
      "Lavice z ocelových profilů s vodorovnými lamelami sedáku a opěradla. Povrch černý lak.",
      "Rám je svařovaný jako jeden kus. Určeno pro venkovní použití.",
    ],
    materials: ["Ocel", "Černý lak"],
    cover: photo(
      "lavice",
      1125,
      1328,
      "Černá ocelová lavice s vodorovnými lamelami",
    ),
    gallery: [],
  },
  {
    slug: "predsin",
    title: "Předsíň",
    location: "Interiér",
    year: "2024",
    category: "Atyp",
    excerpt:
      "Nábytek do předsíně — ocelový rám, perforovaný plech a dřevo.",
    body: [
      "Sestava do předsíně: botník, sedák a opěrák. Ocelový rám s výplní z perforovaného plechu, dřevěné desky.",
      "Povrch černý lak. Rozměry podle niky.",
    ],
    materials: ["Ocel", "Černý lak", "Dřevo", "Perforovaný plech"],
    cover: photo(
      "predsin",
      982,
      1600,
      "Nábytek do předsíně z oceli, perforovaného plechu a dřeva",
    ),
    gallery: [],
  },
  {
    slug: "venkovni-kuchyne",
    title: "Venkovní kuchyň",
    location: "Terasa",
    year: "2024",
    category: "Atyp",
    excerpt:
      "Venkovní kuchyňská sestava. Ocelový rám, dřevo a perforovaný plech.",
    body: [
      "Venkovní kuchyň s pracovní deskou, skříňkou a otevřenými policemi. Ocelový rám, dřevěné desky, výplně z perforovaného plechu.",
      "Zadní stěna slouží jako ochrana a odklad. Povrch černý lak.",
    ],
    materials: ["Ocel", "Dřevo", "Černý lak", "Perforovaný plech"],
    cover: photo(
      "venkovni-kuchyne",
      1049,
      1420,
      "Venkovní kuchyň z oceli, dřeva a perforovaného plechu",
    ),
    gallery: [],
  },
  {
    slug: "stul",
    title: "Stůl",
    location: "Interiér",
    year: "2024",
    category: "Atyp",
    excerpt:
      "Stůl s ocelovým rámem, dřevěnou deskou a policí z perforovaného plechu.",
    body: [
      "Konferenční stůl. Ocelový svařovaný rám, dřevěná spárovka, spodní police z perforovaného plechu.",
      "Povrch rámu bílý lak. Rozměry podle zadání.",
    ],
    materials: ["Ocel", "Dřevo", "Lak", "Perforovaný plech"],
    cover: photo(
      "stul",
      1400,
      1179,
      "Stůl s bílým ocelovým rámem, dřevěnou deskou a perforovanou policí",
    ),
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
