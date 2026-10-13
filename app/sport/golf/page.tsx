"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function GolfPage() {
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
        <p>Découvrez la section Golf de KABSA.</p>
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
        <h3>Compétitions &amp; tournois</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Golfeurs &amp; golfeuses KABSA</h3>
        <p>Parcours des meilleurs golfeurs et golfeuses.</p>
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
          <h3 className="rf-blocktitle">Golf — Masculin &amp; Féminin</h3>

          <p className="lede">Joueur chevronné en quête de compétition ou débutante désireuse d&apos;apprendre : la section Golf de KABSA propose un encadrement adapté, des événements conviviaux et une communauté passionnée.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section masculine — performance &amp; camaraderie</h3>

          <ul className="lede">
            <li>
              <strong>Entraînements et clinics</strong> : swing, putting, stratégie.
            </li>
            <li>
              <strong>Compétitions internes</strong> : Stroke Play, Stableford, Match Play.
            </li>
            <li>
              <strong>Rencontres interclubs</strong> : et sorties « découverte ».
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section féminine — dynamisme &amp; partage</h3>

          <ul className="lede">
            <li>
              <strong>Ladies&apos; Days</strong> : des journées dédiées aux golfeuses.
            </li>
            <li>
              <strong>Programmes d&apos;initiation</strong> : formules débutante, prêt de matériel, accès accompagné.
            </li>
            <li>
              <strong>Ateliers confiance</strong> : bunkers, jeu court, règles officielles.
            </li>
            <li>
              <strong>Trophée Féminin KABSA</strong> : la compétition phare de la section.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Événements mixtes &amp; vie du club</h3>

          <ul className="lede">
            <li>Scramble en double mixte</li>
            <li>Grand Prix KABSA</li>
            <li>Sorties de rentrée et de fin d&apos;année</li>
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
          <h3 className="rf-blocktitle">Adhésion</h3>

          <p className="lede">Adhésion ouverte à tous les membres de KABSA.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Licence et handicap</h3>

          <p className="lede">Accompagnement pour l&apos;obtention de la licence et le suivi de l&apos;index (système WHS).</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Partenariats</h3>

          <p className="lede">Tarifs préférentiels sur les green fees des clubs partenaires et réductions dans des pro-shops de la région.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Horaires et tarifs</h3>

          <p className="lede">Communiqués à l&apos;inscription.</p>
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
        <h2>Golf</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
