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
          <h3 className="rf-blocktitle">🏊‍♂️ Natation Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié à la natation au sein de l&apos;association KABSA.
            Que vous cherchiez à vaincre votre peur de l&apos;eau, perfectionner vos techniques de
            nage ou vous entraîner dans un cadre compétitif, nos bassins vous sont ouverts. Nous
            prônons une pratique de la natation inclusive, bienveillante et adaptée aux objectifs de
            chacun et chacune, sous la supervision de coachs certifiés.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌟 Notre Philosophie : L&apos;Eau pour Tous et Toutes
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous croyons que la natation est bien plus qu&apos;un sport
            : c&apos;est un art de vivre, un gage de santé et un vecteur de confiance en soi. Nos
            sections masculine et féminine sont conçues pour offrir un environnement sécurisant et
            motivant, respectueux du rythme et des aspirations de chaque membre.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📊 Nos Formules &amp; Groupes de Niveau</h3>
          <p className="lede">
            Pour répondre aux besoins de tous les profils, nos séances sont réparties en quatre
            grands niveaux, accessibles aux hommes comme aux femmes :
          </p>
          <p className="lede">
            <strong>🔹 1. Aquaphobie &amp; Débutants (Apprentissage)</strong>{" "}— <em>Pour qui
            ?</em>{" "}Les adultes qui ne se sentent pas à l&apos;aise dans l&apos;eau ou qui n&apos;ont
            jamais appris à nager. <em>Objectif :</em>{" "}apprivoiser l&apos;élément aquatique,
            travailler la respiration, flotter et acquérir les premiers réflexes de déplacement en
            toute sécurité.
          </p>
          <p className="lede">
            <strong>🔹 2. Intermédiaire (Perfectionnement)</strong>{" "}— <em>Pour qui ?</em>{" "}Ceux et
            celles qui savent déjà nager au moins une nage mais souhaitent s&apos;améliorer.{" "}
            <em>Objectif :</em>{" "}apprentissage et correction des 4 nages (crawl, dos crawlé, brasse,
            papillon), amélioration de l&apos;endurance et de la coordination.
          </p>
          <p className="lede">
            <strong>🔹 3. Natation Loisir &amp; Bien-être (Entretien)</strong>{" "}— <em>Pour qui
            ?</em>{" "}Les nageurs et nageuses autonomes qui recherchent une activité physique régulière
            sans la pression du chronomètre. <em>Objectif :</em>{" "}renforcement musculaire,
            développement de la capacité cardio-respiratoire et évacuation du stress.
          </p>
          <p className="lede">
            <strong>🔹 4. Section Compétition &amp; Masters (Performance)</strong>{" "}— <em>Pour qui
            ?</em>{" "}Les passionnés de vitesse et de technique souhaitant se mesurer aux autres ou à
            eux-mêmes. <em>Objectif :</em>{" "}plans d&apos;entraînement intensifs, optimisation des
            départs/virages et préparation aux compétitions interclubs ou régionales.
          </p>
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
          <h3 className="rf-blocktitle">📅 Horaires &amp; Plannings des Séances</h3>
          <p className="lede">
            Les créneaux sont organisés de manière à garantir un confort de pratique optimal en
            fonction de vos disponibilités. Horaires communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋 Informations Pratiques &amp; Inscriptions
          </h3>
          <h4 className="rf-blocktitle"><em>Tarifs (saison 2026-2027)</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Cotisation annuelle Loisir</strong>{" "}: tarif communiqué à l&apos;inscription
              (accès à 2 séances par semaine).
            </li>
            <li>
              <strong>Cotisation annuelle Compétition</strong>{" "}: tarif communiqué à
              l&apos;inscription (accès aux entraînements + frais d&apos;inscription aux courses).
            </li>
            <li>Tarifs dégressifs pour les familles et les étudiants.</li>
          </ul>
          <h4 className="rf-blocktitle"><em>Équipement requis</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              Bonnet de bain (obligatoire, fourni aux couleurs de l&apos;association KABSA lors de
              l&apos;inscription).
            </li>
            <li>Maillot de bain de natation (short de plage interdit).</li>
            <li>Lunettes de natation.</li>
          </ul>
          <h4 className="rf-blocktitle">💬 Témoignages de nos Membres</h4>
          <p className="lede"><strong>À venir.</strong></p>
          {contactCta}
        </div>

        {mediaColumn}
      </div>
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
