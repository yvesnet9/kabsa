"use client";

import { useEffect } from "react";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

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

  return (
    <section className="info-block reveal" id="discipline">
      <div className="wrap">
        <BackButton />
        <h2>Compétitions internationales</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              KABSA dépasse les frontières pour faire rayonner ses valeurs de
              partage, de dépassement de soi et de fraternité à travers le
              monde.
            </p>
            <p className="lede">
              Cet espace est dédié à notre engagement international : tournois à
              l'étranger et programmes d'échanges sportifs.
            </p>

            <h3 className="rf-blocktitle">
              Rencontres &amp; tournois à l'étranger
            </h3>
            <p className="lede">
              Nos athlètes porteront les couleurs de KABSA sur la scène
              internationale, point d'orgue de mois de préparation :
            </p>
            <ul className="lede">
              <li>
                <strong>Tournois compétitifs</strong> : participation à des
                championnats et coupes d'Europe et du monde.
              </li>
              <li>
                <strong>Défis sportifs</strong> : inscription de nos équipes à
                des événements de grande envergure.
              </li>
              <li>
                <strong>Palmarès à construire</strong> : nous suivrons et
                partagerons les résultats et performances de nos membres à
                chaque déplacement.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Échanges sportifs &amp; culturels
            </h3>
            <p className="lede">
              Pour KABSA, le sport est un langage universel :
            </p>
            <ul className="lede">
              <li>
                <strong>Accueil de délégations</strong> : réception de clubs et
                associations partenaires pour des stages partagés.
              </li>
              <li>
                <strong>Voyages d'immersion</strong> : envoi de nos jeunes et
                encadrants dans des structures internationales.
              </li>
              <li>
                <strong>Partage de valeurs</strong> : ateliers culturels en
                marge des entraînements pour favoriser l'ouverture.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Représentation de KABSA dans le monde
            </h3>
            <ul className="lede">
              <li>
                <strong>Congrès et colloques</strong> : présence de nos
                dirigeants dans les instances et séminaires internationaux.
              </li>
              <li>
                <strong>Réseau de partenaires</strong> : collaboration avec des
                fédérations et ONG internationales.
              </li>
              <li>
                <strong>Rayonnement de notre modèle</strong> : un sport
                accessible, éthique et solidaire au-delà de nos frontières.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Les grands rendez-vous multidisciplinaires internationaux
            </h3>
            <p className="lede">
              Veille : ces événements mondiaux inspirent nos programmes.
            </p>
            <div className="comp-table-wrap">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Compétition</th>
                    <th>Lieu &amp; pays</th>
                    <th>Période</th>
                    <th>Portée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JO de la Jeunesse d&apos;été</td>
                    <td>Dakar, Sénégal</td>
                    <td>Fin 2026</td>
                    <td>1er événement olympique en Afrique</td>
                  </tr>
                  <tr>
                    <td>Jeux mondiaux de la médecine et de la santé</td>
                    <td>La Nucia, Espagne</td>
                    <td>12–19 juin 2027</td>
                    <td>+20 disciplines (professionnels de santé)</td>
                  </tr>
                  <tr>
                    <td>Jeux mondiaux universitaires d&apos;été</td>
                    <td>Chungcheong, Corée du Sud</td>
                    <td>1–12 août 2027</td>
                    <td>Élite étudiante mondiale (18 disciplines)</td>
                  </tr>
                  <tr>
                    <td>Jeux européens du sport d&apos;entreprise</td>
                    <td>Athènes, Grèce</td>
                    <td>16–20 juin 2027</td>
                    <td>Sport santé et cohésion</td>
                  </tr>
                  <tr>
                    <td>Jeux africains</td>
                    <td>Le Caire, Égypte</td>
                    <td>Courant 2027</td>
                    <td>Carrefour majeur du sport africain</td>
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
      </div>
    </section>
  );
}
