"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="detail">
      <h1>Something went wrong</h1>
      <p className="detail-blurb">
        {error.message || "An unexpected error occurred while loading this page."}
      </p>
      <button type="button" onClick={reset} className="back">
        Try again
      </button>
    </main>
  );
}
