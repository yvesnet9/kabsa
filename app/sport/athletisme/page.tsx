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
          <h3 className="rf-blocktitle">
            🏃‍♂️ Athlétisme (Toutes Formes) — Masculin &amp; Féminin
          </h3>
          <p className="lede">
            Bienvenue dans la section Athlétisme de la KABSA ! Que vous cherchiez à repousser vos
            limites en compétition, à garder la forme ou simplement à partager le plaisir de courir,
            notre club accueille les femmes et les hommes de tous âges et de tous niveaux.
            L&apos;athlétisme à la KABSA, c&apos;est la diversité des disciplines alliée à un esprit
            de camaraderie unique.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">👟 Nos Différentes Pratiques</h3>
          <p className="lede">
            Pour que chacun trouve sa voie, nous déclinons l&apos;athlétisme sous toutes ses formes
            :
          </p>
          <h4 className="rf-blocktitle">1. L&apos;Athlétisme sur Piste (Stade)</h4>
          <p className="lede">
            Le cœur historique de notre discipline pour les amateurs de performance et de technique.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Courses</strong>{" "}: Sprint (100m, 200m, 400m), haies, demi-fond (800m, 1500m)
              et fond (5000m, 10 000m).
            </li>
            <li><strong>Sauts</strong>{" "}: Longueur, triple saut, hauteur et perche.</li>
            <li><strong>Lancers</strong>{" "}: Poids, disque, javelot et marteau.</li>
          </ul>
          <h4 className="rf-blocktitle">2. Le Hors-Stade &amp; Running</h4>
          <p className="lede">
            Pour le plaisir de courir en pleine nature ou sur route, en groupe et à votre rythme.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Courses sur route</strong>{" "}: Du 10 km au marathon, pour tous les défis.
            </li>
            <li>
              <strong>Trail &amp; Nature</strong>{" "}: Sorties en forêt, courses nature et dénivelés
              pour les amoureux des grands espaces.
            </li>
            <li>
              <strong>Cross-Country</strong>{" "}: La discipline hivernale par excellence pour renforcer
              le mental et l&apos;endurance.
            </li>
          </ul>
          <h4 className="rf-blocktitle">3. L&apos;Athlétisme Santé &amp; Forme</h4>
          <p className="lede">
            Parce que le sport est avant tout un vecteur de bien-être et de santé durable.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Marche Nordique</strong>{" "}: Une marche dynamique avec bâtons qui sollicite 80%
              des muscles du corps.
            </li>
            <li>
              <strong>Remise en forme &amp; Condition physique</strong>{" "}: Séances de PPG
              (Préparation Physique Générale), de cardio et de renforcement musculaire adaptées.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👥 Une Pratique Mixte et Inclusive</h3>
          <p className="lede">
            À la KABSA, la mixité est une force. Nos groupes d&apos;entraînement sont ouverts aux
            femmes et aux hommes, favorisant l&apos;entraide, le respect et l&apos;émulation
            collective.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Groupes de niveaux</strong>{" "}: Des débutants complets aux athlètes confirmés.
            </li>
            <li>
              <strong>Encadrement qualifié</strong>{" "}: Nos entraîneurs diplômés adaptent les séances
              aux capacités et aux objectifs de chacun(e).
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
            <strong>🗓️ Horaires &amp; Lieux d&apos;Entraînement</strong>{" "}: communiqués à
            l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📝 Comment nous rejoindre ?</h3>
          <p className="lede">Prêt(e) à enfiler vos baskets ? L&apos;inscription est simple !</p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Séance d&apos;essai</strong>{" "}: Venez tester gratuitement deux séances de votre
              choix.
            </li>
            <li>
              <strong>Documents requis</strong>{" "}: Un certificat médical de non-contre-indication à
              la pratique de l&apos;athlétisme (en compétition ou en loisir) et la fiche
              d&apos;inscription remplie.
            </li>
            <li>
              <strong>Tarifs</strong>{" "}: tarifs préférentiels pour les étudiants, les couples et les
              familles (détails communiqués à l&apos;inscription).
            </li>
          </ul>
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
        <h2>Athlétisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
