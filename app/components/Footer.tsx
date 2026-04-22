"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(249,115,22,0.15)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "400px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem 3rem", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "3rem" }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <Image src="/logo.png" alt="Meghna Power" width={44} height={44} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
                MEGHNA <span style={{ color: "#f97316" }}>POWER</span>
              </div>
              <div style={{ fontSize: "0.625rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>{f.tagline}</div>
            </div>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.35)", maxWidth: "320px", marginBottom: "1.5rem" }}>{f.desc}</p>
          <a href="tel:+8801741774141" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "6px", padding: "0.5rem 0.875rem", fontSize: "0.875rem", fontWeight: 600, color: "#f97316", textDecoration: "none" }}>
            📞 +880 1741 774141
          </a>
        </div>

        {/* Products */}
        <div>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316", marginBottom: "1.25rem" }}>{f.productsLabel}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {f.products.map((p) => (
              <a key={p} href="#products" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{p}</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316", marginBottom: "1.25rem" }}>{f.servicesLabel}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {f.services.map((s) => (
              <a key={s} href="#services" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Find Us */}
        <div>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316", marginBottom: "1.25rem" }}>{f.findUsLabel}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "0.25rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{f.workshopLabel}</div>
              <div style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                {f.workshopValue.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "0.25rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{f.hoursLabel}</div>
              <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                {f.hoursValue.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} {f.copyright}</div>
        <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>{f.taglineBottom}</div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
