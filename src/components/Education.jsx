import { GraduationCap } from "lucide-react";

import { education } from "../constants";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {education.map((e) => (
            <div
              key={e.degree}
              className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:bg-card"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-emerald-600 dark:text-emerald-400">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                {e.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {e.institution}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {e.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
