"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function EducationFinancierePage() {
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
        <h2>Éducation financière</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Maîtriser son présent, assurer son avenir.
            </p>
            <p className="lede">
              Recevoir ses premières primes, signer son premier contrat
              important ou voir ses revenus décoller est une fierté — mais un
              grand talent implique de grandes responsabilités financières. Chez
              KABSA, la performance va de pair avec la sérénité financière :
              nous vous donnons les clés pour comprendre l'argent, éviter les
              erreurs classiques et bâtir un patrimoine solide.
            </p>

            <h3 className="rf-blocktitle">Nos 3 piliers</h3>
            <ul className="lede">
              <li>
                <strong>1. Gérer ses revenus et anticiper l'après</strong> : les
                carrières de jeunes talents sont intenses mais parfois courtes
                ou imprévisibles. <em>Le réflexe de l'épargne</em> (mettre de
                côté une partie de chaque prime),{" "}
                <em>la transition de carrière</em> (se constituer un capital de
                sécurité), <em>le train de vie maîtrisé</em> (ne pas indexer
                immédiatement toutes ses dépenses sur ses revenus les plus
                hauts).
              </li>
              <li>
                <strong>2. Éviter les pièges et l'entourage toxique</strong> :{" "}
                <em>les investissements « miracles »</em> (fuir les placements
                trop beaux pour être vrais), <em>le syndrome de l'entourage</em>{" "}
                (savoir dire non, protéger ses proches et ses intérêts),{" "}
                <em>le choix des intermédiaires</em> (s'entourer de
                professionnels certifiés et poser les bonnes questions).
              </li>
              <li>
                <strong>3. Préparer sereinement l'avenir</strong> :{" "}
                <em>l'investissement intelligent</em> (bases de l'immobilier, de
                la bourse, de la diversification),{" "}
                <em>la fiscalité simplifiée</em> (anticiper ses impôts),{" "}
                <em>la protection de la famille</em> (sécuriser l'avenir de ses
                proches).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Comment KABSA vous accompagne ?
            </h3>
            <ul className="lede">
              <li>
                <strong>Ateliers &amp; masterclasses</strong> : sessions
                interactives animées par des experts de la finance, du droit et
                de la gestion de patrimoine.
              </li>
              <li>
                <strong>Mentoring entre pairs</strong> : partages d'expérience
                avec des anciens qui ont connu les mêmes succès et défis.
              </li>
              <li>
                <strong>Boîte à outils digitale</strong> : simulateurs de
                budget, fiches pratiques et check-lists pour analyser un contrat
                ou un investissement.
              </li>
            </ul>

            <p className="lede">
              <strong>Le conseil KABSA :</strong> le meilleur moment pour
              s'intéresser à son argent, c'est quand on commence à en gagner. Le
              deuxième meilleur moment, c'est aujourd'hui.
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
