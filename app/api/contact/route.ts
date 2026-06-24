import { NextResponse } from "next/server";

type ContactPayload = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  const prenom = (body.prenom ?? "").trim();
  const nom = (body.nom ?? "").trim();
  const email = (body.email ?? "").trim();
  const telephone = (body.telephone ?? "").trim();
  const message = (body.message ?? "").trim();

  // Validation — prenom, nom, email et message sont requis.
  if (!prenom || !nom || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }

  // Pour l'instant, on se contente de logger la soumission côté serveur.
  console.log("[contact] nouvelle demande", {
    prenom,
    nom,
    email,
    telephone,
    message,
  });

  // ──────────────────────────────────────────────────────────────────────────
  // POINTS D'INTÉGRATION (à brancher selon l'outil retenu) :
  //
  // 1. Tally / formulaire externe :
  //    await fetch(process.env.TALLY_WEBHOOK_URL!, { method: "POST", body: ... })
  //
  // 2. Calendly (créer une invitation / pré-remplir un lien de rendez-vous) :
  //    Rediriger l'utilisateur vers un scheduling_url Calendly avec les champs
  //    pré-remplis (prefill name/email).
  //
  // 3. Make (Integromat) — déclencher un scénario via webhook :
  //    await fetch(process.env.MAKE_WEBHOOK_URL!, {
  //      method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify({ prenom, nom, email, telephone, message }),
  //    });
  //
  // 4. Odoo (créer un lead CRM via XML-RPC ou l'API REST) :
  //    await createOdooLead({ name: `${prenom} ${nom}`, email_from: email, ... });
  //
  // 5. Airtable (ajouter une ligne dans une base) :
  //    await fetch(`https://api.airtable.com/v0/${BASE_ID}/Contacts`, {
  //      method: "POST",
  //      headers: {
  //        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify({ fields: { Prenom: prenom, Nom: nom, Email: email } }),
  //    });
  // ──────────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true });
}
