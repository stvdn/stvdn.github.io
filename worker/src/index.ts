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

const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "txt", "png", "jpg", "jpeg", "gif", "webp", "zip"];

function corsHeaders(req: Request, env: Env): Record<string, string> {
  const allowed = (env.ALLOWED_ORIGIN || "*").split(",").map((o) => o.trim());
  const origin = req.headers.get("Origin") ?? "";
  const allowAll = allowed.includes("*");
  const allowedOrigin = allowAll ? "*" : allowed.includes(origin) ? origin : "";
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
  if (allowedOrigin) headers["Access-Control-Allow-Origin"] = allowedOrigin;
  return headers;
}

function json(body: unknown, status: number, req: Request, env: Env): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(req, env) },
  });
}

interface Attachment {
  filename?: unknown;
  content?: unknown;
  contentType?: unknown;
}

interface Payload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  attachment?: Attachment;
}

const worker = {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(req, env) });
    }

    if (req.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, req, env);
    }

    let payload: Payload;
    try {
      payload = (await req.json()) as Payload;
    } catch {
      return json({ error: "Invalid JSON" }, 400, req, env);
    }

    if (payload.website) {
      return json({ ok: true }, 200, req, env);
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
      return json({ error: "validation", fields: errors }, 422, req, env);
    }

    let attachment: { filename: string; content: string; contentType: string } | null = null;
    if (payload.attachment) {
      const att = payload.attachment;
      const filename = String(att.filename ?? "").trim();
      const content = String(att.content ?? "");
      const contentType = String(att.contentType ?? "application/octet-stream");

      const ext = filename.split(".").pop()?.toLowerCase() ?? "";
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return json({ error: "validation", fields: { attachment: "type" } }, 422, req, env);
      }
      if (content.length > MAX_ATTACHMENT_SIZE * 1.37) {
        return json({ error: "validation", fields: { attachment: "size" } }, 422, req, env);
      }
      attachment = { filename, content, contentType };
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.FROM_EMAIL) {
      return json({ error: "Server not configured" }, 500, req, env);
    }

    const html = [
      `<h3>New message from your portfolio</h3>`,
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
      `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
      `<p><strong>Message:</strong></p><pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>`,
    ].join("\n");

    const emailBody: Record<string, unknown> = {
      from: env.FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    };

    if (attachment) {
      emailBody.attachments = [
        {
          filename: attachment.filename,
          content: attachment.content,
          content_type: attachment.contentType,
        },
      ];
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!resendRes.ok) {
      const text = await resendRes.text();
      return json({ error: "Email provider error", detail: text }, 502, req, env);
    }

    return json({ ok: true }, 200, req, env);
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