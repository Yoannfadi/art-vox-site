import type { Metadata } from "next";
import BioLayout from "@/components/BioLayout";

export const metadata: Metadata = {
  title: "Thomas Gérôme – Coach vocal & scénique | Artvox",
  description:
    "Thomas Gérôme, coach vocal et scénique au sein du programme Artvox 360°.",
  robots: { index: false, follow: false },
};

export default function ThomasGeromePage() {
  return (
    <BioLayout name="Thomas GÉRÔME" subtitle="Coach vocal et scénique">
      {/* CONTENU À COMPLÉTER — la biographie officielle de Thomas Gérôme sera fournie par ART VOX */}
      <p>
        Biographie en cours de rédaction. Le parcours complet de Thomas Gérôme,
        coach vocal et scénique au sein d&apos;ART VOX, sera publié prochainement.
      </p>
    </BioLayout>
  );
}
