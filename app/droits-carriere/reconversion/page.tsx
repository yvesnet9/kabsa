"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function ReconversionPage() {
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
            🔄🚀 Reconversion &amp; après-carrière : Préparer l&apos;avenir au-delà des terrains
          </h3>
          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous considérons que la réussite
            d&apos;un athlète se mesure autant par ses exploits sportifs que par son
            épanouissement personnel et professionnel sur le long terme. Parce qu&apos;une
            carrière sportive est une étape intense mais limitée dans le temps, l&apos;académie
            accompagne ses membres (de 15 à 25 ans) — valides 🏃‍♂️ et en situation de handicap
            physique ♿ — dans la préparation de leur avenir dès leur entrée dans le programme.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre vision : Le double projet pour une transition sereine
          </h3>
          <p className="lede">
            Pour KABSA, le sport est un puissant levier d&apos;autonomie et d&apos;intégration
            sociale. Afin d&apos;éviter toute rupture à la fin d&apos;un parcours compétitif ou
            en cas d&apos;aléa sportif, nous encourageons chaque jeune talent à mener de front
            ses ambitions sportives et son projet professionnel :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Anticiper dès la formation (♿ &amp; 🏃‍♂️)</strong>{" "}: Sensibiliser les
              athlètes dès leur plus jeune âge à l&apos;importance de la formation continue, des
              études et de l&apos;acquisition de compétences transférables.
            </li>
            <li>
              <strong>Valoriser l&apos;expérience du haut niveau</strong>{" "}: Transformer les
              qualités acquises sur les terrains (discipline, esprit d&apos;équipe, résilience,
              dépassement de soi) en véritables atouts sur le marché de l&apos;emploi.
            </li>
            <li>
              <strong>Briser les barrières professionnelles</strong>{" "}: Offrir aux personnes en
              situation de handicap physique des passerelles concrètes vers l&apos;emploi et
              l&apos;entrepreneuriat, afin de renforcer durablement leur autonomie sociale.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋🎓 Les dispositifs d&apos;accompagnement à la reconversion KABSA
          </h3>
          <p className="lede">
            Grâce à notre organisation pluridisciplinaire et à notre réseau d&apos;experts,
            KABSA déploie quatre axes concrets pour préparer l&apos;après-carrière de ses
            sportifs :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Suivi du double projet : Études et sport 📚
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Aménagement et orientation scolaire</strong>{" "}: En lien avec les familles
              et les établissements scolaires, nos équipes veillent à l&apos;équilibre entre les
              séances d&apos;entraînement, les compétitions et la réussite académique.
            </li>
            <li>
              <strong>Bilan de compétences et orientation</strong>{" "}: Accompagnement personnalisé
              pour aider chaque athlète à identifier ses centres d&apos;intérêt professionnels
              en dehors de sa discipline sportive.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Passerelles vers les métiers du sport et de l&apos;encadrement 🏋️‍♂️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Formation aux diplômes d&apos;encadrement</strong>{" "}: KABSA encourage et
              oriente ses athlètes souhaitant devenir coachs sportifs, préparateurs physiques,
              éducateurs spécialisés ou kinésithérapeutes.
            </li>
            <li>
              <strong>Intégration au sein de l&apos;académie</strong>{" "}: Les athlètes formés chez
              KABSA ont l&apos;opportunité de transmettre leur expérience en rejoignant nos
              pôles d&apos;encadrement pour accompagner les nouvelles générations de jeunes
              talents.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Métiers des médias, de la communication et de l&apos;événementiel 🎥
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Immersion avec KA TV Sport</strong>{" "}: Les sportifs intéressés par
              l&apos;audiovisuel peuvent s&apos;initier à la création de contenu, au journalisme
              sportif, à la gestion des réseaux sociaux ou à l&apos;organisation de tournois
              inclusifs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            4. Connexion avec le monde de l&apos;entreprise et l&apos;entrepreneuriat 🤝
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Réseau d&apos;entreprises partenaires (RSE)</strong>{" "}: KABSA souhaite
              mettre ses athlètes en relation avec des entreprises engagées dans la
              Responsabilité Sociétale des Entreprises (RSE), pour favoriser l&apos;accès à des
              stages, des formations en alternance et des opportunités de recrutement inclusif.
            </li>
            <li>
              <strong>Appui juridique et création de projet</strong>{" "}: Avec le soutien de nos
              experts juridiques, nous conseillons les anciens sportifs qui souhaitent lancer
              leur propre structure associative, sportive ou entrepreneuriale.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟💬 Nos athlètes, ambassadeurs de l&apos;inclusion
          </h3>
          <p className="lede">
            Même après avoir quitté les circuits de compétition, les membres de KABSA restent au
            cœur de notre communauté. Ils deviennent des modèles inspirants et des ambassadeurs
            de l&apos;inclusion, intervenant dans les écoles, les centres de revalidation et
            auprès de nos partenaires pour démontrer que le sport ouvre toutes les portes de la
            réussite citoyenne.
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
        <h2>Reconversion &amp; après-carrière</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
