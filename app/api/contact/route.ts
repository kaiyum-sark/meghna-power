import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, email, product, location, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Name and message required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Meghna Power Website" <${process.env.GMAIL_USER}>`,
    to: "kasark2100@gmail.com",
    subject: `New Enquiry: ${product || "General"} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#f97316;border-bottom:2px solid #f97316;padding-bottom:8px">
          New Enquiry — Meghna Power
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:140px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Phone</strong></td><td style="padding:8px 0">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0">${email || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Product</strong></td><td style="padding:8px 0">${product || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Location</strong></td><td style="padding:8px 0">${location || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;vertical-align:top"><strong>Message</strong></td><td style="padding:8px 0">${message}</td></tr>
        </table>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
