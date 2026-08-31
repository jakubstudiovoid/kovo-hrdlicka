import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "#business",
        name: site.brand,
        alternateName: [site.name, site.legalName],
        description: site.description,
        image: "/brand/logo-white.png",
        telephone: site.phone,
        email: site.email,
        foundingDate: String(site.founded),
        identifier: site.ico,
        vatID: site.ico,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line,
          addressLocality: site.address.city,
          postalCode: site.address.zip,
          addressRegion: site.address.region,
          addressCountry: "CZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        areaServed: [
          "Nová Ves nad Nisou",
          "Jablonec nad Nisou",
          "Liberec",
          "Liberecký kraj",
          "Jizerské hory",
        ],
        sameAs: [site.facebook],
        founder: {
          "@type": "Person",
          name: site.legalName,
        },
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Zakázková kovovýroba",
          itemListElement: [
            "Schodiště",
            "Zábradlí",
            "Brány a ploty",
            "Terasy a lávky",
            "Přístřešky",
            "Nábytek",
          ],
        },
      },
      {
        "@type": "Person",
        name: site.legalName,
        jobTitle: "Kovovýroba",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressCountry: "CZ",
        },
      },
    ],
  };

  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
