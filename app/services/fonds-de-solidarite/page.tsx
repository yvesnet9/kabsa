"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function FondsDeSolidaritePage() {
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
          <p className="svc-chapo">Ensemble pour le sport.</p>
          <p className="lede">
            Le sport est une école de vie, mais le parcours d'un athlète est
            rarement linéaire : blessures, injustices sportives, précarité,
            reconversion… Face aux aléas, aucun sportif ne devrait marcher seul.
            Notre Fonds de Solidarité tend la main aux athlètes en difficulté et
            bâtit un pont de générosité entre les générations.
          </p>

          <h3 className="rf-blocktitle">Nos piliers d'intervention</h3>
          <p className="lede">
            <strong>
              1. Soutien face aux injustices et aux aléas de carrière
            </strong>
          </p>
          <ul className="lede">
            <li>
              <strong>Combattre les injustices sportives</strong> :
              accompagnement et orientation face aux décisions arbitraires,
              discriminations ou ruptures de contrat abusives.
            </li>
            <li>
              <strong>Surmonter les coups durs</strong> : aide d'urgence en cas
              de blessure grave, de perte de sponsor ou de fin de carrière
              prématurée.
            </li>
          </ul>
          <p className="lede">
            <strong>2. Solidarité intergénérationnelle</strong>
          </p>
          <ul className="lede">
            <li>
              <strong>Mentorat et don des aînés</strong> : ceux qui ont réussi
              ou qui aiment le sport soutiennent les talents qui manquent de
              ressources.
            </li>
            <li>
              <strong>Financement participatif et bourses</strong> : les dons
              financent des aides directes (matériel, déplacements, frais
              médicaux) pour les athlètes en précarité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Comment ça marche ?
          </h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Vous êtes un sportif en difficulté</h3>
              <p>
                Déposez un dossier d'aide → Analyse par notre comité →
                Accompagnement.
              </p>
            </div>
            <div className="info-card">
              <h3>Vous souhaitez soutenir un athlète</h3>
              <p>
                Faites un don ou devenez mentor → Financement direct des
                projets.
              </p>
            </div>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Agissez à nos côtés
          </h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Vous avez besoin de soutien ?</h3>
              <p>
                Notre comité est là pour vous écouter et vous épauler en toute
                confidentialité.
              </p>
            </div>
            <div className="info-card">
              <h3>Vous souhaitez donner ou transmettre ?</h3>
              <p>
                En donnant au Fonds, vous financez des solutions concrètes.
              </p>
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
          Déposer une demande d&apos;aide
        </Link>
        <Link href="/dons" className="info-cta">
          Faire un don au Fonds
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
        <h2>Fonds de solidarité</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
