"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function SensibilisationInclusionPage() {
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
          youtubeId="2rXPTCwqTow"
          title="Dépasser les limites — l’inclusion par le sport"
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
            🌍 Sensibilisation à l&apos;inclusion : faire évoluer le regard sur le handicap et promouvoir la mixité dans le sport ♿🤝
          </h3>

          <p className="svc-chapo">
            Transformer la diversité en une véritable force collective au cœur de Bruxelles 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus que le sport est un langage universel et un puissant vecteur de cohésion sociale. Trop souvent encore, les personnes en situation de handicap physique font face à des barrières invisibles et à l&apos;isolement social. Notre mission est de briser ces préjugés en réunissant sportifs valides et moins valides sur les mêmes terrains.
          </p>

          <p className="lede">
            En favorisant la mixité, le partage et le dépassement de soi, nous agissons concrètement pour transformer le regard de la société sur le handicap et faire de la diversité une richesse partagée par toute la communauté bruxelloise.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Nos actions de sensibilisation : du terrain aux écrans
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏆 Tournois inclusifs et matchs mixtes</strong>{" "}: Événements sportifs ouverts où des équipes de joueurs valides et en situation de handicap s&apos;affrontent dans un esprit de fair-play.
            </li>
            <li>
              <strong>🦽 Ateliers d&apos;immersion et de mise en situation</strong>{" "}: Découverte pratique des disciplines handisport (basket-fauteuil 🏀, cécifoot ⚽, para-athlétisme 🏃‍♂️) pour mesurer l&apos;exigence physique et technique de ces pratiques.
            </li>
            <li>
              <strong>🎥 Médias et narration positive avec KA TV Sport</strong>{" "}: Mini-documentaires, interviews et reportages sur YouTube, TikTok et Facebook pour déconstruire les clichés.
            </li>
            <li>
              <strong>🗣️ Conférences et témoignages inspirants</strong>{" "}: Rencontres entre nos sportifs, nos entraîneurs et le public pour partager des récits de résilience et de réussite.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Nos publics : mobiliser toute la société bruxelloise
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏫 Établissements scolaires et jeunesse (15 à 25 ans)</strong>{" "}: Interventions dans les écoles et outils pédagogiques pour éduquer au respect, à l&apos;empathie et à l&apos;égalité des chances.
            </li>
            <li>
              <strong>🏢 Entreprises et partenaires RSE</strong>{" "}: Journées de team building inclusif et de sensibilisation au handicap.
            </li>
            <li>
              <strong>👨‍👩‍👧‍👦 Familles, clubs sportifs et centres de revalidation</strong>{" "}: Actions de proximité pour encourager les personnes en situation de handicap et leurs proches à franchir le pas vers une pratique sportive.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Comment agir à nos côtés ?
          </h3>

          <p className="lede">
            <strong>1. Organisez une journée de sensibilisation (écoles &amp; entreprises) 🏫🏢</strong> — Notre équipe se déplace avec son matériel adapté ou vous accueille dans nos infrastructures bruxelloises.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📅 Réserver un atelier de sensibilisation
            </Link>
          </div>

          <p className="lede">
            <strong>2. Participez à nos prochains événements inclusifs 🎉</strong> — Venez assister à nos tournois et découvrir nos séances ouvertes.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/competitions/calendrier" className="info-cta">
              🗓️ Voir l&apos;agenda des événements
            </Link>
          </div>

          <p className="lede">
            <strong>3. Soutenez nos campagnes et KA TV Sport ❤️🎥</strong> — En faisant un don ou en sponsorisant nos productions vidéo, vous diffusez un message positif et inclusif.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Soutenir la sensibilisation
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
        <h2>Sensibilisation à l&apos;inclusion</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
