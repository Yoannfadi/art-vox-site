import Reveal from "./Reveal";

const faqs = [
  {
    q: "Faut-il un niveau minimum pour intégrer le programme ?",
    a: "Oui. Les candidats doivent être auteurs-compositeurs-interprètes avec au minimum 1 à 2 ans de pratique et 3 à 5 compositions originales selon le format choisi.",
  },
  {
    q: "Quelle est la durée du programme ?",
    a: "Le programme Solo dure de 9 à 18 mois. Le programme Collectif se déroule sur 18 mois.",
  },
  {
    q: "Le programme est-il finançable ?",
    a: "Oui. ART VOX est un organisme de formation déclaré. AFDAS, SACEM, France Travail et fonds professionnels peuvent couvrir 3 000 € à 8 000 €.",
  },
  {
    q: "Où se déroulent les cours ?",
    a: "Tout est en présentiel à Paris.",
  },
  {
    q: "Combien de places sont disponibles ?",
    a: "12 places en Solo, 40 places en Collectif (2 promotions de 20 artistes).",
  },
  {
    q: "Qu'est-ce que la méthode Vocalostéo® ?",
    a: "Une méthode exclusive créée par le fondateur, au carrefour de l'ostéopathie et de l'art vocal, pour libérer les tensions et optimiser la performance vocale.",
  },
  {
    q: "Quels sont les livrables concrets du programme ?",
    a: "Un album produit (jusqu'à 12 titres), des showcases en théâtre avec captation, un kit presse complet et un plan de structuration de carrière.",
  },
];

export default function FAQ() {
  return (
    <section id="FAQ" className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Tout savoir avant de candidater
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-hairline">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg font-medium text-cream transition-colors hover:text-gold">
                  <span>{f.q}</span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-hairline text-gold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
