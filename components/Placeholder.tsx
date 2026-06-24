// Elegant CSS image placeholder used wherever original photography is not
// available. Renders a subtle dark gradient, a thin gold hairline border and
// centered initials (or an icon) so it reads as intentional, not broken.

type PlaceholderProps = {
  name?: string;
  initials?: string;
  icon?: string;
  aspect?: string; // tailwind aspect ratio class e.g. "aspect-square"
  className?: string;
};

function computeInitials(name?: string) {
  if (!name) return "AV";
  const parts = name.trim().split(/\s+/);
  const letters = parts.slice(0, 2).map((p) => p[0] ?? "");
  return letters.join("").toUpperCase() || "AV";
}

export default function Placeholder({
  name,
  initials,
  icon,
  aspect = "aspect-square",
  className = "",
}: PlaceholderProps) {
  const display = icon ?? initials ?? computeInitials(name);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-hairline ${className}`}
      role="img"
      aria-label={name ? `Portrait de ${name}` : "Visuel ART VOX"}
    >
      {/* Calque animé : léger zoom Ken-Burns (figé sous reduced-motion) */}
      <div
        aria-hidden="true"
        className="motion-safe:animate-ken-burns absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, #18181c 0%, #111111 55%, #080808 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span
          className={`font-display ${
            icon ? "text-4xl" : "text-3xl"
          } font-semibold tracking-wide text-gold/80`}
        >
          {display}
        </span>
        {name && !icon ? (
          <span className="px-4 text-center text-xs font-medium uppercase tracking-eyebrow text-muted">
            {name}
          </span>
        ) : null}
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: "inset 0 1px 40px rgba(212,175,114,0.06)",
        }}
      />
    </div>
  );
}
