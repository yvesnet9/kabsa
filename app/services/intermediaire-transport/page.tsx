"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function IntermediaireTransportPage() {
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
            Organisation et prise en charge des déplacements des sportifs et
            délégations.
          </p>
          <p className="lede">
            Chez KABSA, la performance sportive commence bien avant le coup
            d'envoi : un déplacement mal optimisé génère fatigue et stress. En
            tant qu'intermédiaire de transport spécialisé, nous orchestrons la
            logistique globale des déplacements de vos sportifs, staffs
            techniques et délégations, en national comme à l'international.
          </p>

          <h3 className="rf-blocktitle">Nos engagements</h3>
          <ul className="lede">
            <li>
              <strong>Sérénité absolue</strong> : nous gérons toute la chaîne
              logistique pour que vos équipes restent concentrées sur l'objectif
              sportif.
            </li>
            <li>
              <strong>Confort &amp; récupération</strong> : des modes de
              transport adaptés aux exigences des athlètes (espace, modularité,
              climatisation).
            </li>
            <li>
              <strong>Réactivité 24/7</strong> : disponibles à tout moment pour
              réajuster les itinéraires en cas d'imprévu.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Nos domaines d'action
          </h3>
          <ul className="lede">
            <li>
              <strong>Déplacements d'équipes &amp; clubs</strong> : navettes en
              autocars de grand tourisme privatifs, transferts gares/aéroports,
              prise en charge des bagages volumineux et du matériel technique.
            </li>
            <li>
              <strong>Grands événements &amp; délégations</strong> :
              coordination de flottes avec chauffeurs professionnels,
              acheminement des délégations et officiels, gestion des
              arrivées/départs échelonnés.
            </li>
            <li>
              <strong>Solutions sur-mesure &amp; multimodal</strong> :
              réservations de groupes (train/TGV), vols réguliers ou charters
              dédiés, location de véhicules (minibus, utilitaires matériel).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Pourquoi choisir KABSA ?
          </h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Réseau de transporteurs certifiés</h3>
              <p>Des partenaires fiables, ponctuels, habitués au public sportif.</p>
            </div>
            <div className="info-card">
              <h3>Optimisation des coûts</h3>
              <p>Des tarifs négociés « de groupe » pour respecter votre budget.</p>
            </div>
            <div className="info-card">
              <h3>Prise en charge du matériel</h3>
              <p>
                Logistique sécurisée pour les équipements lourds ou fragiles
                (vélos, matériel médical, etc.).
              </p>
            </div>
          </div>
        </div>
        <aside className="disc-media">
          <div className="info-card">
            <h3>Présentation</h3>
            <p>Vidéo de présentation du service.</p>
            <img
              src="/services/transport/autocars.jpg"
              alt="Deux minibus blancs garés en lisière de forêt"
              style={{ marginTop: 10, width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 10 }}
            />
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
            <img
              src="/services/transport/avion.jpg"
              alt="Aile d'avion au-dessus des nuages"
              style={{ marginTop: 10, width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 10 }}
            />
          </div>
        </aside>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Demander un devis / Nous contacter
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
        <h2>Intermédiaire de transport</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
