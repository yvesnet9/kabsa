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
          <h3 className="rf-blocktitle">
            🏋️‍♂️ Haltérophilie Masculin &amp; Féminin — Dépasser ses limites, développer sa force
          </h3>
          <p className="lede">
            Bienvenue dans la section Haltérophilie de l&apos;association KABSA ! Discipline
            olympique historique, l&apos;haltérophilie est bien plus qu&apos;une simple
            démonstration de force brute. C&apos;est un sport d&apos;une immense précision
            technique, mêlant vitesse, souplesse, coordination et mental d&apos;acier. Que vous
            cherchiez à sculpter votre corps, à booster vos performances athlétiques ou à relever
            des défis en compétition, notre club vous accompagne pas à pas.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Une pratique inclusive : Pour Elle &amp; Pour Lui
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous croyons fermement que les barres de musculation
            n&apos;ont pas de genre. Notre salle est un espace d&apos;entraide et de respect où
            chacun progresse à son rythme.
          </p>
          <h4 className="rf-blocktitle">👩 Haltérophilie Féminine : Brisez les clichés !</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les bénéfices</strong>{" "}: Contrairement aux idées reçues, l&apos;haltérophilie
              ne vous « épaissira » pas massivement. Elle permet de tonifier la silhouette, de
              densifier la masse osseuse, de brûler des calories et de développer une posture
              athlétique et confiante.
            </li>
            <li>
              <strong>Pour qui ?</strong>{" "}Des débutantes aux compétitrices. C&apos;est le sport
              idéal pour se réapproprier son corps et développer une force fonctionnelle
              impressionnante.
            </li>
          </ul>
          <h4 className="rf-blocktitle">👨 Haltérophilie Masculine : Force et explosion</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les bénéfices</strong>{" "}: Développez une puissance musculaire globale,
              améliorez votre détente verticale, renforcez vos articulations et optimisez votre
              condition physique générale.
            </li>
            <li>
              <strong>Pour qui ?</strong>{" "}Que vous soyez novice ou athlète cherchant un transfert de
              force pour un autre sport (sport de combat, sprint, rugby…), vous trouverez ici un
              cadre rigoureux pour progresser.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Nos deux mouvements phares</h3>
          <p className="lede">
            L&apos;haltérophilie repose sur la maîtrise de deux mouvements olympiques passionnants :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;Arraché (Snatch)</strong>{" "}: Le mouvement le plus technique. Il consiste
              à monter la barre directement au-dessus de la tête en un seul mouvement fluide et
              rapide.
            </li>
            <li>
              <strong>L&apos;Épaulé-Jeté (Clean &amp; Jerk)</strong>{" "}: Le mouvement de la force
              maximale. La barre est d&apos;abord amenée aux épaules (l&apos;épaulé) avant
              d&apos;être projetée à bout de bras au-dessus de la tête (le jeté).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎒 Pourquoi choisir l&apos;Association KABSA ?
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Encadrement professionnel</strong>{" "}: Nos entraîneurs diplômés corrigent vos
              postures en temps réel pour une pratique 100% sécurisée.
            </li>
            <li>
              <strong>Matériel de qualité</strong>{" "}: Barres olympiques adaptées (barres de 15 kg
              pour les femmes, 20 kg pour les hommes), disques de compétition en caoutchouc
              (bumpers) et plateaux d&apos;haltérophilie dédiés.
            </li>
            <li>
              <strong>Progression sur-mesure</strong>{" "}: Des séances adaptées à votre niveau, que
              vous n&apos;ayez jamais touché une barre de votre vie ou que vous visiez les podiums
              nationaux.
            </li>
            <li>
              <strong>Esprit de communauté</strong>{" "}: Chez KABSA, on s&apos;encourage, on célèbre
              les records personnels de chacun et on progresse ensemble dans la bonne humeur.
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
          <h3 className="rf-blocktitle">🗓️ Informations Pratiques</h3>
          <ul className="lede disc-arrow-list">
            <li><strong>Créneaux horaires</strong>{" "}: communiqués à l&apos;inscription.</li>
            <li><strong>Lieu</strong>{" "}: communiqué à l&apos;inscription.</li>
            <li>
              <strong>Équipement requis</strong>{" "}: une tenue de sport confortable, des chaussures à
              semelles plates (ou chaussures d&apos;haltérophilie) et votre motivation !
            </li>
          </ul>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ✨ Prêt(e) à soulever votre premier poids ?
          </h3>
          <p className="lede">
            Venez tester la discipline lors d&apos;une séance d&apos;essai gratuite ! Les coachs et
            les adhérents KABSA vous attendent sur le plateau.
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
        <h2>Haltérophilie</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
