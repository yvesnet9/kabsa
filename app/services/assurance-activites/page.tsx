"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function AssuranceActivitesPage() {
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
          <p className="svc-chapo">Notre priorité : votre sérénité.</p>
          <p className="lede">
            Les participants sont couverts durant l'ensemble de nos séances
            encadrées. Que vous participiez à un cours d'initiation, à un
            entraînement régulier ou à un stage de perfectionnement, vous
            bénéficiez d'une protection adaptée pour pratiquer en toute
            tranquillité.
          </p>

          <h3 className="rf-blocktitle">
            Ce qui est inclus dans votre couverture
          </h3>
          <p className="lede">
            Notre contrat Responsabilité Civile et Assistance couvre les
            participants dès le début de la séance et jusqu'à la fin de la prise
            en charge par l'éducateur :
          </p>
          <ul className="lede">
            <li>
              <strong>Responsabilité Civile</strong> : garantie contre les
              dommages corporels ou matériels causés accidentellement à autrui.
            </li>
            <li>
              <strong>Séances encadrées</strong> : couverture active uniquement
              lorsque l'activité est dirigée par un encadrant qualifié.
            </li>
            <li>
              <strong>Équipements fournis</strong> : les incidents liés au
              matériel prêté par la structure sont pris en compte.
            </li>
            <li>
              <strong>Franchise</strong> : en cas d'accident, une franchise
              minimale de 250 € s'applique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Ce qui n'est pas couvert
          </h3>
          <ul className="lede">
            <li>
              <strong>Pratique libre</strong> : activités hors horaires
              officiels ou sans la présence d'un encadrant.
            </li>
            <li>
              <strong>Trajets</strong> : accidents sur le chemin domicile ↔ lieu
              de l'activité.
            </li>
            <li>
              <strong>Affaires personnelles</strong> : perte, vol ou
              détérioration d'objets personnels (téléphones, bijoux,
              vêtements…).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Questions fréquentes
          </h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Dois-je souscrire une assurance complémentaire ?</h3>
              <p>
                Notre couverture de base est complète pour la pratique
                encadrée. Nous recommandons toutefois de vérifier que vous
                disposez d'une assurance Individuelle Accident (ou Garantie des
                Accidents de la Vie) pour vos propres dommages corporels sans
                tiers responsable.
              </p>
            </div>
            <div className="info-card">
              <h3>Que faire en cas d'accident durant une séance ?</h3>
              <p>
                Signalez immédiatement l'incident à l'encadrant. Nos équipes
                prodiguent les premiers soins et remplissent la déclaration
                d'accident obligatoire dans les 48 heures.
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
          Nous contacter
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
        <h2>Assurance pendant les activités</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
