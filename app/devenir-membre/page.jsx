"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function DevenirMembrePage() {
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
    <section className="info-block reveal" id="devenir-membre">
      <div className="wrap">
        <h2>Devenir membre</h2>
        <div className="info-card">
          <h3>175 € / adhésion</h3>
          <p>
            50 € inscription · 100 € fonds de solidarité · 25 € cotisation mensuelle. Paiement
            possible en plusieurs mensualités.
          </p>
        </div>
        <Link href="/contact" className="info-cta">
          Nous contacter
        </Link>
      </div>
    </section>
  );
}
