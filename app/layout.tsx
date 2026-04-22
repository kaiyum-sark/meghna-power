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

export const metadata: Metadata = {
  title: "Meghna Power | Substation & Electrical Equipment Specialists",
  description:
    "Meghna Power — manufacturer and supplier of transformers, CT-PT, Auto PFI, LT/HT panels, and industrial exhaust fans. Located in Chowala, Narsingdi, Bangladesh.",
  keywords: "transformer, CT-PT, Auto PFI, substation, LT panel, HT panel, industrial exhaust fan, Bangladesh, Narsingdi",
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
