"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function BasketFauteuilPage() {
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
        <p>Présentation technique des fauteuils de sport.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Exercices de maniabilité, passes et préparation physique.</p>
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
        <p>Parcours des meilleurs athlètes.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">♿ Présentation du Basket Fauteuil chez KABSA</h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏀 L&apos;essence de la discipline</h3>
          <p className="lede">
            Le basket fauteuil (ou handibasket) est un sport collectif spectaculaire, dérivé du
            basket-ball traditionnel et conçu pour être pratiqué en fauteuil roulant. Créé à la fin
            de la Seconde Guerre mondiale pour la rééducation des soldats blessés, il est
            aujourd&apos;hui l&apos;une des disciplines phares des Jeux Paralympiques.
          </p>
          <p className="lede">
            Sur le terrain, l&apos;intensité et l&apos;exigence sont identiques à celles du basket
            debout : deux équipes de cinq joueurs s&apos;affrontent sur un terrain aux dimensions
            standards avec un panier fixé à 3,05 mètres de hauteur. La principale adaptation
            concerne la règle du « marcher » : un joueur en possession du ballon peut le poser sur
            ses genoux et pousser ses roues deux fois maximum avant de devoir dribbler, passer ou
            tirer.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Un sport inclusif ouvert à tous</h3>
          <p className="lede">
            Chez KABSA, le basket fauteuil s&apos;adresse principalement aux personnes présentant
            une déficience motrice (paraplégie, tétraplégie, hémiplégie, amputation, agénésie,
            infirmité motrice cérébrale, poliomyélite ou atteintes articulaires et neurologiques
            sévères).
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀 La classification fonctionnelle</strong>{" "}: Pour garantir une équité
              sportive parfaite, chaque joueur reçoit une note allant de 1,0 à 4,5 points selon son
              degré de mobilité du tronc et des membres (plus le handicap est lourd, plus la note
              est basse). En match officiel, le total des points des cinq joueurs d&apos;une équipe
              sur le terrain ne doit pas dépasser 14 points (ou 14,5 points dans certains
              championnats nationaux).
            </li>
            <li>
              <strong>♿ L&apos;ouverture aux joueurs valides</strong>{" "}: Afin de favoriser la
              mixité et l&apos;inclusion, le règlement autorise également les joueurs valides
              (crédités de 5 points) à pratiquer la discipline et à intégrer les effectifs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">⚙️ Un matériel de haute précision</h3>
          <p className="lede">
            Si le ballon et le terrain restent classiques, le fauteuil roulant de sport est le
            véritable outil de performance du joueur. Conçu sur mesure pour allier vitesse,
            maniabilité et sécurité, il se distingue d&apos;un fauteuil de ville par plusieurs
            caractéristiques techniques :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Des roues arrière fortement inclinées (carrossage)</strong>{" "}: Elles
              offrent une stabilité latérale optimale et permettent des changements de direction
              ultra-rapides.
            </li>
            <li>
              <strong>🛡️ Des roulettes anti-bascule à l&apos;arrière</strong>{" "}: Elles sécurisent
              le joueur lors des accélérations brusques ou des tirs en extension.
            </li>
            <li>
              <strong>⚡ Un cadre rigide et léger</strong>{" "}: Fabriqué en aluminium ou en titane,
              il intègre un pare-chocs à l&apos;avant pour protéger les jambes lors des contacts.
            </li>
            <li>
              <strong>🔒 Des sangles de maintien</strong>{" "}: Positionnées aux cuisses et au
              bassin, elles permettent au joueur de faire corps avec sa machine.
            </li>
          </ul>

          <p className="lede">
            <em>🏀 L&apos;engagement KABSA :</em>{" "}Lors des entraînements au sein de notre club,
            tous les pratiquants inscrits — en situation de handicap ou valides — bénéficient
            d&apos;un accès à un fauteuil adapté. Pour les rencontres officielles, chaque équipement
            est contrôlé selon les normes strictes de l&apos;IWBF (International Wheelchair
            Basketball Federation), notamment sur la hauteur d&apos;assise liée à la classification
            du joueur.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏋️ Nos entraînements et la préparation physique
          </h3>
          <p className="lede">
            Nos séances sont structurées pour développer à la fois l&apos;aisance individuelle et la
            cohésion d&apos;équipe :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Manipulation du fauteuil (Chair Skills)</strong>{" "}: Travail de sprints,
              slaloms, freinages et pivots pour maîtriser ses déplacements.
            </li>
            <li>
              <strong>🏀 Technique individuelle</strong>{" "}: Coordination entre le dribble et la
              poussée des roues, passes à une ou deux mains et tirs (effectués en restant
              impérativement assis dans le fauteuil, sous peine de faute technique).
            </li>
            <li>
              <strong>📋 Tactique collective</strong>{" "}: Mise en place des blocs et des écrans —
              les fauteuils servant à bloquer l&apos;espace pour libérer des coéquipiers —,
              transitions rapides et gestion des 24 secondes de possession.
            </li>
            <li>
              <strong>💪 Préparation physique</strong>{" "}: Le handibasket sollicitant fortement le
              haut du corps, un travail spécifique de renforcement musculaire (bras, épaules, dos,
              abdominaux) et d&apos;endurance cardiovasculaire est intégré pour tenir le rythme
              intense des matchs.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 De la pratique interne à la haute compétition
          </h3>
          <p className="lede">
            La vie sportive de KABSA est rythmée par la compétition à tous les niveaux. Nos matchs
            internes permettent à chacun de progresser en situation réelle et de tester les
            combinaisons d&apos;équipes dans le respect de la règle des 14 points.
          </p>
          <p className="lede">
            Pour nos éléments les plus aguerris, KABSA s&apos;engage au niveau national et
            international en intégrant ses meilleurs joueurs dans les championnats officiels
            structurés par divisions (Nationale 3 et au-delà). Les rencontres se disputent en 4
            quart-temps de 10 minutes. C&apos;est un spectacle total où l&apos;engagement physique
            et les chocs tactiques entre fauteuils exigent aussi une réactivité exemplaire des
            mécaniciens en bord de terrain pour réparer la moindre crevaison ou casse mécanique en
            un temps record.
          </p>
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
          <h3 className="rf-blocktitle">♿🏀 Accessibilité &amp; Pratique chez KABSA</h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Une discipline ouverte à tous les profils
          </h3>
          <p className="lede">
            Chez KABSA, nous croyons que le sport est un vecteur d&apos;inclusion unique. Le basket
            fauteuil s&apos;adresse avant tout aux personnes présentant une déficience motrice
            affectant les membres inférieurs ou supérieurs (paraplégie, tétraplégie, hémiplégie,
            amputation, agénésie, infirmité motrice cérébrale, poliomyélite ou atteintes
            articulaires et neurologiques sévères).
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀 L&apos;équité grâce à la classification</strong>{" "}: Pour que chacun
              trouve sa place sur le terrain, chaque joueur en situation de handicap se voit
              attribuer un barème de 1,0 à 4,5 points selon ses capacités fonctionnelles. Lors des
              rencontres officielles, le total des points des cinq joueurs présents sur le parquet
              ne peut excéder 14 points (ou 14,5 points selon les championnats).
            </li>
            <li>
              <strong>♿ La mixité avec les joueurs valides</strong>{" "}: Le handibasket a la
              particularité d&apos;autoriser les joueurs valides (évalués à 5 points) à rejoindre
              les équipes. C&apos;est l&apos;occasion idéale de partager un sport exigeant entre
              amis ou en famille, dans un véritable esprit de cohésion.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚙️ Prêt de matériel : venez comme vous êtes !
          </h3>
          <p className="lede">
            Pas besoin d&apos;investir dans un équipement coûteux pour débuter ou s&apos;entraîner
            chez KABSA. Nous mettons tout en œuvre pour lever les freins matériels :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Mise à disposition de fauteuils de sport</strong>{" "}: Lors de nos séances
              d&apos;entraînement, tous les membres inscrits — en situation de handicap comme
              valides — ont accès à un fauteuil roulant adapté fourni par le club.
            </li>
            <li>
              <strong>🛡️ Sécurité et confort</strong>{" "}: Nos fauteuils sont équipés de roues
              inclinées (carrossage) pour la stabilité, de roulettes anti-bascule, de pare-chocs
              avant et de sangles de maintien. Notre équipe vous aide à régler votre assise dès
              votre arrivée.
            </li>
            <li>
              <strong>🏀 Pratique en compétition</strong>{" "}: Pour les joueurs évoluant en
              championnat officiel, le club veille à la conformité stricte des fauteuils avec les
              normes internationales de l&apos;IWBF (notamment sur la hauteur maximale de
              l&apos;assise).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏟️ Un accueil et des infrastructures adaptés
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Accès de plain-pied</strong>{" "}: Nos salles d&apos;entraînement et de
              match disposent d&apos;accès sans marches, de portes larges et d&apos;ascenseurs ou
              rampes aux normes PMR.
            </li>
            <li>
              <strong>🚿 Vestiaires et sanitaires accessibles</strong>{" "}: Des espaces spacieux et
              adaptés sont disponibles pour vous changer et vous doucher en toute autonomie.
            </li>
            <li>
              <strong>🚗 Stationnement facilité</strong>{" "}: Des places de parking réservées sont
              situées à proximité immédiate de l&apos;entrée du complexe sportif.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Comment rejoindre KABSA ? (Démarches et essais)
          </h3>
          <p className="lede">
            Que vous soyez débutant complet, ancien basketteur ou compétiteur confirmé, intégrer le
            club se fait en toute simplicité :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀 Séance d&apos;essai gratuite</strong>{" "}: Venez tester le maniement du
              fauteuil et le tir au panier lors d&apos;un entraînement découverte. Prévoyez
              simplement une tenue de sport confortable et de l&apos;eau.
            </li>
            <li>
              <strong>🩺 Dossier d&apos;inscription</strong>{" "}: Pour valider votre licence, un
              certificat médical de non-contre-indication à la pratique du basket fauteuil (en
              loisir ou en compétition) vous sera demandé.
            </li>
            <li>
              <strong>📅 Accompagnement personnalisé</strong>{" "}: Nos entraîneurs et mécaniciens
              vous accueillent pour évaluer vos besoins, ajuster votre matériel et vous intégrer
              progressivement au collectif.
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
          <h3 className="rf-blocktitle">🏟️♿ Nos Infrastructures chez KABSA</h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏀 Un terrain homologué pour la performance
          </h3>
          <p className="lede">
            Le basket fauteuil exige une surface de jeu irréprochable pour garantir la vitesse des
            déplacements, la précision des pivots et la sécurité des athlètes. KABSA évolue dans un
            complexe sportif moderne répondant aux exigences de la compétition :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>📐 Dimensions réglementaires</strong>{" "}: Un terrain standard de 28 mètres
              sur 15 mètres, offrant tout l&apos;espace nécessaire au jeu rapide et aux phases
              tactiques.
            </li>
            <li>
              <strong>🏀 Équipements officiels</strong>{" "}: Des paniers fixés à la hauteur
              réglementaire de 3,05 mètres, équipés de panneaux en verre trempé et d&apos;afficheurs
              électroniques des 24 secondes de possession.
            </li>
            <li>
              <strong>✨ Revêtement haute glisse</strong>{" "}: Un parquet (ou sol sportif
              synthétique haute densité) parfaitement entretenu, offrant une adhérence optimale aux
              pneus des fauteuils sans laisser de traces.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Un complexe sportif 100 % accessible</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🚪 Accès de plain-pied</strong>{" "}: Entrée directe sans seuil ni marche
              depuis l&apos;extérieur jusqu&apos;au bord du terrain, avec des portes automatiques
              extra-larges pour faciliter le passage des fauteuils de sport.
            </li>
            <li>
              <strong>🚿 Vestiaires et sanitaires PMR</strong>{" "}: Des espaces spacieux équipés de
              bancs de transfert, de douches à l&apos;italienne avec sièges rabattables et de
              sanitaires adaptés.
            </li>
            <li>
              <strong>🚗 Stationnement dédié</strong>{" "}: Des places de parking réservées PMR
              situées juste devant l&apos;entrée principale du gymnase pour simplifier le chargement
              et le déchargement du matériel.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔧 L&apos;espace technique et le stockage du matériel
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Local de stockage sécurisé</strong>{" "}: Une salle située au niveau du
              terrain abrite le parc de fauteuils mis à disposition des adhérents, ainsi que le
              matériel d&apos;entraînement (ballons, plots, chasubles).
            </li>
            <li>
              <strong>🛠️ Zone mécanique et atelier</strong>{" "}: Un espace équipé (compresseur
              haute pression, pièces de rechange, outillage spécifique) permettant à nos mécaniciens
              d&apos;intervenir rapidement avant, pendant et après les matchs pour ajuster un
              réglage ou réparer une crevaison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👏 Accueil du public et des supporters</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>👀 Tribunes accessibles</strong>{" "}: Des emplacements réservés aux personnes
              à mobilité réduite avec une vue dégagée sur l&apos;ensemble du parquet.
            </li>
            <li>
              <strong>☕ Espace convivialité</strong>{" "}: Un hall d&apos;accueil ou club-house pour
              prolonger les échanges après les entraînements et célébrer les victoires lors des
              jours de match.
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
          <h3 className="rf-blocktitle">🏀♿ Nos Types d&apos;Entraînement chez KABSA</h3>
          <p className="lede">
            Chez KABSA, nos séances sont conçues pour s&apos;adapter au niveau, aux objectifs et aux
            capacités physiques de chaque pratiquant. Que vous veniez pour le plaisir du jeu ou pour
            viser les sommets des championnats nationaux, notre encadrement propose des
            entraînements complets et progressifs.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📋 Les 4 piliers d&apos;une séance type</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ La manipulation du fauteuil (Chair Skills)</strong>{" "}: Avant même de
              toucher le ballon, il faut faire corps avec sa machine. Nos exercices travaillent les
              accélérations explosives, les slaloms serrés, les freinages brusques et les pivots
              rapides.
            </li>
            <li>
              <strong>🏀 Les fondamentaux techniques avec ballon</strong>{" "}: Apprentissage et
              perfectionnement du dribble synchronisé avec les poussées de roues (règle des deux
              poussées), passes précises en mouvement, et tirs en suspension (réalisés en restant
              assis dans le fauteuil).
            </li>
            <li>
              <strong>🧠 La tactique et le jeu collectif</strong>{" "}: En handibasket, l&apos;espace
              occupé par les fauteuils est stratégique. Nous travaillons la pose d&apos;écrans et de
              blocs pour libérer les shooteurs, les transitions rapides en contre-attaque et la
              gestion du chrono des 24 secondes.
            </li>
            <li>
              <strong>💪 La préparation physique adaptée</strong>{" "}: Le basket fauteuil sollicite
              intensément le haut du corps. Nos séances intègrent du renforcement musculaire ciblé
              (bras, épaules, dorsaux, sangle abdominale) et un travail d&apos;endurance
              cardiovasculaire indispensable sur les 40 minutes de match.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Des formules adaptées à chaque profil
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🌱 Groupe Découverte &amp; Loisir (Débutants et mixité)</strong>{" "}: Ouvert à
              tous (personnes en situation de handicap et joueurs valides), ce créneau met
              l&apos;accent sur la prise en main du fauteuil, l&apos;apprentissage ludique des
              règles et le plaisir du jeu collectif sans pression de résultat.
            </li>
            <li>
              <strong>🔥 Groupe Compétition (Perfectionnement et équipe première)</strong>{" "}:
              Destiné aux joueurs engagés en championnat (Nationale 3 et divisions supérieures).
              Rythme soutenu, travail approfondi des systèmes de jeu, des combinaisons à 14 points
              et de l&apos;intensité des duels physiques.
            </li>
            <li>
              <strong>⚡ Séances Spécifiques &amp; Matchs Internes</strong>{" "}: Des temps dédiés au
              travail individuel (adresse au tir, mécanique de poussée) ainsi que des oppositions
              internes arbitrées pour mettre en application les schémas tactiques en conditions
              réelles.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Déroulement classique d&apos;une séance (1h30 à 2h00)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🔧 15 min – Préparation et réglages</strong>{" "}: Installation dans le
              fauteuil, vérification de la pression des pneus, ajustement des sangles et
              échauffement articulaire du haut du corps.
            </li>
            <li>
              <strong>♿ 25 min – Maniabilité et cardio</strong>{" "}: Parcours d&apos;agilité en
              fauteuil, sprints et travail de résistance.
            </li>
            <li>
              <strong>🏀 30 min – Ateliers techniques</strong>{" "}: Dribble, passes en mouvement et
              séquences de tirs sous pression.
            </li>
            <li>
              <strong>🏆 30 min – Opposition et tactique</strong>{" "}: Mise en situation de match à
              5 contre 5 avec consignes collectives et retour au calme (étirements).
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
        <h2>Basket-fauteuil</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
