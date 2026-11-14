"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function PilotagePage() {
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
        <p>Découvrez la section Pilotage de KABSA.</p>
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
        <h3>Circuits &amp; roulages</h3>
        <p>Meilleurs moments sur piste.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Pilotes KABSA</h3>
        <p>Parcours des meilleurs pilotes, hommes et femmes.</p>
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
            🏎️ Pilotage Auto &amp; Moto : Le Sens du Partage et de la Performance
          </h3>
          <p className="lede">
            Bienvenue dans l&apos;univers des sports mécaniques de l&apos;association KABSA. Pour
            nous, le pilotage va bien au-delà de la vitesse : c&apos;est une école de maîtrise, de
            discipline et de passion partagée. Que vous soyez un pilote chevronné ou que vous
            souhaitiez monter à bord pour la première fois, nos activités s&apos;adaptent à toutes
            les envies.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏁 Une Passion, Zéro Limite : La Mixité au Cœur des Circuits
          </h3>
          <p className="lede">
            Chez KABSA, nous croyons fermement que les trajectoires parfaites n&apos;ont pas de
            genre. Nous mettons un point d&apos;honneur à promouvoir la mixité et
            l&apos;accessibilité dans un univers parfois perçu comme fermé.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pilotage Féminin</strong>{" "}: Des sessions, stages et ateliers pensés pour
              encourager les femmes à prendre le volant ou le guidon. Rejoignez une communauté
              grandissante de passionnées qui repoussent leurs limites, brisent les stéréotypes et
              s&apos;imposent sur l&apos;asphalte.
            </li>
            <li>
              <strong>Pilotage Masculin</strong>{" "}: Un espace de camaraderie, de perfectionnement
              technique et de saine émulation où le respect mutuel et l&apos;esprit d&apos;équipe
              restent la priorité absolue.
            </li>
            <li>
              <strong>Événements Mixtes</strong>{" "}: Des journées de roulage, des endurances et des
              challenges karting où hommes et femmes partagent les mêmes grilles de départ et
              vibrent au même rythme.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛠️ Nos Activités sur Piste et Circuit</h3>
          <p className="lede">
            Découvrez nos programmes conçus pour vous faire progresser en toute sécurité :
          </p>
          <h4 className="rf-blocktitle">🚗 Section Automobile</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Baptêmes de piste</strong>{" "}: Enfilez votre casque et installez-vous en
              passager aux côtés de nos pilotes instructeurs pour un shot d&apos;adrénaline pure.
            </li>
            <li>
              <strong>Stages de perfectionnement</strong>{" "}: Apprenez les techniques de trajectoire,
              le freinage dégressif et la gestion du regard pour optimiser vos chronos.
            </li>
            <li>
              <strong>Sorties Trackdays</strong>{" "}: Venez rouler avec votre propre véhicule ou
              profitez de nos voitures partenaires lors de journées dédiées sur les plus beaux
              circuits.
            </li>
          </ul>
          <h4 className="rf-blocktitle">🏍️ Section Moto</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Initiation au guidon</strong>{" "}: Sautez le pas et découvrez les sensations de
              la moto sur un espace sécurisé.
            </li>
            <li>
              <strong>Pilotage sur circuit</strong>{" "}: Maîtrisez l&apos;art du déhanché, améliorez
              votre positionnement et comprenez la dynamique de votre machine en courbe.
            </li>
            <li>
              <strong>Ateliers sécurité &amp; mécanique</strong>{" "}: Parce qu&apos;un bon pilote
              connaît sa machine, nous animons des ateliers sur l&apos;entretien de base et les
              réglages de suspensions.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Pourquoi Rejoindre la Team KABSA ?</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Encadrement bienveillant</strong>{" "}: Nos sessions sont supervisées par des
              passionnés expérimentés et des professionnels certifiés qui placent votre sécurité en
              priorité.
            </li>
            <li>
              <strong>Esprit de club</strong>{" "}: Pas de jugement ici. On s&apos;entraide dans les
              stands et on partage nos conseils après chaque session.
            </li>
            <li>
              <strong>Accessibilité financière</strong>{" "}: Grâce à nos partenaires, nous négocions
              des tarifs avantageux pour rendre la pratique sur circuit accessible au plus grand
              nombre.
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
            Sessions, stages et journées de roulage ; horaires et tarifs communiqués à
            l&apos;inscription (tarifs avantageux grâce à nos partenaires).
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📢 Prêt(e) à faire rugir le moteur ?</h3>
          <p className="lede">
            Que vous cherchiez la performance chronométrée ou le simple plaisir de la glisse, votre
            place est parmi nous.
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
          <h3 className="rf-blocktitle">
            💡 Accessibilité &amp; Pratique : Le Pilotage pour Tous, Simplement
          </h3>
          <p className="lede">
            Chez KABSA, nous sommes convaincus que la passion des sports mécaniques ne doit être
            freinée ni par le budget, ni par le manque d&apos;expérience ou de matériel. Nous
            mettons tout en œuvre pour vous ouvrir les portes des circuits dans les meilleures
            conditions.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💰 Une Passion Accessible à Tous les Budgets
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tarifs négociés grâce à nos partenaires</strong>{" "}: En rejoignant
              l&apos;association, vous bénéficiez de réductions exclusives sur les droits de piste,
              les stages de pilotage et les assurances journée.
            </li>
            <li>
              <strong>Formules à la carte</strong>{" "}: Que vous souhaitiez venir pour une seule
              session découverte ou participer à l&apos;ensemble de notre calendrier annuel, nos
              formules s&apos;adaptent à vos envies et à vos moyens.
            </li>
            <li>
              <strong>Covoiturage et logistique partagée</strong>{" "}: Nous facilitons la mise en
              relation entre membres pour partager les frais de déplacement, de remorque ou de
              location de box sur les circuits.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🪖 Pas de Véhicule ni d&apos;Équipement ? Aucun Problème !
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Location de véhicules partenaires</strong>{" "}: Vous n&apos;avez pas de
              voiture préparée ou de moto de piste ? Profitez de notre flotte de véhicules
              partenaires (auto et moto) prêts à rouler, entretenus et adaptés à votre niveau.
            </li>
            <li>
              <strong>Prêt et location d&apos;équipement</strong>{" "}: Casques homologués,
              combinaisons, gants et dorsales peuvent être mis à votre disposition lors de nos
              événements sur simple réservation.
            </li>
            <li>
              <strong>Ouvert aux débutants complets</strong>{" "}: Aucune expérience préalable sur
              circuit n&apos;est requise pour nos initiations et baptêmes. Nos instructeurs vous
              accompagnent pas à pas.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Infos Pratiques &amp; Démarches Simplifiées
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Formalités allégées</strong>{" "}: Nous vous guidons dans toutes vos démarches
              administratives (assurance responsabilité civile circuit, licence éventuelle,
              décharge).
            </li>
            <li>
              <strong>Accueil et briefing personnalisé</strong>{" "}: Chaque journée débute par un
              café d&apos;accueil et un briefing complet sur les règles de sécurité, les drapeaux et
              le déroulement des sessions.
            </li>
            <li>
              <strong>Assistance sur place</strong>{" "}: Un espace stand KABSA est installé lors de
              chaque sortie pour vous permettre de vous reposer, de vérifier vos pressions de pneus
              et de profiter des conseils mécaniques de l&apos;équipe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📅 Comment Nous Rejoindre ?</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Choisissez votre activité</strong>{" "}: Baptême, stage d&apos;initiation ou
              journée de roulage libre (trackday).
            </li>
            <li>
              <strong>Réservez votre place en ligne</strong>{" "}: Consultez notre calendrier et
              inscrivez-vous en quelques clics.
            </li>
            <li>
              <strong>Préparez votre venue</strong>{" "}: Recevez votre check-list complète par
              e-mail quelques jours avant l&apos;événement pour arriver l&apos;esprit léger.
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
            🏟️ Nos Infrastructures : Des Terrains de Jeu Sécurisés et Adaptés
          </h3>
          <p className="lede">
            Pour vivre pleinement votre passion de l&apos;auto et de la moto, KABSA sélectionne des
            installations reconnues pour leur qualité, leur technicité et leur haut niveau de
            sécurité. Des espaces d&apos;initiation aux circuits homologués, découvrez les
            environnements dans lesquels vous évoluerez.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏁 Des Circuits Variés pour Tous les Niveaux
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pistes d&apos;initiation et aires planes</strong>{" "}: Des zones sécurisées
              et dégagées, idéales pour vos premiers tours de roue, les ateliers de maniabilité moto
              ou la maîtrise du freinage sans pression.
            </li>
            <li>
              <strong>Circuits techniques et sinueux</strong>{" "}: Des tracés riches en virages
              pour travailler vos trajectoires, le positionnement du corps et la précision de votre
              pilotage.
            </li>
            <li>
              <strong>Grands circuits homologués</strong>{" "}: Des pistes rapides offrant de belles
              lignes droites et des courbes exigeantes pour repousser vos limites lors de nos
              journées Trackdays et endurances.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛡️ Sécurité et Équipements des Pistes</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Infrastructures homologuées</strong>{" "}: Tous nos événements se déroulent
              sur des tracés répondant aux normes de sécurité les plus strictes (bacs à graviers,
              zones de dégagement, rails et protections homologuées).
            </li>
            <li>
              <strong>Direction de course et commissaires</strong>{" "}: Chaque journée est encadrée
              par des équipes professionnelles assurant la surveillance permanente de la piste et
              l&apos;intervention rapide en cas d&apos;incident.
            </li>
            <li>
              <strong>Salles de briefing dédiées</strong>{" "}: Des espaces confortables et équipés
              pour préparer vos sessions, analyser les tracés et revoir les consignes de sécurité
              avant chaque départ.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🔧 Le Village et les Stands KABSA</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Box et paddocks privatifs</strong>{" "}: Lors de nos sorties, nous réservons
              des espaces dédiés à l&apos;association pour stationner vos véhicules et vous abriter
              entre deux sessions.
            </li>
            <li>
              <strong>Zone d&apos;assistance mécanique</strong>{" "}: Un espace équipé de
              l&apos;outillage essentiel (compresseurs, manomètres, béquilles d&apos;atelier) pour
              vérifier vos pressions et effectuer vos réglages avec l&apos;aide de nos membres.
            </li>
            <li>
              <strong>Espace détente et convivialité</strong>{" "}: Un coin accueil pensé pour
              partager un café, débriefer vos sensations autour d&apos;un repas et renforcer
              l&apos;esprit de club.
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
            🎯 Nos Types d&apos;Entraînement : Progressez à Votre Rythme
          </h3>
          <p className="lede">
            Chez KABSA, chaque pilote a ses propres objectifs. Que vous souhaitiez découvrir les
            sensations de la piste, gagner en confiance au guidon ou affiner vos chronos au dixième
            de seconde, nos programmes d&apos;entraînement s&apos;adaptent à votre profil et à votre
            niveau.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🟢 Découverte &amp; Prise en Main (Niveau Débutant)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ateliers de maniabilité et d&apos;équilibre</strong>{" "}: Exercices à basse
              et moyenne vitesse pour apprivoiser les réactions de votre véhicule, travailler le
              regard et gagner en aisance.
            </li>
            <li>
              <strong>Roulage encadré par groupe de niveau</strong>{" "}: Des sessions dédiées aux
              novices avec des ouvreurs en piste pour apprendre les règles de sécurité et les bonnes
              trajectoires sans stress.
            </li>
            <li>
              <strong>Débriefings pédagogiques</strong>{" "}: Échanges réguliers après chaque série
              pour corriger les postures, répondre à vos questions et valider vos acquis en douceur.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🟡 Perfectionnement Technique (Niveau Intermédiaire)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Travail des trajectoires et points de corde</strong>{" "}: Analyse détaillée
              des virages pour optimiser vos entrées, vos passages en courbe et vos réaccélérations.
            </li>
            <li>
              <strong>Maîtrise du freinage</strong>{" "}: Exercices ciblés sur le freinage dégressif
              en auto et la gestion des transferts de masse à moto pour gagner en précision et en
              sécurité.
            </li>
            <li>
              <strong>Positionnement et gestuelle</strong>{" "}: Apprentissage du déhanché à moto ou
              du placement des mains et des appuis en voiture pour faire corps avec sa machine.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔴 Performance &amp; Roulage Libre (Niveau Confirmé)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Sessions Trackdays en autonomie</strong>{" "}: De longs créneaux de roulage
              libre par catégories homogènes pour enchaîner les tours et travailler votre
              régularité.
            </li>
            <li>
              <strong>Analyse télémétrique et vidéo</strong>{" "}: Utilisation de caméras embarquées
              et d&apos;outils chronométriques pour décortiquer vos secteurs et identifier vos
              marges de progression.
            </li>
            <li>
              <strong>Préparation aux formats endurance</strong>{" "}: Entraînements axés sur la
              gestion de l&apos;effort, la constance des chronos et la stratégie de relais en
              équipe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Coaching Mixte &amp; Entraide sur Mesure
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Sessions dédiées ou mixtes</strong>{" "}: Possibilité de s&apos;entraîner au
              sein des groupes féminins, masculins ou mixtes selon vos préférences et votre confort.
            </li>
            <li>
              <strong>Binômes parrainage</strong>{" "}: Association entre pilotes expérimentés et
              nouveaux membres pour bénéficier de conseils personnalisés directement depuis les
              stands ou en piste.
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
        <h2>Pilotage auto &amp; moto</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
