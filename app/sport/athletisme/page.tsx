"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function AthletismePage() {
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
        <p>Découvrez la section Athlétisme de KABSA.</p>
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
        <p>Meilleurs moments des courses et meetings.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Athlètes KABSA</h3>
        <p>Parcours des meilleurs athlètes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">Athlétisme (toutes formes) — Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans la section Athlétisme de KABSA. Compétition, forme ou simple plaisir de
            courir : le club accueille femmes et hommes de tous âges et de tous niveaux, dans la
            diversité des disciplines et un esprit de camaraderie.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos différentes pratiques</h3>
          <ul className="lede">
            <li>
              <strong>Athlétisme sur piste (stade)</strong> : courses (sprint 100/200/400 m, haies,
              demi-fond 800/1500 m, fond 5000/10 000 m), sauts (longueur, triple saut, hauteur,
              perche), lancers (poids, disque, javelot, marteau).
            </li>
            <li>
              <strong>Hors-stade &amp; running</strong> : courses sur route (du 10 km au marathon),
              trail &amp; nature, cross-country.
            </li>
            <li>
              <strong>Athlétisme santé &amp; forme</strong> : marche nordique, remise en forme (PPG,
              cardio, renforcement musculaire).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Une pratique mixte et inclusive</h3>
          <p className="lede">
            Groupes ouverts aux femmes et aux hommes, par niveaux (du débutant complet à
            l&apos;athlète confirmé), avec un encadrement diplômé qui adapte les séances aux
            objectifs de chacun(e).
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
          <h3 className="rf-blocktitle">Horaires &amp; lieux d&apos;entraînement</h3>
          <p className="lede">Communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Inscription</h3>
          <p className="lede">Deux séances d&apos;essai gratuites.</p>
          <ul className="lede">
            <li>Certificat médical de non-contre-indication (compétition ou loisir)</li>
            <li>Fiche d&apos;inscription</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>
          <p className="lede">
            Tarifs préférentiels pour les étudiants, les couples et les familles (détails
            communiqués à l&apos;inscription).
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
        <h2>Athlétisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
