"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function PreparationPhysiquePage() {
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
        <VideoSlot
          youtubeId="ymkoGm1Wmfg"
          title="Préparation physique : Démonstration"
        />
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
          <h3 className="rf-blocktitle">💪 Préparation Physique chez KABSA</h3>
          <p className="svc-chapo">
            Développer son potentiel athlétique, gagner en endurance et préserver son corps en toute
            sécurité.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, la préparation physique est le socle indispensable de la
            progression sportive. Qu&apos;il s&apos;agisse de tenir le rythme intense d&apos;un
            match de 40 minutes, d&apos;améliorer sa vitesse sur piste ou d&apos;entretenir sa forme
            au quotidien, nos préparateurs physiques et éducateurs diplômés conçoivent des
            programmes adaptés à chaque morphologie et à chaque handicap.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Les 4 Piliers de Notre Préparation Physique
          </h3>
          <p className="lede">
            Notre approche repose sur un équilibre entre performance, santé durable et respect de
            l&apos;intégrité physique de chaque sportif :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Renforcement Musculaire Ciblé</strong>{" "}: Travail approfondi du haut du
              corps (bras, épaules, dos, sangle abdominale) pour les disciplines en fauteuil, et
              renforcement des appuis et de la chaîne postérieure pour les athlètes debout.
            </li>
            <li>
              <strong>L&apos;Endurance Cardiovasculaire</strong>{" "}: Développement des capacités
              cardio-respiratoires via des séances de VMA sur piste, de foncier en extérieur,
              d&apos;ergomètre ou de résistance en fauteuil.
            </li>
            <li>
              <strong>L&apos;Explosivité et la Vivacité</strong>{" "}: Exercices de pliométrie, de
              démarrages rapides et de changements de direction pour optimiser la réactivité sur le
              terrain.
            </li>
            <li>
              <strong>Le Gainage, la Proprioception et la Souplesse</strong>{" "}: Stabilisation du
              buste (essentielle pour la propulsion ou les lancers assis), travail d&apos;équilibre
              et mobilité articulaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏅 Une Préparation Adaptée à Chaque Discipline
          </h3>
          <p className="lede">
            Parce que chaque sport sollicite le corps différemment, nos séances s&apos;ajustent aux
            exigences de votre pratique :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀♿ Basket Fauteuil</strong>{" "}: Focus sur la puissance des membres
              supérieurs pour les poussées explosives, le gainage du tronc pour la stabilité lors
              des contacts et l&apos;endurance haute intensité.
            </li>
            <li>
              <strong>⚽ Football Masculin &amp; Féminin</strong>{" "}: Préparation physique intégrée
              avec ballon axée sur la vitesse, la vivacité, la proprioception (prévention des
              entorses) et l&apos;endurance répétée.
            </li>
            <li>
              <strong>🏃‍♂️♿ Athlétisme &amp; Para-athlétisme</strong>{" "}: Circuits de Préparation
              Physique Générale (PPG), travail en côtes et dénivelé en forêt, développement de la
              puissance de poussée (fauteuil/lames) et marche nordique sollicitant 80 % des muscles
              du corps.
            </li>
            <li>
              <strong>🏊♿ Natation Adaptée</strong>{" "}: Renforcement musculaire doux en apesanteur
              utilisant la résistance naturelle de l&apos;eau (chauffée entre 29 °C et 32 °C) pour
              tonifier le corps sans choc articulaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🩺 Prévention des Blessures &amp; Suivi Médico-Sportif
          </h3>
          <p className="lede">
            La longévité de nos athlètes est une priorité absolue. Nos protocoles intègrent une
            dimension préventive rigoureuse :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Protection des articulations sollicitées</strong>{" "}: Exercices spécifiques
              pour prévenir les blessures d&apos;usure, notamment au niveau des épaules et des
              poignets chez les sportifs en fauteuil roulant.
            </li>
            <li>
              <strong>Ergonomie et confort vasculaire</strong>{" "}: Contrôle régulier des points
              d&apos;appui, des sangles et des manchons de prothèses pour garantir une circulation
              sanguine saine durant l&apos;effort.
            </li>
            <li>
              <strong>Soins et récupération</strong>{" "}: Collaboration avec des kinésithérapeutes
              pour le suivi régulier, les étirements assistés et la gestion intelligente de la
              fatigue.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏋️‍♀️ Des Infrastructures Équipées et 100 % Accessibles
          </h3>
          <p className="lede">
            Pour vous permettre de vous entraîner dans les meilleures conditions, KABSA met à
            disposition des espaces dédiés :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Salle de Préparation Physique (PPG)</strong>{" "}: Équipée de machines de
              musculation accessibles (postes à poulies réglables, poids libres, ergomètres) avec
              des espaces de circulation larges pour les fauteuils roulants.
            </li>
            <li>
              <strong>Espaces extérieurs et pistes</strong>{" "}: Accès direct à l&apos;anneau
              d&apos;athlétisme de 400 m, aux parcs locaux et aux sentiers forestiers pour le
              travail cardio et le renforcement en plein air.
            </li>
            <li>
              <strong>Bassins de récupération et bien-être</strong>{" "}: Utilisation de
              l&apos;environnement aquatique pour la rééducation douce et le relâchement musculaire.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          S&apos;inscrire / Nous contacter
        </Link>
        <Link href="/dons" className="info-cta">
          Faire un don
        </Link>
      </div>
    </>
  );

  const deroulementContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            ⏱️ Déroulement d&apos;une Séance de Préparation Physique
          </h3>
          <p className="svc-chapo">
            Une structure rigoureuse et progressive pour optimiser vos performances en toute
            sécurité.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, chaque séance de préparation physique suit un protocole
            méthodique conçu par nos éducateurs et préparateurs diplômés. Que vous vous entraîniez
            en salle de musculation accessible, sur piste, en forêt ou en milieu aquatique,
            l&apos;organisation est pensée pour maximiser vos gains athlétiques tout en préservant
            votre intégrité physique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Les 4 Phases d&apos;un Entraînement Physique (1h00 à 1h30)
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔧 1. Accueil, Réglages &amp; Évaluation de Forme (10 min)
          </h3>
          <p className="lede">
            Avant de démarrer l&apos;effort, un temps de préparation permet d&apos;adapter la séance
            à votre état du jour :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Installation et ergonomie</strong>{" "}: Ajustement des sangles de maintien,
              réglage des poulies accessibles, vérification des manchons de prothèses ou des appuis.
            </li>
            <li>
              <strong>Bilan rapide</strong>{" "}: Échange avec le préparateur physique sur votre
              niveau de fatigue musculaire ou articulaire pour ajuster les charges et
              l&apos;intensité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔥 2. Échauffement Articulaire &amp; Cardio-Vasculaire (15 min)
          </h3>
          <p className="lede">
            Une mise en route ciblée pour préparer le corps à l&apos;effort et prévenir les
            blessures :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Activation cardiaque</strong>{" "}: Travail progressif sur ergomètre à bras,
              footing léger, marche nordique dynamique ou mise en mouvement dans l&apos;eau.
            </li>
            <li>
              <strong>Mobilité et prophylaxie</strong>{" "}: Échauffement spécifique des
              articulations très sollicitées (notamment la coiffe des rotateurs des épaules et les
              poignets pour les athlètes en fauteuil, ou les chevilles et genoux pour les
              disciplines debout).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚡ 3. Le Corps de Séance : Travail Athlétique Ciblé (30 à 45 min)
          </h3>
          <p className="lede">
            Le cœur de l&apos;entraînement s&apos;adapte à vos objectifs (remise en forme, endurance
            ou compétition) et à votre discipline :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ateliers de renforcement (PPG / PPS)</strong>{" "}: Circuits training, travail
              de puissance du haut du corps, gainage profond (stabilisation du tronc) et pliométrie
              adaptée.
            </li>
            <li>
              <strong>Développement énergétique</strong>{" "}: Séances de fractionné court ou long
              (VMA), travail en côtes, résistance en fauteuil ou exercices contre la résistance
              naturelle de l&apos;eau.
            </li>
            <li>
              <strong>Travail intégré</strong>{" "}: Exercices combinant sollicitation physique et
              gestuelle technique (proprioception avec ballon, explosivité au démarrage).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧘‍♂️ 4. Récupération, Étirements &amp; Bilan (10 à 15 min)
          </h3>
          <p className="lede">
            La fin de séance est consacrée au retour au calme pour amorcer la régénération
            musculaire :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Relâchement et souplesse</strong>{" "}: Étirements doux assistés ou autonomes,
              exercices de respiration et décompression articulaire.
            </li>
            <li>
              <strong>Suivi et hydratation</strong>{" "}: Débriefing avec le coach, conseils
              d&apos;hydratation et orientation vers le pôle kinésithérapie si un besoin de soin
              spécifique est identifié.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📈 La Planification sur l&apos;Année (Périodisation)
          </h3>
          <p className="lede">
            Pour accompagner les sportifs du loisir jusqu&apos;aux championnats nationaux sans
            risque de surentraînement, notre préparation physique évolue selon le calendrier :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Phase 1 – Reprise &amp; Fondations (Pré-saison)</strong>{" "}: Bilan physique
              initial, développement de l&apos;endurance fondamentale et renforcement musculaire
              général (PPG).
            </li>
            <li>
              <strong>Phase 2 – Développement &amp; Puissance</strong>{" "}: Augmentation
              progressive de l&apos;intensité, travail d&apos;explosivité, de vitesse et de
              résistance spécifique à chaque sport.
            </li>
            <li>
              <strong>Phase 3 – Affûtage &amp; Compétition</strong>{" "}: Maintien des acquis
              physiques avec baisse du volume d&apos;entraînement pour garantir un pic de forme lors
              des échéances officielles.
            </li>
            <li>
              <strong>Phase 4 – Régénération</strong>{" "}: Récupération active, natation bien-être
              et prévention des blessures d&apos;usure en fin de saison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">💡 Les Garanties Encadrement KABSA</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Charges et exercices individualisés</strong>{" "}: Chaque atelier est décliné
              en plusieurs niveaux de difficulté pour s&apos;adapter aux capacités motrices,
              sensorielles ou intellectuelles de chacun.
            </li>
            <li>
              <strong>Matériel 100 % accessible</strong>{" "}: Utilisation de postes à charges
              guidées accessibles en fauteuil, élastiques de résistance, médecine-balls et
              ergomètres adaptés.
            </li>
            <li>
              <strong>Prévention continue</strong>{" "}: Surveillance constante des postures et de
              la circulation sanguine (prévention vasculaire) durant l&apos;effort prolongé.
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
    { id: "deroulement", label: "Déroulement", content: deroulementContent },
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
        <h2>Préparation physique</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
