import Reveal from "./Reveal";
import Waveform from "./Waveform";

export default function Manifeste() {
  return (
    <section id="MANIFESTE" className="section bg-bg2/40">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Le Manifeste</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-3xl space-y-7 text-center text-2xl leading-snug text-ivory sm:text-3xl">
            <p>
              Chaque voix est unique. Chaque artiste mérite un accompagnement à la
              hauteur de ce qu&apos;il porte.
            </p>
            <p className="quote-serif text-gold">
              Chez Art Vox, nous ne formons pas des chanteurs. Nous révélons des
              artistes.
            </p>
            <p>
              Nous travaillons la voix comme un ostéopathe — en profondeur, avec
              précision, avec soin.
            </p>
            <p>
              Nous construisons votre image comme un directeur artistique — avec
              intention et cohérence.
            </p>
            <p>
              Nous préparons votre scène comme un coach de performance — avec
              exigence et confiance.
            </p>
            <p className="quote-serif text-gold">
              Parce qu&apos;un talent non révélé est une perte pour le monde.
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          <Waveform variant="divider" />
        </div>
      </div>
    </section>
  );
}
