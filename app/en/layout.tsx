import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "./../globals.css";

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

const title = `${profile.name} — AI & Data Science Engineering Student · Seeking a PFE Internship`;
const description =
  "Fifth-year AI & Data Science engineering student at EMSI, focused on LLM fine-tuning, Document AI and Deep Learning. Seeking a six-month PFE internship.";

export const metadata: Metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  keywords: [profile.name, "AI Engineer", "Data Science", "Machine Learning", "Deep Learning", "NLP", "PyTorch", "Portfolio", "PFE internship"],
  ...(profile.siteUrl ? { alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } } } : {}),
  openGraph: {
    type: "profile",
    ...(profile.siteUrl ? { url: `${profile.siteUrl}/en` } : {}),
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    firstName: "Mohamed Aymane",
    lastName: "Badia",
    ...(profile.siteUrl ? {
      images: [{
        url: `${profile.siteUrl}/api/og?locale=en`,
        width: 1200,
        height: 630,
        alt: `${profile.name} — AI & Data Science Engineering Student seeking a PFE internship`,
      }],
    } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(profile.siteUrl ? { images: [`${profile.siteUrl}/api/og?locale=en`] } : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.dataset.theme='light'}catch(e){}`;

export default function EnglishRootLayout({ children }: LayoutProps<"/en">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
