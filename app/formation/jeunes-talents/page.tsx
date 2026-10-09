"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function JeunesTalentsPage() {
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
        <h2>Accompagnement des jeunes talents</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Un parcours structuré, du repérage terrain jusqu'à la préparation
              à une carrière professionnelle.
            </p>
            <p className="lede">
              KABSA place la jeunesse au cœur de son action. Chaque jeune talent
              recèle un potentiel unique qui ne demande qu'à être révélé,
              encadré et propulsé. Notre mission : transformer cette étincelle
              brute en une réussite durable, sur le plan humain comme
              professionnel. Notre méthodologie repose sur un parcours
              d'excellence en quatre étapes.
            </p>

            <h3 className="rf-blocktitle">Un parcours en quatre étapes</h3>
            <ul className="lede">
              <li>
                <strong>1. Le repérage et la détection</strong> : tout commence
                sur le terrain. Nos équipes et recruteurs partenaires
                identifient les jeunes qui se démarquent par leur discipline,
                leur créativité ou leurs aptitudes. <em>Critères :</em> au-delà
                du talent brut, la motivation, l'état d'esprit et la résilience.{" "}
                <em>Inclusion :</em> une attention particulière aux talents
                issus de milieux modestes.
              </li>
              <li>
                <strong>
                  2. L'évaluation et la cartographie des compétences
                </strong>{" "}
                : un bilan complet à 360° — analyse technique fine, bilan des
                soft skills (confiance, communication, gestion du stress), et{" "}
                <strong>plan de développement individualisé (PDI)</strong>{" "}
                co-construit avec des objectifs clairs.
              </li>
              <li>
                <strong>3. Le mentorat et le suivi personnalisé</strong> :
                chaque jeune est connecté à un mentor expérimenté — parrainage
                actif (sessions de partage, conseils, soutien moral) et ateliers
                de formation exclusifs (prise de parole, anglais professionnel,
                outils numériques).
              </li>
              <li>
                <strong>4. La préparation à la carrière professionnelle</strong>{" "}
                : immersion et réseau (entreprises partenaires, clubs,
                institutions), outils d'insertion (CV, simulations d'entretiens,
                gestion de l'image publique, initiation à la gestion financière)
                et accompagnement contractuel (conseils juridiques et
                administratifs pour les premiers contrats).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Rejoignez l'aventure KABSA
            </h3>
            <ul className="lede">
              <li>
                <strong>Vous êtes un jeune talent ?</strong> → « Nous contacter
                »
              </li>
              <li>
                <strong>Vous souhaitez devenir mentor ?</strong> → « Nous
                contacter »
              </li>
              <li>
                <strong>
                  Vous êtes une entreprise ou un club partenaire ?
                </strong>{" "}
                → « Soutenir KABSA »
              </li>
            </ul>
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
          <Link href="/dons" className="info-cta">
            Soutenir KABSA
          </Link>
        </div>
      </div>
    </section>
  );
}
