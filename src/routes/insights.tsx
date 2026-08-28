import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Stat, ClosingCTA } from "@/components/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Research & Findings | Korva Systems" },
      {
        name: "description",
        content:
          "Research and discovery findings from Korva Systems, starting with our first resident survey on sanitation reporting in Tema, Ghana.",
      },
      { property: "og:title", content: "Korva Systems Insights" },
      {
        property: "og:description",
        content: "Discovery research on the sanitation reporting and follow-up gap in Tema, Ghana.",
      },
    ],
  }),
  component: Insights,
});

const quotes = [
  {
    text: "I would create one simple, reliable platform where people can report waste problems, track their complaints, and receive updates until the issue is resolved.",
    who: "Business owner / worker, Tema",
  },
  {
    text: "I would make waste reporting more accountable, so when people report a problem, it is followed up and actually resolved.",
    who: "Student respondent",
  },
  {
    text: "The usual response… there is nothing I can do. — what a community leader told a resident who reported a problem.",
    who: "Reported by a survey respondent, Tema",
  },
];

function Insights() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Research & Findings"
        lede="We publish what we learn as we build. This is our first piece of primary research — more will follow as the Korva Waste pilot progresses."
      />

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">August 2026 · Discovery Research</span>
          <h2 className="mt-4 max-w-3xl">Korva Waste Discovery Survey Findings</h2>
          <p className="lede mt-5">
            Digital survey distributed to residents and workers in Tema and nearby communities. n = 16
            valid responses. Findings are directional and qualitative given the sample size, not a
            statistically representative measure of Tema Metropolis.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="69%" label="never reported a sanitation problem" />
            <Stat value="80%" label="of reporters got no follow-up" />
            <Stat value="4.4/5" label="rated a Korva-Waste-like platform useful" />
            <Stat value="94%" label="say knowing the outcome matters" />
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {quotes.map((q) => (
              <blockquote key={q.who} className="panel border-l-4 border-l-accent">
                <p className="font-display text-base font-medium italic leading-relaxed">“{q.text}”</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  — {q.who}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="panel-night mt-14 rounded-2xl bg-midnight p-8">
            <h3 className="text-midnight-foreground">Reading this at scale</h3>
            <p className="mt-3 max-w-3xl text-sm text-midnight-muted">
              Tema Metropolis recorded a population of 177,924 in Ghana's 2021 Population and Housing
              Census. If the reporting and follow-up gaps observed in this sample hold at a broadly similar
              rate across the metropolis, the coordination gap would affect a large share of residents — but
              this is a hypothesis for the pilot to test, not a conclusion this survey can support by
              itself.
            </p>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            More research will be published here as the Korva Waste pilot progresses.
          </p>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Let's Talk"
        title="Want the Full Findings?"
        lede="Reach out and we'll share the complete discovery report."
      />
    </SiteLayout>
  );
}
