"use client";

import { useEffect, useState } from "react";

function RecruiterForm() {
  const [f, setF] = useState({
    poste: "",
    categorie: "Masculin",
    niveau: "Amateur",
    nombre: "1",
    institution: "",
    pays: "",
    contact: "",
    precisions: "",
  });
  const [sent, setSent] = useState(false);

  const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = "Recherche de joueur — " + (f.poste || "poste à préciser");
    const body =
      "Bonjour KABSA,\n\n" +
      "Nous recherchons un ou plusieurs sportifs. Détails ci-dessous :\n\n" +
      "Poste recherché : " + f.poste + "\n" +
      "Catégorie : " + f.categorie + "\n" +
      "Niveau souhaité : " + f.niveau + "\n" +
      "Nombre de joueurs : " + f.nombre + "\n" +
      "Institution / Club : " + f.institution + "\n" +
      "Pays : " + f.pays + "\n" +
      "Coordonnées : " + f.contact + "\n\n" +
      "Précisions :\n" + f.precisions + "\n";
    window.location.href =
      "mailto:contact@kabsa.be?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    setSent(true);
  };

  return (
    <form className="recruit-form" onSubmit={submit}>
      <div className="rf-grid">
        <label>
          Poste recherché <span className="req">*</span>
          <input
            type="text"
            value={f.poste}
            onChange={up("poste")}
            placeholder="Attaquant, milieu, défenseur, gardien…"
            required
          />
        </label>
        <label>
          Catégorie <span className="req">*</span>
          <select value={f.categorie} onChange={up("categorie")} required>
            <option>Masculin</option>
            <option>Féminin</option>
            <option>Handisport</option>
            <option>Jeunes</option>
          </select>
        </label>
        <label>
          Niveau souhaité
          <select value={f.niveau} onChange={up("niveau")}>
            <option>Débutant</option>
            <option>Amateur</option>
            <option>Semi-professionnel</option>
            <option>Professionnel</option>
          </select>
        </label>
        <label>
          Nombre de joueurs
          <input type="number" min="1" value={f.nombre} onChange={up("nombre")} />
        </label>
        <label>
          Institution / Club <span className="req">*</span>
          <input type="text" value={f.institution} onChange={up("institution")} required />
        </label>
        <label>
          Pays
          <input type="text" value={f.pays} onChange={up("pays")} />
        </label>
        <label className="rf-full">
          Vos coordonnées (email ou téléphone) <span className="req">*</span>
          <input type="text" value={f.contact} onChange={up("contact")} required />
        </label>
        <label className="rf-full">
          Précisions
          <textarea
            rows={4}
            value={f.precisions}
            onChange={up("precisions")}
            placeholder="Profil recherché, période, budget, etc."
          />
        </label>
      </div>
      <button type="submit" className="info-cta">
        Envoyer la demande
      </button>
      {sent && (
        <p className="rf-sent">
          Votre logiciel de messagerie s'ouvre avec la demande pré-remplie. Merci !
        </p>
      )}
    </form>
  );
}

function PlayerForm() {
  const [f, setF] = useState({
    nom: "",
    poste: "",
    naissance: "",
    taillepoids: "",
    pied: "Droitier",
    villeclub: "",
    video: "",
    pointsforts: "",
    contact: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!f.nom.trim() || !f.poste.trim() || !f.naissance.trim() || !f.villeclub.trim() || !f.contact.trim()) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/joueur", {
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
        Merci ! Votre fiche a bien été envoyée à KABSA. Nous reviendrons vers vous.
      </p>
    );
  }

  return (
    <form className="recruit-form" onSubmit={submit}>
      <div className="rf-grid">
        <label className="rf-full">
          Nom complet <span className="req">*</span>
          <input type="text" value={f.nom} onChange={up("nom")} required />
        </label>
        <label>
          Poste <span className="req">*</span>
          <input type="text" value={f.poste} onChange={up("poste")} placeholder="Attaquant, milieu, gardien…" required />
        </label>
        <label>
          Date de naissance <span className="req">*</span>
          <input type="date" value={f.naissance} onChange={up("naissance")} required />
        </label>
        <label>
          Taille / Poids
          <input type="text" value={f.taillepoids} onChange={up("taillepoids")} placeholder="185 cm / 78 kg" />
        </label>
        <label>
          Pied fort
          <select value={f.pied} onChange={up("pied")}>
            <option>Droitier</option>
            <option>Gaucher</option>
            <option>Ambidextre</option>
          </select>
        </label>
        <label>
          Ville / Club actuel <span className="req">*</span>
          <input type="text" value={f.villeclub} onChange={up("villeclub")} required />
        </label>
        <label className="rf-full">
          Lien vidéo (YouTube, Hudl…)
          <input type="url" value={f.video} onChange={up("video")} placeholder="https://…" />
        </label>
        <label className="rf-full">
          Points forts
          <textarea rows={4} value={f.pointsforts} onChange={up("pointsforts")} placeholder="Qualités techniques, physiques, tactiques, mental…" />
        </label>
        <label className="rf-full">
          Vos coordonnées (email ou téléphone) <span className="req">*</span>
          <input type="text" value={f.contact} onChange={up("contact")} required />
        </label>
      </div>
      <button type="submit" className="info-cta" disabled={sending}>
        {sending ? "Envoi en cours…" : "Envoyer ma fiche"}
      </button>
      {error && (
        <p className="rf-sent rf-error">
          Une erreur s'est produite. Réessayez, ou écrivez à contact@kabsa.be.
        </p>
      )}
    </form>
  );
}

export default function RechercheJoueurPage() {
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
    <section className="info-block reveal" id="recherche">
      <div className="wrap">
        <h2>Recherche d'un joueur ou d'un sportif talentueux de toutes disciplines</h2>

        <h3 className="rf-blocktitle">Vous recherchez un joueur ?</h3>
        <p className="lede">
          Vous êtes une institution, une fédération ou un club et vous recherchez un joueur à un poste
          précis ou un sportif talentueux ? Décrivez votre besoin ci-dessous : votre demande nous est
          transmise directement par email.
        </p>
        <RecruiterForm />

        <h3 className="rf-blocktitle rf-blocktitle--2">Vous êtes un joueur ou un sportif talentueux ? Présentez-vous</h3>
        <p className="lede">
          Remplissez votre fiche de présentation ci-dessous. Elle est transmise automatiquement à
          KABSA, qui pourra revenir vers vous.
        </p>
        <PlayerForm />
      </div>
    </section>
  );
}
