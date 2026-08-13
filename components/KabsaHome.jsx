"use client";

import { useEffect, useState } from "react";

const STAR =
  "M0,-10 L2.94,-4.05 L9.51,-3.09 L4.76,1.55 L5.88,8.09 L0,5 L-5.88,8.09 L-4.76,1.55 L-9.51,-3.09 L-2.94,-4.05 Z";

const Star = () => (
  <svg viewBox="-11 -11 22 22">
    <path d={STAR} fill="currentColor" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const services = [
  { label: "Handisport", icon: "♿", href: "/handisport" },
  { label: "Sports", icon: "⚽", href: "/handisport" },
  { label: "Remise à niveau", icon: "↑", href: "/services" },
  { label: "Adhésion Institutions & Fédérations", icon: "🤝", href: "#institutions" },
  { label: "Missions sportives", icon: "🌍", href: "/services" },
  { label: "Nos infrastructures & nos formateurs", icon: "🏟️", href: "/services" },
  { label: "Formation", icon: "✎", href: "/formation" },
];

const videos = ["Séance d'entraînement", "Match amical", "Préparation physique", "Handisport"];

function LikeButton() {
  const [count, setCount] = useState(null);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", ville: "" });

  useEffect(() => {
    try {
      if (localStorage.getItem("kabsa_liked") === "1") setLiked(true);
    } catch (e) {}

    fetch("/api/like")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  const up = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.email.trim() || !form.ville.trim()) return;

    // Verrouille l'appareil tout de suite
    setLiked(true);
    setOpen(false);
    try {
      localStorage.setItem("kabsa_liked", "1");
    } catch (e) {}

    // Envoie nom + email + ville au serveur, qui incrémente le compteur
    // ET envoie automatiquement le mail à contact@kabsa.be
    fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: form.nom,
        email: form.email,
        ville: form.ville,
      }),
    })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  };

  if (liked) {
    return (
      <div className="svc like-btn liked" aria-pressed="true">
        <span className="ic">❤️</span>
        <span className="like-text">J'aime le site<br />Clique ici</span>
        {count !== null && <span className="like-count">{count}</span>}
      </div>
    );
  }

  return (
    <div className="like-wrap">
      <button className="svc like-btn" onClick={() => setOpen((o) => !o)}>
        <span className="ic">❤️</span>
        <span className="like-text">J'aime le site<br />Clique ici</span>
        {count !== null && <span className="like-count">{count}</span>}
      </button>

      {open && (
        <form className="like-form" onSubmit={submit}>
          <input
            type="text"
            placeholder="Nom complet"
            value={form.nom}
            onChange={up("nom")}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={up("email")}
            required
          />
          <input
            type="text"
            placeholder="Ville"
            value={form.ville}
            onChange={up("ville")}
            required
          />
          <button type="submit" className="like-send">Envoyer</button>
          <p className="like-rgpd">
            Vos informations servent uniquement à remercier vos soutiens et ne sont pas partagées.
          </p>
        </form>
      )}
    </div>
  );
}

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

function VideoForm() {
  const [f, setF] = useState({ nom: "", email: "", video: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!f.nom.trim() || !f.email.trim() || !f.video.trim()) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/video", {
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
        Merci ! Votre vidéo a bien été transmise à KABSA.
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
          Lien de la vidéo <span className="req">*</span>
          <input
            type="url"
            value={f.video}
            onChange={up("video")}
            placeholder="https://… (YouTube, Google Drive ou WeTransfer)"
            required
          />
        </label>
        <label className="rf-full">
          Message
          <textarea rows={4} value={f.message} onChange={up("message")} />
        </label>
      </div>
      <button type="submit" className="info-cta" disabled={sending}>
        {sending ? "Envoi en cours…" : "Envoyer ma vidéo"}
      </button>
      {error && (
        <p className="rf-sent rf-error">
          Une erreur s'est produite. Réessayez, ou écrivez à contact@kabsa.be.
        </p>
      )}
    </form>
  );
}

export default function KabsaHome() {
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
    <>
      <section className="hero" id="accueil">
        <div className="wrap">
          <div className="rail">
            <div className="col-label">Services</div>
            {services.map((s) => (
              <a key={s.label} href={s.href} className={s.accent ? "svc accent" : "svc"}>
                <span className="ic">{s.icon}</span>
                {s.label}
              </a>
            ))}
            <LikeButton />
            <a href="#contact" className="svc accent">
              <span className="ic">♥</span>
              Dons
            </a>
          </div>

          <div className="center">
            <div className="eyebrow">KA Bruxelles Sport Académie · asbl</div>
            <h1>
              Le sport comme <em>tremplin</em>, pour tous.
            </h1>
            <p className="lead">
              KABSA accueille tout sportif, handicapé ou valide, débutant ou ancien, pour une remise à
              niveau et une préparation de haut niveau. Football, handisport, préparation d'équipes
              nationales et formation : nous accompagnons chaque parcours, du loisir jusqu'à la carrière
              professionnelle.
            </p>
            <div className="featured featured--video">
              <iframe
                src="https://www.youtube.com/embed/8Xo9uGofPJ4"
                title="Vidéo à la une KABSA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3>Partagez votre vidéo avec KABSA</h3>
            <p>
              Vous êtes un sportif ? Envoyez-nous le lien de votre vidéo, nous la découvrirons. Pas
              besoin de la rendre publique : vous pouvez utiliser YouTube (en mode « non répertorié »),
              Google Drive ou WeTransfer — le lien reste privé et n'est partagé qu'avec nous.
            </p>
            <VideoForm />
          </div>

          <div className="vlist">
            <div className="col-label">Vidéos à la une</div>
            {videos.map((title) => (
              <div className="vitem" key={title}>
                <div className="vthumb">
                  <PlayIcon />
                </div>
                <div>
                  <div className="vt">{title}</div>
                  <div className="vs">À venir</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values reveal">
        <div className="wrap">
          <div className="stars">
            <Star />
            <Star />
            <Star />
          </div>
          <h2>Nos valeurs</h2>
          <div className="triad">
            <div className="val">
              <h3>Discipline</h3>
              <p>La rigueur à l'entraînement et le respect des règles, du vestiaire au terrain.</p>
            </div>
            <div className="val">
              <h3>Persévérance</h3>
              <p>L'effort qui dure : remise à niveau, préparation, retour à la performance.</p>
            </div>
            <div className="val">
              <h3>Succès</h3>
              <p>Accompagner chaque sportif du loisir jusqu'à la carrière professionnelle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners reveal">
        <div className="wrap">
          <div className="head">
            <h2>Partenaires</h2>
            <span className="note">Cet espace est réservé à nos futurs partenaires et sponsors.</span>
          </div>
          <div className="logos">
            <div className="logo-ph">Institutions fédérales belges</div>
            {[1, 2, 3, 4].map((i) => (
              <div className="logo-ph" key={i}>
                Logo
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slogan">
        <div className="wrap">
          <div className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3A2600" strokeWidth="1.6">
              <path d="M6 4h12v3a6 6 0 0 1-12 0V4Z" />
              <path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3M9 15h6M8 20h8M10 15v3m4-3v3" />
            </svg>
          </div>
          <p>Loisir &amp; bien-être à travers le sport, vers une carrière professionnelle</p>
        </div>
      </section>

      <section className="info-block tint reveal" id="contactform">
        <div className="wrap">
          <h2>Contactez-nous</h2>
          <p className="lede">
            Une question, une demande de partenariat, une envie de nous rejoindre ? Envoyez-nous un
            message : il est transmis directement à KABSA, qui vous répondra rapidement.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
