"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function NatationAdapteePage() {
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
        <h3>Matériels</h3>
        <p>Systèmes de mise à l&apos;eau et technique du &quot;tapping&quot;.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Immersion dans une séance hebdomadaire avec nos coachs.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Reportage : un challenge de natation adaptée.</p>
        <VideoSlot youtubeId="gH_jZo3tj08" title="Reportage : un challenge de natation adaptée" />
      </div>
      <div className="info-card">
        <h3>Matchs &amp; compétitions</h3>
        <p>Meilleurs moments des championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>Reportage : des cours de natation adaptés pour enfants.</p>
        <VideoSlot youtubeId="ILtZ9yF-Gnw" title="Reportage : des cours de natation adaptés pour enfants" />
      </div>
      <div className="info-card">
        <h3>Stars nageurs KABSA</h3>
        <p>Parcours des meilleurs nageurs.</p>
        <VideoSlot />
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🏊 Présentation — Natation adaptée ♿</h3>
          <p className="lede">
            Bienvenue au sein de notre structure dédiée à la natation adaptée, un espace pensé pour
            faire de l&apos;eau un véritable terrain de liberté, d&apos;inclusion et de dépassement
            de soi. Que vous souhaitiez découvrir les plaisirs aquatiques, gagner en autonomie ou
            perfectionner votre technique, nous accompagnons chaque nageur dans le respect de son
            rythme et de ses capacités.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏊♿ 1. Notre mission : Le sport aquatique pour tous
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Une pratique 100 % inclusive</strong>{" "}: Nous ouvrons les portes de nos
              bassins aux personnes en situation de handicap moteur, sensoriel, mental ou psychique,
              quel que soit l&apos;âge ou le niveau.
            </li>
            <li>
              <strong>Les bienfaits de l&apos;apesanteur</strong>{" "}: L&apos;eau offre un
              environnement unique qui allège le corps, libère les mouvements, apaise les tensions
              et favorise l&apos;épanouissement personnel.
            </li>
            <li>
              <strong>Des objectifs sur mesure</strong>{" "}: Éveil aquatique, apprentissage de la
              nage, rééducation douce, maintien de la forme physique ou préparation aux compétitions
              handisport et sport adapté.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝🧑‍🦽 2. Un encadrement spécialisé et bienveillant
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Des professionnels formés</strong>{" "}: Notre équipe est composée de
              maîtres-nageurs sauveteurs diplômés et spécialisés dans l&apos;accompagnement du
              handicap et du sport adapté.
            </li>
            <li>
              <strong>Un suivi individualisé</strong>{" "}: Chaque parcours débute par un échange et
              une évaluation personnalisée afin de proposer des séances adaptées aux besoins
              spécifiques de chaque nageur.
            </li>
            <li>
              <strong>Une écoute active</strong>{" "}: Nous collaborons étroitement avec les
              nageurs, leurs proches et les professionnels de santé pour garantir une progression
              sereine et sécurisée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🌊🤽 3. Nos activités et nos créneaux</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Éveil aquatique</strong>{" "}: Familiarisation douce et ludique avec le milieu
              aquatique pour les enfants, en présence des parents.
            </li>
            <li>
              <strong>École de natation adaptée</strong>{" "}: Apprentissage progressif des
              fondamentaux (respiration, flottaison, équilibre et propulsion) à l&apos;aide de
              matériel ergonomique.
            </li>
            <li>
              <strong>Natation bien-être et santé</strong>{" "}: Séances axées sur la relaxation, la
              mobilité articulaire et le renforcement musculaire dans une eau chauffée entre 29 °C
              et 32 °C.
            </li>
            <li>
              <strong>Perfectionnement et loisir sportif</strong>{" "}: Entraînements réguliers pour
              développer son endurance, sa technique et repousser ses limites dans une ambiance
              conviviale.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏅💙 4. Nos valeurs et nos engagements</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Autonomie et sécurité</strong>{" "}: Tout est pensé, de l&apos;accueil à la
              mise à l&apos;eau, pour permettre à chacun d&apos;évoluer en toute confiance et en
              toute sécurité.
            </li>
            <li>
              <strong>Convivialité et partage</strong>{" "}: Notre structure est avant tout un lieu
              de vie et de rencontre où se tissent des liens forts entre nageurs, familles,
              bénévoles et éducateurs.
            </li>
            <li>
              <strong>Excellence et reconnaissance</strong>{" "}: Notre projet sportif
              s&apos;inscrit dans une démarche qualité, en cohérence avec les fédérations handisport
              et sport adapté.
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

  const accessibiliteContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">♿ Accessibilité &amp; Pratique</h3>
          <p className="lede">
            Pour que la natation adaptée reste un plaisir et un espace d&apos;épanouissement, nos
            complexes aquatiques sont entièrement pensés pour garantir l&apos;autonomie, la sécurité
            et le confort de chaque nageur, quel que soit son handicap.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ♿🏊 1. Un parcours d&apos;accès 100 % accessible
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Stationnement réservé</strong>{" "}: Places de parking PMR situées à proximité
              immédiate de l&apos;entrée.
            </li>
            <li>
              <strong>Plains-pieds et rampes</strong>{" "}: Seuils de portes abaissés et rampes
              d&apos;accès conformes aux normes d&apos;accessibilité en vigueur.
            </li>
            <li>
              <strong>Portes automatiques</strong>{" "}: Largeur de passage optimisée pour
              accueillir aisément les fauteuils roulants électriques et manuels.
            </li>
            <li>
              <strong>Signalétique adaptée</strong>{" "}: Repérage visuel contrasté et indications
              claires pour faciliter l&apos;orientation des personnes malvoyantes ou ayant des
              troubles cognitifs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚿🧑‍🦽 2. Vestiaires et sanitaires adaptés
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Cabines individuelles spacieuses</strong>{" "}: Volumes larges permettant le
              demi-tour complet d&apos;un fauteuil et l&apos;accompagnement par un aidant ou un
              encadrant.
            </li>
            <li>
              <strong>Équipements d&apos;aide</strong>{" "}: Banquettes de change surélevées, barres
              d&apos;appui latérales et douches à l&apos;italienne équipées de sièges muraux.
            </li>
            <li>
              <strong>Sanitaires suspendus</strong>{" "}: Toilettes adaptées dotées de barres de
              transfert rabattables des deux côtés.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌊♿ 3. Systèmes de mise à l&apos;eau sécurisés
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Rampes d&apos;accès progressives</strong>{" "}: Idéales pour une entrée en
              douceur à pied ou à l&apos;aide d&apos;un fauteuil de mise à l&apos;eau submersible.
            </li>
            <li>
              <strong>Lève-personnes hydrauliques et mobiles</strong>{" "}: Potences de levage
              sécurisées permettant d&apos;installer le nageur directement dans l&apos;eau en toute
              sérénité.
            </li>
            <li>
              <strong>Escaliers à marches larges</strong>{" "}: Équipés de doubles mains courantes
              pour rassurer et stabiliser les personnes ayant des troubles de l&apos;équilibre.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌡️🤽 4. Des bassins conçus pour le bien-être et la progression
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Température de l&apos;eau idéale</strong>{" "}: Bassins chauffés entre 29 °C
              et 32 °C selon les créneaux afin d&apos;éviter le refroidissement musculaire et de
              favoriser la détente.
            </li>
            <li>
              <strong>Acoustique maîtrisée</strong>{" "}: Traitement phonique du hall de bassin
              réduisant la résonance sonore, un atout majeur pour les nageurs hypersensibles ou
              malentendants.
            </li>
            <li>
              <strong>Matériel pédagogique spécifique</strong>{" "}: Mise à disposition de ceintures
              de flottaison, frites adaptées, planches ergonomiques et tapis de marche aquatique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🕒📋 5. Infos pratiques pour votre venue</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accès et transports</strong>{" "}: lignes et arrêt communiqués au secrétariat
              (adresse du complexe à l&apos;inscription).
            </li>
            <li>
              <strong>Horaires d&apos;ouverture</strong>{" "}: créneaux dédiés à la natation adaptée
              communiqués à l&apos;inscription.
            </li>
            <li>
              <strong>Équipement à prévoir</strong>{" "}: Maillot de bain (slip ou boxer pour les
              hommes, maillot une ou deux pièces pour les femmes), bonnet de bain obligatoire,
              serviette et jeton/pièce pour les casiers.
            </li>
            <li>
              <strong>Accueil personnalisé</strong>{" "}: Nos équipes se tiennent disponibles 15
              minutes avant chaque séance pour vous accueillir et vous assister dès l&apos;entrée si
              besoin.
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
            Découvrez un environnement moderne, chaleureux et entièrement pensé pour la pratique de
            la natation adaptée. Nos équipements allient performance technique, hygiène
            irréprochable et confort optimal afin d&apos;offrir à chaque nageur les meilleures
            conditions d&apos;apprentissage et de bien-être.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏊♿ 1. Des bassins adaptés à chaque pratique
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bassin d&apos;apprentissage et de bien-être</strong>{" "}: Doté d&apos;une
              profondeur progressive et d&apos;une eau chauffée entre 29 °C et 32 °C, il favorise la
              relaxation musculaire, la gestion de l&apos;aquaphobie et la rééducation en douceur.
            </li>
            <li>
              <strong>Bassin sportif</strong>{" "}: Équipé de couloirs larges et de plots de départ
              adaptés, il permet aux nageurs confirmés et aux compétiteurs handisport de
              s&apos;entraîner dans des conditions optimales.
            </li>
            <li>
              <strong>Qualité de l&apos;eau et de l&apos;air</strong>{" "}: Système de traitement de
              l&apos;eau dernière génération limitant l&apos;odeur et l&apos;irritation du chlore,
              couplé à une ventilation douce.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏗️🧑‍🦽 2. Équipements d&apos;accès et de mise à l&apos;eau
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accès direct aux bassins</strong>{" "}: Rampes d&apos;accès progressives
              antidérapantes et escaliers à marches larges munis de doubles mains courantes.
            </li>
            <li>
              <strong>Dispositifs de transfert</strong>{" "}: Lève-personnes hydrauliques fixes,
              potences mobiles et fauteuils de mise à l&apos;eau submersibles mis à disposition sur
              chaque bassin.
            </li>
            <li>
              <strong>Plages sécurisées</strong>{" "}: Revêtement de sol haute adhérence, larges
              zones de circulation sans obstacle et espaces de stationnement dédiés aux fauteuils
              roulants au bord de l&apos;eau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚿🔒 3. Espaces de confort et vestiaires</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Vestiaires individuels et collectifs PMR</strong>{" "}: Cabines spacieuses
              équipées de banquettes ergonomiques, de barres d&apos;appui, de patères à hauteur
              adaptée et de miroirs inclinés.
            </li>
            <li>
              <strong>Espace douches et sanitaires</strong>{" "}: Douches à l&apos;italienne avec
              sièges muraux rabattables et sanitaires suspendus dotés de barres de transfert.
            </li>
            <li>
              <strong>Casiers sécurisés</strong>{" "}: Systèmes de fermeture faciles à manipuler,
              positionnés à hauteur accessible depuis un fauteuil roulant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔊🛟 4. Confort sensoriel et matériel pédagogique
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Traitement acoustique haute performance</strong>{" "}: Plafonds et parois
              insonorisés réduisant fortement la réverbération sonore pour le confort des personnes
              malentendantes ou hypersensibles.
            </li>
            <li>
              <strong>Signalétique inclusive</strong>{" "}: Repères visuels contrastés, pictogrammes
              clairs et éclairage doux sans reflets éblouissants sur l&apos;eau.
            </li>
            <li>
              <strong>Parc de matériel spécialisé</strong>{" "}: Ceintures de flottaison modulables,
              frites haute densité, planches ergonomiques, tapis de marche aquatique et matériel
              ludique d&apos;éveil.
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
          <h3 className="rf-blocktitle">🏊‍♀️ Types d&apos;entraînement</h3>
          <p className="lede">
            Chaque nageur possède son propre rythme, ses capacités et ses objectifs. Nos programmes
            d&apos;entraînement sont conçus sur mesure pour accompagner tous les profils, de la
            première découverte de l&apos;eau jusqu&apos;à la performance sportive, dans un cadre
            sécurisé et bienveillant.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌊👶 1. Éveil aquatique et familiarisation
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Apprivoiser l&apos;eau</strong>{" "}: Jeux ludiques pour découvrir la
              flottabilité, l&apos;équilibre et l&apos;immersion du visage sans contrainte.
            </li>
            <li>
              <strong>Confiance et sécurité</strong>{" "}: Séances réalisées en petits groupes ou en
              duo parent-enfant dans une eau chauffée entre 29 °C et 32 °C.
            </li>
            <li>
              <strong>Éveil sensoriel</strong>{" "}: Stimulation douce de la motricité globale grâce
              à l&apos;apesanteur et au matériel pédagogique adapté.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏊♿ 2. Apprentissage et autonomie (École de natation)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Maîtrise des bases</strong>{" "}: Travail progressif sur la respiration
              aquatique, l&apos;allongement du corps et la propulsion.
            </li>
            <li>
              <strong>Adaptation technique</strong>{" "}: Ajustement personnalisé des styles de nage
              (dos, brasse, crawl) selon la mobilité et les appuis de chaque nageur.
            </li>
            <li>
              <strong>Matériel ergonomique</strong>{" "}: Utilisation de ceintures de flottaison,
              frites et planches spécifiques pour faciliter l&apos;acquisition de l&apos;autonomie.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧘‍♂️💧 3. Natation bien-être, santé et rééducation douce
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Mobilité et souplesse</strong>{" "}: Mouvements amples et lents permettant de
              préserver les articulations sans impact ni douleur.
            </li>
            <li>
              <strong>Renforcement musculaire doux</strong>{" "}: Utilisation de la résistance
              naturelle de l&apos;eau pour tonifier le corps en profondeur.
            </li>
            <li>
              <strong>Détente et relaxation</strong>{" "}: Exercices de relâchement musculaire et de
              respiration favorisant le bien-être physique et mental.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏅⚡ 4. Perfectionnement sportif et compétition (Handisport &amp; Sport Adapté)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Technique et endurance</strong>{" "}: Travail approfondi sur l&apos;efficacité
              des mouvements, le virage, le départ et la gestion de l&apos;effort.
            </li>
            <li>
              <strong>Préparation physique</strong>{" "}: Séances rythmées visant à développer la
              vitesse, la puissance et la résistance cardiovasculaire.
            </li>
            <li>
              <strong>Accompagnement vers la compétition</strong>{" "}: Préparation spécifique aux
              rencontres régionales et nationales sous l&apos;égide des fédérations handisport et
              sport adapté.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋🤝 5. Notre méthode d&apos;accompagnement
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bilan initial personnalisé</strong>{" "}: Un premier rendez-vous dans
              l&apos;eau permet d&apos;évaluer votre aisance, vos besoins spécifiques et vos envies.
            </li>
            <li>
              <strong>Groupes homogènes et effectifs réduits</strong>{" "}: Les séances sont
              organisées par niveau et par affinité pour garantir une attention constante de
              l&apos;éducateur.
            </li>
            <li>
              <strong>Suivi évolutif</strong>{" "}: Votre programme s&apos;adapte tout au long de
              l&apos;année en fonction de vos progrès et de vos nouveaux objectifs.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const comingSoonContent = <p className="lede tab-placeholder">Contenu à venir.</p>;

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "accessibilite", label: "Accessibilité & pratique", content: accessibiliteContent },
    { id: "infrastructures", label: "Infrastructures", content: infrastructuresContent },
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: comingSoonContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: typeEntrainementContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Natation adaptée</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
