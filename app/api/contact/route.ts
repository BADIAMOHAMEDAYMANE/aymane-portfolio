import { profile } from "@/data/profile";

const MAX_BODY_LENGTH = 12_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;
  const payload = value as Record<string, unknown>;
  return (
    typeof payload.name === "string" &&
    typeof payload.email === "string" &&
    typeof payload.subject === "string" &&
    typeof payload.message === "string" &&
    (payload.website === undefined || typeof payload.website === "string")
  );
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_LENGTH) {
    return Response.json({ error: "Request is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isContactPayload(payload)) {
    return Response.json({ error: "Please complete all fields." }, { status: 400 });
  }

  if (payload.website?.trim()) {
    console.warn("Contact submission rejected by the honeypot.");
    return Response.json({ error: "Invalid contact submission." }, { status: 400 });
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const subject = payload.subject.trim().replace(/[\r\n]+/g, " ");
  const replyName = name.replace(/[\r\n<>"]/g, " ").trim();
  const message = payload.message.trim();

  if (
    !name ||
    name.length > 100 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    !subject ||
    subject.length > 150 ||
    !message ||
    message.length > 5000
  ) {
    return Response.json({ error: "Please check the submitted fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact email is not configured: set RESEND_API_KEY and RESEND_FROM_EMAIL.");
    return Response.json({ error: "Email service is not configured." }, { status: 503 });
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [profile.email],
        reply_to: `${replyName} <${email}>`,
        subject: `Portfolio contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Resend email request failed.", error);
    return Response.json({ error: "Unable to send the message right now." }, { status: 502 });
  }

  if (!resendResponse.ok) {
    console.error(`Resend rejected the contact email with status ${resendResponse.status}.`);
    return Response.json({ error: "Unable to send the message right now." }, { status: 502 });
  }

  return Response.json({ sent: true });
}
