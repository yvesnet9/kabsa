"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function IntermediaireVisaBilletPage() {
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
          <h3 className="rf-blocktitle">🛂✈️ Intermédiaire de Visa &amp; Billet d&apos;Avion</h3>
          <p className="svc-chapo">
            Un accompagnement administratif et aérien clé en main pour faciliter la mobilité
            internationale de nos athlètes, délégations et partenaires.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, le sport est une passerelle ouverte sur le monde. Qu&apos;il
            s&apos;agisse d&apos;accueillir des délégations étrangères pour nos tournois et stages,
            ou d&apos;accompagner nos équipes (valides, handisport et sport adapté) vers des
            compétitions internationales, les démarches consulaires et aériennes peuvent vite
            devenir complexes. Notre service d&apos;intermédiaire de visa et billet d&apos;avion
            simplifie chaque formalité pour vous permettre de voyager l&apos;esprit libre.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛂 1. Assistance Visa &amp; Formalités Consulaires
          </h3>
          <p className="lede">
            Parce que l&apos;obtention d&apos;un titre de séjour court ou d&apos;un visa sportif
            exige rigueur et anticipation, KABSA accompagne les sportifs, encadrants et invités
            internationaux à chaque étape :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Délivrance de lettres d&apos;invitation officielles</strong>{" "}: Émission
              des attestations d&apos;accueil, convocations sportives et justificatifs
              d&apos;hébergement certifiés (en lien avec notre pôle Hébergement des délégations)
              nécessaires au dépôt des dossiers auprès des consulats et ambassades.
            </li>
            <li>
              <strong>Constitution et vérification des dossiers</strong>{" "}: Accompagnement
              administratif pour rassembler les pièces obligatoires (passeports, justificatifs de
              prise en charge, attestations d&apos;assurance internationale et couverture médicale
              liée à la licence).
            </li>
            <li>
              <strong>Coordination des demandes groupées</strong>{" "}: Centralisation des démarches
              pour les équipes complètes, les staffs techniques, les arbitres et les guides
              (déficience visuelle) afin de garantir des délais de traitement harmonisés.
            </li>
            <li>
              <strong>Suivi jusqu&apos;à la délivrance</strong>{" "}: Interface dédiée avec les
              organismes sportifs et partenaires institutionnels pour sécuriser la venue ou le
              départ des participants dans les temps.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✈️ 2. Réservation &amp; Coordination de Billets d&apos;Avion
          </h3>
          <p className="lede">
            Voyager en avion avec une équipe multidisciplinaire ou du matériel spécialisé demande
            une expertise logistique précise. KABSA agit comme facilitateur auprès des compagnies
            aériennes :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Billetterie individuelle et tarifs groupes</strong>{" "}: Recherche des
              itinéraires les plus directs et accessibles, négociation des tarifs dédiés aux
              associations et délégations sportives, et gestion flexible des modifications de noms
              ou d&apos;horaires.
            </li>
            <li>
              <strong>Déclaration technique du matériel handisport</strong>{" "}: Enregistrement
              préalable des fauteuils roulants de sport (basket fauteuil, athlétisme à 3 roues), des
              fauteuils électriques (certification des batteries), des lames en carbone, des Frame
              Runners et des housses d&apos;engins hors format.
            </li>
            <li>
              <strong>Placement en cabine et assistance PMR</strong>{" "}: Réservation anticipée des
              sièges adaptés, placement côte à côte des binômes (athlètes malvoyants et guides) et
              activation de l&apos;assistance aéroportuaire de bout en bout (de
              l&apos;enregistrement jusqu&apos;au fauteuil de transfert cabine).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛡️ Sécurité, Assurance &amp; Solidarité Internationale
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Assurance voyage et rapatriement</strong>{" "}: Vérification systématique de
              la couverture internationale (frais médicaux à l&apos;étranger, assistance
              rapatriement, assurance bagages et matériel de haute précision).
            </li>
            <li>
              <strong>Appui du Fonds de Solidarité KABSA</strong>{" "}: Mobilisation possible de
              bourses de mobilité internationale pour soutenir les jeunes talents et les équipes
              handisport qualifiés pour des compétitions à l&apos;étranger.
            </li>
            <li>
              <strong>Continuité logistique</strong>{" "}: Liaison directe entre l&apos;arrivée à
              l&apos;aéroport, nos navettes adaptées (TPMR) et nos structures d&apos;hébergement 100
              % accessibles.
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
          <h3 className="rf-blocktitle">🗓️📂 Déroulement &amp; Documents à Fournir</h3>
          <p className="svc-chapo">
            Un calendrier balisé et une check-list précise pour préparer sereinement vos démarches
            consulaires et aériennes.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, la réussite d&apos;un déplacement international repose sur une
            préparation administrative rigoureuse. Que vous soyez un athlète du club partant en
            compétition à l&apos;étranger ou une délégation invitée sur nos installations, notre
            pôle mobilité vous accompagne étape par étape dans la constitution de votre dossier et
            la réservation de vos vols.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Partie 1 : Le Déroulement Étape par Étape
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📩 1. Ouverture du Dossier &amp; Évaluation des Besoins (J-60 à J-45)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prise de contact anticipée</strong>{" "}: Transmission de la demande au
              référent mobilité internationale de KABSA dès la confirmation de l&apos;événement
              sportif.
            </li>
            <li>
              <strong>Identification des profils</strong>{" "}: Recensement complet des voyageurs
              (athlètes valides, handisport, sport adapté, guides, entraîneurs, mécaniciens) et
              relevé des besoins spécifiques d&apos;assistance PMR ou de transport de matériel hors
              format.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🛂 2. Constitution Consulaire &amp; Émission des Justificatifs (J-45 à J-30)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Préparation des pièces officielles</strong>{" "}: KABSA délivre les lettres
              d&apos;invitation nominatives, les attestations d&apos;hébergement (en lien avec nos
              structures partenaires 100 % accessibles) et les attestations d&apos;assurance
              internationale.
            </li>
            <li>
              <strong>Dépôt de demande de visa</strong>{" "}: Accompagnement pour la prise de
              rendez-vous auprès des consulats ou centres de visas agréés et vérification complète
              de la conformité du dossier avant dépôt.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✈️ 3. Réservation des Vols &amp; Déclaration Matérielle (J-30 à J-15)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Confirmation des billets d&apos;avion</strong>{" "}: Émission des titres de
              transport groupés ou individuels aux meilleurs tarifs associatifs, avec placement
              adapté en cabine (binômes athlète/guide côte à côte, sièges accessibles).
            </li>
            <li>
              <strong>Enregistrement technique auprès de la compagnie</strong>{" "}: Validation
              officielle du transport en soute des fauteuils roulants de sport, fauteuils
              électriques (certificats de batteries), lames en carbone, Frame Runners ou housses
              d&apos;athlétisme.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🧳 4. Remise du Carnet de Voyage &amp; Départ Assisté (J-7 à Jour J)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Envoi du dossier complet</strong>{" "}: Vous recevez l&apos;ensemble de vos
              documents par voie numérique (billets électroniques, confirmations d&apos;assistance
              aéroportuaire, attestations d&apos;assurance et contacts d&apos;urgence).
            </li>
            <li>
              <strong>Accompagnement à l&apos;aéroport</strong>{" "}: Prise en charge dès
              l&apos;arrivée au terminal par les agents d&apos;assistance PMR et le staff KABSA
              jusqu&apos;à l&apos;embarquement et la mise en soute sécurisée du matériel.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Partie 2 : Documents et Pièces à Fournir
          </h3>
          <p className="lede">
            Pour nous permettre de traiter votre demande dans les meilleurs délais, merci de
            préparer les éléments suivants selon votre situation :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👤 1. Pièces d&apos;Identité &amp; État Civil (Pour tous les voyageurs)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Copie lisible du passeport en cours de validité</strong>{" "}: Valide au
              minimum 6 mois après la date prévue du retour et comportant au moins deux pages
              vierges.
            </li>
            <li>
              <strong>Formulaire d&apos;information voyageur KABSA</strong>{" "}: Nom, prénom exact
              (identique au passeport), date de naissance, coordonnées téléphoniques, e-mail et
              contact d&apos;urgence.
            </li>
            <li>
              <strong>Pour les sportifs mineurs</strong>{" "}: Copie du livret de famille, pièces
              d&apos;identité des représentants légaux et autorisation de sortie du territoire (AST)
              signée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 2. Justificatifs Sportifs &amp; Administratifs (Pour les demandes de Visa)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Licence sportive fédérale en cours</strong>{" "}: Attestation de licence
              (Handisport, Sport Adapté ou fédération délégataire) et certificat médical de
              non-contre-indication à la compétition.
            </li>
            <li>
              <strong>Convocation officielle ou engagement</strong>{" "}: Document attestant de la
              sélection ou de l&apos;inscription au tournoi, stage ou championnat international.
            </li>
            <li>
              <strong>Justificatifs de prise en charge financière</strong>{" "}: Attestation de
              financement par le club, la fédération ou le Fonds de Solidarité KABSA (ou
              justificatifs de ressources personnelles selon les exigences consulaires).
            </li>
            <li>
              <strong>Attestation d&apos;assurance internationale</strong>{" "}: Couvrant les frais
              médicaux, l&apos;hospitalisation et le rapatriement sanitaire sur toute la durée du
              séjour (fournie par KABSA pour ses licenciés).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ♿ 3. Fiche Technique Matériel &amp; Assistance (Pour le Transport Aérien)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Dimensions et poids exacts des équipements</strong>{" "}: Longueur, largeur,
              hauteur (plié et déplié) et poids à vide de chaque fauteuil de sport, fauteuil
              quotidien, Frame Runner ou housse de matériel.
            </li>
            <li>
              <strong>Certificat de batterie (fauteuils électriques uniquement)</strong>{" "}: Fiche
              constructeur précisant le type de batterie (gel, lithium-ion, sèche) et sa puissance
              en Watt-heures (Wh) conformément aux normes aériennes IATA.
            </li>
            <li>
              <strong>Précision sur le niveau d&apos;assistance PMR requis</strong>{" "}: Besoin
              d&apos;assistance jusqu&apos;à la porte de l&apos;avion, fauteuil de transfert cabine
              ou accompagnement spécifique pour déficience visuelle ou cognitive.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">💡 Conseils Pratiques Avant le Départ</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Anticipez les délais consulaires</strong>{" "}: Certains pays exigent un délai
              de traitement de plusieurs semaines. Transmettez vos copies de passeports dès
              l&apos;ouverture des inscriptions.
            </li>
            <li>
              <strong>Protégez vos équipements</strong>{" "}: Prévoyez des housses rembourrées pour
              les roues carrossées, les lames en carbone et les éléments démontables, et étiquetez
              chaque pièce avec vos coordonnées et celles de l&apos;académie KABSA.
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
        <h2>Intermédiaire de visa &amp; billet d&apos;avion</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
