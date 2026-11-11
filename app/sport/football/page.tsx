"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function FootballPage() {
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
        <p>Découvrez le pôle Football de KABSA.</p>
        <VideoSlot youtubeId="cAKcN_P8tOo" title="Football — KABSA" vertical />
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Exercices techniques, tactiques et préparation physique.</p>
        <VideoSlot youtubeId="TddtCxnvJO4" title="Football — Entraînements KABSA" vertical />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts et coulisses du club.</p>
        <VideoSlot youtubeId="IYly1kKltD0" title="Football — ambiance & passion" vertical />
      </div>
      <div className="info-card">
        <h3>Matchs &amp; compétitions</h3>
        <p>Meilleurs moments des championnats.</p>
        <VideoSlot youtubeId="DXdevjtE398" title="Football — légendes & inspiration" vertical />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot youtubeId="PMI18gYywn4" title="Football — inspiration" vertical />
      </div>
      <div className="info-card">
        <h3>Légendes du foot</h3>
        <p>Inspiration &amp; grands moments du football.</p>
        <VideoSlot youtubeId="GHm2BYhOVyo" title="Football — légendes du foot" vertical />
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
          <h3 className="rf-blocktitle">⚽ Présentation générale</h3>
          <p className="lede">
            <em>Un même ballon, une même passion, deux fois plus de talents.</em>
          </p>
          <p className="lede">
            Bienvenue au pôle Football de l&apos;association KABSA ! Que vous soyez un joueur
            expérimenté ou une joueuse débutante, notre club vous ouvre ses portes. Notre objectif
            est de promouvoir la pratique du football dans un esprit de respect, de progression et
            de convivialité. Nous croyons fermement à l&apos;égalité des chances et mettons un point
            d&apos;honneur à développer nos sections masculines et féminines avec le même niveau
            d&apos;exigence et d&apos;accompagnement.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤵‍♂️ Section Masculine</h3>
          <h4 className="rf-blocktitle">🏆 Nos Équipes &amp; Catégories</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>École de Foot (U6 à U11)</strong>{" "}: L&apos;apprentissage par le jeu, la
              motricité et l&apos;esprit d&apos;équipe.
            </li>
            <li>
              <strong>Section Jeunes (U12 à U18)</strong>{" "}: Le perfectionnement technique, la
              tactique et l&apos;entrée dans la compétition.
            </li>
            <li>
              <strong>Séniors &amp; Vétérans (18 ans et +)</strong> : La compétition de haut niveau
              ou le football loisir pour continuer à vibrer sur le terrain.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👩‍🎓 Section Féminine</h3>
          <h4 className="rf-blocktitle">🌟 Le Foot Féminin chez KABSA : En pleine croissance !</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pôle Initiation (U7 à U11)</strong> : Découverte du football dans un
              environnement ludique et bienveillant.
            </li>
            <li>
              <strong>Pôle Pré-formation (U12 à U15)</strong> : Développement des compétences
              individuelles et collectives.
            </li>
            <li>
              <strong>Séniors Féminines (16 ans et +)</strong>{" "}: Esprit d&apos;équipe, esprit de
              gagne et compétitivité dans les championnats régionaux.
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
          <h3 className="rf-blocktitle">
            ⏱️ Horaires des Entraînements — Section Masculine <em>(à confirmer)</em>
          </h3>
          <ul className="lede disc-arrow-list">
            <li>U6 - U11 : Mercredi (14h00 - 15h30) et Samedi (10h00 - 11h30)</li>
            <li>U12 - U18 : Mardi et Jeudi (18h00 - 19h30)</li>
            <li>Séniors : Mardi et Jeudi (20h00 - 22h00)</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Horaires des Entraînements — Section Féminine <em>(à confirmer)</em>
          </h3>
          <ul className="lede disc-arrow-list">
            <li>U7 - U11 Féminines : Mercredi (15h30 - 17h00)</li>
            <li>U12 - U15 Féminines : Lundi et Vendredi (17h30 - 19h00)</li>
            <li>Séniors Féminines : Lundi et Mercredi (19h30 - 21h30)</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏟️ Informations Pratiques &amp; Inscriptions</h3>
          <h4 className="rf-blocktitle">📝 Comment s&apos;inscrire ou se réinscrire ?</h4>
          <p className="lede">
            Pour rejoindre l&apos;association KABSA pour la saison, la procédure est simple :
          </p>
          <ul className="lede disc-arrow-list">
            <li>Remplir le formulaire d&apos;inscription.</li>
            <li>Faire remplir le certificat médical obligatoire par votre médecin.</li>
            <li>
              Fournir les pièces justificatives (photo d&apos;identité, copie de la pièce
              d&apos;identité).
            </li>
            <li>
              Retourner le dossier complet lors des permanences au secrétariat du club ou
              directement en ligne.
            </li>
          </ul>

          <h4 className="rf-blocktitle">💳 Tarifs des Cotisations</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Licence Jeune (U12 à U15)</strong>{" "}: tarif communiqué à l&apos;inscription
              (comprend l&apos;assurance, la licence et le pack équipement : maillot, short,
              chaussettes).
            </li>
            <li>
              <strong>Licence Adulte (U16 et +)</strong>{" "}: tarif communiqué à l&apos;inscription
              (comprend l&apos;assurance, la licence et le pack entraînement).
            </li>
            <li>
              <em>
                Note : un tarif dégressif est appliqué dès la deuxième inscription pour les membres
                d&apos;une même famille.
              </em>
            </li>
          </ul>

          <h4 className="rf-blocktitle">📅 Calendrier &amp; Classements</h4>
          <p className="lede">
            Suivez les exploits de nos équipes ! Retrouvez les dates des prochains matchs, les
            résultats et les classements officiels de toutes nos catégories.{" "}
            <strong>À venir.</strong>
          </p>

          <h4 className="rf-blocktitle">📸 Galerie Photos &amp; Actualités</h4>
          <p className="lede">
            <strong>À venir.</strong>
          </p>

          <h4 className="rf-blocktitle">📞 Contactez le Pôle Football</h4>
          <p className="lede">
            Une question sur les catégories, une demande d&apos;essai ou besoin d&apos;un
            renseignement ?
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

          <h4 className="rf-blocktitle">📍 Venir au Club (Installations &amp; Transports)</h4>
          <p className="lede">
            Le pôle Football de l&apos;association KABSA vous accueille sur ses installations
            sportives adaptées à tous.
          </p>

          <h4 className="rf-blocktitle">🏟️ Nos Infrastructures</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Stade Principal</strong>{" "}: Terrain synthétique de dernière génération,
              accessible toute l&apos;année.
            </li>
            <li>
              <strong>Vestiaires</strong>{" "}: Espaces chauffés et sécurisés, avec accès PMR
              (Personnes à Mobilité Réduite).
            </li>
            <li>
              <strong>Club House</strong>{" "}: Le lieu de vie et de convivialité de
              l&apos;association pour les après-matchs.
            </li>
          </ul>

          <h4 className="rf-blocktitle">🚗 Accès &amp; Transports</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>En voiture</strong>{" "}: adresse du complexe communiquée à l&apos;inscription
              — grand parking gratuit à l&apos;entrée, avec places réservées PMR.
            </li>
            <li>
              <strong>En transports en commun</strong>{" "}: lignes et arrêt communiqués au
              secrétariat (arrêt situé à quelques minutes à pied du stade).
            </li>
            <li>
              <strong>Mobilités douces</strong>{" "}: des arceaux de stationnement pour vélos et
              trottinettes sont à votre disposition à l&apos;entrée du site.
            </li>
          </ul>

          <h4 className="rf-blocktitle">
            🕒 Horaires d&apos;Ouverture du Secrétariat <em>(à confirmer)</em>
          </h4>
          <p className="lede">
            Pour le dépôt de vos dossiers de licence, l&apos;achat d&apos;équipements ou toute
            question administrative, notre équipe vous accueille :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Mercredi</strong>{" "}: 14h00 – 18h30
            </li>
            <li>
              <strong>Samedi</strong>{" "}: 09h30 – 12h30
            </li>
            <li>
              <strong>En dehors de ces horaires</strong>{" "}: accueil uniquement sur rendez-vous ou
              par e-mail.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Inclusion &amp; Accessibilité pour Tous</h3>
          <p className="lede">
            Chez KABSA, nous veillons à ce que le football reste un sport populaire et accessible à
            chacun, sans distinction.
          </p>

          <h4 className="rf-blocktitle">🧑‍🦽 Accessibilité PMR</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Infrastructures adaptées</strong>{" "}: L&apos;ensemble de notre site
              (tribunes, club house, vestiaires) est accessible aux personnes en fauteuil roulant ou
              à mobilité réduite.
            </li>
            <li>
              <strong>Accompagnement</strong>{" "}: Nos bénévoles sont formés pour faciliter
              l&apos;accès et l&apos;installation des spectateurs en situation de handicap lors des
              jours de match.
            </li>
          </ul>

          <h4 className="rf-blocktitle">🎒 Ma check-list pour les entraînements</h4>
          <p className="lede">
            Pour que les séances de votre enfant (ou les vôtres) se déroulent dans les meilleures
            conditions, voici les indispensables à mettre dans le sac de sport :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Obligatoire</strong>{" "}: protège-tibias (indispensables pour des raisons de
              sécurité et d&apos;assurance).
            </li>
            <li>
              <strong>Chaussures</strong>{" "}: crampons adaptés à la surface (moulés pour le terrain
              synthétique).
            </li>
            <li>
              <strong>Hydratation</strong>{" "}: une gourde d&apos;eau individuelle identifiée au nom
              du joueur.
            </li>
            <li>
              <strong>Météo</strong>{" "}: un vêtement de pluie (K-way) ou un coupe-vent selon les
              conditions climatiques.
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
          <h3 className="rf-blocktitle">🏟️ Nos Infrastructures</h3>
          <p className="lede">
            Bienvenue sur les installations de l&apos;association KABSA. Nous mettons à la
            disposition de nos licenciés des équipements modernes, sécurisés et parfaitement
            entretenus pour favoriser la progression, le plaisir du jeu et la convivialité au
            quotidien.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">⚽ Nos Terrains de Jeu</h3>
          <h4 className="rf-blocktitle">
            🏟️ Le Terrain d&apos;Honneur (Synthétique dernière génération)
          </h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Revêtement</strong>{" "}: pelouse synthétique haut de gamme, homologuée pour la
              compétition régionale et utilisable par tous les temps.
            </li>
            <li>
              <strong>Utilisation</strong>{" "}: matchs officiels des catégories Jeunes et Séniors,
              ainsi que les entraînements en soirée.
            </li>
            <li>
              <strong>Équipement</strong>{" "}: éclairage LED homologué pour les rencontres nocturnes
              et abris de touche modernes.
            </li>
          </ul>

          <h4 className="rf-blocktitle">🛝 Le Terrain Annexe (Herbe / Initiation)</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Revêtement</strong>{" "}: pelouse naturelle soigneusement entretenue tout au
              long de l&apos;année.
            </li>
            <li>
              <strong>Utilisation</strong>{" "}: principalement dédié à l&apos;École de Foot (U6 à
              U11) et au Pôle Initiation Féminin.
            </li>
            <li>
              <strong>Avantage</strong>{" "}: un espace idéal et sécurisant pour le développement de
              la motricité et l&apos;apprentissage par le jeu.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🧱 Les Espaces Techniques &amp; Sportifs</h3>
          <h4 className="rf-blocktitle">👕 Les Vestiaires</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Capacité</strong>{" "}: plusieurs vestiaires collectifs entièrement rénovés pour
              accueillir simultanément les équipes locales et visiteuses.
            </li>
            <li>
              <strong>Vestiaires Arbitres</strong>{" "}: espaces privatifs dédiés au corps arbitral.
            </li>
            <li>
              <strong>Confort &amp; Accessibilité</strong>{" "}: douches collectives chaudes et accès
              PMR sur l&apos;ensemble du bloc vestiaires.
            </li>
          </ul>

          <h4 className="rf-blocktitle">🏋️ L&apos;Espace Performance &amp; Soins</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Zone Médicale</strong>{" "}: un espace équipé pour les interventions de premier
              secours et les soins de kinésithérapie pour nos catégories de pré-formation et
              séniors.
            </li>
            <li>
              <strong>Local Matériel</strong>{" "}: des équipements pédagogiques complets et modernes
              (ballons de tailles adaptées, chasubles, cônes, mini-buts) pour des séances
              d&apos;entraînement de qualité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">☕ Les Lieux de Vie &amp; de Convivialité</h3>
          <h4 className="rf-blocktitle">🏠 Le Club House « Espace KABSA »</h4>
          <p className="lede">
            Le véritable cœur battant de l&apos;association en dehors du terrain !
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les jours de match</strong>{" "}: ouverture de la buvette lors des rencontres
              des Séniors et des tournois de jeunes.
            </li>
            <li>
              <strong>Événements</strong>{" "}: lieu de rassemblement pour les réunions techniques,
              les goûters de l&apos;École de Foot, les retransmissions de matchs importants et les
              moments de partage en famille.
            </li>
            <li>
              <strong>Boutique officielle</strong>{" "}: un espace d&apos;exposition pour essayer et
              commander votre pack équipement ou les produits dérivés du club.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛡️ Sécurité &amp; Règlement du Complexe</h3>
          <p className="lede">
            Pour la sécurité de tous et la longévité de nos installations, merci de respecter les
            règles suivantes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Crampons propres</strong>{" "}: nettoyage obligatoire des chaussures aux brosses
              prévues à cet effet avant d&apos;entrer sur le terrain synthétique.
            </li>
            <li>
              <strong>Interdiction de fumer</strong>{" "}: l&apos;ensemble de l&apos;enceinte
              sportive (terrains, tribunes, vestiaires) est un espace non-fumeur.
            </li>
            <li>
              <strong>Respect du site</strong>{" "}: des poubelles de tri sélectif sont à votre
              disposition pour garder notre complexe propre.
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
          <h3 className="rf-blocktitle">📋 Nos Types d&apos;Entraînement</h3>
          <p className="lede">
            À l&apos;association KABSA, le football se conjugue au pluriel. Nous proposons
            différentes approches de l&apos;entraînement, adaptées à l&apos;âge, au niveau de
            pratique et aux aspirations de chaque joueur et joueuse, du pur loisir à la compétition
            de haut niveau.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧸 1. Le Football Éducatif &amp; Ludique (U6 à U11)
          </h3>
          <p className="lede">
            <em>Objectif :</em> donner le goût du sport et apprendre les bases en s&apos;amusant.{" "}
            <em>Public concerné :</em> École de Foot Masculine (U6-U11) et Pôle Initiation Féminin
            (U7-U11).
          </p>
          <p className="lede">
            <em>Contenu des séances :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Jeux de motricité</strong>{" "}: exercices de coordination, d&apos;agilité et
              d&apos;équilibre avec et sans ballon.
            </li>
            <li>
              <strong>Apprentissage technique de base</strong>{" "}: conduite de balle, passes courtes
              et tirs à travers des ateliers ludiques.
            </li>
            <li>
              <strong>Matchs à effectif réduit</strong>{" "}: plateaux le week-end (foot à 3, à 5 ou
              à 8) pour maximiser le nombre de touches de balle et le plaisir du jeu.
            </li>
            <li>
              <strong>Valeurs</strong>{" "}: focus absolu sur le respect, l&apos;esprit d&apos;équipe
              et la bienveillance.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📈 2. La Pré-formation &amp; Le Perfectionnement (U12 à U18)
          </h3>
          <p className="lede">
            <em>Objectif :</em> développer le bagage technique individuel et introduire la tactique
            collective. <em>Public concerné :</em> Section Jeunes Masculine (U12-U18) et Pôle
            Pré-formation Féminin (U12-U15).
          </p>
          <p className="lede">
            <em>Contenu des séances :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Perfectionnement technique</strong>{" "}: maîtrise des contrôles orientés, du
              jeu de tête, de la frappe et du pied faible.
            </li>
            <li>
              <strong>Intelligence de jeu (tactique)</strong>{" "}: compréhension du placement, du
              déplacement sur le terrain, des transitions offensives/défensives et du jeu sans
              ballon.
            </li>
            <li>
              <strong>Préparation physique intégrée</strong>{" "}: développement de l&apos;endurance,
              de la vitesse et de la vivacité à travers des exercices avec ballon pour préserver le
              plaisir de jouer.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 3. L&apos;Entraînement Compétition (Séniors &amp; U18 R1)
          </h3>
          <p className="lede">
            <em>Objectif :</em> optimiser la performance collective et individuelle pour la gagne en
            championnat. <em>Public concerné :</em> Séniors Masculins &amp; Féminines.
          </p>
          <p className="lede">
            <em>Contenu des séances :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tactique avancée</strong>{" "}: mise en place de blocs d&apos;équipe, étude des
              systèmes de jeu (ex. 4-3-3, 3-5-2) et travail spécifique sur coups de pied arrêtés.
            </li>
            <li>
              <strong>Physique &amp; Intensité</strong>{" "}: séances à haute intensité cardio,
              renforcement musculaire (proprioception, gainage) et gestion de la récupération.
            </li>
            <li>
              <strong>Analyse et vidéo</strong>{" "}: retours sur les matchs du week-end pour corriger
              les erreurs et préparer le plan de jeu face au prochain adversaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏃‍♂️ 4. Le Football Loisir, Bien-être &amp; Vétérans
          </h3>
          <p className="lede">
            <em>Objectif :</em> pratiquer sa passion sans la pression du résultat, pour
            s&apos;entretenir et partager un moment convivial. <em>Public concerné :</em> Section
            Vétérans et Adultes (Loisir).
          </p>
          <p className="lede">
            <em>Contenu des séances :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Échauffement adapté</strong>{" "}: focus sur la prévention des blessures
              musculaires et articulaires.
            </li>
            <li>
              <strong>Ateliers techniques souples</strong>{" "}: exercices simples de circulation de
              balle sans contact rugueux.
            </li>
            <li>
              <strong>Grands matchs internes</strong>{" "}: la majeure partie de la séance est
              consacrée à des oppositions amicales où le plaisir et la convivialité priment sur le
              score.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🧤 5. Les Spécifiques Gardiens de But</h3>
          <p className="lede">
            <em>Objectif :</em> offrir un entraînement sur-mesure pour le poste le plus exigeant du
            football. <em>Public concerné :</em> gardiens et gardiennes de but de toutes les
            catégories (des U10 aux Séniors).
          </p>
          <p className="lede">
            <em>Contenu des séances :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Technique de prise de balle</strong>{" "}: captage, déviations, plongeons et
              relances (à la main et au pied).
            </li>
            <li>
              <strong>Déplacements &amp; Placement</strong>{" "}: gestion des angles, fermetures
              d&apos;angle dans les face-à-face et sorties aériennes.
            </li>
            <li>
              <strong>Mental &amp; Réflexes</strong>{" "}: travail sur la réactivité, la
              communication pour diriger sa défense et la concentration.
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
        <h2>Football</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
