"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function GestionCarrierePage() {
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
        <h2>Gestion de carrière &amp; finances</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Sécuriser votre présent pour protéger votre avenir.
            </p>
            <p className="lede">
              Primes, contrats, sponsors : beaucoup de talents se retrouvent en
              difficulté faute d'accompagnement. Le talent sur le terrain ne
              suffit pas si l'arrière-boutique n'est pas maîtrisée. KABSA
              sensibilise à une gestion saine et à la protection de l'avenir du
              sportif, afin que votre carrière devienne un tremplin pour toute
              votre vie.
            </p>

            <h3 className="rf-blocktitle">Nos objectifs</h3>
            <ul className="lede">
              <li>
                <strong>Éduquer</strong> : comprendre les rouages financiers et
                juridiques du sport de haut niveau.
              </li>
              <li>
                <strong>Protéger</strong> : éviter les pièges contractuels et
                l'entourage malveillant.
              </li>
              <li>
                <strong>Anticiper</strong> : préparer l'après-carrière dès la
                signature du premier contrat.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Nos domaines d'accompagnement
            </h3>
            <ul className="lede">
              <li>
                <strong>Contrats &amp; protection juridique</strong> :
                décryptage des clauses pour ne jamais signer à l'aveugle ;
                sensibilisation aux droits d'image et aux obligations des
                sponsors ; aide au choix de l'entourage professionnel (agents,
                avocats).
              </li>
              <li>
                <strong>Éducation financière &amp; budgétaire</strong> : gestion
                des flux de revenus (primes, salaires, sponsoring) ;
                sensibilisation à la fiscalité ; stratégies d'épargne adaptées à
                la durée limitée d'une carrière sportive.
              </li>
              <li>
                <strong>Reconversion &amp; anticipation</strong> : bilans de
                compétences ; formations continues aménagées ; passerelles avec
                le monde de l'entreprise et de l'entrepreneuriat.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Comment nous vous aidons ?
            </h3>
            <ul className="lede">
              <li>
                <strong>Ateliers collectifs</strong> : sessions de
                sensibilisation sur la gestion de budget et les dangers du
                circuit financier.
              </li>
              <li>
                <strong>Suivi individuel</strong> : des points réguliers pour
                faire le point sur vos projets de vie et votre situation.
              </li>
              <li>
                <strong>Réseau d'experts</strong> : mise en relation avec des
                professionnels de confiance (gestionnaires de patrimoine,
                juristes).
              </li>
            </ul>

            <p className="lede">
              <strong>Le constat KABSA :</strong> une carrière sportive est
              courte, mais la vie après le sport est longue. Notre mission est
              de vous donner les clés pour rester maître de votre destin, sur le
              terrain comme en dehors.
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
