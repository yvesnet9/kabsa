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
          <h3 className="rf-blocktitle">Rugby — Masculin &amp; Féminin</h3>
          <p className="lede">
            <em>L&apos;esprit d&apos;équipe au cœur de KABSA.</em>
          </p>
          <p className="lede">
            Plus qu&apos;un sport, le rugby est une véritable école de vie. Joueur expérimenté ou
            débutante curieuse de toucher son premier ballon ovale : nos sections masculine et
            féminine vous ouvrent leurs portes, autour des mêmes valeurs — respect, solidarité,
            engagement et convivialité.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">La section masculine : force et stratégie</h3>
          <p className="lede">
            Un projet sportif commun pour développer le potentiel de chaque joueur en visant
            l&apos;excellence collective.
          </p>
          <ul className="lede">
            <li>
              <strong>Esprit de corps</strong> : un groupe soudé où les anciens guident les plus
              jeunes.
            </li>
            <li>
              <strong>Encadrement de qualité</strong> : des entraîneurs diplômés (technique,
              condition physique, vision du jeu).
            </li>
            <li>
              <strong>Compétition et plaisir</strong> : des entraînements rigoureux en semaine, sans
              oublier la troisième mi-temps.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            La section féminine : passion et détermination
          </h3>
          <p className="lede">
            Le rugby féminin est en plein essor, et KABSA en est un fier promoteur. Toutes les
            joueuses sont accueillies dans une ambiance dynamique et bienveillante.
          </p>
          <ul className="lede">
            <li>
              <strong>Inclusion et progression</strong> : que vous veniez du crossfit, du handball ou
              que vous débutiez, le programme s&apos;adapte à votre rythme.
            </li>
            <li>
              <strong>Sororité et solidarité</strong> : une équipe unie sur le terrain comme en
              dehors.
            </li>
            <li>
              <strong>Ambition sportive</strong> : des entraînements tactiques et physiques pour
              s&apos;imposer en championnat.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Le rugby pour tous : nos engagements</h3>
          <ul className="lede">
            <li>
              <strong>Mixité des cultures</strong> : un lieu d&apos;échange et de partage.
            </li>
            <li>
              <strong>Respect du jeu</strong> : tolérance zéro pour la violence ; priorité au beau jeu
              et au respect de l&apos;arbitre.
            </li>
            <li>
              <strong>Événements communs</strong> : stages de cohésion, tournois de rugby à toucher,
              soirées de l&apos;association.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Comment nous rejoindre ?</h3>
          <p className="lede">
            Les deux séances d&apos;essai sont gratuites : munissez-vous d&apos;une paire de
            crampons, d&apos;un protège-dents et de votre motivation.
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
          <h3 className="rf-blocktitle">Horaires des entraînements</h3>
          <p className="lede">
            Les horaires sont communiqués à l&apos;inscription. Merci d&apos;arriver 15 minutes avant
            le début de la séance pour l&apos;échauffement.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>
          <p className="lede">Les tarifs sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Séances d&apos;essai</h3>
          <p className="lede">
            Les deux séances d&apos;essai sont gratuites : munissez-vous d&apos;une paire de
            crampons, d&apos;un protège-dents et de votre motivation.
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
        <h2>Rugby</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
