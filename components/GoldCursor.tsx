"use client";

import { useEffect, useRef, useState } from "react";

// Curseur signature ART VOX — petit point doré qui suit le pointeur en pulsant
// doucement. Activé uniquement sur les appareils à pointeur fin (desktop) et
// jamais sous prefers-reduced-motion. Non intrusif : pointer-events none,
// mix-blend, z-index élevé. Léger : une seule transform sur mousemove via rAF.

export default function GoldCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const fine = window.matchMedia("(pointer:fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const render = () => {
      const node = dotRef.current;
      if (node) {
        node.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = null;
    };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (raf.current == null) {
        raf.current = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-screen"
      style={{ willChange: "transform" }}
    >
      <span className="animate-cursor-pulse block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
    </div>
  );
}
