import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero, SectionHead } from "@/components/site";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Korva Systems" },
      {
        name: "description",
        content:
          "Partner with Korva Systems on a pilot for Korva Waste — for municipal authorities, waste-management operators, and institutions in Ghana.",
      },
      { property: "og:title", content: "Partner With Korva Systems" },
      {
        property: "og:description",
        content: "A controlled pilot, not a public launch. Six phases from discovery to decision.",
      },
    ],
  }),
  component: Partner,
});

const partners = [
  {
    title: "Municipal & Metropolitan Authorities",
    body: "Looking for better visibility into sanitation reporting and service delivery across their jurisdiction.",
  },
  {
    title: "Waste-Management Operators",
    body: "Looking to complement existing collection and disposal operations with a structured coordination layer.",
  },
  {
    title: "Institutions & Large Facilities",
    body: "Universities, hospitals, estates, and commercial centers needing accountable, trackable service.",
  },
];

const phases = [
  ["01", "Discovery", "Interview stakeholders, map the existing workflow, define the service area and baseline."],
  ["02", "Configuration", "Set up categories, users and roles, service areas, and dashboards."],
  ["03", "Training", "Orient operations staff, field teams, and administrators."],
  ["04", "Pilot", "Live operation with support, monitoring, and data collection over 8–12 weeks."],
  ["05", "Evaluation", "Compare baseline vs. pilot performance and gather feedback from everyone involved."],
  ["06", "Decision", "Agree on a deployment and expansion plan together, based on what the data shows."],
];

function Partner() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Partner With Us"
        title="Let's Build a Smarter Operating Layer Together"
        lede="Korva Waste isn't here to replace the waste-management companies, municipal structures, or field teams already doing this work. It's here to make the operations behind that work more visible, accountable, and easier to coordinate."
      >
        <a href="mailto:korvasystems@gmail.com" className="btn btn-signal">
          Email Us
        </a>
        <a href="https://wa.me/233000000000" className="btn btn-line-dark">
          WhatsApp Us
        </a>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Who We're Looking to Partner With" title="Three Kinds of Organizations" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {partners.map((p) => (
              <div key={p.title} className="panel-white">
                <h3>{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="night section relative overflow-hidden">
        <div className="dotfield absolute inset-0 opacity-15" aria-hidden />
        <div className="wrap relative">
          <span className="eyebrow eyebrow-on-dark">What a Pilot Involves</span>
          <h2 className="mt-4">A Controlled Pilot, Not a Public Launch</h2>
          <div className="mt-10 grid gap-x-10 md:grid-cols-2">
            {phases.map(([num, title, body]) => (
              <div
                key={num}
                className="flex gap-5 border-b border-midnight-foreground/15 py-6 last:border-b-0"
              >
                <span className="font-display text-xl font-bold text-cyan">{num}</span>
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm text-midnight-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <SectionHead
            eyebrow="Get in Touch"
            title="Start the Conversation"
            lede="The fastest way to begin is a short call or email — we're happy to work around your schedule."
          />
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href="mailto:korvasystems@gmail.com" className="btn btn-gradient">
              Email Us
            </a>
            <a href="https://wa.me/233000000000" className="btn btn-line">
              WhatsApp Us
            </a>
          </div>
          <Link to="/insights" className="rule-link mt-8">
            Want the evidence first? Read our discovery research <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
