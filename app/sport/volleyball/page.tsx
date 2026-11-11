"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function VolleyballPage() {
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
        <p>Découvrez les sections Volleyball de KABSA.</p>
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
        <h3>Matchs &amp; compétitions</h3>
        <p>Meilleurs moments des championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Stars joueurs KABSA</h3>
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
          <h3 className="rf-blocktitle">🏐 Volleyball Masculin &amp; Féminin</h3>
          <p className="lede">
            Le volleyball chez KABSA, c&apos;est l&apos;alliance parfaite entre esprit
            d&apos;équipe, dynamisme et convivialité. Que vous soyez un joueur expérimenté à la
            recherche de compétition ou un débutant souhaitant découvrir les bases de ce sport
            collectif sans contact, nos sections masculine et féminine vous ouvrent leurs portes.
            Rejoignez une communauté passionnée où le respect, l&apos;entraide et le dépassement de
            soi sont au cœur du jeu !
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏐 Nos Sections</h3>
          <h4 className="rf-blocktitle">🤝 Volleyball Féminin</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour qui ?</strong>{" "}Ouvert aux joueuses de tous niveaux (débutantes,
              intermédiaires, confirmées).
            </li>
            <li>
              <strong>L&apos;esprit</strong>{" "}: Un groupe soudé qui progresse ensemble, axé sur la
              technique, la communication sur le terrain et le plaisir de jouer.
            </li>
            <li>
              <strong>Objectifs</strong>{" "}: Développer la cohésion d&apos;équipe, perfectionner les
              systèmes de jeu (3 touches de balle, construction de l&apos;attaque) et participer à
              des rencontres amicales ou des championnats locaux.
            </li>
          </ul>
          <h4 className="rf-blocktitle">🔥 Volleyball Masculin</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour qui ?</strong>{" "}Ouvert aux joueurs de tous niveaux (loisir et
              compétition).
            </li>
            <li>
              <strong>L&apos;esprit</strong>{" "}: Intensité, dépassement athlétique et rigueur
              tactique, le tout dans une ambiance de franche camaraderie.
            </li>
            <li>
              <strong>Objectifs</strong>{" "}: Travail de la puissance (services, smashs), de la
              réactivité en défense (contres, réceptions) et engagement dans les compétitions de la
              saison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Pourquoi choisir le volley à l&apos;association KABSA ?
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un encadrement de qualité</strong>{" "}: Des entraînements structurés pour
              progresser techniquement (passes, manchettes, attaques).
            </li>
            <li>
              <strong>Une mixité de pratiques</strong>{" "}: Du loisir pur pour se détendre aux matchs
              compétitifs pour vibrer le week-end.
            </li>
            <li>
              <strong>Au-delà du sport</strong>{" "}: Des événements club, des tournois internes et des
              moments de partage après l&apos;effort.
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
          <p className="lede">
            <strong>📅 Infos Pratiques &amp; Horaires</strong>{" "}: horaires communiqués à
            l&apos;inscription.
          </p>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚀 Prêt à fouler les terrains avec nous ?
          </h3>
          <p className="lede">
            <em>Profitez d&apos;une séance d&apos;essai gratuite !</em>{" "}Vous hésitez encore ? Venez
            tester un entraînement sans aucun engagement. Munissez-vous simplement de vos baskets
            d&apos;intérieur et de votre bonne humeur.
          </p>
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
          <h3 className="rf-blocktitle">♿ Accessibilité &amp; Pratique</h3>
          <p className="lede">
            Le volleyball chez KABSA est accessible à tous, quels que soient votre profil, votre
            budget ou votre niveau. Découvrez ci-dessous toutes les informations pratiques pour nous
            rejoindre et fouler les terrains dans les meilleures conditions.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">👥 Pour qui ? (Niveaux &amp; Publics)</h3>
          <p className="lede">
            Notre club se veut inclusif et propose des créneaux adaptés aux attentes de chacun :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Débutants</strong>{" "}: Pour apprendre les bases techniques (passes,
              manchettes, services) sans aucune pression.
            </li>
            <li>
              <strong>Intermédiaires &amp; Loisirs</strong>{" "}: Pour pratiquer un volley fluide,
              axé sur le plaisir du jeu, la cohésion et les matchs amicaux.
            </li>
            <li>
              <strong>Compétiteurs (Masculin &amp; Féminin)</strong>{" "}: Pour les joueurs
              expérimentés souhaitant s&apos;engager dans les championnats locaux, travailler la
              tactique et l&apos;intensité athlétique.
            </li>
            <li>
              <strong>Pratique Mixte</strong>{" "}: Un créneau idéal le week-end pour mélanger les
              talents et jouer dans une ambiance conviviale.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🎒 Équipement requis</h3>
          <p className="lede">
            Pour participer aux entraînements, la panoplie du volleyeur est simple :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Chaussures de sport d&apos;intérieur</strong>{" "}: Obligatoires (semelles
              propres et non marquantes pour préserver le parquet du gymnase).
            </li>
            <li>
              <strong>Tenue de sport confortable</strong>{" "}: Un t-shirt et un short ou jogging.
            </li>
            <li>
              <strong>Genouillères de volley</strong>{" "}: Fortement recommandées (notamment pour
              les plongeons et la réactivité en défense).
            </li>
            <li>
              <strong>Gourde ou bouteille d&apos;eau</strong>{" "}: Indispensable pour rester
              hydraté pendant les deux heures de session.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Accessibilité des infrastructures</h3>
          <p className="lede">
            L&apos;association KABSA s&apos;efforce d&apos;accueillir tous les publics :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Mobilité réduite</strong>{" "}: Notre gymnase partenaire dispose d&apos;un
              accès de plain-pied, de portes larges et de sanitaires adaptés aux personnes à
              mobilité réduite (PMR).
            </li>
            <li>
              <strong>Transports &amp; Parking</strong>{" "}: L&apos;établissement est desservi par
              les transports en commun (arrêt communiqué au secrétariat) et possède un parking
              gratuit ainsi qu&apos;un local à vélos sécurisé.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">📝 Tarifs &amp; Inscriptions</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Séance d&apos;essai</strong>{" "}: La première séance est entièrement gratuite
              et sans engagement.
            </li>
            <li>
              <strong>Cotisation annuelle</strong>{" "}: tarif communiqué à l&apos;inscription
              (comprend l&apos;accès aux entraînements, la licence de la fédération et
              l&apos;assurance).
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
          <h3 className="rf-blocktitle">🏛️ Nos Infrastructures</h3>
          <p className="lede">
            L&apos;association KABSA bénéficie d&apos;installations sportives de qualité pour vous
            permettre de pratiquer le volleyball dans les meilleures conditions de confort et de
            sécurité. Que ce soit pour un entraînement technique, un match de loisir ou une
            compétition intense, découvrez le lieu qui accueille notre communauté.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">🏛️ Le Gymnase partenaire</h3>
          <p className="lede">
            Tous nos créneaux horaires (sections masculine, féminine et pratique mixte) se déroulent
            au sein d&apos;un complexe moderne et parfaitement équipé.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un sol de qualité supérieure</strong>{" "}: Un revêtement adapté (parquet ou
              résine amortissante) qui préserve les articulations lors des sauts, des smashs et des
              réceptions dynamiques.
            </li>
            <li>
              <strong>Des équipements réglementaires</strong>{" "}: Des poteaux et filets de
              volleyball professionnels réglables, permettant d&apos;ajuster la hauteur officielle
              pour les sections masculines (2,43 m) et féminines (2,24 m).
            </li>
            <li>
              <strong>Éclairage et confort</strong>{" "}: Un système d&apos;éclairage LED moderne
              pour une visibilité optimale lors des entraînements en soirée, ainsi qu&apos;un
              chauffage régulé durant l&apos;hiver.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🚿 Vestiaires et Commodités</h3>
          <p className="lede">
            Pour votre confort avant et après l&apos;effort, le complexe met à disposition :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Vestiaires séparés</strong>{" "}: Des espaces de change collectifs non mixtes
              (hommes / femmes) spacieux et sécurisés.
            </li>
            <li>
              <strong>Douches collectives</strong>{" "}: Des installations sanitaires avec eau
              chaude accessibles à la fin de chaque séance pour un moment de récupération.
            </li>
            <li>
              <strong>Zones de rangement</strong>{" "}: Des casiers ou des espaces dédiés dans
              l&apos;enceinte du gymnase pour déposer vos sacs de sport en toute tranquillité.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Localisation et Accès</h3>
          <ul className="lede disc-arrow-list">
            <li><strong>Adresse</strong>{" "}: communiquée à l&apos;inscription.</li>
            <li>
              <strong>En transports en commun</strong>{" "}: lignes et arrêt communiqués au
              secrétariat.
            </li>
            <li>
              <strong>En voiture ou deux-roues</strong>{" "}: le gymnase dispose d&apos;un parking
              gratuit réservé aux usagers ainsi que d&apos;un grand rack à vélos/trottinettes à
              l&apos;entrée du bâtiment.
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
          <h3 className="rf-blocktitle">🏐 Nos Types d&apos;Entraînement</h3>
          <p className="lede">
            Chez KABSA, chaque entraînement est structuré pour allier progression technique,
            intensité physique et plaisir du jeu. Nos séances d&apos;une durée de 2 heures sont
            encadrées et adaptées aux objectifs de chaque section. Découvrez comment se déroulent
            nos sessions selon votre profil.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 La structure d&apos;une séance type</h3>
          <p className="lede">
            Peu importe le créneau, nos entraînements suivent une progression logique pour garantir
            la sécurité et la performance des joueurs :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;Échauffement (20-30 min)</strong>{" "}: Réveil musculaire, exercices de
              réactivité, cardio léger et étirements dynamiques. Une attention particulière est
              portée aux articulations sollicitées au volley (épaules, poignets, chevilles, genoux).
            </li>
            <li>
              <strong>Les Ateliers Techniques (45 min)</strong>{" "}: Exercices ciblés et répétitifs
              pour maîtriser le geste parfait (touches de balle, manchettes, services, smashs).
            </li>
            <li>
              <strong>Le Travail Tactique (30 min)</strong>{" "}: Mise en place des systèmes de jeu,
              apprentissage du placement en défense (contres, réceptions) et construction des phases
              d&apos;attaque.
            </li>
            <li>
              <strong>Le Match d&apos;Application / Match amical (20 min)</strong>{" "}: Pratique en
              conditions réelles pour appliquer les notions du jour dans une ambiance compétitive ou
              conviviale.
            </li>
            <li>
              <strong>Le Retour au calme (5 min)</strong>{" "}: Étirements légers, hydratation et
              debriefing de la séance avec l&apos;entraîneur.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🔥 Focus par Section</h3>
          <h4 className="rf-blocktitle">🤝 Volleyball Féminin : Progression &amp; Cohésion</h4>
          <ul className="lede disc-arrow-list">
            <li><strong>Public</strong>{" "}: Joueuses de tous niveaux.</li>
            <li>
              <strong>Axe principal</strong>{" "}: Un apprentissage progressif basé sur la fluidité
              et la communication collective.
            </li>
            <li>
              <strong>Contenu des séances</strong>{" "}: L&apos;accent est mis sur la précision de
              la passe, la maîtrise des 3 touches de balle obligatoires pour construire une attaque
              propre et la mise en place de systèmes de jeu collectifs solides.
            </li>
          </ul>
          <h4 className="rf-blocktitle">⚡ Volleyball Masculin : Intensité &amp; Tactique</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Public</strong>{" "}: Joueurs axés sur le loisir avancé et la compétition.
            </li>
            <li>
              <strong>Axe principal</strong>{" "}: Le développement de la puissance et de la rigueur
              stratégique.
            </li>
            <li>
              <strong>Contenu des séances</strong>{" "}: Ateliers intensifs axés sur la force de
              frappe (smashs, services tendus ou smashés) et sur la vitesse de réaction en défense
              (contre au filet et plongeons de récupération).
            </li>
          </ul>
          <h4 className="rf-blocktitle">🎈 Pratique Mixte / Loisir : Plaisir &amp; Détente</h4>
          <ul className="lede disc-arrow-list">
            <li><strong>Public</strong>{" "}: Tout public, idéal pour décompresser le week-end.</li>
            <li>
              <strong>Axe principal</strong>{" "}: L&apos;accessibilité, le partage et la
              convivialité.
            </li>
            <li>
              <strong>Contenu des séances</strong>{" "}: Un échauffement rapide suivi
              d&apos;ateliers techniques simplifiés, laissant une très grande place au jeu libre et
              aux mini-tournois internes.
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
        <h2>Volleyball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
