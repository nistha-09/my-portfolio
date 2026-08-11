import type { ExperienceItem } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="flex flex-col gap-10 border-l border-line pl-8">
      {items.map((item, i) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-accent" />
          <FadeIn delay={i * 80}>
            <p className="text-xs uppercase tracking-wide text-muted">{item.period}</p>
            <h3 className="mt-1 font-display text-lg text-ink">{item.role}</h3>
            <p className="text-sm text-muted">
              {item.company} — {item.meta}
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-ink/80">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-muted">
                  {bullet}
                </li>
              ))}
            </ul>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
