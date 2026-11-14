"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function CyclismePage() {
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
        <p>Découvrez la section Cyclisme de KABSA.</p>
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
        <h3>Sorties &amp; courses</h3>
        <p>Meilleurs moments des sorties et compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Cyclistes KABSA</h3>
        <p>Parcours des meilleurs cyclistes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">🚴‍♂️ Cyclisme Masculin &amp; Féminin</h3>
          <p className="lede">
            Chez KABSA, nous croyons que le vélo est un formidable vecteur de rassemblement, de
            dépassement de soi et de mixité. Notre section cyclisme incarne cette vision en offrant
            un espace où hommes et femmes partagent la même passion de la route, de la piste ou des
            sentiers, quel que soit leur niveau. Nous prônons un cyclisme inclusif où la parité
            n&apos;est pas qu&apos;un mot, mais une réalité partagée à chaque coup de pédale.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Notre Philosophie : Rouler Ensemble, Sans Distinction
          </h3>
          <p className="lede">
            La section cyclisme de KABSA repose sur trois piliers fondamentaux :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>La mixité sur la route</strong>{" "}: Nos entraînements et sorties loisirs sont
              ouverts à tous. Nous favorisons l&apos;entraide, le partage d&apos;expérience et la
              convivialité entre cyclistes masculins et féminins.
            </li>
            <li>
              <strong>L&apos;équité dans l&apos;accompagnement</strong>{" "}: Que vous participiez à une
              course locale ou à une randonnée cyclotouriste, chaque membre bénéficie des mêmes
              conseils techniques, du même suivi et du même soutien logistique.
            </li>
            <li>
              <strong>La valorisation du cyclisme féminin</strong>{" "}: Nous mettons un point
              d&apos;honneur à encourager la pratique des femmes, encore trop souvent
              sous-représentées dans le peloton, en créant un environnement sécurisant et stimulant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📅 Nos Activités &amp; Entraînements</h3>
          <p className="lede">
            Pour que chacun trouve son rythme, nous proposons différentes formules adaptées aux
            objectifs de nos adhérents :
          </p>
          <h4 className="rf-blocktitle">🚴‍♀️ Sorties Loisirs &amp; Cyclotourisme</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Débutants, passionnés de paysages et adeptes de la petite reine sans
            chronomètre. <em>Le programme :</em>{" "}des sorties hebdomadaires (généralement le
            week-end) avec plusieurs groupes de niveau — rouler ensemble, progresser à son rythme et
            partager un moment convivial.
          </p>
          <h4 className="rf-blocktitle">⚡ Entraînements Performance &amp; Compétition</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Cyclistes (hommes et femmes) souhaitant préparer des cyclosportives,
            des courses régionales ou améliorer leur endurance. <em>Le programme :</em>{" "}séances de
            fractionné, travail de relance, techniques de peloton et gestion de l&apos;effort.
          </p>
          <h4 className="rf-blocktitle">🔧 Ateliers Mécaniques &amp; Sécurité</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Tout le monde. <em>Le programme :</em>{" "}apprendre à changer une
            chambre à air, régler son dérailleur, entretenir sa transmission et adopter les bons
            réflexes de sécurité en groupe.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏆 Nos Engagements pour la Parité</h3>
          <p className="lede">
            L&apos;association KABSA s&apos;engage activement pour le développement du sport au
            féminin comme au masculin à travers :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              Des groupes de niveau homogènes (et non par genre) pour que chacun roule à sa juste
              valeur.
            </li>
            <li>
              Des parrains et marraines de club pour guider les nouveaux arrivants et faciliter leur
              intégration.
            </li>
            <li>
              La promotion et la participation paritaire aux événements et compétitions officiels.
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
            Sorties hebdomadaires (généralement le week-end) ; horaires et tarifs communiqués à
            l&apos;inscription. Calendrier des sorties communiqué aux adhérents.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">💬 Rejoignez le Peloton KABSA !</h3>
          <p className="lede">
            Que vous soyez un cycliste chevronné ou que vous souhaitiez vous remettre en selle, vous
            avez votre place parmi nous. Nos maîtres-mots sont le respect, la convivialité et le
            plaisir de rouler.
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
          <h3 className="rf-blocktitle">♿ Accessibilité &amp; Pratique : Le Vélo Ouvert à Tous</h3>
          <p className="lede">
            Chez KABSA, nous sommes convaincus que la passion du cyclisme ne doit connaître aucune
            barrière. Notre mission est de rendre la pratique du vélo accessible à chaque personne,
            quels que soient son âge, sa condition physique, ses moyens financiers ou son handicap.
            Ensemble, faisons tomber les freins à la pratique pour que chacun puisse goûter à la
            liberté du deux-roues.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Nos Engagements pour une Pratique Inclusive
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Une ouverture à tous les profils</strong>{" "}: Que vous soyez en situation de
              handicap, senior, en reprise d&apos;activité physique ou grand débutant, nous adaptons
              nos parcours et notre encadrement à vos besoins spécifiques.
            </li>
            <li>
              <strong>L&apos;initiation et la remise en selle</strong>{" "}: Vous n&apos;avez pas
              roulé depuis des années ou vous manquez d&apos;assurance sur la route ? Nos encadrants
              organisent des sessions dédiées pour reprendre confiance en toute sécurité.
            </li>
            <li>
              <strong>La solidarité matérielle</strong>{" "}: Parce que l&apos;équipement ne doit
              pas être un obstacle, nous proposons un service de prêt de vélos (route, VTT, vélos à
              assistance électrique ou tandems) ainsi qu&apos;une bourse aux équipements à prix
              solidaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚲 Nos Dispositifs &amp; Accompagnements
          </h3>
          <h4 className="rf-blocktitle">🤝 Accompagnement Personnalisé &amp; Tandems</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Personnes malvoyantes, non-voyantes ou nécessitant un guidage
            spécifique. <em>Le programme :</em>{" "}des binômes pilotes-copilotes formés vous
            permettent de rouler en toute sérénité lors de nos sorties hebdomadaires.
          </p>
          <h4 className="rf-blocktitle">⚡ Mobilité Douce &amp; Assistance Électrique</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Cyclistes souhaitant reprendre le sport en douceur ou compenser
            une différence de rythme physique. <em>Le programme :</em>{" "}les vélos à assistance
            électrique (VAE) sont les bienvenus dans nos groupes loisirs pour permettre à chacun de
            suivre le peloton sans s&apos;épuiser.
          </p>
          <h4 className="rf-blocktitle">📍 Des Infrastructures &amp; Horaires Adaptés</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Tous nos membres et visiteurs. <em>Le programme :</em>{" "}nos
            points de rendez-vous sont situés à proximité des transports en commun, avec des zones
            de stationnement accessibles et des locaux sécurisés pour entreposer votre matériel.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">💡 Infos Pratiques pour Débuter</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Séances découvertes gratuites</strong>{" "}: Venez tester l&apos;ambiance du
              club lors de deux sorties d&apos;essai avant de finaliser votre adhésion.
            </li>
            <li>
              <strong>Tarifs solidaires</strong>{" "}: Nous proposons des facilités de paiement et
              des solutions adaptées à chaque budget.
            </li>
            <li>
              <strong>Équipement minimum requis</strong>{" "}: Un vélo en bon état de fonctionnement
              (ou emprunté au club) et un casque homologué suffisent pour prendre le départ.
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
            🏟️ Nos Infrastructures : Un Cadre Sécurisé et Fonctionnel
          </h3>
          <p className="lede">
            Chez KABSA, nous savons qu&apos;une pratique sportive épanouie passe par des équipements
            de qualité et des lieux d&apos;accueil adaptés. Que ce soit pour préparer votre vélo
            avant une sortie, vous entraîner en toute sécurité ou partager un moment convivial après
            l&apos;effort, nos installations sont pensées pour le confort de tous nos membres.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔧 Nos Équipements &amp; Espaces Techniques
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Local Vélo Sécurisé</strong>{" "}: Un espace fermé, sous alarme et
              facilement accessible de plain-pied pour stationner votre monture en toute
              tranquillité lors des réunions ou événements du club.
            </li>
            <li>
              <strong>L&apos;Atelier Mécanique</strong>{" "}: Équipé de pieds d&apos;atelier,
              d&apos;outillage professionnel, de pompes à pied et d&apos;une station de lavage, il
              permet à chacun d&apos;entretenir ou de réparer son vélo sur place.
            </li>
            <li>
              <strong>La Flotte de Vélos du Club</strong>{" "}: Un parc matériel régulièrement
              révisé (vélos de route, VTT, vélos à assistance électrique et tandems) disponible pour
              les séances d&apos;initiation et le prêt aux adhérents.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛣️ Nos Terrains d&apos;Entraînement</h3>
          <h4 className="rf-blocktitle">🏁 L&apos;Anneau Cycliste / Piste Sécurisée</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Les débutants, les jeunes de l&apos;école de vélo et les groupes
            souhaitant travailler la technique ou le fractionné sans circulation automobile. <em>Les
            atouts :</em>{" "}un revêtement lisse, un éclairage nocturne pour les entraînements
            d&apos;hiver et un tracé fermé à la circulation.
          </p>
          <h4 className="rf-blocktitle">🌲 Les Parcours Route &amp; Sentiers Balisés</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Les amateurs de cyclotourisme, de sorties longues et de VTT.{" "}
            <em>Les atouts :</em>{" "}des itinéraires reconnus et validés par nos encadrants,
            privilégiant les voies vertes, les pistes cyclables et les routes à faible trafic.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Le Club-House : Le Cœur de la Vie Associative
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un espace de convivialité</strong>{" "}: Une salle d&apos;accueil chaleureuse
              pour se retrouver autour d&apos;un café avant le départ ou débriefer la sortie autour
              d&apos;une collation.
            </li>
            <li>
              <strong>Des vestiaires et sanitaires accessibles</strong>{" "}: Des installations
              propres, équipées de douches, de casiers et d&apos;un accès PMR.
            </li>
            <li>
              <strong>Une salle de réunion</strong>{" "}: Un espace dédié aux ateliers théoriques
              (sécurité routière, nutrition, cartographie) et à la vie du club.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Accès &amp; Venir au Club</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>À vélo</strong>{" "}: Liaison directe avec les principales pistes cyclables de
              l&apos;agglomération et arceaux de stationnement devant l&apos;entrée.
            </li>
            <li>
              <strong>En transports en commun</strong>{" "}: Arrêts de bus et de tramway situés à
              moins de 5 minutes à pied.
            </li>
            <li>
              <strong>En voiture</strong>{" "}: Parking gratuit à proximité immédiate avec places
              réservées PMR et zone de déchargement rapide pour le matériel.
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
            🚴‍♂️ Types d&apos;Entraînement : Progressez à Votre Rythme
          </h3>
          <p className="lede">
            Chez KABSA, chaque cycliste a ses propres objectifs : garder la forme, découvrir de
            nouveaux paysages, préparer un défi sportif ou viser la performance en compétition. Nos
            séances sont construites pour offrir un encadrement structuré, progressif et sécurisant,
            quel que soit votre niveau de départ.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre Approche : Des Groupes Adaptés à Chacun
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Des groupes de niveau homogènes</strong>{" "}: Nous répartissons les cyclistes
              par allure et par distance plutôt que par âge ou par genre.
            </li>
            <li>
              <strong>La règle du « personne ne reste seul »</strong>{" "}: Chaque groupe est
              encadré par un capitaine de route qui veille à la cohésion du peloton et adapte le
              rythme si nécessaire.
            </li>
            <li>
              <strong>Une progression tout au long de l&apos;année</strong>{" "}: Nos cycles
              d&apos;entraînement suivent le rythme des saisons (reprise foncière en hiver, montée
              en puissance au printemps, sorties longues et objectifs en été).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📅 Nos Différentes Formules d&apos;Entraînement
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🌱 Initiation &amp; Remise en Selle</strong>{" "}— débutants et reprise du
              sport : passage de vitesses, freinage, équilibre, position sur le vélo et premières
              sorties sur voies vertes à allure modérée.
            </li>
            <li>
              <strong>🌄 Endurance &amp; Cyclotourisme (Sorties Loisirs)</strong>{" "}— convivialité
              et découverte : sorties hebdomadaires (week-end) de 40 à 100 km selon les groupes,
              gestion de l&apos;effort sur la durée et pauses ravitaillement.
            </li>
            <li>
              <strong>⚡ Performance, Fractionné &amp; Compétition</strong>{" "}— développer
              puissance et vitesse : séances en semaine (fractionné court et long, seuil, sprint,
              relances en côte) et entraînements intensifs en peloton le week-end.
            </li>
            <li>
              <strong>🧭 Technique, Agilité &amp; Maniabilité</strong>{" "}— plus de sûreté en groupe
              et sur terrain technique : roulage en peloton (relais, aspiration, signaux de danger),
              virages serrés, franchissement d&apos;obstacles et pilotage sur sentiers (VTT /
              Gravel).
            </li>
            <li>
              <strong>❄️ Entraînement Hivernal &amp; Préparation Physique (PPG)</strong>{" "}—
              maintenir sa condition : home-trainer connecté en groupe, renforcement musculaire
              ciblé (gainage, souplesse) et sorties VTT ou marche active.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏆 Nos Engagements pour la Parité</h3>
          <ul className="lede disc-arrow-list">
            <li>
              Des groupes de niveau homogènes (et non par genre) pour que chacun roule à sa juste
              valeur.
            </li>
            <li>
              Des parrains et marraines de club pour guider les nouveaux arrivants et faciliter leur
              intégration.
            </li>
            <li>
              La promotion et la participation paritaire aux événements et compétitions officiels.
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
        <h2>Cyclisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
