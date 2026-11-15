"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function EntourageConfiancePage() {
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
            🤝🛡️ Un entourage de confiance : Une équipe pluridisciplinaire au service de chaque
            athlète
          </h3>
          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus qu&apos;aucun
            talent ne peut s&apos;épanouir durablement dans l&apos;isolement. Pour permettre à
            nos jeunes sportifs (de 15 à 25 ans) — valides 🏃‍♂️ et en situation de handicap
            physique ♿ — d&apos;atteindre leur plein potentiel tant sur le plan humain que
            compétitif, nous avons bâti un environnement humain bienveillant, structuré et
            qualifié.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre engagement : Protéger, accompagner et inspirer
          </h3>
          <p className="lede">
            La confiance entre l&apos;athlète, sa famille et l&apos;académie est le socle de
            notre réussite collective. Qu&apos;il s&apos;agisse d&apos;une pratique axée sur le
            sport-santé au quotidien ou d&apos;une préparation vers les compétitions, chaque
            membre bénéficie d&apos;un suivi rigoureux :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un cadre sécurisé et bienveillant (♿ &amp; 🏃‍♂️)</strong>{" "}: Chaque
              activité au sein de l&apos;académie est couverte par une assurance dédiée et se
              déroule dans des infrastructures bruxelloises adaptées <em>(lieux à
              confirmer)</em>.
            </li>
            <li>
              <strong>Une approche globale de l&apos;athlète</strong>{" "}: Nous prenons soin de la
              personne dans sa globalité — santé physique, équilibre mental, nutrition, études
              et intégration sociale.
            </li>
            <li>
              <strong>Un lien étroit avec les familles et les proches</strong>{" "}: Les parents et
              tuteurs sont des partenaires essentiels de notre démarche éducative et sportive.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥🏅 Les piliers de l&apos;entourage KABSA
          </h3>
          <p className="lede">
            Pour accompagner nos athlètes au quotidien, KABSA mobilise quatre pôles
            d&apos;expertise complémentaires réunis autour d&apos;une gouvernance transparente :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Le Pôle Performance Sportive &amp; Médicale 🏋️‍♂️🩺
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Coachs principaux et éducateurs spécialisés</strong>{" "}: Des techniciens
              expérimentés qui conçoivent des stratégies d&apos;entraînement adaptées aux
              disciplines phares (cécifoot 🦯⚽, athlétisme 🏃‍♂️, basket-fauteuil ♿🏀) et détectent
              le potentiel de chaque joueur.
            </li>
            <li>
              <strong>Préparateurs physiques personnalisés</strong>{" "}: Des spécialistes dédiés au
              développement de la condition physique, de l&apos;autonomie et de la prévention
              des blessures.
            </li>
            <li>
              <strong>Kinésithérapeutes et suivi médical</strong>{" "}: Un accompagnement
              thérapeutique régulier (massages de récupération, soins adaptés) pour garantir la
              santé et la longévité sportive de chaque membre.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Le Pôle Logistique, Social &amp; Nutritionnel 🥗🏠
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Coaching nutritionnel sur mesure</strong>{" "}: Des conseils alimentaires
              adaptés aux besoins énergétiques des sportifs pour optimiser la santé et le
              vivre-ensemble.
            </li>
            <li>
              <strong>Accueil et logistique de stage</strong>{" "}: Une équipe dédiée à
              l&apos;organisation matérielle, au transport et à l&apos;hébergement temporaire
              des délégations et des équipes en stage.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Le Pôle Gouvernance, Juridique &amp; Protection ⚖️🏛️
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Une Direction Générale et un Conseil d&apos;Administration
              engagés</strong>{" "}: Une équipe dirigeante à l&apos;écoute, garante des valeurs
              d&apos;inclusion, de solidarité et d&apos;égalité des chances.
            </li>
            <li>
              <strong>Un réseau d&apos;experts juridiques</strong>{" "}: Des professionnels
              mobilisés pour conseiller les athlètes et leurs familles, sécuriser les démarches
              contractuelles et défendre leurs droits face à toute injustice sportive.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            4. Le Pôle Communication &amp; La Communauté KABSA 🎥💬
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>L&apos;équipe média KA TV Sport</strong>{" "}: Des communicants et créateurs
              de contenu qui valorisent le parcours des athlètes, renforcent la fierté
              collective et créent du lien avec le public.
            </li>
            <li>
              <strong>La force du collectif et des pairs</strong>{" "}: Chez KABSA, les sportifs
              valides et moins valides s&apos;entraînent, échangent et progressent ensemble,
              créant une solidarité unique qui brise l&apos;isolement.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌐🤝 Un réseau de partenaires au service des athlètes
          </h3>
          <p className="lede">
            La fiabilité de KABSA repose aussi sur sa volonté de collaborer avec les acteurs du
            sport, de la santé et de l&apos;inclusion en Belgique : les fédérations sportives de
            référence (handisport et valides), les centres de revalidation, les établissements
            scolaires et les clubs sportifs locaux, ainsi que les soutiens publics et les
            entreprises partenaires engagées dans la Responsabilité Sociétale des Entreprises
            (RSE).
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
        <h2>Un entourage de confiance</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
