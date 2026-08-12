"use client";

import { useEffect } from "react";

export default function FormationPage() {
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
    <section className="info-block reveal" id="formation">
      <div className="wrap">
        <h2>Formation</h2>
        <p className="lede">
          KABSA ne forme pas seulement des sportifs : l'académie accompagne aussi les encadrants, les
          clubs et les institutions pour diffuser une culture du sport inclusif et de qualité.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Formation des encadrants</h3>
            <p>Préparer entraîneurs et animateurs à un encadrement de qualité, adapté aux sportifs valides et handisport.</p>
          </div>
          <div className="info-card">
            <h3>Formation des arbitres</h3>
            <p>Accompagner arbitres et officiels dans la maîtrise des règles, y compris en handisport.</p>
          </div>
          <div className="info-card">
            <h3>Formation du personnel des fédérations</h3>
            <p>Appuyer les institutions et fédérations partenaires dans la montée en compétence de leurs équipes.</p>
          </div>
          <div className="info-card">
            <h3>Sensibilisation à l'inclusion</h3>
            <p>Des ateliers pour faire évoluer le regard sur le handicap et promouvoir la mixité dans le sport.</p>
          </div>
          <div className="info-card">
            <h3>Accompagnement des jeunes talents</h3>
            <p>Un parcours structuré, du repérage jusqu'à la préparation à une carrière professionnelle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
