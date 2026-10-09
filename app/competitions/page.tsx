"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CompetitionsPage() {
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
    <section className="info-block tint reveal" id="competitions">
      <div className="wrap">
        <h2>Nos compétitions dans le monde</h2>
        <p className="lede">
          KABSA participe et organise des compétitions sportives en Belgique et à
          l'international, pour faire progresser ses sportifs et rayonner au-delà des frontières.
        </p>
        <div className="info-grid">
          <Link href="/competitions/nationales" className="info-card info-card--link">
            <h3>Compétitions nationales</h3>
            <p>Participation de nos équipes aux championnats et tournois organisés en Belgique.</p>
          </Link>
          <Link href="/competitions/internationales" className="info-card info-card--link">
            <h3>Compétitions internationales</h3>
            <p>Rencontres et tournois à l'étranger, échanges sportifs et représentation de KABSA dans le monde.</p>
          </Link>
          <Link href="/competitions/calendrier" className="info-card info-card--link">
            <h3>Calendrier</h3>
            <p>Le programme détaillé de nos prochaines compétitions sera publié ici prochainement.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
