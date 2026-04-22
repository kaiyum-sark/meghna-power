"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <section id="faq" style={{ background: "#090909", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{f.sectionLabel}</div>
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#fff" }}>
            {f.heading1}{" "}<span className="text-gradient">{f.heading2}</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {f.items.map((item, i) => (
            <div key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0.25rem 0" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.375rem 0", background: "none", border: "none", cursor: "pointer", gap: "1rem", textAlign: "left" }}
              >
                <span style={{ fontSize: "1.0625rem", fontWeight: 600, color: open === i ? "#f97316" : "#fff", lineHeight: 1.4, transition: "color 0.2s ease" }}>
                  {item.q}
                </span>
                <span style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1.5px solid ${open === i ? "#f97316" : "rgba(255,255,255,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: open === i ? "#f97316" : "rgba(255,255,255,0.5)", fontSize: "1.125rem", lineHeight: 1, transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: "1.5rem", fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", paddingRight: "2rem" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
