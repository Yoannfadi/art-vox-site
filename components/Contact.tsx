import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { SITE } from "./site";

export default function Contact() {
  return (
    <section id="CONTACT" className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
              Prêt à structurer
              <br />
              <span className="text-gold">votre projet ?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Parlons de votre ambition artistique. Chaque parcours commence par
              un échange.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-8 inline-block font-display text-3xl text-gold transition-colors hover:text-gold-light"
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-4 text-sm text-muted">{SITE.address}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="card">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
