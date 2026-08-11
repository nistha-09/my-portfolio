import Link from "next/link";
import type { Project } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-line bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
    >
      <ImagePlaceholder
        label={`Add project screenshot — ${project.name}`}
        aspect="aspect-[16/10]"
        className="rounded-none border-0 border-b border-line transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="p-6">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.oneLiner}</p>
        <span className="mt-4 inline-block text-sm text-accent">View case study →</span>
      </div>
    </Link>
  );
}
