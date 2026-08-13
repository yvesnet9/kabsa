"use client";

import { useEffect } from "react";

export default function ServicesPage() {
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
    <section className="info-block reveal" id="services">
      <div className="wrap">
        <h2>Nos services</h2>
        <p className="lede">
          KA Bruxelles Sport Académie propulse les athlètes valides et en situation de handicap, et
          accompagne les institutions sportives mondiales à travers des « solutions clés en main »,
          inclusives et professionnelles.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Coaching technique &amp; tactique</h3>
            <p>Un encadrement personnalisé pour progresser dans sa discipline et affiner son jeu.</p>
          </div>
          <div className="info-card">
            <h3>Préparation physique</h3>
            <p>Des préparateurs dédiés pour développer la condition, l'endurance et la performance.</p>
          </div>
          <div className="info-card">
            <h3>Suivi kinésithérapeute</h3>
            <p>Massages et soins après l'entraînement, et prévention des blessures.</p>
          </div>
          <div className="info-card">
            <h3>Matériel &amp; infrastructures adaptés</h3>
            <p>Équipements spécialisés et lieux d'entraînement accessibles à chacun.</p>
          </div>
          <div className="info-card">
            <h3>Coaching nutritionnel</h3>
            <p>Un accompagnement alimentaire au service de la santé et de la performance.</p>
          </div>
          <div className="info-card">
            <h3>Hébergement des délégations</h3>
            <p>Logement temporaire pour les équipes et délégations en stage.</p>
          </div>
          <div className="info-card">
            <h3>Assurance pendant les activités</h3>
            <p>Les participants sont couverts durant l'ensemble des séances encadrées.</p>
          </div>
          <div className="info-card">
            <h3>Fonds de solidarité</h3>
            <p>Un soutien aux sportifs face aux injustices sportives et aux difficultés de carrière.</p>
          </div>
          <div className="info-card">
            <h3>Intermédiaire de transport</h3>
            <p>Organisation et prise en charge des déplacements des sportifs et délégations.</p>
          </div>
          <div className="info-card">
            <h3>Intermédiaire de visa &amp; billet d'avion</h3>
            <p>Accompagnement dans les démarches de visa et la réservation des billets d'avion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
