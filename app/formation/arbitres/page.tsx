"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function FormationArbitresPage() {
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
        <VideoSlot />
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
            🏁 Formation des arbitres : accompagner nos arbitres et officiels dans la maîtrise des règles, pour tous les terrains ♿⚖️
          </h3>

          <p className="svc-chapo">
            Garantir l&apos;équité, la sécurité et l&apos;esprit sportif dans chaque compétition 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous savons qu&apos;il n&apos;y a pas de match réussi, ni de compétition de haut niveau possible, sans des arbitres et des officiels compétents, justes et bienveillants. Au cœur des matchs amicaux internes, des tournois inclusifs et des rencontres de haut niveau, l&apos;arbitre est le garant du respect des règles, de la sécurité physique des joueurs et de l&apos;esprit du sport.
          </p>

          <p className="lede">
            En lien avec les fédérations sportives et handisport de référence, KABSA souhaite former une nouvelle génération d&apos;arbitres et d&apos;officiels à Bruxelles 📍, capables d&apos;officier aussi bien sur les terrains valides que dans les disciplines handisport.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📚 Nos axes de formation : la maîtrise du jeu sous toutes ses formes
          </h3>

          <p className="lede">
            Nos modules combinent apprentissage théorique en salle et mise en situation réelle lors des matchs et séances de détection :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📖 Maîtrise des règlements officiels et adaptations handisport</strong>{" "}: Les règles de chaque discipline et leurs adaptations (contact et déplacement en basket-fauteuil 🏀, repères sonores en cécifoot ⚽, catégories et départs en para-athlétisme 🏃‍♂️).
            </li>
            <li>
              <strong>🛡️ Sécurité et intégrité des athlètes</strong>{" "}: Anticiper les situations à risque, vérifier la conformité du matériel adapté et veiller à l&apos;intégrité physique de chaque joueur.
            </li>
            <li>
              <strong>🗣️ Communication, posture et gestion de match</strong>{" "}: Développer une autorité sereine, une gestuelle claire et une communication adaptée aux différents types de handicaps (moteurs, visuels, auditifs).
            </li>
            <li>
              <strong>🤝 Éthique, fair-play et inclusion</strong>{" "}: Promouvoir le respect mutuel, la mixité et la cohésion sociale sur le terrain.
            </li>
            <li>
              <strong>📋 Rôle des officiels de table et juges</strong>{" "}: Former chronométreurs, marqueurs et juges de ligne indispensables au bon déroulement des tournois.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 À qui s&apos;adresse ce programme ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🧑‍🎓 Jeunes talents bruxellois (15 à 25 ans)</strong>{" "}: Découvrir un rôle valorisant, acquérir des responsabilités et s&apos;engager dans la vie associative.
            </li>
            <li>
              <strong>♿ Sportifs et personnes en situation de handicap</strong>{" "}: L&apos;arbitrage et les fonctions d&apos;officiels sont ouverts à toutes et tous.
            </li>
            <li>
              <strong>🏅 Arbitres confirmés</strong>{" "}: Élargir vos compétences aux disciplines paralympiques et officier lors d&apos;événements inclusifs à Bruxelles.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Modalités pratiques de la formation
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>⏱️ Format et durée</strong>{" "}: Un parcours progressif alliant ateliers théoriques en salle (1 week-end) et arbitrage pratique encadré lors des matchs internes et tournois amicaux de KABSA.
            </li>
            <li>
              <strong>🎯 Prérequis</strong>{" "}: Aucun diplôme d&apos;arbitrage préalable requis pour le niveau initiation. Seuls comptent la rigueur, l&apos;impartialité et l&apos;envie de s&apos;investir.
            </li>
            <li>
              <strong>🏅 Certification et passerelles</strong>{" "}: Délivrance d&apos;une attestation d&apos;arbitre/officiel KABSA et accompagnement vers les examens officiels des fédérations de référence.
            </li>
            <li>
              <strong>💰 Accessibilité financière</strong>{" "}: Grâce au soutien de nos partenaires (dispositifs publics et mécènes RSE), la formation est proposée à tarif solidaire, avec gratuité pour les jeunes membres engagés dans la vie du club.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Comment rejoindre ou soutenir nos officiels ?
          </h3>

          <p className="lede">
            <strong>1. Devenez arbitre ou officiel KABSA 🏁</strong> — Rejoignez notre prochaine session d&apos;initiation et bénéficiez d&apos;un accompagnement personnalisé.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📅 S&apos;inscrire à la formation d&apos;arbitre
            </Link>
          </div>

          <p className="lede">
            <strong>2. Soutenez la formation des officiels (entreprises &amp; mécènes) ❤️🏢</strong> — En finançant l&apos;équipement officiel (tenues, sifflets, chronomètres adaptés) et la formation de nos jeunes arbitres, vous soutenez l&apos;égalité des chances.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Parrainer nos jeunes arbitres
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
        <h2>Formation des arbitres</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
