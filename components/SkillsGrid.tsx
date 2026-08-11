import type { SkillGroup } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, i) => (
        <FadeIn key={group.category} delay={i * 60}>
          <h3 className="font-display text-base text-ink">{group.category}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </div>
  );
}
