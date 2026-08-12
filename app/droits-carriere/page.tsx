"use client";

import { useEffect } from "react";

export default function DroitsCarrierePage() {
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
          <div className="info-card">
            <h3>Accompagnement juridique</h3>
            <p>Orientation vers des conseils adaptés pour comprendre et défendre ses droits en cas de litige (contrat, sélection, discrimination).</p>
          </div>
          <div className="info-card">
            <h3>Éducation financière</h3>
            <p>Sensibiliser les jeunes talents à gérer primes et revenus, éviter les pièges et préparer sereinement l'avenir.</p>
          </div>
          <div className="info-card">
            <h3>Reconversion &amp; après-carrière</h3>
            <p>Anticiper la fin de carrière sportive et préparer une transition sereine : formation, projet professionnel, nouveau départ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
