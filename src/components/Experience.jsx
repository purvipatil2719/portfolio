import { Briefcase, MapPin } from "lucide-react";

import { experiences } from "../constants";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've kept things running"
          description="Production support, SRE, and reliability engineering across enterprise-scale platforms."
        />

        <ol className="relative space-y-10 border-l border-border pl-8">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:bg-card">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold text-foreground">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      {exp.role}
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="text-foreground">{exp.company}</span>
                      {exp.client && (
                        <span className="text-muted-foreground"> · {exp.client}</span>
                      )}
                      <span className="text-muted-foreground/70">
                        {" "}
                        · <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                      </span>
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
