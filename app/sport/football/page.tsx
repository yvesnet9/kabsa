"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function FootballPage() {
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
        <p>Découvrez le pôle Football de KABSA.</p>
        <VideoSlot youtubeId="cAKcN_P8tOo" title="Football — KABSA" vertical />
      </div>
      <div className="info-card">
        <h3>Entraînements</h3>
        <p>Exercices techniques, tactiques et préparation physique.</p>
        <VideoSlot youtubeId="TddtCxnvJO4" title="Football — Entraînements KABSA" vertical />
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
          <h3 className="rf-blocktitle">⚽ Présentation générale</h3>
          <p className="lede">
            <em>Un même ballon, une même passion, deux fois plus de talents.</em>
          </p>
          <p className="lede">
            Bienvenue au pôle Football de l&apos;association KABSA ! Que vous soyez un joueur
            expérimenté ou une joueuse débutante, notre club vous ouvre ses portes. Notre objectif
            est de promouvoir la pratique du football dans un esprit de respect, de progression et
            de convivialité. Nous croyons fermement à l&apos;égalité des chances et mettons un point
            d&apos;honneur à développer nos sections masculines et féminines avec le même niveau
            d&apos;exigence et d&apos;accompagnement.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤵‍♂️ Section Masculine</h3>
          <h4 className="rf-blocktitle">🏆 Nos Équipes &amp; Catégories</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>École de Foot (U6 à U11)</strong> : L&apos;apprentissage par le jeu, la
              motricité et l&apos;esprit d&apos;équipe.
            </li>
            <li>
              <strong>Section Jeunes (U12 à U18)</strong> : Le perfectionnement technique, la
              tactique et l&apos;entrée dans la compétition.
            </li>
            <li>
              <strong>Séniors &amp; Vétérans (18 ans et +)</strong> : La compétition de haut niveau
              ou le football loisir pour continuer à vibrer sur le terrain.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">👩‍🎓 Section Féminine</h3>
          <h4 className="rf-blocktitle">🌟 Le Foot Féminin chez KABSA : En pleine croissance !</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pôle Initiation (U7 à U11)</strong> : Découverte du football dans un
              environnement ludique et bienveillant.
            </li>
            <li>
              <strong>Pôle Pré-formation (U12 à U15)</strong> : Développement des compétences
              individuelles et collectives.
            </li>
            <li>
              <strong>Séniors Féminines (16 ans et +)</strong> : Esprit d&apos;équipe, esprit de
              gagne et compétitivité dans les championnats régionaux.
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
          <h3 className="rf-blocktitle">
            ⏱️ Horaires des Entraînements — Section Masculine <em>(à confirmer)</em>
          </h3>
          <ul className="lede disc-arrow-list">
            <li>U6 - U11 : Mercredi (14h00 - 15h30) et Samedi (10h00 - 11h30)</li>
            <li>U12 - U18 : Mardi et Jeudi (18h00 - 19h30)</li>
            <li>Séniors : Mardi et Jeudi (20h00 - 22h00)</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            ⏱️ Horaires des Entraînements — Section Féminine <em>(à confirmer)</em>
          </h3>
          <ul className="lede disc-arrow-list">
            <li>U7 - U11 Féminines : Mercredi (15h30 - 17h00)</li>
            <li>U12 - U15 Féminines : Lundi et Vendredi (17h30 - 19h00)</li>
            <li>Séniors Féminines : Lundi et Mercredi (19h30 - 21h30)</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏟️ Informations Pratiques &amp; Inscriptions</h3>
          <h4 className="rf-blocktitle">📝 Comment s&apos;inscrire ou se réinscrire ?</h4>
          <p className="lede">
            Pour rejoindre l&apos;association KABSA pour la saison, la procédure est simple :
          </p>
          <ul className="lede disc-arrow-list">
            <li>Remplir le formulaire d&apos;inscription.</li>
            <li>Faire remplir le certificat médical obligatoire par votre médecin.</li>
            <li>
              Fournir les pièces justificatives (photo d&apos;identité, copie de la pièce
              d&apos;identité).
            </li>
            <li>
              Retourner le dossier complet lors des permanences au secrétariat du club ou
              directement en ligne.
            </li>
          </ul>

          <h4 className="rf-blocktitle">💳 Tarifs des Cotisations</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Licence Jeune (U12 à U15)</strong> : tarif communiqué à l&apos;inscription
              (comprend l&apos;assurance, la licence et le pack équipement : maillot, short,
              chaussettes).
            </li>
            <li>
              <strong>Licence Adulte (U16 et +)</strong> : tarif communiqué à l&apos;inscription
              (comprend l&apos;assurance, la licence et le pack entraînement).
            </li>
            <li>
              <em>
                Note : un tarif dégressif est appliqué dès la deuxième inscription pour les membres
                d&apos;une même famille.
              </em>
            </li>
          </ul>

          <h4 className="rf-blocktitle">📅 Calendrier &amp; Classements</h4>
          <p className="lede">
            Suivez les exploits de nos équipes ! Retrouvez les dates des prochains matchs, les
            résultats et les classements officiels de toutes nos catégories.{" "}
            <strong>À venir.</strong>
          </p>

          <h4 className="rf-blocktitle">📸 Galerie Photos &amp; Actualités</h4>
          <p className="lede">
            <strong>À venir.</strong>
          </p>

          <h4 className="rf-blocktitle">📞 Contactez le Pôle Football</h4>
          <p className="lede">
            Une question sur les catégories, une demande d&apos;essai ou besoin d&apos;un
            renseignement ?
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
        <h2>Football</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
