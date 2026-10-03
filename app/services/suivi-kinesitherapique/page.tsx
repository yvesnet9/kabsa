"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function SuiviKinesitherapiquePage() {
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
            Performance, récupération &amp; prévention.
          </p>
          <p className="lede">
            Pour un sportif, le corps est le principal outil de réussite. Un
            suivi kinésithérapique régulier ne sert pas seulement à soigner la
            douleur : il accompagne le corps à chaque étape pour optimiser les
            performances et durer dans le temps.
          </p>

          <h3 className="rf-blocktitle">
            1. Massages &amp; soins après l'entraînement — optimiser la
            récupération
          </h3>
          <ul className="lede">
            <li>
              <strong>Massage de récupération sportive</strong> : draine les
              toxines (acide lactique), relâche les tensions, élimine les nœuds
              musculaires (trigger points).
            </li>
            <li>
              <strong>Réduction des courbatures et de la fatigue</strong> :
              meilleure circulation sanguine et lymphatique, moins de « jambes
              lourdes ».
            </li>
            <li>
              <strong>Restauration de la souplesse</strong> : étirements passifs
              et mobilisations douces redonnent l'amplitude.
            </li>
          </ul>
          <p className="svc-benefit">
            Bénéfice clé : une sensation de légèreté immédiate et un corps prêt
            à performer.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Prévention des blessures — anticiper pour durer
          </h3>
          <ul className="lede">
            <li>
              <strong>Bilan postural et fonctionnel</strong> : analyse des
              mouvements, de la posture et des appuis pour repérer les
              déséquilibres.
            </li>
            <li>
              <strong>Renforcement de la stabilité (proprioception)</strong> :
              muscles stabilisateurs, gainage profond, stabilité
              chevilles/genoux.
            </li>
            <li>
              <strong>Conseils personnalisés</strong> : échauffement, gestion de
              la charge (éviter le surentraînement), correction des gestes à
              risque.
            </li>
          </ul>
          <p className="svc-benefit">
            Bénéfice clé : moins d'arrêts forcés, une pratique plus sereine, une
            longévité sportive maximale.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Pourquoi notre accompagnement ?
          </h3>
          <p className="lede">
            Chaque sport a ses contraintes, chaque sportif ses besoins :
            approche sur mesure, techniques manuelles expertes et écoute
            attentive.
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
            <div className="video-slot">Vidéo à venir</div>
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
        <h2>Suivi kinésithérapique du sportif</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
