"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function AssuranceActivitesPage() {
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
          <h3 className="rf-blocktitle">🛡️📋 Assurance pendant les Activités chez KABSA</h3>
          <p className="svc-chapo">
            Pratiquer votre sport en toute sérénité grâce à une couverture complète et des
            protocoles de sécurité rigoureux.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, la sécurité physique et juridique de nos adhérents, bénévoles
            et encadrants est une priorité absolue. Que vous veniez pour une séance d&apos;essai
            gratuite, un entraînement hebdomadaire en loisir ou un déplacement en compétition
            officielle, vous bénéficiez d&apos;une protection adaptée à la pratique du sport valide,
            handisport et sport adapté.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✅ Une Couverture Incluse dans Votre Licence
          </h3>
          <p className="lede">
            Dès la validation de votre dossier d&apos;inscription auprès du secrétariat de KABSA,
            votre cotisation inclut automatiquement les garanties indispensables :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Responsabilité Civile (RC)</strong>{" "}: Couvre les dommages matériels ou
              corporels qui pourraient être causés involontairement à un tiers (autre joueur,
              arbitre, spectateur ou infrastructure) durant les entraînements, les matchs ou les
              événements du club.
            </li>
            <li>
              <strong>Garantie Individuelle Accident</strong>{" "}: Assure la prise en charge des
              frais médicaux (en complément de la Sécurité Sociale et de votre mutuelle),
              d&apos;hospitalisation ou d&apos;invalidité en cas de blessure survenant lors
              d&apos;une activité encadrée par l&apos;association.
            </li>
            <li>
              <strong>Assistance et Rapatriement</strong>{" "}: Accompagnement lors des déplacements
              officiels pour les tournois, championnats régionaux ou nationaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌱 Et Pendant les Séances d&apos;Essai Gratuites ?
          </h3>
          <p className="lede">
            Vous souhaitez tester le basket fauteuil, l&apos;athlétisme, la natation adaptée ou le
            football avant de vous inscrire définitivement ?
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accueil sécurisé</strong>{" "}: Vos premières séances de découverte
              (jusqu&apos;à deux séances d&apos;essai selon la discipline) sont couvertes par le
              contrat d&apos;assurance responsabilité civile et découverte de l&apos;association
              KABSA, sous réserve d&apos;avoir complété la fiche de renseignement d&apos;essai avant
              d&apos;entrer sur le terrain ou dans le bassin.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ♿ Protection du Matériel Prêté &amp; Spécificités Handisport
          </h3>
          <p className="lede">
            La pratique du handisport et du sport adapté repose sur des équipements techniques de
            haute précision :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Matériel mis à disposition par KABSA</strong>{" "}: Les fauteuils roulants de
              sport, lames d&apos;initiation, Frame Runners, sièges de lancer et dispositifs de mise
              à l&apos;eau prêtés durant les séances sont couverts dans le cadre d&apos;une
              utilisation normale et encadrée au sein de nos installations.
            </li>
            <li>
              <strong>Équipement personnel de l&apos;athlète</strong>{" "}: Pour les sportifs
              utilisant leur propre fauteuil de compétition ou leurs prothèses personnelles,
              l&apos;assurance du club couvre les dommages accidentels liés aux faits de jeu en
              compétition officielle (selon les plafonds fédéraux). Nous recommandons toutefois de
              vérifier les options spécifiques auprès de votre assureur personnel pour les
              équipements de très haute valeur.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Les Conditions Indispensables pour Être Bien Couvert
          </h3>
          <p className="lede">
            Pour que les garanties d&apos;assurance s&apos;appliquent pleinement sans restriction,
            chaque licencié s&apos;engage à respecter trois règles simples :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>1. Dossier médical à jour</strong>{" "}: Fournir un certificat médical de
              non-contre-indication à la pratique de la discipline choisie (en loisir ou en
              compétition) ou valider le questionnaire de santé réglementaire lors du
              renouvellement.
            </li>
            <li>
              <strong>2. Port des équipements de sécurité obligatoires</strong>{" "}: Respecter les
              consignes propres à chaque sport (protège-tibias en football, attache des sangles de
              maintien en basket fauteuil et para-athlétisme, bonnet de bain en natation).
            </li>
            <li>
              <strong>3. Respect du cadre et des consignes</strong>{" "}: Pratiquer exclusivement
              sous la supervision des éducateurs diplômés du club et respecter le règlement
              intérieur des installations sportives.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🩺 Que Faire en Cas d&apos;Accident ou de Blessure ?
          </h3>
          <p className="lede">
            En cas d&apos;incident survenant pendant un entraînement ou un match chez KABSA, une
            procédure rapide est mise en place par notre équipe :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Premiers secours immédiats</strong>{" "}: Nos éducateurs diplômés et
              l&apos;espace médical du complexe interviennent immédiatement pour sécuriser le
              sportif et prodiguer les premiers soins.
            </li>
            <li>
              <strong>Déclaration sous 5 jours</strong>{" "}: Le responsable de section et le
              secrétariat du club établissent avec vous la déclaration d&apos;accident auprès de
              l&apos;assureur fédéral dans un délai maximum de 5 jours ouvrés.
            </li>
            <li>
              <strong>Suivi et reprise</strong>{" "}: Notre pôle médico-sportif et nos
              kinésithérapeutes vous accompagnent ensuite dans votre rééducation jusqu&apos;à votre
              retour sur le terrain.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Nous contacter
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
          <h3 className="rf-blocktitle">
            📋 Déroulement : Activation de Votre Couverture &amp; Gestion d&apos;un Incident
          </h3>
          <p className="svc-chapo">
            Des démarches simples, transparentes et accompagnées à chaque étape pour garantir votre
            protection.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, tout est mis en œuvre pour que les formalités d&apos;assurance
            soient fluides et rassurantes. Que vous veniez pour une séance d&apos;essai, une
            inscription annuelle ou que vous deviez déclarer un incident sportif, notre secrétariat
            et nos encadrants vous guident pas à pas.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✅ 1. L&apos;Activation de Votre Assurance
          </h3>
          <p className="lede">
            Votre protection se met en place progressivement selon votre parcours au sein de
            l&apos;association :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌱 Étape 1 – Avant la Séance d&apos;Essai (Couverture Découverte)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accueil au secrétariat ou au bord du terrain</strong>{" "}: Avant de débuter
              votre première séance gratuite (fauteuil, piste, terrain ou bassin), vous complétez
              une courte fiche de renseignement découverte.
            </li>
            <li>
              <strong>Activation immédiate</strong>{" "}: Ce document active automatiquement la
              garantie Responsabilité Civile et Découverte du club pour vos séances d&apos;essai,
              ainsi que la couverture du matériel prêté par KABSA.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📝 Étape 2 – Lors de Votre Inscription Définitive (Licence Fédérale)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Dépôt du dossier complet</strong>{" "}: Vous remettez votre formulaire
              d&apos;inscription, votre certificat médical de non-contre-indication (ou
              questionnaire de santé) et le règlement de votre cotisation lors des permanences ou en
              ligne.
            </li>
            <li>
              <strong>Validation et attestation</strong>{" "}: Dès l&apos;enregistrement de votre
              licence auprès de la fédération concernée (Handisport, Sport Adapté ou fédération
              délégataire), vous recevez votre attestation d&apos;assurance nominative couvrant
              l&apos;ensemble de la saison (entraînements, matchs, tournois et déplacements).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛡️ Étape 3 – Options Complémentaires (Sur Demande)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Garanties renforcées</strong>{" "}: Si vous le souhaitez, le secrétariat vous
              présente les garanties individuelles complémentaires proposées par l&apos;assureur
              fédéral (indemnités journalières en cas d&apos;arrêt de travail, couverture renforcée
              pour les fauteuils de compétition ou prothèses personnelles de haute valeur).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚑 2. En Cas d&apos;Accident ou de Blessure
          </h3>
          <p className="lede">
            Si un incident survient pendant une activité encadrée par KABSA, notre équipe applique
            un protocole clair et réactif :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🩺 Étape 1 – Prise en Charge Immédiate sur Site (Jour J)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Secours et mise en sécurité</strong>{" "}: L&apos;éducateur diplômé interrompt
              l&apos;action, sécurise le sportif et prodigue les premiers gestes de secours.
              L&apos;espace médical du complexe est mobilisé si nécessaire, ou les services
              d&apos;urgence sont contactés sans délai.
            </li>
            <li>
              <strong>Constat sur place</strong>{" "}: Le responsable de séance note les
              circonstances précises de l&apos;incident (date, heure, lieu, témoins éventuels) dans
              le registre de sécurité du club.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏥 Étape 2 – Constatation Médicale (Sous 24h à 48h)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Certificat médical initial</strong>{" "}: Consultez un médecin dès que
              possible afin de faire établir un certificat médical décrivant la nature exacte des
              blessures. Ce document est indispensable pour ouvrir le dossier auprès de
              l&apos;assurance.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📄 Étape 3 – Déclaration Officielle d&apos;Accident (Sous 5 Jours Ouvrés)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accompagnement par le secrétariat</strong>{" "}: Contactez le secrétariat de
              KABSA ou le responsable de votre section dans les 5 jours ouvrés suivant
              l&apos;accident.
            </li>
            <li>
              <strong>Envoi du dossier</strong>{" "}: Notre équipe complète avec vous le formulaire
              de déclaration d&apos;accident, y joint le certificat médical initial et transmet
              l&apos;ensemble directement à l&apos;assureur fédéral. Vous recevez un numéro de
              dossier pour suivre vos remboursements.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔄 Étape 4 – Suivi Médical &amp; Retour sur le Terrain
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Rééducation et reprise adaptée</strong>{" "}: En lien avec nos
              kinésithérapeutes et nos éducateurs, votre reprise sportive s&apos;effectue de manière
              progressive (séances de natation bien-être, préparation physique adaptée) jusqu&apos;à
              votre complet rétablissement.
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
        <h2>Assurance pendant les activités</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
