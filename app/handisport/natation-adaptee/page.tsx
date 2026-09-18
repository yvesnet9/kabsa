"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import DisciplineTabs from "@/components/DisciplineTabs";

export default function NatationAdapteePage() {
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
              La natation adaptée est une discipline aquatique structurée pour permettre à toute
              personne en situation de handicap de s'épanouir dans l'eau. Qu'il s'agisse d'une
              pratique de loisir, de bien-être ou de compétition, chaque nageur bénéficie d'un
              encadrement personnalisé et bienveillant pour progresser à son rythme.
            </p>

            <h3 className="rf-blocktitle">I. Définition</h3>
            <p className="lede">
              La natation adaptée (ou para-natation) désigne la pratique de la natation modifiée
              et encadrée pour les personnes présentant un handicap moteur, visuel, auditif ou
              mental / psychique. L'élément aquatique offre un espace de liberté unique : la
              flottabilité réduit la pesanteur, facilite les mouvements et permet aux nageurs de
              développer leur autonomie, leur motricité et leur confiance en eux dans un cadre
              sécurisant.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">II. Conditions pour pratiquer ce sport</h3>
            <h4 className="rf-blocktitle">Qui peut pratiquer la natation adaptée ?</h4>
            <p className="lede">
              Ce sport est ouvert à tous les profils, sans limite d'âge, dès lors qu'il n'y a pas
              de contre-indication médicale majeure à l'immersion. Il s'adresse aux personnes
              touchées par :
            </p>
            <ul className="lede">
              <li>un handicap moteur (paraplégie, tétraplégie, amputation, IMC…) ;</li>
              <li>un handicap sensoriel (déficience visuelle ou auditive) ;</li>
              <li>
                un handicap intellectuel, cognitif ou des troubles du spectre de l'autisme (TSA).
              </li>
            </ul>
            <h4 className="rf-blocktitle">Les prérequis administratifs</h4>
            <p className="lede">
              Pour rejoindre un club ou une section adaptée, il suffit généralement de fournir :
            </p>
            <ul className="lede">
              <li>
                un certificat médical de non-contre-indication à la pratique de la natation (avec
                mention « en compétition » si le nageur souhaite participer à des championnats) ;
              </li>
              <li>
                une fiche de renseignements précisant la nature du handicap pour adapter
                l'encadrement au plus juste.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">III. Matériels adaptés</h3>
            <h4 className="rf-blocktitle">Quel matériel pour pratiquer ce sport ?</h4>
            <p className="lede">
              L'accès au bassin et l'évolution dans l'eau sont facilités par des équipements
              spécifiques :
            </p>
            <ul className="lede">
              <li>
                <strong>Pour l'accès au bassin</strong> : sièges de mise à l'eau (lève-personne
                hydraulique ou électrique), rampes d'accès amovibles ou tapis d'accès de
                plain-pied.
              </li>
              <li>
                <strong>Pour la flottabilité et l'autonomie</strong> : ceintures de flottaison
                modulables, frites, planches ergonomiques et brassards adaptés.
              </li>
              <li>
                <strong>Pour les déficiences sensorielles</strong> : lunettes de natation teintées
                ou opaques, et la perche de « tapping » (perche munie d'un embout en mousse
                utilisée par l'entraîneur pour toucher délicatement le nageur aveugle et
                l'avertir de l'approche du mur).
              </li>
            </ul>
            <h4 className="rf-blocktitle">Qui a droit à ce matériel ?</h4>
            <p className="lede">
              Tous les nageurs inscrits dans un créneau de natation adaptée ont accès à ces
              équipements. Le matériel du club (mises à l'eau, matériel pédagogique) est mis à
              disposition de toute personne en exprimant le besoin durant la séance. Pour les
              compétitions officielles, le matériel utilisé est strictement réglementé en
              fonction de la classification officielle du handicap du nageur.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              IV. Déroulement d'un entraînement et préparation physique
            </h3>
            <p className="lede">
              Une séance de natation adaptée ne standardise pas l'effort, elle le personnalise.
              Les entraînements sont encadrés par des éducateurs spécialisés (brevet d'État ou
              licence STAPS APA).
            </p>
            <ul className="lede">
              <li>
                <strong>Accueil et échauffement à sec (10-15 min)</strong> : mobilisation
                articulaire au bord du bassin et étirements légers ; moment d'échange sur la
                forme du jour.
              </li>
              <li>
                <strong>Mise à l'eau et corps de séance (30-45 min)</strong> : exercices
                techniques (propulsion, respiration, équilibre), ajustés en distance et en
                intensité selon l'objectif (loisir ou compétition).
              </li>
              <li>
                <strong>Retour au calme (5-10 min)</strong> : relaxation, flottaison libre et
                décompression musculaire.
              </li>
            </ul>
            <p className="lede">
              <strong>La Préparation Physique Générale (PPG)</strong> — pour les compétiteurs, la
              préparation se fait aussi hors de l'eau : renforcement des muscles stabilisateurs
              (tronc), amélioration du cardio et compensation des asymétries musculaires liées au
              handicap, sous le contrôle d'un préparateur physique.
            </p>

            <h3 className="rf-blocktitle rf-blocktitle--2">V. Matchs internes et compétitions</h3>
            <ul className="lede">
              <li>
                <strong>Défis et « matchs » internes</strong> : événements festifs au sein du club
                permettant aux nageurs loisirs et débutants de découvrir l'ambiance d'une course
                sans la pression du chronomètre. L'occasion de réunir les familles et de célébrer
                les progrès de chacun.
              </li>
              <li>
                <strong>Circuit de compétition officiel</strong> : championnats régionaux,
                nationaux, voire internationaux (Jeux Paralympiques, Global Games). Les nageurs y
                sont regroupés par classes de handicap (système S/SB/SM) pour garantir l'équité.
              </li>
            </ul>
          </div>

          <aside className="disc-media">
            <div className="info-card">
              <h3>Matériels</h3>
              <p>Systèmes de mise à l'eau et technique du &quot;tapping&quot;.</p>
              <div className="video-slot">Vidéo à venir</div>
            </div>
            <div className="info-card">
              <h3>Entraînements</h3>
              <p>Immersion dans une séance hebdomadaire avec nos coachs.</p>
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
              <h3>Stars nageurs KABSA</h3>
              <p>Parcours des meilleurs nageurs.</p>
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
        La natation adaptée (ou para-natation) est l&apos;une des rares activités physiques qui
        offre une liberté totale de mouvement. Elle s&apos;adresse aux personnes en situation de
        handicap moteur, sensoriel ou mental, en s&apos;ajustant aux capacités de chacun grâce à
        un accompagnement sur-mesure.
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">Un sport accessible à tous les handicaps</h3>
      <p className="lede">L&apos;environnement aquatique brise les barrières physiques et cognitives :</p>
      <ul className="lede">
        <li>
          <strong>Handicaps moteurs</strong> : l&apos;effet de flottaison (poussée
          d&apos;Archimède) libère le corps de la contrainte du fauteuil. Les articulations sont
          protégées, ce qui permet renforcement musculaire et coordination sans douleur.
        </li>
        <li>
          <strong>Handicaps sensoriels</strong> : pour les déficiences visuelles ou auditives,
          des repères tactiles et un guidage à la voix (ou par contact) permettent
          d&apos;évoluer en sécurité.
        </li>
        <li>
          <strong>Handicaps mentaux ou psychiques</strong> : apprentissage par méthodes ludiques
          et consignes décomposées. L&apos;eau agit comme un relaxant naturel, réduisant
          l&apos;anxiété et l&apos;hyperactivité.
        </li>
      </ul>

      <h3 className="rf-blocktitle rf-blocktitle--2">
        Équipements adaptés et utilisation en bassin
      </h3>
      <p className="lede">
        La natation demande peu de matériel lourd, mais certains accessoires maximisent
        l&apos;autonomie :
      </p>
      <ul className="lede">
        <li>
          <strong>Gilets de flottaison stabilisateurs</strong> : maintiennent le corps à
          l&apos;horizontale ou à la verticale selon les pathologies.
        </li>
        <li>
          <strong>Attelles de nage et flotteurs de jambes</strong> : stabilisent le bas du corps
          et évitent que les jambes ne coulent.
        </li>
        <li>
          <strong>Gants palmés</strong> : compensent un manque d&apos;appui dans l&apos;eau.
        </li>
      </ul>
      <p className="lede">
        L&apos;accessibilité commence dès l&apos;entrée dans l&apos;eau : les piscines modernes
        intègrent des potences élévatrices ou des plateformes de descente en totale autonomie.
      </p>

      <h3 className="rf-blocktitle rf-blocktitle--2">Zoom santé : les bienfaits cardiovasculaires</h3>
      <p className="lede">
        Nager a un impact direct sur l&apos;appareil circulatoire, particulièrement bénéfique
        pour les personnes à mobilité réduite :
      </p>
      <ul className="lede">
        <li>
          <strong>Assouplissement des artères</strong> : la pratique régulière améliore la
          flexibilité de l&apos;artère carotide et atténue le durcissement des vaisseaux.
        </li>
        <li>
          <strong>Baisse de la tension artérielle</strong> : la pression hydrostatique favorise
          le retour veineux et réduit l&apos;hypertension.
        </li>
        <li>
          <strong>Efficacité cardiaque</strong> : le cœur gagne en puissance et en volume de
          pompage, dans un milieu thermal qui régule la température corporelle.
        </li>
      </ul>

      <p className="lede">
        <strong>Un accompagnement humain et sécurisé</strong> : maîtres-nageurs et éducateurs
        spécialisés formés au handisport, présence rassurante dans l&apos;eau, séances
        structurées à l&apos;écoute du rythme et de la fatigue de chacun.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Matériels</h3>
          <p>Systèmes de mise à l&apos;eau et technique du &quot;tapping&quot;.</p>
          <div className="video-slot">Vidéo à venir</div>
        </div>
        <div className="info-card">
          <h3>Entraînements</h3>
          <p>Immersion dans une séance hebdomadaire avec nos coachs.</p>
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
          <h3>Stars nageurs KABSA</h3>
          <p>Parcours des meilleurs nageurs.</p>
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
        <h2>Natation adaptée</h2>

        <DisciplineTabs tabs={tabs} defaultTabId="presentation" />
      </div>
    </section>
  );
}
