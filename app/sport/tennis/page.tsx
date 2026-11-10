"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";
import VideoSlot from "@/components/VideoSlot";

export default function TennisPage() {
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
        <p>Découvrez la section Tennis de KABSA.</p>
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
        <h3>Matchs &amp; tournois</h3>
        <p>Meilleurs moments des tournois et championnats.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir bientôt.</p>
        <VideoSlot />
      </div>
      <div className="info-card">
        <h3>Joueurs &amp; joueuses KABSA</h3>
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
          <h3 className="rf-blocktitle">🎾 Tennis Masculin &amp; Féminin</h3>
          <p className="lede">
            Bienvenue dans l&apos;espace dédié au tennis de l&apos;association KABSA ! Que vous
            soyez un joueur compétiteur dans l&apos;âme, un adepte du jeu en loisir ou une joueuse
            souhaitant reprendre le sport dans une ambiance conviviale, notre section tennis est
            ouverte à toutes et à tous, sans distinction de niveau.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👥 Nos Engagements : Mixité, Performance et Plaisir
          </h3>
          <p className="lede">
            À l&apos;association KABSA, nous croyons que le tennis est un formidable vecteur de
            cohésion sociale, de dépassement de soi et de bien-être. Notre section se décline au
            masculin comme au féminin pour répondre aux attentes de chacun :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Un accès égal pour tous</strong>{" "}: Des créneaux horaires équitablement
              répartis et des infrastructures de qualité accessibles à nos joueuses et joueurs.
            </li>
            <li>
              <strong>Une ambiance inclusive</strong>{" "}: Un parfait équilibre entre l&apos;esprit de
              compétition et le plaisir de se retrouver sur le court.
            </li>
            <li>
              <strong>Un encadrement de qualité</strong>{" "}: Des entraîneurs diplômés pour vous
              accompagner dans votre progression technique, tactique et physique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            👕 La Section Féminine : Dynamisme et Progression
          </h3>
          <p className="lede">
            Le tennis féminin au sein de KABSA est en plein essor ! Nous mettons un point
            d&apos;honneur à créer un environnement bienveillant et stimulant.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Formules</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tennis Loisir &amp; Fit&apos;Tennis</strong>{" "}: Pour allier cardio,
              renforcement musculaire et plaisir du jeu, sans la pression du résultat.
            </li>
            <li>
              <strong>Cours Collectifs d&apos;Évolution</strong>{" "}: Des séances par groupes de niveau
              pour perfectionner vos coups (coup droit, revers, service) et votre placement.
            </li>
            <li>
              <strong>Pôle Compétition</strong>{" "}: Pour les joueuses souhaitant intégrer nos équipes
              engagées dans les championnats locaux et régionaux.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏃‍♂️ La Section Masculine : Intensité et Convivialité
          </h3>
          <p className="lede">
            De l&apos;initiation aux matchs à haute intensité, la section masculine propose des
            programmes adaptés au rythme et aux objectifs de chaque joueur.
          </p>
          <h4 className="rf-blocktitle"><em>Nos Formules</em></h4>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Entraînements Tactiques &amp; Physiques</strong>{" "}: Des séances axées sur la
              stratégie de jeu, la gestion des moments forts et l&apos;endurance sur le court.
            </li>
            <li>
              <strong>Championnats &amp; Défis Internes</strong>{" "}: Un système de tournois internes
              et de « pyramides » pour se challenger entre membres tout au long de l&apos;année.
            </li>
            <li>
              <strong>Tennis Loisir</strong>{" "}: Des créneaux libres pour échanger des balles entre
              amis ou rencontrer de nouveaux partenaires de jeu.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🤝 Le Double Mixte : Le Cœur de notre Vie Associative
          </h3>
          <p className="lede">
            Parce que le tennis est aussi un sport de partage, nous organisons régulièrement des
            sessions et tournois de double mixte. C&apos;est l&apos;occasion idéale pour mélanger
            les sections, renforcer les liens entre les membres et partager un moment festif autour
            de la petite balle jaune.
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
          <h3 className="rf-blocktitle">📅 Planning et Inscriptions</h3>
          <p className="lede">
            Les entraînements et sessions libres se déroulent du lundi au dimanche sur nos courts
            (intérieurs et extérieurs). Horaires et tarifs communiqués à l&apos;inscription.
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              Bénéficiez d&apos;une séance d&apos;essai gratuite pour découvrir l&apos;ambiance du
              club.
            </li>
            <li>Remplissez votre formulaire d&apos;adhésion en ligne en quelques clics.</li>
          </ul>
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
        <h2>Tennis</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
