"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function FormationSponsoringPage() {
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
        <h2>Formation &amp; sponsoring</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Professionnaliser les structures et connecter les talents aux
              meilleurs partenaires.
            </p>
            <p className="lede">
              Le développement du sport passe par la montée en compétences de
              ses acteurs et la pérennité de ses infrastructures. Notre mission
              est double : former les structures sportives et propulser les
              talents en les connectant aux partenaires économiques.
            </p>

            <h3 className="rf-blocktitle">
              1. Formation du personnel des fédérations
            </h3>
            <p className="lede">
              La performance sur le terrain commence dans les bureaux.
            </p>
            <ul className="lede">
              <li>
                <strong>Gouvernance &amp; administration</strong> : gestion
                interne optimisée, respect des normes internationales.
              </li>
              <li>
                <strong>Management sportif</strong> : planification stratégique
                et gestion de projets sportifs d'envergure.
              </li>
              <li>
                <strong>Marketing &amp; communication</strong> : valoriser son
                image, digitaliser sa communication, attirer le public.
              </li>
              <li>
                <strong>Gestion financière</strong> : optimiser les budgets,
                assurer la transparence.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              2. Formation &amp; perfectionnement des arbitres
            </h3>
            <ul className="lede">
              <li>
                <strong>Maîtrise du règlement</strong> : mises à niveau sur les
                dernières évolutions des lois du jeu.
              </li>
              <li>
                <strong>Préparation physique &amp; mentale</strong> : condition
                athlétique optimale, gestion de la pression.
              </li>
              <li>
                <strong>Technologie &amp; arbitrage</strong> : initiation et
                perfectionnement aux outils d'aide à l'arbitrage.
              </li>
              <li>
                <strong>Certifications internationales</strong> : accompagnement
                vers les badges et reconnaissances continentales et mondiales.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              3. Connexion sponsors &amp; équipementiers
            </h3>
            <p className="lede">
              Une passerelle stratégique entre le sport et le secteur privé.
            </p>
            <div className="info-grid" style={{ marginTop: 14 }}>
              <div className="info-card">
                <h3>Pour les fédérations &amp; athlètes</h3>
                <p>
                  Recherche de financements (mise en relation avec des
                  entreprises), dotation en équipements (négociation avec des
                  équipementiers), activation de sponsoring (dossiers attractifs
                  et professionnels).
                </p>
              </div>
              <div className="info-card">
                <h3>Pour les entreprises &amp; équipementiers</h3>
                <p>
                  Visibilité maximale (image associée à la jeunesse, la
                  performance et l'inclusion), RSE &amp; impact local
                  (engagements sociétaux concrets), réseau exclusif
                  (fédérations, événements et athlètes à fort potentiel).
                </p>
              </div>
            </div>

            <p className="lede">
              <strong>Rejoignez la dynamique KABSA.</strong> Fédération en quête
              de professionnalisation, arbitre ambitieux ou entreprise désireuse
              de soutenir le sport : nous avons une solution.
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
