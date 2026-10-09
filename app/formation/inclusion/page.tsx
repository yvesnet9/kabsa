"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function SensibilisationInclusionPage() {
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

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Sensibilisation à l&apos;inclusion</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Faire évoluer le regard sur le handicap et promouvoir la mixité
              dans le sport.
            </p>
            <p className="lede">
              C'est au cœur de l'ADN de KABSA : nous co-construisons des espaces
              de rencontre où le sport devient un langage universel, brisant les
              barrières et faisant évoluer durablement les mentalités.
            </p>

            <h3 className="rf-blocktitle">Nos objectifs</h3>
            <ul className="lede">
              <li>
                Déconstruire les préjugés liés au handicap par l'action et le
                partage.
              </li>
              <li>
                Valoriser les compétences et le potentiel de chaque individu,
                valide ou en situation de handicap.
              </li>
              <li>
                Favoriser la mixité sociale et sportive en créant du lien fort
                entre les participants.
              </li>
              <li>
                Donner des clés concrètes pour rendre les structures (clubs,
                entreprises, écoles) plus inclusives.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Nos ateliers sur mesure
            </h3>
            <p className="lede">
              Nous intervenons auprès des entreprises, des établissements
              scolaires (du primaire à l'université) et des collectivités /
              clubs sportifs.
            </p>
            <ul className="lede">
              <li>
                <strong>1. Ateliers d'initiation aux parasports</strong> : mise
                en situation réelle — découverte du basket-fauteuil, de la
                boccia, du cécifoot ou du volley-assis. <em>Objectif :</em>{" "}
                vivre le sport autrement, comprendre les notions d'adaptation et
                développer l'empathie par le jeu.
              </li>
              <li>
                <strong>2. Conférences &amp; tables rondes inspirantes</strong>{" "}
                : échanges avec des athlètes paralympiques ou des personnes au
                parcours inspirant. <em>Objectif :</em> libérer la parole,
                susciter le débat, aborder résilience et performance sans tabou.
              </li>
              <li>
                <strong>
                  3. Modules « Management &amp; Inclusion » (spécial
                  entreprises)
                </strong>{" "}
                : ateliers pratiques pour intégrer et manager la diversité en
                s'inspirant des valeurs du sport. <em>Objectif :</em>{" "}
                transformer les obligations RSE en leviers de cohésion et de
                performance collective.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">Témoignages</h3>
            <p className="lede tab-placeholder">Témoignages à venir.</p>
          </div>
          <aside className="disc-media">
            <div className="info-card">
              <h3>Présentation</h3>
              <p>Vidéo de présentation du service.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>Démonstration</h3>
              <p>Démonstration en conditions réelles.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>Séance type</h3>
              <p>Déroulé d&apos;une séance type.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>Témoignages</h3>
              <p>Retours de pratiquants.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>En images</h3>
              <p>Moments forts en images.</p>
              <VideoSlot />
            </div>
            <div className="info-card">
              <h3>À découvrir</h3>
              <p>D&apos;autres vidéos à venir.</p>
              <VideoSlot />
            </div>
          </aside>
        </div>

        <div
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}
        >
          <Link href="/contact" className="info-cta">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
