import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  product?: unknown;
  location?: unknown;
  message?: unknown;
};

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 3000;

function cleanText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = cleanText(payload.name);
  const phone = cleanText(payload.phone);
  const email = cleanText(payload.email);
  const product = cleanText(payload.product);
  const location = cleanText(payload.location);
  const message = cleanText(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !message) {
    return NextResponse.json({ error: "Name and message required." }, { status: 400 });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Meghna Power Website" <${process.env.GMAIL_USER}>`,
      to: "kasark2100@gmail.com",
      replyTo: email || undefined,
      subject: `New Enquiry: ${product || "General"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone || "—"}`,
        `Email: ${email || "—"}`,
        `Product: ${product || "—"}`,
        `Location: ${location || "—"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#f97316;border-bottom:2px solid #f97316;padding-bottom:8px">
            New Enquiry — Meghna Power
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:140px"><strong>Name</strong></td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Phone</strong></td><td style="padding:8px 0">${escapeHtml(phone || "—")}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0">${escapeHtml(email || "—")}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Product</strong></td><td style="padding:8px 0">${escapeHtml(product || "—")}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Location</strong></td><td style="padding:8px 0">${escapeHtml(location || "—")}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top"><strong>Message</strong></td><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
          </table>
        </div>
      `,
    });
  } catch {
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
