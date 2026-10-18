import { identity, nav } from "@/data/site";

/** Giant cropped wordmark as the sign-off. */
export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line pt-14">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.875rem] text-ink-mute">
          © {new Date().getFullYear()} {identity.name} · {identity.company}
        </p>
        <ul className="flex flex-wrap gap-6">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="label hover:text-ink">{n.label}</a>
            </li>
          ))}
          <li>
            <a href="#top" className="label hover:text-accent">Back to top ↑</a>
          </li>
        </ul>
      </div>
      <p
        aria-hidden
        className="wrap mt-10 select-none whitespace-nowrap font-black uppercase leading-[0.72] tracking-tightest text-canvas-card [font-size:clamp(3rem,16vw,13.5rem)] translate-y-[0.12em]"
      >
        {identity.first}
      </p>
    </footer>
  );
}
