"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function CyclismePage() {
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
        <p>Découvrez la section Cyclisme de KABSA.</p>
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
        <h3>Sorties &amp; courses</h3>
        <p>Meilleurs moments des sorties et compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Cyclistes KABSA</h3>
        <p>Parcours des meilleurs cyclistes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">Cyclisme — Masculin &amp; Féminin</h3>

          <p className="lede">Le vélo comme vecteur de rassemblement, de dépassement de soi et de mixité : hommes et femmes partagent la même passion de la route, de la piste ou des sentiers, quel que soit leur niveau — un cyclisme inclusif où la parité est une réalité à chaque coup de pédale.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Notre philosophie : rouler ensemble, sans distinction</h3>

          <ul className="lede">
            <li>
              <strong>Mixité sur la route</strong> : entraide, partage, convivialité.
            </li>
            <li>
              <strong>Équité dans l&apos;accompagnement</strong> : mêmes conseils, suivi et soutien logistique.
            </li>
            <li>
              <strong>Valorisation du cyclisme féminin</strong> : environnement sécurisant et stimulant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos activités &amp; entraînements</h3>

          <ul className="lede">
            <li>
              <strong>Sorties loisirs &amp; cyclotourisme</strong> : sorties hebdomadaires (week-end) par groupes de niveau, pour rouler ensemble et progresser à son rythme.
            </li>
            <li>
              <strong>Entraînements performance &amp; compétition</strong> : fractionné, travail de relance, techniques de peloton, gestion de l&apos;effort.
            </li>
            <li>
              <strong>Ateliers mécaniques &amp; sécurité</strong> : changer une chambre à air, régler son dérailleur, entretenir sa transmission, adopter les bons réflexes en groupe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos engagements pour la parité</h3>

          <ul className="lede">
            <li>Groupes de niveau homogènes (et non par genre)</li>
            <li>Parrains et marraines de club</li>
            <li>Participation paritaire aux événements et compétitions</li>
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
          <h3 className="rf-blocktitle">Horaires des sorties</h3>

          <p className="lede">Sorties hebdomadaires (généralement le week-end). Les horaires sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Inscription</h3>

          <p className="lede">Séance d&apos;essai possible. Le calendrier des sorties est communiqué aux adhérents.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>

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
        <h2>Cyclisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
