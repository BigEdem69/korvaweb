import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="night relative overflow-hidden">
      <div className="dotfield absolute inset-0 opacity-20" aria-hidden />
      <div className="wrap relative py-20 md:py-28">
        <span className="eyebrow eyebrow-on-dark">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl">{title}</h1>
        {lede && <p className="lede lede-on-dark mt-6">{lede}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3.5">{children}</div>}
      </div>
    </section>
  );
}

export function Stat({ value, label, onDark }: { value: string; label: string; onDark?: boolean }) {
  return (
    <div>
      <div className={onDark ? "stat-num stat-num-on-dark" : "stat-num"}>{value}</div>
      <p className={`mt-2 text-sm ${onDark ? "text-midnight-muted" : "text-muted-foreground"}`}>{label}</p>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  center,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4">{title}</h2>
      {lede && <p className={`lede mt-5 ${center ? "mx-auto" : ""}`}>{lede}</p>}
    </div>
  );
}

export function ClosingCTA({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="night relative overflow-hidden">
      <div className="dotfield absolute inset-0 opacity-15" aria-hidden />
      <div className="wrap relative py-20 text-center">
        <span className="eyebrow eyebrow-on-dark">{eyebrow}</span>
        <h2 className="mx-auto mt-4 max-w-2xl">{title}</h2>
        {lede && <p className="lede lede-on-dark mx-auto mt-5">{lede}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Link to="/partner" className="btn btn-signal">
            Partner With Us
          </Link>
          <a href="mailto:korvasystems@gmail.com" className="btn btn-line-dark">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
