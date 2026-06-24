import Reveal from "./Reveal";

const pillars = [
  {
    icon: "🎓",
    title: "ART VOX Académie",
    kicker: "Formation & Programme 360°",
    text: "Cadre pédagogique structuré : voix, interprétation, création, stratégie. Parcours de 9 à 18 mois.",
  },
  {
    icon: "🎙️",
    title: "ART VOX Studio",
    kicker: "Production & Enregistrement",
    text: "Studio professionnel intégré. Enregistrement, mixage, mastering. Livrables concrets.",
  },
  {
    icon: "🎤",
    title: "ART VOX Tremplin",
    kicker: "Scène & Showcases",
    text: "Showcases, concerts dans un théâtre. Confrontation au public.",
  },
  {
    icon: "🩺",
    title: "ART VOX Vocalosteo®",
    kicker: "Santé Vocale & Corps",
    text: "Méthode exclusive Vocalosteo®. Le corps comme fondation de la voix.",
  },
];

export default function Ecosysteme() {
  return (
    <section id="ECOSYSTEME" className="section bg-ink-2/40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Écosystème</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Quatre piliers, un seul écosystème
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card h-full hover:-translate-y-1 hover:border-gold/40">
                <span className="text-3xl">{p.icon}</span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-eyebrow text-gold">
                  {p.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl text-cream">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
