"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function CoachingTechniquePage() {
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
            Un encadrement personnalisé pour progresser dans sa discipline et
            affiner son jeu.
          </p>
          <p className="lede">
            Pour franchir un cap et atteindre vos objectifs, la volonté seule ne
            suffit pas : il faut y associer la précision du geste et
            l'intelligence de la situation. Notre programme de coaching
            technique &amp; tactique est conçu pour les passionnés et les
            compétiteurs qui refusent de stagner et veulent maximiser leur
            potentiel.
          </p>

          <h3 className="rf-blocktitle">
            Pourquoi choisir le coaching technique et tactique ?
          </h3>
          <ul className="lede">
            <li>
              <strong>Maîtrise technique</strong> : déconstruire les mauvaises
              habitudes, corriger la posture et fluidifier les mouvements pour
              gagner en efficacité et éviter les blessures.
            </li>
            <li>
              <strong>Vision tactique</strong> : analyser le jeu, anticiper les
              actions des adversaires et prendre les bonnes décisions sous
              pression.
            </li>
            <li>
              <strong>Confiance en soi</strong> : éliminer le doute grâce à des
              schémas de jeu clairs et des automatismes ancrés par la répétition
              ciblée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Les piliers de votre progression
          </h3>
          <p className="lede">
            Analyse initiale → Ajustements techniques → Stratégie de jeu → Suivi
            &amp; performance
          </p>
          <ul className="lede">
            <li>
              <strong>Analyse vidéo &amp; biomécanique</strong> : observation de
              vos séquences de jeu et de vos mouvements pour identifier points
              forts et axes d'amélioration.
            </li>
            <li>
              <strong>Ateliers techniques ciblés</strong> : exercices isolés et
              progressifs pour parfaire le geste juste.
            </li>
            <li>
              <strong>Mises en situation réelles</strong> : scénarios tactiques
              pour tester réactivité, placement et lecture du jeu.
            </li>
            <li>
              <strong>Débriefing stratégique</strong> : retour d'expérience
              après chaque session pour mesurer les gains et ajuster la suite.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            À qui s'adresse ce programme ?
          </h3>
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
              youtubeId="xhY669A0VI8"
              title="Coaching technique &amp; tactique : Démonstration"
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
        <h2>Coaching technique &amp; tactique</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
