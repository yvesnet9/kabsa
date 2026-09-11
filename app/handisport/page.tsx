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
            <h3>Basket-fauteuil</h3>
            <p>
              Convient généralement aux personnes ayant une mobilité réduite des membres inférieurs. Un
              entretien préalable permet d'évaluer l'adéquation avec la pratique.
            </p>
          </div>
          <div className="info-card">
            <h3>Para-athlétisme</h3>
            <p>
              Ouvert à un large éventail de profils (handicaps moteurs, visuels…), les épreuves étant
              classées par catégorie. Une évaluation individuelle oriente vers les épreuves adaptées.
            </p>
          </div>
          <div className="info-card">
            <h3>Natation adaptée</h3>
            <p>
              Accessible à différents types de handicaps (moteurs, sensoriels, mentaux), avec un
              accompagnement dans l'eau adapté à chacun.
            </p>
          </div>
          <div className="info-card">
            <h3>Tennis en chaise</h3>
            <p>
              Convient généralement aux personnes en fauteuil roulant. Un entretien individuel permet
              de confirmer l'adéquation avec la discipline.
            </p>
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

        <h3 className="rf-blocktitle rf-blocktitle--2">Matériel disponible</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Fauteuils roulants de sport</h3>
            <p>Fauteuils adaptés à chaque discipline (basket, tennis, athlétisme), mis à disposition pendant les entraînements.</p>
          </div>
          <div className="info-card">
            <h3>Vélos adaptés</h3>
            <p>Vélos à mains ou tricycles adaptés pour les activités cardio et les sorties encadrées.</p>
          </div>
          <div className="info-card">
            <h3>Guides visuels</h3>
            <p>Accompagnement par un guide pour les sportifs malvoyants, à l'entraînement comme en course.</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Horaires et tarifs</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Créneaux d'entraînement</h3>
            <p>Des séances sont organisées en semaine par discipline, avec des rencontres et matchs le week-end.</p>
          </div>
          <div className="info-card">
            <h3>Tarifs &amp; subsides</h3>
            <p>Une réduction peut être accordée selon les subsides disponibles ; n'hésitez pas à nous consulter pour connaître votre éligibilité.</p>
          </div>
          <div className="info-card">
            <h3>Matchs et compétitions</h3>
            <p>Participation à des rencontres et compétitions selon le calendrier communiqué lors de l'inscription.</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Type d'entraînement</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Technique &amp; tactique</h3>
            <p>Travail des gestes spécifiques à chaque discipline et de la lecture de jeu.</p>
          </div>
          <div className="info-card">
            <h3>Physique et endurance</h3>
            <p>Préparation physique adaptée pour développer force, souplesse et endurance.</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Encadrement</h3>
        <p className="lede">
          Nos entraîneurs sont diplômés et formés à l'encadrement handisport, garantissant un
          accompagnement sécurisé, individualisé et bienveillant pour chaque sportif.
        </p>

        <h3 className="rf-blocktitle rf-blocktitle--2">Suivi kinésithérapeute</h3>
        <p className="lede">
          Un kinésithérapeute intervient après les entraînements pour des massages et soins adaptés,
          favorisant la récupération et prévenant les blessures.
        </p>

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
