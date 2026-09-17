import { identity, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 lg:flex-row lg:px-8">
        <div className="text-center lg:text-left">
          <p className="font-display text-lg font-semibold text-fog">{identity.name}</p>
          <p className="mt-0.5 font-sans text-[11px] uppercase tracking-luxe text-iris-light">
            {identity.company}
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="font-sans text-[12px] uppercase tracking-luxe text-fog-dim hover:text-fog">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a href={identity.github} className="font-sans text-[12px] uppercase tracking-luxe text-fog-dim hover:text-cyan">GitHub</a>
          <a href={identity.linkedin} className="font-sans text-[12px] uppercase tracking-luxe text-fog-dim hover:text-cyan">LinkedIn</a>
        </div>
      </div>
      <div className="border-t border-ink-line py-4">
        <p className="text-center font-sans text-[11px] uppercase tracking-luxe text-fog-dim">
          © {new Date().getFullYear()} {identity.name} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
