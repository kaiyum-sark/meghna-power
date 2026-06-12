import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, productMap } from "../data";
import type { RatingRow } from "../data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productMap.get(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.metaDesc,
    alternates: { canonical: `https://meghnapower.biz/products/${slug}` },
    openGraph: {
      title: product.title,
      description: product.metaDesc,
      url: `https://meghnapower.biz/products/${slug}`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productMap.get(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDesc,
    image: `https://meghnapower.biz${product.image}`,
    brand: { "@type": "Brand", name: "Meghna Power" },
    manufacturer: { "@type": "Organization", name: "Meghna Power", url: "https://meghnapower.biz" },
    offers: {
      "@type": "Offer",
      url: `https://meghnapower.biz/products/${slug}`,
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "BDT",
      seller: { "@type": "Organization", name: "Meghna Power" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
      bestRating: "5",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meghnapower.biz" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://meghnapower.biz/#products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://meghnapower.biz/products/${slug}` },
    ],
  };

  const navLinks = [
    ["Home", "/"],
    ["Products", "/#products"],
    ["About", "/#about"],
    ["Contact", "/#contact"],
  ];

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-inter), sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(8,8,8,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(249,115,22,0.12)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <Image src="/logo.png" alt="Meghna Power" width={44} height={44} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1 }}>
                MEGHNA <span style={{ color: "#f97316" }}>POWER</span>
              </div>
              <div style={{ fontSize: "0.625rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Substation Specialists</div>
            </div>
          </a>
          <nav className="pp-nav" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="pp-nav-link">{label}</a>
            ))}
            <a href="tel:+8801741774141" className="btn-primary" style={{ fontSize: "0.8125rem", padding: "0.625rem 1.25rem" }}>Call Now</a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{ background: "#0b0b0b", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0.875rem 1.5rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
          <a href="/" className="pp-bc-link">Home</a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
          <a href="/#products" className="pp-bc-link">Products</a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "#080808", padding: "4rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "700px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", position: "relative", zIndex: 2 }} className="product-hero-grid">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(249,115,22,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(249,115,22,0.08)" }}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} priority />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, transparent 50%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(249,115,22,0.9)", color: "#fff", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.75rem", borderRadius: "3px" }}>
                {product.tag}
              </div>
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Meghna Power · {product.tag}</div>
            <h1 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff", marginBottom: "1.75rem" }}>
              {product.h1}
            </h1>
            {product.intro.map((para, i) => (
              <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>{para}</p>
            ))}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              <a href="/#contact" className="btn-primary">Get a Free Quote</a>
              <a href="tel:+8801741774141" className="btn-outline">Call +880 1741 774141</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section style={{ background: "#0b0b0b", padding: "5rem 1.5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>Technical Data</div>
            <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              SPECIFICATIONS
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: product.ratingsTable ? "1fr 1.2fr" : "1fr", gap: "2rem" }} className="specs-grid">
            <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={spec.label} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                      <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.8125rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", width: "42%", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                        {spec.label}
                      </td>
                      <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.9375rem", color: "rgba(255,255,255,0.8)" }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {product.ratingsTable && (
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ padding: "0.875rem 1.25rem", background: "rgba(249,115,22,0.08)", borderBottom: "1px solid rgba(249,115,22,0.15)" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316" }}>Standard Ratings Available</span>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                        {["Rating", "Phases", "HV", "LV", "No-Load Loss"].map((h) => (
                          <th key={h} style={{ padding: "0.75rem 1rem", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.ratingsTable.map((row: RatingRow, i: number) => (
                        <tr key={row.rating} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                          <td style={{ padding: "0.75rem 1rem", fontSize: "0.9375rem", fontWeight: 700, color: "#f97316" }}>{row.rating}</td>
                          <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>{row.phases}</td>
                          <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>{row.hv}</td>
                          <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>{row.lv}</td>
                          <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>{row.loss}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style={{ background: "#080808", padding: "5rem 1.5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>Where We Supply</div>
            <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              APPLICATIONS
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="app-grid">
            {product.applications.map((app) => (
              <div key={app.title} className="card-glow" style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2L9.5 6.5H14.5L10.5 9L12 13.5L8 11L4 13.5L5.5 9L1.5 6.5H6.5L8 2Z" stroke="#f97316" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{app.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.45)" }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0b0b0b", padding: "5rem 1.5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>Common Questions</div>
            <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              FREQUENTLY ASKED{" "}
              <span style={{ background: "linear-gradient(135deg, #f97316 0%, #fdba74 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>QUESTIONS</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {product.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1.75rem 0" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6875rem", fontWeight: 700, color: "#f97316", marginTop: "2px" }}>Q</span>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff", lineHeight: 1.4, margin: 0 }}>{faq.q}</h3>
                </div>
                <div style={{ paddingLeft: "2rem" }}>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.04) 60%, rgba(8,8,8,0) 100%)", borderTop: "1px solid rgba(249,115,22,0.2)", padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Ready to Order?</div>
          <h2 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            GET A FREE QUOTE<br />
            <span style={{ background: "linear-gradient(135deg, #f97316 0%, #fdba74 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>WITHIN 24 HOURS</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Tell us your requirement — kVA rating, voltage, quantity, site location — and our engineers will respond with a detailed technical and commercial proposal.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" className="btn-primary" style={{ fontSize: "0.9375rem", padding: "1rem 2.25rem" }}>Send Enquiry →</a>
            <a href="tel:+8801741774141" className="btn-outline" style={{ fontSize: "0.9375rem", padding: "0.9375rem 2.25rem" }}>📞 +880 1741 774141</a>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>
            Meghna Power · Chowala, Narsingdi, Bangladesh · Sat–Thu 9 AM – 6 PM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#050505", borderTop: "1px solid rgba(249,115,22,0.1)", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Meghna Power. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          <a href="/#products" className="pp-footer-link">All Products</a>
          <a href="/privacy-policy" className="pp-footer-link">Privacy Policy</a>
        </div>
      </footer>

      <style>{`
        .pp-nav-link {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pp-nav-link:hover { color: #f97316; }
        .pp-bc-link {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pp-bc-link:hover { color: #f97316; }
        .pp-footer-link {
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pp-footer-link:hover { color: #f97316; }
        @media (max-width: 900px) {
          .product-hero-grid { grid-template-columns: 1fr !important; }
          .specs-grid { grid-template-columns: 1fr !important; }
          .app-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .app-grid { grid-template-columns: 1fr !important; }
        }
        .pp-nav { display: flex; }
        @media (max-width: 640px) {
          .pp-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}
