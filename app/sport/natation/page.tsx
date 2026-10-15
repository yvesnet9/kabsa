"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function NatationPage() {
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
        <p>Découvrez la section Natation de KABSA.</p>
        <VideoSlot videoSrc="/videos/piscine.mp4" poster="/videos/piscine.jpg" title="Piscine" />
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
        <h3>Compétitions</h3>
        <p>Meilleurs moments des compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Nageurs &amp; nageuses KABSA</h3>
        <p>Parcours des meilleurs nageurs et nageuses.</p>
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
          <h3 className="rf-blocktitle">Natation — Masculin &amp; Féminin</h3>

          <p className="lede">Vaincre sa peur de l&apos;eau, perfectionner ses nages ou s&apos;entraîner en cadre compétitif : les bassins de KABSA sont ouverts à tous, sous la supervision de coachs certifiés — une pratique inclusive, bienveillante et adaptée aux objectifs de chacun et chacune.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Notre philosophie : l&apos;eau pour tous et toutes</h3>

          <p className="lede">Un environnement sécurisant et motivant, respectueux du rythme de chaque membre.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos formules &amp; groupes de niveau</h3>

          <ul className="lede">
            <li>
              <strong>Aquaphobie &amp; débutants (apprentissage)</strong> : apprivoiser l&apos;eau, la respiration, flotter, premiers déplacements en sécurité.
            </li>
            <li>
              <strong>Intermédiaire (perfectionnement)</strong> : les 4 nages (crawl, dos crawlé, brasse, papillon), endurance et coordination.
            </li>
            <li>
              <strong>Natation loisir &amp; bien-être (entretien)</strong> : renforcement musculaire, capacité cardio-respiratoire, gestion du stress.
            </li>
            <li>
              <strong>Compétition &amp; masters (performance)</strong> : plans intensifs, départs/virages, préparation aux compétitions interclubs ou régionales.
            </li>
          </ul>
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

          <p className="lede">Créneaux organisés pour un confort de pratique optimal. Les horaires sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs (saison 2026-2027)</h3>

          <p className="lede">Cotisation loisir et cotisation compétition communiquées à l&apos;inscription. Tarifs dégressifs pour les familles et les étudiants.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Équipement requis</h3>

          <ul className="lede">
            <li>Bonnet de bain (obligatoire, fourni aux couleurs de KABSA à l&apos;inscription)</li>
            <li>Maillot de bain de natation (short de plage interdit)</li>
            <li>Lunettes</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Témoignages</h3>

          <p className="lede">Témoignages à venir.</p>
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
        <h2>Natation</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
