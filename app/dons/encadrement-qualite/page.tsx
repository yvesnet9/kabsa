"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function EncadrementQualitePage() {
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
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🤝 Soutenez KABSA : un encadrement de qualité pour révéler chaque talent ♿🏅
          </h3>

          <p className="svc-chapo">
            Entraîneurs diplômés, préparation physique et suivi personnalisé à chaque étape 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus que le talent seul ne suffit pas pour s&apos;épanouir ou atteindre les sommets. Pour qu&apos;un sportif en situation de handicap physique progresse en toute sécurité, il a besoin d&apos;une stratégie d&apos;entraînement rigoureuse et d&apos;une équipe pluridisciplinaire bienveillante à ses côtés.
          </p>

          <p className="lede">
            De la pratique du sport-santé au quotidien jusqu&apos;aux compétitions nationales et internationales, notre pôle sportif et social accompagne gratuitement les jeunes talents bruxellois durant leurs 6 premiers mois de détection. Votre soutien est indispensable pour financer cette expertise humaine au service de l&apos;inclusion.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 À quoi sert votre soutien ? Notre équipe au service des athlètes
          </h3>

          <p className="lede">
            Vos dons, subsides et partenariats permettent de mobiliser des professionnels qualifiés autour de chaque sportif :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📋 Coaching technique et tactique personnalisé</strong>{" "}: Des entraîneurs diplômés et spécialisés (basket-fauteuil 🏀, cécifoot ⚽, para-athlétisme 🏃‍♂️) qui conçoivent des parcours adaptés au handicap et aux objectifs de chacun.
            </li>
            <li>
              <strong>💪 Préparation physique sur mesure</strong>{" "}: Des préparateurs physiques dédiés pour renforcer l&apos;autonomie, améliorer la condition physique globale et prévenir les blessures.
            </li>
            <li>
              <strong>🩺 Suivi kinésithérapeutique et récupération</strong>{" "}: Des séances de kinésithérapie et de massage après les entraînements intenses.
            </li>
            <li>
              <strong>🥗 Accompagnement nutritionnel et bien-être</strong>{" "}: Des conseils en nutrition et un repas équilibré offert en fin de séance pour favoriser la récupération et le vivre-ensemble.
            </li>
            <li>
              <strong>🛡️ Sécurité et assurance</strong>{" "}: La couverture complète de chaque pratiquant pendant toutes les activités et les matchs au sein de l&apos;académie.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Comment soutenir l&apos;encadrement de nos sportifs ?
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Particuliers : parrainez le parcours d&apos;un jeune athlète ❤️
          </h3>

          <p className="lede">
            Chaque don finance les heures de coaching, les soins de kinésithérapie et les repas d&apos;après-entraînement durant notre phase de détection gratuite de 6 mois. Vous offrez à un jeune Bruxellois (de 15 à 25 ans) la chance d&apos;être encadré comme un professionnel, sans barrière financière.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Financer l&apos;encadrement sportif
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Entreprises : devenez sponsor de notre Pôle Performance RSE 🏢
          </h3>

          <p className="lede">
            Associez votre entreprise à l&apos;excellence sportive et à l&apos;égalité des chances à Bruxelles en sponsorisant notre équipe technique (coachs, préparateurs physiques, kinés) :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>👕</strong> Présence de votre marque sur les tenues officielles du staff et des athlètes.
            </li>
            <li>
              <strong>🎥</strong> Interviews et mise en lumière de votre engagement dans les reportages de KA TV Sport (YouTube, TikTok, Facebook).
            </li>
            <li>
              <strong>🤝</strong> Rencontres privilégiées entre vos collaborateurs et nos entraîneurs autour des valeurs du dépassement de soi.
            </li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              🚀 Soutenir le Pôle Performance
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Professionnels du sport et de la santé : rejoignez l&apos;aventure 🤝
          </h3>

          <p className="lede">
            Vous êtes entraîneur diplômé, préparateur physique, kinésithérapeute ou nutritionniste et souhaitez mettre vos compétences au service du handisport à Bruxelles ? Contactez-nous pour intégrer notre équipe ou intervenir lors de nos stages.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📩 Rejoindre le staff KABSA
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⭐ L&apos;impact concret de votre générosité
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🎯 Détection et égalité des chances</strong>{" "}: Permettre à chaque jeune, valide ou moins valide, d&apos;avoir au moins trois séances d&apos;essai encadrées pour révéler son potentiel.
            </li>
            <li>
              <strong>🏥 Prévention santé</strong>{" "}: Faire du sport un véritable outil de santé physique et mentale grâce à un suivi médical et nutritionnel rigoureux.
            </li>
            <li>
              <strong>🌍 Vers les sommets</strong>{" "}: Préparer la relève dans un cadre structuré, humain et ambitieux.
            </li>
          </ul>
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
        <h2>Un encadrement de qualité</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
