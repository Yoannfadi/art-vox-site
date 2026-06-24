import Reveal from "./Reveal";

export default function Programme360() {
  return (
    <section id="PROGRAMME360" className="section bg-ink-2/40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Programme 360°</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Deux formats, une même exigence
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full hover:border-gold/40">
              <span className="inline-block rounded-full border border-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-eyebrow text-gold">
                Solo
              </span>
              <h3 className="mt-6 font-display text-2xl text-cream">
                L&apos;EXECUTIVE PROGRAM 360° — SOLO
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                est un programme de 9 à 18 mois, conçu pour des artistes déjà
                actifs disposant d&apos;une base vocale, nécessitant un haut
                niveau d&apos;accompagnement personnalisé.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="card h-full hover:border-gold/40">
              <span className="inline-block rounded-full border border-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-eyebrow text-gold">
                Collectif
              </span>
              <h3 className="mt-6 font-display text-2xl text-cream">
                L&apos;EXECUTIVE PROGRAM 360° — COLLECTIF
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                est un programme de professionnalisation collective sur 18 mois,
                conçu pour des artistes déjà initiés vocalement, souhaitant
                structurer leur projet.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Prise en charge partielle possible par des organismes de formation.
            </p>
            {/* Le PDF comparatif sera déposé dans /public sous ce nom de fichier. */}
            <a href="/SOLO-vs-COLLECTIF.pdf" className="btn-outline">
              Comparer (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
