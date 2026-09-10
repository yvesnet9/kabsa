"use client";

import { useEffect } from "react";
import Link from "next/link";

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

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <h2>Basket-fauteuil</h2>

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
      </div>
    </section>
  );
}
