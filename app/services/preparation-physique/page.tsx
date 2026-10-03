"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function PreparationPhysiquePage() {
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
      { threshold: 0.12 },
    );
    document.querySelectorAll(".kabsa .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <p className="svc-chapo">
            Dépassez vos limites, atteignez vos objectifs.
          </p>
          <p className="lede">
            La condition physique est le socle de toute performance durable. Que
            vous soyez athlète amateur, sportif de haut niveau ou simplement
            désireux de reprendre le contrôle de votre corps, notre service de
            préparation physique sur mesure vous propulse vers votre meilleur
            niveau.
          </p>

          <h3 className="rf-blocktitle">
            Pourquoi choisir notre accompagnement ?
          </h3>
          <p className="lede">
            Des préparateurs physiques dédiés et certifiés, une méthodologie
            scientifique et personnalisée (pas de programme générique),
            structurée autour de trois piliers :
          </p>
          <ul className="lede">
            <li>
              <strong>Développement de la condition physique</strong> : force,
              vitesse, agilité, souplesse, selon les exigences de votre
              discipline.
            </li>
            <li>
              <strong>Renforcement de l'endurance</strong> : travail
              cardiorespiratoire et musculaire pour maintenir une intensité
              élevée plus longtemps.
            </li>
            <li>
              <strong>Optimisation de la performance</strong> : chaque exercice
              affine la technique de mouvement tout en protégeant le capital
              santé.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Notre méthodologie en 4 étapes
          </h3>
          <ol className="svc-steps">
            <li>
              <strong>Évaluation initiale (bilan athlétique)</strong> : tests de
              force, d'endurance, de mobilité et antécédents de blessures.
            </li>
            <li>
              <strong>Programme sur-mesure</strong> : entraînement périodisé,
              aligné sur votre calendrier ou vos objectifs.
            </li>
            <li>
              <strong>Coaching &amp; correction</strong> : chaque séance
              encadrée pour une exécution parfaite et une motivation au sommet.
            </li>
            <li>
              <strong>Prévention des blessures</strong> : renforcement postural
              et récupération active pour durer.
            </li>
          </ol>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            À qui s'adresse la préparation physique ?
          </h3>
          <div
            className="info-grid"
            style={{ marginTop: 14, marginBottom: 22 }}
          >
            <div className="info-card">
              <h3>Sportifs de compétition</h3>
              <p>
                Football, tennis, course à pied, cyclisme… Faire la différence
                dans les moments clés.
              </p>
            </div>
            <div className="info-card">
              <h3>Professionnels exigeants</h3>
              <p>
                Forces de l'ordre, pompiers, danseurs… Répondre aux contraintes
                physiques du métier.
              </p>
            </div>
            <div className="info-card">
              <h3>Passionnés de challenges</h3>
              <p>
                Marathon, trail, triathlon… Aborder son défi avec confiance.
              </p>
            </div>
          </div>

          <p className="svc-quote">
            « La performance n'est pas le fruit du hasard, c'est le résultat
            d'une planification rigoureuse et d'un effort ciblé. »
          </p>
        </div>
        <aside className="disc-media">
          <div className="info-card">
            <h3>Présentation</h3>
            <p>Vidéo de présentation du service.</p>
            <div className="video-slot">Vidéo à venir</div>
          </div>
          <div className="info-card">
            <h3>Démonstration</h3>
            <p>Démonstration en conditions réelles.</p>
            <VideoSlot
              youtubeId="ymkoGm1Wmfg"
              title="Préparation physique : Démonstration"
            />
          </div>
          <div className="info-card">
            <h3>Séance type</h3>
            <p>Déroulé d&apos;une séance type.</p>
            <div className="video-slot">Vidéo à venir</div>
          </div>
          <div className="info-card">
            <h3>Témoignages</h3>
            <p>Retours de pratiquants.</p>
            <div className="video-slot">Vidéo à venir</div>
          </div>
          <div className="info-card">
            <h3>En images</h3>
            <p>Moments forts en images.</p>
            <div className="video-slot">Vidéo à venir</div>
          </div>
          <div className="info-card">
            <h3>À découvrir</h3>
            <p>D&apos;autres vidéos à venir.</p>
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
    </>
  );

  const comingSoonContent = (
    <p className="lede tab-placeholder">Contenu à venir.</p>
  );

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "deroulement", label: "Déroulement", content: comingSoonContent },
    {
      id: "tarifs-formules",
      label: "Tarifs & formules",
      content: comingSoonContent,
    },
    { id: "temoignages", label: "Témoignages", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Préparation physique</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
