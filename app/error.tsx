"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-6">
      <div className="text-center">
        <p className="font-mono text-brass text-sm mb-4">$ error: runtime</p>
        <h1 className="font-display text-4xl font-semibold text-ink mb-4">
          Something broke during the build.
        </h1>
        <p className="text-ink-muted mb-8 max-w-sm mx-auto">
          An unexpected error occurred. You can try again below.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center rounded-full bg-brass text-base px-6 py-3 text-sm font-medium hover:bg-brass-light transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
