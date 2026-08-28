import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
import refuseSite from "@/assets/refuse.jpg";
import { SiteLayout, SectionHead, Stat, ClosingCTA } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Korva Systems — Digital Infrastructure for Africa" },
      {
        name: "description",
        content:
          "Korva Systems builds digital infrastructure that helps African businesses and communities operate more efficiently — starting with sanitation.",
      },
      { property: "og:title", content: "Korva Systems — Digital Infrastructure for Africa" },
      {
        property: "og:description",
        content:
          "Digital infrastructure for African businesses and communities. Korva Waste is our sanitation reporting and operations platform.",
      },
    ],
  }),
  component: Home,
});

const products = [
  { name: "Korva Waste", desc: "Sanitation reporting & operations", status: "Pilot-Ready" },
  { name: "Korva Safe", desc: "Safety incident reporting & coordination", status: "Planned" },
  { name: "Korva Flow", desc: "Logistics operations", status: "Planned" },
  { name: "Korva Stock", desc: "Warehouse operations", status: "Planned" },
];

const principles = [
  {
    title: "Reduce friction",
    body: "Reporting and coordination should take seconds, not training sessions.",
  },
  {
    title: "Create accountability",
    body: "Every task has an owner, a status, and a traceable history.",
  },
  {
    title: "Work within African realities",
    body: "Built for real network conditions, real devices, and real operating environments.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="night relative overflow-hidden">
        <div className="dotfield absolute inset-0 opacity-20" aria-hidden />
        <div className="wrap relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-on-dark">Korva Systems</span>
            <h1 className="mt-5">
              Building the Operating Systems Behind African Businesses and Communities
            </h1>
            <p className="lede lede-on-dark mt-6">
              We build digital infrastructure that helps African organizations coordinate people, work,
              assets, and information — turning fragmented manual processes into connected, accountable
              systems. It begins with sanitation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link to="/korva-waste" className="btn btn-gradient">
                Explore Korva Waste
              </Link>
              <Link to="/partner" className="btn btn-line-dark">
                Partner With Us
              </Link>
            </div>
          </div>
          <img
            src={heroCity}
            alt="Isometric illustration of a connected coastal city with waste collection routes and live operations data"
            width={1600}
            height={1200}
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <SectionHead
              eyebrow="It Starts With Sanitation"
              title="A Digital Operations Layer for Sanitation Reporting"
              lede="Korva Waste connects residents, field teams, supervisors, and municipal authorities through structured reporting, task assignment, verification, and analytics — making it easier to report a problem, track it, and know it was actually resolved."
            />
            <div className="mt-7 flex flex-wrap gap-5">
              <Link to="/korva-waste" className="rule-link">
                See how it works <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-study" className="rule-link">
                Read the research <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <figure className="overflow-hidden rounded-2xl border border-border">
              <img
                src={refuseSite}
                alt="Refuse site with scattered waste and a worker collecting rubbish"
                width={509}
                height={338}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">
                The problem is visible on the ground before it becomes a metric.
              </figcaption>
            </figure>
            <div className="panel grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              <Stat value="12,710t" label="of solid waste generated in Ghana every day (UNDP)" />
              <Stat value="69%" label="of residents surveyed have never reported a sanitation issue" />
              <Stat value="80%" label="of those who did report received no follow-up" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="wrap">
          <SectionHead
            eyebrow="The Roadmap"
            title="One Platform Today. A Growing Ecosystem Tomorrow."
            lede="Korva Waste is the first proof of a broader model: practical digital infrastructure, built one operational problem at a time."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={i === 0 ? "panel-night rounded-2xl" : "panel-white"}
              >
                <span className={`tag ${i === 0 ? "tag-on-dark" : "tag-planned"}`}>{p.status}</span>
                <h3 className="mt-5">{p.name}</h3>
                <p className={`mt-2 text-sm ${i === 0 ? "text-midnight-muted" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <Link to="/roadmap" className="rule-link mt-10">
            See the full roadmap <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Korva"
            title="Technology Should Adapt to People"
            lede="Not the other way around. Our design principles come from a simple observation: most operational failures aren't caused by a lack of effort — they're caused by systems that don't fit how work actually happens."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="panel-white">
                <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-3">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Let's Talk"
        title="Ready to See What Coordinated Operations Could Look Like?"
        lede="We're preparing our first pilot and looking for partners who want to test this with us."
      />
    </SiteLayout>
  );
}
