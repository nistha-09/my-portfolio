import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.thumbnail;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-line bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {thumbnail ? (
          <Image
            src={thumbnail.src}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
        ) : (
          <ImagePlaceholder
            label={`Add project screenshot — ${project.name}`}
            aspect="aspect-[16/10]"
            className="rounded-none border-0 transition-opacity duration-300 group-hover:opacity-90"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.oneLiner}</p>
        <span className="mt-4 inline-block text-sm text-accent">View case study →</span>
      </div>
    </Link>
  );
}
