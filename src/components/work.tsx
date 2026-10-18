import Image from "next/image";
import { projects } from "@/data/site";
import { Arrow } from "./mag-link";
import { LiveChat } from "./live-chat";

/** Numbered editorial rows: number · story · image. The Neev row carries the live replay. */
export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="wrap">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
          <h2 className="text-[clamp(2.6rem,7vw,6.5rem)] font-black uppercase leading-[0.85] tracking-tightest" data-reveal>
            Selected <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-accent">work</span>
          </h2>
          <span className="label hidden sm:block">Live · you can open every one</span>
        </div>

        {projects.map((p) => (
          <article key={p.name} className="group border-b border-line py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
              <span className="font-mono text-[0.8125rem] text-accent" data-reveal>{p.n}</span>

              <div data-reveal style={{ ["--d" as string]: "80ms" }}>
                <p className="label">{p.tag}</p>
                <h3 className="mt-3 text-[clamp(2rem,4.4vw,3.8rem)] font-bold leading-[0.95] tracking-[-0.045em] transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {p.name}
                  {p.note && (
                    <span className="ml-3 inline-block translate-y-[-0.6em] rounded-full border border-line px-2.5 py-1 align-middle text-[0.6875rem] font-medium tracking-normal text-ink-mute">
                      {p.note}
                    </span>
                  )}
                </h3>
                <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-ink-mute">{p.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem] text-ink-dim">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b border-accent/60 pb-1 text-[0.875rem] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {p.hrefLabel} <Arrow />
                </a>
              </div>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.name}`}
                data-reveal
                data-clip
                className="relative block aspect-[16/10] overflow-hidden rounded-[6px] border border-line bg-canvas-raise"
              >
                <Image
                  src={p.preview}
                  alt={`${p.name} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.035]"
                />
              </a>
            </div>

            {p.live && (
              <div className="mt-12 lg:ml-[calc(72px+3rem)]" data-reveal>
                <LiveChat />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
