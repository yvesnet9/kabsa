"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function HalterophiliePage() {
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
        <p>Découvrez la section Haltérophilie de KABSA.</p>
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
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Haltérophiles KABSA</h3>
        <p>Parcours des meilleurs haltérophiles, hommes et femmes.</p>
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
            🏋️‍♂️ Haltérophilie Masculin &amp; Féminin — Dépasser ses limites, développer sa force
          </h3>
          <p className="lede">
            Bienvenue dans la section Haltérophilie de l&apos;association KABSA ! Discipline
            olympique historique, l&apos;haltérophilie est bien plus qu&apos;une simple
            démonstration de force brute. C&apos;est un sport d&apos;une immense précision
            technique, mêlant vitesse, souplesse, coordination et mental d&apos;acier. Que vous
            cherchiez à sculpter votre corps, à booster vos performances athlétiques ou à relever
            des défis en compétition, notre club vous accompagne pas à pas.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Une pratique inclusive : Pour Elle &amp; Pour Lui
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous croyons fermement que les barres de musculation
            n&apos;ont pas de genre. Notre salle est un espace d&apos;entraide et de respect où
            chacun progresse à son rythme.
          </p>
          <h4 className="rf-blocktitle">👩 Haltérophilie Féminine : Brisez les clichés !</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les bénéfices</strong>{" "}: Contrairement aux idées reçues, l&apos;haltérophilie
              ne vous « épaissira » pas massivement. Elle permet de tonifier la silhouette, de
              densifier la masse osseuse, de brûler des calories et de développer une posture
              athlétique et confiante.
            </li>
            <li>
              <strong>Pour qui ?</strong>{" "}Des débutantes aux compétitrices. C&apos;est le sport
              idéal pour se réapproprier son corps et développer une force fonctionnelle
              impressionnante.
            </li>
          </ul>
          <h4 className="rf-blocktitle">👨 Haltérophilie Masculine : Force et explosion</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les bénéfices</strong>{" "}: Développez une puissance musculaire globale,
              améliorez votre détente verticale, renforcez vos articulations et optimisez votre
              condition physique générale.
            </li>
            <li>
              <strong>Pour qui ?</strong>{" "}Que vous soyez novice ou athlète cherchant un transfert de
              force pour un autre sport (sport de combat, sprint, rugby…), vous trouverez ici un
              cadre rigoureux pour progresser.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Nos deux mouvements phares</h3>
          <p className="lede">
            L&apos;haltérophilie repose sur la maîtrise de deux mouvements olympiques passionnants :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;Arraché (Snatch)</strong>{" "}: Le mouvement le plus technique. Il consiste
              à monter la barre directement au-dessus de la tête en un seul mouvement fluide et
              rapide.
            </li>
            <li>
              <strong>L&apos;Épaulé-Jeté (Clean &amp; Jerk)</strong>{" "}: Le mouvement de la force
              maximale. La barre est d&apos;abord amenée aux épaules (l&apos;épaulé) avant
              d&apos;être projetée à bout de bras au-dessus de la tête (le jeté).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎒 Pourquoi choisir l&apos;Association KABSA ?
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Encadrement professionnel</strong>{" "}: Nos entraîneurs diplômés corrigent vos
              postures en temps réel pour une pratique 100% sécurisée.
            </li>
            <li>
              <strong>Matériel de qualité</strong>{" "}: Barres olympiques adaptées (barres de 15 kg
              pour les femmes, 20 kg pour les hommes), disques de compétition en caoutchouc
              (bumpers) et plateaux d&apos;haltérophilie dédiés.
            </li>
            <li>
              <strong>Progression sur-mesure</strong>{" "}: Des séances adaptées à votre niveau, que
              vous n&apos;ayez jamais touché une barre de votre vie ou que vous visiez les podiums
              nationaux.
            </li>
            <li>
              <strong>Esprit de communauté</strong>{" "}: Chez KABSA, on s&apos;encourage, on célèbre
              les records personnels de chacun et on progresse ensemble dans la bonne humeur.
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
          <h3 className="rf-blocktitle">🗓️ Informations Pratiques</h3>
          <ul className="lede disc-arrow-list">
            <li><strong>Créneaux horaires</strong>{" "}: communiqués à l&apos;inscription.</li>
            <li><strong>Lieu</strong>{" "}: communiqué à l&apos;inscription.</li>
            <li>
              <strong>Équipement requis</strong>{" "}: une tenue de sport confortable, des chaussures à
              semelles plates (ou chaussures d&apos;haltérophilie) et votre motivation !
            </li>
          </ul>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✨ Prêt(e) à soulever votre premier poids ?
          </h3>
          <p className="lede">
            Venez tester la discipline lors d&apos;une séance d&apos;essai gratuite ! Les coachs et
            les adhérents KABSA vous attendent sur le plateau.
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
            ♿🤝 Accessibilité &amp; Pratique : L&apos;haltérophilie ouverte à tous
          </h3>
          <p className="lede">
            Chez KABSA, nous sommes convaincus que l&apos;haltérophilie est une discipline
            universelle. Quel que soit votre âge, votre genre, votre condition physique de départ ou
            votre parcours, notre salle est conçue pour vous accueillir dans les meilleures
            conditions.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Une discipline accessible à chaque profil
          </h3>
          <p className="lede">
            L&apos;haltérophilie est souvent perçue comme un sport réservé à une élite déjà musclée.
            Chez KABSA, nous cassons ce mythe au quotidien :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Débutants absolus</strong>{" "}: Vous n&apos;avez jamais touché une barre de
              votre vie ? C&apos;est le point de départ idéal. Nous commençons l&apos;apprentissage
              avec des bâtons en bois ou des barres ultra-légères (5 kg à 10 kg) pour maîtriser le
              geste technique en toute sécurité avant d&apos;ajouter le moindre poids.
            </li>
            <li>
              <strong>Pratique inclusive (Femmes &amp; Hommes)</strong>{" "}: Nos entraînements sont
              mixtes et basés sur l&apos;entraide. Nous disposons de matériel spécifiquement adapté
              à chaque morphologie, notamment des barres olympiques de 15 kg (plus fines, pour une
              meilleure prise en main) et de 20 kg.
            </li>
            <li>
              <strong>Sport-santé et seniors</strong>{" "}: L&apos;haltérophilie est excellente pour
              prévenir la perte musculaire, renforcer la densité osseuse et améliorer
              l&apos;équilibre. Nos coachs adaptent l&apos;amplitude des mouvements à votre
              souplesse et à vos éventuelles contraintes articulaires.
            </li>
            <li>
              <strong>Préparation physique croisée</strong>{" "}: Vous pratiquez déjà un autre sport
              (rugby, athlétisme, sports de combat, CrossFit…) ? Venez développer votre explosivité
              et votre gainage pour booster vos performances dans votre discipline principale.
            </li>
            <li>
              <strong>Accueil du handicap (Handisport / Para-haltérophilie)</strong>{" "}: Notre
              structure s&apos;engage pour l&apos;inclusion et étudie avec vous les adaptations
              possibles selon vos besoins.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛡️ Un cadre sécurisé et bienveillant</h3>
          <p className="lede">La sécurité est notre priorité absolue sur le plateau :</p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un encadrement diplômé</strong>{" "}: Vous n&apos;êtes jamais livré(e) à
              vous-même. Nos entraîneurs certifiés supervisent chaque séance et corrigent vos
              postures en temps réel pour prévenir tout risque de blessure.
            </li>
            <li>
              <strong>Une progression à votre rythme</strong>{" "}: Pas de compétition interne ni de
              jugement. Chacun avance selon ses capacités du jour, dans une ambiance conviviale où
              l&apos;on célèbre autant les premiers pas techniques que les records personnels.
            </li>
            <li>
              <strong>Un équipement professionnel</strong>{" "}: Vous vous entraînez sur de
              véritables plateaux d&apos;haltérophilie amortissants, avec des disques en caoutchouc
              (bumpers) conçus pour être lâchés au sol en toute sécurité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎒 Comment démarrer la pratique chez KABSA ?
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Réservez votre séance d&apos;essai gratuite</strong>{" "}: Venez découvrir
              l&apos;ambiance du club et tester les mouvements de base avec un coach.
            </li>
            <li>
              <strong>Préparez votre sac</strong>{" "}: Aucun investissement coûteux n&apos;est
              nécessaire pour débuter. Prévoyez simplement une tenue de sport confortable, une
              bouteille d&apos;eau, une serviette et des chaussures à semelles plates et rigides
              (évitez les chaussures de running trop molles).
            </li>
            <li>
              <strong>Choisissez votre formule</strong>{" "}: Après votre essai, optez pour la
              formule d&apos;adhésion qui correspond à vos objectifs (pratique loisir, santé ou
              préparation aux compétitions officielles).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Infos pratiques &amp; Horaires</h3>
          <ul className="lede disc-arrow-list">
            <li><strong>Horaires des créneaux</strong>{" "}: communiqués à l&apos;inscription.</li>
            <li><strong>Adresse de la salle</strong>{" "}: communiquée à l&apos;inscription.</li>
            <li>
              <strong>Accès &amp; Stationnement</strong>{" "}: accès transports en commun, parking
              et accès PMR (détails communiqués à l&apos;inscription).
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
            🏋️‍♀️ Infrastructures : Un espace pensé pour la performance et la sécurité
          </h3>
          <p className="lede">
            Chez KABSA, nous mettons à la disposition de nos adhérents des installations modernes et
            un matériel aux normes olympiques. Que vous veniez découvrir l&apos;haltérophilie ou
            préparer une compétition officielle, notre salle offre un environnement optimal pour
            progresser en toute confiance.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Un plateau technique d&apos;excellence
          </h3>
          <p className="lede">
            Notre espace principal est entièrement dédié à la pratique des mouvements olympiques
            (Arraché et Épaulé-Jeté) dans des conditions professionnelles :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Plateaux d&apos;haltérophilie dédiés</strong>{" "}: Nos zones de levage sont
              équipées de sols haute densité absorbant les chocs et les vibrations. Ils garantissent
              une stabilité parfaite sous vos pieds et permettent de lâcher la barre au sol en toute
              sécurité.
            </li>
            <li>
              <strong>Barres olympiques adaptées à tous</strong>{" "}: Nous disposons d&apos;un parc
              complet de barres de compétition et d&apos;entraînement (barres de 20 kg pour les
              hommes, barres de 15 kg plus fines pour les femmes, ainsi que des barres techniques
              légères de 5 kg à 10 kg pour l&apos;apprentissage).
            </li>
            <li>
              <strong>Disques en caoutchouc (Bumpers)</strong>{" "}: Nos poids sont calibrés et
              codés par couleur selon les standards internationaux, avec des disques fractionnés (de
              0,5 kg à 2,5 kg) pour permettre une progression millimétrée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">💪 Espace renforcement et mobilité</h3>
          <p className="lede">
            Parce que l&apos;haltérophilie exige un corps fort et souple, notre salle intègre des
            zones complémentaires :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Cages à squat et postes de tirage</strong>{" "}: Plusieurs racks robustes
              permettent de travailler la force pure (squats avant et arrière, développés, tirages)
              en autonomie ou sous le regard des coachs.
            </li>
            <li>
              <strong>Espace mobilité et échauffement</strong>{" "}: Une zone équipée de tapis,
              rouleaux de massage, élastiques et bâtons en bois pour préparer vos articulations
              avant chaque séance et favoriser la récupération.
            </li>
            <li>
              <strong>Petit matériel de préparation physique</strong>{" "}: Kettlebells, haltères,
              bancs réglables et boîtes de pliométrie pour développer votre explosivité et votre
              gainage.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚿 Confort et commodités</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Vestiaires et sanitaires</strong>{" "}: Des vestiaires propres et fonctionnels
              équipés de douches et de casiers pour sécuriser vos affaires personnelles pendant
              l&apos;entraînement.
            </li>
            <li>
              <strong>Zone de convivialité</strong>{" "}: Un espace détente pour échanger avec les
              autres adhérents, partager un verre d&apos;eau et débriefer vos séances dans la bonne
              humeur.
            </li>
            <li>
              <strong>Accès facilité</strong>{" "}: accès adapté aux personnes à mobilité réduite et
              stationnement à proximité (détails communiqués à l&apos;inscription).
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
            📋 Type d&apos;entraînement : Une méthodologie adaptée à vos objectifs
          </h3>
          <p className="lede">
            Chez KABSA, il n&apos;y a pas de séance type imposée à tout le monde. Nos entraîneurs
            diplômés conçoivent des programmes évolutifs qui s&apos;adaptent à votre niveau, à votre
            morphologie et à vos ambitions.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔄 Le déroulement d&apos;une séance type (1h30 à 2h00)
          </h3>
          <p className="lede">
            Chaque entraînement suit une structure rigoureuse pour maximiser vos progrès tout en
            préservant votre intégrité physique :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Échauffement et mobilité articulaire (15 à 20 min)</strong>{" "}: Préparation
              ciblée des poignets, des épaules, des hanches et des chevilles, indispensable pour
              adopter les bonnes postures sur le plateau.
            </li>
            <li>
              <strong>Travail technique spécifique (20 à 30 min)</strong>{" "}: Apprentissage et
              perfectionnement des mouvements olympiques (Arraché et Épaulé-Jeté) à travers des
              exercices éducatifs, d&apos;abord à vide puis en montée de charge progressive.
            </li>
            <li>
              <strong>Développement de la force (20 à 30 min)</strong>{" "}: Exercices
              complémentaires essentiels comme les squats (avant et arrière), les tirages
              d&apos;haltérophilie et les développés pour bâtir une base solide.
            </li>
            <li>
              <strong>Gainage et retour au calme (10 à 15 min)</strong>{" "}: Renforcement de la
              sangle abdominale et étirements doux pour favoriser la récupération musculaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Nos différents axes d&apos;entraînement
          </h3>
          <p className="lede">
            Selon vos envies et votre expérience, nos coachs orientent votre pratique vers l&apos;un
            de ces quatre parcours :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Initiation &amp; Découverte</strong>{" "}: Idéal pour les grands débutants.
              L&apos;accent est mis à 100 % sur l&apos;apprentissage des gestes en sécurité, la
              coordination et la souplesse, sans aucune pression de charge.
            </li>
            <li>
              <strong>Haltérophilie Loisir &amp; Remise en forme</strong>{" "}: Parfait pour
              sculpter sa silhouette, gagner en tonicité, brûler des calories et évacuer le stress
              dans une ambiance conviviale et dynamique.
            </li>
            <li>
              <strong>Préparation Physique (Transfert sportif)</strong>{" "}: Destiné aux athlètes
              d&apos;autres disciplines (rugby, sports de combat, sprint, CrossFit…) souhaitant
              développer leur explosivité, leur détente et leur puissance globale.
            </li>
            <li>
              <strong>Pôle Compétition</strong>{" "}: Un suivi individualisé et une planification
              annuelle par cycles pour les adhérents qui souhaitent relever le défi des compétitions
              officielles (départementales, régionales ou nationales).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 L&apos;accompagnement KABSA : La force du collectif
          </h3>
          <p className="lede">
            Bien que l&apos;haltérophilie soit un sport individuel sur le plateau,
            l&apos;entraînement chez KABSA se vit en groupe :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Corrections en temps réel</strong>{" "}: Nos coachs circulent en permanence
              entre les plateaux pour ajuster vos placements au millimètre près.
            </li>
            <li>
              <strong>Programmation sur-mesure</strong>{" "}: Chaque adhérent dispose de sa propre
              feuille de route avec ses charges de travail calculées selon ses records personnels.
            </li>
            <li>
              <strong>Émulation positive</strong>{" "}: Vous partagez le plateau avec des passionnés
              de tous niveaux qui s&apos;encouragent mutuellement à chaque barre soulevée.
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
        <h2>Haltérophilie</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
