"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function FormationSponsoringPage() {
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
        <VideoSlot
          youtubeId="4vdcvrrgo98"
          title="Sponsoriser un jeune talent"
          vertical
        />
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
            🤝 Formation &amp; Sponsoring : professionnaliser les structures et connecter les talents aux meilleurs partenaires ♿🚀
          </h3>

          <p className="svc-chapo">
            Créer un écosystème durable où l&apos;excellence sportive rencontre l&apos;engagement sociétal 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus que le développement du sport inclusif et du handisport de haut niveau repose sur deux piliers indissociables : la professionnalisation des structures et la mobilisation de partenaires engagés.
          </p>

          <p className="lede">
            Pour permettre aux jeunes talents bruxellois (15 à 25 ans) de s&apos;épanouir du sport-santé jusqu&apos;aux compétitions internationales, nous accompagnons les acteurs du terrain dans leur montée en compétence tout en bâtissant des ponts solides entre nos athlètes, les entreprises et les institutions.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎓 Pilier 1 : professionnaliser les structures et les encadrants
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📋 Formation des entraîneurs et animateurs</strong>{" "}: Stratégies et techniques d&apos;entraînement adaptées (basket-fauteuil 🏀, cécifoot ⚽, para-athlétisme 🏃‍♂️).
            </li>
            <li>
              <strong>🏁 Formation des arbitres et officiels</strong>{" "}: Maîtrise des règlements, de la gestion de match et des normes de sécurité.
            </li>
            <li>
              <strong>🏛️ Accompagnement des fédérations et clubs</strong>{" "}: Conseil sur l&apos;ingénierie de projets inclusifs, la gestion du matériel spécialisé et l&apos;accueil de délégations.
            </li>
            <li>
              <strong>🩺 Approche pluridisciplinaire</strong>{" "}: Préparation physique, suivi kinésithérapeutique et nutrition pour protéger la santé et optimiser la performance.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💼 Pilier 2 : connecter les talents aux meilleurs partenaires (sponsoring &amp; RSE)
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏢 Partenariats RSE à fort impact social</strong>{" "}: Donner du sens à la Responsabilité Sociétale des entreprises en soutenant l&apos;inclusion et l&apos;égalité des chances à Bruxelles.
            </li>
            <li>
              <strong>🌟 Parrainage direct de jeunes talents</strong>{" "}: Accompagner financièrement l&apos;équipement (fauteuils de sport, matériel adapté), le suivi médical ou la préparation d&apos;un espoir vers la compétition.
            </li>
            <li>
              <strong>🎥 Visibilité médiatique unique avec KA TV Sport</strong>{" "}: Mini-documentaires, interviews et reportages diffusés sur YouTube, TikTok et Facebook.
            </li>
            <li>
              <strong>🤝 Événements et rencontres B2B</strong>{" "}: Tournois inclusifs, journées de sensibilisation et matchs de gala réunissant dirigeants d&apos;entreprises, institutions et sportifs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌐 Une synergie soutenue par un réseau de référence
          </h3>

          <p className="lede">
            Pour garantir la crédibilité et le rayonnement de ses actions, KABSA souhaite s&apos;appuyer sur des collaborations avec les acteurs majeurs du paysage belge : les fédérations sportives et paralympiques de référence, ainsi que les dispositifs publics et fondations soutenant l&apos;impact social et le sport.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Passez à l&apos;action avec KABSA
          </h3>

          <p className="lede">
            <strong>1. Entreprises : devenez partenaire ou sponsor RSE 🏢</strong> — Découvrez nos dossiers de sponsoring sur mesure (équipements, équipes, bourses de formation ou événements).
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              🚀 Recevoir notre dossier de sponsoring RSE
            </Link>
          </div>

          <p className="lede">
            <strong>2. Structures sportives : professionnalisez vos équipes 🎓</strong> — Formez vos cadres ou nouez une convention de collaboration.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/formation" className="info-cta">
              📅 Découvrir nos programmes de formation
            </Link>
          </div>

          <p className="lede">
            <strong>3. Jeunes talents &amp; athlètes : rejoignez notre réseau 🏃‍♂️</strong> — Intégrez nos séances de détection gratuites (6 mois) et bénéficiez d&apos;un encadrement professionnel.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/recherche-joueur" className="info-cta">
              📝 S&apos;inscrire aux détections KABSA
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
        <h2>Formation &amp; sponsoring</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
