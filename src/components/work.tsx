import Image from "next/image";
import { projects } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Things I&apos;ve <span className="accent-text">shipped</span></>}
          subtitle="Real, live products — not mockups."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} i={i}>
              <div className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-iris/50 hover:shadow-card">
                {/* preview area — placeholder now, swap image later */}
                <div
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                >
                  {p.preview ? (
                    <Image
                      src={p.preview}
                      alt={`${p.name} preview`}
                      fill
                      sizes="(max-width:1024px) 90vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-3xl font-semibold text-white/90">{p.name}</span>
                  )}
                  {p.note && (
                    <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-sans text-[10px] uppercase tracking-luxe text-fog">
                      {p.note}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-fog">{p.name}</h3>
                    <span className="font-sans text-[10px] uppercase tracking-luxe text-iris-light">{p.tag}</span>
                  </div>
                  <p className="mt-2 flex-1 font-sans text-[13.5px] leading-relaxed text-fog-muted">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full border border-ink-line px-2.5 py-1 font-sans text-[11px] text-fog-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      className="mt-5 inline-flex items-center gap-2 font-sans text-[13px] font-medium text-cyan transition-colors hover:text-fog"
                    >
                      {p.hrefLabel ?? "View"} <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
