"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function BasketballPage() {
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
      { threshold: 0.12 }
    );
    document.querySelectorAll(".kabsa .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mediaColumn = (
    <aside className="disc-media">
      <div className="info-card">
        <h3>Présentation</h3>
        <p>Découvrez le pôle Basketball de KABSA.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Exercices techniques, tactiques et préparation physique.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts et coulisses du club.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Matchs &amp; compétitions</h3>
        <p>Meilleurs moments des championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Stars joueurs KABSA</h3>
        <p>Parcours des meilleurs joueurs et joueuses.</p>
        <VideoSlot />
      </div>
    </aside>
  );

  const contactCta = (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
      <Link href="/contact" className="info-cta">
        Nous contacter
      </Link>
    </div>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">🏀 Basketball Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié aux pôles compétitifs et loisirs de
            l&apos;association KABSA. Notre club met un point d&apos;honneur à développer le
            basketball à tous les niveaux, en garantissant une parité et des opportunités égales
            pour les basketteurs et les basketteuses. Que vous cherchiez la compétition de haut
            niveau ou une pratique récréative, vous trouverez l&apos;équipe qui vous correspond.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">👩 Pôle Féminin</h3>
          <p className="lede">
            Le pôle féminin de KABSA incarne l&apos;esprit d&apos;équipe, l&apos;ambition et le
            dépassement de soi. Inspirées par le rayonnement international des grandes équipes, nos
            joueuses portent fièrement nos couleurs sur les parquets.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Équipes Féminines</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Seniors Dames (Compétition)</strong>{" "}: Équipe première engagée en championnat
              régional. Objectif de performance et accès aux play-offs.
            </li>
            <li>
              <strong>U19 / U16 Filles (Jeunes)</strong>{" "}: Formation technique avancée, transition
              vers le niveau adulte et esprit d&apos;équipe.
            </li>
            <li>
              <strong>Basket Loisir / Écoles de Basket</strong>{" "}: Pour apprendre les bases ou
              s&apos;entretenir sans la pression des matchs officiels.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👨 Pôle Masculin</h3>
          <p className="lede">
            Du perfectionnement des jeunes talents à l&apos;expérience de nos équipes seniors, le
            pôle masculin de KABSA propose un cadre structuré pour progresser, performer et partager
            la passion du ballon orange.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Équipes Masculines</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Seniors Messieurs (Compétition)</strong>{" "}: Équipes engagées en divisions
              régionales et provinciales. Un jeu physique, tactique et spectaculaire.
            </li>
            <li>
              <strong>U21 / U18 / U14 Garçons</strong>{" "}: Championnats de jeunes axés sur le
              développement rigoureux des compétences individuelles et collectives.
            </li>
            <li>
              <strong>Anciens / Loisirs</strong>{" "}: Pour les passionnés qui souhaitent continuer à
              pratiquer le 5x5 ou le 3x3 dans une ambiance conviviale.
            </li>
          </ul>
        </div>

        {mediaColumn}
      </div>

      {contactCta}
    </>
  );

  const horairesTarifsContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">⚙️ Informations Pratiques &amp; Inscriptions</h3>
          <p className="lede">
            <em>Horaires et Salles d&apos;Entraînement</em>{" "}— Les entraînements se déroulent tout au
            long de la semaine dans nos installations partenaires. Le planning détaillé par
            catégorie (jours, heures, salles) est communiqué à l&apos;inscription.
          </p>
          <h4 className="rf-blocktitle">💳 Tarifs et Cotisations</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Licence Compétition (Jeunes &amp; Seniors)</strong>{" "}: tarif communiqué à
              l&apos;inscription (inclus : assurance, maillot officiel, accès aux entraînements et
              matchs).
            </li>
            <li>
              <strong>Licence Loisir / Académie</strong>{" "}: tarif communiqué à l&apos;inscription
              (inclus : assurance et entraînements).
            </li>
          </ul>
          <h4 className="rf-blocktitle">📅 Calendrier des matchs (féminins &amp; masculins)</h4>
          <p className="lede"><strong>À venir.</strong></p>
          <h4 className="rf-blocktitle">🤝 Rejoignez l&apos;Aventure KABSA !</h4>
          <p className="lede">
            Vous souhaitez faire un essai gratuit, devenir bénévole, encadrer une équipe ou devenir
            partenaire de notre section basket ? Contactez-nous dès aujourd&apos;hui.
          </p>
          {contactCta}
        </div>

        {mediaColumn}
      </div>
    </>
  );

  const comingSoonContent = <p className="lede tab-placeholder">Contenu à venir.</p>;

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "accessibilite", label: "Accessibilité & pratique", content: comingSoonContent },
    { id: "infrastructures", label: "Infrastructures", content: comingSoonContent },
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: horairesTarifsContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Basketball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
