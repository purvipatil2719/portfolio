import { ArrowRight, MapPin, Mail, Phone, Activity } from "lucide-react";

import { profile } from "../constants";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,oklch(0.696_0.17_162.48/0.18),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 sm:pt-44">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-muted-foreground sm:text-xl">
          <Activity className="h-5 w-5 text-emerald-500" />
          <span className="font-medium text-foreground">{profile.title}</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {profile.location}
          </span>
        </div>

        <p className="mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.summary}
        </p>

        {/* <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
          >
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
          >
            <Phone className="h-4 w-4" /> {profile.phone}
          </a>
        </div> */}

        {/* <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat label="Uptime maintained" value="99.9%" />
          <Stat label="DB perf gain" value="20%" />
          <Stat label="Testing effort cut" value="30%" />
          <Stat label="Manual entry cut" value="50%" />
        </dl> */}
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur">
    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
      {label}
    </dt>
    <dd className="mt-1 text-2xl font-semibold text-foreground">{value}</dd>
  </div>
);

export default Hero;
