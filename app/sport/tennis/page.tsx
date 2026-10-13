"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function TennisPage() {
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
      { threshold: 0.12 }
    );
    document.querySelectorAll(".kabsa .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mediaColumn = (
    <aside className="disc-media">
      <div className="info-card">
        <h3>Présentation</h3>
        <p>Découvrez la section Tennis de KABSA.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Exercices techniques, tactiques et préparation physique.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts et coulisses du club.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Matchs &amp; tournois</h3>
        <p>Meilleurs moments des tournois et championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Joueurs &amp; joueuses KABSA</h3>
        <p>Parcours des meilleurs joueurs et joueuses.</p>
        <VideoSlot />
      </div>
    </aside>
  );

  const contactCta = (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
      <Link href="/contact" className="info-cta">
        Nous contacter
      </Link>
    </div>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">Tennis — Masculin &amp; Féminin</h3>

          <p className="lede">Compétiteur dans l&apos;âme, adepte du loisir ou joueuse reprenant le sport dans une ambiance conviviale : la section tennis de KABSA est ouverte à toutes et à tous, sans distinction de niveau.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos engagements : mixité, performance et plaisir</h3>

          <ul className="lede">
            <li>
              <strong>Accès égal</strong> : créneaux équitablement répartis, infrastructures de qualité.
            </li>
            <li>
              <strong>Ambiance inclusive</strong> : équilibre entre compétition et plaisir.
            </li>
            <li>
              <strong>Encadrement diplômé</strong> : progression technique, tactique et physique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section féminine — dynamisme et progression</h3>

          <ul className="lede">
            <li>
              <strong>Tennis loisir &amp; Fit&apos;Tennis</strong> : pratique conviviale et remise en forme.
            </li>
            <li>
              <strong>Cours collectifs d&apos;évolution</strong> : par groupes de niveau.
            </li>
            <li>
              <strong>Pôle compétition</strong> : championnats locaux et régionaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section masculine — intensité et convivialité</h3>

          <ul className="lede">
            <li>
              <strong>Entraînements tactiques &amp; physiques</strong> : pour progresser et performer.
            </li>
            <li>
              <strong>Championnats &amp; défis internes</strong> : tournois, « pyramides ».
            </li>
            <li>
              <strong>Tennis loisir</strong> : créneaux libres.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Le double mixte — le cœur de notre vie associative</h3>

          <p className="lede">Sessions et tournois de double mixte pour mélanger les sections et partager un moment festif.</p>
        </div>

        {mediaColumn}
      </div>

      {contactCta}
    </>
  );

  const horairesTarifsContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">Horaires des entraînements</h3>

          <p className="lede">Entraînements et sessions libres du lundi au dimanche, sur courts intérieurs et extérieurs. Les horaires sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Inscription</h3>

          <p className="lede">Séance d&apos;essai gratuite pour découvrir l&apos;ambiance du club. Formulaire d&apos;adhésion en ligne.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>

          <p className="lede">Communiqués à l&apos;inscription.</p>
        </div>

        {mediaColumn}
      </div>

      {contactCta}
    </>
  );

  const comingSoonContent = <p className="lede tab-placeholder">Contenu à venir.</p>;

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "accessibilite", label: "Accessibilité & pratique", content: comingSoonContent },
    { id: "infrastructures", label: "Infrastructures", content: comingSoonContent },
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: horairesTarifsContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Tennis</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
