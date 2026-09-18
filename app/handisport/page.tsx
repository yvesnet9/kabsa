"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HandisportPage() {
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
    <section className="info-block reveal" id="handisport">
      <div className="wrap">
        <h2>Le sport pour tous, sans exception !</h2>
        <p className="lede">
          Bienvenue dans notre espace dédié au Handisport. Chez KABSA, nous croyons fermement que le
          handicap ne doit jamais être un frein à la passion, au dépassement de soi et au plaisir du
          collectif. Que vous cherchiez à reprendre une activité physique, à découvrir une nouvelle
          discipline ou à vibrer à travers la compétition, notre structure s'adapte à vous. Grâce à des
          infrastructures accessibles, du matériel spécialisé et des encadrants diplômés, nous vous
          offrons un environnement sécurisé, inclusif et dynamique pour pratiquer votre sport
          sereinement. Explorez nos disciplines adaptées et venez partager avec nous l'esprit d'équipe,
          le dépassement de soi et l'énergie du sport !
        </p>

        <h3 className="rf-blocktitle">Nos disciplines adaptées</h3>
        <div className="info-grid">
          <Link href="/handisport/basket-fauteuil" className="info-card info-card--link">
            <h3>Basket-fauteuil</h3>
            <p>Le basket pratiqué en fauteuil roulant de sport, en équipe, dans un esprit collectif.</p>
          </Link>
          <Link href="/handisport/para-athletisme" className="info-card info-card--link">
            <h3>Para-athlétisme</h3>
            <p>Courses, sauts et lancers adaptés, en individuel ou en relais, selon les catégories.</p>
          </Link>
          <Link href="/handisport/natation-adaptee" className="info-card info-card--link">
            <h3>Natation adaptée</h3>
            <p>Nage encadrée et adaptée à chaque nageur, du loisir jusqu'à la compétition.</p>
          </Link>
          <Link href="/handisport/tennis-chaise" className="info-card info-card--link">
            <h3>Tennis en chaise</h3>
            <p>Le tennis pratiqué en fauteuil roulant, en simple ou en double.</p>
          </Link>
        </div>

        <p className="lede">
          KABSA travaille avec des partenaires publics et privés pour développer ses activités
          handisport et garantir un accès durable au sport pour tous.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
          <Link href="/contact" className="info-cta">
            S'inscrire / Nous contacter
          </Link>
          <Link href="/dons" className="info-cta">
            Faire un don
          </Link>
        </div>
      </div>
    </section>
  );
}
