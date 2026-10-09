"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function FormationEncadrantsPage() {
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
        <h2>Formation des encadrants</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Préparer entraîneurs et animateurs à un encadrement de qualité,
              adapté aux sportifs valides et handisport.
            </p>
            <p className="lede">
              La clé d'un sport inclusif et épanouissant réside dans la
              compétence et la sensibilité de ceux qui le guident. KABSA place
              la formation de ses entraîneurs, éducateurs et animateurs au cœur
              de son projet associatif, pour garantir à chaque pratiquant —
              valide ou en situation de handicap — un accompagnement sécurisé,
              performant et profondément humain.
            </p>

            <h3 className="rf-blocktitle">Nos objectifs pédagogiques</h3>
            <p className="lede">
              Nos programmes s'articulent autour de quatre piliers :
            </p>
            <ul className="lede">
              <li>
                <strong>L'excellence technique</strong> : maîtriser les
                fondamentaux de l'entraînement et de l'animation pour tous les
                niveaux.
              </li>
              <li>
                <strong>L'inclusion et la mixité</strong> : adapter sa
                pédagogie, sa communication et ses exercices pour faire
                cohabiter sportifs valides et handisport.
              </li>
              <li>
                <strong>La sécurité et la physiologie</strong> : comprendre les
                spécificités liées aux différents types de handicaps (moteurs,
                sensoriels, psychiques) pour adapter l'effort sans risque.
              </li>
              <li>
                <strong>Les valeurs KABSA</strong> : transmettre la solidarité,
                le respect mutuel et le dépassement de soi.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Les axes de formation
            </h3>
            <ul className="lede">
              <li>
                <strong>
                  1. Tronc commun — les fondations de l'encadrement
                </strong>{" "}
                : méthodologie de l'animation et de l'entraînement ; psychologie
                du sport, motivation et cohésion d'équipe ; gestion des groupes
                mixtes et hétérogènes.
              </li>
              <li>
                <strong>2. Spécificité handisport &amp; sport adapté</strong> :
                connaissance des publics, pathologies et typologies de handicap
                ; prise en main et entretien du matériel spécifique (fauteuils
                sportifs, guides, outils sensoriels) ; réglementation,
                classification des athlètes et éthique du handisport.
              </li>
              <li>
                <strong>3. Pratique terrain &amp; tutorat</strong> : mises en
                situation réelles lors de nos séances inclusives ; analyse des
                pratiques et partage d'expériences entre pairs ; accompagnement
                par des mentors certifiés.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Pourquoi devenir encadrant chez KABSA ?
            </h3>
            <ul className="lede">
              <li>
                <strong>Une formation certifiante et reconnue</strong> : en
                collaboration avec les fédérations partenaires (brevets
                fédéraux, CQH, etc.).
              </li>
              <li>
                <strong>Un impact social concret</strong> : devenir un acteur
                clé de l'accès au sport pour tous dans sa région.
              </li>
              <li>
                <strong>Une aventure humaine unique</strong> : rejoindre une
                communauté de passionnés.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">Témoignages</h3>
            <p className="lede tab-placeholder">Témoignages à venir.</p>

            <p className="lede">
              <strong>Rejoignez le mouvement.</strong> Entraîneur diplômé
              souhaitant s'ouvrir au handisport, ancien athlète désireux de
              transmettre, ou bénévole motivé : KABSA vous accompagne et vous
              forme.
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
