"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function FormationArbitresPage() {
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
        <h2>Formation des arbitres</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Accompagner nos arbitres et officiels dans la maîtrise des règles,
              pour tous les terrains.
            </p>
            <p className="lede">
              Le respect du jeu et l'équité sportive reposent sur des officiels
              compétents, passionnés et bien formés. Le programme KABSA dote
              chaque arbitre des outils techniques, théoriques et humains pour
              diriger les rencontres avec assurance, intégrité et pédagogie.
            </p>

            <h3 className="rf-blocktitle">Nos objectifs pédagogiques</h3>
            <ul className="lede">
              <li>
                <strong>Maîtrise des règlements</strong> : assimiler les règles
                officielles et leurs subtilités techniques.
              </li>
              <li>
                <strong>Gestion de match</strong> : communication, gestion du
                stress et autorité bienveillante sur le terrain.
              </li>
              <li>
                <strong>Inclusion et adaptabilité</strong> : comprendre les
                spécificités des différentes pratiques, notamment le handisport.
              </li>
              <li>
                <strong>Évolution continue</strong> : suivi personnalisé et
                opportunités de certification pour progresser à tous les
                niveaux.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Focus : l'arbitrage et le handisport
            </h3>
            <p className="lede">
              Parce que le sport doit être accessible à tous, notre cursus
              intègre des modules dédiés à l'arbitrage en handisport et sport
              adapté :
            </p>
            <ul className="lede">
              <li>
                <strong>Adaptation des règles</strong> : apprentissage des
                modifications réglementaires propres aux disciplines handisport.
              </li>
              <li>
                <strong>Sensibilisation aux handicaps</strong> : comprendre les
                typologies de handicap pour adapter positionnement, gestuelle et
                communication.
              </li>
              <li>
                <strong>Esprit d'équité</strong> : garantir la sécurité de tous
                les pratiquants tout en maintenant la rigueur de la compétition.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Le parcours de formation KABSA
            </h3>
            <ul className="lede">
              <li>
                <strong>1. Théorique &amp; réglementaire</strong> : sessions
                interactives en présentiel ou en ligne (e-learning) ; études de
                cas vidéo et décryptage de situations de jeu ; quiz réguliers.
              </li>
              <li>
                <strong>2. Pratique &amp; mises en situation</strong> : ateliers
                sur le terrain (placement, déplacements, gestuelle) ;
                simulations de matchs avec retours de formateurs ; gestion des
                outils de table de marque et de chronométrage.
              </li>
              <li>
                <strong>3. Accompagnement &amp; tutorat</strong> : parrainage
                par un officiel chevronné ; observations en conditions réelles ;
                bilans de fin de saison pour définir les axes d'évolution.
              </li>
            </ul>

            <p className="lede">
              <strong>Rejoignez le corps arbitral de KABSA.</strong> Joueur
              souhaitant voir le jeu sous un autre angle, parent désireux de
              s'impliquer, ou passionné en quête d'un nouveau défi : votre place
              est parmi nous.
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
