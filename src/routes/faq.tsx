import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, ClosingCTA } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - Korva Systems" },
      {
        name: "description",
        content: "Common questions about Korva Systems and Korva Waste, answered plainly.",
      },
      { property: "og:title", content: "FAQ - Korva Systems" },
      { property: "og:description", content: "Common questions about Korva Systems and Korva Waste." },
    ],
  }),
  component: FAQ,
});

const groups = [
  {
    title: "General",
    questions: [
      [
        "What is Korva Systems?",
        "Korva Systems is a Ghanaian operational technology company building digital infrastructure that helps African businesses and communities operate more efficiently. We start with one specific, provable problem at a time - the first is sanitation.",
      ],
      [
        "Why start with sanitation?",
        "Sanitation affects residents, businesses, institutions, and municipal authorities all at once, and it clearly exposes a coordination problem: the gap between reporting an issue and it actually being resolved. It is a concrete, provable place to start before expanding to other kinds of operations.",
      ],
      [
        "Is Korva Systems only working in Ghana?",
        "Right now, yes - our pilot work is focused on Tema, Ghana. The long-term goal is to expand across Ghana and, eventually, other African markets, but only after the model is proven at a smaller scale first.",
      ],
    ],
  },
  {
    title: "Korva Waste",
    questions: [
      [
        "What does Korva Waste actually do?",
        "It is a digital operations platform connecting residents, field teams, supervisors, and municipal authorities. Residents report sanitation issues with a photo and location; operations teams review and assign them; field workers respond and log completion evidence; supervisors verify the work; and everyone can see the status at every step.",
      ],
      [
        "Is Korva Waste replacing waste-management companies?",
        "No. Korva Waste is a coordination layer, not a collection service. It is built to work alongside the waste-management companies, municipal structures, and field teams already doing the physical work - making that work more visible and accountable, not replacing it.",
      ],
      [
        "Is Korva Waste live yet?",
        "Not publicly. We are currently preparing a controlled pilot spanning an institutional environment and a residential community in Tema, with a clear evaluation plan before any wider rollout.",
      ],
      [
        "Who can use it?",
        "Residents use the reporting interface at no direct cost. Organizations - municipal assemblies, waste-management operators, institutions, and large facilities - pay for the operational platform: dashboards, task assignment, verification, and analytics.",
      ],
    ],
  },
  {
    title: "Partnering & Pricing",
    questions: [
      [
        "Who can partner with Korva Systems?",
        "Municipal and metropolitan authorities, waste-management operators, and institutions or large facilities (universities, hospitals, estates, commercial centers) looking for better visibility into sanitation reporting and service delivery.",
      ],
      [
        "What does a pilot involve, and how long does it take?",
        "A pilot runs through six phases - discovery, configuration, training, live pilot, evaluation, and a joint deployment decision - typically spanning a few months, with the live pilot phase itself running 8-12 weeks. See our Partner With Us page for the full breakdown.",
      ],
      [
        "What does it cost to partner?",
        "Pricing depends on the size and scope of your organization and is discussed directly rather than fixed publicly at this stage. Our long-term model is subscription-based software access, with optional implementation and analytics tiers.",
      ],
    ],
  },
  {
    title: "Data & Privacy",
    questions: [
      [
        "What data does Korva Waste collect?",
        "Report data needed to resolve an issue: category, photo, location, description, timestamps, and status history. We design deliberately around collecting only what is operationally necessary.",
      ],
      [
        "Is resident data kept secure?",
        "Security is a core design principle, not an afterthought: role-based permissions, encrypted communications, and full audit logs are part of the platform's architecture from the start.",
      ],
      [
        "Does Korva sell user data?",
        "No. Our business model is built on recurring software subscriptions from organizations, not on monetizing personal data. Trust is a core asset we are not willing to trade away.",
      ],
    ],
  },
];

function FAQ() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Common Questions, Answered Plainly"
        lede="If something isn't covered here, just ask us directly."
      />

      <section className="section">
        <div className="wrap max-w-4xl">
          {groups.map((group) => (
            <section key={group.title} className="mb-11 last:mb-0">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {group.title}
              </h3>
              <div className="mt-4">
                {group.questions.map(([question, answer]) => (
                  <details key={question} className="group border-b border-border py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold marker:hidden">
                      {question}
                      <span className="text-xl font-normal text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="night section relative overflow-hidden">
        <div className="dotfield absolute inset-0 opacity-15" aria-hidden />
        <div className="wrap relative text-center">
          <span className="eyebrow eyebrow-on-dark">Still Have a Question?</span>
          <h2 className="mt-4">Ask Us Directly</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a href="mailto:korvasystems@gmail.com" className="btn btn-signal">
              Email Us
            </a>
            <Link to="/partner" className="btn btn-line-dark">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="Let's Talk" title="Interested in Working Together?" />
    </SiteLayout>
  );
}