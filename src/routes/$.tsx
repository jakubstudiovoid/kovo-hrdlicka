import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageTitle } from "@/data/site";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: pageTitle("Stránka nenalezena") },
      {
        name: "description",
        content: "Požadovaná adresa neexistuje. Kovovýroba Hrdlička.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  loader: () => {
    throw notFound();
  },
});
