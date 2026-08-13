import { NextResponse } from "next/server";

export async function POST(request) {
  let f = {};
  try {
    f = await request.json();
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const nom = (f.nom || "").toString().slice(0, 120);
  const email = (f.email || "").toString().slice(0, 160);
  const video = (f.video || "").toString().slice(0, 500);
  if (!nom || !email || !video) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const message = (f.message || "").toString().slice(0, 4000);

  const text =
    "Nouvelle vidéo partagée depuis kabsa.be :\n\n" +
    "Nom : " + nom + "\n" +
    "Email : " + email + "\n" +
    "Lien de la vidéo : " + video + "\n\n" +
    "Message :\n" + message + "\n";

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "KABSA <notifications@kabsa.be>",
          to: "contact@kabsa.be",
          reply_to: email.includes("@") ? email : undefined,
          subject: "Nouvelle vidéo partagée : " + nom,
          text: text,
        }),
      });
    } catch (e) {}
  }

  return NextResponse.json({ ok: true });
}
