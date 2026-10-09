"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

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

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Un entourage de confiance</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Un écosystème d'experts et un cadre bienveillant pour sécuriser
              votre carrière et votre avenir.
            </p>
            <p className="lede">
              Le sport de haut niveau exige une concentration totale, mais les
              questions juridiques, financières ou personnelles peuvent vite
              devenir des sources de stress. KABSA joue le rôle de bouclier et
              de facilitateur : un réseau de professionnels rigoureusement
              sélectionnés pour vous guider à chaque étape.
            </p>

            <h3 className="rf-blocktitle">
              Nos trois piliers d'accompagnement
            </h3>
            <ul className="lede">
              <li>
                <strong>1. Expertise juridique &amp; administrative</strong> :
                analyse de contrats (travail, sponsoring, agents), protection du
                droit à l'image, mise en relation avec des avocats spécialisés
                en droit du sport.
              </li>
              <li>
                <strong>
                  2. Conseils financiers &amp; gestion de patrimoine
                </strong>{" "}
                : éducation financière adaptée aux carrières courtes, fiscalité
                simplifiée, connexion avec des conseillers en gestion de
                patrimoine et fiscalistes de confiance.
              </li>
              <li>
                <strong>3. Un cadre bienveillant &amp; humain</strong> : écoute
                sans jugement, soutien global (gestion du stress, reconversion,
                moments de doute), réseau d'entraide avec d'anciens sportifs.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Comment ça marche ?
            </h3>
            <ul className="lede">
              <li>
                <strong>1. Le premier contact</strong> : vous exposez votre
                problématique en toute confidentialité.
              </li>
              <li>
                <strong>2. Le diagnostic</strong> : nous ciblons la nature de
                votre besoin (avocat, comptable, ou simplement une oreille
                attentive).
              </li>
              <li>
                <strong>3. La mise en relation</strong> : nous vous connectons
                avec l'expert le plus qualifié de notre réseau.
              </li>
            </ul>

            <p className="lede">
              <strong>Le gage KABSA :</strong> tous nos partenaires experts
              signent une charte de déontologie stricte — des conseils
              transparents, neutres et orientés vers le seul intérêt du sportif.
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
