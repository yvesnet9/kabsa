"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function CoachingNutritionnelPage() {
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
            Un accompagnement alimentaire au service de la santé et de la
            performance.
          </p>
          <p className="lede">
            Que vous cherchiez à booster votre énergie au quotidien, à gagner en
            vitalité, à reprendre le contrôle de votre poids ou à optimiser vos
            performances sportives, la nutrition est votre meilleur levier. Nous
            ne croyons pas aux régimes restrictifs ni aux solutions miracles :
            notre approche repose sur un accompagnement sur-mesure, durable et
            scientifiquement fondé, pour transformer vos habitudes sans
            frustration.
          </p>

          <h3 className="rf-blocktitle">
            Pourquoi choisir le coaching nutritionnel ?
          </h3>
          <ul className="lede">
            <li>
              <strong>Optimiser vos performances</strong> : endurance, force et
              récupération après l'effort.
            </li>
            <li>
              <strong>Préserver votre santé</strong> : système immunitaire,
              sommeil, clarté mentale.
            </li>
            <li>
              <strong>Atteindre votre poids de forme</strong> : sainement, sans
              effet yoyo, en phase avec votre métabolisme.
            </li>
            <li>
              <strong>Retrouver un confort digestif</strong> : fini les
              ballonnements et les baisses d'énergie après les repas.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Notre méthode en 3 étapes
          </h3>
          <ol className="lede">
            <li>
              <strong>Le bilan nutritionnel initial</strong> : entretien
              approfondi pour analyser vos habitudes, votre mode de vie et
              définir des objectifs clairs et mesurables.
            </li>
            <li>
              <strong>Le plan personnalisé</strong> : un protocole alimentaire
              adapté à vos besoins (macronutriments, menus d'inspiration, gestion
              des portions) qui s'intègre à votre quotidien.
            </li>
            <li>
              <strong>Le suivi &amp; l'évolution</strong> : sessions régulières
              pour ajuster le programme, surmonter les obstacles et ancrer de
              nouvelles habitudes durables.
            </li>
          </ol>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            À qui s'adresse cet accompagnement ?
          </h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Actifs &amp; dirigeants</h3>
              <p>
                Concentration, gestion du stress, énergie stable malgré des
                horaires chargés.
              </p>
            </div>
            <div className="info-card">
              <h3>Sportifs (amateurs ou compétiteurs)</h3>
              <p>
                Structurer la nutrition autour des entraînements et maximiser les
                résultats.
              </p>
            </div>
            <div className="info-card">
              <h3>Toute personne en quête de mieux-être</h3>
              <p>Faire de l'alimentation un pilier de sa santé.</p>
            </div>
          </div>
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
        <h2>Coaching nutritionnel</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
