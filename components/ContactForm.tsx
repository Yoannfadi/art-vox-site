"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const SUCCESS_MESSAGE =
  "Merci de nous avoir contactés. Nous reviendrons vers vous dès que possible.";
const ERROR_MESSAGE =
  "Oups ! Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      prenom: String(data.get("prenom") ?? ""),
      nom: String(data.get("nom") ?? ""),
      email: String(data.get("email") ?? ""),
      telephone: String(data.get("telephone") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-hairline bg-ink-2/60 px-4 py-3 text-cream placeholder:text-muted/70 outline-none transition-colors focus:border-gold/60";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="prenom" className="mb-2 block text-sm text-muted">
            Prénom
          </label>
          <input id="prenom" name="prenom" type="text" required className={inputClass} placeholder="Prénom" />
        </div>
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm text-muted">
            Nom
          </label>
          <input id="nom" name="nom" type="text" required className={inputClass} placeholder="Nom" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-muted">
          Adresse e-mail
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="vous@exemple.com" />
      </div>

      <div>
        <label htmlFor="telephone" className="mb-2 block text-sm text-muted">
          Téléphone
        </label>
        <input id="telephone" name="telephone" type="tel" className={inputClass} placeholder="06 00 00 00 00" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Parlez-nous de votre projet…"
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-gold w-full disabled:opacity-60">
        {status === "loading" ? "Envoi…" : "Envoyer"}
      </button>

      {status === "success" ? (
        <p role="status" className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-cream">
          {SUCCESS_MESSAGE}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-cream">
          {ERROR_MESSAGE}
        </p>
      ) : null}
    </form>
  );
}
