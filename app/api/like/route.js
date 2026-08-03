import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "likes.json");

function readCount() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw).count || 0;
  } catch {
    return 0;
  }
}

function writeCount(count) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify({ count }));
}

export async function GET() {
  return NextResponse.json({ count: readCount() });
}

export async function POST(request) {
  const count = readCount() + 1;
  writeCount(count);

  // Récupère les infos du visiteur si elles sont fournies
  let nom = "", email = "", ville = "";
  try {
    const data = await request.json();
    nom = (data.nom || "").toString().slice(0, 120);
    email = (data.email || "").toString().slice(0, 160);
    ville = (data.ville || "").toString().slice(0, 120);
  } catch (e) {
    // Pas de corps JSON : on garde le comportement d'un simple like anonyme.
  }

  const identifie = nom && email && ville;
  const subject = identifie
    ? `Nouveau soutien : ${nom} aime le site KABSA \u2764\ufe0f`
    : "Quelqu'un aime le site KABSA ! \u2764\ufe0f";
  const text = identifie
    ? `Une personne a aimé le site kabsa.be :\n\n` +
      `Nom complet : ${nom}\n` +
      `Email : ${email}\n` +
      `Ville : ${ville}\n\n` +
      `Total de "J'aime" : ${count}.`
    : `Un visiteur vient d'aimer le site kabsa.be. Total de "J'aime" : ${count}.`;

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
          reply_to: identifie ? email : undefined,
          subject,
          text,
        }),
      });
    } catch (e) {
      // On ignore les erreurs d'envoi : le compteur reste incrémenté même si l'e-mail échoue.
    }
  }

  return NextResponse.json({ count });
}
