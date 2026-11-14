"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function SuiviKinesitherapiquePage() {
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
          <h3 className="rf-blocktitle">🩺👐 Suivi Kinésithérapique du Sportif chez KABSA</h3>
          <p className="svc-chapo">
            Prévenir les blessures, optimiser la récupération et préserver la longévité de chaque
            athlète.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, la performance et le plaisir de pratiquer reposent sur un corps
            préservé et écouté. Que vous pratiquiez en loisir ou en haute compétition, en sport
            valide, handisport ou sport adapté, notre pôle de suivi kinésithérapique accompagne
            chaque licencié tout au long de la saison pour concilier intensité sportive, confort
            anatomique et santé durable.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Les 4 Missions de Notre Pôle Kinésithérapie
          </h3>
          <p className="lede">
            Nos masseurs-kinésithérapeutes diplômés d&apos;État, spécialisés dans le suivi du
            sportif et du handicap, interviennent sur quatre axes complémentaires :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>La Prévention des Blessures d&apos;Usure</strong>{" "}: Surveillance ciblée
              des articulations et chaînes musculaires très sollicitées, notamment au niveau des
              épaules, des coudes et des poignets chez les sportifs en fauteuil roulant, ainsi que
              des membres inférieurs chez les coureurs et footballeurs.
            </li>
            <li>
              <strong>L&apos;Ergonomie Anatomique &amp; la Prévention Vasculaire</strong>{" "}:
              Contrôle régulier des points d&apos;appui, de l&apos;ajustement des sangles de
              maintien et des manchons de prothèses afin d&apos;éviter les zones de compression
              critique et de garantir une circulation sanguine saine durant l&apos;effort prolongé.
            </li>
            <li>
              <strong>La Récupération Post-Effort</strong>{" "}: Massages de récupération,
              drainages, étirements assistés et techniques de relâchement musculaire après les
              séances intenses (PPG, VMA, matchs de 40 minutes) ou lors des tournois.
            </li>
            <li>
              <strong>La Rééducation &amp; la Reprise Progressive</strong>{" "}: Accompagnement
              personnalisé après une blessure ou une intervention médicale pour sécuriser le retour
              sur le terrain, sur la piste ou dans le bassin.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏅 Un Accompagnement Adapté à Chaque Discipline
          </h3>
          <p className="lede">
            Parce que chaque pratique engendre des contraintes biomécaniques spécifiques, nos soins
            s&apos;adaptent à votre sport :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀♿ Basket Fauteuil</strong>{" "}: Protection de la coiffe des rotateurs
              (épaules), relâchement des muscles du dos et des bras, et suivi postural lié au
              maintien sanglé dans le fauteuil.
            </li>
            <li>
              <strong>🏃‍♂️♿ Para-athlétisme &amp; Athlétisme</strong>{" "}: Suivi des appuis sur
              lames en carbone, gestion de la fatigue musculaire des membres supérieurs (fauteuil de
              course à 3 roues et lancers assis) et prévention des tendinopathies sur piste ou
              trail.
            </li>
            <li>
              <strong>⚽ Football Masculin &amp; Féminin</strong>{" "}: Prévention des lésions
              musculaires (ischio-jambiers, adducteurs) et des entorses (travail proprioceptif),
              soins de récupération après les matchs du week-end et suivi des jeunes en croissance.
            </li>
            <li>
              <strong>🏊♿ Natation Adaptée</strong>{" "}: Travail conjoint entre les
              kinésithérapeutes et les maîtres-nageurs pour utiliser les bienfaits de
              l&apos;apesanteur et de l&apos;eau chauffée (29 °C à 32 °C) dans le cadre d&apos;une
              rééducation douce et sans impact.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏥 Un Espace Médical Équipé au Cœur du Complexe
          </h3>
          <p className="lede">
            Pour garantir des soins de qualité au plus près de votre pratique, KABSA dispose
            d&apos;installations dédiées :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Zone Médicale &amp; Salle de Soins Accessible</strong>{" "}: Située
              directement au sein du complexe sportif (accès de plain-pied, portes extra-larges,
              tables de massage réglables en hauteur pour faciliter les transferts depuis un
              fauteuil).
            </li>
            <li>
              <strong>Intervention lors des Compétitions</strong>{" "}: Présence de nos
              kinésithérapeutes lors des matchs à domicile, tournois et déplacements officiels (en
              lien avec notre pôle Hébergement des délégations) pour assurer les soins
              d&apos;avant-match (strapping, échauffement passif) et de récupération.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Une Synergie Pluridisciplinaire au Service de l&apos;Athlète
          </h3>
          <p className="lede">
            Le pôle kinésithérapique travaille en lien permanent avec les autres experts de
            l&apos;académie KABSA :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Avec les Éducateurs &amp; Préparateurs Physiques</strong>{" "}: Adaptation des
              charges d&apos;entraînement et mise en place d&apos;exercices prophylactiques
              (renforcement préventif) en salle de PPG.
            </li>
            <li>
              <strong>Avec les Mécaniciens en Bord de Terrain</strong>{" "}: Ajustement précis de la
              hauteur d&apos;assise, de l&apos;inclinaison du dossier ou des sangles lorsqu&apos;une
              gêne posturale est détectée.
            </li>
            <li>
              <strong>Avec le Pôle Nutritionnel</strong>{" "}: Cohérence entre récupération
              tissulaire, hydratation et apports nutritionnels après l&apos;effort.
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
            🔄 Déroulement de Votre Suivi Kinésithérapique chez KABSA
          </h3>
          <p className="svc-chapo">
            Un parcours structuré, personnalisé et évolutif tout au long de votre saison sportive.
          </p>
          <p className="lede">
            Chez KABSA, chaque athlète bénéficie d&apos;un accompagnement sur mesure. De votre
            arrivée à l&apos;académie jusqu&apos;aux compétitions majeures, notre protocole
            s&apos;adapte à votre discipline, à votre condition physique et à vos objectifs.
            Découvrez les quatre étapes clés de votre prise en charge.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Étape 1 : Le Bilan Initial &amp; Fonctionnel (Début de saison ou arrivée)
          </h3>
          <p className="lede">
            Avant de débuter tout programme d&apos;entraînement intensif, nous réalisons une
            évaluation complète pour cartographier vos besoins et prévenir les risques :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Entretien personnalisé</strong>{" "}: Nous échangeons sur votre historique
              médical, vos anciennes blessures, votre niveau de pratique (loisir ou compétition) et
              vos objectifs de la saison.
            </li>
            <li>
              <strong>Analyse biomécanique et posturale</strong>{" "}: Nous évaluons votre mobilité
              articulaire, votre souplesse et vos déséquilibres musculaires.
            </li>
            <li>
              <strong>Contrôle ergonomique (Handisport &amp; Sport adapté)</strong>{" "}: Nous
              vérifions vos points d&apos;appui, l&apos;ajustement de votre fauteuil (hauteur
              d&apos;assise, inclinaison, sangles) ou de vos prothèses (manchons, lames en carbone)
              afin de prévenir toute zone de compression.
            </li>
            <li>
              <strong>Plan d&apos;action individuel</strong>{" "}: À l&apos;issue de ce bilan, nous
              définissons votre calendrier de suivi préventif et vos axes de renforcement
              prioritaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛡️ Étape 2 : Le Suivi Préventif Régulier (Au rythme des entraînements)
          </h3>
          <p className="lede">
            Tout au long de la semaine, nos kinésithérapeutes veillent à maintenir votre corps dans
            des conditions optimales pour encaisser les charges d&apos;entraînement :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Séances de prophylaxie</strong>{" "}: Nous mettons en place des exercices
              ciblés (gainage profond, proprioception, renforcement de la coiffe des rotateurs ou
              des membres inférieurs) en lien direct avec les préparateurs physiques.
            </li>
            <li>
              <strong>Vigilance vasculaire et cutanée</strong>{" "}: Nous contrôlons régulièrement
              les zones soumises aux frottements et à la pression prolongée pour éviter les
              irritations ou troubles circulatoires.
            </li>
            <li>
              <strong>Ajustement continu</strong>{" "}: Si une gêne posturale apparaît en cours de
              séance, nos kinésithérapeutes collaborent immédiatement avec les mécaniciens en bord
              de terrain pour rectifier le réglage de votre matériel.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚡ Étape 3 : L&apos;Accompagnement Autour de l&apos;Effort (Séances intenses &amp;
            Compétitions)
          </h3>
          <p className="lede">
            Lors des pics d&apos;intensité (séances VMA, PPG, tournois ou matchs officiels), notre
            équipe intervient avant et après votre performance :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Préparation avant l&apos;effort</strong>{" "}: Nous réalisons des soins
              d&apos;avant-match tels que la pose de strapping préventif, le taping
              neuro-proprioceptif et des massages d&apos;échauffement passif.
            </li>
            <li>
              <strong>Récupération post-effort</strong>{" "}: Dès la fin de l&apos;épreuve ou de
              l&apos;entraînement, nous prodiguons des massages de récupération profonde, des
              drainages lymphatiques et des étirements passifs pour éliminer les toxines et limiter
              les courbatures (DOMS).
            </li>
            <li>
              <strong>Déplacements officiels</strong>{" "}: Nos praticiens accompagnent les
              délégations lors des tournois à l&apos;extérieur pour garantir la même qualité de
              soins qu&apos;au sein du complexe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🩹 Étape 4 : La Rééducation &amp; le Retour au Jeu (En cas de blessure)
          </h3>
          <p className="lede">
            Si une blessure survient malgré la prévention, nous activons un protocole de rééducation
            accéléré et sécurisé :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prise en charge immédiate</strong>{" "}: Grâce à notre zone médicale
              accessible située au cœur du complexe, le diagnostic et les premiers soins sont
              réalisés sans délai.
            </li>
            <li>
              <strong>Rééducation fonctionnelle et aquatique</strong>{" "}: Nous combinons les soins
              manuels en salle avec des séances en bassin chauffé (29 °C à 32 °C) en collaboration
              avec les maîtres-nageurs pour une reprise douce et sans impact.
            </li>
            <li>
              <strong>Réathlétisation progressive</strong>{" "}: Nous validons chaque palier de
              reprise (course, changements d&apos;appui, maniement du fauteuil, contacts) avant de
              donner le feu vert pour le retour complet à la compétition.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Infos Pratiques : Organisation d&apos;une Séance Type
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Durée d&apos;une séance</strong>{" "}: 30 à 45 minutes (selon qu&apos;il
              s&apos;agisse d&apos;un bilan, d&apos;un soin de récupération ou d&apos;une
              rééducation).
            </li>
            <li>
              <strong>Lieu de prise en charge</strong>{" "}: Zone Médicale du complexe KABSA (accès
              de plain-pied, tables réglables en hauteur) ou directement en bord de terrain.
            </li>
            <li>
              <strong>Tenue recommandée</strong>{" "}: Tenue de sport souple permettant un accès
              facile à la zone à traiter et une liberté de mouvement.
            </li>
            <li>
              <strong>Documents à prévoir</strong>{" "}: Ordonnance médicale (uniquement pour les
              actes de rééducation post-blessure), examens d&apos;imagerie récents et votre matériel
              sportif habituel (fauteuil, prothèse, chaussures).
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
        <h2>Suivi kinésithérapique du sportif</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
