export type Service = {
  slug: string;
  number: string;
  title: string;
  lead: string;
  body: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "schodiste",
    number: "01",
    title: "Schodiště",
    lead: "Interiérová a venkovní schodiště — přímá, točitá i s podestou.",
    body: "Ocelová konstrukce s dřevěnými stupni, pororoštem nebo plechem. Stoupání a kotvení se stanoví podle zaměření na stavbě. Zábradlí je součástí návrhu.",
    items: [
      "Interiérová schodiště (dřevo + ocel)",
      "Venkovní schodiště a požární únikové",
      "Točité a atypické půdorysy",
      "Pororošt, tahokov, dřevěné stupně",
    ],
  },
  {
    slug: "zabradi",
    number: "02",
    title: "Zábradlí",
    lead: "Nerezová lanka, vodorovné příčky a svislé pruty.",
    body: "Zábradlí k terasám, galeriím, schodištím a lávkám. Povrchová úprava černým lakem, žárovým zinkem nebo nerezí. Kotvení do oceli, betonu i dřeva.",
    items: [
      "Nerezová lanka",
      "Vodorovné a svislé výplně",
      "Terasy, galerie, balkony",
      "Interiér i exteriér",
    ],
  },
  {
    slug: "brany-ploty",
    number: "03",
    title: "Brány a ploty",
    lead: "Křídlové a posuvné brány, branky a plotová pole.",
    body: "Vjezdové brány, branky a ploty. Ocelový rám s výplní z tahokovu, tyčí nebo dřeva. Povrch žárový zinek nebo lak. Kování a zámek jsou součástí dodávky.",
    items: [
      "Křídlové a posuvné brány",
      "Branky a plotová pole",
      "Tahokov, svislé tyče, dřevo + ocel",
      "Žárový zinek, černý lak",
    ],
  },
  {
    slug: "terasy-lavky",
    number: "04",
    title: "Terasy a lávky",
    lead: "Ocelové konstrukce teras, vstupních plošin a lávek.",
    body: "Samonosné plošiny, vstupy k objektu a lávky v terénu. Pochozí vrstva z pororoštu nebo dřeva. Kotvení do země i do stavby. Zábradlí je navrženo jako součást konstrukce.",
    items: [
      "Vstupní plošiny a podesty",
      "Samonosné terasy",
      "Lávky a přechody v terénu",
      "Pororošt, dřevo, kombinace",
    ],
  },
  {
    slug: "pristrešky",
    number: "05",
    title: "Přístřešky a haly",
    lead: "Technické objekty, sklady a zastřešení na ocelovém skeletu.",
    body: "Ocelový rám, výplně, střecha a dveře. Objekt se navrhuje podle místa a účelu, mimo katalogové řady.",
    items: [
      "Skladové a technické objekty",
      "Přístřešky a zastřešení",
      "Tahokovové výplně",
      "Atypické půdorysy",
    ],
  },
  {
    slug: "atyp",
    number: "06",
    title: "Atyp a interiér",
    lead: "Dřevníky, zámečnické prvky a atypické interiérové konstrukce.",
    body: "Stojany na palivo, zámečnické doplňky, opravy a dostavby stávajících konstrukcí. Konzultace materiálu a povrchové úpravy.",
    items: [
      "Dřevníky a stojany na palivo",
      "Zámečnické doplňky",
      "Opravy a dostavby stávajících konstrukcí",
      "Konzultace materiálu a povrchu",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Zaměření",
    text: "Po poptávce následuje zaměření na místě. Rozměry a kotvení se stanoví na stavbě.",
  },
  {
    number: "02",
    title: "Návrh",
    text: "Tvar, materiál, kotvení, povrchová úprava a cena. Výroba začíná po odsouhlasení zadání.",
  },
  {
    number: "03",
    title: "Výroba",
    text: "Výroba probíhá v dílně v Nové Vsi nad Nisou. Řezání, ohýbání, svařování a povrchová úprava.",
  },
  {
    number: "04",
    title: "Montáž",
    text: "Osazení na stavbě v dohodnutém termínu, včetně kování a dokončení.",
  },
];

export const materials = [
  {
    name: "Ocel",
    note: "Konstrukční profily, plech a svařované rámy.",
  },
  {
    name: "Nerez",
    note: "Madla, detaily a prvky v exteriéru.",
  },
  {
    name: "Žárový zinek",
    note: "Povrchová úprava pro venkovní konstrukce.",
  },
  {
    name: "Černý lak",
    note: "Interiér a kombinace se dřevem.",
  },
  {
    name: "Tahokov",
    note: "Brány, výplně a přístřešky.",
  },
  {
    name: "Pororošt",
    note: "Plošiny, stupně a lávky.",
  },
  {
    name: "Dřevo + ocel",
    note: "Schodiště, brány a atypický nábytek.",
  },
  {
    name: "Nerezová lanka",
    note: "Zábradlí teras, galerií a schodišť.",
  },
] as const;
