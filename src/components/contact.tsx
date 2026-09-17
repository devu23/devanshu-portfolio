import { identity } from "@/data/site";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-iris/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow">Let&apos;s build</p>
        </Reveal>
        <Reveal i={1}>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-fog sm:text-6xl">
            Got a project? <br />
            <span className="accent-text">Let&apos;s make it real.</span>
          </h2>
        </Reveal>
        <Reveal i={2}>
          <p className="mx-auto mt-5 max-w-lg font-sans text-[15px] leading-relaxed text-fog-muted">
            Websites, stores, or AI automation — tell me what you need and I&apos;ll tell you
            honestly how I&apos;d build it. First reply within a day.
          </p>
        </Reveal>
        <Reveal i={3}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="btn rounded-full bg-iris-cyan px-8 py-4 text-ink shadow-glow hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={identity.calendly}
              className="btn rounded-full border border-ink-line px-8 py-4 text-fog hover:border-iris"
            >
              Book a call
            </a>
          </div>
        </Reveal>
        <Reveal i={3}>
          <p className="mt-6 font-sans text-[13px] text-fog-dim">{identity.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
