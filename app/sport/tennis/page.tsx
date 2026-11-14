"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function TennisPage() {
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
        <p>Découvrez la section Tennis de KABSA.</p>
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
        <h3>Matchs &amp; tournois</h3>
        <p>Meilleurs moments des tournois et championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Joueurs &amp; joueuses KABSA</h3>
        <p>Parcours des meilleurs joueurs et joueuses.</p>
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
          <h3 className="rf-blocktitle">🎾 Tennis Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié au tennis de l&apos;association KABSA ! Que vous
            soyez un joueur compétiteur dans l&apos;âme, un adepte du jeu en loisir ou une joueuse
            souhaitant reprendre le sport dans une ambiance conviviale, notre section tennis est
            ouverte à toutes et à tous, sans distinction de niveau.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Nos Engagements : Mixité, Performance et Plaisir
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous croyons que le tennis est un formidable vecteur de
            cohésion sociale, de dépassement de soi et de bien-être. Notre section se décline au
            masculin comme au féminin pour répondre aux attentes de chacun :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un accès égal pour tous</strong>{" "}: Des créneaux horaires équitablement
              répartis et des infrastructures de qualité accessibles à nos joueuses et joueurs.
            </li>
            <li>
              <strong>Une ambiance inclusive</strong>{" "}: Un parfait équilibre entre l&apos;esprit de
              compétition et le plaisir de se retrouver sur le court.
            </li>
            <li>
              <strong>Un encadrement de qualité</strong>{" "}: Des entraîneurs diplômés pour vous
              accompagner dans votre progression technique, tactique et physique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👕 La Section Féminine : Dynamisme et Progression
          </h3>
          <p className="lede">
            Le tennis féminin au sein de KABSA est en plein essor ! Nous mettons un point
            d&apos;honneur à créer un environnement bienveillant et stimulant.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Formules</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tennis Loisir &amp; Fit&apos;Tennis</strong>{" "}: Pour allier cardio,
              renforcement musculaire et plaisir du jeu, sans la pression du résultat.
            </li>
            <li>
              <strong>Cours Collectifs d&apos;Évolution</strong>{" "}: Des séances par groupes de niveau
              pour perfectionner vos coups (coup droit, revers, service) et votre placement.
            </li>
            <li>
              <strong>Pôle Compétition</strong>{" "}: Pour les joueuses souhaitant intégrer nos équipes
              engagées dans les championnats locaux et régionaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏃‍♂️ La Section Masculine : Intensité et Convivialité
          </h3>
          <p className="lede">
            De l&apos;initiation aux matchs à haute intensité, la section masculine propose des
            programmes adaptés au rythme et aux objectifs de chaque joueur.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Formules</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Entraînements Tactiques &amp; Physiques</strong>{" "}: Des séances axées sur la
              stratégie de jeu, la gestion des moments forts et l&apos;endurance sur le court.
            </li>
            <li>
              <strong>Championnats &amp; Défis Internes</strong>{" "}: Un système de tournois internes
              et de « pyramides » pour se challenger entre membres tout au long de l&apos;année.
            </li>
            <li>
              <strong>Tennis Loisir</strong>{" "}: Des créneaux libres pour échanger des balles entre
              amis ou rencontrer de nouveaux partenaires de jeu.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Le Double Mixte : Le Cœur de notre Vie Associative
          </h3>
          <p className="lede">
            Parce que le tennis est aussi un sport de partage, nous organisons régulièrement des
            sessions et tournois de double mixte. C&apos;est l&apos;occasion idéale pour mélanger
            les sections, renforcer les liens entre les membres et partager un moment festif autour
            de la petite balle jaune.
          </p>
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
          <h3 className="rf-blocktitle">📅 Planning et Inscriptions</h3>
          <p className="lede">
            Les entraînements et sessions libres se déroulent du lundi au dimanche sur nos courts
            (intérieurs et extérieurs). Horaires et tarifs communiqués à l&apos;inscription.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              Bénéficiez d&apos;une séance d&apos;essai gratuite pour découvrir l&apos;ambiance du
              club.
            </li>
            <li>Remplissez votre formulaire d&apos;adhésion en ligne en quelques clics.</li>
          </ul>
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
            📍 Accessibilité &amp; Pratique : Tout ce qu&apos;il faut savoir avant de jouer
          </h3>
          <p className="lede">
            Chez KABSA, nous mettons tout en œuvre pour que votre expérience sportive soit simple,
            fluide et agréable dès votre arrivée au club. Retrouvez ici toutes les informations
            utiles pour rejoindre nos courts intérieurs et extérieurs en toute sérénité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Un Club Ouvert et Accessible à Tous</h3>
          <p className="lede">
            Parce que la mixité et l&apos;inclusion sont au cœur de nos engagements, nos
            installations sont pensées pour accueillir chaque pratiquant dans les meilleures
            conditions :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accès PMR (Personnes à Mobilité Réduite)</strong>{" "}: L&apos;ensemble de nos
              infrastructures (accueil, vestiaires, sanitaires et accès aux courts) est de
              plain-pied et dispose d&apos;équipements adaptés.
            </li>
            <li>
              <strong>Accueil de tous les publics</strong>{" "}: Que vous veniez en famille, entre
              amis ou en solo, nos espaces de vie et notre club-house sont ouverts à tous pour
              partager un moment convivial avant ou après l&apos;effort.
            </li>
            <li>
              <strong>Prêt de matériel</strong>{" "}: Vous débutez ou avez oublié votre équipement ?
              Nous mettons à votre disposition des raquettes et des balles pour votre séance
              d&apos;essai gratuite ou vos premières sessions.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚆 Comment Venir ? (Accès &amp; Transports)
          </h3>
          <p className="lede">
            Notre complexe sportif est facilement accessible, quel que soit votre mode de
            déplacement :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>En transports en commun</strong>{" "}: arrêt de bus / métro / tramway
              communiqué au secrétariat, à quelques minutes à pied des courts.
            </li>
            <li>
              <strong>En voiture</strong>{" "}: Un parking gratuit et sécurisé est réservé aux
              membres du club juste devant l&apos;entrée principale (avec places dédiées PMR et
              bornes de recharge électrique).
            </li>
            <li>
              <strong>À vélo</strong>{" "}: Des arceaux sécurisés sont installés à l&apos;entrée du
              complexe pour stationner votre vélo en toute tranquillité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👟 Infos Pratiques &amp; Bonnes Habitudes
          </h3>
          <p className="lede">
            Pour préserver la qualité de nos surfaces de jeu et garantir la sécurité de chacun sur
            le terrain :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tenue adaptée</strong>{" "}: Le port de chaussures de tennis propres (semelles
              non marquantes, adaptées à la surface) est obligatoire sur l&apos;ensemble des courts.
            </li>
            <li>
              <strong>Réservation des terrains</strong>{" "}: Pour vos créneaux de Tennis Loisir,
              réservez votre court en quelques clics depuis votre espace membre en ligne.
            </li>
            <li>
              <strong>Horaires d&apos;ouverture</strong>{" "}: Le club vous accueille du lundi au
              dimanche (horaires communiqués à l&apos;inscription).
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
          <h3 className="rf-blocktitle">🏟️ Nos Infrastructures et Équipements</h3>
          <p className="lede">
            Pour vous permettre de jouer toute l&apos;année, quelle que soit la météo,
            l&apos;association KABSA dispose d&apos;installations modernes et entretenues :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Courts intérieurs et extérieurs</strong>{" "}: Profitez de terrains couverts
              chauffés et éclairés pour la saison hivernale, ainsi que de courts en plein air pour
              les beaux jours.
            </li>
            <li>
              <strong>Vestiaires et douches</strong>{" "}: Des espaces propres, sécurisés et équipés
              de casiers individuels sont à votre disposition (pensez à apporter votre cadenas).
            </li>
            <li>
              <strong>Espace détente / Club-house</strong>{" "}: Un lieu chaleureux pour débriefer
              vos matchs, vous rafraîchir et participer à la vie associative du club.
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
            🎾 Types d&apos;Entraînement : Une Approche Adaptée à Vos Objectifs
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous savons que chaque joueur et chaque joueuse a ses
            propres envies. Que vous souhaitiez découvrir la petite balle jaune, retrouver la forme
            physique ou préparer vos prochains tournois, nos entraîneurs diplômés vous proposent des
            formats variés et évolutifs.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌱 L&apos;Initiation et la Découverte (Débutants)
          </h3>
          <p className="lede">
            Vous n&apos;avez jamais tenu une raquette ou vous reprenez après une longue pause ? Ce
            programme est fait pour vous donner confiance rapidement, sans pression :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les bases techniques</strong>{" "}: Apprentissage ludique des coups
              fondamentaux (coup droit, revers, service et volée) et du jeu de jambes.
            </li>
            <li>
              <strong>Compréhension du jeu</strong>{" "}: Maîtrise des règles, du comptage des
              points et des premiers échanges en situation réelle.
            </li>
            <li>
              <strong>Pédagogie adaptée</strong>{" "}: Utilisation de balles intermédiaires si
              nécessaire pour favoriser les échanges longs et le plaisir immédiat.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📈 Les Cours Collectifs d&apos;Évolution (Tous Niveaux)
          </h3>
          <p className="lede">
            Organisés par petits groupes homogènes (4 à 6 joueurs maximum par court), ces
            entraînements hebdomadaires visent une progression régulière et structurée :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Perfectionnement technique</strong>{" "}: Travail sur la régularité, la
              précision, la puissance et les effets (lift, slice).
            </li>
            <li>
              <strong>Sens tactique</strong>{" "}: Apprendre à construire son point, varier les
              zones de jeu et identifier les points faibles de l&apos;adversaire.
            </li>
            <li>
              <strong>Mises en situation</strong>{" "}: Alternance entre exercices ciblés (« paniers
              de balles ») et matchs à thèmes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 Le Pôle Compétition (Joueurs &amp; Joueuses Engagés)
          </h3>
          <p className="lede">
            Destiné aux membres souhaitant représenter les couleurs de KABSA en championnats
            individuels ou par équipes, ce format met l&apos;accent sur l&apos;intensité et la
            performance :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Stratégie de match</strong>{" "}: Gestion des points importants, adaptation
              face à différents styles de jeu et préparation aux matchs en double.
            </li>
            <li>
              <strong>Préparation physique spécifique</strong>{" "}: Travail d&apos;explosivité,
              d&apos;endurance sur le court et de prévention des blessures.
            </li>
            <li>
              <strong>Préparation mentale</strong>{" "}: Gestion du stress, concentration et routine
              entre les points.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚡ Le Fit&apos;Tennis &amp; Cardio-Tennis (Forme &amp; Dépense)
          </h3>
          <p className="lede">
            Envie de vous dépenser un maximum en musique et dans la bonne humeur ? Le
            Fit&apos;Tennis transforme le court en véritable salle de fitness à ciel ouvert :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Zéro pression de résultat</strong>{" "}: L&apos;objectif n&apos;est pas la
              technique pure, mais le mouvement continu et le dépassement de soi.
            </li>
            <li>
              <strong>Séances rythmées</strong>{" "}: Enchaînement de frappes rapides,
              d&apos;ateliers d&apos;agilité et de renforcement musculaire.
            </li>
            <li>
              <strong>Convivialité garantie</strong>{" "}: Une ambiance collective ultra-motivante,
              idéale pour évacuer le stress de la journée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Les Cours Individuels ou en Duo (Sur-Mesure)
          </h3>
          <p className="lede">
            Pour débloquer un coup précis, accélérer votre progression ou bénéficier d&apos;un suivi
            100 % personnalisé :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Diagnostic précis</strong>{" "}: Analyse détaillée de votre gestuelle et de
              vos déplacements avec votre coach.
            </li>
            <li>
              <strong>Flexibilité totale</strong>{" "}: Créneaux planifiés à la carte selon vos
              disponibilités et vos objectifs personnels.
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
        <h2>Tennis</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
