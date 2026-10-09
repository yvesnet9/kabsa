"use client";

import { useEffect } from "react";
import Link from "next/link";
import { INSTITUTION_MAILTO } from "../../components/constants";

export default function InstitutionsPage() {
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
    <section className="info-block reveal" id="institutions">
      <div className="wrap">
        <h2>Institutions &amp; Fédérations</h2>
        <p className="lede">
          Fédérations, institutions et clubs : rejoignez KABSA via une convention de
          collaboration, avec accès à nos services à tarif préférentiel.
        </p>
        <div className="info-grid">
          <Link href="/institutions/remise-a-niveau" className="info-card info-card--link">
            <h3>Remise à niveau des sportifs</h3>
            <p>Visa, billet d'avion, hébergement, entraînement et rapport détaillé du stage.</p>
          </Link>
          <Link href="/institutions/preparation-tournois" className="info-card info-card--link">
            <h3>Préparation de tournois</h3>
            <p>Réception d'équipes nationales, matchs amicaux et évaluation du niveau collectif.</p>
          </Link>
          <Link href="/institutions/formation-sponsoring" className="info-card info-card--link">
            <h3>Formation &amp; sponsoring</h3>
            <p>Formation du personnel des fédérations, arbitres, et mise en relation avec des sponsors et équipementiers.</p>
          </Link>
        </div>
        <a className="info-cta" href={INSTITUTION_MAILTO}>
          Faire une demande d'adhésion
        </a>
      </div>
    </section>
  );
}
