"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function EducationFinancierePage() {
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
      { threshold: 0.12 },
    );
    document.querySelectorAll(".kabsa .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mediaColumn = (
    <aside className="disc-media">
      <div className="info-card">
        <h3>Présentation</h3>
        <p>Vidéo de présentation du service.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Démonstration</h3>
        <p>Démonstration en conditions réelles.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Séance type</h3>
        <p>Déroulé d&apos;une séance type.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Témoignages</h3>
        <p>Retours de pratiquants.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts en images.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🎓💰 Éducation financière : Préparer l&apos;autonomie et la pérennité de nos athlètes
          </h3>
          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), former un champion ne se limite pas à
            l&apos;entraînement physique et tactique. Parce que l&apos;accès au sport
            professionnel et aux compétitions internationales s&apos;accompagne de revenus
            spécifiques (primes de victoire, bourses, contrats de sponsoring) et que la gestion
            du budget est un levier essentiel d&apos;autonomie sociale, KABSA intègre un
            programme d&apos;éducation financière dédié à ses jeunes athlètes (de 15 à 25 ans) —
            valides 🏃‍♂️ et en situation de handicap physique ♿.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre vision : La maîtrise financière au service de la performance
          </h3>
          <p className="lede">
            Dans le monde sportif actuel, les compétitions majeures offrent des primes qui
            attirent de nombreux jeunes talents vers le professionnalisme. Cependant, une
            carrière sportive est exigeante et comporte des aléas. L&apos;objectif de KABSA est
            de donner à chaque membre les clés pour comprendre, protéger et faire fructifier ses
            ressources :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Favoriser l&apos;autonomie et l&apos;inclusion sociale (♿ &amp;
              🏃‍♂️)</strong>{" "}: Permettre aux jeunes sportifs, souvent confrontés à des budgets
              serrés, d&apos;acquérir des bases solides pour gérer leur quotidien en toute
              indépendance.
            </li>
            <li>
              <strong>Prévenir les risques liés au sport professionnel</strong>{" "}: Sensibiliser
              nos talents dès leur plus jeune âge à la gestion responsable des gains, afin
              d&apos;éviter les pièges financiers et de préparer leur avenir pendant et après
              leur carrière.
            </li>
            <li>
              <strong>Comprendre l&apos;écosystème économique du sport</strong>{" "}: Apprendre aux
              athlètes comment fonctionnent les financements sportifs (cotisations, subsides
              publics, mécénat d&apos;entreprise et contrats privés).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📚💡 Les modules du programme d&apos;éducation financière KABSA
          </h3>
          <p className="lede">
            Animés avec l&apos;appui de notre réseau d&apos;experts juridiques et financiers,
            nos ateliers pratiques s&apos;articulent autour de quatre thématiques essentielles :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Gestion du budget quotidien et épargne 💳
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Maîtriser ses revenus et ses dépenses</strong>{" "}: Apprendre à établir un
              budget personnel simple, anticiper les frais liés à la pratique sportive
              (équipement, déplacements, alimentation adaptée) et cultiver une épargne de
              précaution.
            </li>
            <li>
              <strong>Comprendre les dispositifs d&apos;aide et de solidarité</strong>{" "}:
              Informer les athlètes et leurs familles sur les tarifs solidaires, les aides
              publiques et les mécanismes de soutien accessibles en Belgique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Gestion des primes de compétition et revenus sportifs 🏆
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Gérer les gains variables</strong>{" "}: Apprendre à planifier sur le long
              terme les revenus irréguliers issus des primes de tournois, des indemnités de
              match ou des contrats de performance.
            </li>
            <li>
              <strong>Fiscalité et statut du sportif en Belgique</strong>{" "}: Découvrir les
              notions de base liées au statut administratif et fiscal du sportif amateur,
              semi-professionnel ou professionnel, avec l&apos;éclairage de nos experts
              juridiques.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Sponsoring, partenariats et valorisation personnelle 🤝
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Comprendre la valeur de son image</strong>{" "}: Apprendre comment les
              entreprises financent les athlètes via le sponsoring et la Responsabilité
              Sociétale des Entreprises (RSE).
            </li>
            <li>
              <strong>Construire et présenter un dossier de sponsoring</strong>{" "}: Accompagner
              les jeunes talents dans la préparation de leur présentation personnelle (avec
              l&apos;appui de leurs vidéos sur KA TV Sport) pour convaincre des partenaires
              privés.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            4. Préparation de la reconversion et projets d&apos;avenir 🚀
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le double projet (Sport &amp; Études/Emploi)</strong>{" "}: Encourager chaque
              athlète à investir dans sa formation scolaire, universitaire ou professionnelle en
              parallèle de sa carrière sportive.
            </li>
            <li>
              <strong>Investir dans son avenir</strong>{" "}: Sensibiliser aux bases de
              l&apos;entrepreneuriat sportif (devenir coach, préparateur physique, gestionnaire
              de club ou ambassadeur associatif) pour assurer une transition sereine après le
              haut niveau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎥📺 Des ressources pédagogiques accessibles à tous
          </h3>
          <p className="lede">
            Pour toucher l&apos;ensemble de la communauté, KABSA prévoit des capsules
            pédagogiques courtes et dynamiques sur sa chaîne KA TV Sport (YouTube, TikTok et
            réseaux sociaux) : conseils pratiques, témoignages de sportifs et décryptages
            simples pour faire de l&apos;éducation financière un pilier de la réussite.
          </p>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Nous contacter
        </Link>
      </div>
    </>
  );

  const comingSoonContent = (
    <p className="lede tab-placeholder">Contenu à venir.</p>
  );

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "deroulement", label: "Déroulement", content: comingSoonContent },
    {
      id: "tarifs-formules",
      label: "Tarifs & formules",
      content: comingSoonContent,
    },
    { id: "temoignages", label: "Témoignages", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Éducation financière</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
