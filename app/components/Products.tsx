"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const images = ["/transformer.png", "/ct_pt.png", "/pfi.png", "/industrial_exhaust_fan.png", "/lt.png", "/solar.png"];

export default function Products() {
  const { t } = useLanguage();
  const p = t.products;

  return (
    <section
      id="products"
      style={{ background: "#0b0b0b", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{p.sectionLabel}</div>
          <h2
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#fff", marginBottom: "1rem",
            }}
          >
            {p.heading1} <span className="text-gradient">{p.heading2}</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            {p.subheading}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {p.items.map((item, i) => (
            <div
              key={item.name}
              className="card-glow reveal"
              data-delay={String((i % 3) * 0.1)}
              style={{ background: "#161616", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div style={{ height: "200px", position: "relative", background: "#0f0f0f", overflow: "hidden" }}>
                {images[i] ? (
                  <Image src={images[i]!} alt={item.name} fill style={{ objectFit: "cover" }} />
                ) : (
                  <div
                    style={{
                      position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                      background: "radial-gradient(circle at center, rgba(249,115,22,0.08) 0%, transparent 70%)",
                    }}
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <rect x="8" y="20" width="48" height="28" rx="2" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" fill="none"/>
                      <rect x="16" y="8" width="32" height="16" rx="2" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" fill="none"/>
                      <line x1="32" y1="4" x2="32" y2="8" stroke="rgba(249,115,22,0.6)" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="32" cy="32" r="6" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" fill="none"/>
                      <line x1="24" y1="48" x2="24" y2="56" stroke="rgba(249,115,22,0.4)" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="40" y1="48" x2="40" y2="56" stroke="rgba(249,115,22,0.4)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,22,22,0.9) 0%, rgba(22,22,22,0.1) 60%)" }} />
                <div
                  style={{
                    position: "absolute", top: "0.75rem", left: "0.75rem",
                    background: "rgba(249,115,22,0.9)", color: "#fff",
                    fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "0.25rem 0.625rem", borderRadius: "3px",
                  }}
                >
                  {item.tag}
                </div>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.375rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: "0.625rem" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem" }}>
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  style={{
                    fontSize: "0.8125rem", fontWeight: 700, color: "#f97316", textDecoration: "none",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    display: "inline-flex", alignItems: "center", gap: "0.375rem", transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "0.625rem"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "0.375rem"; }}
                >
                  {p.enquire}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
