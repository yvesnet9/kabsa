"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function CompetitionsNationalesPage() {
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
            ♿🏃‍♂️ Compétitions nationales belges : L&apos;excellence au cœur de la Belgique
          </h3>
          <p className="lede">
            Ancrée à Bruxelles depuis sa création, KA BRUXELLES SPORT ACADEMIE asbl (KABSA) fait
            du territoire belge son premier terrain d&apos;expression et de progression. Pour
            permettre à nos jeunes athlètes (de 15 à 25 ans) — valides 🏃‍♂️ et en situation de
            handicap physique ♿ — d&apos;atteindre le haut niveau, l&apos;académie souhaite
            s&apos;investir pleinement dans les championnats officiels, les tournois nationaux
            et l&apos;organisation de rencontres inclusives à travers toute la Belgique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 Bienvenue dans l&apos;arène de l&apos;excellence
          </h3>
          <p className="lede">
            Pour l&apos;association KABSA, la participation aux compétitions nationales
            représentera l&apos;aboutissement de mois d&apos;entraînements rigoureux, de
            discipline et de passion. L&apos;académie aura à cœur de porter haut ses couleurs à
            travers toute la Belgique lors d&apos;événements multidisciplinaires majeurs.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🇧🇪 Notre présence sur la scène belge
          </h3>
          <p className="lede">
            KABSA ne se limite pas à une seule discipline : sa force réside dans sa polyvalence
            et sa capacité à s&apos;illustrer dans des compétitions qui mettent à l&apos;épreuve
            la variété de ses compétences athlétiques et stratégiques. L&apos;académie souhaite
            participer activement aux grands rassemblements multidisciplinaires organisés en
            Belgique — tournois inter-associations, challenges sportifs nationaux ou rencontres
            officielles — autant de vitrines pour démontrer le talent, la détermination et le
            fair-play de ses membres.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Nos objectifs en compétition
          </h3>
          <p className="lede">
            Chaque tournoi national où KABSA engagera ses équipes poursuivra un triple objectif
            :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;excellence sportive</strong>{" "}: Viser le podium, repousser ses
              limites physiques et tactiques, et offrir à nos athlètes une plateforme pour se
              mesurer aux meilleurs du pays.
            </li>
            <li>
              <strong>L&apos;esprit d&apos;équipe et de cohésion</strong>{" "}: Renforcer les liens
              entre nos membres — en compétition, on gagne ensemble et on apprend ensemble.
            </li>
            <li>
              <strong>Le rayonnement de KABSA</strong>{" "}: Représenter dignement les valeurs
              d&apos;inclusion, de respect et de mixité qui font l&apos;ADN de
              l&apos;association, auprès du public comme des autres organisations belges.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚀 Rejoignez l&apos;aventure compétitive
          </h3>
          <p className="lede">
            Vous avez l&apos;âme d&apos;un compétiteur et souhaitez défendre les couleurs de
            KABSA à l&apos;échelle nationale ? Nos équipes multidisciplinaires sont ouvertes aux
            talents valides et en situation de handicap.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre ancrage national : Former et performer en Belgique
          </h3>
          <p className="lede">
            La Belgique dispose d&apos;un écosystème sportif riche et dynamique, soutenu par une
            forte volonté en faveur de l&apos;inclusion et de l&apos;égalité des chances. KABSA
            s&apos;appuie sur cet environnement pour préparer ses athlètes aux exigences de la
            compétition :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Une passerelle vers l&apos;élite belge (♿ &amp; 🏃‍♂️)</strong>{" "}: Grâce à
              nos séances d&apos;entraînement tactique, physique et kinésithérapeutique dans des
              infrastructures bruxelloises adaptées <em>(lieux à confirmer)</em>, nous préparons
              nos sportifs à rivaliser dans les meilleures divisions nationales.
            </li>
            <li>
              <strong>Un ancrage dans les circuits officiels</strong>{" "}: KABSA souhaite
              travailler en lien avec les instances de référence du sport belge afin
              d&apos;ouvrir à ses membres les portes des circuits officiels.
            </li>
            <li>
              <strong>La promotion de la mixité sur tout le territoire</strong>{" "}: En engageant
              des équipes dans des disciplines comme le cécifoot 🦯⚽, l&apos;athlétisme 🏃‍♂️ et
              le basket-fauteuil ♿🏀, nous faisons rayonner les valeurs d&apos;inclusion de
              Bruxelles jusqu&apos;en Wallonie et en Flandre.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆🥇 Le parcours compétitif KABSA sur le territoire belge
          </h3>
          <p className="lede">
            La montée en puissance de nos sportifs en Belgique suivra une progression structurée
            :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Matchs amicaux et rencontres interclubs</strong>{" "}: Dès la constitution de
              nos noyaux, nos équipes disputeront des matchs internes puis affronteront les
              clubs sportifs bruxellois et les équipes belges.
            </li>
            <li>
              <strong>Engagements sur les circuits régionaux et nationaux</strong>{" "}: Nos
              athlètes individuels et nos équipes participeront aux championnats officiels
              organisés par les fédérations francophones, néerlandophones et nationales.
            </li>
            <li>
              <strong>Organisation de tournois inclusifs à Bruxelles (♿🤝🏃‍♂️)</strong>{" "}: KABSA
              prévoit d&apos;organiser ses propres événements de sensibilisation et tournois
              ouverts dans la capitale pour rassembler le grand public, les écoles, les centres
              de revalidation et les clubs autour du sport partagé.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Les grands rendez-vous du calendrier sportif belge (paysage visé)
          </h3>
          <p className="lede">
            Pour guider nos athlètes vers la performance, KABSA cible les rendez-vous
            incontournables du calendrier belge, couvrant aussi bien le handisport (♿) que les
            circuits valides (🏃‍♂️) :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Les événements multisports et inclusifs nationaux (♿ &amp; 🏃‍♂️)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Championnats Multisports Adaptés (CMA) (♿)</strong>{" "}: Compétitions
              organisées à travers les provinces francophones dans de nombreuses disciplines
              (athlétisme, natation, tennis de table, sports collectifs).
            </li>
            <li>
              <strong>Les Jeux Nationaux de Special Olympics Belgium (♿)</strong>{" "}: Le plus
              grand événement multisport annuel en Belgique dédié aux athlètes présentant un
              handicap mental.
            </li>
            <li>
              <strong>Les journées et tournois Festi&apos;Handisport (♿🤝🏃‍♂️)</strong>{" "}:
              Événements de promotion et rencontres inclusives organisés en Wallonie et à
              Bruxelles.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Les compétitions nationales par discipline phare
          </h3>
          <p className="lede">
            <em>Athlétisme &amp; Para-athlétisme (♿ &amp; 🏃‍♂️) :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Championnats de Belgique d&apos;Athlétisme (toutes catégories et
              espoirs/juniors)</strong>{" "}: Les rendez-vous nationaux majeurs sur piste et en
              salle.
            </li>
            <li>
              <strong>La Handicross Cup (♿)</strong>{" "}: Le circuit national de cross-country
              handisport disputé sur plusieurs manches en Belgique.
            </li>
            <li>
              <strong>Les Meetings Nationaux et Mémoriaux belges (♿ &amp; 🏃‍♂️)</strong>{" "}:
              Compétitions de référence sur piste, incluant des épreuves intégrées pour athlètes
              paralympiques.
            </li>
          </ul>
          <p className="lede">
            <em>Basket-fauteuil &amp; Basketball (♿ &amp; 🏃‍♂️) :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Championnat de Belgique de Basket en fauteuil roulant
              (♿)</strong> et <strong>la Coupe de Belgique de Basket-fauteuil (♿)</strong>{" "}: Les
              compétitions nationales de la discipline.
            </li>
            <li>
              <strong>Les Championnats Nationaux et Régionaux de Basketball (Top Division &amp;
              catégories jeunes U16-U21) (🏃‍♂️)</strong>.
            </li>
          </ul>
          <p className="lede">
            <em>Cécifoot &amp; Football (🦯⚽ &amp; 🏃‍♂️⚽) :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Tournois Nationaux et Rencontres Interclubs de Cécifoot (🦯⚽)</strong>.
            </li>
            <li>
              <strong>La Coupe de Belgique et les Championnats Nationaux de Football
              (🏃‍♂️⚽)</strong>.
            </li>
            <li>
              <strong>Le Handifoot Festival (♿⚽)</strong>{" "}: Événement national rassemblant les
              équipes de football adapté.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏃‍♂️ Les grands défis collectifs (esprit d&apos;équipe)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;Ekiden de Bruxelles</strong>{" "}: Marathon (42,195 km) couru en relais
              par équipes de 6, chaque automne. Idéal pour souder l&apos;esprit d&apos;équipe.
            </li>
            <li>
              <strong>Le Crossing Belgium</strong>{" "}: Raid-expédition multidisciplinaire en
              équipes de 4 (trail, VTT, escalade, kayak) à la mi-novembre.
            </li>
            <li>
              <strong>Le Challenge Run in Brussels</strong>{" "}: Critérium de courses à pied à
              Bruxelles et en périphérie tout au long de l&apos;année.
            </li>
            <li>
              <strong>Les courses à obstacles par équipe (Mud Runs)</strong>{" "}: Événements de
              cohésion très populaires en automne.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎥📺 L&apos;actualité des compétitions belges sur KA TV Sport
          </h3>
          <p className="lede">
            Retrouvez les résumés de matchs, les interviews de nos coachs et les coulisses des
            championnats belges sur notre chaîne KA TV Sport (YouTube, TikTok et réseaux
            sociaux).
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
        <h2>Compétitions nationales</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />

      </div>
    </section>
  );
}
