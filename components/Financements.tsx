import Reveal from "./Reveal";

const badges = [
  { label: "AFDAS", href: "https://www.afdas.com/lafdas.html" },
  { label: "SACEM", href: "https://aide-aux-projets.sacem.fr/" },
  { label: "France Travail", href: "https://www.francetravail.fr/" },
  {
    label: "Certification Qualiopi",
    href: "https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation",
  },
];

const profiles = [
  {
    title: "Intermittents du spectacle",
    text: "Financement via l'AFDAS.",
  },
  {
    title: "Demandeurs d'emploi",
    text: "Prise en charge via France Travail.",
  },
  {
    title: "Salariés / Indépendants",
    text: "Fonds professionnels selon statut.",
  },
  {
    title: "Paiement échelonné",
    text: "Jusqu'à 36 mois. Cumul possible.",
  },
];

export default function Financements() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Financements</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Des solutions pour chaque situation
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            ART VOX est un organisme de formation déclaré.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-hairline px-5 py-2 text-xs font-semibold uppercase tracking-eyebrow text-gold transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
              >
                {b.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card h-full hover:border-gold/40">
                <h3 className="font-display text-xl text-cream">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
