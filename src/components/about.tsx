import Image from "next/image";
import { identity, about } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        {/* Photo */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-iris/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-ink-line shadow-card">
              <Image
                src={identity.photo}
                alt={`${identity.name} — ${identity.role}`}
                width={640}
                height={640}
                sizes="(max-width:1024px) 80vw, 40vw"
                className="aspect-square w-full object-cover"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
            <div className="accent-rule absolute -bottom-3 left-8 right-8 h-px" />
          </div>
        </Reveal>

        {/* Bio */}
        <div>
          <SectionHeading
            eyebrow="About"
            title={<>The person <span className="accent-text">behind the work</span></>}
          />
          <div className="mt-6 space-y-4">
            {about.paras.map((p, i) => (
              <Reveal key={i} i={i}>
                <p className="font-sans text-[15px] leading-relaxed text-fog-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal i={2}>
            <ul className="mt-7 flex flex-wrap gap-3">
              {about.points.map((pt) => (
                <li
                  key={pt}
                  className="rounded-full border border-ink-line px-4 py-2 font-sans text-[12.5px] text-fog"
                >
                  <span className="accent-text">✓</span> {pt}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal i={3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="btn rounded-full bg-iris-cyan px-7 py-3.5 text-ink shadow-glow hover:opacity-90"
              >
                Work with me
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-full border border-ink-line px-7 py-3.5 text-fog hover:border-iris"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
