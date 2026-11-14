"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function FondsDeSolidaritePage() {
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
          <h3 className="rf-blocktitle">🤝💙 Fonds de Solidarité KABSA</h3>
          <p className="svc-chapo">
            Parce que la passion du sport et l&apos;inclusion ne doivent jamais être freinées par
            des contraintes financières ou matérielles.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, nous sommes convaincus que le sport est un droit universel et
            un formidable levier d&apos;épanouissement, de santé et de lien social. Pour que chaque
            enfant, jeune ou adulte — valide, handisport ou sport adapté — puisse accéder à nos
            disciplines sans distinction de revenus, l&apos;association a créé son Fonds de
            Solidarité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Nos 4 Missions Prioritaires</h3>
          <p className="lede">
            Grâce à la mobilisation de nos partenaires, de nos donateurs et aux actions solidaires
            du club, ce fonds intervient concrètement sur quatre axes essentiels :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Faciliter l&apos;accès aux licences et cotisations</strong>{" "}: Prise en
              charge partielle ou totale de l&apos;adhésion annuelle pour les familles en difficulté
              financière, les étudiants et les demandeurs d&apos;emploi, en complément des
              dispositifs d&apos;aide existants.
            </li>
            <li>
              <strong>Financer l&apos;équipement technique et handisport</strong>{" "}: Contribution
              à l&apos;achat ou à l&apos;adaptation de matériel spécialisé coûteux (fauteuils
              roulants de sport, lames de course en carbone, Frame Runners, manchons ou équipements
              de sécurité) et renouvellement de notre parc de prêt gratuit.
            </li>
            <li>
              <strong>Soutenir la mobilité et les déplacements en compétition</strong>{" "}:
              Participation aux frais de transport adaptés et d&apos;hébergement accessible pour
              permettre à nos jeunes talents et à nos équipes handisport de défendre les couleurs de
              KABSA lors des championnats régionaux et nationaux.
            </li>
            <li>
              <strong>Accompagner la formation des bénévoles et des guides</strong>{" "}:
              Financement des formations aux premiers secours, à l&apos;accompagnement du handicap
              et à l&apos;encadrement des binômes (guides pour athlètes malvoyants ou non-voyants).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Qui Peut Bénéficier du Fonds de Solidarité ?
          </h3>
          <p className="lede">
            Le Fonds de Solidarité KABSA s&apos;adresse à l&apos;ensemble de nos adhérents et futurs
            licenciés, toutes disciplines confondues (Basket Fauteuil, Para-athlétisme, Natation
            Adaptée, Football, Athlétisme) :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les familles à revenus modestes</strong>{" "}: Souhaitant inscrire un ou
              plusieurs enfants au sein de nos écoles de sport.
            </li>
            <li>
              <strong>Les jeunes sportifs en situation de handicap</strong>{" "}: Ayant besoin
              d&apos;un soutien pour financer leur premier équipement sur-mesure.
            </li>
            <li>
              <strong>Les étudiants, apprentis et demandeurs d&apos;emploi</strong>{" "}: Désireux
              de pratiquer une activité physique régulière pour leur santé et leur insertion
              sociale.
            </li>
            <li>
              <strong>Les compétiteurs engagés</strong>{" "}: Confrontés à des frais de déplacement
              importants lors des phases finales ou des tournois nationaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Comment Contribuer au Fonds de Solidarité ?
          </h3>
          <p className="lede">
            Vous partagez nos valeurs d&apos;inclusion et souhaitez agir concrètement pour le sport
            pour tous ? Plusieurs moyens s&apos;offrent à vous :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Faire un don ponctuel ou régulier</strong>{" "}: Particuliers et entreprises
              peuvent soutenir le fonds (ouvrant droit à une réduction d&apos;impôt selon la
              législation en vigueur pour les associations d&apos;intérêt général).
            </li>
            <li>
              <strong>Devenir partenaire ou mécène d&apos;un équipement</strong>{" "}: Financez
              directement l&apos;achat d&apos;un fauteuil de sport, d&apos;une lame
              d&apos;initiation ou d&apos;un dispositif de mise à l&apos;eau pour le club.
            </li>
            <li>
              <strong>Participer à nos événements solidaires</strong>{" "}: Tournois caritatifs,
              courses solidaires, tombolas et ventes au profit du fonds organisés tout au long de
              l&apos;année au Club-House « Espace KABSA ».
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Déposer une demande d&apos;aide
        </Link>
        <Link href="/dons" className="info-cta">
          Faire un don au Fonds
        </Link>
      </div>
    </>
  );

  const deroulementContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">📋 Déroulement d&apos;une Demande d&apos;Aide Solidaire</h3>
          <p className="svc-chapo">
            Un parcours simple, rapide et 100 % confidentiel pour accompagner chaque sportif sans
            stigmatisation.
          </p>
          <p className="lede">
            À l&apos;académie KABSA, demander un coup de pouce financier ou matériel ne doit jamais
            être une démarche compliquée ou gênante. Notre commission solidaire a conçu une
            procédure fluide, bienveillante et discrète pour permettre à chacun de rejoindre nos
            terrains, nos pistes ou nos bassins dans les meilleures conditions.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Les 4 Étapes de Votre Demande</h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">📩 1. Premier Contact Confidentiel</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prise de contact libre</strong>{" "}: Présentez-vous lors d&apos;une
              permanence au secrétariat du club, échangez directement avec votre éducateur référent
              ou envoyez un message via notre formulaire sécurisé en ligne.
            </li>
            <li>
              <strong>Sans attente</strong>{" "}: Dès cette première étape, vous pouvez déjà
              participer à vos séances d&apos;essai gratuites avec prêt de matériel fourni par
              KABSA.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💬 2. Entretien d&apos;Écoute &amp; Optimisation des Aides (20 min)
          </h3>
          <p className="lede">
            Un rendez-vous individuel, en présentiel au Club-House « Espace KABSA » ou par
            téléphone, est organisé avec le référent social de l&apos;association :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Identification des besoins précis</strong>{" "}: Aide sur le montant de la
              cotisation annuelle, besoin d&apos;un équipement spécifique (fauteuil de sport, lame
              en carbone, tenue), ou participation aux frais de déplacement en compétition.
            </li>
            <li>
              <strong>Activation des dispositifs cumulables</strong>{" "}: Notre équipe vous aide à
              mobiliser en priorité les dispositifs d&apos;aide existants (aides des collectivités,
              tarifs dégressifs familles, paiement échelonné) afin de réduire au maximum le reste à
              charge.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚖️ 3. Étude par la Commission Solidaire (Sous 15 Jours)
          </h3>
          <p className="lede">
            Votre dossier est transmis de manière anonyme à la commission du Fonds de Solidarité
            KABSA :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Examen bienveillant</strong>{" "}: La commission évalue la situation globale
              et l&apos;enveloppe disponible, sans lourdeur administrative inutile.
            </li>
            <li>
              <strong>Réponse rapide</strong>{" "}: Vous recevez une notification confidentielle
              sous 15 jours maximum précisant le montant de la prise en charge accordée ou les
              modalités du prêt matériel longue durée.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎉 4. Mise en Place Concrète &amp; Suivi sur la Saison
          </h3>
          <p className="lede">
            Dès l&apos;accord de la commission, l&apos;aide est appliquée directement sans avance de
            frais de votre part :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour une cotisation</strong>{" "}: La réduction est immédiatement déduite du
              montant de votre licence, avec la possibilité de régler le solde éventuel en plusieurs
              fois.
            </li>
            <li>
              <strong>Pour un équipement ou un déplacement</strong>{" "}: Le club règle directement
              le fournisseur de matériel adapté ou prend en charge les frais de transport et
              d&apos;hébergement lors de votre participation aux compétitions officielles.
            </li>
            <li>
              <strong>Renouvellement simplifié</strong>{" "}: À chaque début de saison, un point
              rapide permet de réévaluer vos besoins en toute simplicité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Le Déroulement d&apos;un Don ou d&apos;un Parrainage Solidaire
          </h3>
          <p className="lede">
            Vous souhaitez contribuer au Fonds de Solidarité KABSA en tant que particulier ou
            entreprise ? Voici comment votre soutien est utilisé :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Étape 1 – Choix du soutien</strong>{" "}: Vous effectuez un don libre en ligne
              ou choisissez de parrainer un projet précis (financement d&apos;un fauteuil
              d&apos;initiation, d&apos;une bourse jeune talent ou d&apos;un déplacement
              d&apos;équipe).
            </li>
            <li>
              <strong>Étape 2 – Affectation transparente</strong>{" "}: 100 % des sommes versées au
              Fonds de Solidarité sont dédiées aux aides directes aux licenciés et à l&apos;achat de
              matériel adapté.
            </li>
            <li>
              <strong>Étape 3 – Reçu et valorisation</strong>{" "}: Vous recevez votre attestation
              de don (ouvrant droit à une réduction fiscale selon la réglementation en vigueur) et,
              si vous le souhaitez, êtes invité aux événements solidaires du club.
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
        <h2>Fonds de solidarité</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
