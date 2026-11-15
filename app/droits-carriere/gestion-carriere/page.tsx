"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function GestionCarrierePage() {
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

  const mediaColumn = (
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
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            💼📈 Gestion de carrière &amp; finances : Construire l&apos;avenir de nos athlètes
          </h3>
          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), la réussite d&apos;un sportif ne
            s&apos;arrête pas aux lignes du terrain. Parce que le passage vers le sport
            professionnel et le haut niveau exige une structure solide en dehors des
            compétitions, l&apos;académie accompagne ses athlètes (de 15 à 25 ans) — valides
            🏃‍♂️ et en situation de handicap physique ♿ — dans la gestion durable de leur
            carrière et de leurs ressources financières.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre vision : Sécuriser le parcours vers le professionnalisme
          </h3>
          <p className="lede">
            Le sport de haut niveau et le mouvement paralympique offrent aujourd&apos;hui des
            opportunités croissantes de professionnalisation, de primes de compétition et de
            partenariats. Pour permettre à nos jeunes talents de se concentrer pleinement sur
            leurs performances, KABSA met en place un environnement sécurisé et transparent :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Préparer l&apos;après-détection (♿ &amp; 🏃‍♂️)</strong>{" "}: Accompagner la
              transition entre le statut de jeune talent repéré en académie et celui
              d&apos;athlète évoluant dans les circuits nationaux, européens et mondiaux.
            </li>
            <li>
              <strong>Protéger les intérêts des sportifs</strong>{" "}: Avec l&apos;appui de notre
              réseau d&apos;experts juridiques, nous veillons à ce que chaque étape
              contractuelle et administrative respecte les droits et l&apos;équilibre de
              l&apos;athlète.
            </li>
            <li>
              <strong>Valoriser chaque profil</strong>{" "}: Donner à nos sportifs la visibilité et
              les outils nécessaires pour attirer l&apos;attention des clubs, des fédérations et
              des sponsors.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📋⚖️ Nos services d&apos;accompagnement de carrière
          </h3>
          <p className="lede">
            Pour guider nos athlètes vers l&apos;élite en Belgique et à l&apos;international,
            KABSA déploie un accompagnement complet articulé autour de quatre piliers :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Orientation sportive et passerelles vers les clubs 🏟️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Mise en relation avec les clubs et fédérations</strong>{" "}: Nous souhaitons
              faciliter l&apos;accès de nos meilleurs éléments aux essais et sélections
              officielles, en lien avec les ligues et les fédérations de référence (handisport
              et valides).
            </li>
            <li>
              <strong>Planification du parcours sportif</strong>{" "}: Nos coachs établissent avec
              chaque athlète un plan de progression personnalisé (choix des compétitions, stages
              et objectifs de qualification).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Accompagnement juridique et contractuel ⚖️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Conseil et relecture de contrats</strong>{" "}: Nos experts juridiques
              accompagnent les athlètes et leurs familles lors des discussions avec des clubs,
              des équipementiers ou des organisateurs de compétitions.
            </li>
            <li>
              <strong>Protection et couverture</strong>{" "}: KABSA garantit une assurance complète
              durant toutes les activités au sein de l&apos;académie et sensibilise les sportifs
              aux règles antidopage, aux règlements fédéraux et au statut du sportif de haut
              niveau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Gestion financière, primes et sponsoring individuel 💰
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Éducation financière et gestion des revenus</strong>{" "}: Sensibilisation des
              jeunes athlètes à la gestion responsable des bourses sportives, des primes de
              victoire et des indemnités de performance.
            </li>
            <li>
              <strong>Recherche de sponsors et mécénat (RSE)</strong>{" "}: Appui dans la recherche
              de soutiens financiers privés auprès d&apos;entreprises sensibles aux valeurs
              d&apos;inclusion, de diversité et de dépassement de soi.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            4. Image, communication et visibilité médiatique 🎥
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Promotion sur KA TV Sport</strong>{" "}: Grâce à notre pôle communication et à
              notre chaîne KA TV Sport (YouTube, TikTok et réseaux sociaux), chaque athlète peut
              bénéficier d&apos;une vitrine médiatique (portraits vidéo, reportages, temps
              forts) pour valoriser son image auprès des recruteurs et des partenaires.
            </li>
            <li>
              <strong>Gestion des réseaux sociaux</strong>{" "}: Conseils en communication pour
              aider les sportifs à construire une image professionnelle, positive et inspirante.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝🌟 Un écosystème au service de la réussite globale
          </h3>
          <p className="lede">
            En intégrant KABSA, chaque athlète bénéficie d&apos;une approche globale qui réunit
            la performance physique, le suivi nutritionnel, l&apos;encadrement médical et la
            structuration professionnelle. Notre objectif est clair : faire émerger des
            champions accomplis, autonomes et prêts à relever tous les défis de leur carrière
            sportive et personnelle.
          </p>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Nous contacter
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
        <h2>Gestion de carrière &amp; finances</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
