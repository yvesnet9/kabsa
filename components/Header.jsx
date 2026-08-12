"use client";

import { useState } from "react";

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
  );
}
