"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function CyclismePage() {
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
        <p>Découvrez la section Cyclisme de KABSA.</p>
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
        <h3>Sorties &amp; courses</h3>
        <p>Meilleurs moments des sorties et compétitions.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Cyclistes KABSA</h3>
        <p>Parcours des meilleurs cyclistes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">🚴‍♂️ Cyclisme Masculin &amp; Féminin</h3>
          <p className="lede">
            Chez KABSA, nous croyons que le vélo est un formidable vecteur de rassemblement, de
            dépassement de soi et de mixité. Notre section cyclisme incarne cette vision en offrant
            un espace où hommes et femmes partagent la même passion de la route, de la piste ou des
            sentiers, quel que soit leur niveau. Nous prônons un cyclisme inclusif où la parité
            n&apos;est pas qu&apos;un mot, mais une réalité partagée à chaque coup de pédale.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Notre Philosophie : Rouler Ensemble, Sans Distinction
          </h3>
          <p className="lede">
            La section cyclisme de KABSA repose sur trois piliers fondamentaux :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>La mixité sur la route</strong>{" "}: Nos entraînements et sorties loisirs sont
              ouverts à tous. Nous favorisons l&apos;entraide, le partage d&apos;expérience et la
              convivialité entre cyclistes masculins et féminins.
            </li>
            <li>
              <strong>L&apos;équité dans l&apos;accompagnement</strong>{" "}: Que vous participiez à une
              course locale ou à une randonnée cyclotouriste, chaque membre bénéficie des mêmes
              conseils techniques, du même suivi et du même soutien logistique.
            </li>
            <li>
              <strong>La valorisation du cyclisme féminin</strong>{" "}: Nous mettons un point
              d&apos;honneur à encourager la pratique des femmes, encore trop souvent
              sous-représentées dans le peloton, en créant un environnement sécurisant et stimulant.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📅 Nos Activités &amp; Entraînements</h3>
          <p className="lede">
            Pour que chacun trouve son rythme, nous proposons différentes formules adaptées aux
            objectifs de nos adhérents :
          </p>
          <h4 className="rf-blocktitle">🚴‍♀️ Sorties Loisirs &amp; Cyclotourisme</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Débutants, passionnés de paysages et adeptes de la petite reine sans
            chronomètre. <em>Le programme :</em>{" "}des sorties hebdomadaires (généralement le
            week-end) avec plusieurs groupes de niveau — rouler ensemble, progresser à son rythme et
            partager un moment convivial.
          </p>
          <h4 className="rf-blocktitle">⚡ Entraînements Performance &amp; Compétition</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Cyclistes (hommes et femmes) souhaitant préparer des cyclosportives,
            des courses régionales ou améliorer leur endurance. <em>Le programme :</em>{" "}séances de
            fractionné, travail de relance, techniques de peloton et gestion de l&apos;effort.
          </p>
          <h4 className="rf-blocktitle">🔧 Ateliers Mécaniques &amp; Sécurité</h4>
          <p className="lede">
            <em>Pour qui ?</em>{" "}Tout le monde. <em>Le programme :</em>{" "}apprendre à changer une
            chambre à air, régler son dérailleur, entretenir sa transmission et adopter les bons
            réflexes de sécurité en groupe.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">🏆 Nos Engagements pour la Parité</h3>
          <p className="lede">
            L&apos;association KABSA s&apos;engage activement pour le développement du sport au
            féminin comme au masculin à travers :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              Des groupes de niveau homogènes (et non par genre) pour que chacun roule à sa juste
              valeur.
            </li>
            <li>
              Des parrains et marraines de club pour guider les nouveaux arrivants et faciliter leur
              intégration.
            </li>
            <li>
              La promotion et la participation paritaire aux événements et compétitions officiels.
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
          <p className="lede">
            Sorties hebdomadaires (généralement le week-end) ; horaires et tarifs communiqués à
            l&apos;inscription. Calendrier des sorties communiqué aux adhérents.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">💬 Rejoignez le Peloton KABSA !</h3>
          <p className="lede">
            Que vous soyez un cycliste chevronné ou que vous souhaitiez vous remettre en selle, vous
            avez votre place parmi nous. Nos maîtres-mots sont le respect, la convivialité et le
            plaisir de rouler.
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
        <h2>Cyclisme</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
