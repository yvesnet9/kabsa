"use client";

import { useEffect } from "react";
import Link from "next/link";

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

        <h3 className="rf-blocktitle">Nos services d'accompagnement</h3>
        <div className="info-grid">
          <Link href="/services/coaching-technique" className="info-card info-card--link">
            <h3>Coaching technique &amp; tactique</h3>
            <p>Un encadrement personnalisé pour progresser dans sa discipline et affiner son jeu.</p>
          </Link>
          <Link href="/services/preparation-physique" className="info-card info-card--link">
            <h3>Préparation physique</h3>
            <p>Dépassez vos limites, atteignez vos objectifs.</p>
          </Link>
          <Link href="/services/suivi-kinesitherapique" className="info-card info-card--link">
            <h3>Suivi kinésithérapique</h3>
            <p>Performance, récupération &amp; prévention.</p>
          </Link>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Nos autres services</h3>
        <div className="info-grid">
          <Link href="/services/materiel-infrastructures-adaptes" className="info-card info-card--link">
            <h3>Matériel &amp; infrastructures adaptés</h3>
            <p>Équipements spécialisés et lieux d'entraînement accessibles à chacun.</p>
          </Link>
          <Link href="/services/coaching-nutritionnel" className="info-card info-card--link">
            <h3>Coaching nutritionnel</h3>
            <p>Un accompagnement alimentaire au service de la santé et de la performance.</p>
          </Link>
          <Link href="/services/hebergement-delegations" className="info-card info-card--link">
            <h3>Hébergement des délégations</h3>
            <p>Logement temporaire pour les équipes et délégations en stage.</p>
          </Link>
          <div className="info-card">
            <h3>Assurance pendant les activités</h3>
            <p>Les participants sont couverts durant l'ensemble des séances encadrées.</p>
          </div>
          <div className="info-card">
            <h3>Fonds de solidarité</h3>
            <p>Un soutien aux sportifs face aux injustices sportives et aux difficultés de carrière.</p>
          </div>
          <Link href="/services/intermediaire-transport" className="info-card info-card--link">
            <h3>Intermédiaire de transport</h3>
            <p>Organisation et prise en charge des déplacements des sportifs et délégations.</p>
          </Link>
          <Link href="/services/intermediaire-visa-billet" className="info-card info-card--link">
            <h3>Intermédiaire de visa &amp; billet d'avion</h3>
            <p>Accompagnement dans les démarches de visa et la réservation des billets d'avion.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
