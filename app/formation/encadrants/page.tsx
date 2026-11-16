"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function FormationEncadrantsPage() {
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
        <VideoSlot
          youtubeId="YfS2E0MpJmY"
          title="Encadrer et fédérer une équipe"
          vertical
        />
      </div>
      <div className="info-card">
        <h3>Démonstration</h3>
        <p>Démonstration en conditions réelles.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Séance type</h3>
        <p>Déroulé d&apos;une séance type.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Témoignages</h3>
        <p>Retours de pratiquants.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts en images.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir.</p>
        <VideoSlot />
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🎓 Formation des encadrants : préparer les entraîneurs et animateurs à l&apos;inclusion par le sport ♿🏅
          </h3>

          <p className="svc-chapo">
            Transmettre les compétences techniques et humaines pour un encadrement adapté aux sportifs valides et handisport 🌟
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus qu&apos;une véritable inclusion sportive repose avant tout sur la qualité des personnes qui accompagnent les athlètes au quotidien. Pour briser les barrières entre le sport valide et le handisport, il est essentiel de former des entraîneurs, animateurs et éducateurs capables de s&apos;adapter à chaque profil, du sport-santé jusqu&apos;au haut niveau.
          </p>

          <p className="lede">
            En lien avec l&apos;écosystème sportif belge et les fédérations de référence, KABSA souhaite développer un pôle de formation dédié à la transmission des savoirs, des stratégies d&apos;entraînement et des bonnes pratiques inclusives à Bruxelles 📍.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📚 Nos axes de formation : du terrain à la haute performance
          </h3>

          <p className="lede">
            Nos modules s&apos;adressent aux coachs sportifs, animateurs de clubs, étudiants en éducation physique et bénévoles :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🤝 Pédagogie inclusive et mixité</strong>{" "}: Concevoir et animer des séances où sportifs valides et en situation de handicap évoluent ensemble.
            </li>
            <li>
              <strong>🧠 Stratégies et techniques d&apos;entraînement handisport</strong>{" "}: Maîtriser les spécificités des disciplines phares (basket-fauteuil 🏀, cécifoot ⚽, para-athlétisme 🏃‍♂️) pour détecter et développer les talents de 15 à 25 ans.
            </li>
            <li>
              <strong>🦽 Maîtrise du matériel adapté et sécurité</strong>{" "}: Régler, entretenir et utiliser les équipements spécialisés (fauteuils de sport, ballons sonores, outils de préparation physique) pour une pratique sécurisée.
            </li>
            <li>
              <strong>🩺 Approche sport-santé, prévention et récupération</strong>{" "}: Intégrer les bases de la préparation physique adaptée, de la prévention des blessures et de la récupération (en lien avec nos kinésithérapeutes et nutritionnistes 🥗).
            </li>
            <li>
              <strong>💬 Accompagnement mental et lutte contre l&apos;isolement</strong>{" "}: Développer une posture bienveillante pour renforcer l&apos;autonomie, la confiance en soi et le bien-être psychologique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 À qui s&apos;adressent nos formations ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🏋️ Entraîneurs et préparateurs physiques</strong>{" "}: Spécialiser votre pratique et accompagner des athlètes vers les compétitions nationales et internationales 🌍.
            </li>
            <li>
              <strong>🏫 Animateurs, éducateurs et professeurs de sport</strong>{" "}: Rendre vos cours, stages et activités accessibles à tous les jeunes Bruxellois.
            </li>
            <li>
              <strong>🏢 Clubs sportifs et institutions</strong>{" "}: Former vos équipes encadrantes et ouvrir ou renforcer une section handisport.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Comment participer ou soutenir ce programme ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>1. Rejoignez nos prochaines sessions de formation 📋</strong>{" "}: Ateliers théoriques et pratiques animés par notre pôle sportif et nos experts.
            </li>
            <li>
              <strong>2. Clubs et écoles : demandez une formation sur mesure 🏫</strong>{" "}: Notre équipe pédagogique se déplace ou vous accueille dans nos infrastructures bruxelloises pour des modules adaptés.
            </li>
            <li>
              <strong>3. Soutenez la formation des encadrants (dons &amp; partenariats RSE) ❤️🏢</strong>{" "}: En finançant des bourses de formation, vous multipliez l&apos;impact social de KABSA.
            </li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Financer la formation d&apos;un encadrant
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⭐ Les atouts de l&apos;approche KABSA
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🛠️ Une pédagogie de terrain</strong>{" "}: Mises en situation réelles au cœur de nos entraînements et tournois inclusifs.
            </li>
            <li>
              <strong>🌐 Un réseau d&apos;experts</strong>{" "}: Échanges réguliers avec des professionnels de la santé (kinés, nutritionnistes) et les acteurs du handisport belge.
            </li>
            <li>
              <strong>🎥 Partage des savoirs</strong>{" "}: Capsules pédagogiques et retours d&apos;expérience diffusés sur notre chaîne KA TV Sport.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Modalités pratiques de nos formations
          </h3>

          <p className="lede">
            <em>⏱️ Durée et formats des modules :</em>
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Module Découverte &amp; Sensibilisation (1 journée – 7 h)</strong>{" "}: Pour animateurs, bénévoles et éducateurs souhaitant acquérir les bons réflexes d&apos;accueil d&apos;un public en situation de handicap physique.
            </li>
            <li>
              <strong>Parcours Encadrement Inclusif &amp; Handisport (1 week-end / 2 jours – 14 h)</strong>{" "}: Théorie, manipulation du matériel adapté et mise en situation sur le terrain.
            </li>
            <li>
              <strong>Spécialisation Performance &amp; Haut Niveau (3 à 5 jours + stage)</strong>{" "}: Stratégies tactiques, préparation physique et suivi d&apos;athlètes vers la compétition.
            </li>
            <li>
              <strong>Format sur mesure (clubs &amp; écoles)</strong>{" "}: Interventions modulables directement au sein de votre structure à Bruxelles.
            </li>
          </ul>

          <p className="lede">
            <em>🎯 Prérequis et profils acceptés :</em>
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Module Découverte</strong>{" "}: Aucun diplôme préalable. Une forte motivation pour l&apos;inclusion et le sport-santé suffit.
            </li>
            <li>
              <strong>Parcours Encadrement &amp; Spécialisation</strong>{" "}: Être titulaire d&apos;un brevet d&apos;animateur/éducateur sportif (ex. diplôme Adeps, bachelier en éducation physique) ou justifier d&apos;une expérience confirmée.
            </li>
            <li>
              <strong>Accessibilité</strong>{" "}: Toutes nos formations sont 100 % accessibles aux personnes en situation de handicap souhaitant devenir entraîneurs ou animateurs ♿.
            </li>
          </ul>

          <p className="lede">
            <em>🏅 Attestation et reconnaissance :</em>
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Attestation officielle KABSA</strong>{" "}: Délivrée à l&apos;issue de chaque parcours, validant les compétences en encadrement inclusif et utilisation de matériel handisport.
            </li>
            <li>
              <strong>Passerelles</strong>{" "}: Programmes alignés sur les standards du secteur en Belgique, facilitant la reconnaissance auprès des fédérations de référence.
            </li>
            <li>
              <strong>Suivi continu</strong>{" "}: Accès privilégié aux stages, conférences et ressources vidéo sur KA TV Sport 🎥.
            </li>
          </ul>

          <p className="lede">
            <em>📍 Lieu, tarifs et inscriptions :</em>
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>Lieu des sessions</strong>{" "}: Dans nos infrastructures partenaires accessibles à Bruxelles <em>(centres sportifs communaux à confirmer)</em> 🏟️.
            </li>
            <li>
              <strong>Tarifs solidaires</strong>{" "}: Grâce au soutien de nos partenaires (dispositifs publics et privés RSE), formations à tarifs très accessibles, avec possibilité de prise en charge totale (bourses) pour les jeunes éducateurs et bénévoles 🤝.
            </li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📝 Télécharger la brochure des formations
            </Link>
            <Link href="/contact" className="info-cta">
              📅 S&apos;inscrire à la prochaine session
            </Link>
          </div>
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
    { id: "deroulement", label: "Déroulement", content: comingSoonContent },
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
        <h2>Formation des encadrants</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
