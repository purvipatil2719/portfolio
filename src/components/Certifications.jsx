import { Award } from "lucide-react";

import { certifications } from "../constants";
import SectionHeading from "./SectionHeading";

const Certifications = () => {
  return (
    <section id="certifications" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Certifications"
          title="Always leveling up"
          description="Recent training and certifications relevant to SRE and observability."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card/80"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-emerald-600 dark:text-emerald-400">
                    <Award className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {c.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
