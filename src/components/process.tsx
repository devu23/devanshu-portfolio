import { process, stats } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section id="process" className="relative border-y border-ink-line bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={<>Simple, fast, <span className="accent-text">no black box</span></>}
          subtitle="You always know what's happening and what's next."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} i={i}>
              <div className="card h-full p-6">
                <span className="font-display text-3xl font-bold accent-text">{p.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-fog">{p.title}</h3>
                <p className="mt-2 font-sans text-[13.5px] leading-relaxed text-fog-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-ink-line pt-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} i={i}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold accent-text">{s.value}</p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-luxe text-fog-dim">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
