"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function HalterophiliePage() {
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
        <p>Découvrez la section Haltérophilie de KABSA.</p>
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
        <h3>Compétitions</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Haltérophiles KABSA</h3>
        <p>Parcours des meilleurs haltérophiles, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">Haltérophilie — Masculin &amp; Féminin</h3>

          <p className="lede">
            <em>Dépasser ses limites, développer sa force.</em>
          </p>

          <p className="lede">Discipline olympique historique, l&apos;haltérophilie est un sport d&apos;une grande précision technique mêlant vitesse, souplesse, coordination et mental. Sculpter son corps, booster ses performances ou relever des défis en compétition : le club accompagne pas à pas.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Une pratique inclusive : pour elle &amp; pour lui</h3>

          <p className="lede">Un espace d&apos;entraide et de respect où chacun progresse à son rythme.</p>

          <ul className="lede">
            <li>
              <strong>Haltérophilie féminine</strong> : tonifier la silhouette, densifier la masse osseuse, développer une posture athlétique et une force fonctionnelle ; des débutantes aux compétitrices.
            </li>
            <li>
              <strong>Haltérophilie masculine</strong> : puissance musculaire globale, détente verticale, renforcement articulaire ; du novice à l&apos;athlète cherchant un transfert de force (combat, sprint, rugby…).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos deux mouvements phares</h3>

          <ul className="lede">
            <li>
              <strong>L&apos;arraché (snatch)</strong> : monter la barre au-dessus de la tête en un mouvement fluide.
            </li>
            <li>
              <strong>L&apos;épaulé-jeté (clean &amp; jerk)</strong> : barre aux épaules puis projetée à bout de bras.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Pourquoi choisir KABSA ?</h3>

          <ul className="lede">
            <li>
              <strong>Encadrement professionnel</strong> : postures corrigées en temps réel.
            </li>
            <li>
              <strong>Matériel de qualité</strong> : barres olympiques 15 kg femmes / 20 kg hommes, bumpers, plateaux dédiés.
            </li>
            <li>
              <strong>Progression sur-mesure</strong> : un suivi adapté à chaque athlète.
            </li>
            <li>
              <strong>Esprit de communauté</strong> : entraide et respect au quotidien.
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
          <h3 className="rf-blocktitle">Horaires &amp; lieu</h3>

          <p className="lede">Créneaux horaires et lieu communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Équipement requis</h3>

          <ul className="lede">
            <li>Tenue de sport confortable</li>
            <li>Chaussures à semelles plates (ou chaussures d&apos;haltérophilie)</li>
            <li>Motivation</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Séance d&apos;essai</h3>

          <p className="lede">Séance d&apos;essai gratuite.</p>

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
        <h2>Haltérophilie</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
