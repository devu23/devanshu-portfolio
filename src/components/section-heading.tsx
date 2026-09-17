import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal i={1}>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-fog sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal i={2}>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-fog-muted">{subtitle}</p>
        </Reveal>
      )}
      <Reveal i={2}>
        <div className={cn("accent-rule mt-6 h-px w-24", center && "mx-auto")} />
      </Reveal>
    </div>
  );
}
