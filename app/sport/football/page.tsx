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
          <h3 className="rf-blocktitle">Football — Masculin &amp; Féminin</h3>
          <p className="lede">
            <em>Un même ballon, une même passion, deux fois plus de talents.</em>
          </p>
          <p className="lede">
            Bienvenue au pôle Football de KABSA. Joueur expérimenté ou joueuse débutante, le club
            vous ouvre ses portes : promouvoir la pratique du football dans un esprit de respect, de
            progression et de convivialité. Nous développons nos sections masculines et féminines
            avec le même niveau d&apos;exigence et d&apos;accompagnement.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section masculine — nos équipes &amp; catégories</h3>
          <ul className="lede">
            <li>
              <strong>École de foot (U6 à U11)</strong> : apprentissage par le jeu, motricité et
              esprit d&apos;équipe.
            </li>
            <li>
              <strong>Section jeunes (U12 à U18)</strong> : perfectionnement technique, tactique et
              entrée dans la compétition.
            </li>
            <li>
              <strong>Séniors &amp; vétérans (18 ans et +)</strong> : compétition ou football loisir.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Section féminine — en pleine croissance</h3>
          <ul className="lede">
            <li>
              <strong>Pôle initiation (U7 à U11)</strong> : découverte dans un environnement ludique
              et bienveillant.
            </li>
            <li>
              <strong>Pôle pré-formation (U12 à U15)</strong> : développement des compétences
              individuelles et collectives.
            </li>
            <li>
              <strong>Séniors féminines (16 ans et +)</strong> : esprit d&apos;équipe et
              compétitivité en championnats régionaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">Informations pratiques &amp; inscriptions</h3>
          <p className="lede">
            Procédure d&apos;inscription : remplir le formulaire, faire compléter le certificat
            médical obligatoire par votre médecin, fournir les pièces justificatives (photo
            d&apos;identité, copie de la pièce d&apos;identité), puis retourner le dossier complet au
            secrétariat ou en ligne.
          </p>
          <p className="lede">
            Calendrier &amp; classements : à venir. Galerie photos &amp; actualités : à venir.
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
          <h4 className="rf-blocktitle">Section masculine</h4>
          <ul className="lede">
            <li>U6–U11 : mercredi 14h00–15h30 et samedi 10h00–11h30</li>
            <li>U12–U18 : mardi et jeudi 18h00–19h30</li>
            <li>Séniors : mardi et jeudi 20h00–22h00</li>
          </ul>
          <h4 className="rf-blocktitle">Section féminine</h4>
          <ul className="lede">
            <li>U7–U11 féminines : mercredi 15h30–17h00</li>
            <li>U12–U15 féminines : lundi et vendredi 17h30–19h00</li>
            <li>Séniors féminines : lundi et mercredi 19h30–21h30</li>
          </ul>
          <p className="lede">
            <em>Horaires à confirmer.</em>
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">Tarifs</h3>
          <p className="lede">
            Les tarifs sont communiqués à l&apos;inscription (licence jeune / licence adulte
            incluant assurance, licence et pack équipement ; tarif dégressif dès la 2ᵉ inscription
            d&apos;une même famille).
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
        <h2>Football</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
