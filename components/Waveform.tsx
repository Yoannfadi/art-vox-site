"use client";

// Signature visuelle ART VOX — waveform dorée animée.
// Une rangée de barres verticales qui pulsent lentement, dégradé or
// (#D4AF72 → #EAC97A), faible opacité. L'animation est purement CSS (cheap) et
// se fige sous prefers-reduced-motion (cf. .animate-* + media query globale,
// renforcé ici par un style inline).

type WaveformProps = {
  /** "hero" = pleine largeur ~80px sous le hero ; "divider" = séparateur fin */
  variant?: "hero" | "divider";
  className?: string;
};

export default function Waveform({
  variant = "hero",
  className = "",
}: WaveformProps) {
  const bars = variant === "hero" ? 64 : 40;
  const height = variant === "hero" ? "h-20" : "h-8";
  const baseOpacity = variant === "hero" ? 0.5 : 0.32;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex w-full items-center justify-center gap-[3px] overflow-hidden ${height} ${className}`}
    >
      {Array.from({ length: bars }).map((_, i) => {
        // Enveloppe douce : barres plus hautes au centre.
        const center = (bars - 1) / 2;
        const envelope = 1 - Math.abs(i - center) / center; // 0..1
        const scale = 0.25 + envelope * 0.75;
        const delay = (i % 16) * 0.12;
        const duration = 3 + (i % 5) * 0.4;
        return (
          <span
            key={i}
            className="motion-safe:animate-[wave-pulse_var(--d)_ease-in-out_infinite] block w-[2px] flex-shrink-0 rounded-full"
            style={
              {
                height: `${Math.round(scale * 100)}%`,
                opacity: baseOpacity,
                background:
                  "linear-gradient(to top, #D4AF72 0%, #EAC97A 100%)",
                ["--d" as string]: `${duration}s`,
                animationDelay: `${delay}s`,
                transformOrigin: "center",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
