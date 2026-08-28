import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHead, ClosingCTA } from "@/components/site";

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      { title: "Press Kit — Korva Systems" },
      {
        name: "description",
        content: "Korva Systems boilerplate, founder bio, brand colors, and media contact.",
      },
      { property: "og:title", content: "Korva Systems Press Kit" },
      {
        property: "og:description",
        content: "Everything needed to write about or reference Korva Systems accurately.",
      },
    ],
  }),
  component: PressKit,
});

const swatches = [
  { name: "Midnight", hex: "#0C1A2B", className: "bg-midnight" },
  { name: "Teal", hex: "#0B5E4A", className: "bg-primary" },
  { name: "Cyan", hex: "#4FC3DF", className: "bg-cyan" },
  { name: "Amber", hex: "#E8963A", className: "bg-accent" },
];

function PressKit() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Press Kit"
        title="Boilerplate, Brand & Media Assets"
        lede="Everything needed to write about or reference Korva Systems accurately."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Company Boilerplate" title="Short & Long Descriptions" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="panel">
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Short (one sentence)
              </h4>
              <p className="mt-3 text-sm text-muted-foreground">
                Korva Systems is a Ghanaian operational technology company building digital infrastructure
                that helps African businesses and communities operate more efficiently, starting with
                sanitation.
              </p>
            </div>
            <div className="panel">
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Long (one paragraph)
              </h4>
              <p className="mt-3 text-sm text-muted-foreground">
                Korva Systems builds digital platforms that turn fragmented manual processes into connected,
                accountable systems for African organizations. Its first product, Korva Waste, is a
                sanitation reporting and operations platform connecting residents, field teams, supervisors,
                and municipal authorities in Tema, Ghana. Founded by Bright Edem Gbafah, Korva Systems is
                preparing its first controlled pilot ahead of a broader roadmap spanning safety, logistics,
                warehouse, and community-coordination products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHead eyebrow="Founder" title="Bright Edem Gbafah" />
            <p className="mt-5 text-muted-foreground">
              Bright Edem Gbafah is the Founder and CEO of Korva Systems. He founded the company while
              working as a Warehouse Officer at a global agri-commodity trading company, where he
              independently built a digital warehouse data system to replace manual tally sheets — the same
              instinct behind Korva Systems today.
            </p>
          </div>
          <div>
            <span className="eyebrow">Brand Colors</span>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {swatches.map((s) => (
                <div key={s.name}>
                  <div className={`h-16 rounded-xl ${s.className}`} />
                  <p className="mt-2 font-display text-sm font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Media Contact"
        title="Get in Touch"
        lede="For interviews, quotes, or additional assets."
      />
    </SiteLayout>
  );
}
