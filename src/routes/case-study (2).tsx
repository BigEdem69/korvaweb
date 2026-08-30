import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHead, Stat, ClosingCTA } from "@/components/site";
import refuseSite from "@/assets/refuse.jpg";
import refuseSiteDetail from "@/assets/refuse1.jpg";
import shotReportTracking from "@/assets/product/shot-report-tracking.png";
import shotSupervisorVerify from "@/assets/product/shot-supervisor-verify.png";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study - Validating the Sanitation Reporting Gap in Tema | Korva Systems" },
      {
        name: "description",
        content:
          "How Korva Systems validated the sanitation reporting gap in Tema through discovery research, before writing a line of product code.",
      },
      { property: "og:title", content: "Validating the Sanitation Reporting Gap in Tema" },
      {
        property: "og:description",
        content: "How discovery research shaped what Korva Systems is building with Korva Waste.",
      },
    ],
  }),
  component: CaseStudy,
});

const findings: Array<[string, string]> = [
  ["69%", "never reported an issue"],
  ["80%", "of reporters got no follow-up"],
  ["4.4/5", "rated a tracking platform useful"],
  ["94%", "said knowing the outcome matters"],
];

const steps = [
  {
    number: "01",
    title: "The Hypothesis",
    body: "National data already told us waste management in Ghana has a scale problem - UNDP estimates only around 10% of the 12,710 tonnes generated daily is collected and disposed of properly. But scale data does not tell you where the breakdown actually happens. Our working hypothesis: the failure is not collection alone, it is coordination - specifically, the gap between someone noticing a problem and it actually getting resolved.",
  },
  {
    number: "02",
    title: "The Method",
    body: "We ran a digital discovery survey with residents and workers in Tema and nearby communities in August 2026 - 116 valid responses, covering how often people encounter sanitation problems, whether they report them, what happens when they do, and how useful a structured reporting platform would be to them. We are upfront that a sample this size is directional, not statistically representative - its value is in surfacing real patterns and real language, not proving a market size.",
  },
  {
    number: "03",
    title: "What We Found",
    body: "The hypothesis held, and in a sharper form than expected. 69% of respondents had never reported a sanitation problem, despite most encountering issues daily or weekly. Among the minority who had reported something, 80% said nothing happened afterward - no update, no resolution, no follow-up. The problem was not that people did not care or did not notice. It was that reporting felt pointless.",
  },
  {
    number: "04",
    title: "What It Changed About Korva Waste",
    body: "This research directly shaped three product decisions:",
  },
  {
    number: "05",
    title: "What's Next",
    body: "This survey told us the problem is real; it cannot tell us whether our specific solution works at scale. That is what the pilot is for - a controlled test across an institutional environment (Central University, Dawhenya) and a residential community in Tema, measured against the baseline this research established.",
  },
];

function CaseStudy() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case Study · Discovery Research"
        title="How We Validated the Sanitation Reporting Gap in Tema"
        lede="Before writing a line of product code, we tested whether the problem we assumed existed actually did. This is that process, and what it changed about what we're building."
      />

      <section className="section">
        <div className="wrap max-w-4xl">
          {steps.map((step) => (
            <article key={step.number} className="mb-10 grid gap-5 last:mb-0 sm:grid-cols-[3rem_1fr]">
              <span className="font-display text-xl font-bold text-accent">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.body}</p>

                {step.number === "01" && (
                  <figure className="panel mt-6 overflow-hidden p-0">
                    <img
                      src={refuseSite}
                      alt="Refuse site with scattered waste and a worker collecting rubbish"
                      width={509}
                      height={338}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <figcaption className="px-5 py-3 text-xs text-muted-foreground">
                      Refuse site documentation from the communities informing our discovery work.
                    </figcaption>
                  </figure>
                )}

                {step.number === "03" && (
                  <>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {findings.map(([value, label]) => (
                        <Stat key={label} value={value} label={label} />
                      ))}
                    </div>
                    <blockquote className="panel mt-8 border-l-4 border-l-accent">
                      <p className="font-display text-base font-medium italic leading-relaxed">
                        "I would create one simple, reliable platform where people can report waste
                        problems, track their complaints, and receive updates until the issue is resolved."
                      </p>
                      <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        - Business owner / worker, Tema
                      </footer>
                    </blockquote>
                  </>
                )}

                {step.number === "04" && (
                  <>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      <li>Every report gets a visible, traceable status, not just a submission confirmation.</li>
                      <li>A verify-and-reopen step lets a resident say, "this wasn't actually fixed."</li>
                      <li>Korva Waste focuses on coordination, not physical infrastructure or bin provision.</li>
                    </ul>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <figure className="panel overflow-hidden p-0">
                        <img
                          src={shotReportTracking}
                          alt="Report tracking screen showing a visible status timeline"
                          loading="lazy"
                          className="mx-auto max-w-[220px] w-full object-contain pt-4"
                        />
                        <figcaption className="px-5 py-3 text-center text-xs text-muted-foreground">
                          The status timeline, direct from finding #3
                        </figcaption>
                      </figure>
                      <figure className="panel overflow-hidden p-0">
                        <img
                          src={shotSupervisorVerify}
                          alt="Supervisor verify screen with approve, reject, and reopen options"
                          loading="lazy"
                          className="mx-auto max-w-[220px] w-full object-contain pt-4"
                        />
                        <figcaption className="px-5 py-3 text-center text-xs text-muted-foreground">
                          The reopen step, direct from the "nothing happened" pattern
                        </figcaption>
                      </figure>
                    </div>
                  </>
                )}

                {step.number === "05" && (
                  <figure className="panel mt-6 overflow-hidden p-0">
                    <img
                      src={refuseSiteDetail}
                      alt="Refuse accumulated beside a building on an exposed roadside site"
                      width={810}
                      height={1080}
                      loading="lazy"
                      className="max-h-[32rem] w-full object-cover object-center"
                    />
                    <figcaption className="px-5 py-3 text-xs text-muted-foreground">
                      A field example of the sanitation conditions this pilot aims to make visible and track.
                    </figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="night section relative overflow-hidden">
        <div className="dotfield absolute inset-0 opacity-15" aria-hidden />
        <div className="wrap relative text-center">
          <SectionHead
            eyebrow="Read More"
            title="See the Full Discovery Findings"
            center
          />
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link to="/insights" className="btn btn-signal">
              Full Findings
            </Link>
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