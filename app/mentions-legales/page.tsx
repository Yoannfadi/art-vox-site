import type { Metadata } from "next";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: "Mentions légales | ART VOX",
  description:
    "Mentions légales du site ART VOX — éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-8">
      <h2 className="h-display text-2xl text-cream">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-36 pb-8 sm:pt-44">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Informations</p>
          <h1 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            Mentions légales
          </h1>
        </div>
      </section>

      <div className="container-x max-w-3xl pb-24">
        <Block title="Éditeur">
          <p>
            <strong className="text-cream">ART VOX</strong>
            <br />
            {SITE.address}
          </p>
          <p>
            Organisme de formation déclaré.
            <br />
            Numéro de déclaration d&apos;activité : [À compléter]
            <br />
            SIRET : [À compléter] — Forme juridique : [À compléter]
          </p>
          <p>
            Téléphone :{" "}
            <a href={SITE.phoneHref} className="text-gold hover:text-gold-light">
              {SITE.phoneDisplay}
            </a>
            <br />
            E-mail :{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-gold hover:text-gold-light"
            >
              {SITE.email}
            </a>
          </p>
          <p>Directeur de la publication : [À compléter]</p>
        </Block>

        <Block title="Hébergeur">
          <p>
            Le site est hébergé par : [À compléter — nom de l&apos;hébergeur]
            <br />
            Adresse : [À compléter]
            <br />
            Contact : [À compléter]
          </p>
        </Block>

        <Block title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, éléments
            graphiques, identité visuelle, marque «&nbsp;Vocalosteo®&nbsp;» et
            méthodes associées) est la propriété d&apos;ART VOX ou de ses
            partenaires, et est protégé par le droit de la propriété
            intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation, en
            tout ou partie, sans autorisation écrite préalable, est interdite.
            [À compléter selon les besoins.]
          </p>
        </Block>

        <Block title="Données personnelles">
          <p>
            Les informations collectées via le formulaire de contact sont
            utilisées uniquement pour répondre aux demandes des utilisateurs et ne
            sont pas cédées à des tiers sans consentement.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD)
            et à la loi Informatique et Libertés, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;opposition et de suppression de
            vos données. Pour l&apos;exercer, écrivez à{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-gold hover:text-gold-light"
            >
              {SITE.email}
            </a>
            .
          </p>
          <p>
            Responsable du traitement : [À compléter] — Durée de conservation :
            [À compléter].
          </p>
        </Block>

        <Block title="Cookies">
          <p>
            Ce site peut déposer des cookies à des fins de mesure d&apos;audience
            et de bon fonctionnement. [À compléter : liste des cookies, finalités
            et modalités de gestion du consentement.]
          </p>
        </Block>
      </div>
    </>
  );
}
