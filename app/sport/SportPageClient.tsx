"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function SportPageClient() {
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
          <Link href="/sport/football" className="info-card info-card--link">
            <h3>Football</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/basketball" className="info-card info-card--link">
            <h3>Basketball</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/volleyball" className="info-card info-card--link">
            <h3>Volleyball</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/handball" className="info-card info-card--link">
            <h3>Handball</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/rugby" className="info-card info-card--link">
            <h3>Rugby</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
        </div>

        <h3 className="rf-blocktitle rf-blocktitle--2">Sports individuels</h3>
        <div className="info-grid">
          <Link href="/sport/athletisme" className="info-card info-card--link">
            <h3>Athlétisme (toutes formes)</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/tennis" className="info-card info-card--link">
            <h3>Tennis</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/cyclisme" className="info-card info-card--link">
            <h3>Cyclisme</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/pilotage" className="info-card info-card--link">
            <h3>Pilotage auto / moto</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/natation" className="info-card info-card--link">
            <h3>Natation</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/golf" className="info-card info-card--link">
            <h3>Golf</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/arts-martiaux" className="info-card info-card--link">
            <h3>Arts martiaux &amp; sports de combat</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/halterophilie" className="info-card info-card--link">
            <h3>Haltérophilie</h3>
            <p>Masculin &amp; Féminin</p>
          </Link>
          <Link href="/sport/autres-disciplines" className="info-card info-card--link">
            <h3>Autres disciplines</h3>
            <p>D&apos;autres disciplines peuvent rejoindre l&apos;académie — contactez-nous.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
