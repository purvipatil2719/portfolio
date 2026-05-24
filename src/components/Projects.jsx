import { FolderGit2 } from "lucide-react";

import { projects } from "../constants";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of production-support engagements and an engineering capstone."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex h-full flex-col rounded-xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-0.5 hover:bg-card hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <FolderGit2 className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {p.org}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>

              <ul className="mt-4 flex-1 space-y-2">
                {p.points.map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-emerald-500/70" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
