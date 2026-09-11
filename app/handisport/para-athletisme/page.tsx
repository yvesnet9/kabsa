"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ParaAthletismePage() {
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
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <h2>Para-athlétisme</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <h3 className="rf-blocktitle">I. Définition</h3>
            <p className="lede">
              Le para-athlétisme est la déclinaison de l'athlétisme pour les personnes en situation
              de handicap. Présent depuis les premiers Jeux Paralympiques de Rome en 1960, c'est le
              sport paralympique qui rassemble le plus grand nombre d'athlètes et d'épreuves au
              monde.
            </p>
            <p className="lede">Il calque ses disciplines sur l'athlétisme traditionnel :</p>
            <ul className="lede">
              <li>
                Courses (piste et route) : sprint (100m, 200m, 400m), demi-fond, fond, relais et
                marathon.
              </li>
              <li>Sauts : saut en longueur, triple saut et saut en hauteur.</li>
              <li>
                Lancers : poids, disque, javelot et lancer de massue (spécifique au
                para-athlétisme).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">II. Conditions pour pratiquer</h3>
            <h4 className="rf-blocktitle">Qui peut pratiquer le para-athlétisme ?</h4>
            <p className="lede">
              Le para-athlétisme est l'un des sports les plus inclusifs. Il est ouvert à trois
              grandes catégories de handicaps :
            </p>
            <ul className="lede">
              <li>
                Handicaps physiques et moteurs : amputation, manque de force musculaire,
                paraplégie, tétraplégie, paralysie cérébrale ou petite taille.
              </li>
              <li>Handicaps visuels : athlètes malvoyants ou non-voyants.</li>
              <li>
                Handicaps intellectuels et psychiques : athlètes qui s'entraînent et concourent
                dans des classes dédiées.
              </li>
            </ul>
            <p className="lede">
              Le système de classification : pour garantir une compétition équitable, chaque
              athlète passe devant une commission médicale pour recevoir une classification
              officielle (une lettre suivie de deux chiffres).
            </p>
            <ul className="lede">
              <li>La lettre : T pour Track (courses et sauts) ; F pour Field (lancers).</li>
              <li>
                Le premier chiffre (type de handicap) : 1 (visuel), 2 (intellectuel), 3
                (moteur/neurologique), 4 (petite taille ou amputation debout), 5 (fauteuil
                roulant), 6 (prothèse de membre inférieur).
              </li>
              <li>
                Le second chiffre : indique le degré de sévérité du handicap (plus le chiffre est
                bas, plus le handicap est lourd).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">III. Matériels adaptés</h3>
            <h4 className="rf-blocktitle">Quel matériel pour pratiquer ce sport ?</h4>
            <p className="lede">L'équipement varie fortement selon le type de pratique :</p>
            <ul className="lede">
              <li>
                Les lames de course en carbone : prothèses dynamiques en forme de J adaptées aux
                sprinteurs et sauteurs amputés.
              </li>
              <li>
                Le fauteuil roulant de course (racing wheelchair) : fauteuil profilé à trois roues
                où l'athlète, agenouillé, propulse les roues à l'aide de gants rigides.
              </li>
              <li>
                Le fauteuil/siège de lancer rigide : structure ancrée au sol de l'aire de lancer,
                personnalisée pour que l'athlète assis puisse lancer en sécurité.
              </li>
              <li>
                Le lien de guidage : une cordelette tenue à la main reliant un athlète non-voyant à
                son guide de course.
              </li>
            </ul>
            <h4 className="rf-blocktitle">Qui a droit à ce matériel ?</h4>
            <p className="lede">
              L'utilisation de ces technologies est strictement réglementée par le World Para
              Athletics. Seuls les athlètes dont le handicap médical justifie et impose ces aides y
              ont droit (ex. fauteuil de course pour les athlètes ne pouvant courir debout, lames de
              course pour les amputés du membre inférieur).
            </p>
          </div>

          <aside className="disc-media">
            <div className="info-card">
              <h3>Matériels</h3>
              <p>Présentation technique des lames, fauteuils et sièges de lancer.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Entraînements</h3>
              <p>Exercices de course, sauts et lancers adaptés.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>En images</h3>
              <p>Moments forts et coulisses du club.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Matchs &amp; compétitions</h3>
              <p>Meilleurs moments des championnats.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>À découvrir</h3>
              <p>D'autres vidéos à venir bientôt.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Stars athlètes KABSA</h3>
              <p>Parcours des meilleurs athlètes.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
          </aside>
        </div>

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
