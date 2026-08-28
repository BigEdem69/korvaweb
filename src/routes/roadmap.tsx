import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero, ClosingCTA } from "@/components/site";
import korvaLogo from "@/assets/korva-logo.png";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — Korva Systems" },
      {
        name: "description",
        content:
          "Korva Waste is the beginning. See the full Korva Systems roadmap: Korva Safe, Flow, Stock, and Communities.",
      },
      { property: "og:title", content: "Korva Systems Roadmap" },
      {
        property: "og:description",
        content: "One operational problem at a time: Waste, Safe, Flow, Stock, Communities.",
      },
    ],
  }),
  component: Roadmap,
});

const items = [
  {
    name: "Korva Waste",
    status: "Pilot-Ready",
    body: "Sanitation reporting and operations — connecting residents, field teams, supervisors, and municipal authorities. Our first product, and the proof of concept for everything else on this page.",
    link: "/korva-waste" as const,
  },
  {
    name: "Korva Safe",
    status: "Planned",
    body: "Safety incident reporting and coordination for workplaces and public spaces — applying the same report → assign → verify workflow to safety operations.",
  },
  {
    name: "Korva Flow",
    status: "Planned",
    body: "Logistics operations — coordinating dispatch, delivery, and movement of goods with the same visibility and accountability principles as Korva Waste.",
  },
  {
    name: "Korva Stock",
    status: "Planned",
    body: "Warehouse and inventory operations — digital stock tracking, dispatch records, and audit trails for organizations still running on manual tally sheets.",
  },
  {
    name: "Korva Communities",
    status: "Planned",
    body: "Community coordination and civic engagement tools — extending the same operational-visibility model beyond individual organizations to entire communities.",
  },
];

function Roadmap() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Roadmap"
        title="Korva Waste Is the Beginning"
        lede="Korva Systems is built one operational problem at a time. Korva Waste is live and pilot-ready; everything below is where we're headed next, roughly in order of priority — timing depends on what we learn from the Korva Waste pilot."
      />

      <section className="section">
        <div className="wrap">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex flex-col gap-6 border-b border-border py-9 last:border-b-0 sm:flex-row"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-muted">
                <img src={korvaLogo} alt="Korva Systems" className="h-12 w-9 object-contain" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl">{it.name}</h3>
                  <span className={`tag ${it.status === "Planned" ? "tag-planned" : "tag-pilot"}`}>
                    {it.status}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-muted-foreground">{it.body}</p>
                {it.link && (
                  <Link to={it.link} className="rule-link mt-4">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA
        eyebrow="Stay Close to the Build"
        title="Want to Know When the Next Product Launches?"
        lede="We're not running a mailing list yet — for now, the fastest way to stay in the loop is to reach out directly."
      />
    </SiteLayout>
  );
}
