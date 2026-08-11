import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          <p className="text-ink">{profile.name}</p>
          <p>
            {profile.location} · {profile.locationNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="text-ink underline-offset-4 hover:underline"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-content px-6 pb-8 text-xs text-muted">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
