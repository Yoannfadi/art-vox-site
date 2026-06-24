import Reveal from "./Reveal";

const results = [
  {
    icon: "💿",
    title: "Album produit",
    text: "Projet discographique complet jusqu'à 12 titres. Arrangements, enregistrement, DA, mix et mastering.",
  },
  {
    icon: "🎭",
    title: "Expérience scénique",
    text: "Restitution sur scène dans un théâtre. Set, mise en scène, présence scénique.",
  },
  {
    icon: "🎬",
    title: "Showcases",
    text: "Showcases devant un public ciblé avec captations vidéo pour labels et tourneurs.",
  },
  {
    icon: "🗒️",
    title: "Kit presse complet",
    text: "Photos pro, vidéos, storytelling, bio travaillée, univers visuel harmonisé.",
  },
  {
    icon: "🗺️",
    title: "Structuration de carrière",
    text: "Positionnement artistique, stratégie de développement, plan d'action réaliste.",
  },
  {
    icon: "📈",
    title: "Suivi 9–18 mois",
    text: "Progression graduelle, ajustements constants. Album, scène, supports prêts à l'emploi.",
  },
];

export default function Resultats() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Résultats</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Des résultats concrets
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <div className="card h-full hover:-translate-y-1 hover:border-gold/40">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-5 font-display text-xl text-cream">
                  {r.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
