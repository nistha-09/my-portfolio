import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-start px-6 py-32">
      <h1 className="font-display text-3xl text-ink">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-85"
      >
        Back to home
      </Link>
    </div>
  );
}
