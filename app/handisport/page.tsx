"use client";

import { useEffect } from "react";

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
          Bienvenue dans notre espace dédié au Handisport. Nous croyons fermement que le handicap ne
          doit jamais être un frein à la passion, au dépassement de soi et au plaisir du collectif.
          Que vous cherchiez à reprendre une activité physique, à découvrir une nouvelle discipline ou
          à vibrer à travers la compétition, notre structure s'adapte à vous. Grâce à des
          infrastructures accessibles, du matériel spécialisé et des encadrants diplômés, nous vous
          offrons un environnement sécurisé et dynamique pour pratiquer votre sport sereinement.
          Explorez nos disciplines adaptées et venez partager avec nous l'esprit d'équipe, le partage
          et l'énergie du sport !
        </p>

        <h3 className="rf-blocktitle">Nos disciplines adaptées</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Basket-fauteuil</h3>
            <p>Le basket pratiqué en fauteuil roulant de sport, en équipe, dans un esprit collectif.</p>
          </div>
          <div className="info-card">
            <h3>Para-athlétisme</h3>
            <p>Courses, sauts et lancers adaptés, en individuel ou en relais, selon les catégories.</p>
          </div>
          <div className="info-card">
            <h3>Natation adaptée</h3>
            <p>Nage encadrée et adaptée à chaque nageur, du loisir jusqu'à la compétition.</p>
          </div>
          <div className="info-card">
            <h3>Tennis en chaise</h3>
            <p>Le tennis pratiqué en fauteuil roulant, en simple ou en double.</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Accessibilité : quelle discipline pour quel profil ?</h3>
        <p className="lede">
          À titre indicatif — un entretien et une évaluation individuelle orientent chacun vers la
          discipline la plus adaptée à sa situation.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Basket-fauteuil &amp; Tennis en chaise</h3>
            <p>Ouverts notamment aux personnes à mobilité réduite des membres inférieurs.</p>
          </div>
          <div className="info-card">
            <h3>Para-athlétisme</h3>
            <p>Accessible à un large éventail de handicaps (moteurs, visuels…), avec des épreuves classées par catégorie.</p>
          </div>
          <div className="info-card">
            <h3>Natation adaptée</h3>
            <p>Adaptée aux handicaps moteurs, sensoriels ou mentaux, avec un accompagnement dédié.</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Accessibilité des infrastructures</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Locaux accessibles</h3>
            <p>Accès de plain-pied et rampes pour circuler facilement en fauteuil.</p>
          </div>
          <div className="info-card">
            <h3>Vestiaires adaptés</h3>
            <p>Vestiaires et sanitaires PMR, pensés pour le confort et l'autonomie.</p>
          </div>
          <div className="info-card">
            <h3>Parking réservé</h3>
            <p>Places de stationnement réservées à proximité immédiate des installations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
