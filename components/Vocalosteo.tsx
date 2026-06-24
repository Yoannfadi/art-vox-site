import Link from "next/link";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";

const points = [
  {
    title: "Libération des tensions",
    text: "Travail ostéopathique ciblé sur larynx, diaphragme, cage thoracique.",
  },
  {
    title: "Reconstruction vocale",
    text: "Réhabilitation des voix fragilisées par le stress ou les traumatismes.",
  },
  {
    title: "Performance durable",
    text: "Protocoles sur mesure pour une voix libre, puissante et pérenne.",
  },
];

export default function Vocalosteo() {
  return (
    <section id="VOCALOSTEO" className="section">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Vocalosteo®</p>
            <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
              Quand le corps
              <br />
              <span className="text-gold">libère la voix</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Une approche pionnière au carrefour de l&apos;ostéopathie et de
              l&apos;art vocal.
            </p>

            <div className="mt-10 space-y-6">
              {points.map((p) => (
                <div key={p.title} className="border-l border-hairline pl-5">
                  <h3 className="font-display text-xl text-cream">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/#CONTACT" className="btn-gold">
                Prendre rendez-vous
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Placeholder
              icon="🩺"
              name="Méthode Vocalosteo®"
              aspect="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
