"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function BasketballPage() {
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
        <p>Découvrez le pôle Basketball de KABSA.</p>
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
          <h3 className="rf-blocktitle">Basketball — Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié aux pôles compétitifs et loisirs de KABSA. Le club
            développe le basketball à tous les niveaux, en garantissant parité et opportunités égales
            pour les basketteurs et les basketteuses. Compétition de haut niveau ou pratique
            récréative : vous trouverez l&apos;équipe qui vous correspond.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Pôle féminin</h3>
          <p className="lede">L&apos;esprit d&apos;équipe, l&apos;ambition et le dépassement de soi.</p>
          <ul className="lede">
            <li>
              <strong>Seniors Dames (compétition)</strong> : équipe première engagée en championnat
              régional, objectif play-offs.
            </li>
            <li>
              <strong>U19 / U16 Filles (jeunes)</strong> : formation technique avancée, transition
              vers le niveau adulte.
            </li>
            <li>
              <strong>Basket loisir / écoles de basket</strong> : apprendre les bases ou
              s&apos;entretenir sans la pression des matchs officiels.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Pôle masculin</h3>
          <p className="lede">
            Du perfectionnement des jeunes à l&apos;expérience des seniors, un cadre structuré pour
            progresser et performer.
          </p>
          <ul className="lede">
            <li>
              <strong>Seniors Messieurs (compétition)</strong> : équipes engagées en divisions
              régionales et provinciales.
            </li>
            <li>
              <strong>U21 / U18 / U14 Garçons</strong> : championnats de jeunes axés sur le
              développement des compétences.
            </li>
            <li>
              <strong>Anciens / loisirs</strong> : 5x5 ou 3x3 dans une ambiance conviviale.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Rejoignez l&apos;aventure KABSA</h3>
          <p className="lede">
            Essai gratuit, bénévolat, encadrement ou partenariat : contactez-nous.
          </p>
          <p className="lede">Calendrier des matchs : à venir.</p>
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
          <p className="lede">
            Les entraînements se déroulent toute la semaine dans nos installations partenaires. Les
            horaires sont communiqués à l&apos;inscription (planning détaillé par catégorie : jours,
            heures, salles).
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>
          <p className="lede">
            Les tarifs sont communiqués à l&apos;inscription (licence compétition / licence
            loisir-académie, incluant assurance, équipement selon formule et accès aux
            entraînements).
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
        <h2>Basketball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
