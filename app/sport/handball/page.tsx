"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function HandballPage() {
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
        <p>Découvrez la section Handball de KABSA.</p>
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
          <h3 className="rf-blocktitle">🤾‍♂️ Handball Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans la section dédiée au handball chez KABSA ! Que vous soyez un joueur
            chevronné à la recherche de compétition ou un débutant souhaitant découvrir un sport
            collectif dynamique, notre association propose des sections adaptées à tous les profils,
            chez les hommes comme chez les femmes.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📋 Nos Sections &amp; Catégories</h3>
          <p className="lede">
            Nous croyons en l&apos;égalité des chances et au développement du sport pour tous. Nos
            équipes sont structurées pour permettre à chacun de s&apos;épanouir à son niveau.
          </p>
          <h4 className="rf-blocktitle">🧑 Section Masculine</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipe Senior (Compétition)</strong>{" "}: Destinée aux joueurs confirmés qui
              souhaitent défendre les couleurs de KABSA en championnat. Intensité, rigueur tactique
              et esprit d&apos;équipe.
            </li>
            <li>
              <strong>Équipe Loisir / Espoirs</strong>{" "}: Parfaite pour les jeunes en transition ou
              les adultes qui privilégient le plaisir du jeu, le maintien en forme et la
              convivialité sans la pression du résultat.
            </li>
          </ul>
          <h4 className="rf-blocktitle">👩 Section Féminine</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Équipe Senior (Compétition)</strong>{" "}: Un collectif soudé et ambitieux engagé
              en compétition. Esprit de corps, dépassement de soi et progression constante sont au
              rendez-vous.
            </li>
            <li>
              <strong>Équipe Loisir / Découverte</strong>{" "}: Un espace bienveillant pour apprendre
              les bases du handball, se dépenser et partager des moments forts au sein d&apos;un
              groupe dynamique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🎯 Nos Valeurs sur le Terrain</h3>
          <p className="lede">
            Rejoindre la section handball de KABSA, c&apos;est adhérer à une philosophie sportive
            basée sur 4 piliers essentiels :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le Respect</strong>{" "}: Envers les arbitres, les adversaires, les partenaires et
              le public.
            </li>
            <li>
              <strong>La Solidarité</strong>{" "}: Le handball est le sport collectif par excellence ;
              aucun exploit n&apos;est individuel.
            </li>
            <li>
              <strong>L&apos;Engagement</strong>{" "}: Donner le meilleur de soi-même, à
              l&apos;entraînement comme en match.
            </li>
            <li>
              <strong>La Convivialité</strong>{" "}: Prolonger le plaisir du jeu en dehors du terrain
              grâce aux événements de l&apos;association.
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
          <h3 className="rf-blocktitle">🗓️ Horaires et Lieux d&apos;Entraînement</h3>
          <p className="lede">
            Les entraînements se déroulent tout au long de la saison (hors vacances scolaires) dans
            nos installations partenaires. Horaires communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">✍️ Comment nous rejoindre ?</h3>
          <p className="lede">
            Les inscriptions sont ouvertes à partir du mois de septembre, mais il reste possible de
            nous rejoindre en cours d&apos;année selon les places disponibles.
          </p>
          <p className="lede">
            <em>Envie de tester avant de vous engager ?</em>{" "}Nous vous offrons <strong>deux séances
            d&apos;essai gratuites</strong>{" "}! Venez simplement en tenue de sport avec une bouteille
            d&apos;eau.
          </p>
          <p className="lede"><strong>💳 Tarifs</strong>{" "}: communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📞 Contactez la Section Handball</h3>
          <p className="lede">
            Une question sur les tarifs, les licences ou le niveau requis ? Notre équipe
            administrative et nos entraîneurs sont à votre écoute.
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
        <h2>Handball</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
