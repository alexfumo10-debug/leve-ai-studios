import { NextResponse } from "next/server";

// Server-side only — destination email is never exposed to the client bundle.
// Uses Formsubmit (free, no API key). On first submission, an activation email
// is sent to the destination address; click the activation link once and all
// future submissions forward silently.
//
// To swap providers later (Resend, Formspree, custom SMTP), only this file
// needs to change — the public form posts to /api/contact regardless.
const DESTINATION_EMAIL =
  process.env.CONTACT_DESTINATION ?? "AF@levestudios.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const formsubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(
      DESTINATION_EMAIL
    )}`;

    const upstream = await fetch(formsubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New inquiry from ${name} — levestudios.com`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: "Upstream submission failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
