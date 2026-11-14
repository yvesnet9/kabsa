"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function ArtsMartiauxPage() {
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
        <p>Découvrez la section Arts martiaux de KABSA.</p>
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
        <h3>Combats &amp; compétitions</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Combattants KABSA</h3>
        <p>Parcours des meilleurs combattants et combattantes.</p>
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
          <h3 className="rf-blocktitle">🥋 Arts Martiaux &amp; Sports de Combat</h3>
          <p className="lede">
            Bienvenue dans la section dédiée aux arts martiaux et sports de combat de
            l&apos;association KABSA. Nous proposons des disciplines adaptées à tous les niveaux,
            des débutants aux pratiquants confirmés, avec une approche inclusive et paritaire
            (sections masculines et féminines). Que votre objectif soit de vous remettre en forme,
            d&apos;apprendre à vous défendre, de canaliser votre énergie ou de progresser vers la
            compétition, nos entraîneurs certifiés vous accompagnent dans une ambiance respectueuse
            et sécurisée.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📋 Nos Disciplines</h3>
          <h4 className="rf-blocktitle">🥊 Boxe Pieds-Poings &amp; Kickboxing</h4>
          <p className="lede">
            Mélange parfait de techniques de frappe et de conditionnement physique intensif.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bénéfices</strong>{" "}: Cardio, endurance, renforcement musculaire et gestion du
              stress.
            </li>
            <li>
              <strong>Public</strong>{" "}: Ados et adultes (sections mixtes ou 100% féminines
              disponibles).
            </li>
          </ul>
          <h4 className="rf-blocktitle">🥋 Arts Martiaux Traditionnels (Karaté / Judo)</h4>
          <p className="lede">
            Apprentissage des techniques fondamentales, des katas/formes et du self-defense.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bénéfices</strong>{" "}: Discipline, souplesse, confiance en soi et respect des
              valeurs traditionnelles.
            </li>
            <li><strong>Public</strong>{" "}: Enfants, ados et adultes.</li>
          </ul>
          <h4 className="rf-blocktitle">🛡️ Self-Defense / Krav Maga</h4>
          <p className="lede">
            Techniques simples et réalistes pour apprendre à faire face aux situations
            d&apos;agression du quotidien.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bénéfices</strong>{" "}: Réflexes, vigilance, gestion de la peur et confiance en
              soi.
            </li>
            <li>
              <strong>Focus Féminin</strong>{" "}: Ateliers spécifiques de self-defense féminine centrés
              sur les situations concrètes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚖️ Une Pratique pour Tous : Masculin &amp; Féminin
          </h3>
          <p className="lede">
            Chez KABSA, nous croyons que les sports de combat sont un formidable vecteur
            d&apos;égalité et de dépassement de soi. <em>Note : tous nos cours partagent le même
            niveau d&apos;exigence technique et le même respect des règles de sécurité, peu importe
            le genre.</em>
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
          <h3 className="rf-blocktitle">🗓️ Informations Pratiques &amp; Horaires</h3>
          <p className="lede">
            <em>Équipement requis :</em>{" "}tenue de sport confortable (ou kimono selon la discipline),
            protections (gants, protège-dents, protège-tibias) et bouteille d&apos;eau.
          </p>
          <p className="lede">
            <em>Séance d&apos;essai :</em>{" "}la première séance de découverte est gratuite !
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🕒 Planning des entraînements <em>(à confirmer)</em>
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Lundi &amp; Jeudi (19h30 - 21h00)</strong>{" "}: Kickboxing &amp; Boxe (sections
              Hommes / sections Femmes)
            </li>
            <li>
              <strong>Mercredi (18h00 - 19h30)</strong>{" "}: Arts Martiaux Traditionnels (mixte)
            </li>
            <li>
              <strong>Samedi (10h30 - 12h00)</strong>{" "}: Self-Defense &amp; Krav Maga (cours dédiés
              et mixtes)
            </li>
          </ul>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Rejoignez-nous !</h3>
          <p className="lede">
            Prêt(e) à monter sur le tatami ou sur le ring ? Contactez-nous dès aujourd&apos;hui pour
            réserver votre cours d&apos;essai gratuit.
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
            🤝 Accessibilité &amp; Pratique : Une Approche Inclusive pour Tous
          </h3>
          <p className="lede">
            Chez KABSA, nous sommes convaincus que les arts martiaux et les sports de combat sont
            ouverts à toutes et à tous, sans aucune barrière d&apos;âge, de genre ou de condition
            physique. Notre mission est de vous offrir un cadre bienveillant, sécurisé et adapté à
            vos besoins spécifiques.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Accessibilité : Le Sport Sans Barrières
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tous Niveaux Bienvenus</strong>{" "}: Que vous n&apos;ayez jamais mis les
              pieds sur un tatami ou que vous soyez un compétiteur aguerri, nos cours
              s&apos;adaptent à votre rythme et à votre progression.
            </li>
            <li>
              <strong>Parité &amp; Mixité Choisie</strong>{" "}: Nous proposons des créneaux mixtes
              pour favoriser la cohésion, ainsi que des sessions 100 % féminines pour celles qui
              souhaitent pratiquer dans un environnement dédié et rassurant.
            </li>
            <li>
              <strong>Toutes Générations</strong>{" "}: Nos disciplines sont structurées par
              tranches d&apos;âge (enfants, adolescents, adultes) afin de garantir un apprentissage
              ludique, pédagogique et sécuritaire pour chacun.
            </li>
            <li>
              <strong>Adaptation &amp; Inclusion</strong>{" "}: Nos entraîneurs certifiés sont à
              l&apos;écoute de vos éventuelles contraintes physiques ou appréhensions pour ajuster
              les exercices en toute sécurité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛡️ Notre Charte Sécurité &amp; Respect</h3>
          <p className="lede">
            La pratique d&apos;un sport de combat repose avant tout sur la confiance mutuelle et la
            maîtrise de soi.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Encadrement Certifié</strong>{" "}: Tous nos cours sont dirigés par des
              éducateurs sportifs diplômés qui veillent au strict respect des règles de sécurité.
            </li>
            <li>
              <strong>Zéro Tolérance</strong>{" "}: L&apos;ego reste au vestiaire. Le respect du
              partenaire, des grades et des consignes est la règle d&apos;or sur le tatami comme sur
              le ring.
            </li>
            <li>
              <strong>Progression Maîtrisée</strong>{" "}: Les exercices avec opposition (sparring)
              sont toujours encadrés, progressifs et adaptés au niveau de chaque pratiquant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📍 Lieu de Pratique &amp; Accès</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Adresse du Dojo / Salle</strong>{" "}: communiquée à l&apos;inscription.
            </li>
            <li>
              <strong>Transports en commun</strong>{" "}: lignes et arrêt communiqués au
              secrétariat.
            </li>
            <li>
              <strong>Stationnement</strong>{" "}: parking et arceaux à vélos (détails communiqués à
              l&apos;inscription).
            </li>
            <li>
              <strong>Accessibilité PMR</strong>{" "}: locaux et vestiaires adaptés (à confirmer
              selon la salle).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Passez à l&apos;Action !</h3>
          <p className="lede">
            Vous hésitez encore sur la discipline qui vous correspond le mieux ? Venez tester
            l&apos;ambiance de nos cours gratuitement et rencontrer notre équipe.
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
          <h3 className="rf-blocktitle">🏛️ Nos Infrastructures : Un Cadre Moderne et Sécurisé</h3>
          <p className="lede">
            Pour vous offrir les meilleures conditions d&apos;apprentissage et de progression,
            l&apos;association KABSA met à votre disposition des installations sportives spacieuses,
            entretenues avec soin et parfaitement adaptées aux exigences des arts martiaux et des
            sports de combat.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🥋 Des Espaces d&apos;Entraînement Dédiés
          </h3>
          <p className="lede">
            Nos locaux sont organisés en plusieurs zones distinctes afin de permettre une pratique
            fluide et sécurisée de toutes nos disciplines :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Dojo Principal (Espace Tatami)</strong>{" "}: Une grande surface recouverte
              de tatamis haute densité aux normes fédérales, idéale pour les arts martiaux
              traditionnels (Karaté, Judo), le travail au sol et les ateliers de self-defense.
            </li>
            <li>
              <strong>La Zone Ring &amp; Sacs de Frappe</strong>{" "}: Un espace dédié aux sports de
              percussion (Boxe Pieds-Poings, Kickboxing) équipé de sacs de frappe lourds, de pattes
              d&apos;ours, de boucliers Pao et d&apos;un espace de sparring sécurisé.
            </li>
            <li>
              <strong>L&apos;Espace Préparation Physique</strong>{" "}: Une zone équipée de petit
              matériel fonctionnel (cordes à sauter, kettlebells, tapis de sol, plots) pour le
              renforcement musculaire et le cardio.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛡️ Sécurité &amp; Entretien des Locaux</h3>
          <p className="lede">
            La sécurité physique de nos pratiquants est au cœur de nos priorités :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Hygiène Stricte</strong>{" "}: Les tatamis et les équipements communs sont
              nettoyés et désinfectés après chaque session d&apos;entraînement.
            </li>
            <li>
              <strong>Ventilation &amp; Éclairage</strong>{" "}: La salle bénéficie d&apos;un
              système de ventilation performant et d&apos;un éclairage optimal pour un confort de
              pratique tout au long de l&apos;année.
            </li>
            <li>
              <strong>Équipements de Premiers Secours</strong>{" "}: Le club dispose d&apos;une
              trousse de secours complète et d&apos;un défibrillateur (DAE) accessibles
              immédiatement, manipulés par nos entraîneurs formés aux gestes qui sauvent.
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
            ⚡ Nos Types d&apos;Entraînement : Une Pédagogie Adaptée à Vos Objectifs
          </h3>
          <p className="lede">
            Chez KABSA, nous savons que chaque pratiquant franchit les portes du dojo avec une
            motivation unique. Que vous cherchiez à vous défouler après le travail, à maîtriser
            l&apos;art du combat ou à gagner en confiance, nos séances sont structurées pour vous
            faire progresser à votre rythme.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 4 Formats d&apos;Entraînement pour Répondre à Vos Besoins
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>1. Entraînement Loisir &amp; Remise en Forme (Cardio-Combat)</strong>{" "}:
              Idéal pour évacuer le stress, brûler des calories et tonifier l&apos;ensemble du corps
              sans recherche d&apos;opposition dure. Le travail se concentre sur les enchaînements
              dans le vide (shadow-boxing), sur sacs de frappe et sur pattes d&apos;ours.
            </li>
            <li>
              <strong>2. Entraînement Technique &amp; Traditionnel</strong>{" "}: Axé sur la
              précision du geste, la posture, l&apos;équilibre et l&apos;apprentissage des
              fondamentaux (katas, clés, projections, esquives). Ce format développe la
              coordination, la souplesse et la rigueur mentale.
            </li>
            <li>
              <strong>3. Atelier Self-Defense &amp; Mises en Situation</strong>{" "}: Des exercices
              pratiques et réalistes pour apprendre à réagir face à une agression du quotidien.
              L&apos;accent est mis sur la gestion du stress, les réflexes de protection et la
              sortie de situations critiques, avec des sessions dédiées au public féminin.
            </li>
            <li>
              <strong>4. Préparation Compétition &amp; Sparring Encadré</strong>{" "}: Destiné aux
              pratiquants confirmés souhaitant tester leurs acquis en conditions réelles. Les
              assauts (sparring) sont toujours supervisés par nos coachs, avec un port obligatoire
              de toutes les protections et un respect absolu de l&apos;intégrité physique du
              partenaire.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚖️ Une Approche Sur-Mesure : Mixte ou Non-Mixte
          </h3>
          <p className="lede">
            Parce que le confort psychologique est essentiel à la progression, vous choisissez le
            cadre qui vous correspond le mieux :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Séances Mixtes</strong>{" "}: Elles favorisent l&apos;entraide, la
              diversité des gabarits et une émulation collective positive dans le respect mutuel.
            </li>
            <li>
              <strong>Les Séances 100 % Féminines</strong>{" "}: Elles offrent un espace
              bienveillant entre femmes, axé sur la tonification, le dépassement de soi et la
              confiance, tout en conservant exactement la même exigence technique.
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
        <h2>Arts martiaux &amp; sports de combat</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
