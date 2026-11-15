"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function CompetitionsInternationalesPage() {
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

  const mediaColumn = (
    <aside className="disc-media">
      <div className="info-card">
        <h3>Présentation</h3>
        <p>Vidéo de présentation du service.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Démonstration</h3>
        <p>Démonstration en conditions réelles.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Séance type</h3>
        <p>Déroulé d&apos;une séance type.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>Témoignages</h3>
        <p>Retours de pratiquants.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>En images</h3>
        <p>Moments forts en images.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
      <div className="info-card">
        <h3>À découvrir</h3>
        <p>D&apos;autres vidéos à venir.</p>
        <div className="video-slot">Vidéo à venir</div>
      </div>
    </aside>
  );

  const presentationContent = (
    <>
      <div className="disc-layout">
        <div className="disc-main">
          <h3 className="rf-blocktitle">
            🌍♿🏃‍♂️ Compétitions internationales : KABSA sur la scène mondiale
          </h3>
          <p className="lede">
            Au cœur de la mission de KA BRUXELLES SPORT ACADEMIE asbl (KABSA) réside
            l&apos;ambition de propulser nos jeunes talents (de 15 à 25 ans) — valides 🏃‍♂️ et
            en situation de handicap physique ♿ — vers l&apos;excellence sportive. Parce que la
            progression vers le sport professionnel passe par la confrontation au plus haut
            niveau, l&apos;académie souhaite s&apos;engager dans l&apos;organisation et la
            participation à des compétitions en Belgique et à l&apos;international.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎯 Notre ambition : De Bruxelles aux arènes internationales
          </h3>
          <p className="lede">
            Le sport de haut niveau et le mouvement paralympique connaissent aujourd&apos;hui un
            rayonnement médiatique et économique majeur. KABSA veut offrir à ses athlètes une
            véritable passerelle entre la détection locale et les grands rendez-vous mondiaux :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Révéler les talents bruxellois (♿ &amp; 🏃‍♂️)</strong>{" "}: Détecter et
              former nos sportifs dans nos disciplines phares — cécifoot 🦯⚽, athlétisme 🏃‍♂️ et
              basket-fauteuil ♿🏀 — afin qu&apos;ils représentent fièrement nos couleurs à
              l&apos;étranger.
            </li>
            <li>
              <strong>Offrir une préparation de niveau professionnel</strong>{" "}: Accompagner
              chaque athlète grâce à un encadrement technique, tactique, physique et
              kinésithérapeutique sur mesure.
            </li>
            <li>
              <strong>Faire rayonner l&apos;inclusion au-delà des frontières</strong>{" "}:
              Démontrer lors de chaque tournoi que la mixité entre athlètes valides et
              handisports est un vecteur universel de cohésion sociale.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆🥇 Participation aux circuits officiels et tournois internationaux
          </h3>
          <p className="lede">
            KABSA entend préparer ses équipes mixtes, valides et handisports ainsi que ses
            athlètes individuels à relever les défis des calendriers internationaux :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Matchs amicaux et rencontres de préparation</strong>{" "}: Dès la constitution
              de nos noyaux, nos équipes disputeront des matchs internes puis affronteront des
              clubs extérieurs pour acquérir l&apos;expérience du haut niveau.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌐📋 Les grandes compétitions sportives dans le monde (paysage visé)
          </h3>
          <p className="lede">
            Pour préparer nos athlètes aux exigences du sport professionnel et paralympique,
            KABSA oriente ses parcours d&apos;entraînement vers les compétitions majeures du
            calendrier mondial, pour les sportifs en situation de handicap (♿) comme pour les
            sportifs valides (🏃‍♂️) :
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            1. Les rendez-vous multisports mondiaux (♿ &amp; 🏃‍♂️)
          </h3>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Les Jeux Paralympiques (♿)</strong>{" "}: L&apos;événement suprême du
              handisport mondial, tous les quatre ans (para-athlétisme, basket-fauteuil,
              cécifoot…).
            </li>
            <li>
              <strong>Les Jeux Olympiques (🏃‍♂️)</strong>{" "}: La référence mondiale du sport de
              haut niveau pour les athlètes valides.
            </li>
            <li>
              <strong>Les Jeux Mondiaux de l&apos;IWAS / World Abilitysport (♿)</strong>{" "}: Une
              compétition internationale majeure dédiée aux athlètes présentant un handicap
              physique.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            2. Les compétitions internationales par discipline phare
          </h3>
          <p className="lede">
            <em>Athlétisme &amp; Para-athlétisme (♿ &amp; 🏃‍♂️) :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Championnats du Monde de Para-athlétisme
              (♿)</strong> et <strong>Championnats du Monde d&apos;Athlétisme (🏃‍♂️)</strong>.
            </li>
            <li>
              <strong>Les Grand Prix World Para Athletics (♿) &amp; la Diamond League
              (🏃‍♂️)</strong>{" "}: Circuits internationaux annuels.
            </li>
          </ul>
          <p className="lede">
            <em>Basket-fauteuil &amp; Basketball (♿ &amp; 🏃‍♂️) :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Championnats du Monde de Basket-fauteuil (IWBF World Championships)
              (♿)</strong> et <strong>Coupes d&apos;Europe des Clubs (IWBF EuroCup)
              (♿)</strong>.
            </li>
            <li>
              <strong>Coupe du Monde FIBA &amp; tournois internationaux (🏃‍♂️)</strong>.
            </li>
          </ul>
          <p className="lede">
            <em>Cécifoot &amp; Football (🦯⚽ &amp; 🏃‍♂️⚽) :</em>
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Championnats du Monde (IBSA) et Championnats d&apos;Europe de Cécifoot
              (🦯⚽)</strong>.
            </li>
            <li>
              <strong>Coupe du Monde de la FIFA &amp; tournois internationaux jeunes
              (🏃‍♂️⚽)</strong>.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌍 KABSA au-delà des frontières
          </h3>
          <p className="lede">
            L&apos;association KABSA a pour ambition de dépasser les frontières pour faire
            rayonner ses valeurs de partage, de dépassement de soi et de fraternité à travers le
            monde. Cet espace est dédié à notre engagement international, de nos futurs tournois
            à l&apos;étranger à nos programmes d&apos;échanges sportifs.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🏆 Rencontres &amp; Tournois à l&apos;Étranger
          </h3>
          <p className="lede">
            Nous souhaitons que, chaque saison, nos athlètes portent fièrement les couleurs de
            KABSA sur la scène internationale. Ces compétitions seront le point d&apos;orgue de
            mois de préparation intensive :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Tournois compétitifs</strong>{" "}: Engager nos équipes sur des championnats
              et des coupes d&apos;Europe et du monde.
            </li>
            <li>
              <strong>Défis sportifs</strong>{" "}: Inscrire nos équipes à des événements de grande
              envergure pour affronter l&apos;élite mondiale.
            </li>
            <li>
              <strong>Palmarès en construction</strong>{" "}: Suivre en direct les résultats et les
              performances de nos membres à chaque déplacement.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🔄 Échanges sportifs &amp; culturels
          </h3>
          <p className="lede">
            Pour KABSA, le sport est un langage universel et un formidable outil de
            rapprochement entre les peuples :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Accueil de délégations</strong>{" "}: Recevoir des clubs et associations
              partenaires étrangers pour des stages intensifs partagés, grâce à nos
              infrastructures adaptées et à notre Pôle Logistique &amp; Social.
            </li>
            <li>
              <strong>Voyages d&apos;immersion</strong>{" "}: Envoyer nos jeunes et nos encadrants
              découvrir de nouvelles méthodes d&apos;entraînement au sein de structures
              internationales.
            </li>
            <li>
              <strong>Partage de valeurs</strong>{" "}: Organiser des ateliers culturels en marge
              des entraînements pour favoriser l&apos;ouverture d&apos;esprit et
              l&apos;apprentissage mutuel.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🌐 Représentation de KABSA dans le monde
          </h3>
          <p className="lede">
            KABSA ambitionne de devenir un ambassadeur actif de ses valeurs citoyennes à
            l&apos;échelle internationale :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Congrès et colloques</strong>{" "}: Participer aux rencontres et séminaires
              internationaux dédiés au sport, à l&apos;inclusion et au mouvement paralympique.
            </li>
            <li>
              <strong>Réseau de partenaires</strong>{" "}: Nouer des collaborations avec des
              fédérations, des académies et des organisations engagées, pour développer des
              projets à fort impact social.
            </li>
            <li>
              <strong>Rayonnement de notre modèle</strong>{" "}: Promouvoir un sport accessible,
              éthique et solidaire au-delà de nos frontières locales.
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            📸 L&apos;heure des souvenirs (Galerie &amp; Carnet de bord)
          </h3>
          <p className="lede">
            Chaque déplacement à l&apos;étranger est une aventure humaine autant que sportive,
            que notre équipe média souhaite faire vivre :
          </p>
          <ul className="lede disc-arrow-list">
            <li>
              <strong>Le journal des aventures</strong>{" "}: Partager les anecdotes de voyage, les
              coulisses des compétitions et les témoignages de nos athlètes à leur retour.
            </li>
            <li>
              <strong>Retour en images</strong>{" "}: Retrouver albums photos et vidéos des moments
              forts vécus aux quatre coins du monde, sur KA TV Sport (YouTube, TikTok et réseaux
              sociaux).
            </li>
          </ul>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🗓️ Dans la dynamique des grands rendez-vous mondiaux
          </h3>
          <p className="lede">
            Afin d&apos;inscrire ses programmes dans la dynamique des grands mouvements sportifs
            internationaux, KABSA veille sur les calendriers des compétitions mondiales :
            qu&apos;il s&apos;agisse de s&apos;en inspirer pour ses propres échanges ou d&apos;y
            projeter ses athlètes, ces événements incarnent l&apos;idéal de fraternité
            universelle auquel l&apos;académie adhère.
          </p>

          <h3 className="rf-blocktitle rf-blocktitle--2">
            🎥📺 Suivez nos athlètes autour du monde avec KA TV Sport
          </h3>
          <p className="lede">
            Chaque déplacement à l&apos;étranger, chaque stage de préparation et chaque tournoi
            international sera documenté par notre équipe média. Sur KA TV Sport (YouTube,
            TikTok et réseaux sociaux), suivez le parcours de nos athlètes valides et
            handisports vers les podiums mondiaux.
          </p>
        </div>

        {mediaColumn}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          Nous contacter
        </Link>
      </div>
    </>
  );

  const comingSoonContent = (
    <p className="lede tab-placeholder">Contenu à venir.</p>
  );

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "deroulement", label: "Déroulement", content: comingSoonContent },
    {
      id: "tarifs-formules",
      label: "Tarifs & formules",
      content: comingSoonContent,
    },
    { id: "temoignages", label: "Témoignages", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Compétitions internationales</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />

      </div>
    </section>
  );
}
