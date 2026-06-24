"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import Waveform from "./Waveform";
import { HERO_VARIANT } from "@/lib/config";

// Hero A/B. Variante par défaut = HERO_VARIANT (lib/config.ts).
// Override à l'exécution via ?hero=a | ?hero=b (lu côté client).
export default function Hero() {
  const [variant, setVariant] = useState<"A" | "B">(HERO_VARIANT);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
      .get("hero")
      ?.toLowerCase();
    if (q === "a") setVariant("A");
    else if (q === "b") setVariant("B");
  }, []);

  return (
    <section className="relative overflow-hidden pt-40 pb-12 sm:pt-48 sm:pb-16">
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(212,175,114,0.12) 0%, rgba(8,8,8,0) 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-8">ART VOX</p>
        </Reveal>

        {variant === "A" ? <HeroA /> : <HeroB />}
      </div>

      {/* Signature waveform sous le hero */}
      <div className="mt-14 sm:mt-20">
        <Waveform variant="hero" />
      </div>
    </section>
  );
}

function HeroA() {
  return (
    <>
      <Reveal delay={80}>
        <h1 className="h-hero text-5xl text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Devenez l&apos;artiste que
          <br />
          <span className="text-gold">vous êtes vraiment.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl">
          Art Vox accompagne les artistes de leur création à leur première
          scène — avec la science de la voix, l&apos;excellence du coaching et la
          puissance d&apos;un réseau de professionnels.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/#ECOSYSTEME" className="btn-gold">
            Découvrir Art Vox 360°
          </Link>
          <Link href="/#TEMOIGNAGES" className="btn-ghost">
            Voir les transformations
          </Link>
        </div>
      </Reveal>
    </>
  );
}

function HeroB() {
  return (
    <>
      <Reveal delay={80}>
        <h1 className="h-hero text-5xl text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
          L&apos;architecte de
          <br />
          <span className="text-gold">la carrière musicale</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl">
          Un écosystème exigeant pour structurer et professionnaliser des
          projets artistiques dans la réalité du métier
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/#CONTACT" className="btn-gold">
            Prendre rendez-vous
          </Link>
        </div>
      </Reveal>
    </>
  );
}
