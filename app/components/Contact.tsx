"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", location: "", message: "" });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "6px", padding: "0.875rem 1rem", fontSize: "0.9375rem", color: "#fff",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem",
  };

  const contactItems = [
    {
      icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
      label: c.phoneLabel, value: "+880 1741 774141", href: "tel:+8801741774141",
    },
    {
      icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="#f97316" strokeWidth="1.5"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="#f97316" strokeWidth="1.5"/></svg>,
      label: c.addressLabel, value: c.addressValue, href: null,
    },
    {
      icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      label: c.hoursLabel, value: c.hoursValue, href: null,
    },
  ];

  return (
    <section id="contact" style={{ background: "#080808", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
        {/* Left */}
        <div>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{c.sectionLabel}</div>
          <div className="divider-line" />
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", marginBottom: "1.25rem" }}>
            {c.heading1}{" "}<span className="text-gradient">{c.heading2}</span>
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: "2.5rem" }}>{c.desc}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {contactItems.map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(249,115,22,0.1)", borderRadius: "8px", padding: "0.75rem", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.25rem" }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", textDecoration: "none" }}>{item.value}</a>
                    : <div style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{item.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: "8px", overflow: "hidden", position: "relative", aspectRatio: "16/9", border: "1px solid rgba(249,115,22,0.15)" }}>
            <Image src="/ct_pt.png" alt="CT-PT Unit" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#fff" }}>{c.imgTitle}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>{c.imgSub}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "#161616", borderRadius: "12px", padding: "2.5rem", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "0.375rem" }}>{c.formTitle}</div>
          <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", marginBottom: "2rem" }}>{c.formSub}</div>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
              <div>
                <label style={labelStyle}>{c.labelName}</label>
                <input name="name" value={form.name} onChange={handle} placeholder={c.placeholderName} required style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{c.labelPhone}</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder={c.placeholderPhone} style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>{c.labelEmail}</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder={c.placeholderEmail} style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
              <div>
                <label style={labelStyle}>{c.labelProduct}</label>
                <select name="product" value={form.product} onChange={handle} style={{ ...inputStyle, appearance: "none" }}>
                  <option value="" style={{ background: "#1a1a1a" }}>{c.placeholderProduct}</option>
                  {c.products.map((p) => <option key={p} value={p} style={{ background: "#1a1a1a" }}>{p}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>{c.labelLocation}</label>
                <input name="location" value={form.location} onChange={handle} placeholder={c.placeholderLocation} style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>{c.labelMessage}</label>
              <textarea name="message" value={form.message} onChange={handle} placeholder={c.placeholderMessage} rows={4} style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }} />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", fontSize: "1rem", padding: "1rem", cursor: "pointer", border: "none" }}>
              {c.submitBtn}
            </button>

            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
              {c.orCall}{" "}
              <a href="tel:+8801741774141" style={{ color: "#f97316", textDecoration: "none" }}>+880 1741 774141</a>
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
