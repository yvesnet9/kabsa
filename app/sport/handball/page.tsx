"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function HandballPage() {
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
        <p>Découvrez la section Handball de KABSA.</p>
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
          <h3 className="rf-blocktitle">🤾‍♂️ Handball Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans la section dédiée au handball chez KABSA ! Que vous soyez un joueur
            chevronné à la recherche de compétition ou un débutant souhaitant découvrir un sport
            collectif dynamique, notre association propose des sections adaptées à tous les profils,
            chez les hommes comme chez les femmes.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📋 Nos Sections &amp; Catégories</h3>
          <p className="lede">
            Nous croyons en l&apos;égalité des chances et au développement du sport pour tous. Nos
            équipes sont structurées pour permettre à chacun de s&apos;épanouir à son niveau.
          </p>
          <h4 className="rf-blocktitle">🧑 Section Masculine</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipe Senior (Compétition)</strong>{" "}: Destinée aux joueurs confirmés qui
              souhaitent défendre les couleurs de KABSA en championnat. Intensité, rigueur tactique
              et esprit d&apos;équipe.
            </li>
            <li>
              <strong>Équipe Loisir / Espoirs</strong>{" "}: Parfaite pour les jeunes en transition ou
              les adultes qui privilégient le plaisir du jeu, le maintien en forme et la
              convivialité sans la pression du résultat.
            </li>
          </ul>
          <h4 className="rf-blocktitle">👩 Section Féminine</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipe Senior (Compétition)</strong>{" "}: Un collectif soudé et ambitieux engagé
              en compétition. Esprit de corps, dépassement de soi et progression constante sont au
              rendez-vous.
            </li>
            <li>
              <strong>Équipe Loisir / Découverte</strong>{" "}: Un espace bienveillant pour apprendre
              les bases du handball, se dépenser et partager des moments forts au sein d&apos;un
              groupe dynamique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Nos Valeurs sur le Terrain</h3>
          <p className="lede">
            Rejoindre la section handball de KABSA, c&apos;est adhérer à une philosophie sportive
            basée sur 4 piliers essentiels :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Respect</strong>{" "}: Envers les arbitres, les adversaires, les partenaires et
              le public.
            </li>
            <li>
              <strong>La Solidarité</strong>{" "}: Le handball est le sport collectif par excellence ;
              aucun exploit n&apos;est individuel.
            </li>
            <li>
              <strong>L&apos;Engagement</strong>{" "}: Donner le meilleur de soi-même, à
              l&apos;entraînement comme en match.
            </li>
            <li>
              <strong>La Convivialité</strong>{" "}: Prolonger le plaisir du jeu en dehors du terrain
              grâce aux événements de l&apos;association.
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
          <h3 className="rf-blocktitle">🗓️ Horaires et Lieux d&apos;Entraînement</h3>
          <p className="lede">
            Les entraînements se déroulent tout au long de la saison (hors vacances scolaires) dans
            nos installations partenaires. Horaires communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">✍️ Comment nous rejoindre ?</h3>
          <p className="lede">
            Les inscriptions sont ouvertes à partir du mois de septembre, mais il reste possible de
            nous rejoindre en cours d&apos;année selon les places disponibles.
          </p>
          <p className="lede">
            <em>Envie de tester avant de vous engager ?</em>{" "}Nous vous offrons <strong>deux séances
            d&apos;essai gratuites</strong>{" "}! Venez simplement en tenue de sport avec une bouteille
            d&apos;eau.
          </p>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📞 Contactez la Section Handball</h3>
          <p className="lede">
            Une question sur les tarifs, les licences ou le niveau requis ? Notre équipe
            administrative et nos entraîneurs sont à votre écoute.
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
            Bienvenue dans l&apos;espace pratique de la section Handball de KABSA ! Retrouvez ici
            toutes les informations logistiques, les conditions d&apos;accès à nos infrastructures
            et les modalités pour venir tester nos entraînements.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Nos Infrastructures &amp; Accès</h3>
          <p className="lede">
            Nos entraînements se déroulent au sein de deux structures partenaires majeures :
          </p>
          <h4 className="rf-blocktitle">Gymnase Central</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Catégories</strong>{" "}: Seniors Masculins (Mardi &amp; Jeudi) et Loisirs
              (Vendredi).
            </li>
            <li>
              <strong>Accessibilité</strong>{" "}: Établissement entièrement accessible aux
              personnes à mobilité réduite (rampe d&apos;accès à l&apos;entrée, vestiaires et
              sanitaires adaptés).
            </li>
            <li>
              <strong>Transports</strong>{" "}: Parking gratuit sur place (avec places réservées
              PMR) et desservi par les lignes de bus principales.
            </li>
          </ul>
          <h4 className="rf-blocktitle">Complexe Sportif KABSA</h4>
          <ul className="lede disc-arrow-list">
            <li><strong>Catégories</strong>{" "}: Seniors Féminines (Lundi &amp; Mercredi).</li>
            <li>
              <strong>Accessibilité</strong>{" "}: Site moderne respectant les dernières normes
              d&apos;accessibilité universelle (cheminement podotactile, ascenseur pour l&apos;accès
              aux tribunes, vestiaires PMR).
            </li>
            <li>
              <strong>Transports</strong>{" "}: Grand parking vélos sécurisé, parking voitures
              gratuit et station de métro/tram à 5 minutes à pied.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">👟 Matériel &amp; Pratique au quotidien</h3>
          <p className="lede">
            Pour que vos séances se déroulent dans les meilleures conditions, voici quelques repères
            pratiques :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipement requis</strong>{" "}: Une tenue de sport classique (short/t-shirt),
              une gourde ou bouteille d&apos;eau individuelle, et obligatoirement des chaussures de
              sport en salle (non marquantes) pour préserver les parquets.
            </li>
            <li>
              <strong>Vestiaires</strong>{" "}: Des vestiaires collectifs avec douches individuelles
              et collectives sont à votre disposition avant et après chaque séance.
            </li>
            <li>
              <strong>Calendrier</strong>{" "}: Les entraînements s&apos;arrêtent durant les
              vacances scolaires et les jours fériés, sauf mention contraire de vos entraîneurs pour
              les équipes en compétition.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">🆓 Essais Gratuits &amp; Inscriptions</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Deux séances d&apos;essai gratuites</strong>{" "}: Venez tester
              l&apos;ambiance et le jeu sans aucun engagement. Présentez-vous directement à
              l&apos;entraînement de votre catégorie en tenue.
            </li>
            <li>
              <strong>Inscriptions à l&apos;année</strong>{" "}: La campagne principale débute en
              septembre, mais KABSA favorise l&apos;accessibilité au sport tout au long de
              l&apos;année. Les intégrations en cours de saison restent possibles selon les places
              disponibles.
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
          <h3 className="rf-blocktitle">🏢 Nos Infrastructures</h3>
          <p className="lede">
            La section Handball de KABSA bénéficie d&apos;installations sportives de premier plan,
            adaptées aussi bien à la pratique de loisir qu&apos;aux exigences de la haute
            compétition. Découvrez les deux complexes modernes qui accueillent nos licenciés tout au
            long de la saison.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏟️ Le Gymnase Central —{" "}<em>Le cœur de la section masculine et loisir.</em>
          </h3>
          <p className="lede">
            Situé en centre-ville, le Gymnase Central offre un cadre idéal pour la pratique du
            handball avec des équipements parfaitement entretenus.
          </p>
          <p className="lede"><em>Créneaux d&apos;entraînement (à confirmer) :</em></p>
          <ul className="lede disc-arrow-list">
            <li><strong>Seniors Masculins</strong>{" "}: Mardi &amp; Jeudi (20h00 - 22h00)</li>
            <li><strong>Loisirs (Mixte/Séparé)</strong>{" "}: Vendredi (20h00 - 21h30)</li>
          </ul>
          <p className="lede"><em>Caractéristiques techniques :</em></p>
          <ul className="lede disc-arrow-list">
            <li>
              Revêtement de sol amortissant (parquet haute performance) réduisant les impacts
              articulaires.
            </li>
            <li>Tracé officiel homologué et buts de handball de compétition sécurisés.</li>
            <li>
              Éclairage LED homogène de dernière génération pour un confort visuel optimal lors des
              entraînements en soirée.
            </li>
          </ul>
          <p className="lede"><em>Commodités :</em></p>
          <ul className="lede disc-arrow-list">
            <li>4 vestiaires collectifs spacieux avec douches chaudes.</li>
            <li>
              Tribunes d&apos;une capacité de 300 places pour accueillir les supporters lors des
              matchs de championnat.
            </li>
            <li>
              Espace de stockage dédié pour le matériel pédagogique du club (ballons, chasubles,
              plots, matériel de musculation).
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛰️ Le Complexe Sportif KABSA —{" "}<em>Le bastion de la section féminine.</em>
          </h3>
          <p className="lede">
            Véritable vitrine de notre association, ce complexe omnisports moderne intègre des
            technologies et des aménagements de pointe pour le développement de nos athlètes.
          </p>
          <p className="lede"><em>Créneaux d&apos;entraînement (à confirmer) :</em></p>
          <ul className="lede disc-arrow-list">
            <li><strong>Seniors Féminines</strong>{" "}: Lundi &amp; Mercredi (19h30 - 21h30)</li>
          </ul>
          <p className="lede"><em>Caractéristiques techniques :</em></p>
          <ul className="lede disc-arrow-list">
            <li>
              Sol en résine synthétique coulée offrant une adhérence parfaite pour les appuis et les
              extensions.
            </li>
            <li>
              Panneaux d&apos;affichage électronique des scores pour les compétitions officielles.
            </li>
            <li>
              Espace de kinésithérapie et de récupération accessible sur rendez-vous pour les
              équipes engagées en championnat.
            </li>
          </ul>
          <p className="lede"><em>Commodités :</em></p>
          <ul className="lede disc-arrow-list">
            <li>Vestiaires modernes et privatifs réservés aux équipes locales et visiteuses.</li>
            <li>
              Club-house convivial attenant à la salle de sport, idéal pour partager les moments de
              convivialité d&apos;après-match et les événements de l&apos;association.
            </li>
            <li>
              Grandes tribunes latérales offrant une excellente visibilité sur l&apos;ensemble du
              terrain.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧽 Consignes d&apos;utilisation du matériel
          </h3>
          <p className="lede">
            Pour préserver la qualité de nos infrastructures partenaires, nous demandons à tous les
            joueurs de respecter les règles suivantes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Chaussures de salle obligatoires</strong>{" "}: Vos chaussures de sport
              doivent avoir des semelles non marquantes et propres (à enfiler dans les vestiaires).
            </li>
            <li>
              <strong>Utilisation de la résine (colle)</strong>{" "}: L&apos;usage de la résine pour
              les ballons est soumis à la réglementation spécifique de chaque gymnase. Veillez à
              utiliser exclusivement les zones de nettoyage prévues à cet effet.
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
          <h3 className="rf-blocktitle">🤾‍♂️ Nos Types d&apos;Entraînement</h3>
          <p className="lede">
            Chez KABSA, nous adaptons notre pédagogie aux objectifs de chacun. Que vous cherchiez
            l&apos;adrénaline de la compétition, le perfectionnement technique ou simplement le
            plaisir de vous dépenser en équipe, vous trouverez un cadre d&apos;entraînement sur
            mesure.
          </p>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 Le Pôle Compétition (Seniors Masculins &amp; Féminines)
            —{" "}<em>Intensité, rigueur tactique et esprit de corps.</em>
          </h3>
          <p className="lede">
            Destinés aux joueuses et joueurs confirmés ou ambitieux, ces entraînements sont encadrés
            par des entraîneurs diplômés et se concentrent sur la performance collective en
            championnat.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Préparation physique</strong>{" "}: Développement de l&apos;endurance, de la
              vitesse de réaction, de la force et de l&apos;explosivité pour tenir le rythme des
              matchs officiels.
            </li>
            <li>
              <strong>Rigueur tactique</strong>{" "}: Apprentissage des systèmes de défense (0-6,
              1-5), des combinaisons d&apos;attaque, des transitions rapides (contre-attaques) et
              des phases de supériorité ou infériorité numérique.
            </li>
            <li>
              <strong>Technique individuelle</strong>{" "}: Perfectionnement de la qualité de passe,
              de la variété des tirs (extension, hanche, roucoulette) et du duel un contre un
              (feintes).
            </li>
            <li>
              <strong>Analyse et stratégie</strong>{" "}: Retours techniques réguliers pour ajuster
              le jeu en fonction des futurs adversaires du week-end.
            </li>
          </ul>
          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Le Pôle Loisir, Espoirs &amp; Découverte
            —{" "}<em>Plaisir du jeu, maintien en forme et convivialité.</em>
          </h3>
          <p className="lede">
            Cet espace est idéal pour les adultes débutants, les anciens compétiteurs souhaitant
            lever le pied, ou les jeunes en transition. L&apos;accent est mis sur le bien-être, le
            partage et l&apos;absence de pression de résultat.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Apprentissage bienveillant</strong>{" "}: Initiation et consolidation des
              bases fondamentales du handball (dribbles, passes, réceptions, tirs en suspension) à
              votre propre rythme.
            </li>
            <li>
              <strong>Maintien en forme</strong>{" "}: Exercices cardiovasculaires ludiques et
              renforcement musculaire généralisé à travers des ateliers dynamiques.
            </li>
            <li>
              <strong>Le jeu avant tout</strong>{" "}: Les séances se terminent systématiquement par
              des matchs amicaux internes où l&apos;entraide et le fair-play priment.
            </li>
            <li>
              <strong>Mixité et intégration</strong>{" "}: Un format souvent mixte le vendredi,
              parfait pour s&apos;intégrer rapidement dans l&apos;association et participer à la vie
              conviviale du club.
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
        <h2>Handball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
