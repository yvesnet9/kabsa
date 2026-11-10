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
          <h3 className="rf-blocktitle">🥋 Arts Martiaux &amp; Sports de Combat</h3>
          <p className="lede">
            Bienvenue dans la section dédiée aux arts martiaux et sports de combat de
            l&apos;association KABSA. Nous proposons des disciplines adaptées à tous les niveaux,
            des débutants aux pratiquants confirmés, avec une approche inclusive et paritaire
            (sections masculines et féminines). Que votre objectif soit de vous remettre en forme,
            d&apos;apprendre à vous défendre, de canaliser votre énergie ou de progresser vers la
            compétition, nos entraîneurs certifiés vous accompagnent dans une ambiance respectueuse
            et sécurisée.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📋 Nos Disciplines</h3>
          <h4 className="rf-blocktitle">🥊 Boxe Pieds-Poings &amp; Kickboxing</h4>
          <p className="lede">
            Mélange parfait de techniques de frappe et de conditionnement physique intensif.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bénéfices</strong>{" "}: Cardio, endurance, renforcement musculaire et gestion du
              stress.
            </li>
            <li>
              <strong>Public</strong>{" "}: Ados et adultes (sections mixtes ou 100% féminines
              disponibles).
            </li>
          </ul>
          <h4 className="rf-blocktitle">🥋 Arts Martiaux Traditionnels (Karaté / Judo)</h4>
          <p className="lede">
            Apprentissage des techniques fondamentales, des katas/formes et du self-defense.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bénéfices</strong>{" "}: Discipline, souplesse, confiance en soi et respect des
              valeurs traditionnelles.
            </li>
            <li><strong>Public</strong>{" "}: Enfants, ados et adultes.</li>
          </ul>
          <h4 className="rf-blocktitle">🛡️ Self-Defense / Krav Maga</h4>
          <p className="lede">
            Techniques simples et réalistes pour apprendre à faire face aux situations
            d&apos;agression du quotidien.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Bénéfices</strong>{" "}: Réflexes, vigilance, gestion de la peur et confiance en
              soi.
            </li>
            <li>
              <strong>Focus Féminin</strong>{" "}: Ateliers spécifiques de self-defense féminine centrés
              sur les situations concrètes.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⚖️ Une Pratique pour Tous : Masculin &amp; Féminin
          </h3>
          <p className="lede">
            Chez KABSA, nous croyons que les sports de combat sont un formidable vecteur
            d&apos;égalité et de dépassement de soi. <em>Note : tous nos cours partagent le même
            niveau d&apos;exigence technique et le même respect des règles de sécurité, peu importe
            le genre.</em>
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
          <h3 className="rf-blocktitle">🗓️ Informations Pratiques &amp; Horaires</h3>
          <p className="lede">
            <em>Équipement requis :</em>{" "}tenue de sport confortable (ou kimono selon la discipline),
            protections (gants, protège-dents, protège-tibias) et bouteille d&apos;eau.
          </p>
          <p className="lede">
            <em>Séance d&apos;essai :</em>{" "}la première séance de découverte est gratuite !
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🕒 Planning des entraînements <em>(à confirmer)</em>
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Lundi &amp; Jeudi (19h30 - 21h00)</strong>{" "}: Kickboxing &amp; Boxe (sections
              Hommes / sections Femmes)
            </li>
            <li>
              <strong>Mercredi (18h00 - 19h30)</strong>{" "}: Arts Martiaux Traditionnels (mixte)
            </li>
            <li>
              <strong>Samedi (10h30 - 12h00)</strong>{" "}: Self-Defense &amp; Krav Maga (cours dédiés
              et mixtes)
            </li>
          </ul>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Rejoignez-nous !</h3>
          <p className="lede">
            Prêt(e) à monter sur le tatami ou sur le ring ? Contactez-nous dès aujourd&apos;hui pour
            réserver votre cours d&apos;essai gratuit.
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
        <h2>Arts martiaux &amp; sports de combat</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
