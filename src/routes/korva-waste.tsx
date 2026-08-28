import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import opsFlow from "@/assets/ops-flow.jpg";
import refuseSite from "@/assets/refuse.jpg";
import { SiteLayout, PageHero, SectionHead, Stat, ClosingCTA } from "@/components/site";

export const Route = createFileRoute("/korva-waste")({
  head: () => ({
    meta: [
      { title: "Korva Waste — Sanitation Reporting & Operations Platform" },
      {
        name: "description",
        content:
          "Korva Waste is a digital operations platform connecting residents, field teams, supervisors, and municipal authorities to make sanitation reporting visible and accountable.",
      },
      { property: "og:title", content: "Korva Waste — Sanitation Operations Platform" },
      {
        property: "og:description",
        content:
          "Closing the gap between reporting a sanitation problem and actually resolving it, with a full audit trail.",
      },
    ],
  }),
  component: KorvaWaste,
});

const flow = ["Observe", "Report", "Review", "Assign", "Respond", "Verify", "Resolve", "Measure"];

const roles = [
  {
    tag: "Citizen",
    title: "Report & Track",
    body: "Report submission with photo and location, and live tracking of every report's status.",
  },
  {
    tag: "Operations",
    title: "Review & Assign",
    body: "Incoming reports, priority filtering, and assignment across teams and service areas.",
  },
  {
    tag: "Field",
    title: "Respond",
    body: "Assigned tasks, navigation, and completion evidence from the field.",
  },
  {
    tag: "Supervisor",
    title: "Verify",
    body: "Review completion evidence, approve, reject, or reopen a task.",
  },
  {
    tag: "Analytics",
    title: "Measure",
    body: "Response and resolution time, verification rate, and recurring hotspots.",
  },
];

function KorvaWaste() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Product · Pilot-Ready"
        title="Korva Waste"
        lede="The digital operations layer for sanitation in Africa — closing the gap between reporting a problem and actually resolving it."
      >
        <Link to="/partner" className="btn btn-signal">
          Partner With Us
        </Link>
        <Link to="/insights" className="btn btn-line-dark">
          Read the research
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="The Problem"
            title="Reporting Isn't the Same as Resolving"
            lede="Ghana already collects, composts, and disposes of waste every day. What's missing is the information layer that makes it visible, accountable, and measurable."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="grid gap-8 sm:grid-cols-3">
              <Stat value="12,710t" label="generated in Ghana every single day (UNDP)" />
              <Stat value="69%" label="of residents surveyed have never reported a sanitation issue" />
              <Stat value="80%" label="of those who did report say nothing happened afterward" />
            </div>
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
                The visibility gap is visible on the ground.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="night section relative overflow-hidden">
        <div className="dotfield absolute inset-0 opacity-15" aria-hidden />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-on-dark">How It Works</span>
            <h2 className="mt-4">Every Report Has a Traceable Lifecycle</h2>
            <p className="lede lede-on-dark mt-5">
              From the moment a problem is spotted to the moment it's confirmed resolved — with a full
              audit trail in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {flow.map((step) => (
                <span key={step} className="tag tag-on-dark">
                  {step}
                </span>
              ))}
            </div>
          </div>
          <img
            src={opsFlow}
            alt="Illustration of the Korva Waste reporting flow across citizen, field team, supervisor, and analytics"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="section bg-card">
        <div className="wrap">
          <SectionHead eyebrow="The Product" title="Built for Five Roles, One Platform" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div key={r.tag} className="panel-white">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {r.tag}
                </span>
                <h3 className="mt-3">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
          <Link to="/partner" className="rule-link mt-10">
            Request a walkthrough <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <SectionHead
            eyebrow="Pilot Status"
            title="Preparing Our First Controlled Pilot"
            lede="We're preparing a pilot spanning an institutional environment (Central University, Dawhenya) and a residential community in Tema — measured against clear baseline and pilot performance metrics before any wider rollout."
          />
        </div>
      </section>

      <ClosingCTA
        eyebrow="Let's Talk"
        title="Bring Korva Waste to Your Service Area"
        lede="We're looking for municipal authorities, operators, and institutions to pilot with."
      />
    </SiteLayout>
  );
}
