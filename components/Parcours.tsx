import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Réservez votre entretien artistique",
    text: "30 minutes, gratuit. On écoute votre projet.",
  },
  {
    n: "02",
    title: "On construit votre programme sur-mesure",
    text: "Un plan d'accompagnement adapté à votre voix et vos objectifs.",
  },
  {
    n: "03",
    title: "En 9 mois : votre disque, votre image, votre scène",
    text: "Vous êtes prêt, structuré et confiant.",
  },
];

export default function Parcours() {
  return (
    <section id="PARCOURS" className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Votre parcours</p>
          <h2 className="h-display mt-6 text-4xl text-ivory sm:text-5xl">
            Votre parcours en 3 étapes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="card h-full hover:-translate-y-1 hover:border-gold/40">
                <span className="font-display text-5xl text-gold/40">{s.n}</span>
                <h3 className="mt-5 font-display text-xl text-ivory">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-silver">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
