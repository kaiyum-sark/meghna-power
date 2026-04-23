"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, t, toggle } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(8,8,8,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(249,115,22,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src="/logo.png" alt="Meghna Power" width={48} height={48} style={{ objectFit: "contain" }} />
          <div>
            <div
              style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "1.25rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              MEGHNA <span style={{ color: "#f97316" }}>POWER</span>
            </div>
            <div style={{ fontSize: "0.625rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
              {t.nav.home === "হোম" ? "সাবস্টেশন বিশেষজ্ঞ" : "Substation Specialists"}
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side: lang toggle + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
          {/* Language Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(249,115,22,0.25)",
              borderRadius: "999px",
              padding: "3px",
              cursor: "pointer",
              gap: 0,
              position: "relative",
            }}
          >
            <span
              style={{
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                background: lang === "en" ? "#f97316" : "transparent",
                color: lang === "en" ? "#fff" : "rgba(255,255,255,0.45)",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
            >
              EN
            </span>
            <span
              style={{
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                background: lang === "bn" ? "#f97316" : "transparent",
                color: lang === "bn" ? "#fff" : "rgba(255,255,255,0.45)",
                transition: "background 0.2s ease, color 0.2s ease",
                fontFamily: "'Noto Sans Bengali', sans-serif",
              }}
            >
              বাং
            </span>
          </button>

          <a
            href="tel:+8801741774141"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.625rem 1.5rem" }}
          >
            {t.nav.callNow}
          </a>
        </div>

        {/* Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="show-mobile">
          {/* Mobile lang toggle */}
          <button
            onClick={toggle}
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(249,115,22,0.25)",
              borderRadius: "999px",
              padding: "3px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                padding: "0.25rem 0.625rem",
                borderRadius: "999px",
                fontSize: "0.6875rem",
                fontWeight: 700,
                background: lang === "en" ? "#f97316" : "transparent",
                color: lang === "en" ? "#fff" : "rgba(255,255,255,0.45)",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
            >
              EN
            </span>
            <span
              style={{
                padding: "0.25rem 0.625rem",
                borderRadius: "999px",
                fontSize: "0.6875rem",
                fontWeight: 700,
                background: lang === "bn" ? "#f97316" : "transparent",
                color: lang === "bn" ? "#fff" : "rgba(255,255,255,0.45)",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
            >
              বাং
            </span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            aria-label="Menu"
          >
            <div style={{ width: 24, height: 2, background: "#f97316", marginBottom: 6 }} />
            <div style={{ width: 24, height: 2, background: "#f97316", marginBottom: 6 }} />
            <div style={{ width: 16, height: 2, background: "#f97316" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "#111",
            borderTop: "1px solid rgba(249,115,22,0.15)",
            padding: "1rem 1.5rem 1.5rem",
            flexDirection: "column",
          }}
          className="show-mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+8801741774141"
            className="btn-primary"
            style={{ marginTop: "1rem", display: "block", textAlign: "center" }}
          >
            {t.nav.callNow}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: flex !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
