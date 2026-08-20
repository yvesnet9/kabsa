import { NextResponse } from "next/server";

const MAX_VIDEO_BYTES = 20 * 1024 * 1024;

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const nom = (form.get("nom") || "").toString().slice(0, 120);
  const email = (form.get("email") || "").toString().slice(0, 160);
  const video = (form.get("video") || "").toString().slice(0, 500);
  const message = (form.get("message") || "").toString().slice(0, 4000);
  const file = form.get("file");
  const hasFile = file && typeof file === "object" && file.size > 0;

  if (!nom || !email || (!video && !hasFile)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (hasFile && file.size > MAX_VIDEO_BYTES) {
    return NextResponse.json({ ok: false, error: "file_too_large" }, { status: 400 });
  }

  const text =
    "Nouvelle vidéo partagée depuis kabsa.be :\n\n" +
    "Nom : " + nom + "\n" +
    "Email : " + email + "\n" +
    "Lien de la vidéo : " + (video || "(aucun, fichier joint)") + "\n\n" +
    "Message :\n" + message + "\n";

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      let attachments;
      if (hasFile) {
        const buf = Buffer.from(await file.arrayBuffer());
        attachments = [
          { filename: file.name || "video", content: buf.toString("base64") },
        ];
      }
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
          attachments,
        }),
      });
    } catch (e) {}
  }

  return NextResponse.json({ ok: true });
}
