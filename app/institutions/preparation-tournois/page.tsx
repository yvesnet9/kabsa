"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function PreparationTournoisPage() {
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

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Préparation de tournois &amp; accueil d&apos;équipes</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Le partenaire stratégique de vos événements sportifs de haut
              niveau.
            </p>
            <p className="lede">
              KABSA accompagne les équipes professionnelles et nationales dans
              leur quête d'excellence, avec une expertise complète
              d'organisation.
            </p>

            <h3 className="rf-blocktitle">
              Réception d'équipes nationales &amp; internationales
            </h3>
            <p className="lede">
              Des séjours clés en main pour les sélections et clubs d'élite,
              dans des conditions optimales de préparation :
            </p>
            <ul className="lede">
              <li>
                <strong>Infrastructures de qualité</strong> : terrains
                homologués (gazon naturel/synthétique), salles de musculation et
                espaces de récupération.
              </li>
              <li>
                <strong>Logistique premium</strong> : hébergement adapté aux
                sportifs, restauration nutritionnelle, transports sécurisés.
              </li>
              <li>
                <strong>Confidentialité &amp; sécurité</strong> : environnements
                fermés ou sécurisés pour une concentration maximale et des
                sessions à l'abri des regards.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Organisation de matchs amicaux
            </h3>
            <p className="lede">
              Développer le rythme de compétition par des confrontations de
              qualité :
            </p>
            <ul className="lede">
              <li>
                <strong>Matching stratégique</strong> : recherche d'adversaires
                correspondant au profil et à l'intensité recherchés.
              </li>
              <li>
                <strong>Gestion officielle</strong> : coordination avec les
                corps arbitraux qualifiés, planification des horaires, personnel
                de terrain.
              </li>
              <li>
                <strong>Visibilité (sur demande)</strong> : billetterie, accueil
                des médias, captation vidéo et diffusion en direct.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Évaluation du niveau collectif
            </h3>
            <p className="lede">
              Une dimension analytique pour mesurer l'état de forme du collectif
              :
            </p>
            <ul className="lede">
              <li>
                <strong>Analyse vidéo &amp; data</strong> : décryptage tactique
                des matchs amicaux et des séances.
              </li>
              <li>
                <strong>Rapports de performance</strong> : données statistiques
                précises (animations défensives/offensives, transitions,
                efficacité sur coups de pied arrêtés).
              </li>
              <li>
                <strong>Aide à la décision</strong> : un état des lieux clair
                pour ajuster les derniers détails tactiques avant les
                compétitions officielles.
              </li>
            </ul>
          </div>
          <aside className="disc-media">
            <div className="info-card">
              <h3>Présentation</h3>
              <p>Vidéo de présentation du service.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>Démonstration</h3>
              <p>Démonstration en conditions réelles.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>Séance type</h3>
              <p>Déroulé d&apos;une séance type.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>Témoignages</h3>
              <p>Retours de pratiquants.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>En images</h3>
              <p>Moments forts en images.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>À découvrir</h3>
              <p>D&apos;autres vidéos à venir.</p>
              <VideoSlot />
            </div>
          </aside>
        </div>

        <div
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}
        >
          <Link href="/contact" className="info-cta">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
