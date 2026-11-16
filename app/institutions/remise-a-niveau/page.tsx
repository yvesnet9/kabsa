"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function RemiseANiveauPage() {
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
            🏛️ Institutions &amp; Fédérations : rejoignez KABSA via une convention de collaboration ♿🤝
          </h3>

          <p className="svc-chapo">
            Fédérations, institutions et clubs : accédez à nos services à tarif préférentiel pour la remise à niveau de vos sportifs 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous mettons notre expertise technique, nos infrastructures et notre équipe pluridisciplinaire au service de l&apos;écosystème sportif belge et international. À travers une convention de collaboration officielle, nous souhaitons offrir aux fédérations nationales, aux ligues professionnelles, aux institutions sportives et aux clubs un accès privilégié à l&apos;ensemble de nos services à tarif préférentiel.
          </p>

          <p className="lede">
            Notre mission : assurer une remise à niveau d&apos;excellence, de A à Z, pour vos athlètes valides et en situation de handicap physique, afin de les préparer aux plus hautes exigences des compétitions nationales et internationales.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Remise à niveau des sportifs : un accompagnement d&apos;excellence, de A à Z
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Pôle Performance Sportive &amp; Médicale 🏅
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📋 Coaching technique et tactique personnalisé</strong>{" "}: Stratégies et techniques d&apos;entraînement étudiées par nos entraîneurs diplômés.
            </li>
            <li>
              <strong>💪 Préparation physique sur mesure</strong>{" "}: Programmes individualisés pour développer la condition physique, l&apos;explosivité et l&apos;endurance.
            </li>
            <li>
              <strong>🩺 Suivi kinésithérapeutique et récupération</strong>{" "}: Soins de kinésithérapie, massages après l&apos;effort et prévention des blessures.
            </li>
            <li>
              <strong>🦽 Matériel adapté et suivi technologique</strong>{" "}: Équipements spécialisés et outils d&apos;analyse de performance.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Pôle Logistique, Hébergement &amp; Social 🏠
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏟️ Infrastructures sportives adaptées à Bruxelles</strong>{" "}: Accès aux stades intérieurs et extérieurs, salles de fitness et de conférence via nos partenariats communaux <em>(lieux à confirmer)</em>.
            </li>
            <li>
              <strong>🛏️ Logement temporaire des délégations</strong>{" "}: Hébergements accessibles et adaptés pour accueillir vos équipes en stage.
            </li>
            <li>
              <strong>🥗 Programmes nutritionnels sur mesure</strong>{" "}: Coaching nutritionnel et repas équilibrés adaptés aux besoins des sportifs de haut niveau.
            </li>
            <li>
              <strong>🛡️ Sécurité et couverture</strong>{" "}: Assurance complète incluse durant toutes les activités au sein de notre académie.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Les avantages de la convention de collaboration KABSA
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>💰 Tarifs préférentiels garantis</strong>{" "}: Réductions sur la location des créneaux, l&apos;utilisation du matériel spécialisé et les prestations de coaching ou de soins.
            </li>
            <li>
              <strong>⚽ Organisation de matchs amicaux de haut niveau</strong>{" "}: Confrontations sur mesure entre vos délégations et nos noyaux d&apos;athlètes.
            </li>
            <li>
              <strong>🔄 Synergie et détection partagée</strong>{" "}: Échanges de talents et passerelles avec les fédérations de référence.
            </li>
            <li>
              <strong>🎥 Valorisation médiatique sur KA TV Sport</strong>{" "}: Couverture vidéo de vos stages, interviews de vos cadres et diffusion sur nos réseaux (YouTube, TikTok, Facebook).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Comment établir une convention avec KABSA ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prise de contact et analyse des besoins</strong>{" "}: Échange avec notre direction et notre pôle réseau externe (accompagné de nos experts juridiques).
            </li>
            <li>
              <strong>Proposition sur mesure</strong>{" "}: Calendrier de stage, besoins logistiques (hébergement, nutrition, terrains) et grille tarifaire préférentielle.
            </li>
            <li>
              <strong>Signature et déploiement</strong>{" "}: Accueil de vos sportifs à Bruxelles et lancement du programme de remise à niveau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Rejoignez notre réseau de partenaires institutionnels
          </h3>

          <p className="lede">
            Vous représentez une fédération, une ligue, un club ou une institution et souhaitez offrir à vos athlètes un cadre d&apos;entraînement d&apos;excellence à Bruxelles ?
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📄 Demander un modèle de convention
            </Link>
            <Link href="/contact" className="info-cta">
              🤝 Planifier un entretien avec la direction
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
        <h2>Remise à niveau des sportifs</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
