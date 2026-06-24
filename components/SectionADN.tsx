import Link from "next/link";
import Reveal from "./Reveal";

const values = ["Exigence", "Structure", "Incarnation", "Réalité", "Transformation"];

export default function SectionADN() {
  return (
    <section id="ADN" className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Pourquoi Art Vox existe ?</p>
              <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
                Notre ADN
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-hairline px-4 py-1.5 text-xs font-medium uppercase tracking-eyebrow text-gold"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  Art Vox est née d&apos;un constat : trop d&apos;artistes
                  talentueux échouent faute de structure, pas faute de talent.
                  Entre les cours de chant qui ne mènent nulle part et les labels
                  qui formatent, il manquait un cadre qui accompagne
                  l&apos;artiste dans sa globalité.
                </p>
                <p>
                  Fondée par un ténor dramatique, ostéopathe et auteur, ART VOX
                  réunit la science du corps, l&apos;art de la voix et la réalité
                  du métier.
                </p>
                <p className="text-cream">
                  Si Art Vox n&apos;existait pas, les artistes resteraient seuls
                  face à un métier qui ne pardonne pas l&apos;improvisation. Nous
                  ne formons pas des chanteurs. Nous construisons des carrières.
                </p>
              </div>
              <p className="mt-8 font-display text-2xl text-gold">
                — Fadi Dahdouh
              </p>
              <div className="mt-10">
                <Link href="/#CONTACT" className="btn-gold">
                  Prendre rendez-vous
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
