"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function FormationFederationsPage() {
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
            🤝 Formation du personnel des fédérations : accompagner la montée en compétence de nos partenaires ♿🏛️
          </h3>

          <p className="svc-chapo">
            Co-construire l&apos;avenir du sport inclusif et de la haute performance en Belgique 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus que le développement durable du handisport et de l&apos;inclusion passe par une synergie étroite entre les acteurs de terrain et les instances dirigeantes. Le monde sportif connaît aujourd&apos;hui une forte demande en infrastructures et en clubs inclusifs, qui nécessite une adaptation continue des structures institutionnelles.
          </p>

          <p className="lede">
            En lien avec l&apos;écosystème sportif belge et les fédérations de référence, KABSA souhaite mettre son expertise opérationnelle au service des cadres, permanents et techniciens des fédérations et institutions sportives.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Nos domaines d&apos;intervention : de la gestion inclusive à l&apos;élite
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📊 Ingénierie de projets inclusifs et sport-santé</strong>{" "}: Concevoir et déployer des filières mixtes au sein des fédérations traditionnelles.
            </li>
            <li>
              <strong>🏆 Stratégies de détection et filières de haut niveau</strong>{" "}: Structurer des parcours d&apos;entraînement pour détecter les jeunes talents (15 à 25 ans) et les accompagner vers la compétition.
            </li>
            <li>
              <strong>🦽 Gestion du matériel spécialisé et des infrastructures</strong>{" "}: Maîtriser les besoins logistiques, l&apos;acquisition d&apos;équipements adaptés et les normes d&apos;accessibilité.
            </li>
            <li>
              <strong>🎥 Communication digitale et valorisation médiatique</strong>{" "}: Développer des stratégies d&apos;attractivité et de sensibilisation, inspirées de notre modèle KA TV Sport.
            </li>
            <li>
              <strong>⚖️ Cadre administratif, subsides et gouvernance</strong>{" "}: Optimiser le montage de dossiers de financement publics et les partenariats privés dédiés à l&apos;impact social.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 À qui s&apos;adresse cet accompagnement ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏛️ Fédérations sportives nationales et régionales</strong>{" "}: Intégrer ou renforcer efficacement une section handisport.
            </li>
            <li>
              <strong>📋 Directeurs techniques, coordinateurs et agents de développement</strong>{" "}: Actualiser vos méthodes d&apos;encadrement et vos outils de suivi de performance.
            </li>
            <li>
              <strong>🏟️ Institutions sportives, régies communales et centres de formation</strong>{" "}: Former vos équipes à l&apos;accueil de délégations et à l&apos;organisation d&apos;événements inclusifs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Modalités de collaboration
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🛠️ Diagnostic et programme sur mesure</strong>{" "}: Des modules adaptés à vos disciplines et à vos équipes.
            </li>
            <li>
              <strong>📍 Formats flexibles</strong>{" "}: Séminaires en salle de conférence à Bruxelles, ateliers immersifs sur le terrain ou interventions directement dans vos locaux.
            </li>
            <li>
              <strong>🌐 Réseau d&apos;experts pluridisciplinaires</strong>{" "}: Interventions animées par notre direction, nos entraîneurs, préparateurs physiques, kinésithérapeutes et experts juridiques.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Engageons un partenariat stratégique
          </h3>

          <p className="lede">
            Vous représentez une fédération, une ligue ou une institution sportive et souhaitez accélérer la transition inclusive de vos équipes ? Contactez-nous pour concevoir ensemble un plan de formation adapté.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📩 Solliciter un programme pour votre fédération
            </Link>
            <Link href="/contact" className="info-cta">
              🤝 Prendre rendez-vous avec notre direction
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
        <h2>Formation du personnel des fédérations</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
