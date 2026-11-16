"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function MaterielAdaptePage() {
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
            🤝 Soutenez KABSA : investissez dans le matériel adapté et l&apos;inclusion par le sport ♿
          </h3>

          <p className="svc-chapo">
            Chaque équipement est une porte ouverte vers l&apos;autonomie et l&apos;excellence 🏆
          </p>

          <p className="lede">
            Chez KA BRUXELLES SPORT ACADEMIE asbl (KABSA), nous sommes convaincus que le talent et la détermination ne connaissent aucune limite, à condition d&apos;avoir les bons outils pour s&apos;exprimer 💪. Fondée à Bruxelles avec pour mission de faire du sport un levier de santé ❤️, de bien-être et d&apos;intégration sociale, notre académie accompagne aussi bien les pratiquants de loisir que les futurs athlètes paralympiques 🏅.
          </p>

          <p className="lede">
            La pratique du handisport de qualité et de haut niveau exige des investissements matériels importants. Pour offrir un accès équitable à tous les jeunes talents bruxellois, quel que soit leur budget, nous avons besoin de votre soutien 🙌.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 À quoi sert votre soutien ? Nos besoins prioritaires
          </h3>

          <p className="lede">
            Vos dons, subventions et partenariats financent directement l&apos;acquisition et le renouvellement de notre parc matériel :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>🦽 Fauteuils de sport de compétition</strong>{" "}: Indispensables pour des disciplines comme le basket-fauteuil 🏀, ces équipements sur mesure garantissent maniabilité, sécurité et performance.
            </li>
            <li>
              <strong>⚽ Équipements spécialisés par discipline</strong>{" "}: Ballons sonores pour le cécifoot 🦯, matériel spécifique pour le para-athlétisme 🏃‍♂️ et dispositifs d&apos;aide adaptés aux différents handicaps physiques.
            </li>
            <li>
              <strong>🏋️ Matériel d&apos;entraînement de pointe</strong>{" "}: Équipements de préparation physique nouvelle génération, accessoires de motricité et outils de suivi de performance.
            </li>
            <li>
              <strong>🩺 Logistique et soins</strong>{" "}: Matériel de kinésithérapie et de récupération pour assurer le suivi sanitaire et le bien-être quotidien de nos membres.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            💡 Comment contribuer à l&apos;aventure KABSA ?
          </h3>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Particuliers : faites un don solidaire ❤️
          </h3>

          <p className="lede">
            Chaque contribution, même modeste, aide à financer l&apos;achat de petit matériel d&apos;entraînement ou l&apos;entretien des fauteuils 🦽. Vous permettez ainsi à un jeune Bruxellois en situation de handicap de briser l&apos;isolement et de rejoindre gratuitement nos phases de détection.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/dons" className="info-cta">
              💝 Faire un don maintenant
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Entreprises : devenez partenaire RSE / sponsor 🏢
          </h3>

          <p className="lede">
            Associez l&apos;image de votre entreprise à un projet bruxellois à fort impact social. En sponsorisant l&apos;achat d&apos;un fauteuil de sport ou d&apos;un lot d&apos;équipements, vous répondez à vos objectifs de Responsabilité Sociétale des Entreprises (RSE) tout en bénéficiant d&apos;une visibilité unique :
          </p>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>👕</strong> Présence de votre logo sur nos équipements, maillots et infrastructures.
            </li>
            <li>
              <strong>🎥</strong> Mise en avant dans nos mini-documentaires et reportages sur notre chaîne KA TV Sport (YouTube, TikTok, réseaux sociaux).
            </li>
            <li>
              <strong>🤝</strong> Participation à nos tournois inclusifs et événements de sensibilisation.
            </li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              🚀 Devenir partenaire entreprise
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            3. Mécénat matériel et fondations 🎁
          </h3>

          <p className="lede">
            Vous disposez d&apos;équipements sportifs adaptés en excellent état, ou vous représentez une institution souhaitant soutenir le développement du handisport à Bruxelles ? Contactez-nous pour mettre en place un partenariat sur mesure.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="info-cta">
              📩 Proposer un partenariat matériel
            </Link>
          </div>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⭐ Pourquoi nous faire confiance ?
          </h3>

          <ul className="lede disc-arrow-list">
            <li>
              <strong>📍 Un impact local direct</strong>{" "}: 100 % des fonds récoltés sont dédiés aux infrastructures, à l&apos;encadrement et au matériel des athlètes à Bruxelles.
            </li>
            <li>
              <strong>📈 Un parcours complet</strong>{" "}: Du sport-santé au quotidien jusqu&apos;à la détection d&apos;élite, votre aide accompagne chaque étape de la progression de nos sportifs.
            </li>
            <li>
              <strong>🔍 Une transparence totale</strong>{" "}: Suivez l&apos;évolution de nos équipes et l&apos;utilisation concrète de votre soutien en vidéo grâce aux reportages de KA TV Sport 🎬.
            </li>
          </ul>
        </div>

        {mediaColumn}
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
        <h2>Du matériel adapté</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
