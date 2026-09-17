import { services } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What I do"
          title={<>Services that <span className="accent-text">win customers</span></>}
          subtitle="From a single landing page to a full AI lead system — built to convert, worldwide."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} i={i}>
              <div className="group card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-iris/50 hover:shadow-glow">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-lg text-ink"
                  style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
                >
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-fog">{s.title}</h3>
                <p className="mt-2 font-sans text-[13.5px] leading-relaxed text-fog-muted">{s.desc}</p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-sans text-[12.5px] text-fog-dim">
                      <span className="text-cyan">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* space left for more services */}
        <Reveal i={2}>
          <p className="mt-8 text-center font-sans text-[13px] text-fog-dim">
            + more as we grow — SEO, maintenance, integrations, whatever your business needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
