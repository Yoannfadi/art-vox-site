import type { Metadata } from "next";
import BioLayout from "@/components/BioLayout";

export const metadata: Metadata = {
  title: "Fadi Dahdouh – Ostéopathe de la voix & Coach vocal | Artvox",
  description:
    "Fadi Dahdouh, expert en ostéopathie de la voix, accompagne artistes et professionnels dans le développement vocal et artistique. Méthode Artvox 360°.",
  robots: { index: false, follow: false },
};

export default function BiographiePage() {
  return (
    <BioLayout name="Fadi DAHDOUH" subtitle="Ostéopathe de la Voix">
      <h2 className="h-display text-3xl text-cream">
        Fadi DAHDOUH — Une passion plus qu&apos;un métier
      </h2>
      <p>
        Depuis 20 ans, Fadi DAHDOUH associe à ses compétences d&apos;ostéopathe
        spécialisé dans la physiologie de la voix et de l&apos;interprète. Grâce à
        la connexion qu&apos;il établit entre la voix et le corps il développe une
        expérience pointue dans la prévention et l&apos;optimisation de la voix
        chantée et parlée.
      </p>
      <p>
        Il aide des artistes célèbres, notamment des chanteurs lyriques, de
        variété et de pop, ainsi que des orateurs et animateurs. Il les guide pour
        libérer leur voix en maîtrisant les mécanismes de la production sonore.
      </p>

      <h3 className="h-display pt-4 text-2xl text-cream">
        Le temps des études et des recherches fondatrices
      </h3>
      <p>
        Tout commence en 2001, lorsqu&apos;il obtient son diplôme d&apos;État de
        kinésithérapie et intègre la faculté de médecine René Descartes - Paris V.
        Là, il se spécialise dans la kinésithérapie respiratoire.
      </p>
      <p>
        Sous la direction de Joël BARTHE, fondateur de l&apos;AFE (accélération du
        flux expiratoire), il effectue alors ses recherches sur
        l&apos;auscultation pulmonaire numérique au sein de l&apos;hôpital
        Necker-Enfants malades à Paris. De plus, il défend un mémoire sur la
        kinésithérapie respiratoire des enfants touchés par la mucoviscidose.
      </p>
      <p>
        En 2005, après des études d&apos;ostéopathie, il présente ses recherches
        axées sur la spécificité de la voix des chanteurs professionnels. Elles
        portent notamment sur la perte de l&apos;émission des sons aigus, un mal
        qui affecte l&apos;art lyrique. Le blocage des cervicales et de
        l&apos;articulation temporo-mandibulaire (la mâchoire) en est une des
        causes.
      </p>
      <p>
        Depuis cette époque, ce passionné d&apos;ostéopathie et de chant
        s&apos;attache à diffuser ses connaissances relatives à l&apos;influence
        du corps sur la voix des chanteurs. Pour ce faire, il anime des
        conférences et des master class en France et à l&apos;étranger.
      </p>
    </BioLayout>
  );
}
