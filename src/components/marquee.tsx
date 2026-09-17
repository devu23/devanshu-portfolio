import { techMarquee } from "@/data/site";

export function Marquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden border-y border-ink-line bg-ink-soft py-4">
      <div className="flex">
        {[0, 1].map((k) => (
          <div key={k} aria-hidden={k === 1} className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {row.map((t, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-sans text-[12px] uppercase tracking-luxe text-fog-muted">{t}</span>
                <span className="text-iris">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
