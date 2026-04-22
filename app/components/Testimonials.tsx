"use client";
import { useLanguage } from "../context/LanguageContext";

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f97316", fontSize: "1rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const ts = t.testimonials;

  return (
    <section id="testimonials" style={{ background: "#080808", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40%", left: 0, right: 0, height: "200px", background: "linear-gradient(90deg, rgba(249,115,22,0.03) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{ts.sectionLabel}</div>
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#fff" }}>
            {ts.heading1}{" "}<span className="text-gradient">{ts.heading2}</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="testi-grid">
          {ts.items.map((item) => (
            <div key={item.name} className="card-glow" style={{ background: "#161616", borderRadius: "8px", padding: "2rem", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-0.5rem", right: "1.5rem", fontFamily: "Georgia, serif", fontSize: "6rem", color: "rgba(249,115,22,0.08)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>"</div>
              <Stars count={5} />
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem", flex: 1 }}>{item.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #f97316, #c2500a)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-barlow), sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#fff", flexShrink: 0 }}>
                  {item.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#fff" }}>{item.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ marginTop: "4rem", background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(194,80,10,0.06) 100%)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "12px", padding: "3rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>{ts.ctaLabel}</div>
            <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>
              {ts.ctaHeading1}{" "}<span className="text-gradient">{ts.ctaHeading2}</span>
            </h3>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">{ts.quoteBtn}</a>
            <a href="tel:+8801741774141" className="btn-outline">+880 1741 774141</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
