import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";
import { copy } from "@/data/i18n";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI & Data Science Engineering Student",
  email: `mailto:${profile.email}`,
  ...(profile.siteUrl ? { url: `${profile.siteUrl}/en` } : {}),
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Data Science"],
};

export default function EnglishHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        {copy("en").skipToContent}
      </a>
      <Navbar locale="en" languageHref="/" />
      <main id="main">
        <Hero locale="en" />
        <About locale="en" />
        <Projects locale="en" />
        <Skills locale="en" />
        <Experience locale="en" />
        <GitHub locale="en" />
        <Contact locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
