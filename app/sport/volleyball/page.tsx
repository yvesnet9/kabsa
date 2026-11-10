"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function VolleyballPage() {
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
        <p>Découvrez les sections Volleyball de KABSA.</p>
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
        <h3>Matchs &amp; compétitions</h3>
        <p>Meilleurs moments des championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Stars joueurs KABSA</h3>
        <p>Parcours des meilleurs joueurs et joueuses.</p>
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
          <h3 className="rf-blocktitle">🏐 Volleyball Masculin &amp; Féminin</h3>
          <p className="lede">
            Le volleyball chez KABSA, c&apos;est l&apos;alliance parfaite entre esprit
            d&apos;équipe, dynamisme et convivialité. Que vous soyez un joueur expérimenté à la
            recherche de compétition ou un débutant souhaitant découvrir les bases de ce sport
            collectif sans contact, nos sections masculine et féminine vous ouvrent leurs portes.
            Rejoignez une communauté passionnée où le respect, l&apos;entraide et le dépassement de
            soi sont au cœur du jeu !
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏐 Nos Sections</h3>
          <h4 className="rf-blocktitle">🤝 Volleyball Féminin</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour qui ?</strong>{" "}Ouvert aux joueuses de tous niveaux (débutantes,
              intermédiaires, confirmées).
            </li>
            <li>
              <strong>L&apos;esprit</strong>{" "}: Un groupe soudé qui progresse ensemble, axé sur la
              technique, la communication sur le terrain et le plaisir de jouer.
            </li>
            <li>
              <strong>Objectifs</strong>{" "}: Développer la cohésion d&apos;équipe, perfectionner les
              systèmes de jeu (3 touches de balle, construction de l&apos;attaque) et participer à
              des rencontres amicales ou des championnats locaux.
            </li>
          </ul>
          <h4 className="rf-blocktitle">🔥 Volleyball Masculin</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pour qui ?</strong>{" "}Ouvert aux joueurs de tous niveaux (loisir et
              compétition).
            </li>
            <li>
              <strong>L&apos;esprit</strong>{" "}: Intensité, dépassement athlétique et rigueur
              tactique, le tout dans une ambiance de franche camaraderie.
            </li>
            <li>
              <strong>Objectifs</strong>{" "}: Travail de la puissance (services, smashs), de la
              réactivité en défense (contres, réceptions) et engagement dans les compétitions de la
              saison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Pourquoi choisir le volley à l&apos;association KABSA ?
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un encadrement de qualité</strong>{" "}: Des entraînements structurés pour
              progresser techniquement (passes, manchettes, attaques).
            </li>
            <li>
              <strong>Une mixité de pratiques</strong>{" "}: Du loisir pur pour se détendre aux matchs
              compétitifs pour vibrer le week-end.
            </li>
            <li>
              <strong>Au-delà du sport</strong>{" "}: Des événements club, des tournois internes et des
              moments de partage après l&apos;effort.
            </li>
          </ul>
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
          <p className="lede">
            <strong>📅 Infos Pratiques &amp; Horaires</strong>{" "}: horaires communiqués à
            l&apos;inscription.
          </p>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚀 Prêt à fouler les terrains avec nous ?
          </h3>
          <p className="lede">
            <em>Profitez d&apos;une séance d&apos;essai gratuite !</em>{" "}Vous hésitez encore ? Venez
            tester un entraînement sans aucun engagement. Munissez-vous simplement de vos baskets
            d&apos;intérieur et de votre bonne humeur.
          </p>
          {contactCta}
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const comingSoonContent = <p className="lede tab-placeholder">Contenu à venir.</p>;

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "accessibilite", label: "Accessibilité & pratique", content: comingSoonContent },
    { id: "infrastructures", label: "Infrastructures", content: comingSoonContent },
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: horairesTarifsContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Volleyball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
