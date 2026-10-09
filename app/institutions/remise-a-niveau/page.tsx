"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function RemiseANiveauPage() {
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
        <h2>Remise à niveau des sportifs</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Un accompagnement d'excellence, de A à Z.
            </p>
            <p className="lede">
              KABSA propose un programme complet de remise à niveau et
              d'optimisation des performances pour les athlètes de haut niveau
              et les sportifs en phase de reprise. La réussite d'un stage dépend
              autant de la qualité de l'entraînement que de la sérénité
              logistique : KABSA prend en charge l'intégralité du séjour, du
              pays d'origine jusqu'à la fin de la préparation.
            </p>

            <h3 className="rf-blocktitle">
              Les 5 piliers de notre charte d'accompagnement
            </h3>
            <ul className="lede">
              <li>
                <strong>1. Visa &amp; démarches administratives</strong> :
                l'esprit libre pour se concentrer sur ses objectifs — lettre
                d'invitation officielle de l'association à l'appui de la demande
                de visa, accompagnement pas-à-pas du dossier consulaire,
                facilitation des liaisons avec les autorités compétentes pour
                réduire les délais.
              </li>
              <li>
                <strong>2. Billet d'avion &amp; logistique de transport</strong>{" "}
                : un voyage optimisé pour minimiser la fatigue — réservation
                sur-mesure des billets (aller-retour) sur compagnies régulières
                via les itinéraires les plus directs, prise en compte des
                équipements sportifs volumineux, accueil et transfert privé
                aéroport ↔ hébergement à l'arrivée et au départ.
              </li>
              <li>
                <strong>3. Hébergement &amp; nutrition sportive</strong> : un
                cadre propice à la récupération — hôtels ou centres de haute
                performance à proximité des lieux d'entraînement, chambres
                individuelles ou doubles pour un sommeil réparateur, pension
                complète avec menus adaptés aux exigences nutritionnelles
                (régimes spécifiques, prise de masse, affûtage sur demande).
              </li>
              <li>
                <strong>4. Entraînement &amp; préparation physique</strong> : un
                programme sur-mesure encadré par des coachs diplômés et
                préparateurs physiques — évaluation initiale (tests physiques,
                physiologiques, bilan de condition), séances personnalisées
                (technique, tactique, PPG/PPS), accès aux infrastructures
                (musculation, piste, terrains réglementaires, récupération —
                cryothérapie, kinésithérapie selon disponibilité).
              </li>
              <li>
                <strong>5. Rapport détaillé du stage</strong> : mesurer la
                progression — bilan comparatif des données physiques début/fin
                de stage, rapport technique des coachs (points forts, axes
                d'amélioration), feuille de route (exercices et conseils
                nutritionnels pour la suite). Ce rapport est transmissible au
                club ou à la fédération.
              </li>
            </ul>

            <p className="lede">
              <strong>Prêt à franchir un cap ?</strong> Athlète, agent ou club
              souhaitant planifier une remise à niveau : contactez l'équipe
              KABSA pour un devis personnalisé et le lancement des démarches.
            </p>
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
