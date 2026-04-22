"use client";
import Image from "next/image";
import { BackgroundPaths } from "./ui/background-paths";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="grain-texture"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "72px",
        background: "#080808",
      }}
    >
      {/* Animated background paths */}
      <BackgroundPaths />

      {/* Background radial glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(249,115,22,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(249,115,22,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* Text */}
        <div className="fade-up">
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            {h.badge}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            {h.line1}
            <br />
            <span className="text-gradient">{h.line2}</span>
            <br />
            {h.line3}
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            {h.desc}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#products" className="btn-primary">{h.btnProducts}</a>
            <a href="#contact" className="btn-outline">{h.btnQuote}</a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { value: h.stat1Val, label: h.stat1Label },
              { value: h.stat2Val, label: h.stat2Label },
              { value: h.stat3Val, label: h.stat3Label },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#f97316",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "0.25rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className="fade-up fade-up-2 hero-image-wrap"
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div
            style={{
              position: "absolute",
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              aspectRatio: "4/3",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(249,115,22,0.2)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(249,115,22,0.1)",
            }}
          >
            <Image
              src="/transformer.png"
              alt="Meghna Power Transformer"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 50%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                mixBlendMode: "multiply",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                background: "rgba(8,8,8,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(249,115,22,0.3)",
                borderRadius: "6px",
                padding: "0.75rem 1rem",
              }}
            >
              <div style={{ fontSize: "0.625rem", letterSpacing: "0.15em", color: "#f97316", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                {h.badgeLabel}
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#fff" }}>
                {h.badgeName}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #080808)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
