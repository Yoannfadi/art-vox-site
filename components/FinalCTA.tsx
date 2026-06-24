import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 sm:py-36"
      style={{ backgroundColor: "#050505" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 50%, rgba(212,175,114,0.10) 0%, rgba(5,5,5,0) 70%)",
        }}
      />
      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="h-display mx-auto max-w-4xl text-4xl text-ivory sm:text-5xl md:text-6xl">
            Votre projet artistique a une date de début.{" "}
            <span className="text-gold">C&apos;est aujourd&apos;hui.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12">
            <Link href="/#CONTACT" className="btn-gold">
              Réserver mon entretien découverte
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
