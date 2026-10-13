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
          <h3 className="rf-blocktitle">Volleyball — Masculin &amp; Féminin</h3>
          <p className="lede">
            Le volleyball chez KABSA, c&apos;est l&apos;alliance de l&apos;esprit d&apos;équipe, du
            dynamisme et de la convivialité. Joueur expérimenté en quête de compétition ou débutant
            souhaitant découvrir les bases de ce sport collectif sans contact : nos sections
            masculine et féminine vous ouvrent leurs portes. Une communauté passionnée où le respect,
            l&apos;entraide et le dépassement de soi sont au cœur du jeu.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Volleyball féminin</h3>
          <ul className="lede">
            <li>
              <strong>Pour qui ?</strong> Joueuses de tous niveaux (débutantes, intermédiaires,
              confirmées).
            </li>
            <li>
              <strong>L&apos;esprit</strong> : un groupe soudé qui progresse ensemble, axé sur la
              technique, la communication sur le terrain et le plaisir de jouer.
            </li>
            <li>
              <strong>Objectifs</strong> : cohésion d&apos;équipe, perfectionnement des systèmes de
              jeu (3 touches de balle, construction de l&apos;attaque), rencontres amicales ou
              championnats locaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Volleyball masculin</h3>
          <ul className="lede">
            <li>
              <strong>Pour qui ?</strong> Joueurs de tous niveaux (loisir et compétition).
            </li>
            <li>
              <strong>L&apos;esprit</strong> : intensité, dépassement athlétique et rigueur tactique,
              dans une ambiance de franche camaraderie.
            </li>
            <li>
              <strong>Objectifs</strong> : travail de la puissance (services, smashs), de la
              réactivité en défense (contres, réceptions) et engagement dans les compétitions de la
              saison.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Pourquoi choisir le volley à KABSA ?</h3>
          <ul className="lede">
            <li>
              <strong>Un encadrement de qualité</strong> : des entraînements structurés pour
              progresser (passes, manchettes, attaques).
            </li>
            <li>
              <strong>Une mixité de pratiques</strong> : du loisir pur aux matchs compétitifs.
            </li>
            <li>
              <strong>Au-delà du sport</strong> : événements club, tournois internes et moments de
              partage après l&apos;effort.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Comment nous rejoindre ?</h3>
          <p className="lede">
            Profitez d&apos;une séance d&apos;essai gratuite : venez tester un entraînement sans
            engagement, munissez-vous de vos baskets d&apos;intérieur et de votre bonne humeur.
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
          <h3 className="rf-blocktitle">Horaires des entraînements</h3>
          <p className="lede">Les horaires sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>
          <p className="lede">Les tarifs sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Séance d&apos;essai</h3>
          <p className="lede">
            Profitez d&apos;une séance d&apos;essai gratuite : venez tester un entraînement sans
            engagement, munissez-vous de vos baskets d&apos;intérieur et de votre bonne humeur.
          </p>
        </div>

        {mediaColumn}
      </div>

      {contactCta}
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
