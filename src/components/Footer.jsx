import { profile } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}. Built with care.
        </p>
        <p className="text-xs text-muted-foreground">
          {profile.title} · {profile.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
