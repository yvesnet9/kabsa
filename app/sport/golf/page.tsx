"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function GolfPage() {
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
      { threshold: 0.12 }
    );
    document.querySelectorAll(".kabsa .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mediaColumn = (
    <aside className="disc-media">
      <div className="info-card">
        <h3>Présentation</h3>
        <p>Découvrez la section Golf de KABSA.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Exercices techniques, tactiques et préparation physique.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts et coulisses du club.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Compétitions &amp; tournois</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Golfeurs &amp; golfeuses KABSA</h3>
        <p>Parcours des meilleurs golfeurs et golfeuses.</p>
        <VideoSlot />
      </div>
    </aside>
  );

  const contactCta = (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
      <Link href="/contact" className="info-cta">
        Nous contacter
      </Link>
    </div>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">⛳ Golf Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié au golf chez KABSA. Que vous soyez un joueur
            chevronné à la recherche de compétition ou une débutante désireuse d&apos;apprendre les
            bases de ce sport passionnant, notre section Golf vous propose un encadrement adapté,
            des événements conviviaux et une communauté passionnée.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Section Masculine : Performance &amp; Camaraderie
          </h3>
          <p className="lede">
            La section masculine de KABSA rassemble des golfeurs de tous horizons autour de valeurs
            de dépassement de soi et de convivialité. Nous organisons des activités régulières pour
            permettre à chacun de progresser à son rythme.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Entraînements et Clinics</strong>{" "}: Des sessions collectives animées par des
              professionnels pour perfectionner votre swing, votre putting et votre stratégie de
              parcours.
            </li>
            <li>
              <strong>Compétitions Internes</strong>{" "}: Participez à nos tournois mensuels (Stroke
              Play, Stableford, Match Play) adaptés à tous les index.
            </li>
            <li>
              <strong>Rencontres Interclubs</strong>{" "}: Représentez les couleurs de KABSA lors de
              rencontres amicales et de championnats régionaux contre d&apos;autres associations.
            </li>
            <li>
              <strong>Sorties « Découverte »</strong>{" "}: Des voyages et des week-ends golfiques
              organisés pour fouler les plus beaux parcours du pays.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👑 Section Féminine : Dynamisme &amp; Partage
          </h3>
          <p className="lede">
            Le golf au féminin est en plein essor chez KABSA ! Notre section offre un environnement
            bienveillant, stimulant et chaleureux pour encourager la pratique du golf chez les
            femmes, quel que soit leur niveau.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ladies&apos; Days</strong>{" "}: Des journées exclusivement réservées aux
              joueuses, combinant parcours de golf, ateliers thématiques et moments de réseautage
              (lunchs, networking).
            </li>
            <li>
              <strong>Programmes d&apos;Initiation</strong>{" "}: Des formules « Débutante » pour
              apprendre le golf sans pression, incluant le prêt de matériel et l&apos;accès
              accompagné au parcours.
            </li>
            <li>
              <strong>Ateliers Confiance</strong>{" "}: Sessions spécifiques pour vaincre
              l&apos;appréhension des bunkers, optimiser le jeu court et maîtriser les Règles
              Officielles du Golf.
            </li>
            <li>
              <strong>Trophée Féminin KABSA</strong>{" "}: Notre grand rendez-vous annuel qui célèbre le
              talent, l&apos;élégance et la sportivité de nos membres féminines.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏆 Événements Mixtes &amp; Vie du Club</h3>
          <p className="lede">
            Parce que le golf est avant tout un sport de partage, KABSA met un point d&apos;honneur
            à organiser des événements mixtes où hommes et femmes partagent la même passion.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Scramble en Double Mixte</strong>{" "}: Une formule de jeu ludique et stratégique
              où la cohésion d&apos;équipe fait toute la différence.
            </li>
            <li>
              <strong>Le Grand Prix KABSA</strong>{" "}: Le point d&apos;orgue de notre saison sportive,
              ouvert à tous les membres, suivi d&apos;un dîner de gala et de la remise des prix.
            </li>
            <li>
              <strong>Sorties de Rentrée et de Fin d&apos;Année</strong>{" "}: Des journées conviviales
              pour célébrer les réussites de la saison.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>

      {contactCta}
    </>
  );

  const horairesTarifsContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🛠️ Informations Pratiques &amp; Inscriptions</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Comment nous rejoindre ?</strong>{" "}L&apos;adhésion à la section Golf est
              ouverte à tous les membres de l&apos;association KABSA.
            </li>
            <li>
              <strong>Licence et Handicap</strong>{" "}: Nous vous accompagnons dans les démarches
              administratives pour l&apos;obtention de votre licence et le suivi de votre index
              (système de calcul WHS).
            </li>
            <li>
              <strong>Partenariats</strong>{" "}: Profitez de tarifs préférentiels sur les green fees de
              nos clubs partenaires et des réductions exclusives dans plusieurs pro-shops de la
              région.
            </li>
          </ul>
          <p className="lede">Horaires et tarifs communiqués à l&apos;inscription.</p>
          {contactCta}
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const accessibiliteContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            ♿ Accessibilité &amp; Pratique : Le golf ouvert à tous chez KABSA
          </h3>
          <p className="lede">
            Chez KABSA, nous sommes convaincus que le golf est un sport universel qui doit rester
            accessible à chacun, quels que soient son âge, sa condition physique ou son budget.
            Notre section met tout en œuvre pour lever les freins à la pratique et vous permettre de
            vivre votre passion en toute sérénité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Handigolf &amp; Adaptation de la pratique
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accompagnement personnalisé</strong>{" "}: Nos enseignants qualifiés adaptent
              leur pédagogie aux besoins spécifiques des joueurs en situation de handicap moteur,
              sensoriel ou mental.
            </li>
            <li>
              <strong>Équipement adapté</strong>{" "}: Nous facilitons l&apos;accès à du matériel
              spécifique et à des voiturettes (golfettes) sur nos parcours partenaires pour garantir
              le confort et l&apos;autonomie de chacun.
            </li>
            <li>
              <strong>Règles inclusives</strong>{" "}: Nous intégrons pleinement les aménagements
              prévus par les Règles Officielles du Golf pour les joueurs en situation de handicap
              lors de nos événements et compétitions internes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎒 Démarrer sans contrainte matérielle ni financière
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prêt et location d&apos;équipement</strong>{" "}: Inutile d&apos;investir
              immédiatement dans une série complète pour débuter. KABSA met des clubs et des balles
              à disposition lors des séances d&apos;initiation et propose des solutions de location
              avantageuses pour vos premiers parcours.
            </li>
            <li>
              <strong>Formules « Découverte » à tarifs doux</strong>{" "}: Nos cycles
              d&apos;initiation sont pensés pour offrir un accès progressif et abordable à la
              discipline, sans droit d&apos;entrée prohibitif.
            </li>
            <li>
              <strong>Accès facilité aux infrastructures</strong>{" "}: Grâce à nos accords avec les
              clubs partenaires de la région, nos membres bénéficient de tarifs préférentiels sur
              les green fees, les seaux de balles de practice et l&apos;accès aux zones
              d&apos;entraînement.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📅 Souplesse et organisation au quotidien
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Créneaux adaptés à tous les rythmes</strong>{" "}: Que vous soyez actif,
              étudiant ou retraité, nos entraînements et nos sorties sont répartis en semaine et le
              week-end pour s&apos;intégrer facilement à votre emploi du temps.
            </li>
            <li>
              <strong>Covoiturage et entraide</strong>{" "}: Parce que les golfs sont parfois
              excentrés, notre communauté organise régulièrement des trajets partagés pour faciliter
              vos déplacements vers les terrains d&apos;entraînement et les compétitions.
            </li>
            <li>
              <strong>Suivi administratif simplifié</strong>{" "}: De la prise de licence à
              l&apos;obtention de votre carte verte ou au suivi de votre index (système WHS), notre
              équipe vous guide pas à pas dans toutes vos démarches.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const infrastructuresContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🏟️ Infrastructures : Des terrains d&apos;exception pour votre passion
          </h3>
          <p className="lede">
            Pour vous offrir les meilleures conditions de jeu et d&apos;entraînement tout au long de
            l&apos;année, la section Golf de KABSA s&apos;appuie sur un réseau de clubs partenaires
            reconnus et des équipements modernes adaptés à tous les niveaux.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">⛳ Nos Parcours Partenaires</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Parcours 18 trous de championnat</strong>{" "}: Profitez d&apos;un accès
              privilégié à des tracés techniques et variés pour relever de beaux défis sportifs et
              préparer vos compétitions officielles.
            </li>
            <li>
              <strong>Parcours compacts et 9 trous</strong>{" "}: Idéals pour les débutants
              souhaitant faire leurs premières armes ou pour les joueurs confirmés désireux de
              travailler leur précision sur un format plus court.
            </li>
            <li>
              <strong>Tarifs préférentiels membres</strong>{" "}: Grâce aux conventions signées par
              KABSA, bénéficiez de réductions exclusives sur vos green fees et d&apos;un accès
              facilité aux réservations de départs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Zones d&apos;Entraînement et Perfectionnement
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Practices couverts et éclairés</strong>{" "}: Entraînez-vous par tous les
              temps et en toute saison grâce à des postes de frappe abrités et équipés de tapis de
              haute qualité.
            </li>
            <li>
              <strong>Zones de petit jeu dédiées</strong>{" "}: Perfectionnez votre toucher de balle
              sur de vastes putting greens, des zones d&apos;approches roulées ou levées, ainsi que
              des bunkers d&apos;entraînement entretenus avec soin.
            </li>
            <li>
              <strong>Outils d&apos;analyse technologique</strong>{" "}: Lors de nos clinics
              encadrés par des professionnels, bénéficiez d&apos;analyses vidéo et de radars de
              trajectoire (type TrackMan) pour décortiquer votre swing et gagner en régularité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🥂 Club-House &amp; Services sur Place</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Espaces de convivialité</strong>{" "}: Après l&apos;effort, retrouvez
              l&apos;esprit KABSA autour d&apos;un verre ou d&apos;un repas dans les club-houses
              chaleureux de nos golfs partenaires.
            </li>
            <li>
              <strong>Vestiaires et bagageries</strong>{" "}: Disposez d&apos;installations
              confortables et sécurisées pour vous changer et entreposer votre matériel lors de nos
              journées d&apos;événements.
            </li>
            <li>
              <strong>Pro-shops partenaires</strong>{" "}: Accédez directement sur place à une large
              gamme d&apos;équipements, de textiles et de consommables (balles, gants, tees) avec
              des remises réservées aux adhérents KABSA.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const typeEntrainementContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🏌️ Types d&apos;Entraînement : Progressez à votre rythme avec KABSA
          </h3>
          <p className="lede">
            Que vous souhaitiez découvrir les fondamentaux du swing, abaisser votre index ou affûter
            votre mental avant un tournoi, la section Golf de KABSA propose des formules
            d&apos;entraînement variées. Toutes nos séances sont encadrées par des enseignants
            diplômés dans une ambiance stimulante et conviviale.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌱 Cycles d&apos;Initiation et Découverte (Débutants)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prise en main et posture</strong>{" "}: Apprenez les bases essentielles du
              grip, de l&apos;alignement et de l&apos;équilibre pour construire un geste fluide dès
              vos premières balles.
            </li>
            <li>
              <strong>Préparation à la Carte Verte</strong>{" "}: Suivez un programme progressif
              mêlant technique, étiquette et règles de sécurité pour valider votre autonomie sur le
              parcours en toute confiance.
            </li>
            <li>
              <strong>Mises en situation réelles</strong>{" "}: Passez rapidement du practice au
              terrain grâce à des séances d&apos;accompagnement sur parcours compact ou 9 trous.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Entraînements Collectifs et Thématiques (Tous niveaux)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ateliers Grand Jeu</strong>{" "}: Travaillez la régularité et la distance avec
              vos fers, vos bois et votre driver pour sécuriser vos mises en jeu.
            </li>
            <li>
              <strong>Spécial Petit Jeu et Putting</strong>{" "}: Consacrez des sessions dédiées aux
              approches roulées, aux coups levés (chipping et pitching), aux sorties de bunker et à
              la lecture des pentes sur le green.
            </li>
            <li>
              <strong>Clinics de Perfectionnement</strong>{" "}: Participez à des stages intensifs
              sur une demi-journée ou un week-end pour corriger un point technique précis grâce à
              l&apos;analyse vidéo et aux outils de mesure de trajectoire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 Coaching Compétition et Stratégie (Joueurs confirmés)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Gestion de parcours (Course Management)</strong>{" "}: Apprenez à élaborer un
              plan de jeu intelligent, à choisir le bon club selon les conditions et à éviter les
              zones à risque.
            </li>
            <li>
              <strong>Préparation mentale et routine</strong>{" "}: Développez une routine
              d&apos;avant-coup solide pour mieux gérer la pression lors des tournois officiels et
              des rencontres interclubs.
            </li>
            <li>
              <strong>Entraînements en conditions de tournoi</strong>{" "}: Mettez vos acquis à
              l&apos;épreuve lors de parties d&apos;entraînement scénarisées (départs sous pression,
              défis de précision et formats Match Play).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ❄️ Entraînement Hivernal et Préparation Physique
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Séances Indoor et Simulateurs</strong>{" "}: Maintenez votre rythme de jeu
              durant l&apos;hiver grâce à des sessions sur simulateur permettant de jouer les plus
              grands parcours du monde au chaud.
            </li>
            <li>
              <strong>Renforcement spécifique au golf</strong>{" "}: Participez à des ateliers de
              mobilité, de gainage et de souplesse pour gagner en amplitude de rotation et prévenir
              les blessures.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "accessibilite", label: "Accessibilité & pratique", content: accessibiliteContent },
    { id: "infrastructures", label: "Infrastructures", content: infrastructuresContent },
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: horairesTarifsContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: typeEntrainementContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Golf</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
