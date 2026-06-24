import type { Metadata } from "next";
import BioLayout from "@/components/BioLayout";

export const metadata: Metadata = {
  title: "Sarah Sanders – Coach artistique & interprétation | Artvox",
  description:
    "Sarah Sanders accompagne les artistes dans l'interprétation, la présence scénique et l'identité artistique au sein du programme Artvox 360°.",
  robots: { index: false, follow: false },
};

export default function SarahSandersPage() {
  return (
    <BioLayout
      name="Sarah SANDERS"
      subtitle="Professeur de Chant, Coach Vocal — Chanteuse, comédienne et metteur en scène"
    >
      <p>
        Lauréate du Conservatoire National de la Ville de Paris, Sarah Sanders a
        fait ses débuts de comédienne et chanteuse dans la Compagnie
        Renauld-Barrault théâtre de France pendant 5 ans.
      </p>
      <p>
        Puis séjour de 7 ans aux États-Unis où elle continue à perfectionner ses
        techniques (Uta Hagen - Sonia Sakarian) et à exercer ses talents
        d&apos;interprète.
      </p>
      <p>
        Depuis son retour des États-Unis, elle est apparue dans plus de 100
        productions dans des rôles principaux parmi lesquels de nombreuses
        comédies musicales (Opéra de 4 sous, Homme de la Manche, Exil de
        Brecht-Kurt Weill), nombreuses apparitions à la télévision dans des
        téléfilms et séries (Paul et Virginie, La Cloche Tibétaine, Molière pour
        rire et pour pleurer etc.).
      </p>
      <p>
        Depuis 1990, Sarah Sanders a commencé à enseigner le Théâtre et le Chant,
        l&apos;enseignement du chant devenant peu à peu principal lieu de
        recherche et d&apos;activités.
      </p>
      <p>
        Elle intègre en 1996 le Studio des Variétés pour de nombreux stages, tant
        scéniques que vocaux, et accompagne un grand nombre d&apos;artistes connus
        et moins connus : Anggun, Babet, Bams, Étienne Daho, Dionysos, Akim El
        Sikameya, Enzo Enzo, Faudel, Lofofora, Emmanuel Moire, Nina Morato,
        Prohom, Toma Sidibé, Les Valentins, Ophélie Winter, Louane et Kendji Girac
        (The Voice)… travaillant dans tous les genres car estimant que toutes les
        musiques ont leurs lettres de noblesse.
      </p>
      <p>
        Depuis 2002, Sarah Sanders est l&apos;une des deux professeurs principales
        sur le stage «&nbsp;Professeur de chant dans les musiques actuelles&nbsp;»
        au Studio des Variétés où elle enseigne la technique vocale et
        l&apos;interprétation. En parallèle, elle a été coach vocale de la
        Nouvelle Star pendant 3 ans et sur The Voice pendant 2 ans. Pendant 10 ans
        elle a dirigé le département chant de l&apos;école de comédie musicale de
        l&apos;Institut Supérieur des Arts de la Scène (Rick Odums). Actuellement,
        elle enseigne le théâtre à l&apos;EPCM et le chant à titre privé.
      </p>

      <h2 className="h-display pt-4 text-2xl text-cream">
        La rencontre avec Fadi Dahdouh
      </h2>
      <p>
        Dernièrement, Sarah Sanders a croisé la route de Fadi Dahdouh, ostéopathe
        de la voix, qui fut d&apos;abord son élève. Très vite, leur relation
        maître-élève s&apos;est muée en une collaboration féconde : la
        complémentarité de leurs approches s&apos;est imposée comme une évidence.
        Ensemble, ils ont conçu de nouvelles méthodes de travail alliant la
        technique vocale et l&apos;ostéopathie de la voix.
      </p>
      <p>
        En 2023, ils ont proposé un stage collectif à l&apos;école Music&apos;ALL
        Studio de Dijon, et leur volonté de partager ces méthodes innovantes
        s&apos;est poursuivie en 2024 avec une master class organisée à Paris sous
        l&apos;égide d&apos;ART VOX. Séduite par ce partenariat créatif, Sarah
        Sanders a décidé d&apos;associer son expertise à celle de Fadi Dahdouh et
        de travailler désormais au sein d&apos;ART VOX à Paris.
      </p>
    </BioLayout>
  );
}
