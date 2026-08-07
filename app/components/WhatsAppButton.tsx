"use client";
import { useState, useEffect } from "react";

const PHONE = "8801741774141";
const MESSAGE = encodeURIComponent("Hello! I'm interested in your products. Can you help me?");
const HREF = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as Window & { fbq?: (...a: unknown[]) => void }).fbq) {
      (window as Window & { fbq?: (...a: unknown[]) => void }).fbq!("track", "Contact");
    }
  };

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #25d366 0%, #128c4e 100%)",
        boxShadow: "0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.6)",
        transition: "opacity 0.4s cubic-bezier(0.34,1.56,0.64,1), transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      {/* pulse ring */}
      {pulse && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid #25d366",
            animation: "wa-pulse 1.4s ease-out infinite",
          }}
        />
      )}
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.643 4.788 1.77 6.8L2 30l7.394-1.738A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.89-1.61l-.422-.25-4.388 1.031 1.056-4.275-.275-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.344-8.663c-.347-.174-2.055-1.013-2.374-1.129-.319-.116-.55-.174-.782.174-.231.347-.896 1.129-1.099 1.36-.202.232-.405.26-.752.087-.347-.174-1.464-.54-2.787-1.72-1.03-.918-1.726-2.052-1.928-2.399-.203-.347-.022-.535.152-.708.156-.155.347-.405.52-.608.174-.202.232-.347.348-.579.115-.231.057-.434-.029-.608-.087-.174-.782-1.884-1.071-2.58-.282-.677-.569-.585-.782-.596l-.666-.011c-.231 0-.608.087-.926.434-.319.347-1.215 1.187-1.215 2.895s1.244 3.356 1.417 3.588c.174.231 2.45 3.74 5.937 5.244.83.358 1.477.572 1.982.733.833.264 1.591.226 2.19.137.668-.1 2.055-.84 2.345-1.652.29-.811.29-1.507.203-1.652-.086-.144-.318-.231-.665-.405z" />
      </svg>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.7); opacity: 0;   }
        }
      `}</style>
    </a>
  );
}
