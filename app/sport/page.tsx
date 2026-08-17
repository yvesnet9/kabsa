"use client";

import { useEffect } from "react";

export default function SportPage() {
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
    <section className="info-block reveal" id="sport">
      <div className="wrap">
        <h2>Nos disciplines sportives</h2>
        <p className="lede">
          KABSA accueille les sportifs valides dans de nombreuses disciplines, collectives et
          individuelles, en catégories masculine et féminine.
        </p>

        <h3 className="rf-blocktitle">Sports collectifs</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Football</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Basketball</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Volleyball</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Handball</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Rugby</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Sports individuels</h3>
        <div className="info-grid">
          <div className="info-card">
            <h3>Athlétisme (toutes formes)</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Tennis</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Cyclisme</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Pilotage auto / moto</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Natation</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Golf</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Arts martiaux &amp; sports de combat</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Haltérophilie</h3>
            <p>Masculin &amp; Féminin</p>
          </div>
          <div className="info-card">
            <h3>Autres disciplines</h3>
            <p>D'autres disciplines peuvent rejoindre l'académie — contactez-nous.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
