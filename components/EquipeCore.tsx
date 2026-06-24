import Reveal from "./Reveal";
import Placeholder from "./Placeholder";

const core = [
  { name: "Fadi Dahdouh", role: "Ostéopathe de la voix · Fondateur" },
  { name: "Sarah Sanders", role: "Coach Vocal · Professeur de chant" },
  { name: "Margôt Guibon", role: "Chargée de production" },
  { name: "Emmanuel Benfenati", role: "Responsable du développement" },
  { name: "Julie Rigaud", role: "Ingénieure du son" },
  { name: "Viola Mancuso", role: "Graphiste" },
];

export default function EquipeCore() {
  return (
    <section className="section bg-ink-2/40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">L&apos;équipe</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Le noyau ART VOX
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {core.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 80}>
              <div>
                <Placeholder name={m.name} />
                <p className="mt-4 font-display text-lg text-cream">{m.name}</p>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
