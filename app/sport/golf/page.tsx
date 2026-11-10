"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function GolfPage() {
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
        <p>Découvrez la section Golf de KABSA.</p>
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
        <h3>Compétitions &amp; tournois</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Golfeurs &amp; golfeuses KABSA</h3>
        <p>Parcours des meilleurs golfeurs et golfeuses.</p>
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
          <h3 className="rf-blocktitle">⛳ Golf Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié au golf chez KABSA. Que vous soyez un joueur
            chevronné à la recherche de compétition ou une débutante désireuse d&apos;apprendre les
            bases de ce sport passionnant, notre section Golf vous propose un encadrement adapté,
            des événements conviviaux et une communauté passionnée.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Section Masculine : Performance &amp; Camaraderie
          </h3>
          <p className="lede">
            La section masculine de KABSA rassemble des golfeurs de tous horizons autour de valeurs
            de dépassement de soi et de convivialité. Nous organisons des activités régulières pour
            permettre à chacun de progresser à son rythme.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Entraînements et Clinics</strong>{" "}: Des sessions collectives animées par des
              professionnels pour perfectionner votre swing, votre putting et votre stratégie de
              parcours.
            </li>
            <li>
              <strong>Compétitions Internes</strong>{" "}: Participez à nos tournois mensuels (Stroke
              Play, Stableford, Match Play) adaptés à tous les index.
            </li>
            <li>
              <strong>Rencontres Interclubs</strong>{" "}: Représentez les couleurs de KABSA lors de
              rencontres amicales et de championnats régionaux contre d&apos;autres associations.
            </li>
            <li>
              <strong>Sorties « Découverte »</strong>{" "}: Des voyages et des week-ends golfiques
              organisés pour fouler les plus beaux parcours du pays.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👑 Section Féminine : Dynamisme &amp; Partage
          </h3>
          <p className="lede">
            Le golf au féminin est en plein essor chez KABSA ! Notre section offre un environnement
            bienveillant, stimulant et chaleureux pour encourager la pratique du golf chez les
            femmes, quel que soit leur niveau.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Ladies&apos; Days</strong>{" "}: Des journées exclusivement réservées aux
              joueuses, combinant parcours de golf, ateliers thématiques et moments de réseautage
              (lunchs, networking).
            </li>
            <li>
              <strong>Programmes d&apos;Initiation</strong>{" "}: Des formules « Débutante » pour
              apprendre le golf sans pression, incluant le prêt de matériel et l&apos;accès
              accompagné au parcours.
            </li>
            <li>
              <strong>Ateliers Confiance</strong>{" "}: Sessions spécifiques pour vaincre
              l&apos;appréhension des bunkers, optimiser le jeu court et maîtriser les Règles
              Officielles du Golf.
            </li>
            <li>
              <strong>Trophée Féminin KABSA</strong>{" "}: Notre grand rendez-vous annuel qui célèbre le
              talent, l&apos;élégance et la sportivité de nos membres féminines.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏆 Événements Mixtes &amp; Vie du Club</h3>
          <p className="lede">
            Parce que le golf est avant tout un sport de partage, KABSA met un point d&apos;honneur
            à organiser des événements mixtes où hommes et femmes partagent la même passion.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Scramble en Double Mixte</strong>{" "}: Une formule de jeu ludique et stratégique
              où la cohésion d&apos;équipe fait toute la différence.
            </li>
            <li>
              <strong>Le Grand Prix KABSA</strong>{" "}: Le point d&apos;orgue de notre saison sportive,
              ouvert à tous les membres, suivi d&apos;un dîner de gala et de la remise des prix.
            </li>
            <li>
              <strong>Sorties de Rentrée et de Fin d&apos;Année</strong>{" "}: Des journées conviviales
              pour célébrer les réussites de la saison.
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
          <h3 className="rf-blocktitle">🛠️ Informations Pratiques &amp; Inscriptions</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Comment nous rejoindre ?</strong>{" "}L&apos;adhésion à la section Golf est
              ouverte à tous les membres de l&apos;association KABSA.
            </li>
            <li>
              <strong>Licence et Handicap</strong>{" "}: Nous vous accompagnons dans les démarches
              administratives pour l&apos;obtention de votre licence et le suivi de votre index
              (système de calcul WHS).
            </li>
            <li>
              <strong>Partenariats</strong>{" "}: Profitez de tarifs préférentiels sur les green fees de
              nos clubs partenaires et des réductions exclusives dans plusieurs pro-shops de la
              région.
            </li>
          </ul>
          <p className="lede">Horaires et tarifs communiqués à l&apos;inscription.</p>
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
        <h2>Golf</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
