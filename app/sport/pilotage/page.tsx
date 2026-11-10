"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function PilotagePage() {
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
        <p>Découvrez la section Pilotage de KABSA.</p>
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
        <h3>Circuits &amp; roulages</h3>
        <p>Meilleurs moments sur piste.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Pilotes KABSA</h3>
        <p>Parcours des meilleurs pilotes, hommes et femmes.</p>
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
          <h3 className="rf-blocktitle">
            🏎️ Pilotage Auto &amp; Moto : Le Sens du Partage et de la Performance
          </h3>
          <p className="lede">
            Bienvenue dans l&apos;univers des sports mécaniques de l&apos;association KABSA. Pour
            nous, le pilotage va bien au-delà de la vitesse : c&apos;est une école de maîtrise, de
            discipline et de passion partagée. Que vous soyez un pilote chevronné ou que vous
            souhaitiez monter à bord pour la première fois, nos activités s&apos;adaptent à toutes
            les envies.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏁 Une Passion, Zéro Limite : La Mixité au Cœur des Circuits
          </h3>
          <p className="lede">
            Chez KABSA, nous croyons fermement que les trajectoires parfaites n&apos;ont pas de
            genre. Nous mettons un point d&apos;honneur à promouvoir la mixité et
            l&apos;accessibilité dans un univers parfois perçu comme fermé.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Pilotage Féminin</strong>{" "}: Des sessions, stages et ateliers pensés pour
              encourager les femmes à prendre le volant ou le guidon. Rejoignez une communauté
              grandissante de passionnées qui repoussent leurs limites, brisent les stéréotypes et
              s&apos;imposent sur l&apos;asphalte.
            </li>
            <li>
              <strong>Pilotage Masculin</strong>{" "}: Un espace de camaraderie, de perfectionnement
              technique et de saine émulation où le respect mutuel et l&apos;esprit d&apos;équipe
              restent la priorité absolue.
            </li>
            <li>
              <strong>Événements Mixtes</strong>{" "}: Des journées de roulage, des endurances et des
              challenges karting où hommes et femmes partagent les mêmes grilles de départ et
              vibrent au même rythme.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🛠️ Nos Activités sur Piste et Circuit</h3>
          <p className="lede">
            Découvrez nos programmes conçus pour vous faire progresser en toute sécurité :
          </p>
          <h4 className="rf-blocktitle">🚗 Section Automobile</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Baptêmes de piste</strong>{" "}: Enfilez votre casque et installez-vous en
              passager aux côtés de nos pilotes instructeurs pour un shot d&apos;adrénaline pure.
            </li>
            <li>
              <strong>Stages de perfectionnement</strong>{" "}: Apprenez les techniques de trajectoire,
              le freinage dégressif et la gestion du regard pour optimiser vos chronos.
            </li>
            <li>
              <strong>Sorties Trackdays</strong>{" "}: Venez rouler avec votre propre véhicule ou
              profitez de nos voitures partenaires lors de journées dédiées sur les plus beaux
              circuits.
            </li>
          </ul>
          <h4 className="rf-blocktitle">🏍️ Section Moto</h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Initiation au guidon</strong>{" "}: Sautez le pas et découvrez les sensations de
              la moto sur un espace sécurisé.
            </li>
            <li>
              <strong>Pilotage sur circuit</strong>{" "}: Maîtrisez l&apos;art du déhanché, améliorez
              votre positionnement et comprenez la dynamique de votre machine en courbe.
            </li>
            <li>
              <strong>Ateliers sécurité &amp; mécanique</strong>{" "}: Parce qu&apos;un bon pilote
              connaît sa machine, nous animons des ateliers sur l&apos;entretien de base et les
              réglages de suspensions.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🤝 Pourquoi Rejoindre la Team KABSA ?</h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Encadrement bienveillant</strong>{" "}: Nos sessions sont supervisées par des
              passionnés expérimentés et des professionnels certifiés qui placent votre sécurité en
              priorité.
            </li>
            <li>
              <strong>Esprit de club</strong>{" "}: Pas de jugement ici. On s&apos;entraide dans les
              stands et on partage nos conseils après chaque session.
            </li>
            <li>
              <strong>Accessibilité financière</strong>{" "}: Grâce à nos partenaires, nous négocions
              des tarifs avantageux pour rendre la pratique sur circuit accessible au plus grand
              nombre.
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
            Sessions, stages et journées de roulage ; horaires et tarifs communiqués à
            l&apos;inscription (tarifs avantageux grâce à nos partenaires).
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">📢 Prêt(e) à faire rugir le moteur ?</h3>
          <p className="lede">
            Que vous cherchiez la performance chronométrée ou le simple plaisir de la glisse, votre
            place est parmi nous.
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
        <h2>Pilotage auto &amp; moto</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
