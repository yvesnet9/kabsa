"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function PreparationTournoisPage() {
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

  const mediaColumn = (
    <aside className="disc-media">
      <div className="info-card">
        <h3>Présentation</h3>
        <p>Vidéo de présentation du service.</p>
        <VideoSlot videoSrc="/videos/salle-omnisports.mp4" poster="/videos/salle-omnisports.jpg" title="Salle omnisports" />
      </div>
      <div className="info-card">
        <h3>Démonstration</h3>
        <p>Démonstration en conditions réelles.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Séance type</h3>
        <p>Déroulé d&apos;une séance type.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Témoignages</h3>
        <p>Retours de pratiquants.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts en images.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir.</p>
        <VideoSlot />
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🏆 Institutions &amp; Fédérations : préparation de tournois &amp; accueil d&apos;équipes ♿🤝
          </h3>

          <p className="svc-chapo">
            Le partenaire stratégique de vos événements sportifs de haut niveau au cœur de Bruxelles 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous savons que la réussite d&apos;une compétition majeure, d&apos;un tournoi international ou d&apos;un stage de préparation repose sur une organisation irréprochable. Située au cœur de l&apos;Europe à Bruxelles, notre académie souhaite accompagner les fédérations nationales, les ligues professionnelles et les institutions sportives dans la préparation de leurs tournois et l&apos;accueil clé en main de leurs délégations (sportifs valides et handisport).
          </p>

          <p className="lede">
            Grâce à une convention de collaboration, bénéficiez d&apos;une expertise opérationnelle complète, d&apos;infrastructures adaptées et de tarifs préférentiels pour faire de vos rassemblements un succès sportif et humain.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Une offre clé en main pour vos délégations et compétitions
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Préparation de tournois et organisation de matchs ⚽🏀
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏟️ Infrastructures sportives homologuées et accessibles</strong>{" "}: Réservation et configuration de stades couverts et extérieurs, salles multisports et espaces de conférence via nos partenariats communaux bruxellois <em>(lieux à confirmer)</em>.
            </li>
            <li>
              <strong>⚔️ Matchs de préparation de haut niveau</strong>{" "}: Rencontres amicales et tournois tests contre nos noyaux d&apos;athlètes ou d&apos;autres clubs pour peaufiner vos automatismes.
            </li>
            <li>
              <strong>🏁 Arbitrage et officiels qualifiés</strong>{" "}: Mise à disposition de nos arbitres, chronométreurs et juges formés aux règlements officiels et aux spécificités handisport.
            </li>
            <li>
              <strong>🦽 Logistique technique et matériel adapté</strong>{" "}: Fourniture et entretien d&apos;équipements spécialisés (fauteuils de sport, ballons sonores, matériel de préparation physique).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Accueil, hébergement et suivi des délégations 🏠🥗
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🛏️ Logement temporaire 100 % accessible</strong>{" "}: Recherche, réservation et coordination d&apos;hébergements adaptés à Bruxelles pour les équipes et le staff.
            </li>
            <li>
              <strong>🥗 Programmes nutritionnels sur mesure</strong>{" "}: Menus équilibrés adaptés aux exigences énergétiques de la compétition, encadrés par nos spécialistes.
            </li>
            <li>
              <strong>🩺 Pôle médical et récupération</strong>{" "}: Accès à nos salles de fitness, suivi kinésithérapeutique et séances de massage post-match.
            </li>
            <li>
              <strong>🛡️ Sécurité et accompagnement</strong>{" "}: Couverture assurantielle durant les activités au sein de l&apos;académie et assistance logistique dédiée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎥 Valorisation médiatique et rayonnement avec KA TV Sport
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Couverture vidéo professionnelle</strong>{" "}: Résumés de matchs, interviews exclusives des entraîneurs et joueurs, mini-documentaires immersifs.
            </li>
            <li>
              <strong>Diffusion multicanale</strong>{" "}: Partage sur YouTube, TikTok, Facebook et auprès de notre réseau de partenaires pour maximiser l&apos;impact médiatique de votre événement.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Pourquoi choisir KABSA comme partenaire stratégique ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📍 Une localisation idéale</strong>{" "}: Bruxelles, carrefour européen facilement accessible pour les délégations nationales et internationales.
            </li>
            <li>
              <strong>💰 Un modèle économique avantageux</strong>{" "}: Des prestations à tarif préférentiel dans le cadre d&apos;une convention de collaboration.
            </li>
            <li>
              <strong>🌍 Un double impact sportif et social</strong>{" "}: En organisant vos événements avec KABSA, vous soutenez directement l&apos;inclusion par le sport et la détection de la relève bruxelloise.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Planifions votre prochain événement à Bruxelles
          </h3>

          <p className="lede">
            Vous préparez un tournoi, un stage de mise au vert ou le déplacement d&apos;une délégation ? Contactez-nous pour recevoir une proposition logistique et tarifaire sur mesure.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📅 Demander un devis pour un accueil d&apos;équipe
            </Link>
            <Link href="/contact" className="info-cta">
              🤝 Signer une convention de collaboration
            </Link>
          </div>
        </div>

        {mediaColumn}
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
        <h2>Préparation de tournois &amp; accueil d&apos;équipes</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
