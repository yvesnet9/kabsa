"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function CompetitionsKabsaPage() {
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
            🏆🌍 Compétitions KABSA : Notre programme de détection de talents
          </h3>
          <p className="lede">
            Au-delà de sa participation aux circuits officiels, KA BRUXELLES SPORT ACADEMIE asbl
            (KABSA) a pour projet de déployer son propre programme de compétitions en Belgique
            et à l&apos;international. Pensés comme de véritables tremplins vers le sport de
            haut niveau, les tournois et journées de sélection KABSA viseront à détecter,
            évaluer et accompagner les jeunes talents (de 15 à 25 ans) — valides 🏃‍♂️ et en
            situation de handicap physique ♿ — là où le potentiel sportif émerge.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre concept : Détecter et révéler les champions de demain
          </h3>
          <p className="lede">
            Le programme Compétitions KABSA repose sur une conviction forte : le talent n&apos;a
            ni frontière ni barrière. Pour offrir à chaque jeune sportif une chance
            d&apos;accéder au haut niveau, KABSA prévoit d&apos;organiser un circuit combinant
            compétition, évaluation technique et inclusion sociale :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Une détection ouverte et équitable (♿ &amp; 🏃‍♂️)</strong>{" "}: Chaque étape
              donnera aux jeunes athlètes l&apos;opportunité de démontrer leurs qualités
              techniques, tactiques et physiques sous le regard de nos coachs et préparateurs
              physiques.
            </li>
            <li>
              <strong>Des conditions d&apos;encadrement professionnelles</strong>{" "}: Les
              participants bénéficieront d&apos;infrastructures adaptées, de matériel de pointe,
              d&apos;un suivi kinésithérapeutique et d&apos;une couverture d&apos;assurance
              complète durant toutes les activités de l&apos;académie.
            </li>
            <li>
              <strong>Une passerelle vers l&apos;élite</strong>{" "}: Les meilleurs profils repérés
              intégreront les noyaux de performance KABSA, avec la possibilité de rejoindre
              Bruxelles pour des stages intensifs et une préparation aux compétitions.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋🏟️ Les formats d&apos;événements prévus par KABSA
          </h3>
          <p className="lede">
            Pour structurer cette détection à l&apos;échelle locale, nationale et
            internationale, KABSA envisage plusieurs formats complémentaires, à
            déployer <strong>dès la saison 2026-2027</strong>{" "}:
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Les Détections &amp; Matchs Internes KABSA (Bruxelles 🇧🇪)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Sessions « KABSA Open Talent » (♿ &amp; 🏃‍♂️)</strong>{" "}: Entraînements
              tests et tournois internes prévus dans des centres sportifs bruxellois <em>(lieux
              à confirmer)</em> pour repérer les jeunes talents locaux dans nos disciplines
              phares : cécifoot 🦯⚽, athlétisme 🏃‍♂️ et basket-fauteuil ♿🏀.
            </li>
            <li>
              <strong>Le Challenge Inter-Noyaux KABSA (♿🤝🏃‍♂️)</strong>{" "}: Rencontres entre les
              différentes équipes constituées au sein de l&apos;académie afin de mesurer la
              progression tactique et physique des athlètes avant leur engagement face aux clubs
              extérieurs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Les Tournois Inclusifs &amp; Rencontres de Prestige (Belgique 🇧🇪)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>La KABSA Inclusive Cup (♿🤝🏃‍♂️)</strong>{" "}: Tournoi de sensibilisation
              envisagé à Bruxelles pour réunir équipes handisports, clubs traditionnels, écoles
              et centres de revalidation autour de la mixité et du sport-santé.
            </li>
            <li>
              <strong>Les Galas &amp; Matchs amicaux de haut niveau (♿ &amp; 🏃‍♂️)</strong>{" "}:
              Rencontres amicales que KABSA souhaite organiser pour opposer ses sélections de
              jeunes talents à des équipes expérimentées.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Le Circuit International « KABSA World Scouting Tour » (International 🌍)
          </h3>
          <p className="lede">
            Afin de repérer des talents au-delà des frontières belges et de créer des ponts
            sportifs internationaux, KABSA a pour projet d&apos;organiser des étapes de
            détection dans différents pays :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Étapes à l&apos;Étranger (♿ &amp; 🏃‍♂️)</strong>{" "}: Tournois de
              détection envisagés en lien avec des fédérations locales et académies étrangères
              (en Europe, en Afrique et à l&apos;international) pour identifier les meilleurs
              jeunes profils en handisport et sport valide.
            </li>
            <li>
              <strong>Les Camps d&apos;Évaluation &amp; Tournois de Sélection (♿ &amp;
              🏃‍♂️)</strong>{" "}: Rassemblements intensifs mêlant tests physiques, ateliers
              tactiques et matchs observés par la cellule de recrutement de KABSA.
            </li>
            <li>
              <strong>La Grande Finale Internationale KABSA à Bruxelles (🌍 ♿🏃‍♂️)</strong>{" "}:
              L&apos;événement phare envisagé pour réunir à Bruxelles les meilleurs talents
              détectés lors des étapes étrangères et les sélections belges KABSA, avec un
              accueil complet via notre Pôle Logistique &amp; Social (hébergement temporaire,
              programmes nutritionnels et infrastructures adaptées).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎥📺 Le programme Compétitions KABSA en direct sur KA TV Sport
          </h3>
          <p className="lede">
            Chaque tournoi organisé par KABSA en Belgique ou à l&apos;étranger sera couvert par
            notre équipe média. Sur KA TV Sport (YouTube, TikTok et réseaux sociaux), suivez les
            phases de détection, les plus belles actions et les portraits des jeunes talents
            repérés.
          </p>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Nous contacter
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
        <h2>Compétitions KABSA</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />

      </div>
    </section>
  );
}
