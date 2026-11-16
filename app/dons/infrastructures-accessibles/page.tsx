"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function InfrastructuresAccessiblesPage() {
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
            🤝 Soutenez KABSA : des infrastructures accessibles, ouvertes et adaptées à tous ♿🏟️
          </h3>

          <p className="svc-chapo">
            Un environnement sans barrières pour libérer le potentiel de chaque athlète 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous savons que l&apos;inclusion par le sport commence dès l&apos;entrée dans le bâtiment 🚪. À Bruxelles, la demande de clubs et de lieux de pratique inclusifs est en constante augmentation, mais les structures de proximité capables d&apos;accueillir à la fois le sport-santé et le haut niveau restent trop rares.
          </p>

          <p className="lede">
            Pour briser l&apos;isolement et offrir un cadre d&apos;entraînement sécurisé et motivant aux jeunes talents bruxellois (valides et moins valides), nous mobilisons et aménageons des infrastructures sportives adaptées au cœur des communes bruxelloises <em>(lieux à confirmer)</em> 📍. Votre soutien est essentiel pour financer l&apos;accès et l&apos;adaptation de ces espaces.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏗️ À quoi sert votre soutien ? Nos besoins en infrastructures
          </h3>

          <p className="lede">
            Vos contributions, subsides et partenariats couvrent les frais de location et d&apos;aménagement des lieux qui accueillent nos sportifs :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏟️ Terrains et salles multisports adaptés</strong>{" "}: Location de stades couverts et extérieurs avec accès de plain-pied, revêtements sécurisés et tracés adaptés (basket-fauteuil 🏀, cécifoot ⚽, para-athlétisme 🏃‍♂️).
            </li>
            <li>
              <strong>🚿 Vestiaires et sanitaires 100 % accessibles</strong>{" "}: Espaces ergonomiques (portes larges, douches adaptées, zones de transfert) garantissant autonomie, confort et dignité.
            </li>
            <li>
              <strong>🏋️ Salles de fitness et de préparation physique</strong>{" "}: Espaces équipés pour le renforcement musculaire, le suivi kinésithérapeutique 🩺 et la récupération.
            </li>
            <li>
              <strong>🏠 Espaces de vie, de réunion et d&apos;accueil</strong>{" "}: Salles de conférence pour les ateliers nutritionnels 🥗 et logements temporaires accessibles pour héberger délégations et équipes lors des stages ou tournois.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Comment contribuer à l&apos;accessibilité de nos infrastructures ?
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Particuliers : financez des heures de terrain ❤️
          </h3>

          <p className="lede">
            Chaque don aide à payer les frais de location des salles communales et des stades pour maintenir nos 6 mois d&apos;entraînements gratuits lors des phases de détection. Vous offrez un terrain de jeu sécurisé à un jeune Bruxellois en situation de handicap.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Soutenir l&apos;accès aux terrains
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Entreprises : sponsorisez un espace ou un événement RSE 🏢
          </h3>

          <p className="lede">
            Engagez votre entreprise dans une démarche concrète de Responsabilité Sociétale (RSE) en parrainant la location annuelle d&apos;une salle d&apos;entraînement ou l&apos;organisation d&apos;un tournoi inclusif à Bruxelles :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🪧</strong> Affichage de vos bannières et logos au bord des terrains et dans nos salles.
            </li>
            <li>
              <strong>🎥</strong> Visibilité dans les reportages et mini-documentaires tournés sur place par notre chaîne KA TV Sport (YouTube, TikTok, Facebook).
            </li>
            <li>
              <strong>🤝</strong> Invitation de vos équipes à nos journées de sensibilisation au handisport.
            </li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              🚀 Devenir partenaire infrastructures
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Communes, gestionnaires de salles et institutions 🏛️
          </h3>

          <p className="lede">
            Vous gérez un complexe sportif, un gymnase scolaire ou un centre de revalidation à Bruxelles ? Rejoignez notre réseau externe en mettant des créneaux horaires ou des espaces accessibles à disposition de nos athlètes.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📩 Proposer un espace ou créneau
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⭐ L&apos;impact concret de votre générosité
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🔓 Zéro barrière financière</strong>{" "}: Grâce à votre aide et aux dispositifs publics, nous maintenons des cotisations solidaires accessibles aux ménages bruxellois.
            </li>
            <li>
              <strong>🗺️ Une présence de proximité</strong>{" "}: Des entraînements répartis dans plusieurs communes bruxelloises pour faciliter la mobilité des sportifs et de leurs familles.
            </li>
            <li>
              <strong>🎬 Un suivi en images</strong>{" "}: Découvrez les coulisses de nos entraînements et l&apos;ambiance de nos salles sur KA TV Sport.
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
        <h2>Des infrastructures accessibles</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
