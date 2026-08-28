import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import korvaLogo from "@/assets/korva-logo.png";

const groups = [
  {
    label: "Products",
    items: [
      { to: "/korva-waste", title: "Korva Waste", desc: "Sanitation reporting & operations platform" },
      { to: "/roadmap", title: "Roadmap", desc: "Korva Safe, Flow, Stock & Communities" },
    ],
  },
  {
    label: "Resources",
    items: [
      { to: "/insights", title: "Insights", desc: "Research & discovery findings" },
      { to: "/press-kit", title: "Press Kit", desc: "Boilerplate, logos & brand assets" },
    ],
  },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="wrap flex h-[74px] items-center justify-between">
        <Link to="/" aria-label="Korva Systems home" className="flex items-center">
          <img src={korvaLogo} alt="Korva Systems" className="h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 font-display text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {g.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full w-80 translate-y-1 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-[var(--shadow-card)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {g.items.map((it) => (
                  <Link
                    key={it.to}
                    to={it.to}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                  >
                    <span className="block font-display text-sm font-semibold">{it.title}</span>
                    <span className="block text-xs text-muted-foreground">{it.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            to="/about"
            className="rounded-lg px-3.5 py-2 font-display text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link to="/partner" className="btn btn-gradient ml-3">
            Partner With Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {groups.map((g) => (
              <div key={g.label}>
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === g.label ? null : g.label)}
                  className="flex w-full items-center justify-between py-2.5 font-display text-sm font-semibold"
                >
                  {g.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openGroup === g.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openGroup === g.label && (
                  <div className="border-l border-border pl-4">
                    {g.items.map((it) => (
                      <Link
                        key={it.to}
                        to={it.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-muted-foreground"
                      >
                        {it.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="py-2.5 font-display text-sm font-semibold"
            >
              About
            </Link>
            <Link to="/partner" onClick={() => setOpen(false)} className="btn btn-gradient mt-2">
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
