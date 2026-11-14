"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function ParaAthletismePage() {
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
        <p>Lames de course, fauteuils et sièges de lancer.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Travail technique, PPG et séances de piste.</p>
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
        <h3>Stars athlètes KABSA</h3>
        <p>Parcours des meilleurs athlètes.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🏃‍♂️♿ Présentation du Para-athlétisme</h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">🌍 Définition et Histoire</h3>
          <p className="lede">
            Le para-athlétisme est l&apos;adaptation de l&apos;athlétisme traditionnel aux personnes
            en situation de handicap. Discipline historique présente dès les premiers Jeux
            Paralympiques de Rome en 1960, c&apos;est aujourd&apos;hui le sport paralympique qui
            rassemble le plus grand nombre d&apos;athlètes et d&apos;épreuves à travers le monde.
          </p>
          <p className="lede">
            Il reprend la quasi-totalité des épreuves classiques, en individuel ou en relais :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏃‍♂️ Courses (Piste et Route)</strong>{" "}: Sprint (100m, 200m, 400m),
              demi-fond, fond, relais et marathon.
            </li>
            <li>
              <strong>🦘 Sauts</strong>{" "}: Saut en longueur, triple saut et saut en hauteur.
            </li>
            <li>
              <strong>☄️ Lancers</strong>{" "}: Poids, disque, javelot, ainsi que le lancer de
              massue (une épreuve spécifique au para-athlétisme).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Qui peut pratiquer ? (Profils et Handicaps)
          </h3>
          <p className="lede">
            Le para-athlétisme est l&apos;une des disciplines les plus inclusives. La piste et les
            aires de lancer sont ouvertes à trois grandes familles de handicaps :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>♿ Handicaps physiques et moteurs</strong>{" "}: Amputation, agénésie, manque
              de force musculaire, paraplégie, tétraplégie, paralysie cérébrale ou petite taille.
            </li>
            <li>
              <strong>🦯 Handicaps visuels</strong>{" "}: Athlètes malvoyants ou non-voyants (pouvant
              courir accompagnés d&apos;un guide).
            </li>
            <li>
              <strong>🧠 Handicaps intellectuels et psychiques</strong>{" "}: Athlètes évoluant dans
              des catégories dédiées.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏅 Le système de classification</h3>
          <p className="lede">
            Pour garantir l&apos;équité sportive, chaque athlète passe devant une commission
            médicale qui lui attribue une catégorie officielle composée d&apos;une lettre et de deux
            chiffres :
          </p>
          <p className="lede"><em>La lettre (la discipline) :</em></p>
          <ul className="lede disc-arrow-list">
            <li><strong>T (Track)</strong>{" "}: Courses et sauts.</li>
            <li><strong>F (Field)</strong>{" "}: Lancers.</li>
          </ul>

          <p className="lede"><em>Le premier chiffre (le type de handicap) :</em></p>
          <ul className="lede disc-arrow-list">
            <li><strong>1 👁️</strong>{" "}: Déficience visuelle (ex. T/F 11 à 13).</li>
            <li><strong>2 🧠</strong>{" "}: Déficience intellectuelle.</li>
            <li>
              <strong>3 🧬</strong>{" "}: Handicap moteur cérébral ou neurologique, debout ou assis
              (ex. T/F 31 à 38).
            </li>
            <li><strong>4 🧍</strong>{" "}: Petite taille ou amputation (sans prothèse).</li>
            <li>
              <strong>5 🦽</strong>{" "}: Athlète en fauteuil roulant (courses ou lancers assis).
            </li>
            <li>
              <strong>6 🦿</strong>{" "}: Amputation des membres inférieurs avec port de prothèse(s).
            </li>
          </ul>

          <p className="lede">
            <em>Le second chiffre (le degré de handicap) :</em>{" "}plus le chiffre est bas, plus
            l&apos;impact du handicap sur la pratique sportive est important.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 L&apos;esprit de la discipline : L&apos;art du dépassement
          </h3>
          <p className="lede">
            Au-delà de la performance pure et des technologies de pointe (lames en carbone,
            fauteuils profilés), le para-athlétisme repose sur une préparation physique rigoureuse
            et une adaptation sur mesure. Que ce soit en loisir ou en compétition officielle
            (régionale, nationale ou paralympique), chaque athlète trouve un cadre sécurisé pour
            repousser ses propres limites.
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
          <h3 className="rf-blocktitle">🛠️🏃‍♂️ Accessibilité &amp; Pratique</h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">⚙️ Équipements et Matériels Adaptés</h3>
          <p className="lede">
            La pratique du para-athlétisme repose sur des technologies de pointe, strictement
            réglementées par le World Para Athletics selon la classification médicale de chaque
            athlète.
          </p>
          <p className="lede">
            <em>Bon à savoir :</em>{" "}le matériel de compétition représentant un investissement
            important, des dispositifs de soutien existent (bourses pour les jeunes athlètes) ainsi
            que des prêts de matériel d&apos;initiation directement au sein du club.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏋️‍♀️ Déroulement des Entraînements</h3>
          <p className="lede">
            L&apos;entraînement en para-athlétisme demande la même rigueur que chez les valides et
            s&apos;articule autour de trois grands piliers :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>💪 Préparation Physique Générale (PPG)</strong>{" "}: Renforcement musculaire
              ciblé (notamment du haut du corps pour les athlètes en fauteuil), endurance
              cardiovasculaire, souplesse et gainage.
            </li>
            <li>
              <strong>🎯 Travail technique et réglages</strong>{" "}: Apprentissage de la trajectoire
              du fauteuil, réglage anatomique des sangles et manchons (pour préserver la circulation
              sanguine), ou synchronisation des foulées avec un guide.
            </li>
            <li>
              <strong>🩺 Suivi médical et récupération</strong>{" "}: Soins kinésithérapiques
              réguliers et prévention des blessures d&apos;usure (notamment au niveau des épaules ou
              des points d&apos;appui).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 De l&apos;Initiation à la Compétition
          </h3>
          <p className="lede">
            Chacun peut pratiquer selon ses objectifs, du sport-loisir au haut niveau :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>⏱️ Meetings internes</strong>{" "}: Rencontres amicales et tests chronométrés
              organisés en club pour mesurer sa progression dans une ambiance conviviale.
            </li>
            <li>
              <strong>🥇 Compétitions officielles</strong>{" "}: Championnats régionaux, nationaux et
              internationaux (Championnats du monde, Jeux Paralympiques). Les règles de la World
              Athletics s&apos;appliquent avec des adaptations précises (poids des engins de lancer
              ajusté, interdiction pour le guide de tirer l&apos;athlète ou de franchir la ligne
              avant lui).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Comment débuter chez KABSA ? (En 3 étapes)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🩺 Évaluez votre profil</strong>{" "}: Prenez contact avec notre équipe
              médicale pour passer votre classification et identifier la catégorie qui vous
              correspond.
            </li>
            <li>
              <strong>📍 Testez sans frais</strong>{" "}: Le club dispose de matériel de prêt
              (fauteuils d&apos;initiation, lames) pour réaliser vos premières séances.
            </li>
            <li>
              <strong>🔗 Trouvez votre binôme</strong>{" "}: Si vous êtes déficient visuel, notre
              réseau vous met en relation avec des guides formés.
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
          <h3 className="rf-blocktitle">🏟️♿ Infrastructures et Espaces de Pratique</h3>
          <p className="lede">
            La pratique du para-athlétisme nécessite des installations sportives pensées pour
            accueillir tous les profils d&apos;athlètes en toute sécurité et autonomie. Nos
            infrastructures respectent les normes d&apos;accessibilité universelle et les exigences
            techniques du World Para Athletics.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛣️ La piste d&apos;athlétisme et les aires de saut
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Revêtement synthétique haute performance</strong>{" "}: Une surface plane,
              adhérente et sans obstacle, idéale pour la propulsion des fauteuils de course,
              l&apos;utilisation des Frame Runners et l&apos;amorti des lames en carbone.
            </li>
            <li>
              <strong>Couloirs élargis et sécurisés</strong>{" "}: Des espaces dégagés permettant
              l&apos;évolution fluide des binômes (athlètes déficients visuels et leurs guides)
              ainsi que les manœuvres des fauteuils à trois roues.
            </li>
            <li>
              <strong>Blocs de départ et zones d&apos;appel adaptés</strong>{" "}: Des équipements
              modulables pour sécuriser les départs en sprint et les prises d&apos;élan en saut.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">☄️ Les aires de lancers</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Plateformes d&apos;ancrage sécurisées</strong>{" "}: Des cercles de lancer
              équipés de points de fixation au sol permettant d&apos;arrimer solidement les
              fauteuils et sièges de lancer rigides.
            </li>
            <li>
              <strong>Accès de plain-pied</strong>{" "}: Des rampes douces et des cheminements
              stabilisés pour rejoindre les aires de poids, disque, javelot et massue en toute
              autonomie.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏢 Confort, Accueil et Logistique sur site
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🚿 Vestiaires et sanitaires PMR</strong>{" "}: Espaces spacieux, douches de
              plain-pied, bancs de transfert et casiers accessibles à hauteur de fauteuil.
            </li>
            <li>
              <strong>🅿️ Stationnement et accès</strong>{" "}: Places réservées à proximité
              immédiate des entrées du stade et cheminements podotactiles pour les sportifs
              malvoyants ou non-voyants.
            </li>
            <li>
              <strong>🔧 Atelier de maintenance et stockage</strong>{" "}: Un espace dédié pour
              entreposer le matériel encombrant (fauteuils d&apos;athlétisme, sièges de lancer) et
              effectuer les réglages mécaniques.
            </li>
            <li>
              <strong>💪 Salle de Préparation Physique (PPG)</strong>{" "}: Équipée de machines
              accessibles (postes à poulies réglables, espaces dégagés) pour le renforcement du haut
              du corps et le gainage.
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
          <h3 className="rf-blocktitle">🏋️‍♀️♿ Types d&apos;entraînement en Para-athlétisme</h3>
          <p className="lede">
            L&apos;entraînement en para-athlétisme demande la même rigueur et le même engagement que
            chez les athlètes valides. Chaque séance est personnalisée selon le handicap, la
            classification et les objectifs du sportif.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💪 1. La Préparation Physique Générale (PPG)
          </h3>
          <p className="lede">
            La PPG constitue le socle de la performance et permet de développer les qualités
            athlétiques fondamentales :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Renforcement musculaire ciblé</strong>{" "}: Travail intensif du haut du corps
              (épaules, bras, dos) pour les athlètes en fauteuil ou en lancer assis, et renforcement
              des appuis pour les athlètes debout.
            </li>
            <li>
              <strong>Endurance cardiovasculaire</strong>{" "}: Séances de foncier sur piste ou sur
              ergomètre pour tenir l&apos;effort sur les courses de demi-fond, de fond ou de
              marathon.
            </li>
            <li>
              <strong>Gainage et souplesse</strong>{" "}: Exercices essentiels pour stabiliser le
              buste lors de la propulsion ou des lancers, et préserver la mobilité articulaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 2. L&apos;Entraînement Technique et Matériel
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pilotage et trajectoire (Fauteuil &amp; Frame Runner)</strong>{" "}:
              Apprentissage de la poussée avec gants rigides, gestion des virages sur piste et
              optimisation de l&apos;aérodynamisme.
            </li>
            <li>
              <strong>Appuis et dynamisme (Lames en carbone)</strong>{" "}: Travail de la foulée,
              gestion de la restitution d&apos;énergie et réglages des départs en blocs adaptés.
            </li>
            <li>
              <strong>Synchronisation en binôme (Déficience visuelle)</strong>{" "}: Entraînements
              spécifiques avec un guide valide via le lien de guidage pour harmoniser le rythme des
              foulées et le repérage spatial.
            </li>
            <li>
              <strong>Gestuelle de lancer</strong>{" "}: Travail d&apos;explosivité et de précision
              depuis un fauteuil ou un siège de lancer rigide ancré au sol.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🔧 3. Réglages Anatomiques et Sécurité</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ajustement des sangles et manchons</strong>{" "}: Positionnement précis des
              attaches et des prothèses afin d&apos;éviter les points de compression critiques.
            </li>
            <li>
              <strong>Prévention vasculaire</strong>{" "}: Contrôle du confort des artères et du
              retour veineux pour garantir une circulation sanguine saine durant l&apos;effort
              prolongé.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🩺 4. Récupération et Suivi Médical</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Soins kinésithérapiques</strong>{" "}: Massages, étirements assistés et suivi
              régulier adaptés aux contraintes de la discipline.
            </li>
            <li>
              <strong>Prévention des blessures d&apos;usure</strong>{" "}: Protection ciblée des
              articulations très sollicitées, notamment les épaules chez les athlètes en fauteuil
              roulant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 5. Entraînement Compétitif et Mises en Situation
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tests chronométrés et meetings internes</strong>{" "}: Rencontres amicales
              organisées au sein du club pour évaluer sa progression.
            </li>
            <li>
              <strong>Simulation réglementaire</strong>{" "}: Répétition des protocoles officiels
              (départs aux ordres, respect des règles de guidage, poids des engins adaptés) en vue
              des championnats régionaux, nationaux ou paralympiques.
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
        <h2>Para-athlétisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
