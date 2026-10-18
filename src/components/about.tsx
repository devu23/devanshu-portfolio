import { about, steps } from "@/data/site";

/** Story + proof on the right, how a project runs on the left. No second photo: the hero already shows him. */
export function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        {/* how it works: numbered steps on a marigold rail (after the text on phones) */}
        <div data-reveal className="order-last rounded-[12px] border border-line bg-canvas-raise p-6 sm:p-9 lg:order-first">
          <p className="label text-accent">How it works</p>
          <ol className="relative mt-8 space-y-9 before:absolute before:bottom-3 before:left-[0.95rem] before:top-3 before:w-px before:bg-gradient-to-b before:from-accent before:via-accent/40 before:to-line">
            {steps.map((s, i) => (
              <li key={s.n} className="relative flex gap-5" data-reveal style={{ ["--d" as string]: `${120 + i * 120}ms` }}>
                <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/60 bg-canvas font-mono text-[0.75rem] text-accent">
                  {s.n}
                </span>
                <div className="pt-0.5">
                  <p className="text-[clamp(1.25rem,1.9vw,1.6rem)] font-semibold leading-tight tracking-[-0.03em]">{s.title}</p>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-mute">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <span className="label" data-reveal>About</span>
          <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,4.2rem)] font-bold leading-[0.95] tracking-[-0.045em]" data-reveal>
            You talk to the person who <span className="font-serif font-normal italic text-accent">builds it.</span>
          </h2>
          <div className="mt-7 space-y-4">
            {about.paras.map((p, i) => (
              <p key={i} className="max-w-xl text-[1.0312rem] leading-relaxed text-ink-mute" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                {p}
              </p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
            {about.proof.map((s, i) => (
              <div key={s.label} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-none tracking-tightest text-accent">{s.value}</dd>
                <dd className="mt-2 text-[0.8125rem] leading-snug text-ink-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
