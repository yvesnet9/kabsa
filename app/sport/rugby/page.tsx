"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function RugbyPage() {
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
        <p>Découvrez les sections Rugby de KABSA.</p>
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
          <h3 className="rf-blocktitle">
            🏉 Rugby Masculin &amp; Féminin — L&apos;Esprit d&apos;Équipe au Cœur de KABSA
          </h3>
          <p className="lede">
            Bienvenue dans la section Rugby de l&apos;association KABSA ! Plus qu&apos;un sport, le
            rugby est pour nous une véritable école de vie. Que vous soyez un joueur expérimenté ou
            une débutante curieuse de toucher son premier ballon ovale, nos sections masculine et
            féminine vous ouvrent leurs portes. Nous partageons tous les mêmes valeurs : Respect,
            Solidarité, Engagement et Convivialité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚹 La Section Masculine : Force et Stratégie
          </h3>
          <p className="lede">
            La section masculine de KABSA rassemble des passionnés de tous horizons autour d&apos;un
            projet sportif commun. Notre objectif ? Développer le potentiel de chaque joueur tout en
            visant l&apos;excellence collective lors des compétitions.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Esprit de corps</strong>{" "}: Un groupe soudé où les anciens guident les plus
              jeunes.
            </li>
            <li>
              <strong>Encadrement de qualité</strong>{" "}: Des entraîneurs diplômés pour parfaire votre
              technique, votre condition physique et votre vision du jeu.
            </li>
            <li>
              <strong>Compétition et plaisir</strong>{" "}: Des entraînements rigoureux en semaine pour
              briller le week-end, sans jamais oublier la fameuse troisième mi-temps.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚺 La Section Féminine : Passion et Détermination
          </h3>
          <p className="lede">
            Le rugby féminin est en plein essor, et KABSA en est un fier promoteur ! Notre section
            féminine accueille les joueuses de tous niveaux dans une ambiance dynamique,
            bienveillante et résolument compétitive.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Inclusion et progression</strong>{" "}: Que vous veniez du crossfit, du handball
              ou que vous n&apos;ayez jamais fait de sport, notre programme s&apos;adapte à votre
              rythme.
            </li>
            <li>
              <strong>Sororité et solidarité</strong>{" "}: Une équipe unie sur le terrain comme en
              dehors, basée sur l&apos;entraide et le dépassement de soi.
            </li>
            <li>
              <strong>Ambition sportive</strong>{" "}: Des entraînements tactiques et physiques pour
              s&apos;imposer dans notre championnat et porter haut les couleurs de
              l&apos;association.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Le Rugby pour Tous : Nos Engagements</h3>
          <p className="lede">
            Chez KABSA, nous croyons en un rugby moderne et accessible. Nos sections partagent :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>La mixité des cultures</strong>{" "}: Le club est un lieu d&apos;échange et de
              partage.
            </li>
            <li>
              <strong>Le respect du jeu</strong>{" "}: Tolérance zéro pour la violence ; priorité au
              beau jeu et au respect de l&apos;arbitre.
            </li>
            <li>
              <strong>Des événements communs</strong>{" "}: Stages de cohésion, tournois mixtes de rugby
              à toucher et soirées de l&apos;association pour souder toute la famille KABSA.
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
          <h3 className="rf-blocktitle">📅 Infos Pratiques &amp; Horaires</h3>
          <p className="lede">
            <em>Note : merci d&apos;arriver 15 minutes avant le début de la séance pour
            l&apos;échauffement.</em>{" "}Horaires communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚀 Prêt(e) à Rejoindre la Mêlée ?</h3>
          <p className="lede">
            Les <strong>deux séances d&apos;essai sont gratuites</strong>{" "}! Munissez-vous simplement
            d&apos;une paire de crampons, d&apos;un protège-dents et de votre motivation.
          </p>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>
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
            Bienvenue sur la page pratique du KABSA Rugby. Que vous veniez pour une séance
            d&apos;essai ou que vous soyez déjà membre de la famille, vous trouverez ici toutes les
            informations logistiques pour préparer vos entraînements et vos matchs.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            📅 Horaires &amp; Entraînements{" "}<em>(à confirmer)</em>
          </h3>
          <p className="lede">
            Pour le bon déroulement des séances et pour éviter les blessures, merci d&apos;arriver
            15 minutes avant le début de la séance pour l&apos;échauffement.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Rugby Masculin</strong>{" "}: Mardis &amp; Jeudis, 19h30 - 21h30, au Stade
              Principal KABSA.
            </li>
            <li>
              <strong>Rugby Féminin</strong>{" "}: Mercredis &amp; Vendredis, 19h30 - 21h30, au
              Stade Principal KABSA.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Venir au Stade Principal KABSA</h3>
          <p className="lede">
            Le club est un lieu d&apos;échange ouvert à tous. Voici comment nous rejoindre
            facilement :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🚗 En voiture</strong>{" "}: Parking gratuit disponible à l&apos;entrée du
              complexe sportif (places réservées PMR à proximité immédiate des vestiaires).
            </li>
            <li>
              <strong>🚌 En transports en commun</strong>{" "}: Lignes et arrêt communiqués au
              secrétariat (arrêt situé à quelques minutes à pied de l&apos;entrée).
            </li>
            <li>
              <strong>🚲 Mobilités douces</strong>{" "}: Des arceaux de stationnement pour vélos et
              trottinettes sont sécurisés à l&apos;intérieur de l&apos;enceinte du stade.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎒 Votre Équipement : Quoi mettre dans son sac ?
          </h3>
          <p className="lede">
            Le rugby est un sport de contact et d&apos;engagement. Une bonne préparation commence
            par un équipement adapté.
          </p>
          <p className="lede"><em>Pour vos 2 séances d&apos;essai gratuites :</em></p>
          <ul className="lede disc-arrow-list">
            <li><strong>Obligatoire</strong>{" "}: Une paire de crampons.</li>
            <li>
              <strong>Obligatoire</strong>{" "}: Un protège-dents (essentiel pour votre sécurité).
            </li>
            <li>
              <strong>Conseillé</strong>{" "}: Une tenue de sport robuste ne craignant pas la boue
              et une bouteille d&apos;eau/gourde.
            </li>
          </ul>
          <p className="lede"><em>Pour la saison (membres inscrits) :</em></p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tenue officielle</strong>{" "}: Short et chaussettes du club (fournis lors de
              l&apos;inscription).
            </li>
            <li>
              <strong>Équipements de protection optionnels</strong>{" "}: Casque de rugby, haut
              d&apos;épaulières homologué World Rugby.
            </li>
            <li>
              <strong>Affaires de douche</strong>{" "}: Des vestiaires collectifs avec douches
              chaudes sont à votre disposition après l&apos;effort pour prolonger la convivialité.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Accessibilité &amp; Inclusion</h3>
          <p className="lede">
            Chez KABSA, nous croyons en un rugby moderne et accessible. Notre politique
            d&apos;inclusion se traduit par :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Inclusion sportive</strong>{" "}: Aucun passé sportif n&apos;est requis. Notre
              programme s&apos;adapte à votre rythme, que vous veniez d&apos;un autre sport ou que
              vous débutiez totalement.
            </li>
            <li>
              <strong>Accessibilité des infrastructures</strong>{" "}: Le Stade Principal KABSA
              dispose d&apos;accès aménagés pour les personnes à mobilité réduite (rampes
              d&apos;accès aux tribunes, vestiaires et sanitaires adaptés).
            </li>
            <li>
              <strong>Section Rugby à Toucher</strong>{" "}: Pour ceux qui souhaitent pratiquer sans
              contact, nous organisons régulièrement des tournois mixtes de rugby à toucher,
              accessibles à tous les âges et profils.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">❓ Foire Aux Questions (FAQ Pratique)</h3>
          <p className="lede">
            <strong>Puis-je tester avant de m&apos;engager ?</strong><br /> Oui ! Les deux premières
            séances d&apos;essai sont totalement gratuites. Il vous suffit de vous présenter aux
            horaires de votre section munis de vos crampons et de votre protège-dents.
          </p>
          <p className="lede">
            <strong>Que se passe-t-il en cas de mauvaise météo ?</strong><br /> Le rugby se pratique
            par tous les temps ! Sauf arrêté exceptionnel ou alerte météo orange/rouge, les
            entraînements sont maintenus. Pensez à adapter votre tenue (sous-maillot thermique,
            coupe-vent).
          </p>
          <p className="lede">
            <strong>Quels documents pour l&apos;inscription définitive ?</strong><br /> Pour valider
            votre licence, vous devrez fournir un certificat médical de non-contre-indication à la
            pratique du rugby en compétition, une pièce d&apos;identité et régler la cotisation
            annuelle (modalités de paiement facilitées sur demande).
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
          <h3 className="rf-blocktitle">🏟️ Nos Infrastructures</h3>
          <p className="lede">
            Bienvenue au Stade Principal KABSA, le cœur battant de notre association. C&apos;est ici
            que nos sections masculine et féminine se rassemblent chaque semaine pour
            s&apos;entraîner, progresser et partager des moments inoubliables. Nos installations
            modernes et entretenues offrent un cadre idéal pour la pratique du rugby à tous les
            niveaux.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏉 Le Terrain d&apos;Honneur &amp; Espaces de Jeu
          </h3>
          <p className="lede">
            Le complexe est configuré pour répondre à l&apos;exigence des entraînements rigoureux de
            la semaine et à l&apos;intensité des matchs du week-end.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Terrain Principal</strong>{" "}: Une pelouse homologuée pour les
              compétitions officielles, bénéficiant d&apos;un éclairage nocturne haute performance
              pour les entraînements en soirée.
            </li>
            <li>
              <strong>Zone d&apos;Échauffement</strong>{" "}: Un espace dédié en bord de terrain
              pour permettre aux équipes d&apos;arriver 15 minutes avant la séance et de se préparer
              physiquement en toute sécurité.
            </li>
            <li>
              <strong>Matériel d&apos;Entraînement Pro</strong>{" "}: Boucliers de percussion, sacs
              de plaquage, jougs de mêlée et matériel de préparation physique pour parfaire votre
              technique et votre condition.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🚿 Vestiaires &amp; Pôle Médical</h3>
          <p className="lede">
            Le confort et la récupération de nos joueurs et joueuses sont une priorité pour
            l&apos;association.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Vestiaires Séparés</strong>{" "}: Des vestiaires collectifs spacieux, modernes
              et sécurisés sont dédiés indépendamment aux sections masculine et féminine.
            </li>
            <li>
              <strong>Espace Douches</strong>{" "}: Des installations sanitaires entretenues avec
              douches chaudes disponibles immédiatement après l&apos;effort.
            </li>
            <li>
              <strong>Espace Soins &amp; Kiné</strong>{" "}: Une table de soin est accessible pour
              la gestion des petits bobos, le strapping avant match et la récupération.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Le Club-House : Le Lieu de la Troisième Mi-Temps
          </h3>
          <p className="lede">
            Parce que le rugby ne s&apos;arrête pas au coup de sifflet final, notre Club-House est
            le véritable lieu d&apos;échange, de mixité et de partage de la famille KABSA.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Convivialité au rendez-vous</strong>{" "}: Un espace chaleureux équipé
              d&apos;un bar et d&apos;un écran géant pour suivre ensemble les grands matchs
              internationaux.
            </li>
            <li>
              <strong>Événements communs</strong>{" "}: C&apos;est ici que sont organisées nos
              fameuses troisièmes mi-temps, nos soirées d&apos;association et les repas
              d&apos;après-match pour souder le groupe.
            </li>
            <li>
              <strong>Boutique du Club</strong>{" "}: Un coin dédié pour vous procurer le
              merchandising officiel de KABSA (sweats, polos, bonnets).
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">♿ Accessibilité du Complexe</h3>
          <p className="lede">
            Fidèles à notre engagement pour un rugby moderne et inclusif, nos infrastructures sont
            adaptées pour accueillir tous les publics :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tribunes accessibles</strong>{" "}: Des emplacements réservés pour les
              personnes à mobilité réduite (PMR) pour suivre les matchs à l&apos;abri.
            </li>
            <li>
              <strong>Sanitaires et Vestiaires adaptés</strong>{" "}: Des aménagements conformes aux
              normes PMR.
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
          <h3 className="rf-blocktitle">🏉 Types d&apos;Entraînement</h3>
          <p className="lede">
            Chez KABSA, nos séances ne se résument pas à courir après un ballon ovale. Que vous
            rejoigniez la section masculine ou féminine, notre encadrement de qualité propose des
            entraînements structurés, adaptés aux objectifs de chacun : de la découverte des bases
            pour les débutants à l&apos;excellence collective pour la compétition. Nos séances
            durent 2 heures (de 19h30 à 21h30) et sont découpées en plusieurs blocs complémentaires.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">🧭 La Structure d&apos;une Séance Type</h3>
          <p className="lede">
            Pour optimiser la performance et garantir la sécurité de tous, chaque entraînement suit
            une progression rigoureuse :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;Échauffement (15 min avant la séance)</strong>{" "}: Arriver en avance
              est indispensable. Ce bloc est dédié à la mise en train cardiovasculaire, à la
              mobilité articulaire et à la prévention des blessures.
            </li>
            <li>
              <strong>Le Bloc Physique &amp; Athlétique (20 min)</strong>{" "}: Développement de la
              condition physique générale et spécifique. Travail de vitesse, d&apos;explosivité,
              d&apos;endurance et d&apos;appuis, adapté au niveau de chacun.
            </li>
            <li>
              <strong>Les Ateliers Techniques (30 min)</strong>{" "}: Travail par ateliers pour
              parfaire la technique individuelle. Passes, réceptions, kicking, gestuelle sous
              pression, et apprentissage des postures de sécurité (plaquage sécurisé).
            </li>
            <li>
              <strong>Le Bloc Tactique &amp; Stratégie (30 min)</strong>{" "}: Mise en place du
              projet de jeu collectif. Organisation offensive et défensive, lancements de jeu,
              circulation des joueurs et vision du jeu en vue des matchs du week-end.
            </li>
            <li>
              <strong>Le Jeu &amp; Opposition (25 min)</strong>{" "}: Application pratique en
              situation réelle (jeux à effectif réduit ou opposition raisonnée) pour développer
              l&apos;esprit de corps et la prise de décision.
            </li>
            <li>
              <strong>Le Retour au Calme &amp; Debrief (10 min)</strong>{" "}: Étirements légers,
              hydratation et retour des entraîneurs sur la séance.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛠️ Les Entraînements Spécifiques par Poste
          </h3>
          <p className="lede">
            Le rugby a cette force unique d&apos;accueillir toutes les morphologies. Au cours de la
            semaine, des temps sont dédiés au travail par lignes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour les Avants (Force &amp; Conquête)</strong>{" "}: Ateliers spécifiques sur
              les phases de mêlée fermée, de touche (lancers et sauts), de rucks et de mauls.
              Priorité absolue à la sécurité et à la technique de poussée.
            </li>
            <li>
              <strong>Pour les Lignes Arrières (Vitesse &amp; Stratégie)</strong>{" "}: Ateliers
              axés sur l&apos;animation offensive, les combinaisons, la vitesse de transmission, les
              duels (un contre un) et le jeu au pied.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Nos Formats Alternatifs &amp; Cohésion
          </h3>
          <p className="lede">
            Parce que KABSA défend un rugby moderne, accessible et convivial, nous varions
            régulièrement les plaisirs :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Rugby à Toucher (sans contact)</strong>{" "}: Intégré dans nos séances ou
              lors de tournois mixtes, ce format met l&apos;accent sur le cadrage-débordement, la
              vitesse de passe et la stratégie, sans l&apos;impact physique du plaquage.
            </li>
            <li>
              <strong>Les Stages de Cohésion</strong>{" "}: Des séances spéciales axées sur le
              dépassement de soi et la solidarité, combinant parcours physiques renforcés, activités
              de « Team Building » et grands jeux collectifs pour souder le groupe.
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
        <h2>Rugby</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
