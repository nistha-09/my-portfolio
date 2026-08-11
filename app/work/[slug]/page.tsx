import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.oneLiner,
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.oneLiner,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const sections = [
    { heading: "Challenge", body: project.challenge },
    { heading: "Solution", body: project.solution },
    { heading: "My Role", body: project.myRole },
    { heading: "Design Decisions", body: project.designDecisions },
    { heading: "Responsive Design", body: project.responsiveDesign },
  ];

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-content px-6 pb-14 pt-16">
          <FadeIn>
            <Link href="/#work" className="text-sm text-muted hover:text-ink">
              ← Back to work
            </Link>
            <h1 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {project.oneLiner}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Role</dt>
                <dd className="mt-1 text-sm text-ink">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Tools &amp; stack
                </dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink/80"
                    >
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto max-w-content px-6 py-16">
        <FadeIn>
          <h2 className="font-display text-2xl text-ink">Overview</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80">
            {project.overview}
          </p>
        </FadeIn>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="border-t border-line">
          <div className="mx-auto max-w-content px-6 py-16">
            <FadeIn>
              <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80">
                {section.body}
              </p>
            </FadeIn>
          </div>
        </section>
      ))}

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink">Gallery</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Array.from({ length: project.galleryCount }).map((_, i) => {
              const image = project.images?.[i];
              return (
                <FadeIn key={i} delay={i * 50}>
                  {image ? (
                    <Image
                      src={image.src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="w-full rounded-lg border border-line"
                    />
                  ) : (
                    <ImagePlaceholder
                      label={`Add project screenshot ${i + 1} — ${project.name}`}
                    />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-16">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink">Outcome</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80">
              {project.outcome}
            </p>

            <div className="mt-8">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-85"
                >
                  View live product →
                </a>
              ) : (
                <p className="text-sm italic text-muted">
                  [Add link to live product, if public]
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
