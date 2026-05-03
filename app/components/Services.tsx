"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" style={{ background: "#0c0c0c", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-200px", top: "20%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{s.sectionLabel}</div>
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#fff", marginBottom: "0.75rem" }}>
            {s.heading1}{" "}<span className="text-gradient">{s.heading2}</span>
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>{s.subheading}</p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", gap: "0", margin: "3.5rem 0", overflowX: "auto", paddingBottom: "0.5rem" }}>
          {s.steps.map((step, i) => (
            <div key={step.n} style={{ flex: "1", minWidth: "160px", borderTop: i === 0 ? "2px solid #f97316" : "2px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem", paddingRight: "1.5rem", position: "relative" }}>
              <div style={{ position: "absolute", top: "-7px", left: 0, width: "12px", height: "12px", borderRadius: "50%", background: i === 0 ? "#f97316" : "rgba(255,255,255,0.2)", boxShadow: i === 0 ? "0 0 12px rgba(249,115,22,0.6)" : "none" }} />
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "2.25rem", fontWeight: 900, color: i === 0 ? "#f97316" : "rgba(255,255,255,0.12)", lineHeight: 1, marginBottom: "0.5rem" }}>{step.n}</div>
              <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: i === 0 ? "#fff" : "rgba(255,255,255,0.6)", marginBottom: "0.375rem" }}>{step.label}</div>
              <div style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(255,255,255,0.35)" }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="service-content-grid">
          <div>
            <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", marginBottom: "1rem" }}>
              {s.contentHeading1}{" "}<span className="text-gradient">{s.contentHeading2}</span>
            </h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}>{s.contentDesc}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {s.bullets.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ color: "#f97316", fontSize: "1.125rem" }}>✓</span>{item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">{s.quoteBtn}</a>
          </div>

          <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(249,115,22,0.15)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            <Image src="/pfi.png" alt="Auto PFI Panel" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#fff" }}>{s.imgTitle}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>{s.imgSub}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
