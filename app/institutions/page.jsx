"use client";

import { useEffect } from "react";
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
          <div className="info-card">
            <h3>Remise à niveau des sportifs</h3>
            <p>Visa, billet d'avion, hébergement, entraînement et rapport détaillé du stage.</p>
          </div>
          <div className="info-card">
            <h3>Préparation de tournois</h3>
            <p>Réception d'équipes nationales, matchs amicaux et évaluation du niveau collectif.</p>
          </div>
          <div className="info-card">
            <h3>Formation &amp; sponsoring</h3>
            <p>Formation du personnel des fédérations, arbitres, et mise en relation avec des sponsors et équipementiers.</p>
          </div>
        </div>
        <a className="info-cta" href={INSTITUTION_MAILTO}>
          Faire une demande d'adhésion
        </a>
      </div>
    </section>
  );
}
