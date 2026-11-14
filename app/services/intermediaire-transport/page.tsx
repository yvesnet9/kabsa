"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function IntermediaireTransportPage() {
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
        <img
          src="/services/transport/autocars.jpg"
          alt="Deux minibus blancs garés en lisière de forêt"
          style={{ marginTop: 10, width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 10 }}
        />
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
        <img
          src="/services/transport/avion.jpg"
          alt="Aile d'avion au-dessus des nuages"
          style={{ marginTop: 10, width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 10 }}
        />
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🚐♿ Intermédiaire de Transport Terrestre &amp; Aérien</h3>
          <p className="svc-chapo">
            Faciliter tous vos déplacements sportifs — du trajet quotidien jusqu&apos;aux
            compétitions nationales et internationales — en toute sécurité.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, la distance ou les contraintes de mobilité ne doivent jamais
            être un frein à la pratique sportive. Que ce soit pour rejoindre nos séances
            d&apos;entraînement hebdomadaires, partir en stage ou défendre les couleurs du club lors
            d&apos;un championnat à l&apos;étranger, notre service d&apos;intermédiaire de transport
            terrestre et aérien organise et sécurise chaque étape de vos voyages.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚐🚆 Le Transport Terrestre : Proximité, Souplesse &amp; Accessibilité
          </h3>
          <p className="lede">
            Pour les trajets du quotidien comme pour les déplacements régionaux et nationaux, KABSA
            coordonne des solutions terrestres adaptées à chaque profil :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Navettes &amp; Véhicules Adaptés (TPMR)</strong>{" "}: Mise en relation et
              réservation auprès de transporteurs spécialisés dotés de rampes d&apos;accès, de
              systèmes d&apos;arrimage homologués pour fauteuils roulants et d&apos;espaces larges
              pour le matériel.
            </li>
            <li>
              <strong>Liaisons Ferroviaires avec Assistance</strong>{" "}: Organisation des
              déplacements de groupes ou individuels en train, incluant la réservation anticipée des
              places PMR et la coordination des services d&apos;assistance en gare (embarquement et
              débarquement).
            </li>
            <li>
              <strong>Utilitaires &amp; Remorques Logistiques KABSA</strong>{" "}: Convoyage dédié
              des équipements volumineux (fauteuils de sport à roues carrossées, fauteuils
              d&apos;athlétisme à 3 roues, sièges de lancer, outillage mécanique) jusqu&apos;au pied
              des aires de compétition.
            </li>
            <li>
              <strong>Covoiturage Solidaire Inter-Membres</strong>{" "}: Réseau d&apos;entraide
              sécurisé entre adhérents, parents et bénévoles pour partager les trajets vers les
              entraînements, les sorties nature (trail, marche nordique) et les plateaux jeunes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✈️♿ Le Transport Aérien : Expertise Handisport &amp; Voyages d&apos;Équipes
          </h3>
          <p className="lede">
            Voyager en avion avec une équipe multidisciplinaire ou des équipements médicaux et
            sportifs exige une préparation rigoureuse. KABSA agit comme interface directe avec les
            compagnies aériennes et les aéroports :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Réservation et Coordination Groupée</strong>{" "}: Gestion des billets
              d&apos;avion pour les athlètes (valides, handisport, sport adapté), les guides
              (déficience visuelle) et le staff technique, avec placement adapté en cabine.
            </li>
            <li>
              <strong>Déclaration Technique des Fauteuils et Aides à la Mobilité</strong>{" "}:
              Transmission préalable aux compagnies aériennes des fiches techniques obligatoires
              (dimensions exactes, poids, type de batteries pour fauteuils électriques) afin
              d&apos;éviter tout blocage à l&apos;embarquement.
            </li>
            <li>
              <strong>Gestion des Bagages Hors Format &amp; Fragiles</strong>{" "}: Enregistrement
              et sécurisation en soute des équipements de haute précision (fauteuils de basket ou de
              course, lames en carbone, Frame Runners, housses de perches ou javelots).
            </li>
            <li>
              <strong>Assistance Aéroportuaire de Bout en Bout</strong>{" "}: Coordination des
              protocoles d&apos;accueil en aéroport (de l&apos;enregistrement jusqu&apos;à
              l&apos;installation à bord via fauteuil de transfert cabine) et vérification de la
              restitution intégrale du matériel à l&apos;arrivée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛡️ Sécurité, Assurance &amp; Solidarité Mobilité
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Continuité de la couverture</strong>{" "}: Tous les déplacements officiels
              coordonnés par l&apos;intermédiaire de KABSA bénéficient des garanties
              d&apos;assurance et d&apos;assistance rapatriement liées à votre licence sportive.
            </li>
            <li>
              <strong>Soutien du Fonds de Solidarité KABSA</strong>{" "}: En lien avec notre
              commission solidaire, une prise en charge partielle ou totale des frais de transport
              peut être accordée aux jeunes talents et aux équipes handisport pour garantir
              l&apos;égalité des chances en compétition.
            </li>
            <li>
              <strong>Synergie avec l&apos;Hébergement des Délégations</strong>{" "}: Coordination
              directe des transferts entre les gares, les aéroports, nos hébergements partenaires
              100 % accessibles et les sites sportifs.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Demander un devis / Nous contacter
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
            🗓️ Déroulement d&apos;un Déplacement Terrestre ou Aérien
          </h3>
          <p className="svc-chapo">
            Une organisation rigoureuse étape par étape pour voyager sereinement avec vos
            équipements sportifs.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, chaque déplacement est préparé avec méthode afin d&apos;éviter
            tout imprévu logistique, notamment lors du transport de fauteuils de sport, de lames en
            carbone ou d&apos;équipements collectifs. Notre référent mobilité coordonne vos trajets
            de porte à porte, du départ jusqu&apos;à l&apos;installation sur votre lieu de
            compétition ou d&apos;hébergement.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Les 5 Étapes de Votre Voyage avec KABSA
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📝 1. Recensement &amp; Préparation Technique (J-30 à J-15)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Collecte des besoins individuels</strong>{" "}: Identification des besoins
              d&apos;assistance PMR en gare ou à l&apos;aéroport, placement des binômes (athlètes
              malvoyants et guides) et gestion des formalités administratives.
            </li>
            <li>
              <strong>Fiche technique du matériel</strong>{" "}: Relevé exact des dimensions, du
              poids et des spécificités des équipements à transporter (fauteuils roulants de sport,
              fauteuils à 3 roues, batteries de fauteuils électriques, housses de lames ou
              d&apos;engins de lancer) pour transmission aux transporteurs et compagnies aériennes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎫 2. Réservation &amp; Validation des Protocoles (J-15 à J-7)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Confirmation des titres et assistances</strong>{" "}: Émission des billets de
              train ou d&apos;avion groupés, validation des accords de transport en soute hors
              format et réservation des navettes TPMR aux points de correspondance.
            </li>
            <li>
              <strong>Feuille de route détaillée</strong>{" "}: Remise à chaque participant (ou
              responsable de délégation) d&apos;un carnet de voyage clair indiquant les horaires de
              rendez-vous, les points d&apos;accueil accessibles et les numéros d&apos;urgence.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧳 3. Préparation du Matériel &amp; Départ (Jour J - Avant l&apos;Embarquement)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Protection et étiquetage</strong>{" "}: Démontage rapide des éléments
              sensibles si nécessaire (roues carrossées, sangles, pare-chocs), mise sous housse de
              protection et étiquetage nominatif conforme aux normes ferroviaires ou aériennes.
            </li>
            <li>
              <strong>Accueil et embarquement assisté</strong>{" "}: Rendez-vous anticipé à la gare
              ou à l&apos;aéroport avec prise en charge par les agents d&apos;assistance PMR et le
              staff KABSA jusqu&apos;à l&apos;installation à bord (via fauteuil de transfert cabine
              pour l&apos;avion).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚐 4. Transit &amp; Liaison à l&apos;Arrivée
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Récupération et contrôle du matériel</strong>{" "}: Vérification immédiate de
              l&apos;état des fauteuils et équipements dès la sortie de soute, avec intervention
              rapide de nos mécaniciens si un ajustement est nécessaire.
            </li>
            <li>
              <strong>Transfert vers l&apos;hébergement ou le stade</strong>{" "}: Prise en charge
              directe par nos navettes adaptées partenaires pour rejoindre l&apos;hôtel 100 %
              accessible ou le site sportif sans attente.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🔄 5. Retour &amp; Bilan Logistique</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Coordination du retour</strong>{" "}: Enregistrement anticipé du matériel,
              assistance à l&apos;embarquement et accompagnement jusqu&apos;au point de retour
              initial (complexe KABSA, gare ou aéroport).
            </li>
            <li>
              <strong>Clôture administrative</strong>{" "}: Gestion des justificatifs de déplacement
              et bilan avec le référent mobilité ou le Fonds de Solidarité KABSA le cas échéant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Les Trajets Quotidiens (Covoiturage &amp; Navettes Locales)
          </h3>
          <p className="lede">
            Pour les entraînements hebdomadaires et les déplacements régionaux, la procédure est
            simplifiée :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Étape 1 – Inscription au réseau mobilité</strong>{" "}: Vous indiquez vos
              disponibilités (conducteur ou passager) et votre secteur géographique lors de votre
              adhésion.
            </li>
            <li>
              <strong>Étape 2 – Mise en relation</strong>{" "}: Vous intégrez le groupe de
              coordination de votre section (Basket Fauteuil, Athlétisme, Natation Adaptée,
              Football) pour organiser vos trajets semaine après semaine.
            </li>
            <li>
              <strong>Étape 3 – Accès direct sur site</strong>{" "}: Vous bénéficiez des places de
              stationnement réservées PMR et des déposes-minutes situées juste devant l&apos;entrée
              de nos complexes sportifs.
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
        <h2>Intermédiaire de transport</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
