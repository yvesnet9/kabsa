"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function MaterielInfrastructuresAdaptesPage() {
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

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <p className="svc-chapo">
            Un environnement où athlètes valides et en situation de handicap
            s'entraînent côte à côte, avec les mêmes exigences de performance,
            de plaisir et de sécurité.
          </p>

          <h3 className="rf-blocktitle">
            Nos lieux d'entraînement : accessibles et partagés
          </h3>
          <ul className="lede">
            <li>
              <strong>Plateau de musculation et cardio inclusif</strong> :
              circulations élargies, sols antidérapants, accès de plain-pied.
            </li>
            <li>
              <strong>Pistes et terrains multisports modulables</strong> :
              revêtements adaptés à l'athlétisme, aux sports collectifs et aux
              fauteuils de compétition.
            </li>
            <li>
              <strong>Vestiaires et sanitaires universels</strong> : tables de
              change adaptées, douches à l'italienne avec assises amovibles,
              casiers à hauteurs variables.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Équipements spécialisés
          </h3>
          <ul className="lede">
            <li>
              <strong>Zone cardio &amp; renforcement</strong> : machines à
              charge guidée avec sièges amovibles, ergomètres haut du corps
              (handbikes), poulies et cages réglables.
            </li>
            <li>
              <strong>Matériel multisport &amp; capteurs</strong> : parc de
              fauteuils multisports de prêt, kits de cécifoot et d'animation
              sensorielle, systèmes d'aide au transfert (lève-personnes).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            L'accompagnement humain
          </h3>
          <p className="lede">
            Des éducateurs sportifs et préparateurs physiques formés à l'accueil
            du public en situation de handicap et à la préparation physique
            adaptée (APA). <em>« Ensemble sur le même terrain. »</em>
          </p>
        </div>
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
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          S'inscrire / Nous contacter
        </Link>
        <Link href="/dons" className="info-cta">
          Faire un don
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
        <h2>Matériel &amp; infrastructures adaptés</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
