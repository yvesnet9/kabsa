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

const services = [
  { label: "Football", icon: "⚽", id: "football" },
  { label: "Remise à niveau", icon: "↑", id: "remise-a-niveau" },
  { label: "Handisport", icon: "♿", id: "handisport" },
  { label: "Dons", icon: "♥", id: "dons", accent: true },
  { label: "Formation", icon: "✎", id: "formation" },
];

const videos = ["Séance d'entraînement", "Match amical", "Préparation physique", "Handisport"];

const NAV = [
  ["Accueil", "#accueil"],
  ["Qui sommes-nous", "#apropos"],
  ["Services", "#services"],
  ["Handisport", "#handisport"],
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
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
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
              <button key={s.id} id={s.id} className={s.accent ? "svc accent" : "svc"}>
                <span className="ic">{s.icon}</span>
                {s.label}
              </button>
            ))}
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
                <li className="row"><p><a href="#formation">Formation</a></p></li>
                <li className="row"><p><a href="#dons">Faire un don</a></p></li>
              </ul>
            </div>
            <div>
              <h4>Devenir membre</h4>
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
