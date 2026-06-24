import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "ART VOX a transformé ma façon de concevoir mon projet. Ce n'est pas un cours de chant : c'est un accompagnement qui structure tout.",
    name: "Laura",
  },
  {
    quote:
      "En quelques séances de Vocalosteo, des tensions que je portais depuis des années se sont libérées.",
    name: "Pauline",
  },
  {
    quote:
      "Le cadre est exigeant mais bienveillant. On avance avec des objectifs concrets et une équipe qui croit en notre projet.",
    name: "Sarah",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1 5.06 16.7 6 11.2l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Temoignages() {
  return (
    <section id="TEMOIGNAGES" className="section bg-bg2/40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Témoignages</p>
          <h2 className="h-display mt-6 text-4xl text-ivory sm:text-5xl">
            Voix libérées, projets aboutis
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card h-full">
                <Stars />
                <blockquote className="quote-serif mt-5 text-xl leading-relaxed text-ivory">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium uppercase tracking-eyebrow text-gold">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
