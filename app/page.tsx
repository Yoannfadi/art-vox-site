import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionADN from "@/components/SectionADN";
import Manifeste from "@/components/Manifeste";
import Ecosysteme from "@/components/Ecosysteme";
import Resultats from "@/components/Resultats";
import Programme360 from "@/components/Programme360";
import Parcours from "@/components/Parcours";
import Candidature from "@/components/Candidature";
import EquipeGrid from "@/components/EquipeGrid";
import Vocalosteo from "@/components/Vocalosteo";
import Temoignages from "@/components/Temoignages";
import Financements from "@/components/Financements";
import EquipeCore from "@/components/EquipeCore";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Waveform from "@/components/Waveform";

function Separator() {
  return (
    <div className="container-x py-2">
      <Waveform variant="divider" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SectionADN />
      <Manifeste />
      <Ecosysteme />
      <Resultats />
      <Separator />
      <Programme360 />
      <Parcours />
      <Candidature />
      <EquipeGrid />
      <Vocalosteo />
      <Separator />
      <Temoignages />
      <Financements />
      <EquipeCore />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}
