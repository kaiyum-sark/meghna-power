import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const SITE_URL = "https://meghnapower.com.bd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Meghna Power | Transformer & Substation Manufacturer, Narsingdi Bangladesh",
    template: "%s | Meghna Power",
  },
  description:
    "Meghna Power manufactures and repairs transformers, CT-PT units, Auto PFI panels, LT/HT switchgear, and industrial exhaust fans. BPDB-approved vendor based in Chowala, Narsingdi, Bangladesh. 500+ projects, 15+ years experience.",
  keywords: [
    "transformer manufacturer Bangladesh",
    "substation equipment Narsingdi",
    "CT-PT unit Bangladesh",
    "Auto PFI panel",
    "LT panel manufacturer",
    "HT switchgear Bangladesh",
    "industrial exhaust fan",
    "BPDB approved vendor",
    "power transformer 25kVA 5000kVA",
    "Meghna Power Chowala",
    "electrical equipment Bangladesh",
    "transformer repair Bangladesh",
  ],
  authors: [{ name: "Meghna Power", url: SITE_URL }],
  creator: "Meghna Power",
  publisher: "Meghna Power",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "en-BD": SITE_URL, "bn-BD": `${SITE_URL}/bn` },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Meghna Power",
    title: "Meghna Power | Transformer & Substation Manufacturer, Bangladesh",
    description:
      "BPDB-approved manufacturer of transformers, CT-PT units, Auto PFI panels, LT/HT panels, and industrial exhaust fans. Based in Narsingdi, Bangladesh. 500+ projects completed.",
    locale: "en_BD",
    images: [
      {
        url: "/transformer.png",
        width: 1200,
        height: 630,
        alt: "Meghna Power — Power Transformer manufactured in Narsingdi, Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghna Power | Transformer & Substation Manufacturer, Bangladesh",
    description:
      "BPDB-approved manufacturer of transformers, CT-PT units, Auto PFI panels, LT/HT panels, and industrial exhaust fans. Narsingdi, Bangladesh.",
    images: ["/transformer.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "industrial manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen antialiased" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
