"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function RugbyPage() {
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
        <p>Découvrez les sections Rugby de KABSA.</p>
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
          <h3 className="rf-blocktitle">
            🏉 Rugby Masculin &amp; Féminin — L&apos;Esprit d&apos;Équipe au Cœur de KABSA
          </h3>
          <p className="lede">
            Bienvenue dans la section Rugby de l&apos;association KABSA ! Plus qu&apos;un sport, le
            rugby est pour nous une véritable école de vie. Que vous soyez un joueur expérimenté ou
            une débutante curieuse de toucher son premier ballon ovale, nos sections masculine et
            féminine vous ouvrent leurs portes. Nous partageons tous les mêmes valeurs : Respect,
            Solidarité, Engagement et Convivialité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚹 La Section Masculine : Force et Stratégie
          </h3>
          <p className="lede">
            La section masculine de KABSA rassemble des passionnés de tous horizons autour d&apos;un
            projet sportif commun. Notre objectif ? Développer le potentiel de chaque joueur tout en
            visant l&apos;excellence collective lors des compétitions.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Esprit de corps</strong>{" "}: Un groupe soudé où les anciens guident les plus
              jeunes.
            </li>
            <li>
              <strong>Encadrement de qualité</strong>{" "}: Des entraîneurs diplômés pour parfaire votre
              technique, votre condition physique et votre vision du jeu.
            </li>
            <li>
              <strong>Compétition et plaisir</strong>{" "}: Des entraînements rigoureux en semaine pour
              briller le week-end, sans jamais oublier la fameuse troisième mi-temps.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🚺 La Section Féminine : Passion et Détermination
          </h3>
          <p className="lede">
            Le rugby féminin est en plein essor, et KABSA en est un fier promoteur ! Notre section
            féminine accueille les joueuses de tous niveaux dans une ambiance dynamique,
            bienveillante et résolument compétitive.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Inclusion et progression</strong>{" "}: Que vous veniez du crossfit, du handball
              ou que vous n&apos;ayez jamais fait de sport, notre programme s&apos;adapte à votre
              rythme.
            </li>
            <li>
              <strong>Sororité et solidarité</strong>{" "}: Une équipe unie sur le terrain comme en
              dehors, basée sur l&apos;entraide et le dépassement de soi.
            </li>
            <li>
              <strong>Ambition sportive</strong>{" "}: Des entraînements tactiques et physiques pour
              s&apos;imposer dans notre championnat et porter haut les couleurs de
              l&apos;association.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Le Rugby pour Tous : Nos Engagements</h3>
          <p className="lede">
            Chez KABSA, nous croyons en un rugby moderne et accessible. Nos sections partagent :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>La mixité des cultures</strong>{" "}: Le club est un lieu d&apos;échange et de
              partage.
            </li>
            <li>
              <strong>Le respect du jeu</strong>{" "}: Tolérance zéro pour la violence ; priorité au
              beau jeu et au respect de l&apos;arbitre.
            </li>
            <li>
              <strong>Des événements communs</strong>{" "}: Stages de cohésion, tournois mixtes de rugby
              à toucher et soirées de l&apos;association pour souder toute la famille KABSA.
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
          <h3 className="rf-blocktitle">📅 Infos Pratiques &amp; Horaires</h3>
          <p className="lede">
            <em>Note : merci d&apos;arriver 15 minutes avant le début de la séance pour
            l&apos;échauffement.</em>{" "}Horaires communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚀 Prêt(e) à Rejoindre la Mêlée ?</h3>
          <p className="lede">
            Les <strong>deux séances d&apos;essai sont gratuites</strong>{" "}! Munissez-vous simplement
            d&apos;une paire de crampons, d&apos;un protège-dents et de votre motivation.
          </p>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>
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
        <h2>Rugby</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
