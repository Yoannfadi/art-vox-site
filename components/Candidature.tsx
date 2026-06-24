import Link from "next/link";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Dossier artistique",
    text: "une vidéo, trois extraits musicaux et une lettre de motivation",
  },
  {
    n: "02",
    title: "Entretien approfondi",
    text: "une évaluation technique et artistique",
  },
  {
    n: "03",
    title: "Test vocal",
    text: "trente minutes en conditions réelles de potentiel vocal",
  },
  {
    n: "04",
    title: "Validation",
    text: "une décision collégiale et un retour détaillé",
  },
];

export default function Candidature() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Candidature</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Les étapes pour candidater
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="card h-full hover:border-gold/40">
                <span className="font-display text-5xl text-gold/40">{s.n}</span>
                <h3 className="mt-5 font-display text-xl text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12">
            <Link href="/#CONTACT" className="btn-gold">
              Je candidate
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
