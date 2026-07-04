export interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  FROM_EMAIL: string;
  ALLOWED_ORIGIN: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LEN: Record<string, number> = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
};

function corsHeaders(env: Env): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(body: unknown, status: number, env: Env): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(env) },
  });
}

interface Payload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
}

const worker = {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    if (req.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, env);
    }

    let payload: Payload;
    try {
      payload = (await req.json()) as Payload;
    } catch {
      return json({ error: "Invalid JSON" }, 400, env);
    }

    if (payload.website) {
      return json({ ok: true }, 200, env);
    }

    const name = String(payload.name ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const subject = String(payload.subject ?? "").trim();
    const message = String(payload.message ?? "").trim();

    const errors: Record<string, string> = {};
    if (name.length < 1 || name.length > MAX_LEN.name) errors.name = "invalid";
    if (!EMAIL_RE.test(email) || email.length > MAX_LEN.email) errors.email = "invalid";
    if (subject.length < 1 || subject.length > MAX_LEN.subject) errors.subject = "invalid";
    if (message.length < 1 || message.length > MAX_LEN.message) errors.message = "invalid";

    if (Object.keys(errors).length > 0) {
      return json({ error: "validation", fields: errors }, 422, env);
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.FROM_EMAIL) {
      return json({ error: "Server not configured" }, 500, env);
    }

    const html = [
      `<h3>New message from your portfolio</h3>`,
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
      `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
      `<p><strong>Message:</strong></p><pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>`,
    ].join("\n");

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: env.CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      const text = await resendRes.text();
      return json({ error: "Email provider error", detail: text }, 502, env);
    }

    return json({ ok: true }, 200, env);
  },
};

export default worker;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}