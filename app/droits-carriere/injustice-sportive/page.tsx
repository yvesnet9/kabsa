"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function InjusticeSportivePage() {
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
            ⚖️🛡️ Face à l&apos;injustice sportive : Défendre l&apos;égalité, l&apos;éthique et
            les droits de chaque athlète
          </h3>
          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), le sport est avant tout un espace de
            justice, de respect et d&apos;égalité des chances. Pourtant, sur les terrains comme
            en coulisses, de nombreux jeunes talents — qu&apos;ils soient valides 🏃‍♂️ ou en
            situation de handicap physique ♿ — se heurtent encore à des obstacles injustes :
            discrimination liée au handicap, manque d&apos;accessibilité aux infrastructures,
            décisions arbitrales ou administratives contestables, ou rupture d&apos;équité dans
            l&apos;accès aux compétitions. KABSA s&apos;engage activement aux côtés de ses
            sportifs pour prévenir, signaler et corriger toute forme d&apos;injustice sportive.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre engagement : Un sport équitable et accessible à tous
          </h3>
          <p className="lede">
            Fondée sur les valeurs d&apos;inclusion et de cohésion sociale, notre académie
            veille à ce que seul le mérite, le travail et la passion déterminent le parcours
            d&apos;un athlète :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Lutter contre les discriminations et l&apos;exclusion (♿ &amp;
              🏃‍♂️)</strong>{" "}: Briser les barrières sociales et physiques qui empêchent les
              personnes en situation de handicap d&apos;accéder aux mêmes opportunités
              d&apos;entraînement et de compétition que les sportifs valides.
            </li>
            <li>
              <strong>Garantir l&apos;équité dans la détection et la sélection</strong>{" "}:
              Assurer que chaque jeune sportif (de 15 à 25 ans) soit évalué de manière
              transparente et objective lors de nos détections, sans favoritisme ni préjugé.
            </li>
            <li>
              <strong>Protéger l&apos;intégrité morale et physique</strong>{" "}: Offrir un
              environnement sûr, bienveillant et respectueux des règles éthiques du sport belge
              et international.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋🏛️ Nos dispositifs de soutien et de défense des athlètes
          </h3>
          <p className="lede">
            Grâce à notre réseau d&apos;experts juridiques, KABSA déploie quatre leviers
            d&apos;action concrets face aux situations d&apos;injustice :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Cellule d&apos;écoute, de médiation et d&apos;assistance juridique ⚖️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accompagnement par des experts juridiques</strong>{" "}: En cas de litige
              sportif, de litige contractuel, de sanction disciplinaire disproportionnée ou de
              refus d&apos;inscription injustifié, nos experts juridiques conseillent et
              orientent l&apos;athlète et sa famille.
            </li>
            <li>
              <strong>Médiation</strong>{" "}: KABSA peut intervenir comme médiateur auprès des
              clubs, organisateurs de tournois et instances concernées pour privilégier des
              solutions justes et rapides.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Défense des droits des athlètes handisports et classification ♿
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accompagnement dans les procédures de classification</strong>{" "}: En
              handisport, la classification médicale et fonctionnelle détermine la catégorie de
              compétition. KABSA aide ses sportifs à préparer leurs dossiers médicaux et à faire
              valoir leurs droits en cas d&apos;erreur d&apos;évaluation ou de contestation.
            </li>
            <li>
              <strong>Plaidoyer pour l&apos;accessibilité</strong>{" "}: Nous souhaitons œuvrer,
              avec les fédérations de référence, pour l&apos;adaptation des infrastructures et
              l&apos;égalité de traitement dans les compétitions nationales et internationales.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Protection contre les abus, le harcèlement et les dérives financières 🛡️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Prévention et tolérance zéro</strong>{" "}: KABSA applique une politique
              stricte contre toute forme de harcèlement, de violence verbale ou physique et
              d&apos;abus de pouvoir dans le milieu sportif.
            </li>
            <li>
              <strong>Vigilance face aux intermédiaires peu scrupuleux</strong>{" "}: Nous
              protégeons nos jeunes talents contre les promesses frauduleuses et les contrats
              abusifs lors de leur montée vers le sport professionnel.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            4. Sensibilisation et prise de parole publique 🎥
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Éduquer aux droits et devoirs du sportif</strong>{" "}: Ateliers réguliers
              pour apprendre aux athlètes à connaître leurs droits, les règlements fédéraux et
              les voies de recours existantes.
            </li>
            <li>
              <strong>Donner la parole aux athlètes sur KA TV Sport</strong>{" "}: À travers des
              reportages et témoignages, nous sensibilisons le grand public et les décideurs aux
              réalités vécues par les sportifs moins valides et issus de milieux modestes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📞🤝 Vous êtes témoin ou victime d&apos;une injustice sportive ?
          </h3>
          <p className="lede">
            Aucun athlète ne doit rester seul face à une situation injuste. Les membres de KA
            BRUXELLES SPORT ACADEMIE ainsi que leurs familles peuvent solliciter en toute
            confidentialité notre cellule d&apos;écoute afin d&apos;être accompagnés, conseillés
            et orientés — y compris, selon les cas, vers des avocats spécialisés en droit du
            sport, des médiateurs, les instances et juridictions sportives compétentes ou les
            organismes officiels de lutte contre les discriminations (ex. UNIA en Belgique).
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
        <h2>Face à l&apos;injustice sportive</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
