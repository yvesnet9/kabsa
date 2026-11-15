"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function AccompagnementJuridiquePage() {
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
          <h3 className="rf-blocktitle">
            ⚖️📜 Accompagnement juridique : Sécuriser les droits et l&apos;avenir de nos sportifs
          </h3>
          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), la progression d&apos;un athlète vers
            le haut niveau s&apos;accompagne d&apos;enjeux administratifs, contractuels et
            réglementaires de plus en plus complexes. Parce que de nombreux jeunes talents (de
            15 à 25 ans) — valides 🏃‍♂️ et en situation de handicap physique ♿ — ainsi que leurs
            familles ne disposent pas toujours des clés pour décrypter l&apos;environnement
            juridique du sport, KABSA intègre une cellule d&apos;experts juridiques dédiée à
            leur conseil et à leur protection.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre vision : Un bouclier juridique au service de l&apos;inclusion et de
            l&apos;éthique
          </h3>
          <p className="lede">
            Le sport moderne et le mouvement paralympique attirent d&apos;importants enjeux
            financiers et médiatiques. Pour éviter que nos athlètes ne soient vulnérables face
            aux contrats, aux règlements ou aux litiges, KABSA met le droit au service de leur
            épanouissement :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Protéger l&apos;intégrité des sportifs (♿ &amp; 🏃‍♂️)</strong>{" "}: Prévenir
              les abus, les contrats déséquilibrés et les pratiques contraires à l&apos;éthique
              sportive lors de l&apos;accès aux compétitions ou au professionnalisme.
            </li>
            <li>
              <strong>Garantir l&apos;égalité d&apos;accès et la non-discrimination</strong>{" "}:
              Défendre le droit fondamental à la santé, à l&apos;accessibilité et à
              l&apos;intégration sociale par le sport en Belgique et à l&apos;international.
            </li>
            <li>
              <strong>Accompagner en toute transparence</strong>{" "}: Offrir aux membres de
              l&apos;académie et à leurs représentants légaux une information claire, accessible
              et bienveillante à chaque étape de leur parcours.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋🏛️ Les domaines d&apos;intervention de nos experts juridiques
          </h3>
          <p className="lede">
            Nos experts juridiques interviennent sur cinq axes essentiels :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Analyse et sécurisation des contrats sportifs ✍️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Relecture et conseil contractuel</strong>{" "}: Accompagnement des athlètes et
              de leurs familles avant la signature de tout engagement avec un club, un agent
              sportif, un équipementier ou un sponsor privé.
            </li>
            <li>
              <strong>Gestion du droit à l&apos;image</strong>{" "}: Encadrement de
              l&apos;utilisation de l&apos;image des sportifs, notamment dans le cadre des
              partenariats commerciaux et des diffusions sur notre chaîne KA TV Sport.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Statut du sportif, fiscalité et couverture sociale 🛡️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Information sur le statut du sportif en Belgique</strong>{" "}: Éclairage sur
              les droits et obligations liés aux statuts d&apos;athlète amateur, espoir,
              semi-professionnel ou professionnel.
            </li>
            <li>
              <strong>Assurances et responsabilité</strong>{" "}: Vérification des garanties de
              couverture (KABSA assure l&apos;ensemble de ses membres pendant les activités de
              l&apos;académie) et conseil sur les assurances complémentaires lors des
              déplacements et stages.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Droit du handisport et procédures de classification ♿
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Assistance dans les dossiers de classification</strong>{" "}: Accompagnement
              administratif et réglementaire lors des évaluations médicales et fonctionnelles
              requises par les fédérations handisports et les instances internationales.
            </li>
            <li>
              <strong>Défense de l&apos;accessibilité</strong>{" "}: Appui juridique en cas de refus
              d&apos;accès injustifié à une infrastructure sportive, une formation ou une
              compétition officielle.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            4. Prévention des litiges et défense devant les instances sportives ⚖️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Médiation et règlement amiable</strong>{" "}: Intervention en amont pour
              résoudre les différends entre un athlète, un club, une fédération ou un
              organisateur de tournoi.
            </li>
            <li>
              <strong>Suivi disciplinaire et recours</strong>{" "}: Orientation et soutien face aux
              décisions arbitrales ou administratives contestables et sensibilisation aux
              règlements antidopage en vigueur.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            5. Appui juridique à la reconversion et aux projets associatifs 🚀
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Conseil à la création de projet</strong>{" "}: Accompagnement des anciens
              athlètes souhaitant créer leur propre structure sportive, associative (asbl) ou
              entrepreneuriale après leur carrière compétitive.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝🔒 Confidentialité et écoute permanente
          </h3>
          <p className="lede">
            L&apos;accompagnement juridique proposé par KABSA repose sur le respect strict de la
            confidentialité, de la déontologie et de l&apos;intérêt supérieur de l&apos;athlète.
            Chaque sportif affilié — ainsi que les parents des athlètes mineurs — peut
            solliciter un entretien d&apos;orientation auprès de notre secrétariat pour être mis
            en relation avec nos experts partenaires.
          </p>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Nous contacter
        </Link>
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
        <h2>Accompagnement juridique</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
