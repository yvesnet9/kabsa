"use client";

import { useEffect } from "react";
import VideoSlot from "@/components/VideoSlot";

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
    <>
      <section className="info-block reveal" id="services">
        <div className="wrap">
          <h2>Nos services</h2>
          <p className="lede">
            KA Bruxelles Sport Académie propulse les athlètes valides et en situation de handicap, et
            accompagne les institutions sportives mondiales à travers des « solutions clés en main »,
            inclusives et professionnelles.
          </p>
        </div>
      </section>

      {/* ===== 1. Coaching technique & tactique ===== */}
      <section className="info-block tint reveal svc-section" id="coaching">
        <div className="wrap">
          <h2>Coaching technique &amp; tactique</h2>
          <p className="svc-chapo">
            Un encadrement personnalisé pour progresser dans sa discipline et affiner son jeu.
          </p>
          <div className="disc-layout">
            <div className="disc-main">
              <p className="lede">
                Pour franchir un cap et atteindre vos objectifs, la volonté seule ne suffit pas : il
                faut y associer la précision du geste et l'intelligence de la situation. Notre
                programme de coaching technique &amp; tactique est conçu pour les passionnés et les
                compétiteurs qui refusent de stagner et veulent maximiser leur potentiel.
              </p>

              <h3 className="rf-blocktitle">Pourquoi choisir le coaching technique et tactique ?</h3>
              <ul className="lede">
                <li>
                  <strong>Maîtrise technique</strong> : déconstruire les mauvaises habitudes,
                  corriger la posture et fluidifier les mouvements pour gagner en efficacité et
                  éviter les blessures.
                </li>
                <li>
                  <strong>Vision tactique</strong> : analyser le jeu, anticiper les actions des
                  adversaires et prendre les bonnes décisions sous pression.
                </li>
                <li>
                  <strong>Confiance en soi</strong> : éliminer le doute grâce à des schémas de jeu
                  clairs et des automatismes ancrés par la répétition ciblée.
                </li>
              </ul>

              <h3 className="rf-blocktitle rf-blocktitle--2">Les piliers de votre progression</h3>
              <p className="lede">
                Analyse initiale → Ajustements techniques → Stratégie de jeu → Suivi &amp;
                performance
              </p>
              <ul className="lede">
                <li>
                  <strong>Analyse vidéo &amp; biomécanique</strong> : observation de vos séquences
                  de jeu et de vos mouvements pour identifier points forts et axes d'amélioration.
                </li>
                <li>
                  <strong>Ateliers techniques ciblés</strong> : exercices isolés et progressifs pour
                  parfaire le geste juste.
                </li>
                <li>
                  <strong>Mises en situation réelles</strong> : scénarios tactiques pour tester
                  réactivité, placement et lecture du jeu.
                </li>
                <li>
                  <strong>Débriefing stratégique</strong> : retour d'expérience après chaque session
                  pour mesurer les gains et ajuster la suite.
                </li>
              </ul>
            </div>
            <div className="disc-media">
              <VideoSlot youtubeId="xhY669A0VI8" title="Coaching technique & tactique" vertical />
            </div>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">À qui s'adresse ce programme ?</h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Intermédiaire</h3>
              <span className="svc-label">Focus</span>
              <p>Consolidation des bases et gestion du stress.</p>
              <span className="svc-label">Objectif</span>
              <p>Passer un palier technique.</p>
            </div>
            <div className="info-card">
              <h3>Avancé</h3>
              <span className="svc-label">Focus</span>
              <p>Optimisation des détails et stratégies complexes.</p>
              <span className="svc-label">Objectif</span>
              <p>Gagner en régularité.</p>
            </div>
            <div className="info-card">
              <h3>Compétiteur</h3>
              <span className="svc-label">Focus</span>
              <p>Analyse des adversaires et plans de jeu spécifiques.</p>
              <span className="svc-label">Objectif</span>
              <p>Viser la performance et le podium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. Préparation physique ===== */}
      <section className="info-block reveal svc-section" id="preparation-physique">
        <div className="wrap">
          <h2>Préparation physique</h2>
          <p className="svc-chapo">Dépassez vos limites, atteignez vos objectifs.</p>
          <div className="disc-layout">
            <div className="disc-main">
              <p className="lede">
                La condition physique est le socle de toute performance durable. Que vous soyez
                athlète amateur, sportif de haut niveau ou simplement désireux de reprendre le
                contrôle de votre corps, notre service de préparation physique sur mesure vous
                propulse vers votre meilleur niveau.
              </p>

              <h3 className="rf-blocktitle">Pourquoi choisir notre accompagnement ?</h3>
              <p className="lede">
                Des préparateurs physiques dédiés et certifiés, une méthodologie scientifique et
                personnalisée (pas de programme générique), structurée autour de trois piliers :
              </p>
              <ul className="lede">
                <li>
                  <strong>Développement de la condition physique</strong> : force, vitesse,
                  agilité, souplesse, selon les exigences de votre discipline.
                </li>
                <li>
                  <strong>Renforcement de l'endurance</strong> : travail cardiorespiratoire et
                  musculaire pour maintenir une intensité élevée plus longtemps.
                </li>
                <li>
                  <strong>Optimisation de la performance</strong> : chaque exercice affine la
                  technique de mouvement tout en protégeant le capital santé.
                </li>
              </ul>

              <h3 className="rf-blocktitle rf-blocktitle--2">Notre méthodologie en 4 étapes</h3>
              <ol className="svc-steps">
                <li>
                  <strong>Évaluation initiale (bilan athlétique)</strong> : tests de force,
                  d'endurance, de mobilité et antécédents de blessures.
                </li>
                <li>
                  <strong>Programme sur-mesure</strong> : entraînement périodisé, aligné sur votre
                  calendrier ou vos objectifs.
                </li>
                <li>
                  <strong>Coaching &amp; correction</strong> : chaque séance encadrée pour une
                  exécution parfaite et une motivation au sommet.
                </li>
                <li>
                  <strong>Prévention des blessures</strong> : renforcement postural et récupération
                  active pour durer.
                </li>
              </ol>
            </div>
            <div className="disc-media">
              <VideoSlot youtubeId="ymkoGm1Wmfg" title="Préparation physique" vertical />
            </div>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            À qui s'adresse la préparation physique ?
          </h3>
          <div className="info-grid" style={{ marginTop: 14, marginBottom: 22 }}>
            <div className="info-card">
              <h3>Sportifs de compétition</h3>
              <p>
                Football, tennis, course à pied, cyclisme… Faire la différence dans les moments
                clés.
              </p>
            </div>
            <div className="info-card">
              <h3>Professionnels exigeants</h3>
              <p>
                Forces de l'ordre, pompiers, danseurs… Répondre aux contraintes physiques du métier.
              </p>
            </div>
            <div className="info-card">
              <h3>Passionnés de challenges</h3>
              <p>Marathon, trail, triathlon… Aborder son défi avec confiance.</p>
            </div>
          </div>

          <p className="svc-quote">
            « La performance n'est pas le fruit du hasard, c'est le résultat d'une planification
            rigoureuse et d'un effort ciblé. »
          </p>
        </div>
      </section>

      {/* ===== 3. Suivi kinésithérapique ===== */}
      <section className="info-block tint reveal svc-section" id="kinesitherapie">
        <div className="wrap">
          <h2>Suivi kinésithérapique du sportif</h2>
          <p className="svc-chapo">Performance, récupération &amp; prévention.</p>
          <p className="lede">
            Pour un sportif, le corps est le principal outil de réussite. Un suivi kinésithérapique
            régulier ne sert pas seulement à soigner la douleur : il accompagne le corps à chaque
            étape pour optimiser les performances et durer dans le temps.
          </p>

          <h3 className="rf-blocktitle">
            1. Massages &amp; soins après l'entraînement — optimiser la récupération
          </h3>
          <ul className="lede">
            <li>
              <strong>Massage de récupération sportive</strong> : draine les toxines (acide
              lactique), relâche les tensions, élimine les nœuds musculaires (trigger points).
            </li>
            <li>
              <strong>Réduction des courbatures et de la fatigue</strong> : meilleure circulation
              sanguine et lymphatique, moins de « jambes lourdes ».
            </li>
            <li>
              <strong>Restauration de la souplesse</strong> : étirements passifs et mobilisations
              douces redonnent l'amplitude.
            </li>
          </ul>
          <p className="svc-benefit">
            Bénéfice clé : une sensation de légèreté immédiate et un corps prêt à performer.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Prévention des blessures — anticiper pour durer
          </h3>
          <ul className="lede">
            <li>
              <strong>Bilan postural et fonctionnel</strong> : analyse des mouvements, de la
              posture et des appuis pour repérer les déséquilibres.
            </li>
            <li>
              <strong>Renforcement de la stabilité (proprioception)</strong> : muscles
              stabilisateurs, gainage profond, stabilité chevilles/genoux.
            </li>
            <li>
              <strong>Conseils personnalisés</strong> : échauffement, gestion de la charge (éviter
              le surentraînement), correction des gestes à risque.
            </li>
          </ul>
          <p className="svc-benefit">
            Bénéfice clé : moins d'arrêts forcés, une pratique plus sereine, une longévité sportive
            maximale.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Pourquoi notre accompagnement ?</h3>
          <p className="lede">
            Chaque sport a ses contraintes, chaque sportif ses besoins : approche sur mesure,
            techniques manuelles expertes et écoute attentive.
          </p>
        </div>
      </section>

      {/* ===== Autres services ===== */}
      <section className="info-block reveal" id="autres-services">
        <div className="wrap">
          <h2>Nos autres services</h2>
          <div className="info-grid">
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
              <p>
                Un soutien aux sportifs face aux injustices sportives et aux difficultés de carrière.
              </p>
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
    </>
  );
}
