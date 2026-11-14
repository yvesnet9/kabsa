"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function HebergementDelegationsPage() {
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
          <h3 className="rf-blocktitle">🏨♿ Hébergement des Délégations chez KABSA</h3>
          <p className="svc-chapo">
            Un accueil tout confort, 100 % accessible et pensé pour la performance des équipes en
            déplacement.
          </p>
          <p className="lede">
            À l&apos;occasion des tournois, championnats officiels, stages de préparation ou
            meetings interclubs, l&apos;académie KABSA accompagne les équipes visiteuses et les
            délégations sportives (valides, handisport et sport adapté). Grâce à notre réseau de
            partenaires hôteliers et de centres d&apos;hébergement labellisés, nous garantissons des
            conditions de séjour optimales, alliant repos, accessibilité et proximité immédiate avec
            nos aires de pratique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ♿ Des Infrastructures Hôtelières 100 % Accessibles
          </h3>
          <p className="lede">
            Parce que la récupération d&apos;une équipe commence par un hébergement sans contrainte,
            nos structures partenaires répondent aux normes d&apos;accessibilité les plus
            exigeantes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Chambres PMR spacieuses et adaptées</strong>{" "}: Chambres communicantes ou
              individuelles dotées d&apos;espaces de rotation larges pour fauteuils roulants, lits à
              hauteur adaptée, salles de bain de plain-pied avec douches à l&apos;italienne, sièges
              rabattables et barres d&apos;appui.
            </li>
            <li>
              <strong>Circulations fluides et sécurisées</strong>{" "}: Accès de plain-pied depuis
              l&apos;extérieur, ascenseurs grande capacité (permettant d&apos;accueillir plusieurs
              fauteuils simultanément), portes automatiques larges et signalétique contrastée pour
              les sportifs malvoyants.
            </li>
            <li>
              <strong>Stationnement dédié aux délégations</strong>{" "}: Places de parking réservées
              PMR et emplacements sécurisés pour les minibus et véhicules de transport
              d&apos;équipes juste devant l&apos;établissement.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛠️ Logistique Sportive &amp; Stockage du Matériel
          </h3>
          <p className="lede">
            Nous connaissons les exigences matérielles des délégations handisport et
            multidisciplinaires. Chaque hébergement partenaire intègre des solutions logistiques
            dédiées :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Local de stockage sécurisé au rez-de-chaussée</strong>{" "}: Un espace fermé
              et facile d&apos;accès pour entreposer les fauteuils roulants de sport, les fauteuils
              d&apos;athlétisme à 3 roues, les lames, les sacs d&apos;équipement et le matériel
              collectif.
            </li>
            <li>
              <strong>Espace maintenance et recharge</strong>{" "}: Accès à des prises électriques
              sécurisées pour le rechargement des fauteuils électriques et possibilité
              d&apos;installer un poste d&apos;entretien rapide avant les compétitions.
            </li>
            <li>
              <strong>Salles de réunion et de briefing</strong>{" "}: Mise à disposition
              d&apos;espaces équipés (vidéoprojecteur, tableau tactique) pour les causeries
              d&apos;avant-match, les séances vidéo et les réunions techniques du staff.
            </li>
            <li>
              <strong>Espace soins et récupération</strong>{" "}: Possibilité de réserver une salle
              dédiée aux kinésithérapeutes de la délégation pour installer des tables de massage et
              assurer le suivi médical des athlètes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🥗 Restauration &amp; Nutrition Sportive sur Mesure
          </h3>
          <p className="lede">
            En cohérence avec l&apos;exigence sportive de KABSA, la restauration des délégations est
            pensée pour soutenir l&apos;effort et la récupération :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Menus adaptés aux sportifs</strong>{" "}: Repas équilibrés élaborés en lien
              avec nos repères nutritionnels (apports maîtrisés en glucides complexes, protéines de
              qualité et hydratation), avec prise en compte des régimes spécifiques ou allergies.
            </li>
            <li>
              <strong>Horaires flexibles</strong>{" "}: Adaptation des horaires de petit-déjeuner,
              déjeuner et dîner en fonction du calendrier des matchs, des séries sur piste ou des
              créneaux de bassin.
            </li>
            <li>
              <strong>Paniers-repas et collations</strong>{" "}: Préparation de packs énergétiques à
              emporter pour les journées continues de tournoi ou les déplacements.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Proximité &amp; Mobilité Simplifiée</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>À quelques minutes des terrains</strong>{" "}: Nos hébergements partenaires
              sont situés à proximité immédiate du complexe sportif KABSA, du Stade Municipal et du
              centre aquatique afin de limiter la fatigue liée aux trajets.
            </li>
            <li>
              <strong>Transports accessibles</strong>{" "}: Lignes de bus et tramways accessibles à
              pied ou accompagnement logistique pour faciliter les navettes entre l&apos;hôtel et
              les lieux de compétition.
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
          <h3 className="rf-blocktitle">🗓️ Déroulement de l&apos;Accueil d&apos;une Délégation</h3>
          <p className="svc-chapo">
            Une organisation millimétrée, de la réservation jusqu&apos;au départ, pour permettre aux
            équipes de se concentrer à 100 % sur le terrain.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, nous savons que la réussite d&apos;un déplacement sportif
            repose sur une logistique irréprochable. Du premier contact jusqu&apos;au coup de
            sifflet final, un référent dédié coordonne chaque étape du séjour de votre délégation
            (athlètes valides, handisport, sport adapté et encadrement).
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Les 5 Étapes de Votre Séjour chez KABSA
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📞 1. Préparation &amp; Cahier des Charges (En amont du déplacement)
          </h3>
          <p className="lede">
            Dès la validation de votre venue, notre équipe logistique prépare votre accueil sur
            mesure :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Recensement des besoins</strong>{" "}: Évaluation précise du nombre de
              chambres PMR requises, de la répartition des couchages et des besoins spécifiques en
              accessibilité (lits médicalisés, ascenseurs grande capacité, signalétique).
            </li>
            <li>
              <strong>Logistique matérielle et alimentaire</strong>{" "}: Réservation de
              l&apos;espace de stockage sécurisé pour les fauteuils et équipements encombrants,
              planification des horaires de repas et collecte des régimes alimentaires particuliers.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚌 2. Arrivée &amp; Installation sur Site (Jour J)
          </h3>
          <p className="lede">
            À votre arrivée, tout est prêt pour limiter l&apos;attente et la fatigue liée au
            trajet :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accueil personnalisé</strong>{" "}: Un référent KABSA vous accueille
              directement sur le parking réservé aux minibus et véhicules PMR devant
              l&apos;établissement partenaire.
            </li>
            <li>
              <strong>Check-in express et déchargement</strong>{" "}: Remise groupée des clés
              pré-attribuées et aide au déchargement des fauteuils roulants de sport, lames ou sacs
              d&apos;équipement directement vers le local sécurisé au rez-de-chaussée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🥗 3. Vie Quotidienne, Restauration &amp; Briefing (Pendant le séjour)
          </h3>
          <p className="lede">
            Durant toute la durée de la compétition ou du stage, les services s&apos;adaptent au
            rythme sportif de la délégation :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Repas calés sur le calendrier sportif</strong>{" "}: Petits-déjeuners,
              déjeuners et dîners servis aux horaires convenus avec le staff, ou remise de
              paniers-repas énergétiques pour les journées continues de tournoi.
            </li>
            <li>
              <strong>Espaces de travail et de soins</strong>{" "}: Accès libre aux salles de
              réunion équipées (vidéoprojecteur, tableau tactique) pour les causeries
              d&apos;avant-match, ainsi qu&apos;à l&apos;espace dédié aux kinésithérapeutes de votre
              équipe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏟️ 4. Liaisons avec les Sites de Compétition &amp; Assistance Technique
          </h3>
          <p className="lede">
            La coordination entre l&apos;hébergement et les infrastructures sportives est assurée en
            continu :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Transferts fluides</strong>{" "}: Déplacements rapides vers le gymnase, le
              Stade Municipal ou le complexe aquatique situés à proximité immédiate, via des
              itinéraires 100 % accessibles.
            </li>
            <li>
              <strong>Support mécanique sur place</strong>{" "}: Accès à la zone atelier du complexe
              KABSA (compresseurs, outillage spécifique) pour les derniers réglages avant
              l&apos;entrée sur l&apos;aire de jeu.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧳 5. Check-out &amp; Départ de la Délégation
          </h3>
          <p className="lede">
            La fin du séjour est organisée avec la même fluidité que l&apos;arrivée :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Libération des chambres adaptée</strong>{" "}: Possibilité d&apos;aménager les
              horaires de départ (late check-out ou bagagerie sécurisée) selon l&apos;heure de votre
              dernier match ou de votre train/vol.
            </li>
            <li>
              <strong>Bilan et chargement</strong>{" "}: Assistance de nos équipes pour recharger le
              matériel dans vos véhicules et clôture administrative simplifiée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 L&apos;Engagement KABSA pour les Délégations
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un interlocuteur unique</strong>{" "}: Un référent logistique joignable tout
              au long du séjour pour gérer le moindre imprévu (changement d&apos;horaire de match,
              besoin médical, ajustement de repas).
            </li>
            <li>
              <strong>Une tranquillité d&apos;esprit totale</strong>{" "}: La garantie
              d&apos;installations testées et approuvées pour l&apos;accueil des sportifs en
              fauteuil, malvoyants ou ayant des besoins spécifiques.
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
        <h2>Hébergement des délégations</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
