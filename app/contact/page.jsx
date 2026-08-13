"use client";

import { useEffect, useState } from "react";

function ContactForm() {
  const [f, setF] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!f.nom.trim() || !f.email.trim() || !f.message.trim()) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error("fail");
      setSent(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <p className="rf-sent">
        Merci ! Votre message a bien été envoyé à KABSA. Nous vous répondrons rapidement.
      </p>
    );
  }

  return (
    <form className="recruit-form" onSubmit={submit}>
      <div className="rf-grid">
        <label>
          Nom <span className="req">*</span>
          <input type="text" value={f.nom} onChange={up("nom")} required />
        </label>
        <label>
          Email <span className="req">*</span>
          <input type="email" value={f.email} onChange={up("email")} required />
        </label>
        <label className="rf-full">
          Sujet
          <input type="text" value={f.sujet} onChange={up("sujet")} placeholder="Question, partenariat, inscription…" />
        </label>
        <label className="rf-full">
          Message <span className="req">*</span>
          <textarea rows={5} value={f.message} onChange={up("message")} required />
        </label>
      </div>
      <button type="submit" className="info-cta" disabled={sending}>
        {sending ? "Envoi en cours…" : "Envoyer le message"}
      </button>
      {error && (
        <p className="rf-sent rf-error">
          Une erreur s'est produite. Réessayez, ou écrivez à contact@kabsa.be.
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".kabsa .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="info-block reveal" id="contact-page">
      <div className="wrap">
        <h2>Contactez-nous</h2>
        <p className="lede">
          Une question, une demande de partenariat, une envie de nous rejoindre ? Envoyez-nous un
          message : il est transmis directement à KABSA, qui vous répondra rapidement.
        </p>
        <ContactForm />

        <div className="info-card">
          <h3>Nos coordonnées</h3>
          <p>Rue Joseph Claes 21, 1060 Bruxelles</p>
          <p>+32 465 95 91 40</p>
          <p>contact@kabsa.be</p>
        </div>
      </div>
    </section>
  );
}
