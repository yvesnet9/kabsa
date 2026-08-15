import Link from "next/link";
import { INSTITUTION_MAILTO } from "./constants";

export default function Footer() {
  return (
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
              <p>+32 465 95 91 40</p>
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
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
              <p>N° d'entreprise : BE1038390334</p>
            </div>
          </div>
          <div>
            <h4>Naviguer</h4>
            <ul>
              <li className="row"><p><Link href="/qui-sommes-nous">Qui sommes-nous</Link></p></li>
              <li className="row"><p><Link href="/services">Nos services</Link></p></li>
              <li className="row"><p><Link href="/handisport">Handisport</Link></p></li>
              <li className="row"><p><Link href="/recherche-joueur">Recherche d'un joueur</Link></p></li>
              <li className="row"><p><Link href="/formation">Formation</Link></p></li>
              <li className="row"><p><Link href="/dons">Faire un don</Link></p></li>
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
              <Link href="/contact">Nous rejoindre</Link>
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
        <div className="fdevise">Discipline — Persévérance — Succès</div>
        <div className="fbottom">
          <span>© 2026 KA Bruxelles Sport Académie asbl</span>
          <span>Bruxelles, Belgique</span>
        </div>
      </div>
    </footer>
  );
}
