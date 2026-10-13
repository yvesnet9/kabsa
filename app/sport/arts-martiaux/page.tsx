"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function ArtsMartiauxPage() {
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
        <p>Découvrez la section Arts martiaux de KABSA.</p>
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
        <h3>Combats &amp; compétitions</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Combattants KABSA</h3>
        <p>Parcours des meilleurs combattants et combattantes.</p>
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
          <h3 className="rf-blocktitle">Arts martiaux &amp; sports de combat — Masculin &amp; Féminin</h3>

          <p className="lede">Des disciplines adaptées à tous les niveaux, des débutants aux confirmés, dans une approche inclusive et paritaire. Remise en forme, self-defense, canalisation de l&apos;énergie ou compétition : des entraîneurs certifiés accompagnent dans une ambiance respectueuse et sécurisée.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos disciplines</h3>

          <ul className="lede">
            <li>
              <strong>Boxe pieds-poings &amp; kickboxing</strong> : techniques de frappe et conditionnement physique ; cardio, endurance, renforcement, gestion du stress ; ados et adultes (sections mixtes ou 100 % féminines).
            </li>
            <li>
              <strong>Arts martiaux traditionnels (karaté / judo)</strong> : techniques fondamentales, katas/formes, self-defense ; discipline, souplesse, confiance en soi ; enfants, ados et adultes.
            </li>
            <li>
              <strong>Self-defense / Krav Maga</strong> : techniques simples et réalistes face aux agressions du quotidien ; réflexes, vigilance, gestion de la peur ; ateliers spécifiques de self-defense féminine.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Une pratique pour tous : masculin &amp; féminin</h3>

          <p className="lede">Même niveau d&apos;exigence technique et même respect des règles de sécurité, quel que soit le genre.</p>
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
          <h3 className="rf-blocktitle">Planning des entraînements (à confirmer)</h3>

          <ul className="lede">
            <li>
              <strong>Lundi &amp; jeudi 19h30–21h00</strong> : kickboxing &amp; boxe (sections hommes / sections femmes).
            </li>
            <li>
              <strong>Mercredi 18h00–19h30</strong> : arts martiaux traditionnels (mixte).
            </li>
            <li>
              <strong>Samedi 10h30–12h00</strong> : self-defense &amp; Krav Maga (cours dédiés et mixtes).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Équipement requis</h3>

          <ul className="lede">
            <li>Tenue de sport confortable (ou kimono selon la discipline)</li>
            <li>Protections (gants, protège-dents, protège-tibias)</li>
            <li>Bouteille d&apos;eau</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Séance d&apos;essai</h3>

          <p className="lede">Première séance de découverte gratuite.</p>

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
        <h2>Arts martiaux &amp; sports de combat</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
