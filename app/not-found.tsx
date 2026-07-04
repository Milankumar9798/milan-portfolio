import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-6">
      <div className="text-center">
        <p className="font-mono text-brass text-sm mb-4">$ error: 404</p>
        <h1 className="font-display text-5xl font-semibold text-ink mb-4">
          Page not found
        </h1>
        <p className="text-ink-muted mb-8 max-w-sm mx-auto">
          This route doesn&apos;t compile — the page you&apos;re looking for
          doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-brass text-base px-6 py-3 text-sm font-medium hover:bg-brass-light transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
