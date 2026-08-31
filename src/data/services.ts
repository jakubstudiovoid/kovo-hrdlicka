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
    lead: "Interiér i exteriér. Přímé, točité, s podestou — podle domu, ne podle katalogu.",
    body: "Ocelová konstrukce nese dřevěné stupně, pororošt nebo plech. Spočítám stoupání, zaměřím na stavbě a vyrobím tak, aby schody seděly na milimetr. Zábradlí je součástí návrhu, ne dodatečná myšlenka.",
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
    lead: "Lana, vodorovné příčky, svislé pruty. Čistá linie, která unese ruku i předpis.",
    body: "Zábradlí k terase, galerii, schodišti i lávce. Černý lak, zinek, nerez. Kotvím do oceli, betonu i dřeva. Výplň volím podle výhledu — aby držela a nepřekážela.",
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
    lead: "Křídlové i posuvné. Tahokov, tyče, dřevo v ocelovém rámu.",
    body: "Vjezd, branka, plot — vše, co má zavírat pozemek a slušet domu. Rám svařím, výplň zvolíme spolu. Povrch žárový zinek nebo lak. Kování a zámek jsou součástí zakázky.",
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
    lead: "Ocelová konstrukce, která unese terasu, vstup i svah.",
    body: "Samonosné plošiny, vstupy k domu, lávky v terénu. Pororošt nebo dřevěná pochozí vrstva. Kotvení do země i do stavby. Zábradlí navrhnu jako jeden celek s konstrukcí.",
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
    lead: "Technické objekty, sklady, zakrytí. Ocelový skelet, tahokov, střecha.",
    body: "Když má stát něco, co má vydržet počasí a slušet pozemku. Rám, výplně, střecha, dveře. Atyp podle místa — žádný katalogový box.",
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
    lead: "Dřevníky, stojany, zámečnické detaily. Cokoliv, co má z oceli smysl.",
    body: "Od designového stojanu na dřevo po ocelový detail v interiéru. Když to nejde koupit a má to být poctivé — vyrobím to.",
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
    text: "Zavoláte, popíšete zadání. Přijedu, zaměřím, projdeme místo. Žádný odhad od stolu, když záleží na milimetru.",
  },
  {
    number: "02",
    title: "Návrh",
    text: "Tvar, materiál, kotvení, povrch a cena. Uvidíte, co vznikne, než se zapálí hořák. Bez skrytých položek.",
  },
  {
    number: "03",
    title: "Výroba",
    text: "Dílna v Nové Vsi nad Nisou. Řez, ohyb, svár, povrch. Každý kus projde rukama, které ho kreslily.",
  },
  {
    number: "04",
    title: "Montáž",
    text: "Osazení na stavbě. Čistě, v domluveném termínu, se vším kováním. Až to sedí, je to hotové.",
  },
];

export const materials = [
  "Ocel",
  "Nerez",
  "Žárový zinek",
  "Černý lak",
  "Tahokov",
  "Pororošt",
  "Dřevo + ocel",
  "Nerezová lanka",
];
