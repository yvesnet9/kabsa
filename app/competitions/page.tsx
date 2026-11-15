"use client";

import { useEffect } from "react";
import Link from "next/link";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function CompetitionsPage() {
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
            🌍♿🏃‍♂️ Compétitions dans le monde : KABSA au-delà des frontières
          </h3>
          <p className="lede">
            Au cœur de la mission de KA BRUXELLES SPORT ACADEMIE asbl (KABSA) réside
            l&apos;ambition de propulser l&apos;ensemble de nos athlètes — valides 🏃‍♂️ et en
            situation de handicap physique ♿ — vers l&apos;excellence sportive. Parce que la
            progression passe par la confrontation au plus haut niveau, l&apos;académie a pour
            ambition de s&apos;engager activement dans l&apos;organisation et la participation à
            des compétitions en Belgique et sur la scène internationale.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre vision : De Bruxelles aux podiums internationaux
          </h3>
          <p className="lede">
            Le sport de haut niveau et le mouvement paralympique connaissent aujourd&apos;hui un
            rayonnement médiatique et populaire sans précédent. KABSA souhaite s&apos;inscrire
            pleinement dans cette dynamique mondiale en offrant à ses jeunes talents (de 15 à 25
            ans, valides et moins valides) une véritable passerelle entre la détection locale et
            les grandes arènes internationales.
          </p>
          <p className="lede">
            Nos objectifs compétitifs s&apos;articulent autour de trois axes majeurs :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Révéler les talents bruxellois (♿ &amp; 🏃‍♂️)</strong>{" "}: Détecter et
              préparer nos sportifs dans des disciplines adaptées et classiques — telles que le
              cécifoot 🦯⚽, l&apos;athlétisme 🏃‍♂️ et le basket-fauteuil ♿🏀 — afin qu&apos;ils
              représentent fièrement nos couleurs lors des tournois nationaux et internationaux.
            </li>
            <li>
              <strong>Offrir une préparation de niveau professionnel</strong>{" "}: Accompagner
              chaque athlète grâce à un encadrement technique, tactique, physique et
              kinésithérapeutique sur mesure, indispensable pour rivaliser dans l&apos;élite.
            </li>
            <li>
              <strong>Faire rayonner l&apos;inclusion</strong>{" "}: Démontrer, à travers chaque
              rencontre sportive, que la mixité entre athlètes valides et handisports est une
              force collective capable de transcender les frontières et de transformer le regard
              sur le handicap.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆🥇 Participation aux compétitions nationales et internationales
          </h3>
          <p className="lede">
            KABSA entend préparer ses équipes mixtes, valides et handisports ainsi que ses
            athlètes individuels à relever les défis des calendriers officiels et des tournois
            majeurs :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Matchs amicaux et rencontres de préparation</strong>{" "}: Dès la constitution
              de nos noyaux, nos équipes disputeront des matchs internes puis affronteront des
              clubs extérieurs pour acquérir l&apos;expérience du haut niveau.
            </li>
            <li>
              <strong>Tournois nationaux et européens</strong>{" "}: En lien avec les circuits
              officiels et les fédérations de référence, nous souhaitons engager nos sportifs
              sur les compétitions reconnues.
            </li>
            <li>
              <strong>Ambition paralympique et mondiale</strong>{" "}: Pour nos athlètes les plus
              performants, KABSA a pour projet de structurer un parcours d&apos;élite visant les
              qualifications aux championnats internationaux et aux grands rendez-vous mondiaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝🏟️ Organisation d&apos;événements et accueil de délégations
          </h3>
          <p className="lede">
            Au-delà de la participation de ses propres équipes, KABSA souhaite se positionner
            comme un acteur organisateur et une terre d&apos;accueil pour le sport international
            à Bruxelles :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tournois inclusifs et événements de sensibilisation (♿🤝🏃‍♂️)</strong>{" "}:
              L&apos;association prévoit d&apos;organiser des compétitions ouvertes à Bruxelles
              réunissant sportifs valides et en situation de handicap pour promouvoir le
              vivre-ensemble et fédérer les partenaires autour de l&apos;inclusion par le sport.
            </li>
            <li>
              <strong>Accueil des délégations étrangères et fédérales</strong>{" "}: Grâce à notre
              Pôle Logistique &amp; Social, KABSA ambitionne de prendre en charge l&apos;accueil
              des équipes pour des stages ou des tournois (infrastructures adaptées et
              accessibles, hébergement temporaire de qualité et programmes nutritionnels sur
              mesure).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎥📺 Suivez nos athlètes autour du monde avec KA TV Sport
          </h3>
          <p className="lede">
            Chaque déplacement, chaque stage de préparation et chaque compétition est une
            aventure humaine et sportive unique. Grâce à notre chaîne KA TV Sport (YouTube,
            TikTok et réseaux sociaux), suivez les coulisses de nos équipes valides et
            handisports, les portraits de nos athlètes et les temps forts de nos compétitions en
            Belgique et à l&apos;étranger.
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
    <section className="info-block tint reveal" id="competitions">
      <div className="wrap">
        <h2>Nos compétitions dans le monde</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />

        <div className="info-grid">
          <Link href="/competitions/kabsa" className="info-card info-card--link">
            <h3>Compétitions KABSA</h3>
            <p>
              Le programme de détection et de tournois de KABSA, en Belgique et à l&apos;international,
              pour repérer et révéler les jeunes talents valides et handisports — à déployer dès la
              saison 2026-2027.
            </p>
          </Link>
          <Link href="/competitions/nationales" className="info-card info-card--link">
            <h3>Compétitions nationales</h3>
            <p>Participation de nos équipes aux championnats et tournois organisés en Belgique.</p>
          </Link>
          <Link href="/competitions/internationales" className="info-card info-card--link">
            <h3>Compétitions internationales</h3>
            <p>Rencontres et tournois à l&apos;étranger, échanges sportifs et représentation de KABSA dans le monde.</p>
          </Link>
          <Link href="/competitions/calendrier" className="info-card info-card--link">
            <h3>Calendrier</h3>
            <p>Le programme détaillé de nos prochaines compétitions sera publié ici prochainement.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
