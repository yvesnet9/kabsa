"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function PilotagePage() {
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
        <p>Découvrez la section Pilotage de KABSA.</p>
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
        <h3>Circuits &amp; roulages</h3>
        <p>Meilleurs moments sur piste.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Pilotes KABSA</h3>
        <p>Parcours des meilleurs pilotes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">Pilotage auto &amp; moto — Masculin &amp; Féminin</h3>

          <p className="lede">
            <em>Le sens du partage et de la performance.</em>
          </p>

          <p className="lede">Dans l&apos;univers des sports mécaniques de KABSA, le pilotage va au-delà de la vitesse : une école de maîtrise, de discipline et de passion partagée, pour le pilote chevronné comme pour le débutant.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">La mixité au cœur des circuits</h3>

          <ul className="lede">
            <li>
              <strong>Pilotage féminin</strong> : sessions, stages et ateliers pour encourager les femmes à prendre le volant ou le guidon.
            </li>
            <li>
              <strong>Pilotage masculin</strong> : camaraderie, perfectionnement technique, respect mutuel.
            </li>
            <li>
              <strong>Événements mixtes</strong> : journées de roulage, endurances, challenges karting.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section automobile</h3>

          <ul className="lede">
            <li>
              <strong>Baptêmes de piste</strong> : en passager aux côtés de pilotes instructeurs.
            </li>
            <li>
              <strong>Stages de perfectionnement</strong> : trajectoire, freinage dégressif, gestion du regard.
            </li>
            <li>
              <strong>Sorties trackdays</strong> : rouler sur circuit en toute sécurité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section moto</h3>

          <ul className="lede">
            <li>
              <strong>Initiation au guidon</strong> : sur espace sécurisé.
            </li>
            <li>
              <strong>Pilotage sur circuit</strong> : déhanché, positionnement, dynamique en courbe.
            </li>
            <li>
              <strong>Ateliers sécurité &amp; mécanique</strong> : entretien de base, réglages de suspensions.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Pourquoi rejoindre la team KABSA ?</h3>

          <ul className="lede">
            <li>
              <strong>Encadrement bienveillant</strong> : passionnés expérimentés et professionnels certifiés, sécurité prioritaire.
            </li>
            <li>
              <strong>Esprit de club</strong> : entraide dans les stands.
            </li>
            <li>
              <strong>Accessibilité financière</strong> : tarifs avantageux négociés grâce à nos partenaires.
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
          <h3 className="rf-blocktitle">Horaires &amp; calendrier</h3>

          <p className="lede">Sessions, stages et journées de roulage. Le calendrier et les horaires sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>

          <p className="lede">Tarifs avantageux grâce à nos partenaires, communiqués à l&apos;inscription.</p>
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
        <h2>Pilotage auto &amp; moto</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
