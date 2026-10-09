"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function CompetitionsNationalesPage() {
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
        <h2>Compétitions nationales</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Porter haut nos couleurs à travers toute la Belgique, lors
              d'événements multidisciplinaires majeurs.
            </p>
            <p className="lede">
              KABSA ne se limite pas à une seule discipline : notre force réside
              dans la polyvalence. Nous participerons aux grands rassemblements
              multidisciplinaires organisés en Belgique — tournois
              inter-associations, challenges nationaux, rencontres officielles —
              vitrines du talent, de la détermination et du fair-play de nos
              membres.
            </p>

            <h3 className="rf-blocktitle">Nos objectifs en compétition</h3>
            <ul className="lede">
              <li>
                <strong>Excellence sportive</strong> : viser le podium,
                repousser nos limites, nous mesurer aux meilleurs du pays.
              </li>
              <li>
                <strong>Esprit d'équipe et cohésion</strong> : renforcer les
                liens entre nos membres.
              </li>
              <li>
                <strong>Rayonnement de KABSA</strong> : représenter nos valeurs
                d'inclusion, de respect et de mixité.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Les grands challenges collectifs d'automne
            </h3>
            <p className="lede">
              Des événements belges existants auxquels le club pourra participer
              :
            </p>
            <ul className="lede">
              <li>
                <strong>L'Ekiden de Bruxelles</strong> : chaque automne
                (octobre) au Stade Roi Baudouin — marathon (42,195 km) en relais
                par équipes de 6. Idéal pour l'esprit d'équipe.
              </li>
              <li>
                <strong>Le Crossing Belgium</strong> : raid d'endurance
                multidisciplinaire en équipes de 4, mi-novembre, à travers la
                Belgique (trail, VTT, escalade, kayak).
              </li>
              <li>
                <strong>Le Challenge Run in Brussels</strong> : critérium de
                courses à pied, +20 épreuves à Bruxelles et en périphérie.
              </li>
              <li>
                <strong>Courses à obstacles par équipe</strong> : BE(A)ST
                Obstacle Run, Endurance Weekend de Spa-Francorchamps (novembre).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Compétitions et tournois structurés
            </h3>
            <ul className="lede">
              <li>
                <strong>Championnats multisports adaptés (CMA)</strong> :
                organisés par la Ligue Handisport Francophone (LHF) de septembre
                à juillet — championnats par équipe (futsal, basket,
                athlétisme).
              </li>
              <li>
                <strong>
                  Tournois francophones inter-clubs de futsal / mini-foot
                </strong>{" "}
                : dès la rentrée, à Bruxelles et en Wallonie.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Calendrier des challenges
            </h3>
            <div className="comp-table-wrap">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Événement</th>
                    <th>Discipline</th>
                    <th>Format</th>
                    <th>Période</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ekiden de Bruxelles</td>
                    <td>Athlétisme / course relais</td>
                    <td>Équipe de 6</td>
                    <td>Octobre</td>
                  </tr>
                  <tr>
                    <td>Crossing Belgium</td>
                    <td>Trail, VTT, kayak, escalade</td>
                    <td>Équipe de 4</td>
                    <td>Novembre</td>
                  </tr>
                  <tr>
                    <td>Run in Brussels</td>
                    <td>Course urbaine &amp; nature</td>
                    <td>Classement inter-clubs</td>
                    <td>Automne / annuel</td>
                  </tr>
                  <tr>
                    <td>Tournois futsal &amp; omnisports</td>
                    <td>Sports collectifs en salle</td>
                    <td>Équipes KABSA</td>
                    <td>Oct.–Déc.</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
