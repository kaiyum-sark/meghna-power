"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const icons = [
  <svg key="0" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#f97316" strokeWidth="1.5"/></svg>,
  <svg key="1" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  <svg key="2" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#f97316" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="3" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" style={{ background: "#080808", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-200px", top: "50%", transform: "translateY(-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", position: "relative", zIndex: 1 }} className="about-grid">
        {/* Image side */}
        <div style={{ position: "relative" }} className="about-img reveal">
          <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/5", border: "1px solid rgba(249,115,22,0.15)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            <Image src="/transformer.png" alt="Meghna Power facility" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, transparent 60%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
          </div>
          <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", background: "#f97316", borderRadius: "8px", padding: "1.5rem", textAlign: "center", boxShadow: "0 16px 40px rgba(249,115,22,0.4)" }}>
            <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "3rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{a.badgeNum}</div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginTop: "0.25rem" }}>{a.badgeLabel}</div>
          </div>
        </div>

        {/* Text side */}
        <div className="reveal" data-delay="0.15">
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{a.sectionLabel}</div>
          <div className="divider-line" />
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", marginBottom: "1.5rem" }}>
            {a.heading1}{" "}<span className="text-gradient">{a.heading2}</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>{a.p1}</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>{a.p2}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {a.features.map((f, i) => (
              <div key={f.title} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(249,115,22,0.1)", borderRadius: "6px", padding: "0.625rem", flexShrink: 0 }}>{icons[i]}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#fff", marginBottom: "0.25rem" }}>{f.title}</div>
                  <div style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-img { margin-bottom: 2rem; }
        }
      `}</style>
    </section>
  );
}
