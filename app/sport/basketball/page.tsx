"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function BasketballPage() {
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
        <p>Découvrez le pôle Basketball de KABSA.</p>
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
          <h3 className="rf-blocktitle">🏀 Basketball Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié aux pôles compétitifs et loisirs de
            l&apos;association KABSA. Notre club met un point d&apos;honneur à développer le
            basketball à tous les niveaux, en garantissant une parité et des opportunités égales
            pour les basketteurs et les basketteuses. Que vous cherchiez la compétition de haut
            niveau ou une pratique récréative, vous trouverez l&apos;équipe qui vous correspond.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">👩 Pôle Féminin</h3>
          <p className="lede">
            Le pôle féminin de KABSA incarne l&apos;esprit d&apos;équipe, l&apos;ambition et le
            dépassement de soi. Inspirées par le rayonnement international des grandes équipes, nos
            joueuses portent fièrement nos couleurs sur les parquets.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Équipes Féminines</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Seniors Dames (Compétition)</strong>{" "}: Équipe première engagée en championnat
              régional. Objectif de performance et accès aux play-offs.
            </li>
            <li>
              <strong>U19 / U16 Filles (Jeunes)</strong>{" "}: Formation technique avancée, transition
              vers le niveau adulte et esprit d&apos;équipe.
            </li>
            <li>
              <strong>Basket Loisir / Écoles de Basket</strong>{" "}: Pour apprendre les bases ou
              s&apos;entretenir sans la pression des matchs officiels.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👨 Pôle Masculin</h3>
          <p className="lede">
            Du perfectionnement des jeunes talents à l&apos;expérience de nos équipes seniors, le
            pôle masculin de KABSA propose un cadre structuré pour progresser, performer et partager
            la passion du ballon orange.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Équipes Masculines</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Seniors Messieurs (Compétition)</strong>{" "}: Équipes engagées en divisions
              régionales et provinciales. Un jeu physique, tactique et spectaculaire.
            </li>
            <li>
              <strong>U21 / U18 / U14 Garçons</strong>{" "}: Championnats de jeunes axés sur le
              développement rigoureux des compétences individuelles et collectives.
            </li>
            <li>
              <strong>Anciens / Loisirs</strong>{" "}: Pour les passionnés qui souhaitent continuer à
              pratiquer le 5x5 ou le 3x3 dans une ambiance conviviale.
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
          <h3 className="rf-blocktitle">⚙️ Informations Pratiques &amp; Inscriptions</h3>
          <p className="lede">
            <em>Horaires et Salles d&apos;Entraînement</em>{" "}— Les entraînements se déroulent tout au
            long de la semaine dans nos installations partenaires. Le planning détaillé par
            catégorie (jours, heures, salles) est communiqué à l&apos;inscription.
          </p>
          <h4 className="rf-blocktitle">💳 Tarifs et Cotisations</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Licence Compétition (Jeunes &amp; Seniors)</strong>{" "}: tarif communiqué à
              l&apos;inscription (inclus : assurance, maillot officiel, accès aux entraînements et
              matchs).
            </li>
            <li>
              <strong>Licence Loisir / Académie</strong>{" "}: tarif communiqué à l&apos;inscription
              (inclus : assurance et entraînements).
            </li>
          </ul>
          <h4 className="rf-blocktitle">📅 Calendrier des matchs (féminins &amp; masculins)</h4>
          <p className="lede"><strong>À venir.</strong></p>
          <h4 className="rf-blocktitle">🤝 Rejoignez l&apos;Aventure KABSA !</h4>
          <p className="lede">
            Vous souhaitez faire un essai gratuit, devenir bénévole, encadrer une équipe ou devenir
            partenaire de notre section basket ? Contactez-nous dès aujourd&apos;hui.
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
            Bienvenue dans l&apos;espace pratique de l&apos;association KABSA. Nous mettons tout en
            œuvre pour que notre passion du basketball soit accessible à tous, sans exception.
            Retrouvez ici toutes les informations logistiques pour préparer votre venue et votre
            saison.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            📍 Nos Installations &amp; Accessibilité
          </h3>
          <p className="lede">
            Nos entraînements et matchs à domicile se déroulent dans plusieurs infrastructures
            partenaires. Chacune d&apos;elles est aménagée pour garantir un accueil optimal.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accessibilité PMR</strong>{" "}: Toutes nos salles partenaires disposent
              d&apos;accès de plain-pied ou de rampes d&apos;accès, de places de parking réservées,
              ainsi que de sanitaires adaptés aux personnes à mobilité réduite (PMR).
            </li>
            <li>
              <strong>Tribunes &amp; Accueil du public</strong>{" "}: Des espaces dédiés et
              sécurisés sont réservés en tribune pour les spectateurs en fauteuil roulant afin de
              suivre les matchs des pôles masculin et féminin dans les meilleures conditions.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🚌 Venir aux Entraînements et Matchs</h3>
          <p className="lede">
            Nous encourageons la mobilité douce et le partage au sein de la communauté KABSA.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Transports en commun</strong>{" "}: L&apos;ensemble de nos salles est desservi
              par les réseaux de bus et/ou de trains locaux (l&apos;arrêt le plus proche de chaque
              salle est indiqué sur le planning d&apos;entraînement).
            </li>
            <li>
              <strong>Covoiturage KABSA</strong>{" "}: Un groupe d&apos;entraide est mis à
              disposition des membres pour organiser les trajets vers les entraînements et les
              matchs à l&apos;extérieur. Idéal pour les jeunes catégories (U14 à U21) et pour
              réduire notre empreinte carbone.
            </li>
            <li>
              <strong>Parkings</strong>{" "}: Des parkings gratuits (vélos et voitures) sont
              disponibles à proximité immédiate de chaque infrastructure.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🎒 Matériel &amp; Équipement à Prévoir</h3>
          <p className="lede">
            Pour que votre pratique ou celle de votre enfant se déroule en toute sécurité, voici le
            guide des essentiels à glisser dans le sac de sport :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour la Licence Compétition</strong>{" "}: Le maillot officiel du club est
              inclus dans votre cotisation. Vous devez uniquement fournir une paire de baskets de
              basketball (propres, réservées exclusivement à l&apos;usage en salle) et une gourde
              isotherme nominative.
            </li>
            <li>
              <strong>Pour la Licence Loisir / Académie</strong>{" "}: Une tenue de sport
              confortable (short et t-shirt) et des chaussures de salle à semelles non marquantes
              suffisent.
            </li>
            <li>
              <strong>Objets de valeur</strong>{" "}: Nous recommandons de laisser les bijoux,
              montres et objets de valeur à la maison. L&apos;association décline toute
              responsabilité en cas de perte ou de vol dans les vestiaires.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">💡 Questions Fréquentes (FAQ Pratique)</h3>
          <p className="lede">
            <strong>Peut-on faire un essai avant de s&apos;inscrire ?</strong><br /> Oui ! KABSA
            offre deux séances d&apos;essai gratuites en début de saison ou en cours d&apos;année,
            selon les places disponibles dans la catégorie. Contactez-nous au préalable.
          </p>
          <p className="lede">
            <strong>La fiche médicale est-elle obligatoire pour le pôle Loisir ?</strong><br /> Oui.
            Pour des raisons d&apos;assurance, la fiche médicale dûment complétée par un médecin est
            obligatoire pour toute pratique au sein du club (Loisir et Compétition).
          </p>
          <p className="lede">
            <strong>Comment savoir si un match ou un entraînement est annulé ?</strong><br /> En cas
            de force majeure (indisponibilité de salle, météo), les membres sont prévenus
            directement par email et via le groupe de communication de leur équipe respective.
          </p>
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const infrastructuresContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🏢 Nos Infrastructures</h3>
          <p className="lede">
            Pour permettre à nos pôles masculin, féminin et loisirs d&apos;évoluer dans les
            meilleures conditions, l&apos;association KABSA collabore avec plusieurs installations
            sportives modernes et parfaitement équipées. Découvrez les lieux qui accueillent nos
            entraînements, nos stages et nos matchs de championnat.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Les Salles Partenaires</h3>
          <h4 className="rf-blocktitle">Infrastructure Sportive KABSA – Salle Principale</h4>
          <p className="lede">
            C&apos;est le cœur de notre club, configuré pour le haut niveau et l&apos;accueil du
            public lors des matchs des Seniors Dames et Messieurs.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipements</strong>{" "}: Revêtement parquet en bois massif homologué,
              paniers de compétition suspendus et rétractables, panneaux d&apos;affichage
              électronique de dernière génération.
            </li>
            <li>
              <strong>Capacité</strong>{" "}: Tribune de 500 places assises avec zone dédiée pour
              les supporters à mobilité réduite.
            </li>
            <li>
              <strong>Vestiaires</strong>{" "}: 4 grands vestiaires collectifs avec douches, ainsi
              que 2 vestiaires réservés aux officiels et arbitres.
            </li>
          </ul>
          <h4 className="rf-blocktitle">
            Hall des Sports Intercommunal – Pôle Jeunes &amp; Académie
          </h4>
          <p className="lede">
            Cet espace chaleureux est principalement dédié à la formation de nos catégories de U14 à
            U21, ainsi qu&apos;à l&apos;école de basket.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipements</strong>{" "}: Sol sportif synthétique à haute absorption des
              chocs (idéal pour la protection des articulations des plus jeunes), paniers réglables
              en hauteur pour les plus petites catégories.
            </li>
            <li>
              <strong>Aménagements</strong>{" "}: Espace de stockage sécurisé pour le matériel
              pédagogique du club (ballons de différentes tailles, cônes, échelles de rythme).
            </li>
          </ul>
          <h4 className="rf-blocktitle">Espace Sport &amp; Nature – Terrain Extérieur (3x3)</h4>
          <p className="lede">
            Dédié aux pratiques estivales, aux tournois de fin de saison et aux passionnés du pôle
            Anciens / Loisirs.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipements</strong>{" "}: Deux terrains extérieurs de basketball 3x3 avec
              revêtement acrylique antidérapant et accès libre pour les membres en dehors des
              créneaux officiels.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛠️ Règles de Vie &amp; Utilisation des Locaux
          </h3>
          <p className="lede">
            Le respect de nos infrastructures partenaires est essentiel pour garantir la pérennité
            de nos activités. Chaque joueur, parent et visiteur s&apos;engage à respecter la charte
            de conduite du club :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Chaussures propres</strong>{" "}: L&apos;accès aux parquets intérieurs est
              strictement interdit avec des chaussures portées à l&apos;extérieur. Les joueurs
              doivent se changer dans les vestiaires.
            </li>
            <li>
              <strong>Propreté des lieux</strong>{" "}: Des poubelles de tri sélectif sont à
              disposition dans chaque salle. Aucun déchet ne doit être laissé sur les bancs de
              touche.
            </li>
            <li>
              <strong>Respect du matériel</strong>{" "}: Il est strictement interdit de
              s&apos;accrocher aux cercles des paniers (sauf action de jeu validée en compétition
              senior) pour éviter tout risque de dégradation ou de blessure.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">📅 Disponibilité &amp; Réservations</h3>
          <p className="lede">
            Les plannings d&apos;occupation des salles par catégorie (jours, heures et
            localisations) sont fixes pour toute la saison et consultables dans notre guide des
            horaires.{" "}<em>Fermetures exceptionnelles :</em>{" "}en cas d&apos;indisponibilité
            d&apos;une salle (maintenance, événements municipaux), les entraînements peuvent être
            déplacés ou annulés. Les membres en seront informés au minimum 48 heures à
            l&apos;avance.
          </p>
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const typeEntrainementContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🏀 Types d&apos;Entraînement</h3>
          <p className="lede">
            Chez KABSA, nous croyons qu&apos;il existe plusieurs manières de vivre sa passion pour
            le basketball. Du perfectionnement des jeunes talents à la performance des équipes
            seniors, en passant par le plaisir pur du basket récréatif, notre encadrement
            s&apos;adapte aux objectifs de chacun. Découvrez nos différentes formules
            d&apos;entraînement.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 1. L&apos;Entraînement de Compétition (Pôles Performance)
          </h3>
          <p className="lede">
            Destiné à nos équipes de championnats régionaux et provinciaux (Seniors Dames, Seniors
            Messieurs, et filières Jeunes U14 à U21). Ces séances structurées visent la performance
            collective et individuelle pour préparer au mieux les matchs officiels du week-end.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Préparation Physique Générale (PPG)</strong>{" "}: Développement de
              l&apos;endurance, de l&apos;explosivité, de l&apos;agilité et de la vitesse de
              réaction indispensables sur le terrain.
            </li>
            <li>
              <strong>Tactique et Stratégie collective</strong>{" "}: Apprentissage des systèmes de
              jeu (attaque placée, transition rapide, contre-attaque) et des différentes formes de
              défense (zone, individuelle, presse).
            </li>
            <li>
              <strong>Analyse et Vidéo</strong>{" "}: Pour les catégories supérieures, des séances
              de retour vidéo permettent de corriger les placements et d&apos;analyser le jeu des
              adversaires.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 2. Le Perfectionnement Technique (Filière Jeunes)
          </h3>
          <p className="lede">
            Destiné aux catégories U16 / U18 / U19 Filles et U14 / U18 / U21 Garçons. La formation
            technique est au cœur de l&apos;ADN de KABSA. Nous préparons nos jeunes athlètes à la
            transition vers le niveau adulte à travers des ateliers rigoureux.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Maîtrise des Fondamentaux Individuels (FI)</strong>{" "}: Travail intensif du
              dribble, de la qualité des passes, du jeu de jambes (footwork) et de la mécanique de
              tir.
            </li>
            <li>
              <strong>Prise de décision</strong>{" "}: Situations de supériorité ou
              d&apos;infériorité numérique (2 contre 1, 3 contre 2) pour apprendre à lire le jeu
              rapidement et faire le bon choix.
            </li>
            <li>
              <strong>Esprit d&apos;équipe et mental</strong>{" "}: Ateliers axés sur la
              communication sur le terrain, le leadership, la gestion du stress en fin de match et
              la cohésion de groupe.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 3. Le Basket Loisir &amp; Académie (Pratique Récréative)
          </h3>
          <p className="lede">
            Destiné aux passionnés, débutants, anciens joueurs ou à l&apos;École de Basket. Pour
            celles et ceux qui souhaitent pratiquer sans la pression des matchs officiels et des
            résultats, dans une ambiance conviviale et chaleureuse.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Apprentissage des Bases (École de Basket)</strong>{" "}: Découverte ludique du
              ballon orange pour les plus jeunes, motricité générale et premières règles du jeu.
            </li>
            <li>
              <strong>Maintien de la Forme (Loisirs &amp; Anciens)</strong>{" "}: Échauffement
              dynamique, exercices techniques simples et surtout beaucoup de jeu.
            </li>
            <li>
              <strong>Variété des Formats</strong>{" "}: Sessions de jeu libre en format
              traditionnel (5x5) ou en format urbain et dynamique (3x3), idéal pour travailler le
              jeu réduit et l&apos;adresse.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎒 Déroulement Type d&apos;une Séance chez KABSA
          </h3>
          <p className="lede">
            Toutes nos séances d&apos;entraînement durent généralement entre 1h30 et 2h et suivent
            une structure professionnelle :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;Activation (15-20 min)</strong>{" "}: Échauffement progressif,
              articulaire et musculaire, souvent avec ballon pour entrer directement dans la séance.
            </li>
            <li>
              <strong>Le Corps de séance (50-60 min)</strong>{" "}: Ateliers techniques thématiques,
              exercices à haute intensité et mise en application tactique.
            </li>
            <li>
              <strong>Le Jeu (20-30 min)</strong>{" "}: Matchs d&apos;application ou situations
              réelles pour valider les acquis du jour.
            </li>
            <li>
              <strong>Le Retour au calme (5-10 min)</strong>{" "}: Étirements légers, hydratation et
              débriefing du coach sur les points forts et les axes d&apos;amélioration.
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
        <h2>Basketball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
