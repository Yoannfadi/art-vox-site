import Reveal from "./Reveal";
import Counter from "./Counter";
import { DRAFT_FIGURES } from "@/lib/config";

const stats = [
  { target: 200, suffix: " +", label: "Artistes transformés" },
  { target: 15, suffix: "", label: "Ans d'expertise vocale" },
  { target: 12, suffix: "", label: "Formateurs experts" },
  { target: 100, suffix: " %", label: "Pris en charge AFDAS / CPF" },
];

export default function Stats() {
  return (
    <section className="border-y border-hairline bg-bg2/40 py-16">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center md:text-left">
            <div className="h-display text-5xl text-gold sm:text-6xl">
              <Counter target={s.target} suffix={s.suffix} />
              {DRAFT_FIGURES ? (
                <sup className="ml-1 align-super text-[0.55rem] font-medium uppercase tracking-eyebrow text-silver/80">
                  (à valider)
                </sup>
              ) : null}
            </div>
            <p className="mt-3 text-base font-medium text-ivory">{s.label}</p>
          </Reveal>
        ))}
      </div>

      {DRAFT_FIGURES ? (
        <p className="container-x mt-10 text-center text-xs italic tracking-wide text-silver/70">
          Chiffres indicatifs — à valider avant publication.
        </p>
      ) : null}
    </section>
  );
}
