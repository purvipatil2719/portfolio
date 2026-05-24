const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-12 max-w-2xl">
    {eyebrow && (
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-3 text-base text-muted-foreground">{description}</p>
    )}
  </div>
);

export default SectionHeading;
