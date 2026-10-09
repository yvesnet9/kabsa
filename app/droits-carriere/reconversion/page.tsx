"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function ReconversionPage() {
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
        <h2>Reconversion &amp; après-carrière</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Anticiper demain pour performer aujourd'hui.
            </p>
            <p className="lede">
              La fin d'une carrière sportive n'est pas une ligne d'arrivée,
              c'est le départ d'un nouveau match. Une transition réussie se
              prépare dès les moments forts du parcours athlétique : l'anticiper
              libère l'esprit et permet de se concentrer sur ses objectifs
              sportifs actuels. Nous vous accompagnons pour transformer vos
              compétences d'athlète (discipline, résilience, leadership) en
              atouts pour le monde professionnel.
            </p>

            <h3 className="rf-blocktitle">Nos 3 piliers d'accompagnement</h3>
            <ul className="lede">
              <li>
                <strong>1. Formation &amp; double projet</strong> :{" "}
                <em>orientation personnalisée</em> (filières adaptées à votre
                profil), <em>aménagements de cursus</em> (écoles et universités
                aux horaires flexibles ou cours à distance),{" "}
                <em>financement</em> (aide à la recherche de bourses et
                dispositifs de prise en charge).
              </li>
              <li>
                <strong>2. Construction du projet professionnel</strong> :{" "}
                <em>bilan de compétences</em> (forces, centres d'intérêt, soft
                skills), <em>ateliers de reconversion</em> (immersion en
                entreprise, stages courts, « shadowing »),{" "}
                <em>création d'entreprise</em> (accompagnement des athlètes
                entrepreneurs).
              </li>
              <li>
                <strong>3. Nouveau départ &amp; insertion</strong> :{" "}
                <em>outils de candidature</em> (CV valorisant le parcours
                sportif, préparation aux entretiens), <em>réseau KABSA</em>{" "}
                (mise en relation avec des entreprises partenaires),{" "}
                <em>mentorat</em> (parrainage par d'anciens athlètes ayant
                réussi leur transition).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Le suivi psychologique : une transition sereine
            </h3>
            <p className="lede">
              L'après-carrière est aussi un bouleversement émotionnel et
              identitaire. KABSA propose un espace d'écoute et de soutien
              psychologique pour apprivoiser le « deuil » de la vie d'athlète,
              retrouver une routine et redéfinir ses objectifs personnels.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">Témoignages</h3>
            <p className="lede tab-placeholder">Témoignages à venir.</p>

            <p className="lede">
              <strong>Prêt à préparer votre avenir ?</strong> N'attendez pas le
              dernier coup de sifflet. Que vous soyez en pleine activité ou en
              phase de transition, les équipes de KABSA sont là.
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
