import { NextResponse } from "next/server";

export async function POST(request) {
  let f = {};
  try {
    f = await request.json();
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const nom = (f.nom || "").toString().slice(0, 120);
  const poste = (f.poste || "").toString().slice(0, 120);
  const contact = (f.contact || "").toString().slice(0, 160);
  if (!nom || !poste || !contact) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const naissance = (f.naissance || "").toString().slice(0, 40);
  const taillepoids = (f.taillepoids || "").toString().slice(0, 60);
  const pied = (f.pied || "").toString().slice(0, 40);
  const villeclub = (f.villeclub || "").toString().slice(0, 120);
  const video = (f.video || "").toString().slice(0, 300);
  const pointsforts = (f.pointsforts || "").toString().slice(0, 2000);

  const subject = `Nouvelle fiche joueur : ${nom} (${poste})`;
  const text =
    `Une fiche de présentation joueur a été envoyée depuis kabsa.be :\n\n` +
    `Nom complet : ${nom}\n` +
    `Poste : ${poste}\n` +
    `Date de naissance : ${naissance}\n` +
    `Taille / Poids : ${taillepoids}\n` +
    `Pied fort : ${pied}\n` +
    `Ville / Club actuel : ${villeclub}\n` +
    `Lien vidéo : ${video}\n\n` +
    `Points forts :\n${pointsforts}\n\n` +
    `Coordonnées : ${contact}\n`;

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "KABSA <notifications@kabsa.be>",
          to: "contact@kabsa.be",
          reply_to: contact.includes("@") ? contact : undefined,
          subject,
          text,
        }),
      });
    } catch (e) {
      // On ignore les erreurs d'envoi.
    }
  }

  return NextResponse.json({ ok: true });
}
