import Image from "next/image";
import { education, experience, profile, projects, skills } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import SkillsGrid from "@/components/SkillsGrid";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-[1.3fr_0.7fr]">
          <FadeIn>
            <p className="text-sm uppercase tracking-wide text-accent">
              {profile.title}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <p className="mt-2 text-sm text-muted">
              {profile.location} · {profile.locationNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-85"
              >
                View work
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
              >
                Download résumé
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/headshot.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">About</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
              {profile.bio}
            </p>
            <p className="mt-4 text-sm text-muted">
              {education.degree}, {education.school} — {education.location}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Experience</h2>
          </FadeIn>
          <div className="mt-10">
            <Timeline items={experience} />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-line scroll-mt-20">
        <div className="mx-auto max-w-content px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Selected work</h2>
            <p className="mt-3 max-w-xl text-muted">
              A selection of product and brand design work across AI, Web3, and
              emerging technology.
            </p>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 60}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Skills</h2>
          </FadeIn>
          <div className="mt-10">
            <SkillsGrid groups={skills} />
          </div>
        </div>
      </section>
    </>
  );
}
