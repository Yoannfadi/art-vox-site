import Link from "next/link";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";

type Member = { name: string; role: string; href?: string };

const members: Member[] = [
  { name: "Fadi Dahdouh", role: "Ostéopathe de la voix · Fondateur", href: "/biographie" },
  { name: "Sarah Sanders", role: "Professeur de chant · DA & pédagogie", href: "/sarah-sanders" },
  { name: "Aurélie Berria", role: "Coach vocale & scène" },
  { name: "Thomas Gérôme", role: "Coach vocal & scène", href: "/thomas-gerome" },
  { name: "Alexandra Gatica", role: "Coach interprétation" },
  { name: "Dr Paul Gouhier", role: "ORL phoniatre" },
  { name: "Arnaud Hergès", role: "Réalisateur & prod" },
  { name: "Claire Guyot", role: "Coach vocal" },
  { name: "Pierre Jacquot", role: "Ingénieur du son" },
  { name: "Ghislaine Lenoir", role: "Coach interprétation" },
  { name: "Laura Nicole", role: "Psychologue" },
  { name: "Claire Perot", role: "Coach scénique" },
  { name: "Clara Poirieux", role: "Coach vocal", href: "/clara-poirieux" },
  { name: "Sophie Thiam", role: "Coach polyphonie" },
  { name: "Anne Warin", role: "Coach vocal" },
  { name: "Isabelle Zanotti", role: "Coach vocal" },
];

function MemberCard({ member }: { member: Member }) {
  const inner = (
    <div className="group h-full">
      <Placeholder
        name={member.name}
        className="transition-transform duration-300 group-hover:scale-[1.01] group-hover:border-gold/40"
      />
      <div className="mt-4">
        <p className="font-display text-lg text-cream">{member.name}</p>
        <p className="mt-1 text-sm text-muted">{member.role}</p>
        {member.href ? (
          <span className="mt-2 inline-block text-xs font-medium uppercase tracking-eyebrow text-gold">
            Voir la biographie →
          </span>
        ) : null}
      </div>
    </div>
  );

  if (member.href) {
    return (
      <Link href={member.href} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}

export default function EquipeGrid() {
  return (
    <section id="EQUIPE" className="section bg-ink-2/40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Équipe</p>
          <h2 className="h-display mt-6 text-4xl text-cream sm:text-5xl">
            16 professionnels au service de la voix
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 70}>
              <MemberCard member={m} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
