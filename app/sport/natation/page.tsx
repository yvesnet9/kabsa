"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function NatationPage() {
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
        <p>Découvrez la section Natation de KABSA.</p>
        <VideoSlot videoSrc="/videos/piscine.mp4" poster="/videos/piscine.jpg" title="Piscine" />
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
        <h3>Nageurs &amp; nageuses KABSA</h3>
        <p>Parcours des meilleurs nageurs et nageuses.</p>
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
          <h3 className="rf-blocktitle">🏊‍♂️ Natation Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié à la natation au sein de l&apos;association KABSA.
            Que vous cherchiez à vaincre votre peur de l&apos;eau, perfectionner vos techniques de
            nage ou vous entraîner dans un cadre compétitif, nos bassins vous sont ouverts. Nous
            prônons une pratique de la natation inclusive, bienveillante et adaptée aux objectifs de
            chacun et chacune, sous la supervision de coachs certifiés.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Notre Philosophie : L&apos;Eau pour Tous et Toutes
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous croyons que la natation est bien plus qu&apos;un sport
            : c&apos;est un art de vivre, un gage de santé et un vecteur de confiance en soi. Nos
            sections masculine et féminine sont conçues pour offrir un environnement sécurisant et
            motivant, respectueux du rythme et des aspirations de chaque membre.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📊 Nos Formules &amp; Groupes de Niveau</h3>
          <p className="lede">
            Pour répondre aux besoins de tous les profils, nos séances sont réparties en quatre
            grands niveaux, accessibles aux hommes comme aux femmes :
          </p>
          <p className="lede">
            <strong>🔹 1. Aquaphobie &amp; Débutants (Apprentissage)</strong>{" "}— <em>Pour qui
            ?</em>{" "}Les adultes qui ne se sentent pas à l&apos;aise dans l&apos;eau ou qui n&apos;ont
            jamais appris à nager. <em>Objectif :</em>{" "}apprivoiser l&apos;élément aquatique,
            travailler la respiration, flotter et acquérir les premiers réflexes de déplacement en
            toute sécurité.
          </p>
          <p className="lede">
            <strong>🔹 2. Intermédiaire (Perfectionnement)</strong>{" "}— <em>Pour qui ?</em>{" "}Ceux et
            celles qui savent déjà nager au moins une nage mais souhaitent s&apos;améliorer.{" "}
            <em>Objectif :</em>{" "}apprentissage et correction des 4 nages (crawl, dos crawlé, brasse,
            papillon), amélioration de l&apos;endurance et de la coordination.
          </p>
          <p className="lede">
            <strong>🔹 3. Natation Loisir &amp; Bien-être (Entretien)</strong>{" "}— <em>Pour qui
            ?</em>{" "}Les nageurs et nageuses autonomes qui recherchent une activité physique régulière
            sans la pression du chronomètre. <em>Objectif :</em>{" "}renforcement musculaire,
            développement de la capacité cardio-respiratoire et évacuation du stress.
          </p>
          <p className="lede">
            <strong>🔹 4. Section Compétition &amp; Masters (Performance)</strong>{" "}— <em>Pour qui
            ?</em>{" "}Les passionnés de vitesse et de technique souhaitant se mesurer aux autres ou à
            eux-mêmes. <em>Objectif :</em>{" "}plans d&apos;entraînement intensifs, optimisation des
            départs/virages et préparation aux compétitions interclubs ou régionales.
          </p>
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
          <h3 className="rf-blocktitle">📅 Horaires &amp; Plannings des Séances</h3>
          <p className="lede">
            Les créneaux sont organisés de manière à garantir un confort de pratique optimal en
            fonction de vos disponibilités. Horaires communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Informations Pratiques &amp; Inscriptions
          </h3>
          <h4 className="rf-blocktitle"><em>Tarifs (saison 2026-2027)</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Cotisation annuelle Loisir</strong>{" "}: tarif communiqué à l&apos;inscription
              (accès à 2 séances par semaine).
            </li>
            <li>
              <strong>Cotisation annuelle Compétition</strong>{" "}: tarif communiqué à
              l&apos;inscription (accès aux entraînements + frais d&apos;inscription aux courses).
            </li>
            <li>Tarifs dégressifs pour les familles et les étudiants.</li>
          </ul>
          <h4 className="rf-blocktitle"><em>Équipement requis</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              Bonnet de bain (obligatoire, fourni aux couleurs de l&apos;association KABSA lors de
              l&apos;inscription).
            </li>
            <li>Maillot de bain de natation (short de plage interdit).</li>
            <li>Lunettes de natation.</li>
          </ul>
          <h4 className="rf-blocktitle">💬 Témoignages de nos Membres</h4>
          <p className="lede"><strong>À venir.</strong></p>
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
            Chez KABSA, nous mettons tout en œuvre pour que la natation soit une expérience fluide,
            accueillante et accessible à tous et toutes. Retrouvez ici toutes les informations
            essentielles pour préparer votre venue dans nos bassins en toute sérénité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Une Pratique Inclusive et Adaptée</h3>
          <p className="lede">
            Parce que chaque parcours aquatique est unique, notre association veille à lever les
            freins à la pratique sportive :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accompagnement personnalisé</strong>{" "}: Que vous soyez grand débutant, en
              situation d&apos;aquaphobie ou nageur confirmé, nos coachs certifiés adaptent les
              exercices à votre rythme et à vos capacités physiques.
            </li>
            <li>
              <strong>Accueil du handicap (Handisport &amp; Sport Adapté)</strong>{" "}: Nos
              créneaux sont ouverts aux personnes en situation de handicap moteur, sensoriel ou
              mental. N&apos;hésitez pas à nous contacter en amont afin que nos éducateurs puissent
              préparer un accueil sur mesure.
            </li>
            <li>
              <strong>Respect et confidentialité</strong>{" "}: Nos sections féminines et masculines
              bénéficient d&apos;un encadrement dédié et d&apos;espaces garantissant l&apos;intimité
              et le confort de chacun et chacune.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏛️ Accessibilité des Infrastructures</h3>
          <p className="lede">
            Nos entraînements se déroulent au Bassin Central et au Bassin Olympique, deux
            équipements modernes pensés pour faciliter l&apos;accès aux personnes à mobilité réduite
            (PMR) :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accès aux bâtiments</strong>{" "}: Entrées de plain-pied, ascenseurs
              desservant les différents niveaux et signalétique claire.
            </li>
            <li>
              <strong>Vestiaires et sanitaires</strong>{" "}: Cabines de change spacieuses, douches
              adaptées et casiers accessibles en fauteuil roulant.
            </li>
            <li>
              <strong>Mise à l&apos;eau sécurisée</strong>{" "}: Présence de sièges élévateurs
              (potences de mise à l&apos;eau) et d&apos;escaliers avec rampes d&apos;appui sur nos
              bassins.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎒 Préparer son Sac de Piscine</h3>
          <p className="lede">
            Pour des raisons d&apos;hygiène et de sécurité dans les bassins, le règlement intérieur
            impose une tenue spécifique :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bonnet de bain</strong>{" "}: Obligatoire pour tous les nageurs. Il est offert
              aux couleurs de l&apos;association KABSA dès votre inscription.
            </li>
            <li>
              <strong>Maillot de bain</strong>{" "}: Slip de bain ou boxer de natation pour les
              hommes ; maillot une-pièce ou deux-pièces de sport pour les femmes (les shorts de
              plage, caleçons et tenues amples sont strictement interdits).
            </li>
            <li>
              <strong>Lunettes de natation</strong>{" "}: Fortement recommandées pour protéger vos
              yeux du chlore et améliorer votre confort visuel sous l&apos;eau.
            </li>
            <li>
              <strong>Accessoires utiles</strong>{" "}: Une serviette microfibre, des sandales de
              piscine propres et une gourde d&apos;eau pour bien vous hydrater (le matériel
              pédagogique comme les planches, pull-buoys et frites est fourni par le club).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📍 Venir aux Bassins &amp; Infos Pratiques
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Arrivée recommandée</strong>{" "}: Merci de vous présenter 15 minutes avant le
              début de votre séance afin d&apos;avoir le temps de vous changer et d&apos;être prêt
              au bord du bassin à l&apos;heure précise.
            </li>
            <li>
              <strong>Accès et stationnement</strong>{" "}: transports en commun, parking et places
              PMR, arceaux à vélos (détails communiqués à l&apos;inscription).
            </li>
            <li>
              <strong>Documents requis pour l&apos;inscription</strong>{" "}: le formulaire
              d&apos;adhésion complété, le questionnaire de santé (ou un certificat médical de
              non-contre-indication, obligatoire pour la section Compétition &amp; Masters) et le
              règlement de la cotisation annuelle (paiement en plusieurs fois possible, tarifs
              réduits pour les étudiants et les familles).
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
          <h3 className="rf-blocktitle">🏛️ Nos Infrastructures</h3>
          <p className="lede">
            Pour vous offrir les meilleures conditions d&apos;apprentissage, de détente et de
            performance, l&apos;association KABSA déploie ses activités sur deux bassins
            complémentaires. Modernes, sécurisés et parfaitement entretenus, nos équipements
            répondent aux exigences de chaque niveau de pratique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏊‍♂️ Le Bassin Central : L&apos;Espace Apprentissage &amp; Loisir <em>(à confirmer)</em>
          </h3>
          <p className="lede">
            Véritable cocon dédié à la progression en douceur, le Bassin Central accueille nos
            sections Natation Féminine (lundis et jeudis) et Natation Masculine (mardis et
            vendredis) pour tous les niveaux.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Idéal pour débuter</strong>{" "}: Sa profondeur progressive permet aux adultes
              en situation d&apos;aquaphobie et aux débutants d&apos;avoir pied facilement et de
              gagner en confiance en toute sécurité.
            </li>
            <li>
              <strong>Confort thermique</strong>{" "}: Une eau chauffée à une température agréable
              (environ 28 °C - 29 °C), parfaite pour les séances d&apos;apprentissage, de
              perfectionnement technique et de natation bien-être.
            </li>
            <li>
              <strong>Lignes d&apos;eau dédiées</strong>{" "}: L&apos;espace est divisé en couloirs
              distincts selon les groupes de niveau (Débutants, Intermédiaires, Loisir) afin que
              chacun évolue à son propre rythme sans gêne.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Le Bassin Olympique : L&apos;Espace Performance &amp; Compétition <em>(à
            confirmer)</em>
          </h3>
          <p className="lede">
            Le samedi matin, nos nageurs et nageuses de la section mixte Compétition &amp; Masters
            prennent possession du Bassin Olympique pour des entraînements de haute intensité.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Dimensions officielles</strong>{" "}: Un bassin de 50 mètres (ou 25 mètres
              selon configuration) offrant de longues distances de nage, idéales pour travailler
              l&apos;endurance, la glisse et le rythme de course.
            </li>
            <li>
              <strong>Équipements de pointe</strong>{" "}: Plots de départ homologués, drapeaux de
              virage pour le dos crawlé et chronomètres muraux pour mesurer vos temps avec
              précision.
            </li>
            <li>
              <strong>Cadre stimulant</strong>{" "}: Une configuration pensée pour préparer
              efficacement les compétitions interclubs et régionales dans une ambiance dynamique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚿 Vestiaires, Hygiène et Sécurité</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Vestiaires adaptés</strong>{" "}: Des espaces propres, spacieux et sécurisés
              (casiers à code ou à cadenas) garantissant le confort et l&apos;intimité des sections
              féminine et masculine.
            </li>
            <li>
              <strong>Matériel pédagogique fourni</strong>{" "}: Planches, pull-buoys, frites en
              mousse, ceintures de flottaison et palmes sont mis gratuitement à votre disposition
              par l&apos;association lors des séances.
            </li>
            <li>
              <strong>Surveillance permanente</strong>{" "}: En plus de nos coachs certifiés
              présents au bord de l&apos;eau, tous les créneaux bénéficient de la surveillance
              réglementaire de maîtres-nageurs sauveteurs diplômés.
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
          <h3 className="rf-blocktitle">🏊‍♀️ Nos Types d&apos;Entraînement</h3>
          <p className="lede">
            Chez KABSA, chaque séance est pensée et structurée par nos coachs certifiés pour
            répondre à vos objectifs personnels. Que vous veniez pour vaincre votre appréhension de
            l&apos;eau, entretenir votre forme ou repousser vos limites chronométriques, nos
            méthodes pédagogiques s&apos;adaptent à votre évolution.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌊 1. L&apos;Approche Douce &amp; Apprivoisement (Aquaphobie &amp; Débutants)
          </h3>
          <p className="lede">
            Cet entraînement repose sur la confiance, l&apos;écoute et la progressivité, sans aucune
            pression de résultat.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Gestion de la respiration</strong>{" "}: Apprendre à souffler sous l&apos;eau
              et à coordonner sa respiration pour éliminer tout stress.
            </li>
            <li>
              <strong>Équilibre et flottaison</strong>{" "}: Découvrir la portance de l&apos;eau sur
              le ventre et sur le dos pour se sentir en sécurité.
            </li>
            <li>
              <strong>Premiers déplacements</strong>{" "}: Acquérir les bases de la propulsion
              (battements de jambes, mouvements de bras simples) avec l&apos;aide de matériel adapté
              (frites, planches) et la présence rassurante du coach.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 2. L&apos;Entraînement Technique &amp; Éducatif (Intermédiaire)
          </h3>
          <p className="lede">
            Destinées aux nageurs déjà autonomes, ces séances visent à rendre la nage plus fluide,
            plus économique et plus esthétique.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Maîtrise des 4 nages</strong>{" "}: Découverte et perfectionnement du Crawl,
              du Dos crawlé, de la Brasse et initiation au Papillon.
            </li>
            <li>
              <strong>Exercices éducatifs ciblés</strong>{" "}: Utilisation d&apos;accessoires
              (pull-buoy, plaquettes, palmes) pour isoler un mouvement, corriger la posture et
              améliorer l&apos;amplitude des bras.
            </li>
            <li>
              <strong>Coordination et glisse</strong>{" "}: Travail sur l&apos;alignement du corps
              dans l&apos;eau pour réduire les résistances et nager plus longtemps sans
              s&apos;essouffler.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💙 3. L&apos;Entraînement Cardio &amp; Bien-Être (Natation Loisir)
          </h3>
          <p className="lede">
            Une formule complète pour entretenir sa condition physique générale dans une ambiance
            conviviale et détendue.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Endurance fondamentale</strong>{" "}: Séries de nage continue ou fractionnée
              douce pour renforcer le système cardio-respiratoire.
            </li>
            <li>
              <strong>Renforcement musculaire global</strong>{" "}: Sollicitation harmonieuse de
              l&apos;ensemble du corps (dos, épaules, sangle abdominale, jambes) sans impact sur les
              articulations.
            </li>
            <li>
              <strong>Détente et évacuation du stress</strong>{" "}: Un rythme adapté à votre forme
              du jour pour relâcher les tensions et profiter des bienfaits apaisants de l&apos;eau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚡ 4. La Préparation Physique &amp; Performance (Compétition &amp; Masters)
          </h3>
          <p className="lede">
            Des séances dynamiques et exigeantes au Bassin Olympique, pensées pour les amateurs de
            défis sportifs.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Travail de vitesse et de seuil</strong>{" "}: Séries chronométrées, fractionné
              haute intensité (VMA aquatique) et gestion de l&apos;allure de course.
            </li>
            <li>
              <strong>Perfectionnement des détails</strong>{" "}: Optimisation des départs plongés,
              des coulées sous-marines et des virages culbutes.
            </li>
            <li>
              <strong>Planification saisonnière</strong>{" "}: Cycles d&apos;entraînement structurés
              (foncier, vitesse, affûtage) en vue des compétitions interclubs et régionales.
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
        <h2>Natation</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
