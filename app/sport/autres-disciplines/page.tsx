"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function AutresDisciplinesPage() {
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
        <p>Découvrez l&apos;Académie KABSA.</p>
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
        <h3>Événements multisports</h3>
        <p>Moments forts de la vie de l&apos;académie.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Encadrants KABSA</h3>
        <p>Parcours des encadrants de l&apos;académie.</p>
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
            🌐 Autres disciplines — Envie de faire grandir l&apos;Académie avec nous ?
          </h3>
          <p className="lede">
            Chez KABSA, notre vision du sport et de l&apos;épanouissement ne s&apos;arrête pas aux
            frontières des disciplines actuelles. Nous croyons fermement que la diversité des
            pratiques enrichit notre communauté et offre de nouvelles opportunités à nos membres.
            L&apos;académie a vocation à évoluer, et votre discipline y a peut-être sa place !
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Pourquoi rejoindre l&apos;Académie KABSA ?
          </h3>
          <p className="lede">
            Intégrer notre structure, c&apos;est bénéficier d&apos;un écosystème solide pour
            développer votre activité :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Infrastructures &amp; Logistique</strong>{" "}: Un accès à des espaces adaptés et
              une gestion facilitée.
            </li>
            <li>
              <strong>Visibilité accrue</strong>{" "}: Profitez de la communication de
              l&apos;association pour toucher un public plus large.
            </li>
            <li>
              <strong>Synergie associative</strong>{" "}: Échangez avec d&apos;autres encadrants et
              participez à des projets transversaux et des événements multisports.
            </li>
            <li>
              <strong>Valeurs partagées</strong>{" "}: Rejoignez une aventure humaine axée sur le
              respect, le dépassement de soi et l&apos;esprit d&apos;équipe.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">🚀 Quel profil recherchons-nous ?</h3>
          <p className="lede">
            Que vous soyez un entraîneur passionné, un club en quête de partenariats ou le porteur
            d&apos;un projet sportif innovant, nous étudions toutes les propositions :
          </p>
          <ul className="lede disc-arrow-list">
            <li>Arts martiaux ou sports de combat complémentaires</li>
            <li>Sports collectifs ou individuels</li>
            <li>Disciplines de bien-être, fitness ou expression corporelle</li>
            <li>Nouvelles pratiques émergentes ou urbaines</li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">📩 Contactez-nous !</h3>
          <p className="lede">
            Vous avez un projet, une équipe, ou simplement l&apos;envie de proposer une nouvelle
            activité au sein de KABSA ? Rencontrons-nous pour en discuter !
          </p>
          {contactCta}
          <p className="lede" style={{ marginTop: 18 }}>
            <em>« Seul on va plus vite, ensemble on va plus loin. Rejoignez l&apos;aventure KABSA !
            »</em>
          </p>
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
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: comingSoonContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Autres disciplines</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
