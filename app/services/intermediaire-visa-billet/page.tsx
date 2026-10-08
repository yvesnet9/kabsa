"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function IntermediaireVisaBilletPage() {
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
            Un accompagnement complet pour sécuriser vos démarches de visa et
            optimiser la réservation de vos billets d'avion.
          </p>
          <p className="lede">
            Voyager, étudier ou s'installer à l'étranger implique des démarches
            administratives complexes. KABSA met son expertise à votre service
            pour transformer ces formalités en une étape simple et sereine.
          </p>

          <h3 className="rf-blocktitle">
            Accompagnement dans les démarches de visa
          </h3>
          <ul className="lede">
            <li>
              <strong>Orientation et diagnostic</strong> : analyse de votre
              situation (études, tourisme, regroupement familial, affaires) pour
              identifier le type de visa adéquat (court ou long séjour).
            </li>
            <li>
              <strong>Constitution du dossier</strong> : aide à la collecte, à
              la vérification et à la mise en conformité des pièces
              justificatives.
            </li>
            <li>
              <strong>Prise de rendez-vous &amp; formulaires</strong> :
              assistance pour les formulaires officiels et la prise de
              rendez-vous (ambassades, consulats, centres agréés : VFS Global,
              TLS Contact, BLS…).
            </li>
            <li>
              <strong>Lettre de motivation &amp; d'invitation</strong> :
              conseils pour rédiger des courriers qui appuient solidement votre
              demande.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Gestion et réservation des billets d'avion
          </h3>
          <ul className="lede">
            <li>
              <strong>Recherche au meilleur tarif</strong> : comparaison des
              offres de différentes compagnies selon votre budget et vos dates.
            </li>
            <li>
              <strong>Pré-réservations pour visa (PNR)</strong> : génération de
              pré-réservations officielles avec code PNR vérifiable, conformes
              aux exigences des ambassades — sans achat immédiat, pour ne pas
              perdre d'argent en cas de retard de traitement.
            </li>
            <li>
              <strong>Achat et suivi des billets</strong> : une fois le visa
              obtenu, finalisation de l'achat, gestion des bagages, choix des
              sièges, modifications éventuelles.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            Pourquoi choisir KABSA ?
          </h3>
          <div className="info-grid" style={{ marginTop: 14 }}>
            <div className="info-card">
              <h3>Expertise &amp; rigueur</h3>
              <p>Moins de risques de refus liés à un dossier incomplet.</p>
            </div>
            <div className="info-card">
              <h3>Gain de temps</h3>
              <p>Nous gérons la recherche des vols et les démarches.</p>
            </div>
            <div className="info-card">
              <h3>Sécurité financière</h3>
              <p>
                Grâce aux pré-réservations, vous n'achetez le billet définitif
                qu'une fois le visa en main.
              </p>
            </div>
            <div className="info-card">
              <h3>Approche humaine</h3>
              <p>Une équipe à l'écoute et disponible.</p>
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
        <h2>Intermédiaire de visa &amp; billet d'avion</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
