"use client";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section id="why" style={{ position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #c2500a 100%)",
          padding: "3.5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.5rem" }}>{w.sectionLabel}</div>
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#fff" }}>
            {w.heading1}<br />{w.heading2}
          </h2>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "5rem" }} className="why-grid">
          {w.reasons.map((r) => (
            <div key={r.num} className="card-glow" style={{ background: "#161616", borderRadius: "8px", padding: "2rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "3.5rem", fontWeight: 900, color: "rgba(249,115,22,0.2)", lineHeight: 1, marginBottom: "1rem" }}>{r.num}</div>
              <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.375rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{r.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>{r.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "320px", background: "#161616", border: "1px solid rgba(249,115,22,0.15)" }} className="banner-grid">
          <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>{w.strengthLabel}</div>
            <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "2rem", fontWeight: 900, lineHeight: 1.1, color: "#fff", marginBottom: "1rem" }}>
              {w.strengthHeading1}{" "}<span className="text-gradient">{w.strengthHeading2}</span>
            </h3>
            <a href="#contact" className="btn-primary" style={{ alignSelf: "flex-start" }}>{w.expertBtn}</a>
          </div>

          <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem", borderLeft: "1px solid rgba(249,115,22,0.1)" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.5rem" }}>{w.certLabel}</div>
            {w.certifications.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .banner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
