"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function BasketFauteuilPage() {
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

  const presentationContent = (
    <>
      <div className="disc-layout">
          <div className="disc-main">
            <h3 className="rf-blocktitle">I. Définition</h3>
            <p className="lede">
              Le basket-fauteuil (ou handibasket) est un sport collectif dérivé du basket-ball
              traditionnel, conçu spécifiquement pour être pratiqué en fauteuil roulant. Né à la fin
              de la Seconde Guerre mondiale pour la rééducation des soldats blessés, il est devenu
              l'une des disciplines phares des Jeux Paralympiques. Les règles fondamentales restent
              très proches du basket debout : deux équipes de cinq joueurs s'affrontent sur un terrain
              de dimensions standard, et le panier est fixé à la même hauteur réglementaire de 3,05
              mètres.
            </p>
            <p className="lede">
              La principale adaptation concerne la règle du "marcher" : le porteur de balle a le droit
              de poser le ballon sur ses genoux et de pousser les roues de son fauteuil deux fois
              maximum. S'il effectue une troisième poussée sans dribbler, passer ou tirer, une
              infraction est sifflée.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">II. Conditions pour pratiquer</h3>
            <h4 className="rf-blocktitle">Qui peut pratiquer le basket-fauteuil ?</h4>
            <p className="lede">
              Le basket-fauteuil s'adresse principalement aux athlètes présentant des déficiences
              motrices variées affectant la partie inférieure ou supérieure du corps. Cela inclut
              notamment :
            </p>
            <ul className="lede">
              <li>Les personnes atteintes de paraplégie, tétraplégie ou hémiplégie</li>
              <li>Les personnes ayant subi une amputation ou souffrant d'agénésie</li>
              <li>Les personnes atteintes d'infirmité motrice cérébrale (IMC) ou de poliomyélite</li>
              <li>Les personnes souffrant d'autres atteintes neurologiques ou articulaires sévères</li>
            </ul>
            <p className="lede">
              Afin d'assurer une équité parfaite, chaque joueur reçoit une classification
              fonctionnelle allant de 1,0 à 4,5 points en fonction de son degré de mobilité du tronc et
              de ses membres. Plus la note est basse, plus le handicap est lourd. Lors d'un match
              officiel, la somme des points des cinq joueurs présents sur le terrain pour une équipe ne
              doit pas dépasser 14 points (ou 14,5 points dans certaines compétitions nationales de
              clubs). Le règlement autorise également la pratique pour les joueurs valides (crédités de
              5 points) afin de favoriser la mixité et l'inclusion.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">III. Matériels adaptés</h3>
            <h4 className="rf-blocktitle">Quel matériel pour pratiquer ce sport ?</h4>
            <p className="lede">
              Le matériel de base comprend le ballon classique et un terrain standard, mais l'élément
              central reste le fauteuil roulant de sport. Contrairement aux fauteuils de ville, le
              fauteuil de handibasket est une véritable machine de compétition conçue pour la vitesse,
              la maniabilité et la sécurité. Il se caractérise par :
            </p>
            <ul className="lede">
              <li>
                Des roues arrière fortement inclinées (carrossage important) pour faciliter les
                virages rapides et assurer une stabilité latérale optimale.
              </li>
              <li>
                Une ou deux petites roulettes anti-bascule à l'arrière pour empêcher le joueur de
                basculer lors des accélérations ou des tirs en extension.
              </li>
              <li>
                Un cadre rigide et léger (souvent en aluminium ou en titane) équipé d'un pare-chocs
                avant pour protéger les jambes lors des impacts.
              </li>
              <li>Des sangles de maintien au niveau des cuisses et du bassin pour faire corps avec la structure.</li>
            </ul>
            <h4 className="rf-blocktitle">Qui a droit à ce matériel ?</h4>
            <p className="lede">
              Chez KABSA, lors des entraînements, tous les pratiquants inscrits (en situation de
              handicap ou valides) ont le droit d'utiliser un fauteuil adapté. En compétition
              officielle, le fauteuil doit impérativement répondre aux normes strictes de l'IWBF
              (International Wheelchair Basketball Federation), notamment concernant la hauteur
              maximale de l'assise qui varie selon la classification du joueur.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              IV. Déroulement d'entraînement et préparation physique
            </h3>
            <div className="info-grid">
              <div className="info-card">
                <h3>Manipulation du fauteuil (Chair Skills)</h3>
                <p>Sprints, slaloms, freinages brusques et pivots pour maîtriser parfaitement ses déplacements.</p>
              </div>
              <div className="info-card">
                <h3>Travail technique</h3>
                <p>
                  Dribble synchronisé avec les poussées de roues, passes à une ou deux mains, et tirs
                  en suspension (sans décoller du fauteuil).
                </p>
              </div>
              <div className="info-card">
                <h3>Tactique collective</h3>
                <p>Mise en place des écrans et des blocs, transitions rapides et gestion des 24 secondes de possession.</p>
              </div>
              <div className="info-card">
                <h3>Préparation physique</h3>
                <p>
                  Renforcement du haut du corps (bras, épaules, dorsaux et abdominaux), combiné à un
                  travail cardiovasculaire de fond.
                </p>
              </div>
            </div>

            <h3 className="rf-blocktitle rf-blocktitle--2">V. Matchs internes et compétition</h3>
            <p className="lede">
              La vie de KABSA est rythmée par les confrontations. Les matchs internes permettent de
              tester les différentes combinaisons de joueurs tout en respectant la règle des 14 points
              sur le terrain.
            </p>
            <p className="lede">
              Au niveau national et international, KABSA s'engage à placer les meilleurs joueurs dans
              des compétitions officielles structurées par divisions. Les matchs durent 40 minutes,
              répartis en 4 périodes de 10 minutes. Le jeu est extrêmement dynamique et spectaculaire :
              les chocs tactiques entre fauteuils font partie intégrante du spectacle.
            </p>
          </div>

          <aside className="disc-media">
            <div className="info-card">
              <h3>Matériels</h3>
              <p>Présentation technique des fauteuils de sport.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Entraînements</h3>
              <p>Exercices de maniabilité, passes et préparation physique.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>En images</h3>
              <p>Moments forts et coulisses du club.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Matchs &amp; compétitions</h3>
              <p>Meilleurs moments des championnats.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>À découvrir</h3>
              <p>D'autres vidéos à venir bientôt.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Stars joueurs KABSA</h3>
              <p>Parcours des meilleurs athlètes.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
          </aside>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
        <Link href="/contact" className="info-cta">
          S'inscrire / Nous contacter
        </Link>
        <Link href="/dons" className="info-cta">
          Faire un don
        </Link>
      </div>
    </>
  );

  const accessibiliteContent = (
    <div className="disc-main">
      <p className="lede">
        Le basket-fauteuil (ou handibasket) est l&apos;un des sports paralympiques les plus
        spectaculaires et populaires au monde. Alliant vitesse, esprit d&apos;équipe et
        stratégie, cette discipline offre une liberté totale de mouvement et un esprit de
        compétition intense.
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">À qui s&apos;adresse le basket-fauteuil ?</h3>
      <p className="lede">
        Ce sport est conçu pour être inclusif et équitable. Il s&apos;adresse principalement aux
        personnes ayant une mobilité réduite des membres inférieurs ou supérieurs, qui les
        empêche de pratiquer le basket-ball debout. Il convient particulièrement aux profils
        suivants :
      </p>
      <ul className="lede">
        <li>
          <strong>Handicaps moteurs divers</strong> : paraplégie, tétraplégie ou assimilée.
        </li>
        <li>
          <strong>Amputations ou agénésies</strong> : amputation d&apos;un ou des deux membres
          inférieurs.
        </li>
        <li>
          <strong>Pathologies neurologiques ou musculaires</strong> : poliomyélite, infirmité
          motrice cérébrale (IMC), myopathie, ou spina bifida.
        </li>
        <li>
          <strong>Ouverture aux personnes valides</strong> : en club (selon les réglementations
          nationales), les personnes valides ou ayant des limitations légères peuvent intégrer
          les équipes pour favoriser une inclusion réciproque.
        </li>
      </ul>
      <p className="lede">
        <em>Le saviez-vous ?</em> Un entretien préalable avec le staff médical et technique du
        club permet d&apos;évaluer votre profil, l&apos;adéquation de la discipline avec vos
        capacités fonctionnelles et de définir le matériel adapté.
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">
        Le système de classification : la clé de l&apos;équité
      </h3>
      <p className="lede">
        Pour garantir une compétition juste, chaque joueur reçoit une classification officielle
        de 1.0 à 4.5 points (jusqu&apos;à 5.0 pour un joueur valide en championnat national),
        calculée selon son degré de mobilité du tronc et des membres :
      </p>
      <ul className="lede">
        <li>
          <strong>1.0 point</strong> : mobilité du tronc très limitée (pas d&apos;abdominaux
          fonctionnels).
        </li>
        <li>
          <strong>4.5 points</strong> : mobilité totale ou quasi-totale du tronc et des bras (ex.
          amputation sous le genou).
        </li>
      </ul>
      <p className="lede">
        <em>La règle d&apos;or sur le terrain</em> : le total des points des 5 joueurs alignés en
        même temps ne peut pas dépasser 14 à 14,5 points (selon le niveau). Cela oblige à
        composer des équipes mixtes en termes de handicaps, valorisant le rôle de chaque athlète.
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">
        Les règles du jeu : proches du basket classique
      </h3>
      <p className="lede">
        Le basket-fauteuil se joue avec les mêmes dimensions de terrain, la même hauteur de
        panier (3,05 m) et la même ligne des 3 points. Les seules adaptations majeures
        concernent le déplacement :
      </p>
      <ul className="lede">
        <li>
          <strong>Le « marcher » en fauteuil</strong> : le joueur peut avoir le ballon sur les
          genoux, mais il doit obligatoirement dribbler, passer ou tirer toutes les deux
          poussées sur ses roues.
        </li>
        <li>
          <strong>Le fauteuil fait partie du corps</strong> : il est considéré comme une
          extension du joueur. Les contacts directs et volontaires entre fauteuils sont
          sanctionnés comme des fautes personnelles.
        </li>
      </ul>

      <h3 className="rf-blocktitle rf-blocktitle--2">Rejoignez l&apos;aventure !</h3>
      <p className="lede">
        Pour en savoir plus sur l&apos;intégration ou trouver un club affilié près de chez vous,
        consultez la Ligue Handisport Francophone (LHF) en Belgique ou le Comité Paralympique et
        Sportif Français (CPSF) en France.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Matériels</h3>
          <p>Présentation technique des fauteuils de sport.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>Entraînements</h3>
          <p>Exercices de maniabilité, passes et préparation physique.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>En images</h3>
          <p>Moments forts et coulisses du club.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>Matchs &amp; compétitions</h3>
          <p>Meilleurs moments des championnats.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>À découvrir</h3>
          <p>D&apos;autres vidéos à venir bientôt.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>Stars joueurs KABSA</h3>
          <p>Parcours des meilleurs joueurs.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
      </div>
    </div>
  );

  const comingSoonContent = <p className="lede tab-placeholder">Contenu à venir.</p>;

  const tabs = [
    { id: "presentation", label: "Présentation", content: presentationContent },
    { id: "accessibilite", label: "Accessibilité & pratique", content: accessibiliteContent },
    { id: "infrastructures", label: "Infrastructures", content: comingSoonContent },
    { id: "horaires-tarifs", label: "Horaires & tarifs", content: comingSoonContent },
    { id: "type-entrainement", label: "Type d'entraînement", content: comingSoonContent },
  ];

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Basket-fauteuil</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
