"use client";

import { useEffect } from "react";

export default function QuiSommesNousPage() {
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
    <section className="info-block reveal" id="apropos">
      <div className="wrap">
        <h2>Le mot du Fondateur</h2>
        <p className="edito-quote">
          « Le sport ne doit exclure personne. Il doit être le moteur de notre dépassement et le
          ciment de notre inclusion. »
        </p>
        <p className="lede">
          Aujourd'hui en Belgique, des milliers de jeunes partagent la même passion pour le sport, la
          même rigueur à l'entraînement et la même ambition de réussite. Pourtant, une frontière
          invisible persiste trop souvent entre les athlètes valides et les sportifs en situation de
          handicap. Manque d'infrastructures adaptées, absence de structures de formation inclusives,
          parcours professionnels cloisonnés… Autant de barrières qui freinent l'épanouissement de nos
          talents.
        </p>
        <p className="lede">C'est pour briser ces barrières qu'est née l'ASBL KABSA.</p>
        <p className="lede">
          Notre vision est simple mais ambitieuse : faire de la mixité une force absolue. En
          réunissant des jeunes de 12 à 30 ans, valides et handisportifs, au sein des mêmes
          infrastructures et des mêmes programmes, nous créons un écosystème unique. KABSA ne se
          contente pas de proposer une activité physique ; nous offrons un accompagnement quotidien de
          2 à 4 heures axé sur le bien-être, la performance et la préparation rigoureuse à une carrière
          professionnelle.
        </p>
        <p className="lede">
          En octobre 2026, KABSA ouvrira officiellement ses portes à Bruxelles et à travers toute la
          Belgique. Mais nous ne pourrons pas mener cette révolution sociétale seuls. Pour offrir à ces
          jeunes les stades, les piscines et les équipements adaptés qu'ils méritent, nous avons besoin
          de partenaires audacieux. Soutenir KABSA, ce n'est pas seulement associer votre nom à un
          projet sportif : c'est devenir un acteur concret de l'inclusion, valoriser la diversité et
          propulser la jeunesse belge vers l'excellence.
        </p>
        <p className="edito-punch">Ensemble, changeons les règles du jeu.</p>
        <p className="edito-sign">
          Le Fondateur<br />
          <span>ASBL KABSA</span>
        </p>
      </div>
    </section>
  );
}
