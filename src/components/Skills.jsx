import {
  Code2,
  Cloud,
  LineChart,
  LifeBuoy,
  Database,
} from "lucide-react";

import { skillGroups } from "../constants";
import SectionHeading from "./SectionHeading";

const ICONS = {
  "Programming & Technologies": Code2,
  "Cloud & DevOps": Cloud,
  "Monitoring & Observability": LineChart,
  "Support & Troubleshooting": LifeBuoy,
  Databases: Database,
};

const Skills = () => {
  return (
    <section id="skills" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="The reliability toolkit"
          description="Languages, platforms, and tools I reach for to keep production healthy."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.label] ?? Code2;
            return (
              <div
                key={group.label}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card/80"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {group.label}
                  </h3>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
