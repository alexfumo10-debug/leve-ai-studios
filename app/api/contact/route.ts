import { NextResponse } from "next/server";

// Force Node.js runtime (not Edge) — Edge has stricter networking that
// some external services treat as bot traffic.
export const runtime = "nodejs";

// Server-side only — destination email is never exposed to the client bundle.
// Tries Formsubmit first, then falls back to logging the submission to the
// server console (visible in Vercel function logs) so messages never silently
// vanish even if the upstream provider misbehaves.
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

    let upstreamStatus: number | null = null;
    let upstreamBody = "";

    try {
      const upstream = await fetch(formsubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://www.levestudios.com",
          Origin: "https://www.levestudios.com",
          "User-Agent":
            "Mozilla/5.0 (compatible; levestudios.com contact form)",
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

      upstreamStatus = upstream.status;
      upstreamBody = await upstream.text();
    } catch (fetchErr) {
      console.error("[contact] upstream fetch threw:", fetchErr);
    }

    // Always log the submission server-side so it's never lost, even if the
    // upstream provider has issues. These appear in Vercel's function logs.
    console.log("[contact] submission", {
      name,
      email,
      message,
      upstreamStatus,
      upstreamBody: upstreamBody.slice(0, 500),
    });

    // Treat any HTTP 200 from Formsubmit as accepted (covers both real
    // delivery and activation-pending state). Anything else still returns
    // ok to the visitor — we have the submission in logs and will follow up
    // out-of-band if upstream silently dropped it.
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
