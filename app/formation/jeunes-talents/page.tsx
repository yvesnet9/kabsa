"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function JeunesTalentsPage() {
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
          youtubeId="2uPeJHumMQ8"
          title="Détecter et former les jeunes talents"
          vertical
        />
      </div>
      <div className="info-card">
        <h3>Démonstration</h3>
        <p>Démonstration en conditions réelles.</p>
        <VideoSlot
          youtubeId="5xvJpi1ODGs"
          title="L’apprentissage par le jeu"
          vertical
        />
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
            🚀 Accompagnement des jeunes talents : du repérage terrain jusqu&apos;à la carrière professionnelle ♿🏅
          </h3>

          <p className="svc-chapo">
            Révéler le potentiel de la jeunesse bruxelloise et bâtir la relève 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus que de nombreux talents dorment à Bruxelles, freinés par le manque de structures adaptées ou de moyens financiers. Le sport professionnel et paralympique est en pleine expansion mondiale, offrant de véritables opportunités de carrière aux athlètes déterminés.
          </p>

          <p className="lede">
            Notre académie offre aux jeunes sportifs bruxellois de 15 à 25 ans (valides et en situation de handicap physique) un tremplin unique : un parcours structuré et exigeant, depuis leurs premiers pas sur le terrain jusqu&apos;aux compétitions nationales et internationales.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛤️ Un parcours en 3 étapes vers l&apos;excellence
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Étape 1 : La détection gratuite et l&apos;intégration (mois 1 à 6) 🔍
          </h3>

          <p className="lede">
            Nous brisons les barrières financières dès le départ :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>6 mois d&apos;entraînements gratuits</strong>{" "}: Accès libre à nos séances de détection dans nos disciplines phares (basket-fauteuil 🏀, cécifoot ⚽, para-athlétisme 🏃‍♂️).
            </li>
            <li>
              <strong>Évaluation équitable</strong>{" "}: Chaque athlète bénéficie d&apos;un minimum de trois séances encadrées pour s&apos;affirmer et démontrer son potentiel.
            </li>
            <li>
              <strong>Matchs de mise en situation</strong>{" "}: Participation à des rencontres amicales internes pour évaluer l&apos;esprit d&apos;équipe, la discipline et la progression.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Étape 2 : Le noyau d&apos;élite et la préparation intensive (mois 7 à 12) 💪
          </h3>

          <p className="lede">
            Les athlètes retenus intègrent notre filière de haut niveau (sous modèle d&apos;affiliation solidaire) et bénéficient d&apos;un suivi de niveau professionnel :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Coaching technique et tactique personnalisé</strong>{" "}: Des stratégies d&apos;entraînement étudiées par nos entraîneurs diplômés.
            </li>
            <li>
              <strong>Préparation physique et suivi médical</strong>{" "}: Accompagnement sur mesure, séances de kinésithérapie, massages de récupération et conseils nutritionnels (avec repas équilibré après l&apos;entraînement).
            </li>
            <li>
              <strong>Équipements de pointe</strong>{" "}: Matériel spécialisé et outils de suivi de performance dans nos infrastructures adaptées à Bruxelles <em>(lieux à confirmer)</em>.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Étape 3 : Le tremplin vers les compétitions et le monde professionnel 🌍
          </h3>

          <p className="lede">
            Une fois nos équipes constituées :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Confrontation au plus haut niveau</strong>{" "}: Organisation de matchs amicaux contre des équipes expérimentées et participation aux championnats officiels.
            </li>
            <li>
              <strong>Passerelles vers l&apos;élite</strong>{" "}: Mise en relation avec les circuits officiels et les fédérations de référence pour viser les sélections nationales.
            </li>
            <li>
              <strong>Visibilité médiatique</strong>{" "}: Valorisation du parcours de nos jeunes talents sur notre chaîne KA TV Sport (YouTube, TikTok, Facebook) pour attirer l&apos;attention des recruteurs et sponsors.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Qui peut intégrer le programme ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🧑‍🎓 Jeunes Bruxellois de 15 à 25 ans</strong>{" "}: Débutants prometteurs ou sportifs confirmés, en situation de handicap physique ou valides, souhaitant évoluer dans un cadre mixte et exigeant.
            </li>
            <li>
              <strong>🔥 Profils motivés et disciplinés</strong>{" "}: Nous recherchons des jeunes prêts à s&apos;investir pleinement dans un projet sportif et humain.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Rejoignez l&apos;aventure ou soutenez nos futurs champions
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Candidats : participez à nos prochaines détections 🏃‍♂️
          </h3>

          <p className="lede">
            Vous avez entre 15 et 25 ans et rêvez de repousser vos limites dans un cadre structuré à Bruxelles ? Inscrivez-vous à nos séances de détection gratuites.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/recherche-joueur" className="info-cta">
              📝 S&apos;inscrire aux tests de détection
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Clubs, écoles et centres de revalidation : orientez un talent 🏫
          </h3>

          <p className="lede">
            Vous encadrez un jeune présentant de belles aptitudes sportives (au sein d&apos;établissements scolaires ou de centres de revalidation) ? Contactez notre pôle sportif pour organiser un essai.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              🤝 Signaler un jeune talent
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Entreprises &amp; mécènes : parrainez un espoir ❤️🏢
          </h3>

          <p className="lede">
            En soutenant la bourse d&apos;entraînement, le matériel ou le suivi médical d&apos;un jeune athlète de notre noyau d&apos;élite, vous devenez acteur de sa réussite et remplissez vos objectifs RSE.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Parrainer un jeune talent
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
        <h2>Accompagnement des jeunes talents</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
