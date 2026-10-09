"use client";

import { useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import VideoSlot from "@/components/VideoSlot";

export default function InjusticeSportivePage() {
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
        <h2>Face à l&apos;injustice sportive</h2>

        <div className="disc-layout">
          <div className="disc-main">
            <p className="svc-chapo">
              Connaître vos droits, briser le silence.
            </p>
            <p className="lede">
              Le sport devrait être le terrain de l'égalité, du mérite et du
              respect. Pourtant, de trop nombreux athlètes font face à des
              décisions arbitraires, des discriminations ou de l'exclusion.
              KABSA est à vos côtés pour que le droit l'emporte sur l'injustice
              : nous informons les sportifs et les orientons vers les solutions
              adaptées.
            </p>

            <h3 className="rf-blocktitle">
              Les injustices que nous combattons
            </h3>
            <ul className="lede">
              <li>
                <strong>1. Les discriminations</strong> : traitements
                différenciés basés sur l'origine, le genre, l'orientation
                sexuelle, la religion ou les opinions. <em>Notre action :</em>{" "}
                vous aider à identifier la discrimination, collecter les preuves
                et libérer la parole en sécurité.
              </li>
              <li>
                <strong>2. Les sélections opaques et arbitraires</strong> :
                non-respect des critères officiels, favoritisme, mise à l'écart
                injustifiée par une fédération ou un entraîneur.{" "}
                <em>Notre action :</em> analyser les règlements fédéraux et vous
                orienter vers les recours administratifs ou juridiques.
              </li>
              <li>
                <strong>
                  3. La mise à l'écart des athlètes en situation de handicap
                </strong>{" "}
                : manque d'accessibilité, refus d'aménagement raisonnable,
                exclusion des circuits de performance Handisport et Sport
                Adapté. <em>Notre action :</em> exiger l'application des lois
                sur l'inclusion et défendre une équité réelle de traitement et
                de moyens.
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Notre méthode : vous accompagner pas à pas
            </h3>
            <ul className="lede">
              <li>
                <strong>Information juridique</strong> : décryptage de vos
                droits, des chartes déontologiques et des règlements sportifs.
              </li>
              <li>
                <strong>Écoute confidentielle</strong> : un espace sécurisé pour
                raconter votre situation sans crainte de représailles sur votre
                carrière.
              </li>
              <li>
                <strong>Orientation stratégique</strong> : mise en relation avec
                des experts (avocats spécialisés en droit du sport, médiateurs,
                associations partenaires).
              </li>
            </ul>

            <h3 className="rf-blocktitle rf-blocktitle--2">
              Les situations que nous pourrons accompagner
            </h3>
            <p className="lede">
              Exemples illustratifs des cas sur lesquels notre cellule d'écoute
              et d'orientation interviendra :
            </p>
            <ul className="lede">
              <li>
                <strong>Sélection arbitraire</strong> : un(e) athlète
                remplissant les critères officiels mais écarté(e) d'une
                sélection sans justification transparente → analyse des
                modalités de sélection de la fédération et orientation vers un
                avocat spécialisé pour un éventuel recours.
              </li>
              <li>
                <strong>Aménagements pour para-athlètes</strong> : un club
                refusant l'accès à ses infrastructures à des athlètes en
                situation de handicap → action de médiation rappelant les
                obligations légales d'accessibilité et de non-discrimination.
              </li>
              <li>
                <strong>Discriminations en club</strong> : un(e) jeune
                sportif(ve) victime de propos discriminatoires de son
                encadrement → espace d'écoute sécurisé, aide à la constitution
                d'un dossier de preuves, orientation vers les plateformes de
                signalement officielles et les associations d'aide aux victimes.
              </li>
            </ul>

            <p className="lede">
              <strong>Athlètes, ne restez pas seuls.</strong> L'injustice
              sportive prospère grâce au silence. Que vous soyez athlète pro,
              espoir, amateur ou parent d'un jeune sportif : vous avez des
              droits.
            </p>
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
            Contacter notre cellule d&apos;écoute
          </Link>
        </div>
      </div>
    </section>
  );
}
