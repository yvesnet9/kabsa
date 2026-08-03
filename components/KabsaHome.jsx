"use client";

import { useEffect, useState } from "react";
import "./kabsa-home.css";

function Logo({ size = 46 }) {
  return (
    <svg width={size} viewBox="0 0 200 224" role="img" aria-label="Logo KABSA">
      <defs>
        <path id="top1" d="M30,86 A72,72 0 0 1 100,34" fill="none" />
        <path id="top2" d="M100,34 A72,72 0 0 1 170,86" fill="none" />
        <path id="leftEdge" d="M22,66 L22,150" fill="none" />
        <path id="rightEdge" d="M178,66 L178,150" fill="none" />
      </defs>
      <g fill="#F5A623">
        <path d="M75,20 L77,26 L83,26 L78,30 L80,36 L75,32 L70,36 L72,30 L67,26 L73,26 Z" />
        <path d="M100,10 L103,18 L111,18 L104,23 L107,31 L100,26 L93,31 L96,23 L89,18 L97,18 Z" />
        <path d="M125,20 L127,26 L133,26 L128,30 L130,36 L125,32 L120,36 L122,30 L117,26 L123,26 Z" />
      </g>
      <path d="M100,34 L178,66 L178,150 L100,214 L22,150 L22,66 Z" fill="#0B4870" />
      <path d="M100,44 L169,72 L169,146 L100,201 L31,146 L31,72 Z" fill="#fff" stroke="#0B4870" strokeWidth="2" />
      <text fontFamily="Oswald,sans-serif" fontWeight="600" fontSize="15" letterSpacing="2" fill="#0B4870">
        <textPath href="#top1" startOffset="50%" textAnchor="middle">S P O</textPath>
      </text>
      <text fontFamily="Oswald,sans-serif" fontWeight="600" fontSize="15" letterSpacing="2" fill="#0B4870">
        <textPath href="#top2" startOffset="50%" textAnchor="middle">R T</textPath>
      </text>
      <text fontFamily="Oswald,sans-serif" fontWeight="500" fontSize="10" letterSpacing="1.5" fill="#2E86C1">
        <textPath href="#leftEdge" startOffset="50%" textAnchor="middle">BRUXELLES</textPath>
      </text>
      <text fontFamily="Oswald,sans-serif" fontWeight="500" fontSize="10" letterSpacing="1.5" fill="#2E86C1">
        <textPath href="#rightEdge" startOffset="50%" textAnchor="middle">ACADEMIE</textPath>
      </text>
      <text x="100" y="82" fontFamily="Oswald,sans-serif" fontWeight="400" fontSize="8" letterSpacing="0.5" fill="#2E86C1" textAnchor="middle">
        DISCIPLINE · PERSEVERANCE
      </text>
      <text x="60" y="132" fontFamily="Oswald,sans-serif" fontWeight="700" fontSize="52" fill="#0B4870" textAnchor="middle">K</text>
      <circle cx="100" cy="116" r="17" fill="#F5A623" />
      <path d="M100,107 L108.6,113.2 L105.3,123.3 L94.7,123.3 L91.4,113.2 Z" fill="#fff" />
      <text x="140" y="132" fontFamily="Oswald,sans-serif" fontWeight="700" fontSize="52" fill="#0B4870" textAnchor="middle">A</text>
      <text x="100" y="164" fontFamily="Oswald,sans-serif" fontWeight="500" fontSize="9" letterSpacing="1" fill="#F5A623" textAnchor="middle">SUCCES</text>
      <text x="100" y="196" fontFamily="Oswald,sans-serif" fontWeight="600" fontSize="10" letterSpacing="2" fill="#0B4870" textAnchor="middle">
        HANDISPORT
      </text>
    </svg>
  );
}

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

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 16V4M12 4l-5 5M12 4l5 5" />
    <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
  </svg>
);

const UPLOAD_MAILTO =
  "mailto:contact@kabsa.be" +
  "?subject=" +
  encodeURIComponent("Envoi de ma vidéo — Talent KABSA") +
  "&body=" +
  encodeURIComponent(
    "Bonjour KABSA,\n\n" +
      "Je souhaite vous envoyer ma vidéo pour la section « Vidéo à la une ».\n\n" +
      "Merci de joindre votre vidéo à ce message si elle est courte, " +
      "ou de coller ici un lien de partage (WeTransfer, Google Drive, etc.) si le fichier est volumineux.\n\n" +
      "Nom :\nSport pratiqué :\nDescription de la vidéo :\n"
  );

const INSTITUTION_MAILTO =
  "mailto:contact@kabsa.be" +
  "?subject=" +
  encodeURIComponent("Demande d'adhésion — Institution / Fédération") +
  "&body=" +
  encodeURIComponent(
    "Bonjour KABSA,\n\n" +
      "Notre institution/fédération souhaite devenir membre et bénéficier de vos services.\n\n" +
      "Nom de l'institution/fédération :\nPays :\nServices souhaités :\nContact :\n"
  );

const services = [
  { label: "Handisport", icon: "♿", href: "#sports" },
  { label: "Sports", icon: "⚽", href: "#sports" },
  { label: "Remise à niveau", icon: "↑", href: "#sports" },
  { label: "Adhésion Institutions & Fédérations", icon: "🤝", href: "#institutions" },
  { label: "Missions sportives", icon: "🌍", href: "#missions" },
  { label: "Nos infrastructures & nos formateurs", icon: "🏟️", href: "#infrastructures" },
  { label: "Formation", icon: "✎", href: "#institutions" },
];

const videos = ["Séance d'entraînement", "Match amical", "Préparation physique", "Handisport"];

function LikeButton() {
  const [count, setCount] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("kabsa_liked") === "1") setLiked(true);
    } catch (e) {}

    fetch("/api/like")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  const handleLike = async () => {
    if (liked) return;
    setLiked(true);
    try {
      localStorage.setItem("kabsa_liked", "1");
    } catch (e) {}
    try {
      const res = await fetch("/api/like", { method: "POST" });
      const data = await res.json();
      setCount(data.count);
    } catch (e) {}
  };

  return (
    <button
      className={liked ? "svc like-btn liked" : "svc like-btn"}
      onClick={handleLike}
      disabled={liked}
      aria-pressed={liked}
    >
      <span className="ic">❤️</span>
      <span className="like-text">
        {liked ? "Merci pour votre soutien !" : "Cliquez ici si vous aimez le site, merci"}
      </span>
      {count !== null && <span className="like-count">{count}</span>}
    </button>
  );
}

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
          Poste recherché
          <input
            type="text"
            value={f.poste}
            onChange={up("poste")}
            placeholder="Attaquant, milieu, défenseur, gardien…"
            required
          />
        </label>
        <label>
          Catégorie
          <select value={f.categorie} onChange={up("categorie")}>
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
          Institution / Club
          <input type="text" value={f.institution} onChange={up("institution")} />
        </label>
        <label>
          Pays
          <input type="text" value={f.pays} onChange={up("pays")} />
        </label>
        <label className="rf-full">
          Vos coordonnées (email ou téléphone)
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

const NAV = [
  ["Accueil", "#accueil"],
  ["Handisport", "#handisport", "handi"],
  ["Qui sommes-nous", "#apropos"],
  ["Services", "#services"],
  ["Recherche d'un joueur", "#recherche"],
  ["Compétitions dans le monde", "#competitions"],
  ["Droits & carrière des sportifs", "#accompagnement"],
  ["Dons", "#dons"],
  ["Formation", "#formation"],
];

export default function KabsaHome() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="kabsa">
      <header>
        <div className="bar">
          <a className="brand" href="#accueil">
            <Logo />
            <span className="name">
              <b>KABSA</b>
              <span>KA Bruxelles Sport Académie</span>
            </span>
          </a>
          <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            ☰
          </button>
          <nav className={menuOpen ? "open" : ""}>
            {NAV.map(([label, href, cls]) => (
              <a key={href} href={href} className={cls || undefined} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="cta cta-member" href="#adhesion" onClick={() => setMenuOpen(false)}>
              Devenir membre
            </a>
            <a className="cta cta-inst" href="#institutions" onClick={() => setMenuOpen(false)}>
              Institutions &amp; Fédérations
            </a>
            <a className="cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="accueil">
        <div className="wrap">
          <div className="rail" id="services">
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

          <div className="center" id="apropos">
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
            <a className="upload-cta" href={UPLOAD_MAILTO}>
              <UploadIcon />
              Télécharger votre vidéo
            </a>
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
            {[0, 1, 2, 3, 4].map((i) => (
              <div className="logo-ph" key={i}>
                Logo
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-block reveal" id="sports">
        <div className="wrap">
          <h2>Nos disciplines sportives</h2>
          <p className="lede">
            KABSA encadre plusieurs disciplines et accueille tout sportif, handicapé ou valide, débutant
            ou ancien, pour une remise à niveau et une préparation de haut niveau.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3 id="handisport">Football</h3>
              <p>Masculin, féminin et handisport — la discipline historique de KABSA.</p>
            </div>
            <div className="info-card">
              <h3>Basketball &amp; Tennis</h3>
              <p>De nouvelles disciplines rejoignent progressivement l'encadrement de l'académie.</p>
            </div>
            <div className="info-card">
              <h3>Remise à niveau</h3>
              <p>Un programme de préparation physique et technique pour retrouver le niveau compétition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-block tint reveal" id="institutions">
        <div className="wrap">
          <h2>Adhésion Institutions &amp; Fédérations</h2>
          <p className="lede">
            Toute fédération de sport ou institution peut devenir membre de KABSA en signant une
            convention de collaboration, avec accès à nos services à tarif préférentiel.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Remise à niveau des sportifs</h3>
              <p>Visa, billet d'avion, hébergement, entraînement et rapport détaillé du stage.</p>
            </div>
            <div className="info-card">
              <h3>Préparation de tournois</h3>
              <p>Réception d'équipes nationales, matchs amicaux et évaluation du niveau collectif.</p>
            </div>
            <div className="info-card" id="formation">
              <h3>Formation &amp; sponsoring</h3>
              <p>Formation du personnel des fédérations, arbitres, et mise en relation avec des sponsors et équipementiers.</p>
            </div>
          </div>
          <a className="info-cta" href={INSTITUTION_MAILTO}>
            Faire une demande d'adhésion
          </a>
        </div>
      </section>

      <section className="info-block reveal" id="recherche">
        <div className="wrap">
          <h2>Recherche d'un joueur</h2>
          <p className="lede">
            Vous êtes une institution, une fédération ou un club et vous recherchez un joueur à un poste
            précis ou un sportif talentueux ? Décrivez votre besoin ci-dessous : votre demande nous est
            transmise directement par email.
          </p>
          <RecruiterForm />
        </div>
      </section>

      <section className="info-block reveal" id="accompagnement">
        <div className="wrap">
          <h2>Protéger et accompagner les sportifs</h2>
          <p className="lede">
            KABSA ne se limite pas à l'entraînement : l'académie défend les sportifs — en
            particulier les jeunes et les athlètes handisport — contre les injustices et les
            difficultés qui peuvent briser une carrière.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Face à l'injustice sportive</h3>
              <p>Discriminations, sélections opaques, athlètes handicapés mis à l'écart : KABSA informe les sportifs sur leurs droits et les oriente pour les faire respecter.</p>
            </div>
            <div className="info-card">
              <h3>Gestion de carrière &amp; finances</h3>
              <p>Primes, contrats, sponsors : beaucoup de talents se retrouvent en difficulté faute d'accompagnement. KABSA sensibilise à une gestion saine et à la protection de l'avenir du sportif.</p>
            </div>
            <div className="info-card">
              <h3>Un entourage de confiance</h3>
              <p>Conseils, mise en relation avec des experts (juridiques, financiers) et un cadre bienveillant pour que chaque sportif avance sereinement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-block tint reveal" id="competitions">
        <div className="wrap">
          <h2>Nos compétitions dans le monde</h2>
          <p className="lede">
            KABSA participe et organise des compétitions sportives en Belgique et à
            l'international, pour faire progresser ses sportifs et rayonner au-delà des frontières.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Compétitions nationales</h3>
              <p>Participation de nos équipes aux championnats et tournois organisés en Belgique.</p>
            </div>
            <div className="info-card">
              <h3>Compétitions internationales</h3>
              <p>Rencontres et tournois à l'étranger, échanges sportifs et représentation de KABSA dans le monde.</p>
            </div>
            <div className="info-card">
              <h3>Calendrier</h3>
              <p>Le programme détaillé de nos prochaines compétitions sera publié ici prochainement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-block reveal" id="missions">
        <div className="wrap">
          <h2>Missions sportives</h2>
          <p className="lede">
            KABSA organise des rencontres sportives et des activités culturelles, des visites et des dons
            dans des complexes sportifs en Belgique et dans le monde, et reçoit des délégations
            étrangères pour des échanges sportifs ou culturels.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Rencontres &amp; échanges</h3>
              <p>Organisation de matchs et d'activités culturelles associées, en Belgique et à l'international.</p>
            </div>
            <div className="info-card">
              <h3>Visites &amp; dons</h3>
              <p>Visites de complexes sportifs partenaires et dons dans les structures qui nous accueillent.</p>
            </div>
            <div className="info-card">
              <h3>Accueil de délégations</h3>
              <p>Réception de personnes ou institutions étrangères pour un échange sportif ou culturel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-block tint reveal" id="infrastructures">
        <div className="wrap">
          <h2>Nos infrastructures &amp; nos formateurs</h2>
          <p className="lede">
            Les entraînements se déroulent dans des complexes sportifs partenaires (terrains, salles de
            fitness, salles de préparation tactique), sous la responsabilité d'animateurs qualifiés et
            d'un coordinateur général. <em>Détails et présentation des formateurs à venir.</em>
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Terrains &amp; salles</h3>
              <p>Complexes sportifs, salles fitness et salles tactiques mis à disposition selon l'activité.</p>
            </div>
            <div className="info-card">
              <h3>Animateurs</h3>
              <p>Chaque activité est encadrée par un animateur qualifié, responsable de son bon déroulement.</p>
            </div>
            <div className="info-card">
              <h3>Coordination générale</h3>
              <p>Un coordinateur général veille au respect du règlement intérieur et à la qualité des séances.</p>
            </div>
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

      <footer id="contact">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <h4>Contact</h4>
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p>
                  Rue Joseph Claes 21
                  <br />
                  1060 Bruxelles, Belgique
                </p>
              </div>
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
                <p>0465 95 91 40</p>
              </div>
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <p>contact@kabsa.be</p>
              </div>
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 2 12a31 31 0 0 0 .1 3.8 3 3 0 0 0 2.1 2.1c1.9.6 7.8.6 7.8.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0 0-3.8Z" />
                  <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
                </svg>
                <p>Chaîne YouTube KABSA — à venir</p>
              </div>
            </div>
            <div>
              <h4>Naviguer</h4>
              <ul>
                <li className="row"><p><a href="#apropos">Qui sommes-nous</a></p></li>
                <li className="row"><p><a href="#services">Nos services</a></p></li>
                <li className="row"><p><a href="#handisport">Handisport</a></p></li>
                <li className="row"><p><a href="#recherche">Recherche d'un joueur</a></p></li>
                <li className="row"><p><a href="#formation">Formation</a></p></li>
                <li className="row"><p><a href="#dons">Faire un don</a></p></li>
              </ul>
            </div>
            <div id="adhesion">
              <h4>Devenir membre particulier</h4>
              <div className="join">
                <div className="price">
                  175 € <span>/ adhésion</span>
                </div>
                <p>
                  50 € inscription · 100 € fonds de solidarité · 25 € cotisation mensuelle. Paiement
                  possible en plusieurs mensualités.
                </p>
                <a href="#contact">Nous rejoindre</a>
              </div>
            </div>
            <div>
              <h4>Devenir membre — Institutions &amp; Fédérations</h4>
              <div className="join">
                <p>
                  Fédérations, institutions et clubs : rejoignez KABSA via une convention de
                  collaboration et accédez à nos services à tarif préférentiel.
                </p>
                <a href={INSTITUTION_MAILTO}>Faire une demande d'adhésion</a>
              </div>
            </div>
          </div>
          <div className="fbottom">
            <span>© 2026 KA Bruxelles Sport Académie asbl · Discipline — Persévérance — Succès</span>
            <span>Bruxelles, Belgique</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
