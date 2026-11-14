"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function CoachingNutritionnelPage() {
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
          <h3 className="rf-blocktitle">🥗 Coaching Nutritionnel chez KABSA</h3>
          <p className="svc-chapo">
            Un accompagnement alimentaire au service de la santé et de la performance, sans régime
            restrictif ni frustration.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Les 4 Objectifs de Notre Accompagnement Nutritionnel
          </h3>
          <p className="lede">
            Parce que chaque athlète possède un métabolisme, un rythme de vie et des dépenses
            énergétiques propres, notre approche repose sur quatre axes concrets :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Soutenir l&apos;énergie pendant l&apos;effort</strong>{" "}: Apprendre à
              composer ses repas avant l&apos;entraînement ou le match pour maintenir un niveau
              d&apos;énergie constant sans inconfort digestif.
            </li>
            <li>
              <strong>Accélérer la récupération musculaire</strong>{" "}: Optimiser la recharge
              énergétique et la réparation des fibres musculaires après les séances intenses (PPG,
              VMA, matchs de 40 minutes).
            </li>
            <li>
              <strong>Maîtriser l&apos;hydratation au quotidien</strong>{" "}: Comprendre
              l&apos;importance de l&apos;eau et des électrolytes avant, pendant et après
              l&apos;effort (y compris en milieu aquatique où la perte hydrique est souvent
              sous-estimée).
            </li>
            <li>
              <strong>Prévenir les blessures et la fatigue</strong>{" "}: Renforcer le système
              immunitaire, préserver la densité osseuse et éviter les coups de fatigue liés au
              surentraînement.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏅 Une Approche Adaptée à Chaque Profil et Discipline
          </h3>
          <p className="lede">
            Les besoins nutritionnels varient selon le type d&apos;effort, l&apos;âge et les
            spécificités physiologiques de chacun :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏀♿🏃‍♂️♿ Sports en Fauteuil (Basket Fauteuil &amp;
              Para-athlétisme)</strong>{" "}: Adaptation des apports énergétiques à la sollicitation
              intense du haut du corps, maintien d&apos;un poids de forme optimal pour faciliter la
              propulsion et vigilance particulière sur l&apos;hydratation et le confort digestif.
            </li>
            <li>
              <strong>🏃‍♀️🌲 Sports d&apos;Endurance (Demi-fond, Marathon, Trail)</strong>{" "}:
              Stratégies de recharge glucidique avant les épreuves longues, gestion du
              ravitaillement pendant l&apos;effort et prévention des troubles digestifs en course.
            </li>
            <li>
              <strong>⚽👶 Jeunes en Formation (École de Foot &amp; Éveil)</strong>{" "}:
              Sensibilisation ludique à l&apos;équilibre alimentaire, importance du petit-déjeuner
              et des collations saines les jours de tournois ou de plateaux.
            </li>
            <li>
              <strong>🏊♿ Natation Adaptée &amp; Bien-être</strong>{" "}: Accompagnement vers une
              alimentation santé, vitalité et récupération douce pour accompagner le renforcement
              musculaire et la dépense calorique liée à la thermorégulation dans l&apos;eau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Nos Actions Concrètes au Sein du Club
          </h3>
          <p className="lede">
            Pour rendre la nutrition accessible à tous, sans régime strict ni frustration, KABSA
            propose plusieurs formats d&apos;accompagnement :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bilans nutritionnels individuels</strong>{" "}: Un entretien personnalisé avec
              un professionnel de la nutrition du sport pour analyser vos habitudes, vos horaires
              d&apos;entraînement et définir des repères adaptés à vos objectifs.
            </li>
            <li>
              <strong>Ateliers collectifs et ludiques</strong>{" "}: Sessions thématiques organisées
              au Club-House « Espace KABSA » autour de sujets pratiques (créer sa boisson
              d&apos;effort maison, composer son assiette d&apos;après-match, lire les étiquettes
              alimentaires).
            </li>
            <li>
              <strong>Fiches pratiques &amp; Guides de compétition</strong>{" "}: Mise à disposition
              de repères simples pour gérer son alimentation les jours de match, de tournoi ou lors
              des déplacements en championnat.
            </li>
            <li>
              <strong>Sensibilisation des familles</strong>{" "}: Échanges dédiés aux parents de nos
              jeunes licenciés pour les aider à préparer des collations énergétiques et équilibrées
              avant les entraînements du mercredi et du samedi.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Une Synergie avec le Pôle Médical et Physique
          </h3>
          <p className="lede">
            Le coaching nutritionnel travaille en étroite collaboration avec nos éducateurs
            sportifs, nos préparateurs physiques et nos kinésithérapeutes. Cette approche globale
            garantit la cohérence entre votre charge d&apos;entraînement, votre récupération et vos
            apports nutritionnels tout au long de la saison.
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

  const deroulementContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🗓️ Déroulement de Votre Accompagnement Nutritionnel</h3>
          <p className="svc-chapo">
            Un suivi simple, progressif et sans régime restrictif pour intégrer les bons réflexes au
            quotidien.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, le coaching nutritionnel s&apos;adapte à votre rythme de vie, à
            vos contraintes professionnelles ou scolaires et à votre emploi du temps sportif. Notre
            objectif est de vous donner des repères concrets, faciles à appliquer chez vous comme en
            déplacement, tout au long de l&apos;année.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Les 4 Étapes de Votre Suivi Individuel
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💬 1. L&apos;Entretien Initial &amp; le Bilan des Habitudes (45 min)
          </h3>
          <p className="lede">
            Tout commence par un échange bienveillant au Club-House « Espace KABSA » ou en
            visioconférence :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Analyse de votre profil</strong>{" "}: Prise en compte de votre discipline, de
              votre volume d&apos;entraînement hebdomadaire, de vos objectifs (santé, reprise,
              endurance, compétition) et de vos éventuelles spécificités physiologiques ou
              médicales.
            </li>
            <li>
              <strong>État des lieux alimentaire</strong>{" "}: Évaluation de vos habitudes
              actuelles, de vos horaires de repas, de vos préférences culinaires et de votre
              hydratation quotidienne, sans jugement ni culpabilité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🥗 2. La Définition de Repères Personnalisés
          </h3>
          <p className="lede">
            À l&apos;issue du bilan, notre spécialiste en nutrition du sport élabore avec vous une
            feuille de route claire :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Structuration des repas</strong>{" "}: Conseils pratiques pour équilibrer
              votre assiette avant et après vos entraînements (gestion des glucides, protéines, bons
              lipides et micronutriments).
            </li>
            <li>
              <strong>Plan d&apos;hydratation sur-mesure</strong>{" "}: Repères précis sur les
              quantités d&apos;eau à consommer avant, pendant et après l&apos;effort, adaptés à
              votre discipline (en salle, sur piste ou en bassin chauffé).
            </li>
            <li>
              <strong>Idées de collations saines</strong>{" "}: Propositions simples et économiques
              à glisser dans votre sac de sport pour les entraînements en soirée ou le mercredi
              après-midi.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 3. La Stratégie Jours de Match &amp; Compétition
          </h3>
          <p className="lede">
            Pour les athlètes engagés en championnat, tournoi ou course sur route, un accompagnement
            spécifique est mis en place avant les échéances :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Préparation J-3 à Jour J</strong>{" "}: Protocole d&apos;alimentation
              pré-compétitive pour maximiser vos réserves d&apos;énergie tout en garantissant un
              confort digestif optimal.
            </li>
            <li>
              <strong>Gestion des déplacements</strong>{" "}: Astuces pour composer ses repas à
              l&apos;extérieur et gérer les ravitaillements entre plusieurs matchs dans la même
              journée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔄 4. Les Points d&apos;Étape &amp; l&apos;Ajustement Saisonnier (20 à 30 min)
          </h3>
          <p className="lede">
            Parce que vos besoins évoluent au fil de la saison, des rendez-vous de suivi permettent
            d&apos;ajuster vos habitudes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bilan de sensations</strong>{" "}: Évaluation de votre niveau d&apos;énergie,
              de la qualité de votre sommeil et de votre récupération musculaire.
            </li>
            <li>
              <strong>Adaptation continue</strong>{" "}: Ajustement des apports lors des périodes de
              préparation physique intense, d&apos;affûtage ou de récupération en fin de saison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Les Ateliers Collectifs au Club-House
          </h3>
          <p className="lede">
            En complément du suivi individuel, KABSA organise régulièrement des temps d&apos;échange
            ouverts à tous les adhérents et aux familles :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ateliers Pratiques (1h00)</strong>{" "}: Préparation de collations
              énergétiques maison, réalisation de boissons d&apos;effort naturelles et décryptage
              des étiquettes alimentaires.
            </li>
            <li>
              <strong>Rencontres Parents-Jeunes</strong>{" "}: Sessions conviviales dédiées aux
              familles de l&apos;École de Foot, de la Natation Adaptée et des sections jeunes pour
              faciliter l&apos;organisation des repas les jours d&apos;entraînement.
            </li>
            <li>
              <strong>Causeries Sport-Santé</strong>{" "}: Échanges autour de la récupération, de
              l&apos;hydratation et de la prévention de la fatigue avec le pôle médico-sportif du
              club.
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
        <h2>Coaching nutritionnel</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
