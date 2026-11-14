"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function TennisChaisePage() {
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
        <p>Conception d&apos;un fauteuil de compétition et carrossage des roues.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Les secrets de la synchronisation déplacement/frappe.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts et coulisses du club.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Matchs &amp; compétitions</h3>
        <p>Meilleurs moments des championnats.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Stars joueurs KABSA</h3>
        <p>Parcours des meilleurs joueurs.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🎾 Présentation du Tennis en Chaise ♿</h3>
          <p className="lede">
            Le tennis en chaise (aussi appelé tennis-fauteuil ou paratennis) est l&apos;un des
            handisports les plus populaires au monde. Pratiqué en simple ou en double, il conserve
            exactement les mêmes dimensions de terrain et le même matériel de base que le tennis
            traditionnel. Cette discipline offre des sensations de jeu spectaculaires où se mêlent
            stratégie, agilité et force physique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Définition et Règles du jeu</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Une adaptation accessible</strong>{" "}: Ce sport est conçu pour les
              personnes ayant un handicap moteur.
            </li>
            <li>
              <strong>🎾 La règle des deux rebonds</strong>{" "}: C&apos;est l&apos;unique
              modification majeure par rapport au tennis valide. Le joueur en fauteuil peut laisser
              la balle rebondir deux fois avant de la renvoyer. Le second rebond peut même
              s&apos;effectuer à l&apos;extérieur des limites du court.
            </li>
            <li>
              <strong>🤝 Une mixité unique</strong>{" "}: Un joueur en fauteuil peut affronter ou
              faire équipe avec un joueur debout (bipède) lors d&apos;un même match.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏅 Qui peut pratiquer et dans quelles catégories ?
          </h3>
          <p className="lede">
            Le tennis-fauteuil s&apos;adresse aux personnes présentant une perte fonctionnelle
            totale ou partielle d&apos;un ou des deux membres inférieurs (paraplégie, tétraplégie,
            amputation, poliomyélite, etc.). Deux catégories encadrent la pratique compétitive :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Catégorie « Open »</strong>{" "}: Elle regroupe les athlètes ayant une
              atteinte fonctionnelle uniquement aux membres inférieurs.
            </li>
            <li>
              <strong>🦾 Catégorie « Quad »</strong>{" "}: Elle concerne les joueurs ayant une
              atteinte aux membres inférieurs ainsi qu&apos;à un ou aux deux membres supérieurs, ce
              qui impacte la tenue de la raquette ou la propulsion.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Prérequis administratifs pour nous rejoindre
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🩺 Un certificat médical</strong>{" "}: Il doit autoriser la pratique du tennis
              en fauteuil, avec la mention « en compétition » si vous souhaitez faire des tournois.
            </li>
            <li>
              <strong>📊 Une évaluation motrice</strong>{" "}: Elle permet de déterminer votre
              catégorie et de choisir l&apos;équipement le mieux adapté à votre profil.
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
          <h3 className="rf-blocktitle">♿ Accessibilité &amp; Pratique du Tennis-Fauteuil 🎾</h3>
          <p className="lede">
            Notre club met tout en œuvre pour rendre le paratennis accessible à chacun, que vous
            souhaitiez découvrir la discipline en loisir ou viser la compétition.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛠️ Un matériel adapté et accessible à tous
          </h3>
          <p className="lede">
            La pratique du tennis en chaise nécessite un équipement spécifique pour garantir votre
            sécurité, votre stabilité et votre réactivité sur le court.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Le fauteuil roulant de sport</strong>{" "}: Contrairement à un fauteuil de
              ville, il possède des roues arrière fortement inclinées (carrossage) pour éviter les
              basculements lors des virages brusques. Il est aussi équipé d&apos;une ou deux petites
              roues anti-bascule à l&apos;arrière.
            </li>
            <li>
              <strong>🔒 Les systèmes de maintien</strong>{" "}: Des sangles et des cales (au niveau
              des cuisses, des genoux ou de la taille) vous permettent de faire corps avec le
              fauteuil et d&apos;optimiser la puissance de vos frappes.
            </li>
            <li>
              <strong>🦾 L&apos;adaptation pour les joueurs « Quad »</strong>{" "}: Si vous avez des
              difficultés de préhension, la raquette peut être fixée directement à votre main grâce
              à des bandes élastiques médicales ou de l&apos;adhésif.
            </li>
            <li>
              <strong>🤝 Prêt de matériel au club</strong>{" "}: Des fauteuils multisports
              d&apos;initiation sont prêtés gratuitement aux nouveaux adhérents et aux joueurs de
              loisir pendant les entraînements. Les compétiteurs réguliers optent généralement par
              la suite pour un fauteuil sur-mesure.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Déroulement d&apos;un entraînement type
          </h3>
          <p className="lede">
            Encadrées par des enseignants formés aux spécificités du handisport, nos séances
            d&apos;une heure et dix minutes développent votre coordination et votre technique.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🔥 L&apos;échauffement spécifique (15 min)</strong>{" "}: Vous travaillez la
              maniabilité du fauteuil sans balle (lignes droites, slaloms, demi-tours rapides,
              reculs) pour préparer vos épaules et faire monter le rythme cardiaque.
            </li>
            <li>
              <strong>🎾 Le corps de séance (45 min)</strong>{" "}: Vous enchaînez les exercices de
              frappe et de déplacement. L&apos;objectif est de maîtriser la synchronisation : placer
              le fauteuil face au rebond, lâcher les roues pour frapper, puis relancer immédiatement
              le fauteuil pour vous replacer.
            </li>
            <li>
              <strong>🧘 Le jeu dirigé et le retour au calme (10 min)</strong>{" "}: La séance se
              termine par des matchs au format adapté (tie-break) suivis d&apos;étirements ciblés
              pour les bras, les épaules et les trapèzes.
            </li>
            <li>
              <strong>💪 La préparation physique (PPG)</strong>{" "}: En complément, un travail hors
              court permet de renforcer le tronc (abdominaux et dorsaux pour l&apos;équilibre),
              l&apos;endurance et la force explosive des bras.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 Des matchs amicaux aux grandes compétitions
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🤝 Les tournois internes et mixtes</strong>{" "}: Le club organise des matchs
              amicaux et des Tournois Multi-Chances (TMC). Ces événements réunissent souvent des
              joueurs debout et des joueurs en fauteuil sur le même terrain, favorisant la
              convivialité et l&apos;inclusion.
            </li>
            <li>
              <strong>🌍 Le circuit officiel</strong>{" "}: Pour les plus compétitifs, il est
              possible d&apos;intégrer le classement fédéral. Vous pouvez participer aux tournois
              locaux homologués, jusqu&apos;au circuit international (ITF), aux tournois du Grand
              Chelem et aux Jeux Paralympiques.
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
          <h3 className="rf-blocktitle">🏟️ Infrastructures &amp; Accès au Club ♿</h3>
          <p className="lede">
            Notre complexe sportif a été pensé et aménagé pour offrir une autonomie totale et un
            confort optimal aux joueurs en fauteuil roulant, aux accompagnants et aux spectateurs.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎾 Des terrains conformes et adaptés</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>📐 Dimensions réglementaires</strong>{" "}: Nos courts respectent les standards
              officiels de la fédération, offrant de larges espaces de dégagement autour des lignes
              de fond et de couloir pour faciliter les manœuvres et le jeu après le deuxième rebond.
            </li>
            <li>
              <strong>🛞 Surfaces roulantes de qualité</strong>{" "}: Nos terrains (intérieurs et
              extérieurs) disposent de revêtements entretenus régulièrement pour garantir une
              adhérence optimale des pneus et une vitesse de balle régulière.
            </li>
            <li>
              <strong>🚪 Accès direct aux courts</strong>{" "}: L&apos;entrée sur chaque terrain se
              fait de plain-pied, avec des portillons élargis permettant le passage aisé d&apos;un
              fauteuil de sport équipé d&apos;un fort carrossage.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Un bâtiment 100 % accessible (PMR)</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🅿️ Stationnement réservé</strong>{" "}: Des places de parking larges et
              adaptées sont situées juste devant l&apos;entrée principale du club, avec un
              cheminement sans marche jusqu&apos;aux courts.
            </li>
            <li>
              <strong>🚿 Vestiaires et sanitaires équipés</strong>{" "}: Le club dispose de
              vestiaires spacieux, de douches à l&apos;italienne avec sièges intégrés et de
              sanitaires adaptés.
            </li>
            <li>
              <strong>🥤 Club-house convivial</strong>{" "}: Notre espace de détente et de
              restauration est entièrement accessible de plain-pied pour partager un moment après
              les entraînements ou lors des tournois mixtes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛠️ Espace matériel et préparation</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🗄️ Local de stockage sécurisé</strong>{" "}: Un espace dédié et accessible
              permet de ranger les fauteuils multisports d&apos;initiation prêtés par le club ainsi
              que le matériel des adhérents.
            </li>
            <li>
              <strong>🔧 Zone d&apos;entretien rapide</strong>{" "}: Un coin technique avec pompe
              haute pression et outillage de base est disponible pour vérifier la pression de vos
              pneus ou ajuster les sangles de votre fauteuil avant d&apos;entrer sur le court.
            </li>
            <li>
              <strong>🏋️ Espace de préparation physique</strong>{" "}: Une salle équipée permet de
              réaliser les séances de Préparation Physique Générale (PPG) axées sur le renforcement
              du tronc et des membres supérieurs.
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
            🎾 Types d&apos;Entraînement &amp; Préparation Physique ♿
          </h3>
          <p className="lede">
            Manier une raquette tout en propulsant un fauteuil demande une coordination hors pair.
            Nos séances sont encadrées par des enseignants de tennis spécialement formés aux
            exigences du paratennis. Elles s&apos;adaptent à votre profil, que vous soyez débutant
            ou compétiteur.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📋 Nos formules d&apos;entraînement</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🌱 Initiation et Loisir</strong>{" "}: Ce programme s&apos;adresse aux nouveaux
              adhérents qui souhaitent découvrir la discipline à leur rythme. L&apos;objectif est
              d&apos;apprendre les bases du déplacement en fauteuil de sport et de prendre du
              plaisir dans les premiers échanges.
            </li>
            <li>
              <strong>🏆 Perfectionnement et Compétition</strong>{" "}: Ces séances intensives visent
              les joueurs engagés sur le circuit officiel. Le travail porte sur la tactique de
              match, la précision des frappes et la vitesse d&apos;exécution.
            </li>
            <li>
              <strong>🤝 Entraînements Mixtes (Valides / Fauteuil)</strong>{" "}: Fidèle à
              l&apos;esprit d&apos;inclusion du tennis-fauteuil, le club organise des séances
              partagées. Joueurs en fauteuil et joueurs debout s&apos;entraînent ensemble pour
              préparer les tournois mixtes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Déroulement d&apos;une séance type (1 h 10)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🔥 L&apos;échauffement spécifique (15 min)</strong>{" "}: Maniabilité du
              fauteuil sans balle (lignes droites, slaloms, demi-tours rapides, reculs) pour faire
              monter le rythme cardiaque et préparer les épaules.
            </li>
            <li>
              <strong>🎾 Le corps de séance (45 min)</strong>{" "}: Exercices de frappe combinés aux
              déplacements, en insistant sur la synchronisation (placer le fauteuil par rapport au
              rebond, lâcher les roues pour armer, frapper, relancer).
            </li>
            <li>
              <strong>🧘 Le jeu dirigé et le retour au calme (10 min)</strong>{" "}: Matchs au format
              adapté (tie-break) et étirements ciblés du haut du corps (épaules, trapèzes, bras).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💪 La Préparation Physique Générale (PPG)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🧱 Renforcement du tronc</strong>{" "}: Les exercices ciblent les abdominaux et
              les dorsaux afin d&apos;assurer un meilleur équilibre lors des frappes puissantes.
            </li>
            <li>
              <strong>⚡ Puissance explosive</strong>{" "}: Des ateliers spécifiques développent la
              force des bras pour améliorer la vitesse de démarrage du fauteuil et l&apos;impact
              dans la balle.
            </li>
            <li>
              <strong>🫁 Endurance cardiovasculaire</strong>{" "}: Un travail de fond permet de
              maintenir une intensité élevée tout au long d&apos;un match.
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
        <h2>Tennis en chaise</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
