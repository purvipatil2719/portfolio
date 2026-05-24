import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import { profile } from "../constants";

const Contact = () => {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-[400px] bg-[radial-gradient(ellipse_at_bottom,oklch(0.696_0.17_162.48/0.18),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let's keep your systems reliable
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Open to SRE, production support, and observability roles. Happy to
            chat about reliability problems too.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => {
            const Tag = href ? "a" : "div";
            return (
              <Tag
                key={label}
                href={href}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card/60 p-5 transition-colors hover:bg-card"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-emerald-600 dark:text-emerald-400">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {value}
                  </p>
                </div>
                {href && (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
