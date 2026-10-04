"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function HebergementDelegationsPage() {
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
            Un cadre optimal pour la performance, la récupération et la cohésion
            d'équipe.
          </p>
          <p className="lede">
            Conçues pour le logement temporaire des équipes en stage de
            préparation, nos infrastructures visent un séjour clé en main adapté
            aux exigences du sport de haut niveau.
          </p>

          <h3 className="rf-blocktitle">Nos solutions de logement</h3>
          <ul className="lede">
            <li>
              <strong>Chambres individuelles ou doubles</strong> : espaces
              calmes, literie de qualité pour un sommeil réparateur.
            </li>
            <li>
              <strong>Suites pour le staff</strong> : espaces de travail séparés
              pour entraîneurs, médecins et managers.
            </li>
            <li>
              <strong>Options de privatisation</strong> : étage ou bâtiment dédié
              pour préserver la bulle de l'équipe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Restauration haute performance
          </h3>
          <ul className="lede">
            <li>
              <strong>Menus sportifs sur mesure</strong> : élaborés avec vos
              diététiciens ou nos nutritionnistes partenaires.
            </li>
            <li>
              <strong>Buffets équilibrés et variés</strong> : produits frais, de
              saison, adaptés aux charges d'entraînement.
            </li>
            <li>
              <strong>Horaires flexibles</strong> : repas servis selon le
              planning de vos séances.
            </li>
            <li>
              <strong>Salle à manger privative</strong> : un espace réservé à
              votre délégation.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Infrastructures et services inclus
          </h3>
          <ul className="lede">
            <li>
              <strong>Espaces médicaux et de soin</strong> : salles pour kinés,
              ostéopathes et massages.
            </li>
            <li>
              <strong>Salles de réunion et de briefing</strong> : écrans
              connectés et tableaux pour les analyses tactiques.
            </li>
            <li>
              <strong>Espace bien-être &amp; récupération</strong> : bains
              froids, sauna, hammam et jacuzzi (selon disponibilité).
            </li>
            <li>
              <strong>Blanchisserie rapide</strong> : lavage quotidien des
              tenues.
            </li>
            <li>
              <strong>Wi-Fi haut débit sécurisé</strong>.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Localisation et accessibilité
          </h3>
          <ul className="lede">
            <li>
              <strong>Proximité des sites d'entraînement</strong> : à quelques
              minutes des terrains, pistes et salles.
            </li>
            <li>
              <strong>Transports facilités</strong> : navettes privées sur
              demande (gares, aéroports, sites sportifs).
            </li>
            <li>
              <strong>Sécurité et tranquillité</strong> : site sécurisé
              garantissant le repos des athlètes.
            </li>
          </ul>
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
        <h2>Hébergement des délégations</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
