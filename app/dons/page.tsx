"use client";

import { useEffect } from "react";

export default function DonsPage() {
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
    <section className="info-block reveal" id="dons">
      <div className="wrap">
        <h2>Soutenez KABSA</h2>
        <p className="lede">
          Chaque don aide KABSA à offrir aux jeunes — valides et handisportifs — les infrastructures,
          le matériel adapté et l'encadrement qu'ils méritent. Ensemble, faisons du sport un véritable
          levier d'inclusion.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Du matériel adapté</h3>
            <p>Fauteuils de sport, équipements spécialisés et matériel d'entraînement.</p>
          </div>
          <div className="info-card">
            <h3>Des infrastructures accessibles</h3>
            <p>Terrains, salles et vestiaires ouverts et adaptés à tous.</p>
          </div>
          <div className="info-card">
            <h3>Un encadrement de qualité</h3>
            <p>Entraîneurs diplômés, préparation physique et suivi personnalisé.</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Faire un don par virement</h3>
        <p className="lede">
          Vous souhaitez soutenir KABSA ? Vous pouvez faire un don par virement bancaire :
        </p>
        <div className="info-card don-card">
          <p><strong>Bénéficiaire :</strong> KA Bruxelles Sport Académie ASBL</p>
          <p><strong>IBAN :</strong> [IBAN à compléter]</p>
          <p><strong>Communication :</strong> « Don »</p>
          <p className="don-legal">
            KA Bruxelles Sport Académie ASBL — Rue Joseph Claes 21, 1060 Bruxelles — BE1038390334
          </p>
        </div>
      </div>
    </section>
  );
}
