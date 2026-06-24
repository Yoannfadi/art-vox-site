import Link from "next/link";

// Typographic gold wordmark used in header and footer (no image logo).

export default function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const sizes = size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl";
  return (
    <Link
      href="/"
      aria-label="ART VOX — Accueil"
      className={`font-display font-semibold tracking-[0.32em] text-gold transition-colors hover:text-gold-light ${sizes} ${className}`}
    >
      ART&nbsp;VOX
    </Link>
  );
}
