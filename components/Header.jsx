"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  ["Accueil", "/"],
  ["Handisport", "/handisport", "handi"],
  ["Qui sommes-nous", "/qui-sommes-nous"],
  ["Services", "/services"],
  ["Recherche d'un joueur", "/recherche-joueur"],
  ["Compétitions dans le monde", "/competitions"],
  ["Droits & carrière des sportifs", "/droits-carriere"],
  ["Dons", "/dons"],
  ["Formation", "/formation"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bar">
        <Link className="brand" href="/">
          <Image
            src="/kav.jpeg"
            alt="Logo KABSA"
            width={200}
            height={200}
            style={{ height: 64, width: "auto" }}
            priority
          />
          <span className="name">
            <b>KABSA</b>
            <span>KA Bruxelles Sport Académie</span>
          </span>
        </Link>
        <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
          ☰
        </button>
        <nav className={menuOpen ? "open" : ""}>
          {NAV.map(([label, href, cls]) => (
            <Link key={href} href={href} className={cls || undefined} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="cta cta-member" href="/devenir-membre" onClick={() => setMenuOpen(false)}>
            Devenir membre
          </Link>
          <Link className="cta cta-inst" href="/institutions" onClick={() => setMenuOpen(false)}>
            Institutions &amp; Fédérations
          </Link>
          <Link className="cta" href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
