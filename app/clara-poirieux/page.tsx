import type { Metadata } from "next";
import BioLayout from "@/components/BioLayout";

export const metadata: Metadata = {
  title: "Clara Poirieux – Professeur de chant & coach vocal | Artvox",
  description:
    "Clara Poirieux, professeur de chant et coach vocal au sein du programme Artvox 360°.",
  robots: { index: false, follow: false },
};

export default function ClaraPoirieuxPage() {
  return (
    <BioLayout
      name="Clara POIRIEUX"
      subtitle="Professeur de Chant, Coach Vocal — Chanteuse, comédienne"
    >
      <p>
        Chantant, dansant et virevoltant depuis son enfance, Clara,
        d&apos;origine franco-polonaise, décide une fois son baccalauréat en
        poche, de se former à l&apos;Institut Supérieur des Arts de la Scène (Rick
        Odums) à Paris. Une fois diplômée, Clara se produit dans différents
        spectacles musicaux jeune public.
      </p>
      <p>
        En 2018, Clara intègre la comédie musicale «&nbsp;Roméo et Juliette&nbsp;»
        de Gérard Presgurvic en tant que doublure Juliette, pour une tournée en
        Asie. L&apos;aventure se poursuit en 2019. En 2020, elle rejoint les
        spectacles de Disneyland Paris : «&nbsp;Frozen&nbsp;», «&nbsp;Let&apos;s
        sing Christmas&nbsp;» et «&nbsp;Disney Junior Dream Factory&nbsp;». En
        2022, elle défend le rôle de Lucile dans la comédie musicale «&nbsp;Quand
        la Guerre sera finie&nbsp;» à l&apos;Opéra de Reims et en 2024, elle
        interprète Marianne dans «&nbsp;La Révolution française&nbsp;»
        d&apos;Alain Boublil et Claude-Michel Schönberg.
      </p>
      <p>
        Parallèlement à ses activités scéniques, Clara a toujours été attirée par
        la pédagogie. Elle adore transmettre et enseigner tout ce qui touche à
        l&apos;appareil vocal et à l&apos;interprétation. Depuis plusieurs années,
        elle propose des coachings vocaux en individuel ou en groupe dans
        différentes structures.
      </p>
      <p>
        Aujourd&apos;hui, elle est ravie de pouvoir intégrer les équipes
        d&apos;Art Vox pour continuer à transmettre sa passion tout en combinant
        son approche avec un spécialiste d&apos;ostéopathie vocale, Fadi Dahdouh.
      </p>
    </BioLayout>
  );
}
