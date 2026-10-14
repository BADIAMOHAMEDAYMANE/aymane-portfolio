import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "../globals.css";

// Self-hosted variable fonts (SIL OFL) — no request to Google at runtime or build time.
const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jetbrains = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

const title = `${profile.name} — Ingénieur IA & Data Science · Recherche stage PFE`;
const description =
  "Élève-ingénieur IA & Data Science à l'EMSI, spécialisé en LLM fine-tuning, Document AI et Deep Learning. Recherche un stage PFE de 6 mois.";

export const metadata: Metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Ingénieur IA",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "PyTorch",
    "Portfolio",
    "Stage PFE",
  ],
  ...(profile.siteUrl ? { alternates: { canonical: "/", languages: { fr: "/", en: "/en" } } } : {}),
  openGraph: {
    type: "profile",
    ...(profile.siteUrl ? { url: profile.siteUrl } : {}),
    siteName: profile.name,
    title,
    description,
    locale: "fr_MA",
    firstName: "Mohamed Aymane",
    lastName: "Badia",
    ...(profile.siteUrl
      ? {
          images: [{
            url: `${profile.siteUrl}/api/og`,
            width: 1200,
            height: 630,
            alt: `${profile.name} — Élève-ingénieur IA & Data Science, recherche stage PFE`,
          }],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(profile.siteUrl ? { images: [`${profile.siteUrl}/api/og`] } : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

// Applies the saved theme before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.dataset.theme='light'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
