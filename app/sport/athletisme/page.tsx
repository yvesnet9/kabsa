"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function AthletismePage() {
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
        <p>Découvrez la section Athlétisme de KABSA.</p>
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
        <h3>Compétitions</h3>
        <p>Meilleurs moments des courses et meetings.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Athlètes KABSA</h3>
        <p>Parcours des meilleurs athlètes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">
            🏃‍♂️ Athlétisme (Toutes Formes) — Masculin &amp; Féminin
          </h3>
          <p className="lede">
            Bienvenue dans la section Athlétisme de la KABSA ! Que vous cherchiez à repousser vos
            limites en compétition, à garder la forme ou simplement à partager le plaisir de courir,
            notre club accueille les femmes et les hommes de tous âges et de tous niveaux.
            L&apos;athlétisme à la KABSA, c&apos;est la diversité des disciplines alliée à un esprit
            de camaraderie unique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">👟 Nos Différentes Pratiques</h3>
          <p className="lede">
            Pour que chacun trouve sa voie, nous déclinons l&apos;athlétisme sous toutes ses formes
            :
          </p>
          <h4 className="rf-blocktitle">1. L&apos;Athlétisme sur Piste (Stade)</h4>
          <p className="lede">
            Le cœur historique de notre discipline pour les amateurs de performance et de technique.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Courses</strong>{" "}: Sprint (100m, 200m, 400m), haies, demi-fond (800m, 1500m)
              et fond (5000m, 10 000m).
            </li>
            <li><strong>Sauts</strong>{" "}: Longueur, triple saut, hauteur et perche.</li>
            <li><strong>Lancers</strong>{" "}: Poids, disque, javelot et marteau.</li>
          </ul>
          <h4 className="rf-blocktitle">2. Le Hors-Stade &amp; Running</h4>
          <p className="lede">
            Pour le plaisir de courir en pleine nature ou sur route, en groupe et à votre rythme.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Courses sur route</strong>{" "}: Du 10 km au marathon, pour tous les défis.
            </li>
            <li>
              <strong>Trail &amp; Nature</strong>{" "}: Sorties en forêt, courses nature et dénivelés
              pour les amoureux des grands espaces.
            </li>
            <li>
              <strong>Cross-Country</strong>{" "}: La discipline hivernale par excellence pour renforcer
              le mental et l&apos;endurance.
            </li>
          </ul>
          <h4 className="rf-blocktitle">3. L&apos;Athlétisme Santé &amp; Forme</h4>
          <p className="lede">
            Parce que le sport est avant tout un vecteur de bien-être et de santé durable.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Marche Nordique</strong>{" "}: Une marche dynamique avec bâtons qui sollicite 80%
              des muscles du corps.
            </li>
            <li>
              <strong>Remise en forme &amp; Condition physique</strong>{" "}: Séances de PPG
              (Préparation Physique Générale), de cardio et de renforcement musculaire adaptées.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👥 Une Pratique Mixte et Inclusive</h3>
          <p className="lede">
            À la KABSA, la mixité est une force. Nos groupes d&apos;entraînement sont ouverts aux
            femmes et aux hommes, favorisant l&apos;entraide, le respect et l&apos;émulation
            collective.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Groupes de niveaux</strong>{" "}: Des débutants complets aux athlètes confirmés.
            </li>
            <li>
              <strong>Encadrement qualifié</strong>{" "}: Nos entraîneurs diplômés adaptent les séances
              aux capacités et aux objectifs de chacun(e).
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
            <strong>🗓️ Horaires &amp; Lieux d&apos;Entraînement</strong>{" "}: communiqués à
            l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📝 Comment nous rejoindre ?</h3>
          <p className="lede">Prêt(e) à enfiler vos baskets ? L&apos;inscription est simple !</p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Séance d&apos;essai</strong>{" "}: Venez tester gratuitement deux séances de votre
              choix.
            </li>
            <li>
              <strong>Documents requis</strong>{" "}: Un certificat médical de non-contre-indication à
              la pratique de l&apos;athlétisme (en compétition ou en loisir) et la fiche
              d&apos;inscription remplie.
            </li>
            <li>
              <strong>Tarifs</strong>{" "}: tarifs préférentiels pour les étudiants, les couples et les
              familles (détails communiqués à l&apos;inscription).
            </li>
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
          <h3 className="rf-blocktitle">🌍 Accessibilité &amp; Pratique : Un Club Ouvert à Tous</h3>
          <p className="lede">
            À la KABSA, nous sommes convaincus que l&apos;athlétisme est un sport universel qui doit
            rester accessible au plus grand nombre. Notre section met un point d&apos;honneur à
            lever les freins à la pratique pour accueillir chaque sportif dans les meilleures
            conditions.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Accueil et Inclusion (Handisport &amp; Sport Adapté)
          </h3>
          <p className="lede">
            Parce que le dépassement de soi n&apos;a pas de limites, notre club s&apos;engage pour
            l&apos;inclusion des personnes en situation de handicap.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pratique partagée</strong>{" "}: Nos séances sont pensées pour favoriser
              l&apos;intégration des athlètes handisport et sport adapté au sein des groupes
              valides, dans un esprit d&apos;entraide et de convivialité.
            </li>
            <li>
              <strong>Accompagnement personnalisé</strong>{" "}: Nos entraîneurs diplômés adaptent
              les exercices, les distances et le matériel en fonction des capacités motrices,
              sensorielles ou intellectuelles de chacun.
            </li>
            <li>
              <strong>Infrastructures accessibles</strong>{" "}: Le Stade Municipal ainsi que nos
              lieux de rendez-vous en parc disposent d&apos;accès de plain-pied, de vestiaires
              adaptés et de sanitaires accessibles aux personnes à mobilité réduite (PMR).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Une Pratique Adaptée à Votre Rythme</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Groupes de niveaux</strong>{" "}: Dès votre arrivée, nous vous orientons vers
              un groupe homogène (débutant, loisir, confirmé ou compétition) pour progresser à votre
              propre rythme.
            </li>
            <li>
              <strong>Liberté d&apos;engagement</strong>{" "}: Vous choisissez votre fréquence
              d&apos;entraînement selon vos disponibilités, que ce soit pour une séance hebdomadaire
              de bien-être ou plusieurs entraînements ciblés.
            </li>
            <li>
              <strong>Matériel mis à disposition</strong>{" "}: Le club met à disposition le petit
              matériel technique (haies, starting-blocks, poids, disques, javelots, plots) lors des
              séances sur piste. Pour la marche nordique, des bâtons de prêt sont disponibles pour
              vos séances d&apos;essai.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💳 Tarifs Solidaires et Facilités d&apos;Accès
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tarifs préférentiels</strong>{" "}: Nous proposons des réductions dédiées aux
              étudiants, aux demandeurs d&apos;emploi, aux couples ainsi que des tarifs dégressifs
              pour les familles.
            </li>
            <li>
              <strong>Paiement échelonné</strong>{" "}: Vous avez la possibilité de régler votre
              cotisation annuelle en plusieurs fois sans frais.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Accès et Venir au Club</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Transports en commun</strong>{" "}: Le Stade Municipal et le parc local sont
              directement desservis par les lignes de bus de la ville (arrêt à moins de 5 minutes à
              pied).
            </li>
            <li>
              <strong>Mobilité douce &amp; Stationnement</strong>{" "}: Des arceaux à vélos
              sécurisés sont installés à l&apos;entrée du stade et un parking gratuit est disponible
              à proximité immédiate.
            </li>
            <li>
              <strong>Covoiturage</strong>{" "}: Pour les sorties trail du dimanche et les
              déplacements en compétition, nos membres organisent régulièrement du covoiturage via
              le groupe de discussion du club.
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
            🏟️ Nos Infrastructures : Des Équipements pour Toutes Vos Ambitions
          </h3>
          <p className="lede">
            Pour vous permettre de pratiquer l&apos;athlétisme dans des conditions optimales de
            confort et de sécurité, la KABSA s&apos;appuie sur des installations modernes et des
            terrains de jeu variés, adaptés à chaque discipline.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏃‍♂️ Le Stade Municipal : Le Cœur de la Performance
          </h3>
          <p className="lede">
            Notre enceinte principale est entièrement équipée pour accueillir l&apos;ensemble des
            disciplines de l&apos;athlétisme sur piste, du loisir à la compétition :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Une piste d&apos;athlétisme complète</strong>{" "}: Un anneau synthétique de
              400 mètres homologué (6 à 8 couloirs) offrant une excellente qualité d&apos;amorti
              pour vos séances de sprint, de haies et de demi-fond.
            </li>
            <li>
              <strong>Des aires de sauts dédiées</strong>{" "}: Des sautoirs équipés de fosses de
              réception sécurisées et de pistes d&apos;élan spécifiques pour le saut en longueur, le
              triple saut, le saut en hauteur et le saut à la perche.
            </li>
            <li>
              <strong>Des zones de lancers sécurisées</strong>{" "}: Des aires aménagées (cages de
              protection et cercles réglementaires) permettant de pratiquer le lancer de poids, de
              disque, de javelot et de marteau en toute sécurité.
            </li>
            <li>
              <strong>Un éclairage nocturne performant</strong>{" "}: Les installations sont
              intégralement éclairées pour garantir un confort visuel optimal lors de vos
              entraînements en soirée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌲 Les Espaces Naturels : Le Terrain de Jeu du Hors-Stade
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Parc local</strong>{" "}: Un cadre verdoyant et sécurisé, idéal pour la
              marche nordique, les séances de remise en forme (PPG) et le footing de récupération.
            </li>
            <li>
              <strong>La Forêt et les sentiers vallonnés</strong>{" "}: Des parcours variés offrant
              dénivelés et terrains techniques pour vos sorties longues de trail et la préparation
              hivernale de cross-country.
            </li>
            <li>
              <strong>Parcours sur route</strong>{" "}: Des itinéraires mesurés et sécurisés au
              départ du stade pour préparer efficacement vos objectifs sur 10 km, semi-marathon ou
              marathon.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚿 Confort, Matériel et Vie du Club</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Vestiaires et sanitaires</strong>{" "}: Des vestiaires spacieux, chauffés et
              équipés de douches individuelles (hommes, femmes et accès PMR) sont à votre
              disposition avant et après chaque séance.
            </li>
            <li>
              <strong>Local matériel complet</strong>{" "}: Le club dispose d&apos;un parc matériel
              renouvelé régulièrement (haies réglables, starting-blocks, tapis de réception,
              médecine-balls, plots et matériel de renforcement musculaire).
            </li>
            <li>
              <strong>Espace convivialité (Club-House)</strong>{" "}: Un lieu de rencontre
              chaleureux au bord de la piste pour débriefer les séances, partager un verre après
              l&apos;effort et renforcer l&apos;esprit de camaraderie de la KABSA.
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
            ⚡ Nos Types d&apos;Entraînement : Des Séances Structurées pour Progresser
          </h3>
          <p className="lede">
            À la KABSA, chaque séance est pensée et encadrée par nos entraîneurs diplômés pour
            allier plaisir, sécurité et progression. Quel que soit votre niveau ou votre objectif,
            nos entraînements s&apos;articulent autour de plusieurs formats complémentaires.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ 1. Vitesse, Explosivité et Technique (Piste)
          </h3>
          <p className="lede">
            Idéal pour les amateurs de sprint, de haies, de sauts et de lancers, ce format met
            l&apos;accent sur la précision du geste et la puissance.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Travail technique et éducatifs</strong>{" "}: Apprentissage des gammes
              athlétiques, placement du corps, maîtrise du départ en starting-blocks, franchissement
              de haies ou gestuelle spécifique aux sauts et lancers.
            </li>
            <li>
              <strong>Vitesse pure et lactique</strong>{" "}: Séries courtes à haute intensité avec
              récupération complète pour développer votre explosivité et votre vitesse maximale.
            </li>
            <li>
              <strong>Pliométrie et bondissements</strong>{" "}: Exercices dynamiques pour améliorer
              votre détente, votre tonicité musculaire et votre réactivité au sol.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🫁 2. Endurance et Fractionné (Demi-fond &amp; Running)
          </h3>
          <p className="lede">
            Conçues pour les coureurs sur piste et sur route (du 800 m au marathon), ces séances
            permettent de développer vos capacités cardio-respiratoires et de repousser votre seuil
            de fatigue.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Entraînement VMA (Vitesse Maximale Aérobie)</strong>{" "}: Séances de
              fractionné court ou moyen sur piste pour gagner en vitesse de base et améliorer votre
              foulée.
            </li>
            <li>
              <strong>Allure spécifique et seuil</strong>{" "}: Travail au rythme de compétition
              pour habituer votre organisme à maintenir un effort soutenu sur la durée.
            </li>
            <li>
              <strong>Sorties longues et endurance fondamentale</strong>{" "}: Séances à allure
              modérée en groupe pour développer votre endurance de base dans une ambiance
              conviviale.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⛰️ 3. Nature, Dénivelé et Résistance (Trail &amp; Cross)
          </h3>
          <p className="lede">
            Pour ceux qui aiment sortir des sentiers battus et affronter les éléments en pleine
            nature.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Travail en côtes et dénivelé</strong>{" "}: Répétitions en montée et technique
              de descente pour renforcer vos appuis et votre puissance musculaire.
            </li>
            <li>
              <strong>Sorties nature et terrains variés</strong>{" "}: Parcours en forêt ou sur
              chemins pour travailler la proprioception, l&apos;agilité et l&apos;adaptation aux
              changements de rythme.
            </li>
            <li>
              <strong>Préparation hivernale (Cross-Country)</strong>{" "}: Séances collectives
              ludiques et intenses sur terrain souple pour forger le mental et préparer la saison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💪 4. Préparation Physique et Bien-être (Santé &amp; Forme)
          </h3>
          <p className="lede">
            Des séances accessibles à tous pour entretenir son corps, prévenir les blessures et se
            sentir bien au quotidien.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>PPG (Préparation Physique Générale)</strong>{" "}: Circuits de renforcement
              musculaire ciblés (gainage, abdominaux, membres inférieurs et haut du corps) pour
              équilibrer votre silhouette et protéger vos articulations.
            </li>
            <li>
              <strong>Marche Nordique</strong>{" "}: Séances dynamiques en plein air combinant
              échauffement articulaire, marche technique avec bâtons (sollicitant 80 % des muscles
              du corps) et étirements.
            </li>
            <li>
              <strong>Récupération et mobilité</strong>{" "}: Temps dédiés aux assouplissements, à
              la respiration et au relâchement musculaire en fin de séance.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Déroulement Type d&apos;une Séance à la KABSA
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;échauffement (15 à 20 min)</strong>{" "}: Mise en route progressive par
              un footing léger, suivie de mobilité articulaire et d&apos;éducatifs de course.
            </li>
            <li>
              <strong>Le corps de séance (45 à 60 min)</strong>{" "}: Le cœur de l&apos;entraînement
              adapté à votre groupe de niveau et à la discipline du jour.
            </li>
            <li>
              <strong>Le retour au calme (10 à 15 min)</strong>{" "}: Footing très lent, étirements
              doux et échange convivial avec le coach et le groupe.
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
        <h2>Athlétisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
