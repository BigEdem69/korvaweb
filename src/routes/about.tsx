import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHead, ClosingCTA } from "@/components/site";
import korvaLogo from "@/assets/korva-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Korva Systems" },
      {
        name: "description",
        content:
          "Korva Systems was founded to solve real operational problems through practical technology. Our mission, philosophy, and founder story.",
      },
      { property: "og:title", content: "About Korva Systems" },
      {
        property: "og:description",
        content: "We build the systems behind the systems — starting in Tema, Ghana.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  {
    when: "2025 – Present",
    body: "Korva Systems founded. Problem research, product architecture, UI/UX, and brand identity for Korva Waste, grounded in Tema Metropolitan Assembly and UNDP data.",
  },
  {
    when: "2026",
    body: "Discovery research with residents in Tema and surrounding communities; preparing a controlled pilot spanning an institutional and a residential environment.",
  },
  {
    when: "Next",
    body: "Pilot, measure, and — if the results hold up — expand from Tema to Greater Accra, then beyond.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="We Build the Systems Behind the Systems"
        lede="Korva Systems was founded to solve meaningful operational problems through practical technology — not to build software for its own sake."
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <SectionHead
            eyebrow="Mission & Philosophy"
            title="Transform Fragmented Processes Into Connected Systems"
            lede="Our mission is to transform fragmented manual processes into connected, efficient, data-driven systems. Across the businesses and communities we work with, the same pattern shows up: outdated manual processes, fragmented communication, and limited visibility into what's actually happening."
          />
          <blockquote className="panel border-l-4 border-l-accent font-display text-xl font-semibold leading-snug">
            “Technology should adapt to people, not people adapting to technology.”
          </blockquote>
        </div>
      </section>

      <section className="night section relative overflow-hidden">
        <div className="dotfield absolute inset-0 opacity-15" aria-hidden />
        <div className="wrap relative max-w-3xl">
          <span className="eyebrow eyebrow-on-dark">Founder</span>
          <div className="mt-6 flex items-center gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-background">
              <img src={korvaLogo} alt="Korva Systems" className="h-14 w-10 object-contain" />
            </span>
            <div>
              <h2 className="text-2xl">Bright Edem Gbafah</h2>
              <p className="text-sm text-midnight-muted">Founder & CEO · Tema, Ghana</p>
            </div>
          </div>
          <p className="lede lede-on-dark mt-8">
            Bright founded Korva Systems while working as a Warehouse Officer at a Ofi Ghana, a global agri-commodity
            trading company. Seeing manual, paper-based tally sheets slow down dispatch and cause data loss
            on the warehouse floor, he built Tally App — a digital warehouse data system now used daily in
            production — on his own initiative.
          </p>
          <p className="lede lede-on-dark mt-4">
            That same instinct — noticing a real operational problem and building the system that fixes it —
            is the founding idea behind Korva Systems: start with one specific, provable problem, and build
            outward from there.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Where We're Building"
            title="Tema, Ghana — and Outward From There"
          />
          <div className="mt-10 border-l-2 border-border pl-7">
            {timeline.map((t) => (
              <div key={t.when} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[35px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <h3 className="text-base">{t.when}</h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="Let's Talk" title="Interested in Working Together?" />
    </SiteLayout>
  );
}
