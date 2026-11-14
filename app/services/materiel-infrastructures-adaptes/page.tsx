"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function MaterielInfrastructuresAdaptesPage() {
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
          <h3 className="rf-blocktitle">
            🏟️⚙️ Matériel &amp; Infrastructures Adaptés Multidisciplinaires
          </h3>
          <p className="svc-chapo">
            Un environnement moderne, 100 % accessible et des équipements de haute précision pour
            libérer le potentiel de chaque athlète.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, l&apos;inclusion passe avant tout par des lieux de pratique
            sans barrières et un matériel pensé pour chaque morphologie et chaque discipline. Que
            vous veniez pour découvrir une activité en loisir ou pour préparer des compétitions
            officielles, nous mettons à votre disposition des installations certifiées et un parc
            d&apos;équipements spécialisés en prêt.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ♿ Un Complexe 100 % Accessible de l&apos;Arrivée au Terrain
          </h3>
          <p className="lede">
            Parce que l&apos;autonomie de nos sportifs, visiteurs et familles est une priorité
            absolue, l&apos;ensemble de nos sites respecte les normes d&apos;accessibilité
            universelle les plus strictes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accès extérieur et stationnement</strong>{" "}: Places de parking réservées
              PMR à proximité immédiate des entrées, cheminements stabilisés sans seuil ni marche,
              rampes d&apos;accès douces et repères podotactiles pour les sportifs malvoyants ou
              non-voyants.
            </li>
            <li>
              <strong>Circulations fluides</strong>{" "}: Portes automatiques extra-larges adaptées
              au passage des fauteuils roulants électriques et des fauteuils de sport (plus larges à
              la base en raison du carrossage des roues).
            </li>
            <li>
              <strong>Confort sensoriel et signalétique</strong>{" "}: Repérage visuel contrasté,
              pictogrammes clairs et traitement acoustique haute performance (notamment dans le hall
              aquatique) pour réduire la résonance sonore.
            </li>
            <li>
              <strong>Vestiaires et sanitaires PMR</strong>{" "}: Cabines spacieuses permettant le
              demi-tour complet d&apos;un fauteuil, banquettes de transfert surélevées, douches à
              l&apos;italienne avec sièges rabattables, sanitaires suspendus avec barres
              d&apos;appui et casiers à hauteur accessible.
            </li>
            <li>
              <strong>Accueil du public et convivialité</strong>{" "}: Tribunes équipées
              d&apos;emplacements réservés avec vue dégagée et un Club-House « Espace KABSA »
              chaleureux pour partager les moments d&apos;après-match.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏟️ Nos Espaces Sportifs Homologués par Discipline
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀 Le Gymnase Multisports</strong>{" "}: Un parquet haute glisse aux dimensions
              réglementaires (28 m × 15 m), équipé de paniers à 3,05 m, d&apos;afficheurs
              électroniques des 24 secondes et d&apos;une zone atelier mécanique (compresseur haute
              pression, pièces de rechange) permettant d&apos;ajuster les réglages ou de réparer une
              crevaison en temps record.
            </li>
            <li>
              <strong>🏃‍♂️ Le Stade d&apos;Athlétisme</strong>{" "}: Un anneau synthétique de 400 m
              à couloirs élargis pour faciliter le passage des fauteuils et des binômes avec guide,
              complété par des aires de sauts sécurisées et des cercles de lancer équipés de points
              d&apos;ancrage au sol pour fixer les sièges de lancer rigides.
            </li>
            <li>
              <strong>🏊 Le Complexe Aquatique</strong>{" "}: Un bassin d&apos;apprentissage chauffé
              entre 29 °C et 32 °C pour le bien-être et la rééducation douce, ainsi qu&apos;un
              bassin sportif à couloirs larges dotés de rampes d&apos;accès progressives et
              d&apos;escaliers à doubles mains courantes.
            </li>
            <li>
              <strong>⚽ Les Terrains de Football &amp; Espaces Nature</strong>{" "}: Un terrain
              d&apos;honneur synthétique dernière génération avec éclairage LED nocturne, un terrain
              annexe en pelouse naturelle dédié aux plus jeunes, ainsi qu&apos;un accès direct aux
              sentiers forestiers et parcs locaux pour le trail et la marche nordique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛠️ Un Parc de Matériel Spécialisé Mis à Disposition
          </h3>
          <p className="lede">
            Pas besoin d&apos;investir dans un équipement coûteux pour débuter ou s&apos;entraîner
            chez KABSA. Nous mettons gratuitement à disposition de nos adhérents un matériel
            d&apos;initiation et de performance entretenu sur place :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀♿ Basket Fauteuil</strong>{" "}: Fauteuils roulants de sport en aluminium ou
              titane — roues inclinées (carrossage) pour la stabilité, roulettes anti-bascule,
              pare-chocs avant et sangles de maintien.
            </li>
            <li>
              <strong>🏃‍♂️♿ Para-athlétisme</strong>{" "}: Fauteuils de course à 3 roues, lames en
              carbone, Frame Runners (draisiennes) et liens de guidage — restitution d&apos;énergie,
              soutien de l&apos;équilibre, aérodynamisme et synchronisation en binôme avec guide.
            </li>
            <li>
              <strong>🏊♿ Natation Adaptée</strong>{" "}: Lève-personnes hydrauliques fixes, potences
              mobiles, fauteuils submersibles et matériel flottant ergonomique — mise à l&apos;eau
              sécurisée en autonomie et apprentissage progressif (ceintures, frites haute densité,
              planches).
            </li>
            <li>
              <strong>⚽🏃‍♂️ Sports Collectifs &amp; Piste</strong>{" "}: Ballons adaptés, haies
              réglables, starting-blocks, poids, disques, javelots et bâtons de marche nordique —
              matériel pédagogique complet mis à disposition lors de toutes les séances.
            </li>
            <li>
              <strong>💪 Préparation Physique</strong>{" "}: Postes de musculation à poulies
              réglables, ergomètres à bras et poids libres — espace de circulation dégagé permettant
              le renforcement directement depuis un fauteuil roulant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛡️ Sécurité, Maintenance &amp; Conformité Officielle
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Contrôle réglementaire</strong>{" "}: Pour nos compétiteurs, l&apos;ensemble
              du matériel est réglé et vérifié selon les normes strictes des fédérations
              internationales (IWBF pour le basket fauteuil, World Para Athletics).
            </li>
            <li>
              <strong>Assistance mécanique permanente</strong>{" "}: Nos techniciens et bénévoles
              assurent l&apos;entretien régulier du parc matériel dans nos locaux de stockage
              sécurisés et interviennent en bord de terrain avant, pendant et après chaque séance.
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
            🔄 Déroulement : De Votre Arrivée à la Prise en Main du Matériel
          </h3>
          <p className="svc-chapo">
            Un parcours fluide, sécurisé et accompagné à chaque étape pour profiter pleinement de
            nos infrastructures.
          </p>
          <p className="lede">
            Chez KABSA, tout est pensé pour simplifier votre venue et lever les freins matériels.
            Que vous veniez avec votre propre équipement ou que vous utilisiez le parc matériel du
            club, notre équipe technique et nos encadrants vous accompagnent pas à pas, de votre
            arrivée sur le site jusqu&apos;à votre retour au vestiaire.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🗺️ Les 5 Étapes de Votre Parcours sur Site
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚗 1. Accueil &amp; Accès Facilité (15 min avant la séance)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Arrivée sans obstacle</strong>{" "}: Vous accédez directement aux places de
              parking réservées PMR situées devant l&apos;entrée principale, ou empruntez les
              cheminements stabilisés et podotactiles depuis les arrêts de transports en commun.
            </li>
            <li>
              <strong>Orientation et vestiaires</strong>{" "}: Nos portes automatiques extra-larges
              et notre signalétique contrastée vous guident vers les vestiaires PMR spacieux
              (banquettes surélevées, douches à l&apos;italienne et casiers accessibles). Nos
              équipes se tiennent disponibles dès l&apos;accueil pour vous assister au besoin.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔧 2. Attribution &amp; Réglages Anatomiques du Matériel
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Mise à disposition gratuite</strong>{" "}: Si vous ne possédez pas
              d&apos;équipement, notre staff vous attribue un matériel adapté parmi notre parc
              (fauteuil de sport multisports, fauteuil de course, lame de test, Frame Runner, bâtons
              de marche nordique ou matériel flottant).
            </li>
            <li>
              <strong>Ajustements sur-mesure</strong>{" "}: Avant d&apos;entrer sur l&apos;aire de
              jeu, nos éducateurs et mécaniciens règlent l&apos;équipement à votre morphologie. Ils
              vérifient la hauteur d&apos;assise, la pression des pneus, le serrage des sangles de
              maintien (cuisses et bassin) ou le positionnement des manchons de prothèses pour
              garantir votre sécurité et votre confort vasculaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏟️ 3. Transfert &amp; Mise en Place sur l&apos;Aire de Pratique
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accès direct aux espaces</strong>{" "}: Vous rejoignez le parquet du gymnase,
              la piste d&apos;athlétisme, le terrain synthétique ou les plages du bassin de
              plain-pied, sans marche ni seuil.
            </li>
            <li>
              <strong>Dispositifs sécurisés</strong>{" "}: Pour la natation adaptée, la mise à
              l&apos;eau s&apos;effectue en douceur via nos rampes progressives, escaliers à doubles
              mains courantes, fauteuils submersibles ou lève-personnes hydrauliques. En
              para-athlétisme, nos techniciens arriment solidement les sièges de lancer aux points
              d&apos;ancrage au sol.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛠️ 4. Assistance Technique Pendant la Séance
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Réactivité en bord de terrain</strong>{" "}: Durant tout l&apos;entraînement
              ou le match, nos mécaniciens restent mobilisés dans notre zone atelier dédiée
              (compresseurs haute pression et pièces de rechange).
            </li>
            <li>
              <strong>Intervention rapide</strong>{" "}: En cas de crevaison, de besoin
              d&apos;ajustement d&apos;un réglage ou d&apos;un changement d&apos;équipement,
              l&apos;intervention se fait en un temps record pour ne pas interrompre votre pratique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧼 5. Retour, Entretien &amp; Stockage Sécurisé
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Fin de séance et récupération</strong>{" "}: Après le retour au calme, vous
              rejoignez les vestiaires et douches accessibles, puis l&apos;espace convivialité
              (Club-House) pour partager un moment avec le groupe.
            </li>
            <li>
              <strong>Maintenance du matériel</strong>{" "}: Le matériel prêté est nettoyé, contrôlé
              par nos techniciens et rangé dans nos locaux de stockage sécurisés situés au niveau
              des terrains, prêt pour la séance suivante.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Le Parcours de Prêt de Matériel pour les Nouveaux Adhérents
          </h3>
          <p className="lede">
            Vous souhaitez essayer une discipline avant de vous engager ? Voici comment se déroule
            la mise à disposition :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Étape 1 – Séance(s) d&apos;essai gratuite(s)</strong>{" "}: Venez simplement
              en tenue de sport confortable. Le club vous prête l&apos;intégralité du matériel
              technique nécessaire dès votre première venue.
            </li>
            <li>
              <strong>Étape 2 – Évaluation des besoins</strong>{" "}: Nos entraîneurs et mécaniciens
              identifient avec vous le matériel le plus adapté à votre handicap, votre
              classification et vos objectifs (loisir ou compétition).
            </li>
            <li>
              <strong>Étape 3 – Pratique annuelle &amp; Compétition</strong>{" "}: Une fois inscrit,
              vous bénéficiez d&apos;un accès régulier au parc matériel du club lors des
              entraînements. Pour les compétiteurs, nous veillons à la stricte conformité des
              équipements avec les normes fédérales (IWBF, World Para Athletics).
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
        <h2>Matériel &amp; infrastructures adaptés</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
