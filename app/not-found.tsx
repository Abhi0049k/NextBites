import Link from "next/link";

export default function NotFound() {
  return (
    <main className="detail">
      <h1>Recipe not found</h1>
      <p className="detail-blurb">
        Sorry, we could not find the recipe you were looking for.
      </p>
      <Link href="/" className="back">
        ← Back to all recipes
      </Link>
    </main>
  );
}
