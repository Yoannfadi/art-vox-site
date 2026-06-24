import Link from "next/link";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";
import ContactForm from "./ContactForm";
import { SITE } from "./site";

type BioLayoutProps = {
  name: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function BioLayout({ name, subtitle, children }: BioLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(212,175,114,0.10) 0%, rgba(8,8,8,0) 70%)",
          }}
        />
        <div className="container-x relative">
          <Reveal>
            <Link
              href="/#EQUIPE"
              className="text-xs font-medium uppercase tracking-eyebrow text-muted transition-colors hover:text-gold"
            >
              ← Retour à l&apos;équipe
            </Link>
          </Reveal>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <h1 className="h-display text-5xl text-cream sm:text-6xl">
                  {name}
                </h1>
                <p className="mt-4 text-lg text-gold">{subtitle}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <Placeholder name={name} aspect="aspect-[4/5]" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section pt-4">
        <div className="container-x">
          <Reveal>
            <article className="prose-bio mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
              {children}
            </article>
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto mt-12 max-w-3xl">
              <Link href="/#CONTACT" className="btn-gold">
                Prendre rendez-vous
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-ink-2/40">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
                Prendre contact
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Parlons de votre ambition artistique. Chaque parcours commence
                par un échange.
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
    </>
  );
}
