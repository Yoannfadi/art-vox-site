import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldCursor from "@/components/GoldCursor";

// Polices (Playfair Display + Cormorant Garamond + Inter) vendorées localement
// en woff2 pour garantir un build reproductible et hors-ligne (le sandbox bloque
// Google Fonts). Sources : packages @fontsource.

// Playfair Display — titres de section & emphase (prestige), italique pour les
// citations / témoignages.
const display = localFont({
  src: [
    { path: "./fonts/playfair-display-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/playfair-display-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/playfair-display-latin-600-italic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/playfair-display-latin-700-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

// Cormorant Garamond — grand display du hero (serif élégant).
const serif = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});

// Inter — corps, nav, labels, boutons.
const sans = localFont({
  src: [
    { path: "./fonts/inter-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artvox.io"),
  title: {
    default: "Coaching Vocal & Artistique Professionnel – Art Vox",
    template: "%s",
  },
  description:
    "Art Vox accompagne les artistes avec un coaching vocal professionnel, un programme 360° unique et une expertise en santé vocale pour développer voix et carrière.",
  keywords: [
    "Art Vox",
    "coaching vocal",
    "coaching artistique",
    "programme 360",
    "santé vocale",
    "ostéopathie de la voix",
    "Vocalosteo",
    "professionnalisation artiste",
    "chant Paris",
    "carrière musicale",
  ],
  authors: [{ name: "ART VOX" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.artvox.io",
    siteName: "ART VOX",
    title: "Coaching Vocal & Artistique Professionnel – Art Vox",
    description:
      "Art Vox accompagne les artistes avec un coaching vocal professionnel, un programme 360° unique et une expertise en santé vocale pour développer voix et carrière.",
  },
  twitter: {
    card: "summary",
    title: "Coaching Vocal & Artistique Professionnel – Art Vox",
    description:
      "Art Vox accompagne les artistes avec un coaching vocal professionnel, un programme 360° unique et une expertise en santé vocale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${serif.variable} ${sans.variable}`}
    >
      <body className="font-sans antialiased">
        <GoldCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
