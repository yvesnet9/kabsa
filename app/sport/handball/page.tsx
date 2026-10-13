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
          <h3 className="rf-blocktitle">Handball — Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans la section handball de KABSA. Joueur chevronné en quête de compétition ou
            débutant curieux de découvrir un sport collectif dynamique : nos sections s&apos;adaptent
            à tous les profils, chez les hommes comme chez les femmes.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section masculine</h3>
          <ul className="lede">
            <li>
              <strong>Équipe senior (compétition)</strong> : pour les joueurs confirmés — intensité,
              rigueur tactique et esprit d&apos;équipe.
            </li>
            <li>
              <strong>Équipe loisir / espoirs</strong> : pour les jeunes en transition ou les adultes
              qui privilégient le plaisir du jeu et la convivialité.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section féminine</h3>
          <ul className="lede">
            <li>
              <strong>Équipe senior (compétition)</strong> : un collectif soudé et ambitieux, esprit
              de corps et progression constante.
            </li>
            <li>
              <strong>Équipe loisir / découverte</strong> : un espace bienveillant pour apprendre les
              bases et partager des moments forts.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Nos valeurs sur le terrain</h3>
          <ul className="lede">
            <li>
              <strong>Le respect</strong> : arbitres, adversaires, partenaires, public.
            </li>
            <li>
              <strong>La solidarité</strong> : aucun exploit n&apos;est individuel.
            </li>
            <li>
              <strong>L&apos;engagement</strong> : donner le meilleur, à l&apos;entraînement comme en
              match.
            </li>
            <li>
              <strong>La convivialité</strong> : prolonger le plaisir du jeu grâce aux événements de
              l&apos;association.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Comment nous rejoindre ?</h3>
          <p className="lede">
            Les inscriptions sont ouvertes à partir de septembre, mais il reste possible de nous
            rejoindre en cours d&apos;année selon les places disponibles. Deux séances d&apos;essai
            gratuites : venez en tenue de sport avec une bouteille d&apos;eau.
          </p>
          <p className="lede">
            Tarifs, licences, niveau requis : notre équipe est à votre écoute.
          </p>
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
          <h3 className="rf-blocktitle">Horaires des entraînements</h3>
          <p className="lede">
            Les entraînements se déroulent tout au long de la saison (hors vacances scolaires) dans
            nos installations partenaires. Les horaires sont communiqués à l&apos;inscription.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>
          <p className="lede">Les tarifs sont communiqués à l&apos;inscription.</p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Séances d&apos;essai</h3>
          <p className="lede">
            Deux séances d&apos;essai gratuites : venez en tenue de sport avec une bouteille
            d&apos;eau.
          </p>
        </div>

        {mediaColumn}
      </div>

      {contactCta}
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
