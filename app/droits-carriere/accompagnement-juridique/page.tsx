"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function AccompagnementJuridiquePage() {
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
        <h2>Accompagnement juridique</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">Comprendre et défendre vos droits.</p>
            <p className="lede">
              Chez KABSA, l'accès à l'information juridique est le premier pas
              vers l'égalité des chances et la justice. Face à un litige, une
              discrimination ou une incompréhension contractuelle, vous n'êtes
              pas seul(e). Notre mission : vous orienter vers les conseils et
              les professionnels adaptés pour faire valoir vos droits.
            </p>

            <h3 className="rf-blocktitle">Nos domaines d'intervention</h3>
            <p className="lede">
              Nous vous guidons face aux difficultés juridiques majeures que
              vous pouvez rencontrer :
            </p>
            <ul className="lede">
              <li>
                <strong>Contrats de travail et engagements</strong> : décryptage
                des clauses, non-respect des engagements, ruptures de contrat ou
                litiges liés aux conditions de travail.
              </li>
              <li>
                <strong>Processus de sélection</strong> : accompagnement en cas
                de contestation ou de manque de transparence lors de concours,
                recrutements ou sélections professionnelles et académiques.
              </li>
              <li>
                <strong>Lutte contre les discriminations</strong> : soutien si
                vous estimez être victime de traitement inégal basé sur vos
                origines, votre genre, votre situation de handicap ou tout autre
                critère protégé par la loi.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Comment KABSA vous accompagne ?
            </h3>
            <p className="lede">
              KABSA n'est pas un cabinet d'avocats, mais votre passerelle de
              confiance vers les solutions juridiques existantes. Nous agissons
              en trois étapes :
            </p>
            <ul className="lede">
              <li>
                <strong>1. L'écoute et l'analyse</strong> : un espace d'écoute
                confidentiel pour exposer votre situation ; nos équipes vous
                aident à qualifier le problème et à identifier si vos droits ont
                été lésés.
              </li>
              <li>
                <strong>2. L'orientation personnalisée</strong> : selon la
                nature du litige, nous vous dirigeons vers le bon interlocuteur
                — avocats partenaires ou spécialisés, cliniques juridiques et
                permanences gratuites, institutions officielles et autorités de
                protection des droits.
              </li>
              <li>
                <strong>3. L'aide à la préparation</strong> : nous vous aidons à
                rassembler et organiser les pièces justificatives (échanges de
                mails, contrats, témoignages) pour un dossier solide avant de
                rencontrer un professionnel du droit.
              </li>
            </ul>

            <p className="lede">
              <strong>Vos droits méritent d'être défendus.</strong> Plus un
              litige est pris en charge tôt, plus il est facile de trouver une
              solution adaptée.
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
