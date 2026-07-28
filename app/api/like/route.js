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

export async function POST() {
  const count = readCount() + 1;
  writeCount(count);

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
          subject: "Quelqu'un aime le site KABSA ! ❤️",
          text: `Un visiteur vient d'aimer le site kabsa.be. Total de "J'aime" : ${count}.`,
        }),
      });
    } catch (e) {
      // On ignore les erreurs d'envoi : le compteur reste incrémenté même si l'e-mail échoue.
    }
  }

  return NextResponse.json({ count });
}
