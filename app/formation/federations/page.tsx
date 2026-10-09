"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function FormationFederationsPage() {
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
        <h2>Formation du personnel des fédérations</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Accompagner la montée en compétence de nos partenaires.
            </p>
            <p className="lede">
              La durabilité des actions passe par le renforcement des capacités
              locales. KABSA accompagne les institutions et fédérations
              partenaires dans la montée en compétence de leurs équipes grâce à
              des programmes de formation sur mesure, adaptés aux réalités du
              terrain et aux exigences de gouvernance modernes.
            </p>

            <h3 className="rf-blocktitle">Notre vision de l'accompagnement</h3>
            <p className="lede">
              Le personnel des fédérations doit disposer d'outils performants et
              de compétences actualisées. Notre approche ne se limite pas à la
              transmission de savoirs théoriques : nous co-construisons des
              parcours d'apprentissage pratiques axés sur l'autonomie et
              l'excellence opérationnelle.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Nos axes stratégiques de formation
            </h3>
            <p className="lede">
              Quatre piliers pour structurer et professionnaliser les équipes :
            </p>
            <ul className="lede">
              <li>
                <strong>Gouvernance et gestion administrative</strong> :
                processus de décision, transparence financière, gestion des
                instances, respect des cadres réglementaires.
              </li>
              <li>
                <strong>Gestion de projet et suivi-évaluation</strong> :
                conception de projets, recherche de financements, pilotage
                d'indicateurs de performance, mesure de l'impact social.
              </li>
              <li>
                <strong>Transformation digitale</strong> : outils numériques
                pour la communication interne, la gestion des bases de données
                de membres et la visibilité en ligne.
              </li>
              <li>
                <strong>Plaidoyer et mobilisation</strong> : communication
                stratégique, négociation avec les parties prenantes,
                structuration de campagnes d'impact.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Notre méthodologie en 4 étapes
            </h3>
            <ul className="lede">
              <li>
                <strong>1. Diagnostic des besoins</strong> : audit initial pour
                identifier les forces de la fédération et les axes
                d'amélioration prioritaires.
              </li>
              <li>
                <strong>2. Co-construction du programme</strong> : modules
                pédagogiques adaptés au niveau et au quotidien des équipes.
              </li>
              <li>
                <strong>3. Déploiement agile</strong> : ateliers immersifs,
                séminaires pratiques, coaching individuel ou collectif.
              </li>
              <li>
                <strong>4. Suivi &amp; évaluation</strong> : mesure de
                l'assimilation des acquis et accompagnement post-formation.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Les bénéfices pour les fédérations
            </h3>
            <ul className="lede">
              <li>
                Crédibilité renforcée auprès des bailleurs de fonds et des
                partenaires institutionnels.
              </li>
              <li>
                Efficacité opérationnelle accrue grâce à des processus internes
                optimisés.
              </li>
              <li>
                Valorisation du personnel, qui développe son employabilité et
                son leadership.
              </li>
            </ul>

            <p className="lede">
              <em>
                « Investir dans le capital humain des fédérations, c'est
                garantir l'avenir et l'impact de tout un secteur. »
              </em>
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
