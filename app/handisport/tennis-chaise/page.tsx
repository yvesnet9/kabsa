"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function TennisChaisePage() {
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
            <p className="lede">
              Le tennis en chaise (ou tennis-fauteuil / paratennis) est l'un des handisports les
              plus populaires au monde. Pratiqué en simple ou en double, il conserve les mêmes
              dimensions de terrain et le même matériel que le tennis traditionnel, pour des
              sensations de jeu spectaculaires mêlant stratégie, agilité et force physique.
            </p>

            <h3 className="rf-blocktitle">I. Définition</h3>
            <p className="lede">
              Le tennis en chaise est une adaptation du tennis pour les personnes ayant un
              handicap moteur. La seule modification majeure des règles est la{" "}
              <strong>règle des deux rebonds</strong> : le joueur en fauteuil peut laisser la
              balle rebondir deux fois avant de la renvoyer (le deuxième rebond pouvant être à
              l'extérieur des limites du court). Fait unique dans le sport, il peut se jouer en
              totale mixité : un joueur en fauteuil peut disputer un match face à ou aux côtés
              d'un joueur debout (bipède).
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">II. Conditions pour pratiquer ce sport</h3>
            <h4 className="rf-blocktitle">Qui peut pratiquer le tennis en fauteuil ?</h4>
            <p className="lede">
              Il s'adresse principalement aux personnes atteintes d'une perte fonctionnelle
              totale ou partielle d'un ou des deux membres inférieurs (paraplégie, tétraplégie,
              amputation, poliomyélite, etc.). Deux catégories en compétition :
            </p>
            <ul className="lede">
              <li>
                <strong>Catégorie « Open »</strong> : athlètes ayant une atteinte fonctionnelle
                aux membres inférieurs uniquement.
              </li>
              <li>
                <strong>Catégorie « Quad »</strong> : joueurs présentant une atteinte
                fonctionnelle aux membres inférieurs et à un ou aux deux membres supérieurs (bras
                de frappe), impactant la manipulation de la raquette ou les déplacements.
              </li>
            </ul>
            <h4 className="rf-blocktitle">Les prérequis administratifs</h4>
            <ul className="lede">
              <li>
                Un certificat médical autorisant la pratique du tennis en fauteuil (mention « en
                compétition » si nécessaire).
              </li>
              <li>
                Une évaluation des capacités motrices pour aider à choisir sa catégorie et le
                matériel de compensation idéal.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">III. Matériels adaptés</h3>
            <h4 className="rf-blocktitle">Quel matériel pour pratiquer ce sport ?</h4>
            <ul className="lede">
              <li>
                <strong>Le fauteuil roulant de sport</strong> : ce n'est pas un fauteuil de ville.
                Il possède un carrossage important (roues arrière fortement inclinées vers
                l'intérieur) pour la stabilité dans les virages brusques, plus une ou deux petites
                roues anti-bascule à l'arrière.
              </li>
              <li>
                <strong>Les systèmes de fixation</strong> : sangles et cales (cuisses, genoux,
                taille) pour faire « corps » avec le fauteuil et optimiser la transmission de
                l'effort à la frappe.
              </li>
              <li>
                <strong>Le matériel pour les Quads</strong> : pour les joueurs ayant des
                difficultés de préhension, la raquette peut être fixée à la main à l'aide
                d'adhésif ou de bandes élastiques médicales.
              </li>
            </ul>
            <h4 className="rf-blocktitle">Qui a droit à ce matériel ?</h4>
            <p className="lede">
              Au club, des fauteuils multisports d'initiation sont mis à disposition des nouveaux
              adhérents et des pratiquants de loisir durant les créneaux d'entraînement. En
              compétition, les joueurs réguliers investissent généralement dans leur propre
              fauteuil sur-mesure, réglé au millimètre près selon leur morphologie et leur
              handicap.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              IV. Déroulement d'un entraînement et préparation physique
            </h3>
            <p className="lede">
              Manier une raquette tout en propulsant un fauteuil demande une coordination hors
              pair. Les séances sont menées par des enseignants formés aux spécificités du
              paratennis.
            </p>
            <ul className="lede">
              <li>
                <strong>Échauffement spécifique (15 min)</strong> : maniabilité du fauteuil sans
                balle (lignes droites, slaloms, demi-tours rapides, reculs) pour monter le rythme
                cardiaque et chauffer les épaules.
              </li>
              <li>
                <strong>Corps de séance (45 min)</strong> : frappes combinées aux déplacements,
                accent sur la synchronisation (positionner son fauteuil par rapport au rebond,
                lâcher les roues pour armer la raquette, frapper puis se replacer immédiatement).
              </li>
              <li>
                <strong>Jeu dirigé et retour au calme (10 min)</strong> : matchs au format adapté
                (tie-break) et étirements ciblés du haut du corps.
              </li>
            </ul>
            <p className="lede">
              <strong>La Préparation Physique Générale (PPG)</strong> — axée sur le renforcement
              du tronc (abdominaux et dorsaux pour l'équilibre lors des frappes), l'endurance et
              la puissance explosive des bras.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">V. Matchs internes et compétitions</h3>
            <ul className="lede">
              <li>
                <strong>Matchs internes et tournois « Multi-Chances » (TMC)</strong> : matchs
                amicaux, y compris des tournois mixtes réunissant joueurs debout et joueurs en
                fauteuil dans le même tableau ou en double partagé — l'outil parfait pour
                l'inclusion et la convivialité.
              </li>
              <li>
                <strong>Circuit compétitif</strong> : classement officiel géré par les fédérations
                de tennis, des tournois homologués locaux jusqu'au circuit international de
                l'ITF, incluant les tournois du Grand Chelem (Roland-Garros, Open d'Australie…) et
                les Jeux Paralympiques.
              </li>
            </ul>
          </div>

          <aside className="disc-media">
            <div className="info-card">
              <h3>Matériels</h3>
              <p>Conception d&apos;un fauteuil de compétition et carrossage des roues.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Entraînements</h3>
              <p>Les secrets de la synchronisation déplacement/frappe.</p>
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
              <p>Parcours des meilleurs joueurs.</p>
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
        Le tennis en chaise roulante (ou paratennis) est une discipline dynamique et
        spectaculaire. Il suit presque en tout point les règles du tennis traditionnel, à une
        exception majeure : les joueurs ont droit à deux rebonds avant de renvoyer la balle (le
        2ᵉ rebond pouvant s&apos;effectuer à l&apos;extérieur des limites du terrain).
      </p>
      <p className="lede">
        Ce sport s&apos;adresse généralement à toute personne présentant un handicap moteur
        fonctionnel permanent qui empêche la pratique debout. Un entretien individuel avec nos
        encadrants permet de confirmer l&apos;adéquation avec la discipline et d&apos;évaluer les
        besoins spécifiques (ajustements, sangles, etc.).
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">
        Le matériel : choisir l&apos;excellence pour débuter et progresser
      </h3>
      <p className="lede">
        Le loisir peut débuter avec n&apos;importe quel équipement, mais l&apos;évolution
        technique demande vite un fauteuil multisport adapté : ultra-léger (souvent moins de 10
        kg), très maniable et stable. Caractéristiques :
      </p>
      <ul className="lede">
        <li>
          <strong>Carrossage des roues arrière</strong> (inclinaison de 15 à 20°) pour des pivots
          ultra-rapides sans basculer.
        </li>
        <li>
          <strong>Roulette arrière anti-bascule</strong> pour sécuriser les mouvements puissants,
          notamment au service.
        </li>
        <li>
          <strong>Systèmes d&apos;attache</strong> (sangles, cale-genoux) pour que le joueur et
          son fauteuil ne fassent plus qu&apos;un.
        </li>
      </ul>

      <h3 className="rf-blocktitle rf-blocktitle--2">Déplacements et trajectoires</h3>
      <p className="lede">
        En tennis-fauteuil, la clé est le déplacement continu (« rouling »). Sans pas chassés, le
        joueur dessine des trajectoires fluides en « H » ou en boucles pour aborder la balle avec
        la bonne inertie. La coordination propulsion / maintien de la raquette / gestion des
        angles demande une vraie technique de pivot.
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">
        Maîtrise technique et utilisation sur le terrain
      </h3>
      <p className="lede">
        L&apos;utilisation combine le maniement de la raquette et la poussée simultanée ou
        alternée des roues : de la phase de service (stabilisation du buste essentielle) aux
        coups spécifiques comme le revers inversé (pour frapper des balles hautes ou excentrées).
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Matériels</h3>
          <p>Conception d&apos;un fauteuil de compétition et carrossage des roues.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>Entraînements</h3>
          <p>Les secrets de la synchronisation déplacement/frappe.</p>
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
        <h2>Tennis en chaise</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
